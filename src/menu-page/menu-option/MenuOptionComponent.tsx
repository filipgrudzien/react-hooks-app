import '../../App.css';

export function MenuOptionComponent({ name, urlPath }: MenuOptionProps): React.JSX.Element {
    const onOptionClick = () => {
        // todo lead to new url
    };

    return <div onClick={onOptionClick}>
        {name}
    </div>
}

export interface MenuOptionProps {
    name: string;
    urlPath: string;
}
