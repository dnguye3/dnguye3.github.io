import React from "react"
import IndexPage from "../pages"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'


const HomePageText = () => {
    return (
        <div className="home-page-text">
            <div className="container">
                <div className="home-page-row">
                    <div className="main-text">
                        <h1>Hi, I&#39;m Diana – a scientist turned software engineer based in Seattle.</h1>
                        <p>I’m currently a software engineering intern at <a href="https://vulcan.com"><span className="vulcan">Vulcan</span></a> on the Allen Coral Atlas team.<br></br>
                        Outside of <a href="https://github.com/dnguye2"><span className="code">code</span></a>, you’ll find me either running, cycling, or taking <a href="https://dianajnguyen.com"><span className="photos">photos</span></a>.
                        </p>
                        <div>
                            <a href={"https://www.linkedin.com/in/dn2/"} >
                                <FontAwesomeIcon icon={faLinkedin} title='LinkedIn' className='social-icon-left'/>
                            </a>
                            <a href={"https://github.com/dnguye2"}>
                                <FontAwesomeIcon icon={faGithub} title='Github' className='social-icon'/>
                            </a>
                            <a href={"mailto:nguyendiana@outlook.com"}>
                                <FontAwesomeIcon icon={faEnvelope} title='E-mail' className='social-icon'/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePageText