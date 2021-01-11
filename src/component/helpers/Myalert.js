import React from 'react'


export const MyAlert = (props) => {
    return (
        <div className={props.parentClass + " " + (props.isShow ? "" : "d-none")}>
            <div className={"alert fade alert-" + props.alertType + " " + (props.isShow ? "show" : "")} role="alert">
                {props.message}
            </div>
        </div>
    )
}
