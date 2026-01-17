import React from 'react'
import './itinerario.scss'
import { GiPartyPopper } from 'react-icons/gi'
import { FaGlassCheers, FaMusic } from 'react-icons/fa'
import { MdRestaurant } from 'react-icons/md'
import { BsStars } from 'react-icons/bs'
import { FaMoon } from 'react-icons/fa6'

const events = [
  { time: '20:30 hs', text: 'Llegada de invitados', side: 'left', icon: <BsStars /> },
  { time: '21:15 hs', text: 'Entrada de Jazmín', side: 'right', icon: <FaMusic /> },
  { time: 'ထ hs', text: 'Fiesta', side: 'left', icon: <GiPartyPopper /> },
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
