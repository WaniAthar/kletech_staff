import React from "react";

function About() {
    return <div>
        <div className="mx-[9.5rem] my-16">
            <div className="my-7 bg-zinc-200 rounded-lg p-5">
                <h1 className="font-bold text-3xl my-3">Motive</h1>
                <p className="text-xl leading-8">
                    The website of an educational institute contains the information regarding the overview of the campus, courses offered, fee structure, admission process etc. In addition to these it’s a must to display the information of the faculties as they too are part of the university, this web application displays the profile and achievements of the facilities of our university that can can be used by other people or employee/student of the university to learn about the achievements of the faculty
                </p>
            </div>
            <div className="my-7 bg-zinc-200 rounded-lg p-5">
                <h1 className="font-bold text-3xl">Objectives</h1>
                <ul className="my-3 text-xl leading-8 list-disc ml-4">
                    <li>To develop a full stack application to display the profile and achievements of the faculty</li>
                    <li>Provide a means for the administrator to add and delete the profile and achievements of the faculties</li>
                    <li>Provide a means for other users to view the profile and search using keywords</li>
                    <li>Provide a means for the users to contact the faculty or other employees of a branch</li>
                    <li>To display the achievements and research work of the faculties</li>
                </ul>
            </div>
            <div className="my-7 bg-zinc-200 rounded-lg p-5">
                <h1 className="font-bold text-3xl">Component Description</h1>
                <div>
                    <h3 className="font-semibold text-[1.4rem] mt-3">Home Page</h3>
                    <p className="text-xl leading-8 mt-1">Displays the faculty profile cards of each faculty of the choosen department which gives brief information about them</p>
                </div>
                <div>
                    <h3 className="font-semibold text-[1.4rem] mt-3">About Page</h3>
                    <p className="text-xl leading-8 mt-1">Describes about our motive and the different components of this web app</p>
                </div>
                <div>
                    <h3 className="font-semibold text-[1.4rem] mt-3">Contact</h3>
                    <p className="text-xl leading-8 mt-1">Provides different contact details of the department office for each of the departments</p>
                </div>
                <div>
                    <h3 className="font-semibold text-[1.4rem] mt-3">Login Page</h3>
                    <p className="text-xl leading-8 mt-1">Login page for the faculties where they can login with the provided login credentials to modify their details presented on the web app</p>
                </div>
            </div>
        </div>
    </div>
}

export default About;