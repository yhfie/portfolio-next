import { FC } from "react";
import Icon from "./Icon";

type Props = {
    id: string;
    title: string;
    description: string;
    icon?: string;
    className?: string;
};

const HorizontalCard: FC<Props> = ({id, title, description, icon, className}) => {
    return (
        <div className="w-full sm:flex sm:flex-auto gap-5 border-b-3 border-sky-200/5 rounded-md bg-white/1 hover:bg-white/2 hover:border-b-2 px-3 py-2">
            <div className="md:mb-0 w-fit sm:w-48 flex gap-3">
                <div className="flex items-center gap-2 md:gap-1">
                    {icon ? (
                        <Icon name={icon}/>
                    ):<></>}
                    <p className="text-white font-semibold text-md my-auto sm:mx-1 sm:w-fit sm:max-w-48 sm:min-w-20">
                        {title}
                    </p>
                </div>
            </div>
            <div className="sm:border-l sm:border-l-sky-200/5 sm:px-6 py-2">
                    <p className="my-auto w-fit text-sm">
                        {description}
                    </p>
            </div>
        </div> 
    )
}

export default HorizontalCard;