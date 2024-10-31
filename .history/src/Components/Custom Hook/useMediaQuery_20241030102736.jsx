
import { useEffect, useState } from "react"

const useMediaQuery = (query) => {
const [matches, setMatches ] = useState(window.matchMedia(query))

useEffect(() => {
const mediaQuery = window.mediaQuery


})


return matches
} 