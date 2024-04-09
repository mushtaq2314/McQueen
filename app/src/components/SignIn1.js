//jcbsd
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn1 = ({setData,data}) => {
    console.log(data)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const handleLogin = async (e) => {
            e.preventDefault();
            console.log('Login clicked');
          
            try {
              const response = await axios.post('http://localhost:2004/signin', {
                email,
                password,
              });
              await setData(data)
              navigate('/purchase'); // Navigate to home page after successful login
            } catch (error) {
              console.error('Login error:', error.response ? error.response.data : error.message);
            }
          };
    return (
        <div>
            <header className="bg-black">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <img className="w-40 h-6" src="./img/logo.png" alt="New Logo" />
                    </a>

                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 hover:text-gray-300 text-white text-lg" href="/">Home</a>
                        <a className="mr-5 hover:text-gray-300 text-white text-lg" href="/#contact">Contact</a>

                    </nav>
                    <a href="/signup">
                        <button
                            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 text-black">Sign
                            Up
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </a>
                </div>
            </header>

            <div className="flex min-h-full justify-center items-center mt-10">
                <div className="relative bg-opacity-50 shadow-xl bg-gray-300 backdrop-filter backdrop-blur-lg rounded-md p-8 w-full md:w-96 mt-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img className="mx-auto h-16 w-16" src="./img/title-b.png"
                            alt="Your Company" />
                        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-black">Sign in to your
                            account</h2>
                    </div>

                    <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" onSubmit={handleLogin}>
                            <div>
                                <label for="email" className="block text-sm font-medium leading-6 text-black">Email
                                    address</label>
                                <div className="mt-2">
                                    <input id="email" name="email" type="email" autocomplete="email" required value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="block w-full rounded-md border-0 px-2 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label for="password"
                                        className="block text-sm font-medium leading-6 text-black">Password</label>

                                </div>
                                <div className="mt-2">
                                    <input id="password" name="password" type="password" autocomplete="current-password"
                                        required value={password} onChange={(e) => setPassword(e.target.value)}
                                        className="block w-full rounded-md border-0 px-2 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div>
                                <button type="submit"
                                    className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleLogin}>Sign
                                    in</button>
                            </div>
                        </form>

                        <p className="mt-6 text-center text-sm text-black">
                            Not a member?
                            <a href="/signup" className="font-semibold leading-6 text-gray-800 hover:text-grey-500"> SignUp</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignIn1;