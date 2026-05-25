import { useEffect, useState } from "react"

function useDate() {
    const [currentDate, setCurrentDate] = useState(new Date)
    useEffect(() => {
        const intervallo = setInterval(() => {
            setCurrentDate(new Date)
        }, 1000)
        return () => clearInterval(intervallo)
    }, [])
    return currentDate
}

export default useDate