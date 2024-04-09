import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const Search = ({ setData }) => {
  const [car, setCar] = useState('');
  const [APIdata, setAPIdata] = useState([]);
  const [Imgs, setImgs] = useState([]);
  const [filledStars, setFilled] = useState([]);
  const [emptyStars, setEmpty] = useState([]);
  const [reviews, setReview] = useState('');
  const navigate = useNavigate()
  useEffect(() => {
    // Log state values whenever they change
    console.log("APIdata:", APIdata);
    console.log("Imgs:", Imgs);
  }, [APIdata, Imgs]);
  async function loadData(event) {
    event.preventDefault();
    //API connectivity goes here
    const arr = car.split(' ')
    console.log('car', car)
    console.log(arr)
    try {
      const response = await axios.post('http://localhost:2004/search', { car:car,arr:arr });
      const { api1Data, api2Data } = response.data;
  
      // Set the states based on the backend response
      setAPIdata(api1Data);
      setImgs(api2Data.items);
      // ... (rest of your state updates)
    } catch (error) {
      console.error(error);
    }
    
    
    const reviews = {
          "pros": [
            "Balances sharp handling with a ride quality that won't beat you up",
            "Strong and efficient four- and six-cylinder engines",
            "Interior is upscale and spacious, with logical, easy-to-use controls"
          ],
          "cons": [
            "New iDrive system is more convoluted to use than before",
            "Unrefined operation of some driver assist features",
            "No longer offers a manual transmission"
          ],
          "totalRating": "3.8",
          "fiveStars": "50%",
          "fourStars": "17%",
          "threeStarts": "11%",
          "twoStars": "11%",
          "oneStar": "11%",
          "individualRatings": {
            "comfort": "3.8",
            "driving": "4",
            "utility": "3.5",
            "interior": "3.7",
            "technology": "4",
            "performance": "4.1",
            "quality": "3.8",
            "reliability": "3.6",
            "styling": "3.9",
            "value": "3.4"
          }
    }
    
    setReview(reviews)
    console.log('this is APIdata')
    console.log(APIdata)
    console.log('this is Imgs')
    console.log(Imgs)

    const filledStars = Array.from({ length: parseInt(reviews.totalRating) }, (_, index) => (
      <svg
        key={index}
        fill="currentColor"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        className="w-4 h-4 text-black"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
      </svg>
    ));

    // Assuming `rating` is the variable with the integer value
    const emptyStars = Array.from({ length: 5 - parseInt(reviews.totalRating) }, (_, index) => (
      <svg
        key={index}
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        className="w-4 h-4 text-black"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
      </svg>
    ));
    setFilled(filledStars)
    setEmpty(emptyStars)
  }

  async function handleCheckout(index) {
    const single = {
      "total_matches": 84,
      "reuslts": [
        {
          "title": "BMW X1 (E84 Facelift 2012) 16d (116 Hp) sDrive 2012, 2013, 2014, 2015 Specs",
          "what_is_the_body_type_bmw_x1_e84_facelift_2012": "SUV, 5 Doors, 5 Seats",
          "what_is_the_fuel_economy_bmw_x1_e84_facelift_2012_16d_116_hp_sdrive": "4.9  l/100 km  48 US mpg  57.65 UK mpg  20.41 km/l",
          "how_eco_is_the_car_bmw_x1_16d_116_hp_sdrive": "128  g/km CO2Euro 5",
          "how_fast_is_the_car_2012_x1_e84_facelift_2012_16d_116_hp_sdrive": "190 km/h | 118.06 mph0-100 km/h: 11.5  sec0-60 mph: 10.9 sec",
          "how_much_power_bmw_x1_suv_2012_16d_116_hp_sdrive": "116  Hp, 260  Nm191.77 lb.-ft.",
          "what_is_the_engine_size_bmw_x1_suv_2012_16d_116_hp_sdrive": "2.0 l1995  cm3 121.74 cu. in.",
          "how_many_cylinders_2012_bmw_16d_116_hp_sdrive": "4, Inline",
          "what_is_the_drivetrain_bmw_x1_e84_facelift_2012_suv_2012_16d_116_hp_sdrive": "Rear wheel drive. Internal Combustion engine. The Internal combustion engine (ICE) drives the rear wheels of the vehicle.",
          "how_long_is_this_vehicle_2012_bmw_x1_suv": "4477  mm176.26 in.",
          "how_wide_is_the_vehicle_2012_bmw_x1_suv": "1798  mm70.79 in.",
          "what_is_the_curb_weight_2012_bmw_x1_e84_facelift_2012_16d_116_hp_sdrive": "1555  kg3428.19 lbs.",
          "what_is_the_gross_weight_2012_bmw_x1_e84_facelift_2012_16d_116_hp_sdrive": "2030  kg4475.38 lbs.",
          "how_much_trunk_boot_space_2012_bmw_x1_suv": "420 - 1350  l14.83 - 47.67 cu. ft.",
          "how_many_gears_what_type_is_the_gearbox_2012_bmw_x1_e84_facelift_2012_16d_116_hp_sdrive": "6, manual transmission",
          "brand": "BMW",
          "model": "X1",
          "generation": "X1 (E84 Facelift 2012)",
          "modification_engine": "16d (116 Hp) sDrive",
          "start_of_production": "2012 year",
          "end_of_production": "2015 year",
          "powertrain_architecture": "Internal Combustion engine",
          "body_type": "SUV",
          "seats": 5,
          "doors": 5,
          "fuel_consumption_economy_urban": [
            "5.7 l/100 km",
            "41.27 US mpg49.56 UK mpg17.54 km/l"
          ],
          "fuel_consumption_economy_extra_urban": [
            "4.4 l/100 km",
            "53.46 US mpg64.2 UK mpg22.73 km/l"
          ],
          "fuel_consumption_economy_combined": [
            "4.9 l/100 km",
            "48 US mpg57.65 UK mpg20.41 km/l"
          ],
          "co2_emissions": "128 g/km",
          "fuel_type": "Diesel",
          "acceleration_0_100_kmh": "11.5 sec",
          "acceleration_0_62_mph": "11.5 sec",
          "acceleration_0_60_mph_calculated_by_autodatanet": "10.9 sec",
          "maximum_speed": [
            "190 km/h",
            "118.06 mph"
          ],
          "emission_standard": "Euro 5",
          "weighttopower_ratio": "13.4 kg/Hp, 74.6 Hp/tonne",
          "weighttotorque_ratio": "6 kg/Nm, 167.2 Nm/tonne",
          "power": "116 Hp @ 4000 rpm.",
          "power_per_litre": "58.1 Hp/l",
          "torque": [
            "260 Nm @ 1750-2500 rpm.",
            "191.77 lb.-ft. @ 1750-2500 rpm."
          ],
          "engine_layout": "Front, Longitudinal",
          "engine_modelcode": "N47D20C",
          "engine_displacement": [
            "1995 cm3 ",
            "121.74 cu. in."
          ],
          "number_of_cylinders": 4,
          "engine_configuration": "Inline",
          "cylinder_bore": [
            "84 mm",
            "3.31 in."
          ],
          "piston_stroke": [
            "90 mm",
            "3.54 in."
          ],
          "compression_ratio": 16.5,
          "number_of_valves_per_cylinder": 4,
          "fuel_injection_system": "Diesel Commonrail",
          "engine_aspiration": "Twin-power turbo, Intercooler",
          "engine_oil_capacity": [
            "5.2 l",
            "5.49 US qt | 4.58 UK qt"
          ],
          "engine_oil_specification": "Log in to see.",
          "coolant": [
            "8.5 l",
            "8.98 US qt | 7.48 UK qt"
          ],
          "engine_systems": "Particulate filter",
          "kerb_weight": [
            "1555 kg",
            "3428.19 lbs."
          ],
          "max_weight": [
            "2030 kg",
            "4475.38 lbs."
          ],
          "max_load": [
            "475 kg",
            "1047.2 lbs."
          ],
          "trunk_boot_space_minimum": [
            "420 l",
            "14.83 cu. ft."
          ],
          "trunk_boot_space_maximum": [
            "1350 l",
            "47.67 cu. ft."
          ],
          "fuel_tank_capacity": [
            "61 l",
            "16.11 US gal | 13.42 UK gal"
          ],
          "length": [
            "4477 mm",
            "176.26 in."
          ],
          "width": [
            "1798 mm",
            "70.79 in."
          ],
          "height": [
            "1545 mm",
            "60.83 in."
          ],
          "wheelbase": [
            "2760 mm",
            "108.66 in."
          ],
          "front_track": [
            "1500 mm",
            "59.06 in."
          ],
          "rear_back_track": [
            "1529 mm",
            "60.2 in."
          ],
          "minimum_turning_circle_turning_diameter": [
            "11.3 m",
            "37.07 ft."
          ],
          "drivetrain_architecture": "The Internal combustion engine (ICE) drives the rear wheels of the vehicle.",
          "drive_wheel": "Rear wheel drive",
          "number_of_gears_and_type_of_gearbox": "6 gears, manual transmission",
          "front_suspension": "Independent coil spring",
          "rear_suspension": "Independent multi-link suspension",
          "front_brakes": "Ventilated discs",
          "rear_brakes": "Ventilated discs",
          "assisting_systems": "ABS (Anti-lock braking system)",
          "steering_type": "Steering rack and pinion",
          "tires_size": "225/50 R17 94H",
          "wheel_rims_size": "7.5J x 17",
          "acceleration_0_100_kmh_sec": 11.5,
          "cylinder_bore_in": 3.31,
          "cylinder_bore_mm": 84,
          "end_of_production_year": 2015,
          "front_track_in": 59.06,
          "front_track_mm": 1500,
          "fuel_tank_capacity_l": 61,
          "height_in": 60.83,
          "height_mm": 1545,
          "horsepower": 116,
          "kerb_weight_kg": 1555,
          "kerb_weight_lbs": 3428.19,
          "length_in": 176.26,
          "length_mm": 4477,
          "max_load_kg": 475,
          "max_load_lbs": 1047.2,
          "max_weight_kg": 2030,
          "max_weight_lbs": 4475.38,
          "maximum_speed_km_per_hour": 190,
          "maximum_speed_mph": 118.06,
          "piston_stroke_in": 3.54,
          "piston_stroke_mm": 90,
          "rear_back_track_in": 60.2,
          "rear_back_track_mm": 1529,
          "start_of_production_year": 2012,
          "wheelbase_in": 108.66,
          "wheelbase_mm": 2760,
          "width_in": 70.79,
          "width_mm": 1798
        }
      ]
    }
    console.log('Checkout Clicked')
    await setData({ name: car, imgUrl: Imgs[index].originalImageUrl, carData: single.reuslts[0], reviews: reviews })
    navigate('/checkout')
  };
  return (
    <>
      <header class="text-black bg-black body-font">
        <div class="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <span class="flex title-font font-small items-center text-black mb-4 md:mb-0">
            <img src=".\img\logo.png " alt="" class="w-48 ml-4" />
          </span>
          <nav class="md:ml-auto md:mr-auto flex items-center text-base justify-center">

            <form>
              <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg class="w-4 h-4 text-gray-500 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input type="search" id="default-search" class="block w-96 p-4 pl-10 text-sm text-black border rounded-lg bg-white" placeholder="Search for cars" required value={car} onChange={(e) => setCar(e.target.value)} />
                <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-black hover:bg-white hover:text-black hover:border-black border-2 focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-4 py-2 -my-1" onClick={loadData}>Search</button>
              </div>
            </form>

          </nav>

          <button class="text-white inline-flex items-center bg-black  py-1 px-3 focus:outline-none hover:bg-white hover:text-black hover:border-black border-2
      hover:shadow-lg rounded text-base mr-4 mt-4 md:mt-0"> <a href="/sell">Sell A Car</a>
          </button>
          <button class="text-white inline-flex items-center bg-black  py-1 px-3 focus:outline-none hover:bg-white hover:text-black hover:border-black border-2
      hover:shadow-lg rounded text-base mt-4 md:mt-0"> <a href="/signin">SignIn</a>
          </button>
          <button class="text-white inline-flex items-center bg-black  py-1 px-3 focus:outline-none hover:bg-white hover:text-black hover:border-black border-2
      hover:shadow-lg rounded text-base mt-4 md:mt-0 lg:mx-4"> <a href="/">Back to Home</a>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>

      {
        APIdata.map((x, index) => {
          return <section class="text-black body-font overflow-hidden" key={index}>
            <div class="container px-5 py-10 mx-auto">
              <div class="lg:w-4/5 mx-auto flex flex-wrap border-2 rounded-md p-4 shadow-xl hover:shadow-2xl">

                <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-lg" src={Imgs[index].originalImageUrl} />
                <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h2 class="text-sm title-font text-black tracking-widest">{x.make.toUpperCase()}</h2>
                  <h1 class="text-black text-3xl title-font font-medium mb-1">{x.model.toUpperCase()}</h1>
                  <div class="flex mb-4">
                    <span class="flex items-center">
                      {filledStars}
                      {emptyStars}

                      <span class="ml-3">{reviews.totalRating} out of 5</span>
                    </span>

                  </div>
                  <p class="leading-relaxed">The {car.toUpperCase()} combines elegance with sportiness, featuring a powerful inline-six engine and a finely tuned suspension for a thrilling driving experience.</p>

                  <div class="flex flex-col py-2">
                    <span class="title-font font-normal text-xl text-black my-2">Fuel Type : <span className="font-bold">{x.fuel_type.toUpperCase()}</span></span>
                    <span class="title-font font-normal text-xl text-black my-2">Year : <span className="font-bold">{x.year}</span></span>

                    <span class="title-font font-medium text-2xl text-black">₹ 60.11 Lakh</span>
                    <button onClick={() => handleCheckout(index)} class="flex ml-auto text-white bg-black py-2 px-6  hover:bg-white hover:text-black hover:border-black border-2 rounded shadow-lg">Check Out</button>

                  </div>
                </div>
              </div>
            </div>
          </section>
        })}
    </>)
}
export default Search;