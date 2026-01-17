import React from 'react'
import './itinerario.scss'
import { GiPartyPopper } from 'react-icons/gi'
import { FaGlassCheers, FaMusic } from 'react-icons/fa'
import { MdRestaurant } from 'react-icons/md'
import { BsStars } from 'react-icons/bs'
import { FaMoon } from 'react-icons/fa6'

const events = [
  { time: '20:30 hs', text: 'Llegada de invitados', side: 'left', icon: <BsStars /> },
  { time: '21:30 hs', text: 'Entrada de Jazmín', side: 'right', icon: <FaMusic /> },
  { time: '22:00 hs', text: 'Cena', side: 'left', icon: <MdRestaurant /> },
  { time: '23:30 hs', text: 'Brindis', side: 'right', icon: <FaGlassCheers /> },
  { time: '00:00 hs', text: 'Baile principal', side: 'left', icon: <FaMusic /> },
  { time: '01:00 hs', text: 'Fiesta', side: 'right', icon: <GiPartyPopper /> },
  { time: '06:00 hs', text: 'Fin de la fiesta', side: 'left', icon: <FaMoon /> },
]

const Itinerario = () => {
  return (
    <section className="itinerario">
      <h2 className="itinerario-title">Itinerario</h2>

      <div className="timeline">
        {events.map((item, index) => (
          <div key={index} className={`timeline-item ${item.side}`}>
            {item.side === 'left' && (
              <div className="content">
                <span className="time">{item.time}</span>
                <span className="text">{item.text}</span>
              </div>
            )}

            {item.icon && <span className="icon">{item.icon}</span>}

            <span className="dot" />

            {item.side === 'right' && (
              <div className="content">
                <span className="time">{item.time}</span>
                <span className="text">{item.text}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Itinerario
