import React, { useState } from 'react'

const Card = ({ gif, title, description, variant, textButton, extraInfo, url }) => {
  const [showInfo, setShowInfo] = useState(false)

  const handleClick = () => {
    if (extraInfo) {
      setShowInfo(!showInfo)
    }
  }

  return (
    <div className={`card ${variant}`}>
      <img src={gif} className="gif" />

      <div className="card-place">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      {textButton && (
        extraInfo ? (
          <button
            className="button"
            onClick={handleClick}
          >
            {textButton}
          </button>
        ) : (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            {textButton}
          </a>
        )
      )}

      {showInfo && extraInfo && (
        <div className="card-extra">
          {extraInfo}
        </div>
      )}
    </div>
  )
}

export default Card
