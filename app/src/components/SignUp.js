import React,{useState} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    // async function signUpUser(event) {
    //     event.preventDefault()
    //     const response = await fetch('http://localhost:2004/api/signup', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             fname,lname,email, password,phone
    //         })
    //     })
    //     const data = await response.json()
    //     if(data.status){
    //         window.location.href = '/signin'
    //     }
    //     else{
    //         alert('Email already exists')
    //     }
    //     console.log(data);
    // }
    const nav = useNavigate();
    const handleRegister = async (e) => {
        try {
          e.preventDefault();
          console.log("hii")
          const response = await axios.post('http://localhost:2004/signup', {
            fname,
            lname,
            email,
            password,
            phone,
          });
          console.log(response.status);
          // Redirect to login page after successful registration
          nav('/signin')
        } catch (error) {
          console.error('Registration error:', error.response.status);
        }
      };
    
    return (
        <>
            <header className="bg-black fixed w-full z-50">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a href="#" className="title-font font-medium items-center text-white mb-4 md:mb-0">
                        <img className="w-40 h-6" src="./img/logo.png" alt="New Logo" />
                    </a>

                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 hover:text-gray-300 text-white text-lg" href="/">Home</a>
                        <a className="mr-5 hover:text-gray-300 text-white text-lg" href="/#contact">Contact</a>

                    </nav>
                    <a href="/signin"
                        className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 text-black">Sign
                        In
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </header>

            <div className=" px-6 py-24 sm:py-32 lg:px-8">
                <div className="relative bg-opacity-50 bg-gray-300 shadow-xl backdrop-filter backdrop-blur-lg rounded-md p-8 lg:w-1/3 md:w-96 mx-auto">
                    <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                        aria-hidden="true">
                        <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                            style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}>                </div>
                    </div>
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img className="mx-auto h-16 w-16" src="./img/title-b.png" alt="Your Company" />
                        <h2 className="text-center text-2xl font-bold leading-10 tracking-tight text-black">Sign Up</h2>
                    </div>
                    <form className="mx-auto mt-10 max-w-xl sm:mt-5">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label for="first-name" className="block text-sm font-semibold leading-6 text-black">First
                                    name</label>
                                <div className="mt-2.5">
                                    <input type="text" name="first-name" id="first-name" autocomplete="given-name" value={fname} onChange={(e) => setFname(e.target.value)}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div>
                                <label for="last-name" className="block text-sm font-semibold leading-6 text-black">Last
                                    name</label>
                                <div className="mt-2.5">
                                    <input type="text" name="last-name" id="last-name" autocomplete="family-name" value={lname} onChange={(e) => setLname(e.target.value)}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label for="email" className="block text-sm font-semibold leading-6 text-black">Email</label>
                                <div className="mt-2.5">
                                    <input type="email" name="email" id="email" autocomplete="email" value={email} onChange={(e) => setEmail(e.target.value)}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label for="email" className="block text-sm font-semibold leading-6 text-black">Create Password</label>
                                <div className="mt-2.5">
                                    <input type="password"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label for="email" className="block text-sm font-semibold leading-6 text-black">Confirm Password</label>
                                <div className="mt-2.5">
                                    <input type="password" name="password" id="password"  value={password} onChange={(e) => setPassword(e.target.value)}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label for="phone-number" className="block text-sm font-semibold leading-6 text-black">Phone
                                    number</label>
                                <div className="relative mt-2.5">
                                    <input type="tel" name="phone-number" id="phone-number" value={phone} onChange={(e) => setPhone(e.target.value)} autocomplete="tel"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>


                        </div>
                        <div className="mt-10">
                            <button
                                className="block w-full rounded-md bg-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600" onClick={handleRegister}>Register</button>
                        </div>
                        <p className="mt-6 text-center text-sm text-black">
                            Not a member?
                            <a href="/signin" className="font-semibold leading-6 text-gray-800 hover:text-grey-500"> SignIn</a>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}
export default SignUp;