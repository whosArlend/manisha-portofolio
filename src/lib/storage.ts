import { supabase } from './supabase'

export async function uploadImage(file: File, folder: string = 'general'): Promise<string> {
    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
        throw new Error('Only JPEG, PNG, and WEBP images are allowed.')
    }

    const fileExt = file.name.split('.').pop()
    const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`
    const filePath = `${folder}/${fileName}`

    const { error } = await supabase.storage
        .from('portfolio-images')
        .upload(filePath, file)

    if (error) {
        throw error
    }

    return filePath
}

export async function getImageUrl(path: string | null | undefined): Promise<string | null> {
    if (!path) return null
    if (path.startsWith('http') || path.startsWith('data:')) return path

    const { data, error } = await supabase.storage
        .from('portfolio-images')
        .createSignedUrl(path, 60 * 60 * 24 * 365) // Valid for 1 year

    if (error) {
        console.error('Error getting signed URL:', error)
        return null
    }

    return data.signedUrl
}
