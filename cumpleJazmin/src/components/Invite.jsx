import React from 'react'
import CalendarGif from '../assets/image/calendar.gif'
import MapsGif from '../assets/image/ubicacion.gif'
import RegaloGif from '../assets/image/regalo.gif'
import DressCode from '../assets/image/dresscode.gif'
import Heart from '../assets/image/heart.gif'
import Card from './card/Card.jsx'
import Contador from './contador/Contador.jsx'
import Banner from './banner/Banner.jsx'
import MusicPlayer from './music-player/MusicPlayer.jsx'
import './invite.scss'
import Itinerario from './Itinerario/Itinerario.jsx'
import '@fontsource/dancing-script/400.css'
import '@fontsource/playfair-display'

const Invite = () => {
    let color1 = '#8a6179';
    let color2 = '#fff';
    
    return (
        <React.Fragment>

            <MusicPlayer />
            
            <Banner />

            <Contador date={'2026-01-31T20:30:00'} />
            
            {/* Fecha del evento */}
            <Card gif={CalendarGif} 
                title={"¿CUÁNDO?"} 
                description={"31 DE ENERO 2026"} 
                variant="primary"
            />

            {/* Itinerario */}
            <Itinerario/>

            {/* Dress Code */}
            <div className="dresscode">
                <div className="dresscode-icon">
                    <img src={DressCode} className="gif" />
                </div>

                <p className="dresscode-title">Código de vestimenta:</p>
                <p className="dresscode-main">Elegante Sport</p>
            </div>

            {/* Ubicacion */}
            <Card gif={MapsGif} 
                title={"¿DÓNDE?"} 
                description={"Alcira's Eventos.\nCalle 21 1230, Balcarce."}
                variant={"white"}
                url={"https://maps.app.goo.gl/AhDfbRatQYHX3dUk6"}
                textButton={"CÓMO LLEGAR"}
            />

            {/* Regalo */}
            <Card
                gif={RegaloGif}
                title="Regalo"
                description="Nada es más importante que tu presencia. Si deseás hacerme un regalo, habrá una alcancía disponible."
                variant="primary"
            />

            {/* Asistencia */}
            <Card
                gif={MapsGif}
                title="ASISTENCIA"
                description={
                    <React.Fragment>
                        Agradecemos confirmar presencia antes del <span>23/01/2026</span>
                    </React.Fragment>
                }
                variant="white"
                url="https://wa.me/5492262559594"
                textButton="ENVIAR RESPUESTA"
            />

            {/* Frase uno */}
            <div className="memory-banner">
                <div className="memory-line" />

                <p className="memory-text">
                    HAY MOMENTOS QUE NO SE PUEDEN BORRAR, PERSONAS QUE NO SE PUEDEN
                    OLVIDAR Y RECUERDOS COMO ESTOS QUE SIEMPRE VOY A ATESORAR
                </p>

                <div className="memory-line" />
            </div>

            {/* Image container */}
            <div className="image-vertical"></div>

            {/* Frase dos */}
            <div className="memory-banner memory-banner--secondary">
                <div className="memory-line" />

                <p className="memory-text">
                    Prepárate para una noche{' '}
                    <span className="memory-highlight">¡INOLVIDABLE!</span>
                </p>

                <div className="memory-line" />
            </div>

            {/* Agradecimiento */}
            <Card gif={Heart} 
                title={"Te espero"} 
                description={"Jazmin"} 
                variant="white"
            />

        </React.Fragment>
    )
}

export default Invite