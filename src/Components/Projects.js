import React from 'react'
import Images from '../Constants/Images.js'
import '../Styles/Projects.css';

export const Projects = React.forwardRef((props, refs) => {

    return (
        <div className='projects container background-light-grey' ref={refs}>
            <div className='container-inner project-section-list'>
                <div>
                    <div className='section-title'>
                        <h2>Team Projects</h2>
                    </div>
                    <div className='project-poast-card-list'>
                        <div className='postcard'>
                            <div className='postcard-image-container'>
                                <img src={Images.DungeonsOfAvarice} />
                            </div>
                            <div className='postcard-description'>
                                <div className='section-title'>
                                    <h3><span className='postcard-description-title-underline'>Dungeons of Avarice</span></h3>
                                </div>
                                <div className='postcard-description-body'>
                                    <p>
                                        A co-operative roguelike that allows players to traverse procedurally generated dungeons while collecting deadly weapons, powerful magic spells, and valuable loot.
                                    </p>
                                </div>
                                <div className='postcard-description-tag-list'>
                                    <div className='postcard-description-tag background-pastel-purple'>
                                        <p>Unity</p>
                                    </div>
                                    <div className='postcard-description-tag background-pastel-teal'>
                                        <p>C#</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='postcard'>
                            <div className='postcard-image-container'>
                                <img src={Images.PortalMario} />
                            </div>
                            <div className='postcard-description'>
                                <div className='section-title'>
                                    <h3><span className='postcard-description-title-underline'>Portal Mario</span></h3>
                                </div>
                                <div className='postcard-description-body'>
                                    <p>
                                        A recreation of the classic Super Mario Bros. for the NES with some mechanics inspired by Portal. Not only can players jump on goombas and koopa troopas, but they can grab the portal gun to solve tricky puzzles and traverse the world in creative ways!
                                    </p>
                                </div>
                                <div className='postcard-description-tag-list'>
                                    <div className='postcard-description-tag background-pastel-purple'>
                                        <p>MonoGame</p>
                                    </div>
                                    <div className='postcard-description-tag background-pastel-teal'>
                                        <p>C#</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='postcard'>
                            <div className='postcard-image-container'>
                                <img src={Images.BoidsBirds} />
                            </div>
                            <div className='postcard-description'>
                                <div className='section-title'>
                                    <h3><span className='postcard-description-title-underline'>Boids Birds</span></h3>
                                </div>
                                <div className='postcard-description-body'>
                                    <p>
                                        Leveraged Boids algorithm and custom 2D animation system to create an interactive application that simulates the flocking behavior of birds observed in nature. Can be used with Google VR carboard glasses for a more immersive experience.
                                    </p>
                                </div>
                                <div className='postcard-description-tag-list'>
                                    <div className='postcard-description-tag background-pastel-orange'>
                                        <p>WebGL</p>
                                    </div>
                                    <div className='postcard-description-tag background-pastel-orange'>
                                        <p>WebVR</p>
                                    </div>
                                    <div className='postcard-description-tag background-pastel-teal'>
                                        <p>JavaScript</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='section-title'>
                        <h2>Personal Works</h2>
                    </div>
                    <div className='project-poast-card-list'>

                        <div className='postcard'>
                            <div className='postcard-image-container'>
                                <img src={Images.MandelBuld} />
                            </div>
                            <div className='postcard-description'>
                                <div className='section-title'>
                                    <h3><span className='postcard-description-title-underline'>Fractal Raymacher</span></h3>
                                </div>
                                <div className='postcard-description-body'>
                                    <p>
                                        Implented WebGL fragment shaders that utilize raymarching and signed distance functions to generate 3D Mandelbulb fractals. Additional shaders exist for this project to showcase the power of raymarching.
                                    </p>
                                </div>
                                <div className='postcard-description-tag-list'>
                                    <div className='postcard-description-tag background-pastel-orange'>
                                        <p>WebGL</p>
                                    </div>
                                    <div className='postcard-description-tag background-pastel-teal'>
                                        <p>JavaScript</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='postcard'>
                            <div className='postcard-image-container'>
                                <img src={Images.OpenglCoursework} />
                            </div>
                            <div className='postcard-description'>
                                <div className='section-title'>
                                    <h3><span className='postcard-description-title-underline'>OpenGL Coursework</span></h3>
                                </div>
                                <div className='postcard-description-body'>
                                    <p>
                                        OpenGL projects created for a real-time rendering course during my undergraduate studies. Projects included hierarchical modeling using custom 3D primitives, drawing plants using turtle graphics, texturing meshes with GLSL samplers, and modifing the OpenGL viewport to display in stereoscopic.
                                    </p>
                                </div>
                                <div className='postcard-description-tag-list'>
                                    <div className='postcard-description-tag background-pastel-orange'>
                                        <p>OpenGL</p>
                                    </div>
                                    <div className='postcard-description-tag background-pastel-teal'>
                                        <p>C++</p>
                                    </div>
                                    <div className='postcard-description-tag background-pastel-teal'>
                                        <p>GLSL</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})