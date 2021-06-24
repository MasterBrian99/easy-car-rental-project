import React from 'react'
import DriverLogin from '../../containers/common/DriverLogin/DriverLogin'
import Navbar from '../../containers/common/Navbar/Navbar'

const DriverLoginPage = () => {
    return (
        <>
               <Navbar />
        <DriverLogin/>
      <div className="CircleContainerOne"></div>
      <div className="CircleContainerTwo"></div>
        </>
    )
}

export default DriverLoginPage
