import React, {useState} from "react";
import "./header.css"
import { Link } from "react-router-dom";
import { nav } from "../../data/Data";
import images from "../../../images/logo.png"


const Header = () =>{
    const [navlist,setnavlist] = useState(false)
    return (
        <>
            <header>
                <div className="container flex">
                        <div className="logo">
                            <img src={images} alt="log" width="140 px" height="100px"/>
                        </div>

                        <div className="nav">
                            <ul className='flex'>
                                {nav.map((list, index)=>(
                                    <li key={index}>
                                        <Link to={list.path}>{list.text}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    <div className=""button flex>
                        {/*<h5>
                            <span>2</span> My List
                                </h5>*/}
                        <button className="btn1">
                            <i className="fa fa-sign-out"></i> Sign In
                        </button>
                    </div> 

                    <div className="toggle">
                        <button onClick={() =>setnavlist(!navlist)}>
                            <i className="fa fa-bars"></i>
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;