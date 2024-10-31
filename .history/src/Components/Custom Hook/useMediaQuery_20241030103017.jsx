
import { useEffect, useState } from "react"

const useMediaQuery = (query) => {
const [matches, setMatches ] = useState(window.matchMedia(query))

useEffect(() => {
const mediaMatch = window.matchMedia(query);

const handler = (e) => setMatches(e.matches)


})


return matches
} 