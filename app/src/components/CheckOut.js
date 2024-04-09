import React from "react";

const CheckOut = ({ data , setData}) => {
    console.log(data)
    setData(data)
    localStorage.setItem('data',JSON.stringify(data))
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
                    <a href="/signup"
                        class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 text-black">Sign
                        Up
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </header>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex flex-wrap px-5 py-4 items-center justify-center">
                    <img class="lg:w-3/6 md:w-3/6 w-5/6 mb-6 mt-5 object-cover object-center rounded" alt="hero" src={data.imgUrl} />
                    <table class="w-full lg:w-2/6 md:w-3/6 ml-10 text-sm text-left rtl:text-right text-gray-900">
                        <thead class="text-xs text-white uppercase bg-black">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Feature
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Rating
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(data.reviews.individualRatings).map(([key, value], index) => (
                                <tr key={index} class="bg-gray-100">
                                    <th scope="row" class="px-6 py-3 font-medium text-black whitespace-nowrap border-b-2">
                                        {key.charAt(0).toUpperCase() + key.slice(1)}
                                    </th>
                                    <td class="px-6 py-3 border-b-2">
                                        {value}
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>


                </div>


            </section>
            <section class="text-gray-600 body-font">
                <div class="container px-5 mx-auto">
                    <div class="text-center mb-6">
                        <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">{data.name} Specifications</h1>
                    </div>
                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 lg:w-1/4 sm:w-1/2 w-full lg:pl-12">
                            <h2 class="font-medium title-font tracking-widest text-gray-900 mb-4 text-lg text-center sm:text-left">ENGINE AND TRANSMISSION</h2>
                            <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                                <p>
                                    <span class="font-bold">
                                    Engine Type : </span>
                                    {data.carData.powertrain_architecture}
                                </p>
                                
                                <p>
                                    <span class="font-bold">
                                    Displacement (in cu.cm ) : </span>
                                    {data.carData.engine_displacement}
                                </p>
                                <p>
                                    <span class="font-bold">
                                    Max Power :  </span>
                                    {data.carData?.power}
                                </p>
                                <p>
                                    <span class="font-bold">
                                    Max Torque (in N) : </span>
                                    {data.carData?.torque}
                                </p>
                                <p>
                                    <span class="font-bold">
                                    Number of cylinders : </span>
                                    {data.carData?.number_of_cylinders}
                                </p>
                                <a>
                                    <span class="font-bold">
                                    Valves per cylinder : </span>
                                    {data.carData?.number_of_valves_per_cylinder}
                                </a>
                                <a>
                                    <span class="font-bold">
                                    Engine Aspiration : </span>
                                    {data.carData?.engine_aspiration}
                                </a>
                                <a>
                                    <span class="font-bold">
                                    Gear Box and Transmission Type : </span>
                                    {data.carData?.number_of_gears_and_type_of_gearbox}
                                </a>
                                <a>
                                    <span class="font-bold">
                                    Drive Type : </span>
                                    {data.carData?.drive_wheel}
                                </a>
                            </nav>
                        </div>
                        <div class="p-4 lg:w-1/4 sm:w-1/2 w-full lg:pl-12">
                            <h2 class="font-medium title-font tracking-widest text-gray-900 mb-4 text-lg text-center sm:text-left">FUEL AND PERFORMANCE</h2>
                            <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                                <a>
                                    <span class="font-bold">Fuel Type : </span>
                                    {data.carData?.fuel_type}
                                </a>
                                <a>
                                    <span class="font-bold">
                                    Mileage (in kmpl) : </span>
                                    {data.carData?.fuel_consumption_economy_combined}
                                </a>
                                <a>
                                    <span class="font-bold">
                                    CO2 emissions : </span>
                                    {data.carData?.co2_emissions}
                                </a>
                                <a>
                                    <span class="font-bold">
                                    Fuel Tank Capacity (in l) : </span>
                                    {data.carData?.fuel_tank_capacity_l}
                                </a>
                                <a>
                                    <span class="font-bold">
                                    Emission Standard : </span>
                                    {data.carData?.emission_standard}
                                </a>
                                <a>
                                    <span class="font-bold">
                                    Maximum Speed (in mph) : </span>
                                    {data.carData?.maximum_speed_mph}
                                </a>
                                <a>
                                    <span class="font-bold">
                                    Acceleration 0-100 kmph (in s) : </span>
                                    {data.carData?.acceleration_0_100_kmh}
                                </a>
                            </nav>
                        </div>
                        <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
                            <h2 class="font-medium title-font tracking-widest text-gray-900 mb-4 text-lg text-center sm:text-left">SUSPENSION AND STEERING</h2>
                            <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                                <a>
                                    <span class="font-bold">
                                    Front Suspension : </span>
                                    {data.carData?.front_suspension}
                                </a>
                                <a>
                                    <span class="font-bold">
                                    Rear Suspension : </span>
                                    {data.carData?.rear_suspension}
                                </a>
                                <a>
                                    <span class="font-bold">
                                    Steering Type : </span>
                                    {data.carData?.steering_type}
                                </a>
                                <a>
                                    <span class="font-bold">
                                    Assisting Systems : </span>
                                    {data.carData?.assisting_systems}
                                </a>
                                <a>
                                    <span class="font-bold">
                                    Front brakes : </span>
                                    {data.carData?.front_brakes}
                                </a>
                                <a>
                                    <span class="font-bold">
                                    Rear brakes : </span>
                                    {data.carData?.rear_brakes}
                                </a>
                            </nav>
                        </div>
                        <div class="p-4 lg:w-1/4 sm:w-1/2 w-full lg:pl-6">
                            <h2 class="font-medium title-font tracking-widest text-gray-900 mb-4 text-lg text-center sm:text-left">DIMENSIONS AND CAPACITY</h2>
                            <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                                <a>
                                    <span class="font-bold">
                                    Length(in mm) : </span>
                                    {data.carData?.length_mm}
                                </a>
                                <a>
                                    <span class="font-bold">
                                    Width(in mm) : </span>
                                    {data.carData?.width_mm}
                                </a>
                                <a>
                                    <span class="font-bold">
                                    Height(in mm) : </span>
                                    {data.carData?.height_mm}
                                </a>
                                <a>
                                    <span class="font-bold">
                                    Boot Space(in l) : </span>
                                    {data.carData?.trunk_boot_space_minimum}
                                </a>
                                <a>
                                    <span class="font-bold">
                                    Number of Doors : </span>
                                    {data.carData?.doors}
                                </a>
                                <a>
                                    <span class="font-bold">
                                    Seating Capacity : </span>
                                    {data.carData?.seats}
                                </a>
                                <a>
                                    <span class="font-bold">
                                    WheelBase (in mm) : </span>
                                    {data.carData?.wheelbase_mm}
                                </a>
                                <a>
                                    <span class="font-bold">
                                    Kerb Weight (in kgs) : </span>
                                    {data.carData?.kerb_weight_kg}
                                </a>
                                <a>
                                    <span class="font-bold">
                                    Max Weight (in kgs) : </span>
                                    {data.carData?.max_weight_kg}
                                </a>

                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            <section class="text-gray-600 body-font overflow-hidden mx-6">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-12">
                        <div class="px-12 md:w-1/2 flex flex-col items-start">
                            <span class="inline-block py-2 px-2 rounded bg-indigo-50 text-black text-xl font-medium tracking-widest mb-4">PROS</span>
                            {data.reviews.pros.map((x, index) => {

                                return <p class="leading-relaxed mb-4 ml-4">{index + 1}. {x}</p>
                            })}

                        </div>
                        <div class="px-12 md:w-1/2 flex flex-col items-start">
                            <span class="inline-block py-2 px-2 rounded bg-indigo-50 text-black text-xl font-medium tracking-widest mb-4">CONS</span>
                            {data.reviews.cons.map((x, index) => {

                                return <p class="leading-relaxed mb-4 ml-4">{index + 1}. {x}</p>
                            })}

                        </div>
                    </div>
                </div>
                <a href="/signin1">
                    <button
                        class="flex mx-auto text-white bg-black border-0 py-2 px-8 focus:outline-none rounded text-lg mb-10">Proceed</button></a>
            </section>

        </>
    )
}
export default CheckOut;