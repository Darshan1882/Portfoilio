import { useState,useEffect } from "react"
export function useOnScreen(ref, rootMargin) {

    const [isIntersecting, setIntersecting] = useState(false)
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting)
      },{ rootMargin }
    )
  
    useEffect(() => {
      observer.observe(ref.current)
      return () => { observer.disconnect() }
    }, [])
  
    return isIntersecting
}