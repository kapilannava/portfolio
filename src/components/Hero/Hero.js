import React from 'react';

const Hero = () => {

    return(
        <section className="min-h-screen pt-36 text-center">
            <h1 className="text-4xl md:text-6xl px-4 md:px-72 font-bold">
                Welcome to my portfolio.
            </h1>
                <p className="pt-4 px-16 text-lg">
                    I'm building it using Gatsby and Tailwind
                </p>

            <button className="p-1 w-9/12 md:w-40 mt-4 rounded-full bg-blue-700 text-lg text-white">
                Get Started!
            </button>

        </section>
    )
}

export default Hero;