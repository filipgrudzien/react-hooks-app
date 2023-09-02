import '../../App.css';
import {usePositionCaptureHook} from "./mousePositionCaptureHook";
import {HookPage} from "../HookPage";

export function MousePositionComponent(): React.JSX.Element {
    const title = "Mouse position position displaying"
    const mousePosition = usePositionCaptureHook(0);

    return <HookPage title={title}>
        <div>
            <p>Mouse position X: {mousePosition.x}</p>
            <p>Mouse position Y: {mousePosition.y}</p>
        </div>
    </HookPage>
}
