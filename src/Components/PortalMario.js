import { React, useEffect } from 'react'
import { ProjectContentContainer } from "./ProjectContentContainer";
import { Contact } from './Contact.js'
import { Footer } from './Footer.js';
import Images from '../Constants/Images.js'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

import "../Styles/PortalMario.css";

export const PortalMario = (props) => {

    useEffect(() => {
        props.setViewingResume(true);
    }, [props]);

    return (
        <div>


            <ProjectContentContainer>
                <div className='section-title heading-underline'>
                    <h2>Portal Mario</h2>
                </div>

                <br />

                <Swiper
                    slidesPerView={"auto"}
                    centeredSlides={true}
                    spaceBetween={30}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={Images.PortalMario} alt="PortalMario" /></SwiperSlide>
                    <SwiperSlide><img src={Images.MandelBuld} alt="MandelBulb" /></SwiperSlide>
                </Swiper>

                <br />

                <div className='section-title'>
                    <h3>Overview</h3>
                </div>
                <div className='section-description'>
                    <p>
                        Recreated the original Mario Bros game made for the Nintendo Entertainment System using the MonoGame engine. In addition to
                        the original mechanics, the player can pick up the Portal Gun and solve challenging puzzles using portals and companion cubes.
                    </p>
                </div>

                <div className='section-title'>
                    <h3>Project Breakdown</h3>
                </div>
                <div className='section-description'>
                    <ul className='section-list'>
                        <li>
                            <strong style={{ color: 'var(--color-light-blue)' }}>Role:</strong> <p>Gameplay Developer</p>
                        </li>
                        <li>
                            <strong style={{ color: 'var(--color-light-blue)' }}>Team Size:</strong> <p>4 people</p>
                        </li>
                        <li>
                            <strong style={{ color: 'var(--color-light-blue)' }}>Development Time:</strong> <p>4 months</p>
                        </li>
                        <li>
                            <strong style={{ color: 'var(--color-light-blue)' }}>Tech Stack:</strong> <p>MonoGame, C#</p>
                        </li>
                    </ul>
                </div>

                <div className='section-title'>
                    <h3>Contributions</h3>
                </div>
                <div className='section-description'>
                    <ul className='section-list'>
                        <p>As a Gameplay Programmer, I worked on the following:</p>
                        <li>
                            <strong style={{ color: 'var(--color-light-blue)' }}>Animation:</strong> <p>Developed the sprite sheet animation system that drives all characters in the scene.</p>
                        </li>
                        <li>
                            <strong style={{ color: 'var(--color-light-blue)' }}>User Interface:</strong> <p>Created the user interface that presents information to the player concerning number of lives, coins collected, and time remaining.</p>
                        </li>
                        <li>
                            <strong style={{ color: 'var(--color-light-blue)' }}>Game Object State Machines:</strong> <p>To easily organize game logic, state machines were used to make fix states containing unique behavior for the enemies, player, and objects.</p>
                        </li>
                        <li>
                            <strong style={{ color: 'var(--color-light-blue)' }}>Portal Gun & Physics:</strong> <p>At the end of the project, my team implemented the Portal Gun, portals, and portal physics. I focused on the the gun and physics tied with the portals.</p>
                        </li>
                    </ul>
                </div>

                <div className='section-title'>
                    <h3>Feature List</h3>
                </div>
                <div className='section-description'>

                </div>

            </ProjectContentContainer>

            <Contact />
            <Footer />
        </div>
    )
}