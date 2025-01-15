import React from 'react'

const ShinnyEffect = ({left,right,top,size=500}) => {
     
    const positionStyles={
        top:`${top}px`,
        width:`${size}px`,
        height:`${size}px`,
        zindex:-1
    }

    if(left!== undefined){
        positionStyles.left=`${left}px`
    }

    if(right!== undefined){
        positionStyles.right=`${right}px`
    }

   return (
    <div className='shiny-effect'style={positionStyles}></div>
  )
}

export default ShinnyEffect