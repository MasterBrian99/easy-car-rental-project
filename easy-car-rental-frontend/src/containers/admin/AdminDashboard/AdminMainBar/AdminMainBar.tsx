import React, {Component} from 'react';
import InfoCard from "../../../../components/admin/InfoCard/InfoCard";
import {Box} from "@chakra-ui/layout";

class AdminMainBar extends Component {
    render() {
        return (
            <Box display={'flex'} ml={'11rem'} flexWrap={'wrap'} mt={'1rem'}>
                <InfoCard/>
                <InfoCard/>
                <InfoCard/>
                <InfoCard/>
                <InfoCard/>
                </Box>
        );
    }
}

export default AdminMainBar;