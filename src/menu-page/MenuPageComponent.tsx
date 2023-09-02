import '../App.css';
import { MenuOptionComponent } from "./menu-option/MenuOptionComponent";

export enum PageName {
    MOUSE_POSITION = 'Mouse Position'
}

export interface MenuOption {
    pageName: PageName;
    urlPath: string;
}

export const menuOptions: PageName[] = [
    PageName.MOUSE_POSITION
]

export function MenuPageComponent(): React.JSX.Element {
    const title = "Custom react hooks - pick from menu"
    const options = menuOptions.map((option, index) =>
        <MenuOptionComponent pageName={option} urlPath={'/mouse-position'} index={index + 1}/>);

    return <div>
        <h3 className="titleMargin">{title}</h3>
        {options}
    </div>
}
