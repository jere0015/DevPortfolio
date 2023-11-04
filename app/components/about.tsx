"use client"
import React, {useTransition, useState, startTransition } from 'react'
import Image from 'next/image'
import TabButton from './tabbutton'

interface TabDataItem {
  title: string;
  id: string;
  content: React.ReactNode;
}

const TAB_DATA: TabDataItem[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='list-disc pl-2'>
        <li>C#</li>
        <li>.NET</li>
        <li>Python</li>
        <li>HTML/CSS</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className='list-disc pl-2'>
        <li>Pba in Software Development</li>
        <li>Computer Science</li>
      </ul>
    )
  },
  {
    title: "Work experience",
    id: "work experience",
    content: (
      <ul className='list-disc pl-2'>
        <li>Software Developer Intern at Relesys - Jan 2023 to Mar 2023</li>
        <li>Software Developer Intern at Cerebriu - Aug 2021 to Oct 2021</li>
      </ul>
    )
  }
]

const About: React.FC = () => {
  const [tab, setTab] = useState("skills")
  const [isPending, startTransition] = useTransition()

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id)
    })
  }

  return (
    <section id="about">
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image
        src='/graduation_ucl.png'
        alt='graduation'
        width={300}
        height={300}
        />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold mb-4'>About Me</h2>
          <p className='text-base lg:text-lg'>
            Programmer with a passion for developing software and learning
            something new every day. I am used to working in agile teams with
            a focus on delivering according to the customer’s needs.
          </p>
          <div className='flex flex-row justify-start mt-8'>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("work experience")}
              active={tab === "work experience"}
            >
              {" "}
              Work experience{" "}
            </TabButton>
          </div>
          <div className='mt-8'>
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About