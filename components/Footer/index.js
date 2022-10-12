import { Box, Typography } from '@mui/material'
import React from 'react'
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import EmailIcon from '@mui/icons-material/Email';

function index() {
  return (
    <Box sx={{mt:2, height: "150px", background: "#dddddd", display: "flex", alignItems: "center", justifyContent:"center"}}>
        <Box>
            <Typography variant="body2" sx={{textAlign: "center"}}><span className="span"><AddIcCallIcon /></span>09761405283</Typography>
            <Typography variant="body2" sx={{textAlign: "center"}}><span className="span"><EmailIcon /></span>lampagojick5@gmail.com</Typography>
        </Box>
    </Box>  )
}

export default index