import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.map(sushi => <Sushi sushi={sushi} 
                                          key={sushi.id} 
                                          eatSushi={props.eatSushi} 
                                          eaten={props.plates.includes(sushi)}/>)
        }
        <MoreButton nextSushis={props.nextSushis}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer