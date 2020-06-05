import React from 'react'
import  './custom-button.styles.scss'

export const CustomButton = ({children, inverted, ...otherProps}) => {
    return (
        <button 
            className={ `${inverted ? 'inverted' : '' } custom-button `} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton;