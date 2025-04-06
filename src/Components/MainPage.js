import React, { useEffect } from "react";
import { Element } from 'react-scroll';
import { Home, Contact, Footer, About, Projects } from './Components';
import { motion } from "framer-motion";

export const MainPage = React.forwardRef((props, refs) => {

    useEffect(() => {

        function scrollToElementInstantly(ref) {
            window.scrollTo({
                top: ref.current.offsetTop,
                left: 0,
                behavior: 'instant'
            });
    
            props.setElementScrollData({ element: null });
        }
    
        const observer = new IntersectionObserver(props.callback, props.options);

        refs.forEach((ref) => {
            if (ref.current != null) {
                observer.observe(ref.current);
            }
        });

        switch (props.elementScrollData.element) {
            case 'home':
                scrollToElementInstantly(refs[0]);
                break;

            case 'about':
                scrollToElementInstantly(refs[1]);
                break;

            case 'projects':
                scrollToElementInstantly(refs[2]);
                break;

            case 'contact':
                scrollToElementInstantly(refs[3]);
                break;

            default:
                break;
        }

        return () => {
            refs.forEach((ref) => {
                ref.current && observer.unobserve(ref.current);
            });
        };
    }, [refs, props])

    return (
        <motion.div
            initial={{translateX: "-100vw", opacity: 0}}
            animate={{translateX: 0, opacity: 1 , transition:{ type: "tween"}}}
            exit={{translateX: "-100vw", opacity: 0, transition:{ type: "tween"}}}
        >
            <Element>
                <Home ref={refs[0]}/>
            </Element>
            <Element>
                <About ref={refs[1]}/>
            </Element>
            <Element>
                <Projects ref={refs[2]}/>
            </Element>
            <Element>
                <Contact ref={refs[3]}/>
            </Element>
            <Footer/>
        </motion.div>
    )
})