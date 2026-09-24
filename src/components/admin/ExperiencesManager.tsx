import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'
import { uploadImage } from '../../lib/storage'
import StorageImage from '../StorageImage'
import { Plus, Edit2, Trash2, X, ArrowUp, ArrowDown } from 'lucide-react'

type Experience = {
    id: number
    role: string
    organization: string
    start_date: string
    end_date: string | null
    is_current: boolean
    description: string
    image_url: string
    project_link: string
    sort_order: number
}

export default function ExperiencesManager() {
    const [experiences, setExperiences] = useState<Experience[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    
    const [isFormOpen, setIsFormOpen] = useState(false)
    const [editingExp, setEditingExp] = useState<Experience | null>(null)
    const [isSaving, setIsSaving] = useState(false)

    // Form states
    const [role, setRole] = useState('')
    const [organization, setOrganization] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [isCurrent, setIsCurrent] = useState(false)
    const [description, setDescription] = useState('')
    const [projectLink, setProjectLink] = useState('')
    const [imageFile, setImageFile] = useState<File | null>(null)
    const [currentImageUrl, setCurrentImageUrl] = useState('')

    useEffect(() => {
        fetchExperiences()
    }, [])

    const fetchExperiences = async () => {
        setLoading(true)
        const { data, error } = await supabase
            .from('experiences')
            .select('*')
            .order('sort_order', { ascending: true })
            .order('start_date', { ascending: false })
            
        if (error) {
            setError(error.message)
        } else {
            setExperiences(data || [])
        }
        setLoading(false)
    }

    const handleOpenForm = (exp?: Experience) => {
        setError('')
        if (exp) {
            setEditingExp(exp)
            setRole(exp.role)
            setOrganization(exp.organization)
            setStartDate(exp.start_date ? exp.start_date.split('T')[0] : '')
            setEndDate(exp.end_date ? exp.end_date.split('T')[0] : '')
            setIsCurrent(exp.is_current)
            setDescription(exp.description || '')
            setProjectLink(exp.project_link || '')
            setCurrentImageUrl(exp.image_url || '')
        } else {
            setEditingExp(null)
            setRole('')
            setOrganization('')
            setStartDate('')
            setEndDate('')
            setIsCurrent(false)
            setDescription('')
            setProjectLink('')
            setCurrentImageUrl('')
        }
        setImageFile(null)
        setIsFormOpen(true)
    }

    const handleCloseForm = () => {
        setIsFormOpen(false)
        setImageFile(null)
    }

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        setIsSaving(true)

        try {
            let finalImageUrl = currentImageUrl

            if (imageFile) {
                finalImageUrl = await uploadImage(imageFile, 'experiences')
            }

            const expData = {
                role,
                organization,
                start_date: startDate || null,
                end_date: (isCurrent || !endDate) ? null : endDate,
                is_current: isCurrent,
                description,
                project_link: projectLink,
                image_url: finalImageUrl,
                updated_at: new Date().toISOString()
            }

            if (editingExp) {
                const { error: updateError } = await supabase
                    .from('experiences')
                    .update(expData)
                    .eq('id', editingExp.id)
                
                if (updateError) throw updateError
            } else {
                // Determine new sort_order (last item + 10)
                const maxOrder = experiences.length > 0 ? Math.max(...experiences.map(e => e.sort_order || 0)) : 0
                
                const { error: insertError } = await supabase
                    .from('experiences')
                    .insert([{ 
                        ...expData, 
                        sort_order: maxOrder + 10,
                        created_at: new Date().toISOString() 
                    }])
                
                if (insertError) throw insertError
            }

            await fetchExperiences()
            handleCloseForm()
        } catch (err: any) {
            setError(err.message || 'An error occurred while saving.')
        } finally {
            setIsSaving(false)
        }
    }

    const handleDelete = async (id: number) => {
        if (!confirm('Are you sure you want to delete this experience?')) return

        try {
            const { error: deleteError } = await supabase
                .from('experiences')
                .delete()
                .eq('id', id)
            
            if (deleteError) throw deleteError
            await fetchExperiences()
        } catch (err: any) {
            alert(err.message || 'Failed to delete experience')
        }
    }

    const moveItem = async (index: number, direction: 'up' | 'down') => {
        if (direction === 'up' && index === 0) return
        if (direction === 'down' && index === experiences.length - 1) return

        const newArr = [...experiences]
        const swapIndex = direction === 'up' ? index - 1 : index + 1
        
        // Swap sort_order
        const tempOrder = newArr[index].sort_order
        newArr[index].sort_order = newArr[swapIndex].sort_order
        newArr[swapIndex].sort_order = tempOrder

        // Optimistic UI update
        // We swap them in array so they render correctly immediately
        const temp = newArr[index]
        newArr[index] = newArr[swapIndex]
        newArr[swapIndex] = temp
        setExperiences(newArr)

        try {
            // Update both in DB
            await supabase.from('experiences').update({ sort_order: newArr[index].sort_order }).eq('id', newArr[index].id)
            await supabase.from('experiences').update({ sort_order: newArr[swapIndex].sort_order }).eq('id', newArr[swapIndex].id)
        } catch (err) {
            console.error('Failed to swap orders', err)
            // Revert on fail
            fetchExperiences()
        }
    }

    if (loading && experiences.length === 0) return <div className="text-gray-500">Loading experiences...</div>

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Experiences</h2>
                <button
                    onClick={() => handleOpenForm()}
                    className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-sm text-white transition hover:bg-gray-800"
                >
                    <Plus size={16} /> Add Experience
                </button>
            </div>

            {error && !isFormOpen && (
                <div className="mb-4 rounded-lg bg-red-50 p-4 text-sm text-red-600">
                    {error}
                </div>
            )}

            {isFormOpen ? (
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm mb-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-medium">{editingExp ? 'Edit Experience' : 'New Experience'}</h3>
                        <button onClick={handleCloseForm} className="text-gray-400 hover:text-gray-600">
                            <X size={20} />
                        </button>
                    </div>

                    <form onSubmit={handleSave} className="space-y-4">
                        {error && (
                            <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
                                {error}
                            </div>
                        )}
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Role / Position *</label>
                                <input
                                    type="text"
                                    required
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-black outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Organization *</label>
                                <input
                                    type="text"
                                    required
                                    value={organization}
                                    onChange={(e) => setOrganization(e.target.value)}
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-black outline-none"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Start Date *</label>
                                <input
                                    type="date"
                                    required
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-black outline-none"
                                />
                            </div>
                            <div>
                                <div className="flex items-center justify-between mb-1">
                                    <label className="block text-sm font-medium text-gray-700">End Date</label>
                                    <label className="flex items-center gap-1.5 text-xs text-gray-600 cursor-pointer">
                                        <input 
                                            type="checkbox" 
                                            checked={isCurrent}
                                            onChange={(e) => setIsCurrent(e.target.checked)}
                                        />
                                        Current Role
                                    </label>
                                </div>
                                <input
                                    type="date"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                    disabled={isCurrent}
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-black outline-none disabled:bg-gray-100 disabled:text-gray-400"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Description (Optional)</label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                rows={2}
                                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-black outline-none resize-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Project Link (Optional)</label>
                            <input
                                type="url"
                                value={projectLink}
                                onChange={(e) => setProjectLink(e.target.value)}
                                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-black outline-none"
                                placeholder="https://..."
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Image / Logo (Optional)</label>
                            <div className="flex items-center gap-4">
                                {currentImageUrl && !imageFile && (
                                    <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <StorageImage path={currentImageUrl} className="h-full w-full object-cover" />
                                    </div>
                                )}
                                <div className="flex-1">
                                    <input
                                        type="file"
                                        accept="image/jpeg,image/png,image/webp"
                                        onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                                        className="w-full text-sm text-gray-500 file:mr-4 file:rounded-md file:border-0 file:bg-gray-100 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-gray-700 hover:file:bg-gray-200"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end pt-4">
                            <button
                                type="button"
                                onClick={handleCloseForm}
                                disabled={isSaving}
                                className="mr-3 px-4 py-2 text-sm text-gray-600 hover:text-gray-900"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={isSaving}
                                className="rounded-lg bg-black px-6 py-2 text-sm text-white hover:bg-gray-800 disabled:opacity-50"
                            >
                                {isSaving ? 'Saving...' : 'Save Experience'}
                            </button>
                        </div>
                    </form>
                </div>
            ) : null}

            <div className="space-y-3">
                {experiences.map((exp, index) => (
                    <div key={exp.id} className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition">
                        <div className="flex items-center gap-4">
                            <div className="flex flex-col gap-1 text-gray-400">
                                <button 
                                    onClick={() => moveItem(index, 'up')}
                                    disabled={index === 0}
                                    className="p-0.5 hover:text-black disabled:opacity-30 disabled:hover:text-gray-400 transition"
                                >
                                    <ArrowUp size={14} />
                                </button>
                                <button 
                                    onClick={() => moveItem(index, 'down')}
                                    disabled={index === experiences.length - 1}
                                    className="p-0.5 hover:text-black disabled:opacity-30 disabled:hover:text-gray-400 transition"
                                >
                                    <ArrowDown size={14} />
                                </button>
                            </div>
                            
                            {exp.image_url ? (
                                <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-md border border-gray-100 bg-gray-50">
                                    <StorageImage path={exp.image_url} className="h-full w-full object-cover" />
                                </div>
                            ) : (
                                <div className="h-10 w-10 flex-shrink-0 rounded-md border border-gray-100 bg-gray-50 flex items-center justify-center">
                                    <span className="text-gray-400 text-xs text-center leading-none">No<br/>img</span>
                                </div>
                            )}
                            
                            <div>
                                <div className="flex items-center gap-2">
                                    <h4 className="font-semibold text-gray-900 text-sm">{exp.role}</h4>
                                    {exp.is_current && (
                                        <span className="rounded-full bg-green-50 px-2 py-0.5 text-[10px] font-medium text-green-600">
                                            Current
                                        </span>
                                    )}
                                </div>
                                <p className="text-sm text-gray-600">
                                    {exp.organization} <span className="text-gray-400 mx-1">•</span> 
                                    <span className="text-xs text-gray-500">
                                        {exp.start_date ? new Date(exp.start_date).getFullYear() : ''} 
                                        {' - '} 
                                        {exp.is_current ? 'Present' : (exp.end_date ? new Date(exp.end_date).getFullYear() : '')}
                                    </span>
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => handleOpenForm(exp)}
                                className="p-2 text-gray-400 hover:text-black hover:bg-gray-50 rounded-md transition"
                                title="Edit"
                            >
                                <Edit2 size={16} />
                            </button>
                            <button
                                onClick={() => handleDelete(exp.id)}
                                className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md transition"
                                title="Delete"
                            >
                                <Trash2 size={16} />
                            </button>
                        </div>
                    </div>
                ))}
                {experiences.length === 0 && !loading && (
                    <div className="py-12 text-center text-gray-500 border-2 border-dashed border-gray-200 rounded-xl">
                        No experiences found. Create one above!
                    </div>
                )}
            </div>
        </div>
    )
}
