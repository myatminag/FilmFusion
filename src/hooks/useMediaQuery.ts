import { useState, useEffect } from "react";

const useMediaQuery = (query: string) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);

        const handleMatchChange = (event: MediaQueryListEvent) => {
            setMatches(event.matches);
        };

        setMatches(mediaQuery.matches);
        mediaQuery.addEventListener("change", handleMatchChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMatchChange);
        };
    }, [query]);

    return matches;
};

export default useMediaQuery;
