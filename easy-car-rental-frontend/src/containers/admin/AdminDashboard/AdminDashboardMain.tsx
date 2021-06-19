import React, {Component} from 'react';
import Sidebar from "../../../components/admin/Sidebar/Sidebar";
import {Box} from "@chakra-ui/layout";
import AdminMainBar from "./AdminMainBar/AdminMainBar";

class AdminDashboardMain extends Component {
    render() {
        return (
            <Box className={'mainBackgrounds'} display={'flex'} >
                <Sidebar/>
                <AdminMainBar/>
            </Box>
        );
    }
}

export default AdminDashboardMain;