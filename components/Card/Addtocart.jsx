import React from "react";
import Image from "next/image";
import { Box } from "@mui/system";
import { Typography, IconButton } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Addtocart(props) {
    const {dataOut} = props
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          background: "#cbcbcb",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <Box>
          <Image
            src="/experince.png"
            alt="Picture of the author"
            width={45}
            height={45}
          />
        </Box>
        <Box mx={2}>
          <Typography
            variant="h6"
            fontWeight={700}
            sx={{
              color: "gray",
            }}
          >
            Codally Tech
          </Typography>
          <Typography
            variant="body2"
            fontSize={12}
            sx={{
              color: "gray",
              textAlign: "center",
            }}
          >
            Taguig City
          </Typography>
        </Box>
        <Box
          sx={{
            height: "40px",
            width: "3px",
            background: "white",
            display: {
                lg: "block",
                xs: "none"
              }
          }}
        ></Box>
        <Box>
          <Typography
            variant="h6"
            fontWeight={700}
            sx={{
              color: "gray",
              marginLeft: "10px",
              display: {
                lg: "block",
                xs: "none"
              }
            }}
          >
            {" "}
            React Web Developer
          </Typography>
        </Box>
        <Box
          sx={{
            height: "40px",
            width: "3px",
            background: "white",
            marginLeft: "10px",
            marginRight: "10px",
            display: {
                lg: "block",
                xs: "none"
              }
          }}
        ></Box>
        <Box>
          <Typography
            variant="body2"
            fontSize={15}
            fontWeight={700}
            sx={{
              color: "gray",
              textAlign: "center",
              display: {
                lg: "block",
                xs: "none"
              }
            }}
          >
            Duration
          </Typography>
          <Typography
            variant="body2"
            fontSize={12}
            sx={{
              color: "gray",
              textAlign: "center",
              display: {
                lg: "block",
                xs: "none"
              }
            }}
          >
            3 Months
          </Typography>
        </Box>
        <Box
          sx={{
            height: "40px",
            width: "3px",
            background: "white",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        ></Box>
        <IconButton
          aria-label="delete"
          onClick={() => dataOut({
            status: true,
            id: 1
          })}
          sx={{
            p: 0,
            "&:focus": {
              outline: 0,
              border: 0,
            },
            "&:hover": {
              background: "transparent",
            },
          }}
        >
          <MoreHorizIcon />
          <Typography variant="body2" fontSize={12}>More</Typography>
        </IconButton>
      </Box>
    </div>
  );
}

export default Addtocart;
