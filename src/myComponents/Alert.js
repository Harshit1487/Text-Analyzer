import React from 'react'

export const Alert = (props) => {
    return (
        <div style={{height:'50px'}}>
        {props.alert &&  <div className={`alert  alert-dismissible fade show alert-${props.alert.type} `} role="alert">
         {props.alert.msg} 
        </div>}
        </div>
  
     
    )
}
