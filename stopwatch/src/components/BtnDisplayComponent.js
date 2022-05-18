import React from 'react'

const BtnDisplayComponent = (props) => {
  return (
    <div>
        <button className = "stopwatch-btn stopwatch-btn-gre" onClick = { props.start }>Start</button>
    </div>
  )
}

export default BtnDisplayComponent