import { Box } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../../components/admin/Sidebar/Sidebar'
import AdminDrivers from '../../containers/admin/AdminDrivers/AdminDrivers'

const AdminDriverPage = () => {
    return (
     <>
      <Box className={"mainBackgrounds"} display={"flex"}>
        <Sidebar />
        <AdminDrivers/>
      </Box>
      <div className="CircleContainerOne" />
      <div className="CircleContainerTwo" />
    </>
    )
}

export default AdminDriverPage
