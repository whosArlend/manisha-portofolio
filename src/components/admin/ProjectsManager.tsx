import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'
import { uploadImage } from '../../lib/storage'
import StorageImage from '../StorageImage'
import { Plus, Edit2, Trash2, X } from 'lucide-react'

type Project = {
    id: number
    title: string
    category: string
    description: string
    image_url: string
    project_link: string
}

const CATEGORIES = ['Graphic Design', 'Social Media Design', 'Video Design', 'Other']

export default function ProjectsManager() {
    const [projects, setProjects] = useState<Project[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    
    const [isFormOpen, setIsFormOpen] = useState(false)
    const [editingProject, setEditingProject] = useState<Project | null>(null)
    const [isSaving, setIsSaving] = useState(false)

    // Form states
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState(CATEGORIES[0])
    const [description, setDescription] = useState('')
    const [projectLink, setProjectLink] = useState('')
    const [imageFile, setImageFile] = useState<File | null>(null)
    const [currentImageUrl, setCurrentImageUrl] = useState('')

    useEffect(() => {
        fetchProjects()
    }, [])

    const fetchProjects = async () => {
        setLoading(true)
        const { data, error } = await supabase
            .from('projects')
            .select('*')
            .order('created_at', { ascending: false })
            
        if (error) {
            setError(error.message)
        } else {
            setProjects(data || [])
        }
        setLoading(false)
    }

    const handleOpenForm = (project?: Project) => {
        setError('')
        if (project) {
            setEditingProject(project)
            setTitle(project.title)
            setCategory(project.category)
            setDescription(project.description || '')
            setProjectLink(project.project_link || '')
            setCurrentImageUrl(project.image_url || '')
        } else {
            setEditingProject(null)
            setTitle('')
            setCategory(CATEGORIES[0])
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
                finalImageUrl = await uploadImage(imageFile, 'projects')
            }

            const projectData = {
                title,
                category,
                description,
                project_link: projectLink,
                image_url: finalImageUrl,
                updated_at: new Date().toISOString()
            }

            if (editingProject) {
                const { error: updateError } = await supabase
                    .from('projects')
                    .update(projectData)
                    .eq('id', editingProject.id)
                
                if (updateError) throw updateError
            } else {
                const { error: insertError } = await supabase
                    .from('projects')
                    .insert([{ ...projectData, created_at: new Date().toISOString() }])
                
                if (insertError) throw insertError
            }

            await fetchProjects()
            handleCloseForm()
        } catch (err: any) {
            setError(err.message || 'An error occurred while saving.')
        } finally {
            setIsSaving(false)
        }
    }

    const handleDelete = async (id: number) => {
        if (!confirm('Are you sure you want to delete this project?')) return

        try {
            const { error: deleteError } = await supabase
                .from('projects')
                .delete()
                .eq('id', id)
            
            if (deleteError) throw deleteError
            await fetchProjects()
        } catch (err: any) {
            alert(err.message || 'Failed to delete project')
        }
    }

    if (loading && projects.length === 0) return <div className="text-gray-500">Loading projects...</div>

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Projects</h2>
                <button
                    onClick={() => handleOpenForm()}
                    className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-sm text-white transition hover:bg-gray-800"
                >
                    <Plus size={16} /> Add Project
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
                        <h3 className="text-lg font-medium">{editingProject ? 'Edit Project' : 'New Project'}</h3>
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
                                <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
                                <input
                                    type="text"
                                    required
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-black outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                                <select
                                    required
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-black outline-none"
                                >
                                    {CATEGORIES.map(cat => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between mb-1">
                                <label className="block text-sm font-medium text-gray-700">Description</label>
                                <span className={`text-xs ${description.length >= 50 ? 'text-red-500' : 'text-gray-400'}`}>
                                    {description.length}/50
                                </span>
                            </div>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                rows={2}
                                maxLength={50}
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
                            <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
                            <div className="flex items-center gap-4">
                                {currentImageUrl && !imageFile && (
                                    <div className="h-16 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
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
                                    <p className="mt-1 text-xs text-gray-500">Only JPEG, PNG, WEBP allowed.</p>
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
                                {isSaving ? 'Saving...' : 'Save Project'}
                            </button>
                        </div>
                    </form>
                </div>
            ) : null}

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <div key={project.id} className="group relative flex flex-col rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition">
                        <div className="aspect-video w-full bg-gray-100 overflow-hidden">
                            {project.image_url ? (
                                <StorageImage path={project.image_url} className="h-full w-full object-cover" />
                            ) : (
                                <div className="h-full w-full flex items-center justify-center text-gray-400 text-xs">No image</div>
                            )}
                        </div>
                        <div className="p-4 flex-1 flex flex-col">
                            <div className="flex-1">
                                <span className="inline-block rounded-full bg-pink-50 px-2 py-1 text-xs font-medium text-pink-600 mb-2">
                                    {project.category}
                                </span>
                                <h4 className="font-semibold text-gray-900 text-sm line-clamp-1">{project.title}</h4>
                                {project.description && (
                                    <p className="mt-1 text-xs text-gray-500 line-clamp-2">{project.description}</p>
                                )}
                            </div>
                            
                            <div className="mt-4 flex items-center justify-end gap-2 border-t border-gray-100 pt-3">
                                <button
                                    onClick={() => handleOpenForm(project)}
                                    className="p-1.5 text-gray-400 hover:text-black transition"
                                    title="Edit"
                                >
                                    <Edit2 size={16} />
                                </button>
                                <button
                                    onClick={() => handleDelete(project.id)}
                                    className="p-1.5 text-gray-400 hover:text-red-600 transition"
                                    title="Delete"
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                {projects.length === 0 && !loading && (
                    <div className="col-span-full py-12 text-center text-gray-500 border-2 border-dashed border-gray-200 rounded-xl">
                        No projects found. Create one above!
                    </div>
                )}
            </div>
        </div>
    )
}
