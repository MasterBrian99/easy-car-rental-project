import React from 'react'
import {Box} from '@chakra-ui/react'
import Sidebar from '../../components/admin/Sidebar/Sidebar'
import AdminAllUsers from '../../containers/admin/AdminAllUsers/AdminAllUsers'

const AllUsersPage = () => {
    return (
     <>
      <Box className={"mainBackgrounds"} display={"flex"}>
        <Sidebar />
        <AdminAllUsers/>
      </Box>
      <div className="CircleContainerOne" />
      <div className="CircleContainerTwo" />
    </>
    )
}

export default AllUsersPage
