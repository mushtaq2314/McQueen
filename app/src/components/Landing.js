import React from "react";

const Landing = ()=>{
    return(
    <div id="body">
    <section id="home">
        <header className="text-gray-600 body-font bg-transperant">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center" id="navbar">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="#home">
                    <img src="./img/logo.png" alt="" className="w-2/5"/>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-10 text-xl text-white hover:text-gray-400 cursor-pointer" href="#home">Home</a>
                    <a className="mr-10 text-xl text-white hover:text-gray-400 cursor-pointer" href="#services">Services</a>
                    <a className="mr-10 text-xl text-white hover:text-gray-400 cursor-pointer"
                        href="#portfolio">Portfolio</a>
                        <a className="mr-10 text-xl text-white hover:text-gray-400 cursor-pointer" href="#team">Team</a>
                    <a className="mr-10 text-xl text-white hover:text-gray-400 cursor-pointer" href="#about">About</a>
                    <a className="mr-10 text-xl text-white hover:text-gray-400 cursor-pointer" href="#contact">Contact</a>
                </nav>
                <a href="/signin">
                <button
                    className="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 font-bold" >Login
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button></a>
            </div>
        </header>
        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover', zIndex: 1, position: 'absolute', top: 0 }}>
            <source src="./img/back.mp4" type="video/mp4"/>
        </video>
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col" style={{marginTop: '12%'}}>

                <div className="text-center lg:w-2/3 w-full z-10">
                    <h1 className="title-font sm:text-4xl text-4xl mb-4 font-medium text-white italic">Welcome to our
                        website!</h1>
                    <p className="mb-8 text-white font-bold text-7xl">IT'S NICE TO MEET YOU</p>
                    <div className="flex justify-center mt-4">
                        <a className="inline-block align-middle text-center select-none border font-bold whitespace-no-wrap rounded py-5 px-10 leading-normal no-underline bg-white text-black hover:bg-gray-200 uppercase mt-16 text-xl"
                            href="#services" style={{marginRight: '10px'}}>Tell Me More</a>
                        <a className="inline-block align-middle text-center select-none border font-bold whitespace-no-wrap rounded py-5 px-10 leading-normal no-underline bg-white text-black hover:bg-gray-200 uppercase mt-16 text-xl"
                            href="/search" style={{marginLeft: '10px'}}>Explore Cars</a>
                    </div>
                </div>
            </div>
        </section>
    </section>
    <section className="section mt-10" id="services">
        <div className="container px-5 py-24 mx-auto" style={{textAlign: 'center'}}>
            <h1 className="text-white text-4xl font-bold mt-4">SERVICES</h1>
            <h2 className="text-white text-xl mt-4">Get the best services available on our website</h2>
            <div className="flex flex-wrap mx-6 my-24">
                <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 mr-2 -ml-2" id="glass">
                    <div className="h-full text-center">
                        <h2 className="text-white font-medium title-font tracking-wider text-3xl">Best Car Deals</h2>
                        
                        <p className="text-white mt-6">Explore a diverse range of top-notch vehicles at McQueen, where transparency meets trust. From meticulously maintained pre-owned cars to the latest models, we cater to your preferences and budget. Join our community for a seamless car-buying experience.</p>

                        <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                    </div>
                </div>
                <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 mr-2" id="glass">
                    <div className="h-full text-center">
                        <h2 className="text-white font-medium title-font tracking-wider text-3xl">
Exceptional Experiences</h2>
                        
                        <p className="text-white mt-6">At McQueen, we redefine car ownership with unparalleled transparency and a commitment to your satisfaction. Our extensive inventory includes the latest models and well-maintained pre-owned vehicles, ensuring a perfect match for every lifestyle. Join us on the road to exceptional car-buying experiences.</p>

                        <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                    </div>
                </div>
                <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 -mr-2" id="glass">
                    <div className="h-full text-center">
                        <h2 className="text-white font-medium title-font tracking-wider text-3xl">McQueen Driving Experience</h2>
                        
                        <p className="text-white mt-6">Embark on a journey with McQueen, where innovation meets reliability. Our platform offers a seamless car-buying experience, providing a vast inventory of the latest models and well-maintained pre-owned vehicles. Discover the joy of driving with McQueen - your destination for quality, trust, and exceptional service.</p>

                        <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <section className="section" id="portfolio">
        <div className="container px-5 py-20 mx-auto" style={{textAlign: 'center'}}>
            <h1 className="text-white text-4xl font-bold mt-4">PORTFOLIO</h1>
            <h2 className="text-white text-xl mt-4">Explore a wide range of cars on this website</h2>
            <div className="flex flex-wrap mx-6 mt-6">
                <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 mr-2 -ml-2" id="glass">
                    <p className="text-3xl font-bold text-center text-white">EV</p>
                    <img className="img-fluid" src="./img/portfolio/ev.jpeg" alt="..." />
                </div>
                <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 mr-2 -ml-2" id="glass">
                    <p className="text-3xl font-bold text-center text-white">SportsCar</p>
                    <img className="img-fluid" src="./img/portfolio/sportscar.jpeg" alt="..." />
                </div>
                <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 mr-2 -ml-2" id="glass">
                    <p className="text-3xl font-bold text-center text-white">Regular</p>
                    <img className="img-fluid" src="./img/portfolio/regular.jpeg" alt="..." />
                </div>


            </div>
        </div>
    </section>
    <section className="section" id="team">
        <div className="container px-5 py-20 mx-auto" style={{textAlign: 'center'}}>
            <h1 className="text-white text-4xl font-bold mt-4">TEAM</h1>
            <h2 className="text-white text-xl mt-4">Meet our amazing team</h2>
            <div className="flex flex-wrap mx-10 mt-6" style={{marginLeft:"10%"}}>
                <div className="lg:w-1/4 lg:mb-0 mb-6 p-4 mr-2 -ml-2" style={{marginRight:"10%"}}>
                    <img className="rounded-full" src="./img/team/team.png" alt="..." />
                    <p className="text-3xl font-bold text-center text-white">Monesh </p>
                </div>
                <div className="lg:w-1/4 lg:mb-0 mb-6 p-4 mr-2 -ml-2" style={{marginRight:"10%"}}>
                    <img className="rounded-full" src="./img/team/team.png" alt="..." />
                    <p className="text-3xl font-bold text-center text-white">Mushtaq </p>
                </div>
                <div className="lg:w-1/4 lg:mb-0 mb-6 p-4 mr-2 -ml-2">
                    <img className="rounded-full" src="./img/team/team.png" alt="..." />
                    <p className="text-3xl font-bold text-center text-white">Aashrith </p>
                </div>
                
            </div>
        </div>
    </section>
    <section className="section" id="about">
        <div className="container px-5 py-20 mx-auto" style={{textAlign: 'center'}}>
            <h1 className="text-white text-4xl font-bold mt-28">ABOUT</h1>
            <div className="flex flex-wrap mx-6 mt-12 mb-4">
                <p id="about" className="text-white text-xl w-3/4 ml-40">Welcome to McQueen, your premier destination for top-notch car deals and exceptional service. At McQueen, we pride ourselves on providing a seamless and unparalleled car-buying experience. With a vast inventory of the latest models and well-maintained pre-owned vehicles, we cater to diverse preferences and budgets. Our team of knowledgeable and friendly experts is dedicated to assisting you in finding the perfect car to suit your lifestyle. Transparency and trust are the cornerstones of our business, ensuring you make an informed decision with confidence. Explore our range of services, from hassle-free financing options to comprehensive vehicle maintenance packages. At McQueen, we go the extra mile to make your car ownership dreams a reality. Join our community of satisfied customers who trust us for quality, reliability, and unmatched customer service. Discover the joy of driving with McQueen – where your journey begins with the perfect car.</p>

            </div>
        </div>
    </section>
    <section className="text-gray-600 body-font relative" id="contact">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-4xl mb-4 text-white font-bold">Contact Us</h1>
            <p className="lg:w-2/3 mx-auto text-white text-base">Feel free to reach out to us</p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
                  <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                  <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
                  <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>)
}
export default Landing;