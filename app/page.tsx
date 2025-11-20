"use client";

import { Martian_Mono } from "next/font/google";
import ExperienceCard from "@/components/ExperienceCard";
import Icon from "@/components/Icon";
import ProjectCard from "@/components/ProjectCard";
import TechCard from "@/components/HorizontalCard";
import Image from "next/image";
import { useEffect, useState } from "react";
import HorizontalCard from "@/components/HorizontalCard";
import Markdown from "react-markdown";
import Navbar from "@/components/Navbar";

const martianMono = Martian_Mono({
    variable: "--font-martian-mono",
    subsets: ["latin"],
})

export default function PortoHome() {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        async function fetchData(){
        const res = await fetch("/api/data");
        const jsonData = await res.json();
        setData(jsonData);
    }
    fetchData();
}, [])

  return (
    <div className="">
        <Navbar />
        {/* <!-- Main Content --> */}
        <div className="lg:px-48">
            {/* <!-- Name (Header) --> */}
            <div className="h-[50vh] md:h-[40vh] px-5 lg:px-0 flex flex-col justify-center items-center mb-2 lg:mb-0 mt-10">
                <div className="lg:flex mb-15 gap-10 lg:gap-20 flex-nowrap justify-center">
                    <div className="mb-3 md:mb-0">
                        <div className="bg-[url('/img/pfp.webp')] bg-cover aspect-square w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 m-auto">
                        </div>
                    </div>
                    <div className="my-auto w-fit mx-auto">
                        <h1 className={`${martianMono.className} text-4xl md:text-5xl lg:text-5xl font-extrabold text-center md:text-left mt-5 mb-1 md:mb-0 w-full uppercase`}>Huwaida Rahman Yafie</h1>
                        <h2 className="text-base-content lg:text-xl font-medium text-center lg:text-left w-full">Student at Universitas Dian Nuswantoro</h2>
                        <div className="mt-3">
                            <h2 className="text-base-content text-center lg:text-left w-full">huwaidar5[at]gmail.com</h2>
                            <div className="flex gap-2 justify-center lg:justify-normal mt-1">
                                <a href="https://github.com/yhfie" target="_blank" className="font-semibold uppercase px-3 bg-scarlet-600 hover:bg-black text-white">
                                    GitHub
                                </a>
                                <a href="https://www.linkedin.com/in/yhfie/" target="_blank" className="font-semibold uppercase px-3 bg-scarlet-600 hover:bg-black text-white">
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                                {/* <!-- Contents --> */}
            {/* <!-- About Me --> */}
            {/* border border-sky-200/5 border-b-3 */}
            <div className="mx-5 md:w-3/4 md:mx-auto md:mb-10 w-fit" id="about">
                <div className="flex gap-2 align-middle md:gap-4 pr-5 pt-2 pb-1 border-b border-dashed items-center">
                    {/* <Icon name="badge" className="text-scarlet-700" />  */}
                    <p className="text-lg md:text-2xl my-auto font-semibold text-black uppercase">About Me</p>
                </div>
                
                <div className="bg-base-100 py-2 px-7 text-wrap">
                    <Markdown>
                        {data?.about[0].description}
                    </Markdown>

                    {/* <!-- <p className="font-semibold hover:font-bold cursor-pointer opacity-75 hover:opacity-100">See more..</p> --> */}
                    
                </div>
            </div>

            {/* Research Experience */}
            <div className="mt-10 mx-5 md:w-3/4 md:mx-auto" id="exp">
                <div className="flex gap-2 align-middle md:gap-4 w-max pl-3 pr-5 pt-2 pb-3 items-center bg-black">
                    <Icon name="experiment" className="text-white" /> 
                    <p className="text-lg md:text-2xl my-auto text-white uppercase">Research Experience</p>
                </div>

                {data?.researches.map((research: any) => (
                    <ExperienceCard key={research.id} id={research.id} title={research.title} company={research.company} period={research.period} description={research.description}/>
                ))}
            </div>

            {/* Experience */}
            <div className="mt-10 mx-5 md:w-3/4 md:mx-auto">
            <div className="flex gap-2 align-middle md:gap-4 w-max pl-3 pr-5 pt-2 pb-3 items-center bg-black">
                    <Icon name="cases" className="text-white" /> 
                    <p className=" text-lg md:text-2xl my-auto text-white uppercase">Experiences</p>
                </div>
                {data?.experiences.map((exp: any) => (
                    <ExperienceCard key={exp.id} id={exp.id} title={exp.title} company={exp.company} period={exp.period} description={exp.description}/>
                ))}
            </div>

            {/* <!-- Tech --> */}
            <div className="mt-10 mx-5 md:w-3/4 md:mx-auto" id="tech">
                <div className="flex gap-2 align-middle md:gap-4 w-max pl-3 pr-5 pt-2 pb-3 items-center bg-black">
                    <Icon name="bolt" className="text-white" /> 
                    <p className=" text-lg md:text-2xl my-auto text-white uppercase">Technologies</p>
                </div>

                <div className="lg:h-max m-auto rounded-xl mt-3">
                    <div className="lg:flex lg:flex-wrap gap-2 justify-center">
                        {data?.technologies.map((tech: any) => (
                            <HorizontalCard key={tech.id} id={tech.id} title={tech.title} description={tech.description} icon={tech.icon}/>
                        ))}
                    </div>            
                </div>    
            </div>

                {/* <!-- Projects --> */}
            <div className="collapse collapse-arrow text-white w-fit h-fit mt-10 rounded-none mx-5 md:w-3/4 md:mx-auto mb-14" id="projects">
                <input type="checkbox" name="" id="" />
                <div className="collapse-title bg-black p-0">
                    <div className="bg-black w-fit flex gap-2 align-middle md:gap-4 pl-3 pr-5 pt-2 pb-3 items-center">
                        <Icon name="chef_hat" className="text-white" />  
                        <p className="text-lg md:text-2xl my-auto text-white uppercase">Projects</p>
                    </div>
                </div>

                    {/* <!-- Project cards flex --> */}
                    <div className="collapse-content mt-1 text-black px-2 border-x-2 border-b-2 border-dotted">
                        <div className="overflow-x-scroll pb-2">
                            <div className="lg:flex gap-2 lg:flex-nowrap">
                                {data?.projects.map((p: any) => (
                                <ProjectCard key={p.id} id={p.id} imgUrl={p.imgUrl} title={p.title} year={p.year} category={p.category} description={p.description} githubUrl={p.githubUrl} demoUrl={p.demoUrl}/>
                                ))}
                            </div>
                        </div>
                    </div>
            </div>

                {/* <!-- Awards --> */}
            <div className="mt-10 mx-5 md:w-3/4 md:mx-auto mb-14" id="Awards">
                <div className="flex gap-2 align-middle md:gap-4 w-max pl-3 pr-5 pt-2 pb-3 items-center bg-black">
                    <Icon name="trophy" className="text-white" />  
                    <p className="text-lg md:text-2xl my-auto font-semibold text-white uppercase">Awards</p>
                </div>

                    {/* <!-- Project cards flex --> */}
                    <div className="overflow-x-scroll no-scrollbar">
                      <div className="">
                        {data?.awards.map((award: any) => (
                          <HorizontalCard key={award.id} id={award.id} title={award.title} description={award.description}/>
                        ))}
                      </div>
                    </div>
            </div>
        </div>
        
        <footer className="footer footer-horizontal footer-center bg-base p-10 text-black border-t-2 border-dashed">
            <aside>
                <div className="">
                    <p className="font-semibold uppercase">
                    Thanks for coming.
                    </p>
                    <p className="font-semibold uppercase">
                    [ {new Date().getFullYear()} ] Yafie
                    </p>
                </div>
                {/* <p>{new Date().getFullYear()}</p> */}
            </aside>
            </footer>
    </div>
  );
}
