import React from 'react'

const MoreButton = (props) => {
    return <button onClick={()=> props.nextSushis()}>
            More sushi!
          </button>
}

export default MoreButton