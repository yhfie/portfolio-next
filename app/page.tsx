"use client";

import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import TechCard from "@/components/TechCard";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function PortoHome() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function fetchData(){
      const res = await fetch("/api/data");
      const jsonData = await res.json();
      setData(jsonData);
    }
    fetchData();
    console.log(data)
  }, [])


  return (
    <div className="bg-[url('/blur.svg')] relative">
        <div className="navbar min-h-0 h-14 pr-14 bg-base-100/20 backdrop-blur-md sticky top-0 z-20">
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
                <div className="rounded-full bg-[url('/img/y.svg')] bg-cover aspect-square w-8">
                </div>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="#about">About</a></li>
                    <li><a href="#exp">Experiences</a></li>
                    <li><a href="#tech">Technologies</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="/">CV</a></li>
                </ul>
            </div>
        </div>

        {/* <!-- Blobs --> */}
        <div className="absolute inset-0 z-0 overflow-hidden">
            {/* <!-- <img src="@/public/img/Vector.png" alt="Blob 1" className="absolute max-w-full md:-top-[35rem]"/> --> */}
            {/* <img src="@/public/img/Vector3.svg" alt="Blob 1" className="absolute max-w-full -right-[20rem] bottom-[70rem] md:bottom-[30rem] opacity-50 scale-150 md:scale-100" />
            <img src="@/public/img/Vector2.png" alt="Blob 1" className="absolute max-w-full -left-20 md:-left-[30rem] bottom-0 md:-bottom-[30rem] opacity-70 scale-125 animate-pulse" /> */}
            {/* <!-- <img src="img/Vector2.png" alt="Blob 1" className="absolute max-w-full top-0 right-0 opacity-70" /> --> */}
        </div>

        
        {/* <!-- Main Content --> */}
        <div className="relative z-10">
            {/* <!-- Name (Header) --> */}
            <div className="h-[80vh] flex flex-col justify-center items-center">
                <div className="md:flex gap-10 lg:gap-20 flex-nowrap justify-center">
                    <div className="mb-3 md:mb-0">
                        <div className="rounded-full bg-[url('/img/pfp.jpeg')] bg-cover aspect-square w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 m-auto">
                        </div>
                    </div>
                    <div className="my-auto w-fit max-w-full mx-auto">
                        <h1 className="text-white text-4xl md:text-5xl lg:text-5xl font-extrabold text-center md:text-left mb-1 md:mb-0 w-full">Huwaida Rahman Yafie</h1>
                        <h2 className="text-gray-300 lg:text-2xl font-light text-center md:text-left w-full">Student at Universitas Dian Nuswantoro</h2>
                        
                    </div>
                </div>
            </div>

                                {/* <!-- Contents --> */}
            {/* <!-- About Me --> */}
            <div className="mt- mx-5 md:w-3/4 md:mx-auto border border-sky-200/5 rounded-xl md:mb-10" id="about">
                <div className="flex gap-2 align-middle md:gap-4 w-max -my-2 pl-3 pr-5 pb-4 pt-5 rounded-t-xl text-scarlet-700 items-center">
                    <span className="material-symbols-outlined text-2xl">badge</span>   
                    <p className=" text-lg md:text-2xl my-auto font-semibold">About me</p>
                </div>
                
                <div className="text-white bg-white/1 text-sm hover:bg-w shadow-sm px-4 py-5 rounded-xl text-wrap bg font-light">
                    <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis architecto assumenda porro tenetur, nobis, excepturi, id minus <span className="font-semibold">ducimus consequuntur fugiat</span>  tempora eaque veniam quo sit rem molestias dignissimos. Explicabo, labore.</p>
                    <p>Nemo recusandae vel mollitia dolor eaque rerum, possimus eveniet, reiciendis unde excepturi vitae nam? Assumenda repudiandae eius quo sint placeat voluptatibus fugiat vel. Corporis, rerum illum numquam magnam saepe eius doloremque ipsam reprehenderit ducimus, minima excepturi tempora voluptatum. Iste libero quas doloribus dolorem.</p>
                    {/* <!-- <p className="font-semibold hover:font-bold cursor-pointer opacity-75 hover:opacity-100">See more..</p> --> */}
                    <div className="flex text-sm justify-center gap-1 mt-2">
                      <a href="" className="bg-blue-500/10 hover:bg-blue-500/20 px-3 py-1 rounded-sm underline-offset-2">LinkedIn</a>
                      <a href="" className="bg-purple-500/10 hover:bg-purple-500/20 px-3 py-1 rounded-sm">GitHub</a>
                    </div>
                </div>
            </div>

            {/* Research Experience */}
            <div className="mt-10 mx-5 md:w-3/4 md:mx-auto" id="exp">
                <div className="flex gap-2 align-middle md:gap-4 w-max -my-2 pl-3 pr-5 pb-4 pt-5 rounded-t-xl text-scarlet-700 items-center">
                    <span className="material-symbols-outlined text-2xl">experiment</span>   
                    <p className=" text-lg md:text-2xl my-auto font-semibold">Research Experience</p>
                </div>

                <ExperienceCard id="ace" title="System and AI Research (SYAIR) Training Program" company="University of Chicago-Indonesia (Remote)" period="Jan. - Jun. 2025" description="loremipsum" className=""/>
            </div>

            {/* Experience */}
            <div className="mt-10 mx-5 md:w-3/4 md:mx-auto">
            <div className="flex gap-2 align-middle md:gap-4 w-max -my-2 pl-3 pr-5 pb-4 pt-5 rounded-t-xl text-scarlet-700 items-center">
                    <span className="material-symbols-outlined text-2xl">cases</span>   
                    <p className=" text-lg md:text-2xl my-auto font-semibold">Experiences</p>
                </div>
                {data?.experiences.map((exp: any) => (
                  <ExperienceCard key={exp.id} id={exp.id} title={exp.title} company={exp.company} period={exp.period} description={exp.description}/>
                ))}
            </div>

            {/* <!-- Tech --> */}
            <div className="mt-10 mx-5 md:w-3/4 md:mx-auto" id="tech">
                <div className="flex gap-2 align-middle md:gap-4 w-max -my-2 pl-3 pr-5 pb-4 pt-5 rounded-t-xl text-scarlet-700 items-center">
                    <span className="material-symbols-outlined text-4xl">bolt</span>   
                    <p className=" text-lg md:text-2xl my-auto font-semibold">Technologies</p>
                </div>

                <div className="lg:h-max m-auto rounded-xl">
                    <div className="lg:flex lg:flex-wrap gap-2 justify-center">
                        {data?.technologies.map((tech: any) => (
                          <TechCard key={tech.id} id={tech.id} title={tech.title} description={tech.description}/>
                        ))}
                    </div>            
                </div>    
            </div>

                {/* <!-- Projects --> */}
            <div className="mt-10 mx-5 md:w-3/4 md:mx-auto mb-14" id="projects">
                <div className="flex gap-2 align-middle md:gap-4 w-max -my-2 pl-3 pr-5 pb-4 pt-5 rounded-t-xl text-scarlet-700 items-center">
                    <span className="material-symbols-outlined text-2xl">chef_hat</span>   
                    <p className=" text-lg md:text-2xl my-auto font-semibold">Projects</p>
                </div>

                    {/* <!-- Project cards flex --> */}
                    <div className="overflow-x-scroll">
                      <div className="lg:flex gap-2 lg:flex-nowrap">
                        {data?.projects.map((p: any) => (
                          <ProjectCard key={p.id} id={p.id} imgUrl={p.imgUrl} title={p.title} year={p.year} category={p.category} description={p.description} githubUrl={p.githubUrl} demoUrl={p.demoUrl}/>
                        ))}
                      </div>
                    </div>
            </div>
        </div>
        
        <footer className="footer footer-horizontal footer-center bg-black/70 backdrop-blur-2xl text-primary-content p-10">
            <aside>
                <div className="rounded-full bg-[url('/img/y_white.svg')] bg-cover aspect-square w-8"></div>
                <p className="font-bold">
                yafie/yhfie
                </p>
                <p>{new Date().getFullYear()}</p>
            </aside>
            </footer>
    </div>
  );
}
