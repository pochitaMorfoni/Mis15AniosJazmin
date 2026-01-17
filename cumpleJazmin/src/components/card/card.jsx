import React from 'react'

const card = ({gif,title,description,url,textButton,txtColor,bgColor}) => {
  return (
    <div className='card' style={{ 
                      '--bg-color': bgColor, 
                      '--txt-color': txtColor
                    }}>
        <img src={gif} className='gif'/>
        <div className='card-place'>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        {url ? <a href={url} target="_blank" className='button' style={
                    { 
                      '--bg-color': bgColor, 
                      '--txt-color': txtColor
                    }}>{textButton}</a> : null}
    </div>
  )
}

export default card
