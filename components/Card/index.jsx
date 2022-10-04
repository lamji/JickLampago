import { Box, Typography } from '@mui/material'
import Image from "next/image";
import React from 'react'

function index(props) {
    const {bg, width, height, color, image, label} = props
    console.log(props)
  return (
    <Box>
        <Box gap={1} sx={{display: "flex", background: bg , p: 1, borderRadius: 10, justifyContent: "center"}}>
            <Typography variant='body2' sx={{color: {color}}}>
                {label}
            </Typography>
            <Image
                src={image}
                alt="Picture of the author"
                width={width}
                height={height}
              />
        </Box>
    </Box>
  )
}

export default index