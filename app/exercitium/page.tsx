import React from 'react'
import Image from 'next/image'

const Exercitium = () => {
  return (
    <div className="text-justify p-4 md:p-10 lg:p-16 max-w-4xl mx-auto py-36">
      <Image src="/ExercitiumLogo.png" alt="Project 1" width={300} height={300} className="mx-auto w-auto h-auto" />
      <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-center mt-4'>Exercitium</h1>
      <p className="text-sm md:text-base lg:text-lg mt-4">
        Exercitium is a web app where you can track your workouts. After a workout, you log it on Exercitium,
        so you can look back at your previous workouts and see how much you have progressed over time.
      </p>
      <br />
      <p className="text-sm md:text-base lg:text-lg mt-4">
        The idea for Exercitium came from wanting to track my own fitness journey using a
        fitness tracker app from the App Store, but seeing the apps prices for a monthly subscription
        got me thinking if there was a way around this subscription, and then came the idea of
        creating my own fitness tracker app.
      </p>
      <br />
      <p className="text-sm md:text-base lg:text-lg mt-4">
        I started brainstorming ideas for the app regarding the point of it, features and platforms. 
        Instead of solely developing the app for my own sake, I began thinking of it as an app for 
        other people to use as well. Exercitium would be most accessible as a mobile app, so you 
        don't have to open your computer each time you want to register a workout or view your statistics.
        But since I don't have any mobile development experience and just wanted to develop an MVP, I 
        decided to create it as a web app.
      </p>
      <br />
      <p className="text-sm md:text-base lg:text-lg mt-4">
        I wrote all of the ideas for this app along with its features, tech stack and project management in
        OneNote. Here's what I came up with.
      </p>
      <br />
      <h5 className='text-lg md:text-xl font-semibold'>Tech Stack:</h5>
        <ul className='list-disc pl-4 list-inside text-sm md:text-base lg:text-lg'>
          <li>ASP.NET Core MVC</li>
          <li>EF Core</li>
          <li>MSSQL</li>
          <li>jQuery</li>
          <li>HTML/CSS</li>
          <li>Bootstrap</li>
        </ul>
      <br />
      <h5 className='text-lg md:text-xl font-semibold'>Features:</h5>
        <ul className='list-disc pl-4 list-inside text-sm md:text-base lg:text-lg'>
          <li>CRUD operations for Workouts</li>
          <li>CRUD operations for Exercises</li>
          <li>Statistics</li>
          <li>Authentication/Authorization with Identity</li>
          <li>Administrate roles (admin only)</li>
          <li>Administrate exercises (admin only)</li>
        </ul>
      <br />
      <p className="text-sm md:text-base lg:text-lg mt-4">
        Before I start to create a new project in Visual Studio and code it, I have to know about each classes
        relationships with each other. I then design an Entity Relation Diagram, where I apply the rules of normalization 
        here to make sure my system follows the 3rd normal form (3NF). When that's done, I can then begin to code my web app and connect it with a database.
      </p>
      <br />
      <Image src="/Exercitium_ER_Diagram.png" alt="Project 2" width={500} height={300} className="mx-auto w-auto h-auto" />
      <br />
      <h2 className='mt-4 text-1xl md:text-2xl lg:text-2xl font-semibold'>
        Workout
      </h2>
      <p className="text-sm md:text-base lg:text-lg mt-4">
        The Workout page is where a user can register their workouts. The is the most crucial part of this system
        along with the Statistics page. I wanted this page to be simple to use, so from the Workout Overview, you click 
        'create new workout' which takes you to a new page, where you simply fill out the
        date of the workout along with the type of workout. Then, you can choose from a list of exercises the 
        ones you want to add to your workout. For each chosen exercise, you fill out the amount of sets, reps and weight.
        Click create, and then you will be able to see your new workout in the Workout Overview, where you can then view,
        edit or delete it.
      </p>
      <br />
      <Image src="/ExercitiumWorkout.png" alt="Project 3" width={300} height={300} className="mx-auto w-auto h-auto" />
      <br/>
      <h2 className='mt-4 text-1xl md:text-2xl lg:text-2xl font-semibold'>
        Statistics
      </h2>
      <p className="text-sm md:text-base lg:text-lg mt-4">
        The Statistics page is where you see all your progress made in your fitness journey using a line chart.
        You start by selecting which exercise you want to inspect, and then you will be able to see your progress 
        with the chosen exercise in the line chart, by seeing how much weight you used when starting out until your most recent workout.
      </p>
      <Image src="/ExercitiumStatistics.png" alt="Project 1" width={500} height={300} className="mx-auto w-auto h-auto" />  
    </div>
  )
}

export default Exercitium