import React, { Component } from 'react'
import './Home.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDownload,
  } from "@fortawesome/free-solid-svg-icons";
import {ReactComponent as ReactLogo} from '../logo.svg';
export default class Home extends Component {
    render() {
        return (
            
            <div className='home'>
                
           <ReactLogo/>
           
           </div>
           
            
        )
    }
}
