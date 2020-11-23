import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const ProjectsPortfolio = () => {
    return (
        <section className="home-page-text">
            <section className="container">
                <section className="home-page-row">
                    <section className="project-grid">
                        <section className="inner-project-grid">
                            <div className="project-card">
                                <h2>ETSY CLONE</h2>
                                <p> &lt;/&gt; [Ruby on Rails | JavaScript | HTML5/CSS3]</p>
                                <p>
                                    <a href={"https://github.com/RebeccaRoach/betsy/commits?author=dnguye2"}>
                                    <FontAwesomeIcon icon={faGithub} title='Github' /> <span className="photos">Repository</span></a> | 
                                    <a href="https://outdoorsy-app.herokuapp.com/"><span className="code"> Demo</span></a>
                                </p>
                                <p>Load time: 30 seconds</p>
                                <p>An outdoors themed Etsy clone completed in a 2 week sprint. CRUD operations were implemented using MVC architecture from Rails
                                6 frameworks. </p>
                            </div>
                            <div className="project-card">
                                <h2>PERSONAL PHOTOGRAPHY PORTFOLIO</h2>
                                <p>&lt;/&gt; [Jekyll | HTML5/CSS3 | JavaScript ]</p>
                                <p>
                                <a href={"https://github.com/dnguye2/dnguye2.github.io"}>
                                <FontAwesomeIcon icon={faGithub} title='Github'/> <span className="photos">Repository </span>
                                </a> | <a href="https://dianajnguyen.com/"> <span className="code">Demo</span></a></p>
                                <p>First iteration of my personal website for my photography, hosted on GitHub Pages</p>
                            </div>
                            <div className="project-card">
                                <h2>RIDESHARE RAILS</h2>
                                <p>&lt;/&gt; [Ruby on Rails | HTML5/CSS3]</p>
                                <p>
                                <a href={"https://github.com/dnguye2/ride-share-rails"}>
                                <FontAwesomeIcon icon={faGithub} title='Github' /> <span className="photos">Repository</span></a> | 
                                <a href="https://zara-ridesharerails.herokuapp.com/"><span className="code"> Demo</span></a>
                                <p>Load time: 30 seconds</p>
                                <p>A Rails webapp that manages a local community Rideshare program </p>
                                </p>
                            </div>
                            <div className="project-card">
                                <h2>MEDIA RANKER</h2>
                                <p>&lt;/&gt; [Ruby on Rails | HTML5/CSS3]</p>
                                <p>
                                <a href={"https://github.com/dnguye2/media-ranker"}>
                                <FontAwesomeIcon icon={faGithub} title='Github' /> <span className="photos">Repository</span></a> | 
                                <a href="https://retro-media-ranker.herokuapp.com/"><span className="code">Demo</span></a></p>
                                <p>A Rails webapp where users can vote for their favorite pieces of media</p>
                            </div>
                            <div className="project-card">
                                <h2>PERSONAL PORTFOLIO</h2>
                                <p>&lt;/&gt; [GatsbyJS | HTML5/SCSS | JavaScript ]</p>
                                <p>
                                <a href={"https://github.com/dnguye3/dnguye3.github.io"}>
                                <FontAwesomeIcon icon={faGithub} title='Github' /> <span className="photos">Repository</span></a> | 
                                <a href="/"><span className="code"> Demo</span></a></p>
                                <p>Second iteration of my personal portfolio, hosted on GitHub Pages</p>
                            </div>
                            <div className="project-card">
                                <h2>METABOLIC FOOTPRINT OF CVD IN AFRICAN AMERICANS</h2>
                                <p>&lt;/&gt; [R | Python]</p>
                                <p>
                                Random forest analysis of hemic and urinary metabolic data from two cohorts of 200 African American patients to identify cardiovascular biomarkers
                                </p>
                                <p>
                                Work was presented at the 2019 American Society for Human Genetics Conference
                                </p>
                            </div>
                        </section> 
                    </section>
                </ section>
            </section>
        </section>
    )
}

export default ProjectsPortfolio