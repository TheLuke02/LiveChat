import { ButtonProps } from '@/types'
import React from 'react'

const Button = ( {title, containerStyles, btnType, textStyles, handleClick}: ButtonProps ) => {
  return (
    <button
      disabled={false}
      type={btnType || 'button'}
      className={`btn ${containerStyles}`}
      onClick={handleClick}
    > 
      <span className={`flex-1 ${textStyles}`}>
        {title}
      </span>
    </button>
  )
}

export default Button