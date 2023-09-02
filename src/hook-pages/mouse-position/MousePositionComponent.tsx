import '../../App.css';
import {useEffect, useState} from "react";
import {usePositionCaptureHook} from "./mousePositionCaptureHook";

export function MousePositionComponent(): React.JSX.Element {
    const mousePosition = usePositionCaptureHook(0);

    return <div>
        <h3>Mouse position position displaying</h3>
        <p>Mouse position X: {mousePosition.x}</p>
        <p>Mouse position Y: {mousePosition.y}</p>
    </div>
}
