import React from 'react'
import classes from './button.module.css'

const Button = (props) => {
  return (
    <button className={classes.button} 
    type={props.type || 'button'}
    onClick={props.onClick}>

      {props.children}
      
    </button>
  )
}

export default Button
