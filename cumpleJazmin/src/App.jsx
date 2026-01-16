import React from 'react'
import './App.css'
import Card from './card/card.jsx'
import calendarGif from './assets/calendar.gif'
import Contador from './contador/Contador.jsx'

function App() {

  let color1 = '#8a6179';
  let color2 = '#fff';

  return (
    <React.Fragment>
      <div  className="banner" alt="Banner de cumpleaños">
        <h1 className='title-banner'>MIS 15</h1>
        <h2 className='subtitle-banner'>Jazmín</h2>
      </div>

      <Contador date={'2026-01-30T20:00:00'} />
      
      <Card gif={calendarGif} 
            title={"¿CUÁNDO?"} 
            description={"30 DE ENERO 2026"} 
            txtColor={color2} 
            bgColor={color1}
      />

      <Card gif={calendarGif} 
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

export default App
