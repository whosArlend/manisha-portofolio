import { useState, useEffect } from 'react'
import { getImageUrl } from '../lib/storage'

interface StorageImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    path: string | null | undefined
    fallbackSrc?: string
}

export default function StorageImage({ path, fallbackSrc, alt, ...props }: StorageImageProps) {
    const [url, setUrl] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let isMounted = true
        
        async function fetchUrl() {
            if (!path) {
                if (isMounted) {
                    setUrl(fallbackSrc || null)
                    setLoading(false)
                }
                return
            }

            setLoading(true)
            try {
                const fetchedUrl = await getImageUrl(path)
                if (isMounted) {
                    setUrl(fetchedUrl || fallbackSrc || null)
                }
            } catch (err) {
                if (isMounted) {
                    setUrl(fallbackSrc || null)
                }
            } finally {
                if (isMounted) {
                    setLoading(false)
                }
            }
        }

        fetchUrl()

        return () => {
            isMounted = false
        }
    }, [path, fallbackSrc])

    if (loading && !url) {
        return <div className={`bg-gray-100 animate-pulse ${props.className || ''}`} />
    }

    if (!url) {
        return <div className={`bg-gray-200 flex items-center justify-center text-gray-400 text-xs ${props.className || ''}`}>No Image</div>
    }

    return <img src={url} alt={alt || 'Image'} {...props} />
}
