import React from 'react'
import Images from '../Constants/Images.js'
import Postcard from './Postcard.js'
import '../Styles/Projects.css';

export const Projects = React.forwardRef((props, refs) => {

    return (
        <div className='projects container background-light-grey' ref={refs}>
            <div className='container-inner project-section-list'>
            <div>
                    <div className='section-title'>
                        <h2>Professional Titles</h2>
                    </div>
                    <div className='project-post-card-list'>
                        <Postcard
                            title="Rocket Racing"
                            description="A supersonic arcade racer that lets players drift, fly, and boost with their friends through an ever-growing selection of tracks."
                            tags={[
                                { text: "Unreal Engine 5", backgroundColor: "background-pastel-red" },
                            ]}
                            imageSrc={Images.RocketRacing}
                            imageAlt="RocketRacing"
                        />
                    </div>
                </div>

                <div>
                    <div className='section-title'>
                        <h2>Team Projects</h2>
                    </div>
                    <div className='project-post-card-list'>
                        <Postcard
                            title="Dodge Brawl"
                            description="A 2D competitive dodgeball game developed with a custom C++ engine, where players compete to be the last person standing."
                            tags={[
                                { text: "C++", backgroundColor: "background-pastel-teal" },
                                { text: "OpenGL", backgroundColor: "background-pastel-purple" },
                                { text: "GLFW", backgroundColor: "background-pastel-orange" },
                                { text: "ImGui", backgroundColor: "background-pastel-orange" }
                            ]}
                            imageSrc={Images.DodgeBrawl}
                            imageAlt="DodgeBrawl"
                        />

                        <Postcard
                            title="Dungeons of Avarice"
                            description="A cooperative roguelike where players explore procedurally generated dungeons, gathering deadly weapons, powerful spells, and valuable loot"
                            tags={[
                                { text: "C#", backgroundColor: "background-pastel-teal" },
                                { text: "Unity", backgroundColor: "background-pastel-red" }
                            ]}
                            imageSrc={Images.DungeonsOfAvarice}
                            imageAlt="DungeonsOfAvarice"
                        />

                        <Postcard
                            title="Portal Mario"
                            description="A reimagining of the classic Super Mario Bros. for the NES, featuring mechanics inspired by Portal. Players can not only jump on Goombas and Koopa Troopas but also use a portal gun to solve puzzles and navigate the world in innovative ways!"
                            tags={[
                                { text: "C#", backgroundColor: "background-pastel-teal" },
                                { text: "MonoGame", backgroundColor: "background-pastel-red" }
                            ]}
                            imageSrc={Images.PortalMario}
                            imageAlt="PortalMario"
                        />
                    </div>
                </div>

                <div>
                    <div className='section-title'>
                        <h2>Personal Works</h2>
                    </div>
                    <div className='project-post-card-list'>
                        <Postcard
                            title="Skeletal Animation"
                            description="Created a 3D animation system in my custom game engine that interpolates between keyframes to animate complex models with numerous bones."
                            tags={[
                                { text: "C++", backgroundColor: "background-pastel-teal" },
                                { text: "OpenGL", backgroundColor: "background-pastel-purple" },
                                { text: "Assimp", backgroundColor: "background-pastel-orange" },
                                { text: "GLFW", backgroundColor: "background-pastel-orange" },
                                { text: "ImGui", backgroundColor: "background-pastel-orange" }
                            ]}
                            imageSrc={Images.SkeletalAnimation}
                            imageAlt="Skeletal Animation"
                        />
                        <Postcard
                            title="CPU Ray Tracer"
                            description="Developed an offline CPU ray tracer that renders BRDF-based lighting, supporting material properties such as specular, transmission, shininess, refraction, and diffuse. It also accommodates arbitrarily shaped lights and depth of field effects."
                            tags={[
                                { text: "C++", backgroundColor: "background-pastel-teal" },
                                { text: "Assimp", backgroundColor: "background-pastel-orange" }
                            ]}
                            imageSrc={Images.RayTracer}
                            imageAlt="RayTracer"
                        />  
                        
                        <Postcard
                            title="Fractal Raymacher"
                            description="Implemented WebGL fragment shaders using raymarching and signed distance functions to generate 3D Mandelbulb fractals."
                            tags={[
                                { text: "JavaScript", backgroundColor: "background-pastel-teal" },
                                { text: "WebGL", backgroundColor: "background-pastel-purple" },
                            ]}
                            imageSrc={Images.MandelBuld}
                            imageAlt="Mandelbulb"
                        />

                        <Postcard
                            title="Boids Birds"
                            description="Utilized the Boids algorithm and a custom 2D animation system to develop an interactive application that simulates natural bird flocking behavior, with support for Google VR Cardboard glasses for an enhanced immersive experience."
                            tags={[
                                { text: "JavaScript", backgroundColor: "background-pastel-teal" },
                                { text: "WebGL", backgroundColor: "background-pastel-purple" },
                                { text: "WebVR", backgroundColor: "background-pastel-purple" }
                            ]}
                            imageSrc={Images.BoidsBirds}
                            imageAlt="BoidsBirds"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
})