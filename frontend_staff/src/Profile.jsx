import React, {useState, useEffect} from "react";
import profilepic from './assets/images/profilepic.jpeg';
import { FaEnvelope } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { FaToolbox } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

import {useParams} from 'react-router-dom';
import axios from "axios";


//Color values for button
let lightRed = "rgb(235,120,120)"
let darkRed = "rgb(197,31,41)"

// testing JSON data
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
        department: "Computer Science And Engineering",
        email: "someshekarpatil@kletech.ac.in",
        slug: "someshekar"
    },
]

const workExperience = [
    {
        fromTo: "July 2015 - May 2019",
        position: "Product Manager",
        PlaceOfWork: "Apple Inc, Vidyanagar, Hubli,580007"
    },
    {
        fromTo: "March 2013 - March 2015",
        position: "Software Developer",
        PlaceOfWork: "Zomato, Electronic City, Banglore, 500908"
    },
    {
        fromTo: "November 2009 - April 2013",
        position: "Professor",
        PlaceOfWork: "Department of Computer Science, IIT Bombay, Mumbai, 140089"
    }
]

const publicationData = [
    {
        name: "Filter Pruning Via Geometric Median for Deep Neural Network Acceleration",
        link: "https://arxiv.org/abs/1811.00250",
        authors: "Abhishek Patil, Athar Wani, Indira Bidari"
    },
    {
        name: "Optimization of Deep Neural Networks by Quantization",
        link: "https://arxiv.org/abs/1811.00250",
        authors: "Abhishek Patil, Athar Wani, Uday Kulkarni, Indira Bidari"
    },
    {
        name: "Tube Shaft Hardening Quality Control using YOLOv5",
        link: "https://arxiv.org/abs/1811.00250",
        authors: "Abhishek Patil, Athar Wani"
    },
]





function Profile(){
    
    const {slug} = useParams();
    const [newData, setData] = useState([{}]);
    const [newData2, setData2] = useState([{}]);
    const [workExp, setWorkExp] = useState([{}]);
    const [pub, setPub] = useState([{}]);
    const getData = () =>{
      // add url here
      let url = 'http://192.168.137.1:8000/staff/profile/' + slug;
      axios.get(url) 
      .then(res => {
          console.log('Data fetcted from backend!')
          setWorkExp(res.data.workexperience)
          setData(res.data.staff.user)
          setData2(res.data.staff)
          setWorkExp(res.data.workexperience)
          setPub(res.data.publication)
          console.log("work exp: " + res.data.workexperience[0].id)
          
      }).catch(err => {
          console.log(err)
      }, [])
    }
    
    useEffect(() => {
        getData();
      }, []);
    
    
    function generateWorkExperience() {
        return <div>
            {workExp.map(data => (
                <div>
                    <div className="flex pt-10">
                        <FaCalendarAlt className="mx-2 fa-xl" />
                        <span className="font-medium">{data.start_date + '  -  ' + data.end_date}</span>
                    </div>
                    <div className="text-left pl-10 pt-1">
                        <p className="font-medium">{data.designation}</p>
                        <p className="font-light">{data.place}</p>
                    </div>
                </div>
            ))}
        </div>
    }

    function generatePublication(){
        return <div>
            {pub.map(pubData => (
                <div className="text-left">
                <div className="flex pt-10">
                    <FaRegFileAlt className="mx-2 fa-xl" />
                    <a href={pubData.link} className="font-medium  text-decoration-line: hover:underline underline-offset-4">{pubData.title} ({pubData.date})</a>
                </div>
                <p className="pl-10">{pubData.authors}</p>
            </div>
            ))}
        </div>
    }

    const [count, setCount] = useState(0)

    
    let data = ""

    function changeColor1() {
        if (count === 1) {
            document.getElementById("button1").style.backgroundColor = darkRed
            document.getElementById("button2").style.backgroundColor = lightRed
            setCount(0)
        }
    }
    
    function changeColor2() {
        if (count === 0) {
            document.getElementById("button2").style.backgroundColor = darkRed
            document.getElementById("button1").style.backgroundColor = lightRed
            setCount(1)
        }
    }

    var imagePath = 'http://192.168.137.1:8000' + newData2.image;
    return <div className="mx-24 my-10">
        <div className="flex">
            <FaBookmark className="fa-xl mt-1.5 mr-2 text-[rgb(197,31,41)]" />
            <h1 className="text-3xl font-semibold mb-10"><span className="px-2 font-medium">{newData.first_name + ' ' + newData.last_name}</span></h1>
        </div>
        {/* profile card */}
        <div className="flex flex-row">
            <div className="basis-1/3">
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 text-center">
                    <a href="#">
                    <img class="h-48 mx-24 my-4 rounded-lg" src={imagePath} alt="" />
                    </a>
                    <div class="p-5 pl-10">
                        <div className="flex py-1">
                            <FaToolbox className="mx-2 fa-xl" />
                            <p class="">{newData2.designation}</p>
                        </div>
                        <div className="flex py-2">
                            <FaMapMarkerAlt className="mx-2 fa-xl" />
                            <p class="">{newData2.department}</p>
                        </div>
                        <div className="flex py-2">
                            <FaEnvelope className="mx-2 fa-xl" />
                            <span className="">{newData.email}</span>
                        </div>
                        <div className="text-sm font-thin">_______________________________</div>
                        <div className="flex py-2">
                            <FaRegNewspaper className="mx-2 fa-xl" />
                            <span className="font-medium">Field of Interest</span>
                        </div>
                        <p>{newData2.fields_of_interest}</p>
                    </div>
                </div>
            </div>
            <div class="min-w-[65%] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 text-center">
                <a href="#">
                    <button onClick={changeColor1} type="button" class=" text-white bg-[rgb(197,31,41)] font-medium rounded-tl-lg rounded-bl-lg text-sm px-5 py-2.5 mt-3" id="button1">Work Experience</button>
                    <span className="px-[1px]"></span>
                    <button onClick={changeColor2} type="button" class="text-white bg-[rgb(235,120,120)] font-medium rounded-tr-lg rounded-br-lg text-sm px-5 py-2.5" id="button2">Publication</button>
                </a>
                <div class="p-5 pl-10">
                    {count === 0 ? generateWorkExperience() : generatePublication()}
                </div>
            </div>
        </div>
        {/* dummy padding to make footer stick to bottom of page */}
        <div className="mt-6">
            <br />
        </div>
    </div>
};

export default Profile;