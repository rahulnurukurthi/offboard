import React, {useState} from "react";
import {makeStyles,Grid,Box,useTheme,Typography} from "@material-ui/core";

export default function OffboardDashboard(){
    return(
        <Box color='primary.main'  alignItems='center' textAlign='center'>
            <Typography variant='h2'>
                Welcome To Offboard!
            </Typography>
        </Box>
    );
};