import React, { useEffect } from 'react';
import { Footer, Contact } from './Components';
import Documents from '../Constants/Documents';
import { VscFilePdf } from 'react-icons/vsc';
import { FaUniversity } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import { BsAwardFill, BsGearFill } from 'react-icons/bs';
import Svg from '../Constants/Svg';
import '../Styles/Resume.css';

export const Resume = (props) => {

    useEffect(() => {
        window.document.querySelectorAll('.resumeNavLink')[0].classList.add('activeClass');
        window.document.querySelectorAll('.resumeNavLink-Mobile')[0].childNodes[1].classList.add('activeClassMobileText');
        window.document.querySelectorAll('.resumeNavLink-Mobile')[0].childNodes[0].classList.add('activeClassMobileIcon');

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });

        props.setViewingResume(true);

        return () => {
            window.document.querySelectorAll('.resumeNavLink')[0].classList.remove('activeClass');
            window.document.querySelectorAll('.resumeNavLink-Mobile')[0].childNodes[1].classList.remove('activeClassMobileText');
            window.document.querySelectorAll('.resumeNavLink-Mobile')[0].childNodes[0].classList.remove('activeClassMobileIcon');
            props.setViewingResume(false);
        };
    }, [props]);

    return (
        <>
            <div className='contact container background-light-grey'>
                <div className='container-inner'>
                    <div className='resume-margin-separation'>
                        <fieldset className='resume-fieldset'>
                            <legend className='lower-section-title-legend'>
                                <div className='lower-section-title-background'>
                                    <h2 className='lower-section-title'>
                                        <MdWork />
                                        Experience
                                    </h2>
                                </div>
                            </legend>
                            <div className='resume-list'>
                                <div className='resume-info-section'>
                                    <div className='resume-info-section'>
                                        <h2><strong>Full Stack Engineer</strong></h2>
                                        <hr className='resume-info-section-line' />
                                        <div className='date-location-info'>
                                            <p><strong>JPMorgan Chase & Co.</strong> - Columbus, Ohio</p>
                                            <p>Feb 2020 - Apr 2022</p>
                                        </div>
                                        <p>Worked in the Digital Account Opening and Business Lending product lines under the Community & Consumer Banking sector. Focused on implementing user facing web pages, databases, and back-end microservices that allowed +230,000 businesses to apply for the Paycheck Protection Loan program.</p>
                                        <ul className='resume-info-section-list'>
                                            <li>
                                                Utilized Spring for Apache Kafka to create event-driven micro-services.
                                            </li>
                                            <li>
                                                Leveraged BlueJS, a proprietary front-end framework, to develop customer facing webpages.
                                            </li>
                                            <li>
                                                Developed REST controllers to allow webpages to communicate with back-end services.
                                            </li>
                                            <li>
                                                Performed data modeling using Apache Cassandra databases.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='resume-info-section'>
                                    <div className='resume-info-section'>
                                        <h2><strong>Software Engineer Intern</strong></h2>
                                        <hr className='resume-info-section-line' />
                                        <div className='date-location-info'>
                                            <p><strong>JPMorgan Chase & Co.</strong> - Columbus, Ohio</p>
                                            <p>June - Aug 2019</p>
                                        </div>
                                        <p> Responsible for prototyping an artificial intelligence system that utilized network traffic data to predict potential failures of file transmissions and network reliability patterns for the Managed File Transfer tool.</p>
                                        <ul className='resume-info-section-list'>
                                            <li>
                                                Utilized AI models of IBM Watson Studio to generate inferences on internally produced data of MFT.
                                            </li>
                                            <li>
                                                Deployed a python-based Flask microservice that hosted a public endpoint to create data sets used
                                                for training and data processing of AI models.
                                            </li>
                                            <li>
                                                Setup continuous integration and deployment tools to ensure code quality and up to date releases.
                                            </li>
                                            <li>
                                                Followed test-driven development practices by writing test cases in Python’s Unittest framework.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='resume-info-section'>
                                    <div className='resume-info-section'>
                                        <h2><strong>Virtual Reality Environment Programmer</strong></h2>
                                        <hr className='resume-info-section-line' />
                                        <div className='date-location-info'>
                                            <p>Ohio State University - Columbus, Ohio</p>
                                            <p>Mar – May 2018, Sept – Dec 2019</p>
                                        </div>
                                        <p>Conducted research at the Advanced Computing Center for Arts and Design department to recreate medical professionals' offices in virtual reality using 360° photos and 3D modeling software. Tasked with developing virtual systems that could be applied to 3D assets to mimic real-world medical technology.</p>
                                        <ul className='resume-info-section-list'>
                                            <li>
                                                Developed a virtual camera system using three.js and Aframe that allows users to take screenshots and videos from secondary cameras in the scene to emulate medical imaging equipment.
                                            </li>
                                            <li>
                                                Designed open-loop ramping algorithms for internal cooling fans and user interface LED’s.
                                            </li>
                                            <li>
                                                Took advantage of render texture targets to create a camera feed system where a planar piece of geometry displays back to the user what the virtual camera is rendering.
                                            </li>
                                            <li>
                                                Designed a backend Node.js server that enabled image data received from users to be saved to persistent local storage as either a screenshot or video.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='resume-info-section'>
                                    <div className='resume-info-section'>
                                        <h2><strong>Embedded Firmware Co-op</strong></h2>
                                        <hr className='resume-info-section-line' />
                                        <div className='date-location-info'>
                                            <p>GE Appliances, a Haier Company - Columbus, Ohio</p>
                                            <p>Aug - Dec 2017, May - Aug 2018</p>
                                        </div>
                                        <p>Developed firmware on the refrigeration and air conditioning product lines for one of the industry’s leading manufacturers of in-home appliances.</p>
                                        <ul className='resume-info-section-list'>
                                            <li>
                                                Employed test-driven development software practices to produce high-quality code.
                                            </li>
                                            <li>
                                                Designed open-loop ramping algorithms for internal cooling fans and user interface LED’s.
                                            </li>
                                            <li>
                                                Updated service diagnostics tools for all air conditioning products to provide a standard troubleshooting interface for technicians in the field.
                                            </li>
                                            <li>
                                                Deployed factory diagnostics tool that allowed workers on the line to ensure that new refrigeration mainboards were properly flashed.
                                            </li>
                                            <li>
                                                Collaborated with Quality Assurance team to fix newly discovered bugs and create documentation that decreased development time of automated testing.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <div className='resume-margin-separation'>
                        <fieldset className='resume-fieldset'>
                            <legend className='lower-section-title-legend'>
                                <div className='lower-section-title-background'>
                                    <h2 className='lower-section-title'>
                                        <FaUniversity />
                                        Education
                                    </h2>
                                </div>
                            </legend>
                            <div className='resume-list'>
                                <div className='resume-info-section'>
                                    <div className='resume-info-section'>
                                        <h2>Ohio State University</h2>
                                        <hr className='resume-info-section-line' />
                                        <div className='date-location-info'>
                                            <p>Columbus, Ohio</p>
                                            <p>Aug 2014 - Dec 2019</p>
                                        </div>
                                        <p>B.S. in Computer Science and Engineerin specializing in Computer Graphics and Game Design - Cum Laude</p>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <div className='resume-margin-separation'>
                        <fieldset className='resume-fieldset'>
                            <legend className='lower-section-title-legend'>
                                <div className='lower-section-title-background'>
                                    <h2 className='lower-section-title'>
                                        <BsAwardFill />
                                        Awards
                                    </h2>
                                </div>
                            </legend>
                            <div className='resume-list'>
                                <div className='resume-info-section'>
                                    <div className='resume-info-section'>
                                        <h2>Capstone Project Competition - Best in Class for "Dungeons of Avarice"</h2>
                                        <hr className='resume-info-section-line' />
                                        <div className='date-location-info'>
                                            <p>December 2019</p>
                                        </div>
                                        <p>Presented by Ohio State University's Department of Computer Science.</p>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <div className='resume-margin-separation'>
                        <fieldset className='resume-fieldset'>
                            <legend className='lower-section-title-legend'>
                                <div className='lower-section-title-background'>
                                    <h2 className='lower-section-title'>
                                        <BsGearFill />
                                        Skills
                                    </h2>
                                </div>
                            </legend>
                            <div className='resume-skills'>
                                <fieldset className='resume-skills-fieldset pastel-teal-border'>
                                    <legend className='resume-skills-legend'>
                                        <div className='resume-skills-section-title'>
                                            <h3>Languages</h3>
                                        </div>
                                    </legend>
                                    <div className='resume-logo-grid'>
                                        <Svg.CLanguage />
                                        <Svg.CPlusPlus />
                                        <Svg.CSharp />
                                        <Svg.Java />
                                        <Svg.Html />
                                        <Svg.Css />
                                        <Svg.Javascript />
                                        <Svg.Python />
                                        <Svg.Lua />
                                    </div>
                                </fieldset>
                                <fieldset className='resume-skills-fieldset pastel-green-border'>
                                    <legend className='resume-skills-legend'>
                                        <div className='resume-skills-section-title'>
                                            <h3>Software</h3>
                                        </div>
                                    </legend>
                                    <div className='resume-logo-grid'>
                                        <Svg.Git />
                                        <Svg.Github />
                                        <Svg.Confluence />
                                        <Svg.Jira />
                                        <Svg.BitBucket />
                                        <Svg.VsStudios />
                                    </div>
                                </fieldset>
                                <fieldset className='resume-skills-fieldset pastel-red-border'>
                                    <legend className='resume-skills-legend'>
                                        <div className='resume-skills-section-title'>
                                            <h3>Frameworks</h3>
                                        </div>
                                    </legend>
                                    <div className='resume-logo-grid'>
                                        <Svg.Spring />
                                        <Svg.Kafka />
                                        <Svg.ReactFramework />
                                        <Svg.Cassandra />
                                    </div>
                                </fieldset>
                                <fieldset className='resume-skills-fieldset pastel-purple-border'>
                                    <legend className='resume-skills-legend'>
                                        <div className='resume-skills-section-title'>
                                            <h3>Game Engines</h3>
                                        </div>
                                    </legend>
                                    <div className='resume-logo-grid'>
                                        <Svg.Unity />
                                        <Svg.Unreal />
                                    </div>
                                </fieldset>
                                <fieldset className='resume-skills-fieldset pastel-orange-border'>
                                    <legend className='resume-skills-legend'>
                                        <div className='resume-skills-section-title'>
                                            <h3>Graphics</h3>
                                        </div>
                                    </legend>
                                    <div className='resume-logo-grid'>
                                        <Svg.OpengGl />
                                        <Svg.WebGl />
                                    </div>
                                </fieldset>
                            </div>
                        </fieldset>
                    </div>
                    <div className='resume-download'>
                        <button className='resume-download-button'>
                            <a href={Documents.resume} >
                                <div className='resume-download-button-contents'>
                                    <VscFilePdf />
                                    <span>Download Resume</span>
                                </div>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
            <Contact />
            <Footer />
        </>
    )
}
