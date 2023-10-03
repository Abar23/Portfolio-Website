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
                        <h2>Team Projects</h2>
                    </div>
                    <div className='project-post-card-list'>
                        <Postcard
                            title="Dodge Brawl"
                            description="Couch competitive dodgeball game built with a custom C++ engine, where players battle to be the last person standing. "
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
                            description="A co-operative roguelike that allows players to traverse procedurally generated dungeons while collecting deadly weapons, powerful magic spells, and valuable loot."
                            tags={[
                                { text: "C#", backgroundColor: "background-pastel-teal" },
                                { text: "Unity", backgroundColor: "background-pastel-red" }
                            ]}
                            imageSrc={Images.DungeonsOfAvarice}
                            imageAlt="DungeonsOfAvarice"
                        />

                        <Postcard
                            title="Portal Mario"
                            description="A recreation of the classic Super Mario Bros. for the NES with some mechanics inspired by Portal. Not only can players jump on goombas and koopa troopas, but they can grab the portal gun to solve tricky puzzles and traverse the world in creative ways!"
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
                            description="Developed a 3D animation system within my custom game engine that is capable of interpolating between keyframes to animate complex models with a large number of bones."
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
                            description="Offline CPU ray tracer capable of rendering BRDF-based lighting that supports material properties including specular, transmission, shininess, refraction, and diffuse. It additionally supports arbitrary shaped lights and depth of field."
                            tags={[
                                { text: "C++", backgroundColor: "background-pastel-teal" },
                                { text: "Assimp", backgroundColor: "background-pastel-orange" }
                            ]}
                            imageSrc={Images.RayTracer}
                            imageAlt="RayTracer"
                        />  
                        
                        <Postcard
                            title="Fractal Raymacher"
                            description="Implemented WebGL fragment shaders that utilize raymarching and signed distance functions to generate 3D Mandelbulb fractals. Additional shaders exist for this project to showcase the power of raymarching."
                            tags={[
                                { text: "JavaScript", backgroundColor: "background-pastel-teal" },
                                { text: "WebGL", backgroundColor: "background-pastel-purple" },
                            ]}
                            imageSrc={Images.MandelBuld}
                            imageAlt="Mandelbulb"
                        />

                        <Postcard
                            title="Boids Birds"
                            description="Leveraged Boids algorithm and custom 2D animation system to create an interactive application that simulates the flocking behavior of birds observed in nature. Can be used with Google VR carboard glasses for a more immersive experience.                            "
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