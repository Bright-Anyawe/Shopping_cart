
import { useState } from "react"

const useMediaQuery = (query) => {
const [matches, setMatches ] = useState(window.matchMedia(query))

use


return matches
} 