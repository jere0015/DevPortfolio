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
        <li><span className='font-semibold'>Programming Languages: </span>C#, Python, TypeScript, HTML/CSS</li>
        <li><span className='font-semibold'>Frameworks & Libraries: </span>.NET, ASP.NET Core MVC/API, EF Core, WPF, Blazor, Angular, jQuery </li>
        <li><span className='font-semibold'>Databases: </span>MSSQL, MongoDB</li>
        <li><span className='font-semibold'>Unit Testing: </span>xUnit, Fluent Assertions</li>
        <li><span className='font-semibold'>Machine Learning: </span>PyTorch, Pandas, NumPy, Scikit-Learn</li>
        <li><span className='font-semibold'>DevOps & Deployment: </span>Docker, Azure DevOps</li>
        <li><span className='font-semibold'>Other: </span>Agile Scrum, Git, Jira, Microsoft Teams, Office365, Windows</li>
        <br />
        <p><span className='font-semibold'>Currently learning: </span>Next.JS</p>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className='list-disc pl-2'>
        <li><span className='font-semibold'>P.ba. in Software Development</span> - UCL Erhvervsakademi & Professionshøjskole, Odense - <span className='italic'>Feb 2022 to Jun 2023</span></li>
        <li><span className='font-semibold'>Computer Science AK</span> - UCL Erhvervsakademi & Professionshøjskole, Odense - <span className='italic'>Sep 2018 to Jan 2022</span></li>
      </ul>
    )
  },
  {
    title: "Work experience",
    id: "work experience",
    content: (
      <ul className='list-disc pl-2'>
        <li><span className='font-semibold'>Software Developer Intern at Relesys</span> - <span className='italic'>Jan 2023 to Mar 2023</span></li>
        <li><span className='font-semibold'>Software Developer Intern at Cerebriu</span> - <span className='italic'>Aug 2021 to Oct 2021</span></li>
      </ul>
    )
  },
  {
    title: "Recommendation",
    id: "recommendation",
    content: (
      <p>
        Jeremy Andersen was a Software Developer Intern which I had the pleasure of mentoring from January 1st to March 31st. 
        During his time at Relesys he was assigned to the Product Development Team where he with great enthusiasm primarily 
        undertook backend-related assignments in C# and T-SQL., where the main focus was on implementing web based features
        to our product ASP.NET MVC. He quickly learned the fundamentals of the business logic behind the features he worked 
        on and contributed with solutions as to how problems and/or his assignments could be solved. He was part of a dedicated 
        team where he took part in daily stand-ups as well as internal developer meetings and sprint retrospectives. 
        He collaborated with QA engineers as well as stakeholders to implement, test and release production-ready 
        features within the given timeframe of completion.

        <br />
        <br />
        Thomas Jensen, 
        <br />
        toje@relesys.net
        <br />
        +45 20 62 99 10 

      </p>
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
            a focus on delivering according to the customer's needs. When I'm 
            not coding, I enjoy going to the gym, reading, or playing padel with
            friends.
          </p>
          <br />
          <p>I speak Danish & English</p>
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
            <TabButton
              selectTab={() => handleTabChange("recommendation")}
              active={tab === "recommendation"}
            >
              {" "}
              Recommendation{" "}
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