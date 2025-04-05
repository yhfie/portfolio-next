import { FC } from "react";
import Markdown from "react-markdown";

type Props = {
    id: string;
    title: string;
    company: string;
    period: string;
    description: string;
    className?: string;
}

const ExperienceCard: FC<Props> = ({id, title, company, period, description, className}) => {
    return (
        <div className="lg:h-max m-auto mb-2 rounded-xl">
            <div className="gap-2 justify-center">
                <div className={`w-full border-b-3 border-x-1 border-sky-200/5 px-8 py-5 rounded-md hover:bg-white/1 hover:border-b-2`}>
                <div className="md:mb-2 pb-2 border-b border-sky-200/5">
                    <p className={`${className} font-bold text-xl my-auto `}>
                        {title}
                    </p>
                    <p className="text-white text-sm my-auto">
                        {company}
                    </p>
                    <p className="text-white/60 my-auto w-fit font-light text-sm">
                        {period}
                    </p>
                </div>
                <div className="py-1 my-auto w-fit text-sm">
                    <Markdown>
                        {description}
                    </Markdown>
                </div>
                </div> 
            </div>            
        </div>    
    )
}

export default ExperienceCard;