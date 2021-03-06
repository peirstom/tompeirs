// Step 1: Import your component
import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'


// Defining the <Greeting> component
const Hero = (props) => {
    return (
        <section className="text-blueGray-700 ">
        <div className="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
          <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
            <h2 className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font"> Hi, my name is </h2>
            <h1 className="mb-8 text-2xl font-black tracking-tighter text-black md:text-5xl title-font"> Tom Peirs. </h1>
            <p className="mb-8 text-base leading-relaxed text-left text-blueGray-600 "> I'm a web developer specializing in building exceptional digfital experiences. Currently I'm focuson on building accessible, fast, SEO friendly, performant web solutions. My focus is Headles CMS systems, that is a system that acts primaraly as a content repository. A headless CMS makes contrent accessible via an API for display on any device, without a build-in front-end. </p>
            <div className="flex flex-col justify-center lg:flex-row">
              <button className="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"> Get In Touch ;-) </button>
              {/* <p className="mt-2 text-sm text-left text-blueGray-600 md:ml-6 md:mt-0"> It will take you to candy shop. <br className="hidden lg:block" />
                <Link to="#" className="inline-flex items-center font-semibold text-blue-600 md:mb-2 lg:mb-0 hover:text-black " title="read more"> Read more about it » </Link>
              </p> */}
            </div>
          </div>
          <div className="w-full lg:w-5/6 lg:max-w-lg md:w-1/2">
            <StaticImage className="object-cover object-center rounded-lg " alt="Tom Peirs with a coffee cup" src="../images/tom.jpg"></StaticImage>
          </div>
        </div>
      </section>
    )
  }

export default Hero