import React, { Dispatch, SetStateAction } from "react";
import './buttons.css'

type IButton = {
    value : String
    operation : (button:String) => void
}

const Button = (button:IButton) => {
    return(
        <button className="button" onClick={() => button.operation(button.value)}>
            {button.value}
        </button>
    )
}

export default Button