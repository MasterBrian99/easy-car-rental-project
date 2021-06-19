import React from 'react';
import Sidebar from "../../../components/admin/Sidebar/Sidebar";
import {Box} from "@chakra-ui/layout";
import AdminMainBar from "./AdminMainBar/AdminMainBar";


const MyComponent = () => {
    return (
            <Box className={'mainBackgrounds'} display={'flex'} >
                <Sidebar/>
                <AdminMainBar/>
            </Box>
    );
};

export default MyComponent;


// AdminDashboardMain