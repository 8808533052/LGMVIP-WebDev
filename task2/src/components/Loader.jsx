import React from 'react'

const Loader = ({load}) => {
    return (
        
        (load) ? 
           <div className="loader-container">
               <div className="cBLue">

               </div>
           </div> : ""
    )
}

export default Loader
