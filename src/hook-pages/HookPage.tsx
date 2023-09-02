import {useNavigate} from "react-router-dom";
import "./HookPage.css"
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
        <h3>{props.title}</h3>
        {props.children}
        <button className={'backButton'} onClick={onGoBackClick}>Go back to menu</button>
    </>
}
