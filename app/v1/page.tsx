"use client";

import ExperienceCard from "@/components/ExperienceCard";
import Icon from "@/components/Icon";
import ProjectCard from "@/components/ProjectCard";
import TechCard from "@/components/HorizontalCard";
import Image from "next/image";
import { useEffect, useState } from "react";
import HorizontalCard from "@/components/HorizontalCard";
import Markdown from "react-markdown";
import Navbar from "@/components/Navbar";

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
            <div className="h-[60vh] md:h-[40vh] flex flex-col justify-center items-center">
                <div className="md:flex gap-10 lg:gap-20 flex-nowrap justify-center">
                    <div className="mb-3 md:mb-0">
                        <div className="rounded-full bg-[url('/img/pfp.webp')] bg-cover aspect-square w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 m-auto">
                        </div>
                    </div>
                    <div className="my-auto w-fit mx-auto">
                        <h1 className=" text-4xl md:text-5xl lg:text-5xl font-extrabold text-center md:text-left mb-1 md:mb-0 w-full">Huwaida Rahman Yafie</h1>
                        <h2 className="text-base-content lg:text-xl font-medium text-center md:text-left w-full">Student at Universitas Dian Nuswantoro</h2>
                        <div className="mt-3">
                            <h2 className="text-base-content text-center md:text-left w-full">huwaidar5[.]@gmail[.]com</h2>
                            <div className="flex gap-2 justify-center md:justify-normal">
                                <a href="https://github.com/yhfie" target="_blank" className="font-bold underline underline-offset-2 hover:underline-offset-4 text-scarlet-700 duration-200">
                                    GitHub
                                </a>
                                <a href="https://www.linkedin.com/in/yhfie/" target="_blank" className="font-bold underline underline-offset-2 hover:underline-offset-4 text-scarlet-700 duration-200">
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
            <div className="mx-5 md:w-3/4 md:mx-auto  rounded-xl md:mb-10" id="about">
                <div className="flex gap-2 align-middle md:gap-4 w-max -my-2 pl-3 pr-5 pt-3 pb-4 rounded-t-xl items-center bg-scarlet-600">
                    <Icon name="badge" className="text-white" /> 
                    <p className=" text-xl md:text-xl my-auto font-semibold text-white">About me</p>
                </div>
                
                <div className="bg-base-100 hover:bg-w px-4 py-5 rounded-xl text-wrap">
                    <Markdown>
                        {data?.about[0].description}
                    </Markdown>

                    {/* <!-- <p className="font-semibold hover:font-bold cursor-pointer opacity-75 hover:opacity-100">See more..</p> --> */}
                    
                </div>
            </div>

            {/* Research Experience */}
            <div className="mt-10 mx-5 md:w-3/4 md:mx-auto" id="exp">
                <div className="flex gap-2 align-middle md:gap-4 w-max -my-2 pl-3 pr-5 pb-4 pt-5 rounded-t-xl items-center">
                    <Icon name="experiment" className="text-scarlet-700" /> 
                    <p className=" text-lg md:text-2xl my-auto font-semibold text-scarlet-700">Research Experience</p>
                </div>

                {data?.researches.map((research: any) => (
                    <ExperienceCard key={research.id} id={research.id} title={research.title} company={research.company} period={research.period} description={research.description}/>
                ))}
            </div>

            {/* Experience */}
            <div className="mt-10 mx-5 md:w-3/4 md:mx-auto">
            <div className="flex gap-2 align-middle md:gap-4 w-max -my-2 pl-3 pr-5 pb-4 pt-5 rounded-t-xl items-center">
                    <Icon name="cases" className="text-scarlet-700" /> 
                    <p className=" text-lg md:text-2xl my-auto font-semibold text-scarlet-700">Experiences</p>
                </div>
                {data?.experiences.map((exp: any) => (
                    <ExperienceCard key={exp.id} id={exp.id} title={exp.title} company={exp.company} period={exp.period} description={exp.description}/>
                ))}
            </div>

            {/* <!-- Tech --> */}
            <div className="mt-10 mx-5 md:w-3/4 md:mx-auto" id="tech">
                <div className="flex gap-2 align-middle md:gap-4 w-max -my-2 pl-3 pr-5 pb-4 pt-5 rounded-t-xl items-center">
                    <Icon name="bolt" className="text-scarlet-700" /> 
                    <p className=" text-lg md:text-2xl my-auto font-semibold text-scarlet-700">Technologies</p>
                </div>

                <div className="lg:h-max m-auto rounded-xl">
                    <div className="lg:flex lg:flex-wrap gap-2 justify-center">
                        {data?.technologies.map((tech: any) => (
                          <HorizontalCard key={tech.id} id={tech.id} title={tech.title} description={tech.description} icon={tech.icon}/>
                        ))}
                    </div>            
                </div>    
            </div>

                {/* <!-- Projects --> */}
            <div className="mt-10 mx-5 md:w-3/4 md:mx-auto mb-14" id="projects">
                <div className="flex gap-2 align-middle md:gap-4 w-max -my-2 pl-3 pr-5 pb-4 pt-5 rounded-t-xl items-center">
                    <Icon name="chef_hat" className="text-scarlet-700" />  
                    <p className="text-lg md:text-2xl my-auto font-semibold text-scarlet-700">Projects</p>
                </div>

                    {/* <!-- Project cards flex --> */}
                    <div className="overflow-x-scroll pb-2">
                      <div className="lg:flex gap-2 lg:flex-nowrap">
                        {data?.projects.map((p: any) => (
                          <ProjectCard key={p.id} id={p.id} imgUrl={p.imgUrl} title={p.title} year={p.year} category={p.category} description={p.description} githubUrl={p.githubUrl} demoUrl={p.demoUrl}/>
                        ))}
                      </div>
                    </div>
            </div>

                {/* <!-- Awards --> */}
            <div className="mt-10 mx-5 md:w-3/4 md:mx-auto mb-14" id="Awards">
                <div className="flex gap-2 align-middle md:gap-4 w-max -my-2 pl-3 pr-5 pb-4 pt-5 rounded-t-xl items-center">
                    <Icon name="trophy" className="text-scarlet-700" />  
                    <p className="text-lg md:text-2xl my-auto font-semibold text-scarlet-700">Awards</p>
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
        
        <footer className="footer footer-horizontal footer-center bg-base text-primary-content p-10">
            <aside>
                <div className="flex items-center gap-2">
                    <div className="rounded-full bg-[url('/img/y_white.svg')] bg-cover aspect-square w-5">
                    </div>
                    <p className="font-bold">
                    yafie
                    </p>
                </div>
                <p>{new Date().getFullYear()}</p>
            </aside>
            </footer>
    </div>
  );
}
