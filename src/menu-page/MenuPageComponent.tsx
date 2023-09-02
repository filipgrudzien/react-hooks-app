import '../App.css';

export enum MenuOption {
    MOUSE_POSITION = 'MOUSE_POSITION'
}

export function MenuPageComponent(): React.JSX.Element {
    const menuOptions: MenuOption[] = [
        MenuOption.MOUSE_POSITION
    ]

    return <div>
        Choose demo custom hook to see how it works:
    </div>
}
