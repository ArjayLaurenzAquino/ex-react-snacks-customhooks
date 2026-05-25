import { useState, useEffect } from "react"

function useCustomPointer(component) {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const mouseMove = event => {
            setPosition({ x: event.clientX, y: event.clientY })
        }
        document.addEventListener("mousemove", mouseMove)
        return () => document.removeEventListener("mousemove", mouseMove)
    }, [])

    return (
        <div
            style={{
                position: "fixed",
                top: position.y,
                left: position.x,
                transform: "translate(-50%, -50%)",
                cursor: "none"
            }}>
            {component}
        </div>
    )
}

export default useCustomPointer