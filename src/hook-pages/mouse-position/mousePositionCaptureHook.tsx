import {useEffect, useState} from "react";

export interface MousePosition {
    x: number;
    y: number;
}

export const usePositionCaptureHook = (initialPositionValue: number = 0): MousePosition => {
    const [mousePosition, setMousePosition] = useState<MousePosition>({
        x: initialPositionValue,
        y: initialPositionValue
    });

    const updateMousePosition = (event: MouseEvent): void => {
        setMousePosition({
            x: event.x,
            y: event.y
        });
    }

    useEffect(() => {
        document.addEventListener("mousemove", updateMousePosition);

        return () => {
            document.removeEventListener("mousemove", updateMousePosition);
        }
    }, []);

    return mousePosition;
}
