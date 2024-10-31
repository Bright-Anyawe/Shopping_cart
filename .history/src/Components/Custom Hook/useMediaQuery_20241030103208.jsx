
import { useEffect, useState } from "react"

const useMediaQuery = (query) => {
const [matches, setMatches ] = useState(window.matchMedia(query))

useEffect((e) => {
const mediaMatch = window.matchMedia(query);

const handler = (e) => setMatches(e.matches)
mediaMatch.addEventListener('change', handler);

return () => mediaMatch.removeEventListener(handler)

}, [query])


return matches
} 