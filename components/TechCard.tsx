import { FC } from "react";

type Props = {
    id: string;
    title: string;
    description: string;
};

const TechCard: FC<Props> = ({id, title, description}) => {
    return (
        <div className="w-full sm:flex sm:flex-auto gap-5 border-b-2 border-sky-200/5 rounded-md bg-white/1 hover:bg-white/2 px-3 py-2 mb-2">
            <div className="md:mb-0 sm:justify-center flex gap-3">
                <p className="text-white font-semibold text-md my-auto mx-5 sm:w-fit sm:max-w-48 sm:min-w-20">
                    {title}
                </p>
            </div>
            <div className="sm:border-l sm:border-l-sky-200/5 sm:px-6 py-2">
                <p className="my-auto w-fit">
                    {description}
                </p>
            </div>
        </div> 
    )
}

export default TechCard;