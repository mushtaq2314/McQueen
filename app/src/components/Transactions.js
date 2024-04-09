import axios from "axios";
import React, { useEffect, useState } from "react";

const Transactions = () => {
    const data = JSON.parse(localStorage.getItem('UserData'));
    const userEmail = data.Email;

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        axios.post(`http://localhost:2004/transactions/${userEmail}`)
            .then(response => {
                setTransactions(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [userEmail]);

    return (
        <div className="flex">
            {/* Sidebar */}
            <aside className="w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-black dark:border-gray-700 fixed">
                <a href="#" className="mx-auto">
                    <img className="w-48 h-6 sm:h-7" src="./img/logo.png" alt="" />
                </a>

                <div className="flex flex-col items-center mt-6 -mx-2">
                    <img className="object-cover w-52 h-48 mx-4 rounded-full" src="https://gopostr.s3.amazonaws.com/favicon_url/CMXfauwVNmmVLyKpV0Qkg582dzzQWcp0Eje9gMiQ.png" alt="avatar" />
                    <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">{data.FirstName}</h4>
                    <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">{data.Email}</p>
                </div>

                <div className="flex flex-col justify-between flex-1 mt-6">
                    <nav>
                        <a className="flex items-center px-4 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="/dashboard">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <span className="mx-4 font-medium">Dashboard</span>
                        </a>

                        <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="/profile">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <span className="mx-4 font-medium">Profile</span>
                        </a>

                        <a className="flex items-center px-4 py-2 mt-5 text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200" href="#">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <span className="mx-4 font-medium">Transactions</span>
                        </a>

                        <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="/">
                            <svg className="w-5 h-5" style={{ marginLeft: '4px', marginRight: '-4px' }} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3" />
                            </svg>

                            <span className="mx-4 font-medium">Logout</span>
                        </a>
                    </nav>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto p-8">
                {transactions.length === 0 ? (
                    <div className="flex items-center justify-center h-screen">
                        <h1 className="text-center font-bold text-4xl">You have not done any transaction yet..</h1>
                    </div>
                ) : (
                    <div className="flex flex-col items-start">
                        {transactions.map((transaction) => (
                            <section key={transaction._id} className="text-gray-600 body-font overflow-hidden shadow-xl w-2/3 ml-96 mb-4 bg-white border-2 rounded-xl">
                                <div className="container px-5 py-5 mx-auto flex items-center">
                                    <img alt="ecommerce" className="w-1/2 h-auto object-cover object-center rounded" src={transaction.ImgUrl} />
                                    <div className="w-full pl-10 py-6 mt-6">
                                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{transaction.Name}</h1>
                                        <div className="flex">
                                            <span className="title-font font-medium text-2xl text-gray-900 mt-4">ID: {transaction._id}</span>
                                        </div>
                                        <div className="flex">
                                            <span className="title-font font-medium text-2xl text-gray-900 mt-4">Rs. 60.11 Lakh/-</span>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Transactions;
