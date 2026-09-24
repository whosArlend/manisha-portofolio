import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
import ProjectsManager from '../../components/admin/ProjectsManager'
import ExperiencesManager from '../../components/admin/ExperiencesManager'

export default function AdminDashboard() {
    const [email, setEmail] = useState('')
    const [activeTab, setActiveTab] = useState<'projects' | 'experiences'>('projects')

    useEffect(() => {
        const getUser = async () => {
            const { data } = await supabase.auth.getUser()

            if (!data.user) {
                window.location.href = '/admin/login'
                return
            }

            setEmail(data.user.email ?? '')
        }

        getUser()
    }, [])

    const handleLogout = async () => {
        await supabase.auth.signOut()
        window.location.href = '/admin/login'
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="border-b border-gray-200 bg-white">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
                    <div>
                        <p className="text-sm text-gray-500">Admin</p>
                        <h1 className="text-xl font-semibold text-gray-900">
                            Portfolio Dashboard
                        </h1>
                    </div>

                    <button
                        onClick={handleLogout}
                        className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-100"
                    >
                        Sign out
                    </button>
                </div>
            </header>

            <main className="mx-auto max-w-6xl px-6 py-10">
                <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
                    <p className="text-gray-600">
                        Signed in as {email}
                    </p>
                    <div className="flex bg-gray-200/50 p-1 rounded-lg">
                        <button
                            onClick={() => setActiveTab('projects')}
                            className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${
                                activeTab === 'projects' 
                                ? 'bg-white text-gray-900 shadow-sm' 
                                : 'text-gray-500 hover:text-gray-900'
                            }`}
                        >
                            Projects
                        </button>
                        <button
                            onClick={() => setActiveTab('experiences')}
                            className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${
                                activeTab === 'experiences' 
                                ? 'bg-white text-gray-900 shadow-sm' 
                                : 'text-gray-500 hover:text-gray-900'
                            }`}
                        >
                            Experiences
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                    {activeTab === 'projects' ? <ProjectsManager /> : <ExperiencesManager />}
                </div>
            </main>
        </div>
    )
}