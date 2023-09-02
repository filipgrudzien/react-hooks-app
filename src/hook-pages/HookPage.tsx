import {useNavigate} from "react-router-dom";
import "../App.css"
import {PropsWithChildren} from "react";

export interface HookPageProps {
    title: string;
}

export function HookPage(props: PropsWithChildren<HookPageProps>): React.JSX.Element {
    const navigate = useNavigate();

    const onGoBackClick = (): void => {
        navigate("/");
    }

    return <>
        <h3 className="titleMargin">{props.title}</h3>
        {props.children}
        <button type="button" className="btn btn-secondary" onClick={onGoBackClick}>Go back to menu</button>
    </>
}
