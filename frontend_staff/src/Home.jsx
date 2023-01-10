import React, { useState } from "react"
import profilepic from './assets/images/profilepic.jpeg';
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";



// custom color values
let hover = "rgb(179,29,38)"
let normal = "rgb(197,31,41)"
let notData = "No data found!"

// testing JSON data on profile cards, in future it'll be replaced with the data from the database
const facultyData = [
    {
        profile: "profilepic",
        name: "Indira Bidari",
        designation: "Assistant Professor",
        department: "Computer Science And Engineering",
        email: "indirabidari@kletech.ac.in",
        slug: "indira"
    },
    {
        profile: "profilepic",
        name: "Uday Kulkarni",
        designation: "Assistant Professor",
        department: "Computer Science And Engineering",
        email: "udaykulkarni@kletech.ac.in",
        slug: "uday"
    },
    {
        profile: "profilepic",
        name: "Sneha Varur",
        designation: "Assistant Professor",
        department: "Computer Science And Engineering",
        email: "snehavarur@kletech.ac.in",
        slug: "sneha"
    },
    {
        profile: "profilepic",
        name: "Karibassappa KG",
        designation: "Professor",
        department: "Computer Science And Engineering",
        email: "karibassappakg@kletech.ac.in",
        slug: "karibasappa"
    },
    {
        profile: "profilepic",
        name: "Someshekar patil",
        designation: "Assistant Professor",
        department: "Electronics and Communication Engineering",
        email: "someshekarpatil@kletech.ac.in",
        slug: "someshekar"
    },
]

// main home function which displays the different faculties usinhg profile cards
function Home() {
    
    const [selects, setSelects] = useState('All Departments'); 
    const [searchTerm, setSearchTerm] = useState("");

    const [newData, setData] = useState("");
    const getData = () =>{
      // add url here
      axios.get('http://192.168.137.1:8000') 
      .then(res => {
          console.log('Data fetcted from backend!')
          setData(res.data)
          console.log(res.data)
      }).catch(err => {
          console.log(err)
      })
  }
  useEffect(() => {
    getData();
  }, []);

    function generateProfileCard() { 
        return <div className="pt-18 pb-20 px-52 grid grid-cols-3 gap-y-10 text-center">
            {newData.staff?.filter((data,index)=>{
                if(searchTerm === ""){
                    return data
                }else if(data.slug.toLowerCase().includes(searchTerm.toLowerCase())){
                    return data
                }
            }).map((data) => {
                var slug = "/profile/" + data.slug;
                var imagePath = 'http://192.168.137.1:8000' + data.image;
                var mailTo = 'mailto:' + data.user.email;
                return (selects === data.department) || (selects === 'All Departments') ? (<div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <div className="pl-3">
                            <img class="h-48 mx-24 my-4 rounded-lg" src={imagePath} alt="" />
                        </div>
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white mx-2">{data.user.first_name + ' ' + data.user.last_name}</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 mx-2">{data.designation}</p>
                        <div className="flex py-1 justify-center">
                            <FaMapMarkerAlt className="mx-2" />
                            <p class="font-normal text-gray-700 dark:text-gray-400 text-sm">{data.department}</p>
                        </div>
                        <div className="flex py-1 justify-center">
                            <FaEnvelope className="mx-2" />
                            
                            <a href={mailTo}><span className="text-sm">{data.user.email}</span></a>
                        </div>
                        <Link to={'profile/' + data.slug} class="inline-flex items-center py-2 mt-5 px-3 text-sm font-medium text-center text-white bg-[rgb(197,31,41)] rounded-lg hover:bg-[rgb(179,29,38)]  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </Link>
                    </div>
                </div>)
                    : (<div></div>)
            })}
        </div>
    }

    return <div className="bg-slate-200">
        <div className="flex">

            <div className="flex justify-end grow py-20 px-1">
                <select value={selects} onChange={e => setSelects(e.target.value)} class="border border-gray-300 focus:border-gray-300 focus:ring-gray-300 text-gray-500 bg-gray-50 font-medium rounded-lg text-sm text-center inline-flex items-center h-[3.3rem] w-96">
                    <option class="block py-2 px-4">
                        All Departments
                    </option>
                    <option class="block py-2 px-4">
                        Computer Science and Engineering
                    </option>
                    <option class="block py-2 px-4">
                        Electronics and Communication Engineering
                    </option>
                    <option class="block py-2 px-4">
                        Electrical and Electronics Engineering
                    </option>
                    <option class="block py-2 px-4">
                        Mechanical Engineering
                    </option>
                    <option class="block py-2 px-4">
                        Civil Engineering
                    </option>
                    <option class="block py-2 px-4">
                        Robotics and Automation
                    </option>
                </select>
            </div>
            <form className="flex justify-start grow py-20 px-1">
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                <div class="w-96 relative">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input autoComplete="off" type="text" id="search-form" name="search-form" onChange={(event)=> {setSearchTerm(event.target.value)}} class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:border-gray-300 focus:ring-gray-300 text-gray-500 bg-gray-50" placeholder="Search by name" required="" />
                    {/* <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-[rgb(197,31,41)] hover:bg-[rgb(179,29,38)] font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
                </div>
            </form>
        </div>

        {/* Profile cards */}
        {generateProfileCard()}
    </div >
}

export default Home;