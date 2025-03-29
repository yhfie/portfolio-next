import { FC } from "react";

type Props = {
    name: string;
    className?: string;
}

const Icon: FC<Props> = ({name, className}) => {
    return (
        <span className={`material-symbols-outlined text-2xl ${className}`}>
            {name}
        </span>   
    )
}

export default Icon;