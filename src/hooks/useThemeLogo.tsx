import { useEffect, useState } from 'react'

export default function useThemeLogo() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return {
        src: `/images/logo.png`,
        mounted
    }
}
