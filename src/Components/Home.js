import React from 'react';
import './portfolio.css';
import Ashok from '../asset/img/Ashok.jpeg';
import Linked from '../asset/img/linkedin.png';
import Github from '../asset/img/github.webp';
import Gmail from '../asset/img/gmail.png';
import phone from '../asset/img/phone.png';
import project1 from '../asset/img/project1.png'; // Example project images
import project2 from '../asset/img/project2.png';
import project3 from '../asset/img/project3.png';
import { useSpring, animated } from 'react-spring';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Portfolio() {
    const props = useSpring({ opacity: 1, from: { opacity: 0.5 }, delay: 200 });
    return (
        <animated.div style={props}>
            <div className='parent'>
                <h1 style={{ textAlign: 'center' }}>Ashok A</h1>
                <section id="hero">
                    <div className='header-text'>
                        <ul>
                            <li className='profile-item'>
                                <img className='linkedIn' src={Linked} alt="LinkedIn" />
                                <a className='links' target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/ashok-arumugam-3942ab167/'>Ashok Arumugam</a>
                            </li>
                            <li className='profile-item'>
                                <img className='linkedIn' src={Github} alt="Github" />
                                <a className='links' target="_blank" rel="noopener noreferrer" href='https://github.com/ashok-virat'>Github</a>
                            </li>
                            <li className='profile-item'>
                                <img className='linkedIn' src={Gmail} alt="Gmail" />
                                <a className='links' target="_blank" rel="noopener noreferrer" href='mailto:aruashok17@gmail.com'>aruashok17@gmail.com</a>
                            </li>
                            <li className='profile-item'>
                                <img className='linkedIn' src={phone} alt="Phone" />
                                <span style={{ paddingLeft: "10px" }}>+91 9655730521</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <img className='profile-img' src={Ashok} alt="Ashok" />
                    </div>
                </section>
                <div style={{ textAlign: 'center' }}>
                    <span>
                        I specialize in creating responsive web applications with a strong proficiency in UI development using Vue.js, React.js, and Angular. My backend development skills include working with Node frameworks like NestJS and Express, alongside expertise in REST and GraphQL APIs. I have extensive experience with JavaScript, React.js, Node.js, Express, MongoDB, jQuery, HTML5, CSS3, and TypeScript.
                    </span>
                </div>
                <div className="current-job" style={{ marginTop: '50px' }}>
                    <h2 style={{ textAlign: 'center' }}>Job details</h2>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date="2024 - present"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

                        >
                            <h4 className="vertical-timeline-element-title">Full stack developer</h4>
                            <h5 className="vertical-timeline-element-subtitle">Intellect Design Arena · Full-time . 2021 - present</h5>
                            <p>
                                Highly skilled with 2.6+ years of experience in designing, developing, and maintaining web applications using Vue.js. Proficient in front-end, with a strong focus on creating efficient, scalable, and user-friendly applications
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'green', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  green' }}
                            date="2021 - 2020"
                            iconStyle={{ background: 'green', color: '#fff' }}

                        >
                            <h4 className="vertical-timeline-element-title">Full stack developer</h4>
                            <h5 className="vertical-timeline-element-subtitle">ST Global Technologies · Full-time . 2020 - 2021</h5>
                            <p>Highly skilled Full Stack Developer with 1.5+ years of experience in designing, developing, and maintaining web applications using React, Node.js, and MongoDB. Proficient in both front-end and back-end technologies, with a strong focus on creating efficient, scalable, and user-friendly applications
                            </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
                <div className="projects" style={{ marginTop: '50px' }}>
                    <h2>Sample projects</h2>
                    <div className="project-cards">
                        <div className="card">
                            <a className='links' target="_blank" rel="noopener noreferrer" href="https://steady-chaja-1c75bf.netlify.app">
                                <img src={project1} alt="Project 1" />
                                <div className="card-content">
                                    <h3><span>Chat application</span></h3>
                                    <div className="chips">
                                        <span className="chip">Vue.js</span>
                                        <span className="chip">Express</span>
                                        <span className="chip">Node</span>
                                        <span className="chip">MongoDB</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="card">
                            <a className='links' target="_blank" rel="noopener noreferrer" href="https://love-calculator-ak.netlify.app/">
                                <img src={project2} alt="Project 2" />
                                <div className="card-content">
                                    <h3><span>Fun calculator</span></h3>
                                    <div className="chips">
                                        <span className="chip">Angular</span>
                                        <span className="chip">Bootstrap</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="card">
                            <a target="_blank" rel="noopener noreferrer" href="https://epic-gates-fbeaa4.netlify.app/">
                                <img src={project3} alt="Project 3" />
                                <div className="card-content">
                                    <h3><span>Post stories</span></h3>
                                    <div className="chips">
                                        <span className="chip">Reactjs</span>
                                        <span className="chip">Bootstrap</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="more-projects">
                    <p>This is a sample of my projects. You can check out my GitHub for all of my projects:</p>
                    <div className='git'>  <img className='linkedIn' src={Github} alt="Github" /> <a className='links' target="_blank" rel="noopener noreferrer" href='https://github.com/ashok-virat'>Github</a></div>
                </div>
                <div style={{ minHeight: "10px" }}></div>
            </div>
            <footer>
                <p>&copy; 2024 Ashok. All rights reserved. Built with coffee and code.</p>
                <p>Disclaimer: No bugs were harmed in the making of this website.</p>
            </footer>
        </animated.div>
    );
}

export default Portfolio;
