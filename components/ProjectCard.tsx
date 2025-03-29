import { FC } from "react"

type Props = {
    id: string,
    imgUrl: string,
    title: string,
    year: number,
    category: string,
    description: string,
    githubUrl?: string,
    demoUrl?: string,
}

const ProjectCard: FC<Props> = ({id, imgUrl, title, year, category, description, githubUrl, demoUrl}) => {
    return (
        <div className="block border border-sky-200/5 rounded-lg mb-2 bg-white/[0.01] hover:bg-white/2 p-5 w-fit lg:w-[35%] mx-auto lg:mx-0 group transition shrink-0 min-w-[25%]">   
            {/* <!-- Project caption --> */}

            <div className="bg-scarlet-500 bg-cover bg-center w-full h-44 max-w-full md:w-full mx-auto rounded-lg mb-4">
            </div>

            {/* <!-- Card title --> */}
            <div className=" my-auto w-fit max-w-none break-words mb-1">
                <p className="text-white font-semibold text-xl lg:text-2xl mb-1">{title}<span className="font-light"> • {year}</span></p>
            </div>
            
            {/* <!-- Project type --> */}
            <div className="flex gap-2 w-fit px-2 py-1 rounded-md mt-1 mb-3 bg-sky-200/5 border border-sky-400/5">
                <p className="text-white text-sm">{category}</p>
            </div>
            <p className="text-white text-sm text-justify mb-7">{description}</p>

            {/* <!-- Project links -->s */}
            <div className="flex gap-3 h-11 w-full justify-center">
            {githubUrl ? (
                    <a href={githubUrl} target="_blank">
                        <div className="group flex gap-2 border-2 border-blue-400/10 bg-blue-600/10 hover:bg-blue-600/5 active:bg-blue-600/15 w-fit py-2 px-3 rounded-lg cursor-pointer justify-center items-center text-blue-400">
                            {/* <img src="/public/img/github-mark-white.svg" alt="GitHub" className="h-full"/> */}
                            <p className="text-sm">GitHub</p>
                        </div>
                    </a>
            ) : (<></>)}
            {demoUrl ? (
                <a href={demoUrl} target="_blank">
                        <div className="flex gap-2 border-2 border-scarlet-400/10 bg-scarlet-600/10 hover:bg-scarlet-600/5 active:bg-scarlet-600/15 w-fit py-2 px-3 rounded-lg cursor-pointer justify-center items-center text-scarlet-400">
                            {/* <!-- <img src="/public/img/github-mark-white.svg" alt="GitHub" className="h-7"/> --> */}
                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-5 lg:mx-auto my-auto">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                            </svg> */}
                            <p className="text-sm">Demo</p>
                        </div>
                    </a>
            ) : (<></>)}
            </div>

        </div>
    )
}

export default ProjectCard;