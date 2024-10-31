
import { useEffect, useState } from "react"

export const useMediaQuery = (query) => {
const [matches, setMatches ] = useState(window.matchMedia(query))

useEffect((e) => {
const mediaMatch = window.matchMedia(query);

const handler = (e) => setMatches(e.matches)
mediaMatch.addEventListener('change', handler);

return () => mediaMatch.removeEventListener("change", handler);

}, [query])


return matches
} 