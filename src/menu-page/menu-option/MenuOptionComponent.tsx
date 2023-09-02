import '../../App.css';
import {useNavigate} from "react-router-dom";
import {MenuOption} from "../MenuPageComponent";

export function MenuOptionComponent({ pageName, urlPath, index }: MenuOptionProps): React.JSX.Element {
    const navigate = useNavigate();
    const menuOptionCopy = `#${index} - ${pageName.valueOf()}`;

    const onOptionClick = () => {
        navigate(urlPath);
    };

    return <button type="button" className="btn btn-primary" onClick={onOptionClick}>
        {menuOptionCopy}
    </button>
}

export interface MenuOptionProps extends MenuOption {
    index: number;
}
