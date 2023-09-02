import '../../App.css';
import {useNavigate} from "react-router-dom";
import {MenuOption} from "../MenuPageComponent";

export function MenuOptionComponent({ pageName, urlPath }: MenuOption): React.JSX.Element {
    const navigate = useNavigate();
    const onOptionClick = () => {
        navigate(urlPath);
    };

    return <div onClick={onOptionClick}>
        {pageName.valueOf()}
    </div>
}
