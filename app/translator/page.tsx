import React from 'react'
import Image from 'next/image'

const Translator = () => {
  return (
    <div className="text-justify p-4 md:p-10 lg:p-16 max-w-4xl mx-auto py-36">
      <Image src="/translator_example.png" alt="Project 1" width={300} height={300} className="mx-auto w-auto h-auto" />
      <br />
      <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-center mt-4'>Text translator</h1>
      <p className="text-sm md:text-base lg:text-lg mt-4">
        Text translator is a web app for translating text with the option for switching between different
        machine translation providers.
      </p>
      <br />
      <p className="text-sm md:text-base lg:text-lg mt-4">
        The idea for this web app came from my previous internship, as I had to search for 
        new translation providers, which was a part of a proof-of-concept project I was given. To easily test them with my leader, I was asked to code a web app, 
        so I wouldn&apos;t have to switch between different tabs in Postman making API requests.
      </p>
      <br />
      <p className="text-sm md:text-base lg:text-lg mt-4">
        I started by going through what this web app needs in order to work. When knowing this app only had POST requests, I started coding it.
        Not that the tech stack mattered, but it was obvious I was gonna use ASP.NET Core MVC since that&apos;s the framework my internship used.
      </p>
      <br />
      <p className="text-sm md:text-base lg:text-lg mt-4">
        Here&apos;s the tech stack I used for this project.
      </p>
      <br />
      <h5 className='text-lg md:text-xl font-semibold'>Tech Stack:</h5>
      <ul className='list-disc pl-4 list-inside text-sm md:text-base lg:text-lg'>
        <li>ASP.NET Core MVC</li>
        <li>jQuery</li>
        <li>HTML/CSS</li>
        <li>Bootstrap</li>
      </ul>
      <br />
      <h5 className='text-lg md:text-xl font-semibold'>Features:</h5>
      <ul className='list-disc pl-4 list-inside text-sm md:text-base lg:text-lg'>
        <li>Choosing between different providers</li>
        <li>Choosing between different langauges</li>
        <li>Translate text to another language</li>
      </ul>
      <br />
      <p className="text-sm md:text-base lg:text-lg mt-4">
        The machine translation providers I found and included in this project are: Microsoft, DeepL and NLP Translation.
        In order to get this web app to work on your local machine, you need to provide an API key for each of the providers.
      </p>
    </div>
  )
}

export default Translator;
