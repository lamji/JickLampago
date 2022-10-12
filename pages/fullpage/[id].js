import { Box, Typography } from '@mui/material'
import React from 'react'
import Item from "../../components/Item"
import Link from "next/link"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Index() {
  return (
    <Box sx={{m:3, }}>
      <Link href="/" >
        <Typography variant='body2' sx={{cursor: "pointer"}}><span className='span'><ArrowBackIcon /></span>Back</Typography>
      </Link>
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Item />
      </Box>
    </Box>
  
  )
}

export default Index