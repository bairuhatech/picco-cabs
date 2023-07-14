import { useState, useEffect } from "react"
import useEventListener from "./useEventListener"

export default function useMediaQuery(mediaQuery) {
    const [isMatch, setIsMatch] = useState(false)
    const [mediaQueryList, setMediaQueryList] = useState(null)

    useEffect(() => {
        const list = window.matchMedia(mediaQuery)
        console.log(list);
        setMediaQueryList(list)
        setIsMatch(list.matches)
    }, [mediaQuery])

    useEventListener("change", e => setIsMatch(e.matches), mediaQueryList)

    return isMatch
}