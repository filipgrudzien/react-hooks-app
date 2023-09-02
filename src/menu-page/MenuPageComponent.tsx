import '../App.css';
import {MenuOptionComponent} from "./menu-option/MenuOptionComponent";

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
    return <div>
        {menuOptions.map(option => <MenuOptionComponent pageName={option} urlPath={'/mouse-position'}/>)}
    </div>
}
