"use client";

import ExperienceCard from "@/components/ExperienceCard";
import Icon from "@/components/Icon";
import ProjectCard from "@/components/ProjectCard";
import TechCard from "@/components/HorizontalCard";
import Image from "next/image";
import { useEffect, useState } from "react";
import HorizontalCard from "@/components/HorizontalCard";
import Markdown from "react-markdown";

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

    console.log(data)

  return (
    <div className="bg-[url('/blur.svg')] relative">
        <div className="navbar min-h-0 h-9 pr-7 bg-white/1 backdrop-blur-md sticky top-0 z-20 border-b border-white/5 text-sm">
            <div className="navbar-start gap-2">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><a href="#about">About</a></li>
                    <li><a href="#exp">Experiences</a></li>
                    <li><a href="#tech">Technologies</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="/">CV</a></li>
                </ul>
                </div>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">
                    <li><a href="#about">About</a></li>
                    <li><a href="#exp">Experiences</a></li>
                    <li><a href="#tech">Technologies</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="/CV_Huwaida_Rahman_Yafie.pdf">CV</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="rounded-full bg-[url('/img/y_white.svg')] bg-cover aspect-square w-6 hover:blur-[1px] hover:scale-[100.1%]">
                </div>
            </div>
        </div>

        {/* <!-- Blobs --> */}
        <div className="absolute inset-0 z-0 overflow-hidden">
            {/* <!-- <img src="@/public/img/Vector.png" alt="Blob 1" className="absolute max-w-full md:-top-[35rem]"/> --> */}
            {/* <img src="/img/Vector3.svg" alt="Blob 1" className="absolute max-w-full -right-[20rem] bottom-[70rem] md:bottom-[30rem] opacity-50 scale-150 md:scale-100" /> */}
            {/* <img src="/img/Vector2.png" alt="Blob 1" className="absolute max-w-full -left-20 md:-left-[30rem] bottom-0 md:-bottom-[30rem] opacity-70 scale-125" /> */}
            {/* <!-- <img src="img/Vector2.png" alt="Blob 1" className="absolute max-w-full top-0 right-0 opacity-70" /> --> */}
        </div>

        
        {/* <!-- Main Content --> */}
        <div className="relative z-10">
            {/* <!-- Name (Header) --> */}
            <div className="h-[70vh] md:h-[80vh] flex flex-col justify-center items-center">
                <div className="md:flex gap-10 lg:gap-20 flex-nowrap justify-center">
                    <div className="mb-3 md:mb-0">
                        <div className="rounded-full bg-[url('/img/pfp.webp')] bg-cover aspect-square w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 m-auto">
                        </div>
                    </div>
                    <div className="my-auto w-fit max-w-2/3 mx-auto">
                        <h1 className="text-white text-4xl md:text-5xl lg:text-5xl font-extrabold text-center md:text-left mb-1 md:mb-0 w-full">Huwaida Rahman Yafie</h1>
                        <h2 className="text-gray-300 lg:text-xl font-light text-center md:text-left w-full">3rd-year CS Student at Universitas Dian Nuswantoro</h2>
                        
                    </div>
                </div>
            </div>

                                {/* <!-- Contents --> */}
            {/* <!-- About Me --> */}
            <div className="mt- mx-5 md:w-3/4 md:mx-auto border border-sky-200/5 border-b-3 rounded-xl md:mb-10" id="about">
                <div className="flex gap-2 align-middle md:gap-4 w-max -my-2 pl-3 pr-5 pb-4 pt-5 rounded-t-xl items-center">
                    <Icon name="badge" className="text-scarlet-700" /> 
                    <p className=" text-lg md:text-2xl my-auto font-semibold text-scarlet-700">About me</p>
                </div>
                
                <div className="bg-white/1 text-sm hover:bg-w shadow-sm px-4 py-5 rounded-xl text-wrap bg font-light">
                <div className="text-white text-sm">
                    <Markdown>
                        {data?.about[0].description}
                    </Markdown>

                </div>
                    {/* <!-- <p className="font-semibold hover:font-bold cursor-pointer opacity-75 hover:opacity-100">See more..</p> --> */}
                    <div className="flex gap-4 text-sm justify-center mt-5">
                        <a href="https://github.com/yhfie" className=" rounded-full bg-[url('/github-white.svg')] bg-cover aspect-square w-7 h-7 hover:scale-[101%]">
                        </a>
                        <a href="https://linkedin.com/yhfie" className=" rounded-sm bg-[url('/linkedin-app-white.svg')] bg-cover aspect-square w-7 h-7 hover:scale-[101%]">
                        </a>
                    </div>
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
