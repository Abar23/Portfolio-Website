import React, { useEffect } from 'react';
import { Footer, Contact } from './Components';
import Documents from '../Constants/Documents';
import { VscFilePdf } from 'react-icons/vsc';
import { FaUniversity } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import { BsAwardFill, BsGearFill } from 'react-icons/bs';
import { motion } from "framer-motion";
import ResumeInfoSection from './ResumeInfoSection';
import Svg from '../Constants/Svg';
import '../Styles/Resume.css';

export const Resume = (props) => {

    const resumeSections = [
        {
            title: 'Gameplay Programmer Intern',
            company: 'Psyonix',
            location: 'San Diego, CA',
            date: 'May - Aug. 2023',
            description: 'Worked on the game client team to develop and design player-facing gameplay mechanics for Psyonix’s upcoming title, using both Blueprints and C++ in Unreal Engine 5.',
            listItems: [
                'Developed skilled AI utilizing behavior trees to compete against novice players, delivering an immersive experience.',
                'Improved the player’s driving mechanics by implementing new features for the vehicle’s physics-based abilities.',
                'Exposed game assets to user-generated content tools for the Unreal Editor for Fortnite.',
                'Collaborated with the design team to gather requirements and create development road maps for new gameplay features.',
                'Participated in playtesting sessions to provide feedback and identify bugs in gameplay mechanics.'
            ]
        },
        {
            title: 'Full Stack Engineer',
            company: 'JPMorgan Chase & Co.',
            location: 'Columbus, OH',
            date: 'Feb. 2020 - Apr. 2022',
            description: 'Focused on implementing front-end and back-end solutions for the Community & Consumer Banking sector, enabling over 230,000 businesses to apply for payroll loans through the Paycheck Protection Program.',
            listItems: [
                'Utilized Spring and Apache Kafka to implement distributed, event-driven microservices.',
                'Developed secure REST controllers that allowed web service calls to safely communicate with back-end servers.',
                'Improve customer profile data retrieval time by creating query-performant Apache Cassandra database tables.',
                'Led back-end production deployments for new business requirements, framework version upgrades, and security updates.'
            ]
        },
        {
            title: 'Software Engineer Intern',
            company: 'JPMorgan Chase & Co.',
            location: 'Columbus, OH',
            date: 'June - Aug. 2019',
            description: 'Responsible for prototyping an artificial intelligence system that utilized network traffic predict data transmission failures and determine network reliability patterns for internal file transfering tools.',
            listItems: [
                'Utilized AI models of IBM Watson Studio to generate inferences on internally produced data of MFT.',
                'Deployed a python-based Flask microservice that hosted a public endpoint to create data sets used for training and data processing of AI models.',
                'Setup continuous integration and deployment tools to ensure code quality and up-to-date releases.',
                'Followed test-driven development practices by writing test cases in Python’s Unittest framework.'
            ]
        },
        {
            title: 'Virtual Reality Environment Programmer',
            company: 'Ohio State University',
            location: 'Columbus, OH',
            date: 'Mar. – May 2018, Sept. – Dec. 2019',
            description: 'Recreated doctors’ offices in virtual reality, allowing medical professionals to preview how new equipment would fit into their workspace before making a purchase. ',
            listItems: [
                'Simulated medical imaging equipment that allows users to take pictures and videos from a camera in the scene.',
                'Utilized render texture targets to display back to the user the perspective of the camera.',
                'Designed a back-end Node.js server to save image and video data received from the user to persistent storage.'
            ]
        },
        {
            title: 'Embedded Firmware Co-op',
            company: 'GE Appliances',
            location: 'Louisville, KY',
            date: 'Aug. - Dec. 2017, May - Aug. 2018',
            description: 'Developed firmware for the refrigeration and air conditioning product lines at one of the industry’s leading manufacturers of electronic appliances for homes and businesses.',
            listItems: [
                'Utilized Test-Driven Development practices to ensure high-quality, maintainable, and reliable code.',
                'Designed control algorithms for auger motors, cooling fans, and user interface LEDs in open and closed-loop configurations.',
                'Leveraged appliance testing benches to validate firmware changes before merging into the production code base.',
            ]
        }
    ];

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
        <motion.div
            initial={{ translateX: "100vw", opacity: 0 }}
            animate={{ translateX: 0, opacity: 1, transition: { type: "tween" } }}
            exit={{ translateX: "100vw", opacity: 0, transition: { type: "tween" } }}
        >
            <div className='contact container background-light-grey'>
                <div className='container-inner'>
                <div className='resume-download'>
                        <button className='resume-download-button'>
                            <a href={Documents.resume} rel='noopener noreferrer' target='_blank'>
                                <div className='resume-download-button-contents'>
                                    <VscFilePdf />
                                    <span>Download Resume</span>
                                </div>
                            </a>
                        </button>
                    </div>
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
                                {resumeSections.map((section, index) => (
                                    <ResumeInfoSection
                                    key={index}
                                    title={section.title}
                                    company={section.company}
                                    location={section.location}
                                    date={section.date}
                                    description={section.description}
                                    />
                                ))}
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
                                    <h2>DigiPen Institute of Technology</h2>
                                    <hr className='resume-info-section-line' />
                                    <div className='date-location-info'>
                                        <p>Redmond, Washington</p>
                                        <p>Aug 2022 - Present</p>
                                    </div>
                                    <p className='resume-info-section-description'>
                                        M.S. in Computer Science specializing in Computer Graphics
                                    </p>
                                </div>
                                <div className='resume-info-section'>
                                    <h2>Ohio State University</h2>
                                    <hr className='resume-info-section-line' />
                                    <div className='date-location-info'>
                                        <p>Columbus, Ohio</p>
                                        <p>Aug 2014 - Dec 2019</p>
                                    </div>
                                    <p className='resume-info-section-description'>
                                        B.S. in Computer Science and Engineering specializing in Computer Graphics and Game Design - Cum Laude
                                    </p>
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
                                        <p className='resume-info-section-description'>
                                            Presented by Ohio State University's Department of Computer Science.
                                        </p>
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
                                        <Svg.IntelliJ />
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
                                        <Svg.MonoGame />
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
                </div>
            </div>
            <Contact />
            <Footer />
        </motion.div>
    )
}
