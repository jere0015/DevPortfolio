import React from 'react'
import Image from 'next/image'
import Link from "next/link";

const Home = () => {
  return (
    <section className='lg:py-36'>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className='mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold text-transparent bg-clip-text bg-gradient-to-r text-black'>
            Jeremy Andersen
          </h1>
          <p className='text-base sm:text-lg mb-6 lg:text-xl'>
            Software Developer
          </p>
          <div className='socials flex flex-row gap-6 mb-4'>
            <Link href="https://linkedin.com">
              <Image 
                src="/linkedin.svg" 
                alt="LinkedIn Profile" 
                width={40} 
                height={40}
              />
            </Link>
            <Link href="https://github.com/jere0015">
              <Image 
                src="/github.svg" 
                alt="LinkedIn Profile" 
                width={40} 
                height={40}
              />
            </Link>
          </div>
        </div>
        <div className='col-span-4 place-self-center mt-4 lg:mt-0'>
          <div className="rounded-full w-[250px] h-[300px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/pb_koln.jpg"
              alt='profile'
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              width={350}
              height={350}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home