import { useEffect, useRef, useState } from 'react'

const useIntersectionObserver = (options) => {
    const containerRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            setIsVisible(entry.isIntersecting)
        }, options)
        

        if (containerRef.current) {
            observer.observe(containerRef.current)
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current)
            }
        }
    }, [options])

    return [containerRef, isVisible]
}

export default useIntersectionObserver
