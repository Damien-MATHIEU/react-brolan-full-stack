import React from 'react'
import '../styles/Button.css'
import { Link } from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--primary--dark', 'btn--primary--disabled','btn--outline', 'btn--outline--dark', 'btn--outline--red']
const SIZES = ['btn--medium', 'btn--large', 'btn--small']

export const Button = ({ children, type, onClick, buttonStyle, buttonSize, href, target, disabled }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    
    return (
        <Link to={{ pathname: href }} className="btn-mobile" target={ target }>
            <button 
            className={ `btn ${checkButtonStyle} ${checkButtonSize}` } 
            onClick={ onClick } 
            type={ type }
            disabled={ disabled }>
                { children }
            </button>
        </Link>
    )
}