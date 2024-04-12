import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="footer p-10 flex justify-center items-center space-x-4 md:space-x-20 lg:space-x-60 text-black">
      <aside>
      <br />
      <p>Jeremy Howard Andersen<br/>jeremy@live.dk</p>
    </aside> 
    <nav>
      <header className="footer-title">Socials</header> 
        <div className="grid grid-flow-col gap-4">
          <div className='socials flex flex-row gap-6 mb-4'>
            <Link href="https://www.linkedin.com/in/jeremy-andersen-b73192192/" target="_blank">
              <Image 
                src="/linkedin.svg" 
                alt="LinkedIn Profile" 
                width={30} 
                height={30}
              />
            </Link>
            <Link href="https://github.com/jere0015" target="_blank">
              <Image 
                src="/github.svg" 
                alt="LinkedIn Profile" 
                width={30} 
                height={30}
              />
            </Link>
          </div>
      </div>
    </nav>
    </footer>
  )
}

export default Footer