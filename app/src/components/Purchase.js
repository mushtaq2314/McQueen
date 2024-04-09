import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Purchase = ({setTID}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [file, setFile] = useState();
  const nav = useNavigate();
  const handlePurchase = async (e) => {
    e.preventDefault()
    console.log('form submitted')
    const data = localStorage.getItem('data')
    const formData = new FormData();
    formData.append('file', file);
    formData.append('data', data);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);

    axios.post('http://localhost:2004/purchase', formData)
      .then(res => {
        console.log(res.data);
        setTID(res.data.TID)
        nav('/done')
      })
      .catch(err => {
        console.error(err);
      });



  }
  return (
    <>
      <header class="bg-black">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a href="signup.html" class="title-font font-medium items-center text-white mb-4 md:mb-0">
            <img class="w-40 h-6" src="./img/logo.png" alt="New Logo" />
          </a>

          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-gray-300 text-white" href="/">Home</a>
            <a class="mr-5 hover:text-gray-300 text-white" href="/#contact">Contact</a>

          </nav>

        </div>
      </header>

      <section class="text-black body-font relative">
        <div class="container px-5 py-12 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Verification</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Please provide the following details</p>
          </div>
          <form onSubmit={handlePurchase} enctype="multipart/form-data">
            <div class="lg:w-1/2 md:w-2/3 mx-auto">
              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm text-black">Name</label>
                    <input type="text" required value={name}
                      onChange={(e) => setName(e.target.value)} id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="email" class="leading-7 text-sm text-black">Email</label>
                    <input type="email" required value={email}
                      onChange={(e) => setEmail(e.target.value)} id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="phone" class="leading-7 text-sm text-black">Phone</label>
                    <input type="phone" required value={phone}
                      onChange={(e) => setPhone(e.target.value)} id="phone" name="phone" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="payment_screenshot" class="leading-7 text-sm text-black">Token Payment Screenshot (Rs. 5000) </label>

                    <input type="file" required
                      onChange={(e) => {
                        setFile(e.target.files[0]);
                        console.log(e.target.files[0])
                      }} id="payment_screenshot" name="payment_screenshot" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                  </div>
                </div>
                <div class="p-2 w-full">
                  <div class="relative">
                    <label for="message" class="leading-7 text-sm text-black">Message</label>
                    <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                  </div>
                </div>
                <div class="p-2 w-full">
                  <button class="flex mx-auto text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-white hover:text-black hover:border-2 hover:border-black rounded text-lg" type="submit">Button</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
export default Purchase;