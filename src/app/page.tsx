"use client";

import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Separator } from "@/components/ui/separator"

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { SparklesCore } from "@/components/ui/sparkles";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"




export default function Home() {
  const [width, setWidth] = useState<number>( typeof window !== 'undefined' ? window.innerWidth : 1024 );

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  });

  const isMobile = width <= 768;
  return (
    <main className="flex min-h-screen bg-black flex-col items-center justify-between p-28">

        {/* is mobile */}
        <div>
          {isMobile ? (<div className="p-5 text-sm rounded-xl bg-slate-900 text-white hover:bg-slate-600">For Better Experience Switch to Desktop Mode →</div>) : (<div>{""}</div>)}
        </div>

        {/* Introduction */}
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Hi! <br /> I am <span className="bg-clip-text text-transparent bg-gradient-to-b from-yellow-200 to-[#FFB703] bg-opacity-50">Ritesh</span> <br /> Web Developer
          </h1>
          <div className="h-[10rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
            <div className="w-[40rem] h-40 relative">
              {/* Gradients */}
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
      
              {/* Core component */}
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />
      
              {/* Radial Gradient to prevent sharp edges */}
              <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
          </div>
        </div>

        {/* About Me */}
        <div className="mx-auto mt-7 flex flex-col gap-5 lg:bg-gradient-to-b lg:from-[#000000] lg:to-[#2D20C3] lg:py-10 lg:px-60 lg:rounded-b-3xl">
          <div>
            <h2 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">About <span className="bg-clip-text text-transparent bg-gradient-to-b from-yellow-200 to-[#FFB703] bg-opacity-50">Me</span></h2>
          </div>
          <div className="flex lg:flex-row md:flex-col gap-28 justify-between">
            <div>
              <p className="text-neutral-500 max-w-lg mx-auto my-20 lg:text-lg md:text-base text-left relative z-10">
                  🚀 Hello, I am Ritesh, an Electrical Engineering graduate passionate about web development. 
                  With expertise in HTML5, CSS3, and JavaScript, I specialize in the MERN stack and have created multiple projects using that technology. 
                  I excel in problem solving, continually learning and solving challenges on GitHub and LeetCode. Let us collaborate and innovate in the exciting world of web development! 🌟
              </p>
            </div>
            <div>
              <Image src="/heroIMAGE.png" alt="Hero" width={500} height={500} className="object-cover h-auto lg:translate-y-6" />
            </div>
          </div>
        </div>
                
        {/* Tech Stack */}
        <div className="mx-auto mt-14 flex flex-col gap-5">
          <div>
            <h2 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"><span className="bg-clip-text text-transparent bg-gradient-to-b from-yellow-200 to-[#FFB703] bg-opacity-50">Tech</span> Stack</h2>
          </div>
          <div className="m-10">
          <Carousel>
                  <CarouselContent className="-ml-2 md:-ml-4">
                    <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <Image src="/vscode.svg" alt="vscode" width={200} height={200} className="my-auto mx-auto" />
                    </CarouselItem>
                    <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <Image src="/html5.svg" alt="vscode" width={200} height={200} className="my-auto mx-auto" />
                    </CarouselItem>
                    <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <Image src="/css-3.svg" alt="vscode" width={200} height={200} className="my-auto mx-auto" />
                    </CarouselItem>
                    <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <Image src="/tailwindcss.svg" alt="vscode" width={200} height={200} className="my-auto mx-auto" />
                    </CarouselItem>
                    <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <Image src="/bootstrap-4.svg" alt="vscode" width={200} height={200} className="my-auto mx-auto" />
                    </CarouselItem>
                    <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <Image src="/js.svg" alt="vscode" width={200} height={200} className="my-auto mx-auto" />
                    </CarouselItem>
                    <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <Image src="/react.svg" alt="vscode" width={200} height={200} className="my-auto mx-auto" />
                    </CarouselItem>
                    <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <Image src="/redux.svg" alt="vscode" width={200} height={200} className="my-auto mx-auto" />
                    </CarouselItem>
                    <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <Image src="/node.js.svg" alt="vscode" width={200} height={200} className="my-auto mx-auto" />
                    </CarouselItem>
                    <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <Image src="/express.svg" alt="vscode" width={200} height={200} className="my-auto mx-auto" />
                    </CarouselItem>
                    <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <Image src="/mongo.svg" alt="vscode" width={200} height={200} className="my-auto mx-auto" />
                    </CarouselItem>
                    <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <Image src="/C++.svg" alt="vscode" width={200} height={200} className="my-auto mx-auto" />
                    </CarouselItem>
                    <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <Image src="/postman.svg" alt="vscode" width={200} height={200} className="my-auto mx-auto" />
                    </CarouselItem>
                    <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <Image src="/git.svg" alt="vscode" width={200} height={200} className="my-auto mx-auto" />
                    </CarouselItem>                            
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
          </Carousel>
          </div>
        </div>

        {/* Projects */}
        <div className="mx-auto mt-16 flex flex-col gap-10 lg:bg-gradient-to-b lg:from-[#2D20C3] lg:to-[#000000] lg:py-10 lg:px-[450px] lg:rounded-t-3xl">
            <div>
              <h2 className="text-4xl md:text-7xl mx-5 mt-2 mb-0 font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">Projects</h2>
            </div>
            <div className="text-neutral-500 max-w-lg mx-auto my-1 text-xl font-semibold text-center relative z-10">
            <Drawer>
              <DrawerTrigger>To See Some of my Great Work click on me</DrawerTrigger>
                <DrawerContent className="bg-transparent">
                  <DrawerHeader>
                    <DrawerTitle>Here are some of my work.</DrawerTitle>
                    <DrawerDescription>Click the tab and find out.</DrawerDescription>
                  </DrawerHeader>
                  <div className="flex flex-row gap-5 mx-auto">
                    <CardContainer className="inter-var">
                      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                        <CardItem
                          translateZ="50"
                          className="text-xl font-bold text-neutral-600 dark:text-white"
                        >
                          Random Password Generator
                        </CardItem>
                        <CardItem
                          as="p"
                          translateZ="60"
                          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                        >
                          Generates custom passwords including alphabets, numericals and special characters. 
                        </CardItem>
                        <CardItem
                          translateZ="100"
                          rotateX={20}
                          rotateZ={-10}
                          className="w-full mt-4"
                        >
                          <Image
                            src="/image1.png"
                            height="1000"
                            width="1000"
                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                          />
                        </CardItem>
                        <div className="flex justify-between items-center mt-20">
                          <CardItem
                            translateZ={20}
                            translateX={40}
                            as="button"
                            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                          >
                            <a href="https://github.com/riteshshami/Random-Password-Generator">View on GitHub</a>
                          </CardItem>
                        </div>
                      </CardBody>
                    </CardContainer>
                    <CardContainer className="inter-var">
                      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                        <CardItem
                          translateZ="50"
                          className="text-xl font-bold text-neutral-600 dark:text-white"
                        >
                          StudyNotion Ed-Tech Platform
                        </CardItem>
                        <CardItem
                          as="p"
                          translateZ="60"
                          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                        >
                          Connects instructors and students and allows instructors to share their knowledge to students through paid courses.
                        </CardItem>
                        <CardItem
                          translateZ="100"
                          rotateX={20}
                          rotateZ={-10}
                          className="w-full mt-4"
                        >
                          <Image
                            src="/image2.png"
                            height="1000"
                            width="1000"
                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                          />
                        </CardItem>
                        <div className="flex justify-between items-center mt-20">
                          <CardItem
                            translateZ={20}
                            translateX={40}
                            as="button"
                            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                          >
                            <a href="https://github.com/riteshshami/MEGA_PROJECT/tree/main/StudyNotion">View on GitHub</a>
                          </CardItem>
                        </div>
                      </CardBody>
                    </CardContainer>
                    <CardContainer className="inter-var">
                      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                        <CardItem
                          translateZ="50"
                          className="text-xl font-bold text-neutral-600 dark:text-white"
                        >
                          Vacation Planar
                        </CardItem>
                        <CardItem
                          as="p"
                          translateZ="60"
                          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                        >
                          Provide multiple options of destinations for exploration based on their prices.
                        </CardItem>
                        <CardItem
                          translateZ="100"
                          rotateX={20}
                          rotateZ={-10}
                          className="w-full mt-4"
                        >
                          <Image
                            src="/image3.png"
                            height="1000"
                            width="1000"
                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                          />
                        </CardItem>
                        <div className="flex justify-between items-center mt-20">
                          <CardItem
                            translateZ={20}
                            translateX={40}
                            as="button"
                            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                          >
                            <a href="https://github.com/riteshshami/VacationPlanar">View on GitHub</a>
                          </CardItem>
                        </div>
                      </CardBody>
                    </CardContainer>
                  </div>
                  <DrawerFooter>
                    <DrawerClose>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
            </Drawer>
            </div>
        </div>

        {/* Connect Me */}
        <div className="flex flex-row items-center font-semibold bg-[#FFB703] text-[#2D20C3] rounded-[40px] mt-10">
          <div className="px-6 py-4 rounded-lg">
            <Sheet>
              <SheetTrigger>Contact Me</SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Contact Me</SheetTitle>
                  <SheetDescription>
                    <div className="text-xl font-semibold"><a href="mailto:riteshshami@gmail.com">Email: riteshshami@gmail.com</a></div>
                  </SheetDescription>
                  <Separator />
                  <SheetDescription>
                  <div className="text-xl font-semibold"><a href="tel:9557540607">Phone No.: +91 9557540607</a></div>
                  </SheetDescription>
                  <Separator />
                  <SheetDescription>

                  <div className="text-xl font-semibold"><a href="https://www.linkedin.com/in/ritesh1881/">LinkedIn: ritesh1881</a></div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div> 

        {/* Resume */}
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span><a href="/resume.pdf" download>Download Resume →</a></span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
    </main>
  );
}
