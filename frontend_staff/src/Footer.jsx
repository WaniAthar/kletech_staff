import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faSquareTwitter } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return <div>
        <div class="text-center text-gray-700 p-4 bg-zinc-200">
            <div className="py-1 pb-2">
                <a href="https://www.facebook.com/kletechbvb/"><FontAwesomeIcon icon={faSquareFacebook} size="2x" className="icons hover:text-gray-600 px-3" /></a>
                <a href="https://twitter.com/KLETechbvb"><FontAwesomeIcon icon={faSquareTwitter} size="2x" className="icons hover:text-gray-600 px-3" /></a>
                <a href="https://www.linkedin.com/school/kletechbvb/"><FontAwesomeIcon icon={faLinkedin} size="2x" className="icons hover:text-gray-600 px-3" /></a>
            </div>
            <span className="font-light">Copyright © 2022 KLE Technological University</span>
        </div>


    </div>
};

export default Footer;