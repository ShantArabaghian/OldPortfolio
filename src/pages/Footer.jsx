import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import {faLinkedin,faWhatsapp, faInstagram} from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
  return (
    <div className="Footer">
   
      <h3>Lets Work Together!</h3>
      <a href='mailto: shantarabaghian@outlook.com.com'>
              <EmailOutlinedIcon className='mr-1 text-red-500 ' />
             shantarabaghian@outlook.com
            </a>
            <hr/>
           <a href="https://www.linkedin.com/in/shant-arabaghian-790a141a1/"
        className="youtube social" target="blank">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
       
      <a href="https://api.whatsapp.com/send?phone=37498011734" className="whatsapp social" target="blank">
      <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </a>
      <a href="https://www.instagram.com/shantarabaghian/?hl=en" target="blank"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <hr/>
      <p>&copy;ShantArabaghian 2022</p>
    </div>

  );
}