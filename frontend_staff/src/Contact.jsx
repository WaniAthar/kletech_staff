import React, {useState} from "react"
import axios from "axios";
import { useEffect } from "react";



function Contact() {

    const [datacontactData, setContactData] = useState("");
    const getData = () =>{
      // add url here
      axios.get('http://192.168.137.1:8000/contact') 
      .then(res => {
          console.log('Data fetcted from backend!')
          setContactData(res.data)
          console.log(res.data)
      }).catch(err => {
          console.log(err)
      })
  }

  useEffect(() => {
    getData();
  }, []);



    return <div className="content">
        {datacontactData.map(data => (
            <div className="mx-[9.5rem] my-16">
            <div className="my-7 bg-zinc-200 rounded-lg p-5">
                <h1 className="font-bold text-3xl my-3">{data.department}</h1>
                <p className="text-xl leading-8">
                    HOD - {data.hod}
                    <ul>
                        <li>Email - {data.HOD_email}</li>
                        <li>Phone - {data.HOD_phone}</li>
                    </ul>
                </p>
                <p className="text-xl leading-8">
                    Office Incharge - {data.officeIncharge}
                    <ul>
                        <li>Email - {data.officeEmail}</li>
                        <li>Phone - {data.officeNumber}</li>
                    </ul>
                </p>
            </div>
        </div>
        ))}
    </div>
}

export default Contact;


// {workExperience.map(data => (
//     <div>
//         <div className="flex pt-10">
//             <FaCalendarAlt className="mx-2 fa-xl" />
//             <span className="font-medium">{workExp.start_date}</span>
//         </div>
//         <div className="text-left pl-10 pt-3">
//             <p className="font-medium">{data.position}</p>
//             <p className="font-light">{data.PlaceOfWork}</p>
//         </div>
//     </div>
// ))}