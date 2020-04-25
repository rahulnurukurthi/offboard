import React from 'react';
import {Icon,IconButton,Tooltip,Box} from "@material-ui/core";

export default function IconButtonComponent(props){
    return(
        <Box>
            <Tooltip title={props.toolTip} >
                <IconButton onClick={props.onClick}>
                    <Icon fontSize='small'>{props.iconName}</Icon>
                </IconButton>
            </Tooltip>
        </Box>
    );
}