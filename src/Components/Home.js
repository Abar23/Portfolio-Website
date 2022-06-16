import React, { useEffect } from "react";
import { Element } from 'react-scroll';
import { Contact, Footer } from './Components';

export const Home = React.forwardRef((props, refs) => {

    function scrollToElementInstantly(ref) {
        window.scrollTo({
            top: ref.current.offsetTop - props.elementScrollData.offset,
            left: 0,
            behavior: 'instant'
        });

        props.setElementScrollData({
            element: null,
            offset: 0
        });
    }

    useEffect(() => {
        const observer = new IntersectionObserver(props.callback, props.options);

        refs.forEach((ref) => {
            if (ref.current != null) {
                observer.observe(ref.current);
            }
        });

        switch (props.elementScrollData.element) {
            case 'home':
                console.log(props.elementScrollData)
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
        <div>
            <Element>
                <div className='home' ref={refs[0]}>
                    Hi
                </div>
            </Element>
            <Element>
                <div className='about' ref={refs[1]}>
                    About
                </div>
            </Element>
            <Element>
                <div className='projects' ref={refs[2]}>
                    Projects
                </div>
            </Element>
            <Element>
                <Contact ref={refs[3]}/>
            </Element>
            <Footer/>
        </div>
    )
})