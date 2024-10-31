
import { useEffect, useState } from "react"

const useMediaQuery = (query) => {
const [matches, setMatches ] = useState(window.matchMedia(query))

useEffect(() => {
const mediaMatch = window.matchMedia(query);

const handler = () => set


})


return matches
} 