import React from 'react'
import CalendarGif from '../assets/image/calendar.gif'
import Card from './card/Card.jsx'
import Contador from './contador/Contador.jsx'
import './invite.scss'
import Itinerario from './Itinerario/Itinerario.jsx'
import '@fontsource/dancing-script/400.css'

const Invite = () => {
    let color1 = '#8a6179';
    let color2 = '#fff';
    
    return (
        <React.Fragment>
            <div  className="banner" alt="Banner de cumpleaños">
                <h1 className='title-banner'>MIS 15</h1>
                <h2 className='subtitle-banner'>Jazmín</h2>
            </div>

            <Contador date={'2026-01-30T20:00:00'} />
            
            {/* Fecha del evento */}
            <Card gif={CalendarGif} 
                title={"¿CUÁNDO?"} 
                description={"30 DE ENERO 2026"} 
                txtColor={color2} 
                bgColor={color1}
            />

            {/* Itinerario */}
            <Itinerario/>

            <Card gif={CalendarGif} 
                title={"DONDE?"} 
                description={"CÁMARA EMPRESARIA DE TANDIL"} 
                txtColor={color1} 
                bgColor={color2}
                url={"https://www.google.com/maps/place/C%C3%A1mara+Empresaria+De+Tandil/@-37.3225151,-59.1343717,20z/data=!4m6!3m5!1s0x95911f91c30f134d:0xc8b8e1654fbcea7e!8m2!3d-37.322253!4d-59.1343951!16s%2Fg%2F1ts3gsz8?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoASAFQAw%3D%3D"}
                textButton={"CÓMO LLEGAR"}
            />
        </React.Fragment>
    )
}

export default Invite