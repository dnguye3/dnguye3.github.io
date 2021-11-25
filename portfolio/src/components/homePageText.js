import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'


const HomePageText = () => {
    return (
        <div className="home-page-text">
            <div className="container">
                <div className="home-page-row">
                    <div className="main-text">
                        <h1>Software engineer based in Seattle, WA</h1>
                        <p>Hi, I’m Diana–a scientist turned software engineer.<br/>
                        Outside of code, you’ll find me running, cycling, or taking photos.</p>
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
                        <hr></hr>
                        <h1>Skills</h1>
                            <ul>
                                <li>Python | React | TypeScript | Ruby on Rails</li>
                                <li>Docker | Kubernetes</li>
                                <li> Agile, Kanban, TDD</li>
                                <li>Azure</li>
                                <li>git</li>
                            </ul>
                        <hr></hr>
                            <h1>Experience</h1>
                            <p><h3>Truveta | 2021 - Present &nbsp;</h3>
                            Software Engineer
                            </p>
                            <p><h3>Vulcan | 2020</h3> Software Engineering Intern</p>
                            <p><h3>National Institutes of Health | 2017-2020</h3> Research Fellow</p>
                            <hr></hr>
                        <h1>Education</h1>
                            <p><h3>Clemson University | 2013 - 2017</h3>BS Biochemistry</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePageText