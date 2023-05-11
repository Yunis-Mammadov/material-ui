import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const Hero = () => {
  return (
    <>
    <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: 10
    }}>
        <Typography variant="h3" sx={{
             fontSize: "3.5rem",
             fontWeight: 300,
             marginBottom: 2,
             fontFamily: "'Roboto Flex', sans-serif",

        }} 
        >
            Album layout
        </Typography>
        <Typography sx={{
             textAlign: "center",
             overflow: "hidden",
             fontSize: "1.4rem", 
             color: "rgba(0, 0, 0, 0.6);",
             width: "40%",
             lineHeight: "1.3em",
             height: "6em",

        }}>
        Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely
        </Typography>
        <Box sx={{ 
          display: 'flex', 
          gap: 2,
          marginTop: 4, 
           }}>
        <Button variant="contained">MAIN CALL TO ACTION</Button>
        <Button variant="outlined">SECONDARY ACTION</Button>
        </Box>
    </Box>
    </>
  )
}

export default Hero


// marginRight: "auto",
//              marginLeft:  "auto",
//              marginBottom: 5,
//              maxWidth: 560,
//              paddingRight: 10,
//              paddingLeft: 10,