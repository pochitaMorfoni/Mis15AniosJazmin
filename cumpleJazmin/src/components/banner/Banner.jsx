import React from 'react'
import { useEffect,useRef } from 'react';
import ScrollIcon from '../../assets/icons/scroll-down.png';


const Banner = () => {

    const sectionRef = useRef(null);

    useEffect(() => {
    const handleScroll = () => {
        if (!sectionRef.current) return;

        const section = sectionRef.current;

        const start = section.offsetTop;
        const end = start + section.offsetHeight;

        const scrollY = window.scrollY;

        const progress = Math.min(
        Math.max((scrollY - start) / (end - start), 0),
        1
        );

        document.documentElement.style.setProperty(
        "--progress",
        progress
        );
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <React.Fragment>
        <section ref={sectionRef} className="seccion-globos">
            <div className='presentacion'>
                <div className='slider'><h3>Desliza para abrir</h3></div>
                <div className="scroll-icon"><img src={ScrollIcon} alt="Icono de desplazamiento hacia abajo" /></div>
                
            </div>
        </section>

        <div className="globo globo-izq" />
        <div className="globo globo-der" />

        <div className="banner" alt="Banner de cumpleaños">
            <div className='text-banner'>
                <p className='title-banner'>MIS 15</p>
                <h1 className='subtitle-banner'>Jazmín</h1>
            </div>
            
        </div>
        
    </React.Fragment>
  )
}

export default Banner
