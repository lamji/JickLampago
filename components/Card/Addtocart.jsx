import React from "react";
import Image from "next/image";
import { Box } from "@mui/system";
import { Typography, IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function Addtocart(props) {
  const { dataOut, dataIn } = props;
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          background: "#cbcbcb",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",

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
          <Box mx={2} sx={{
            minWidth: {
                lg: 200,
                xs: 150
            }
          }}>
            <Typography
              variant="h6"
              fontSize={12}
              fontWeight={700}
              sx={{
                color: "gray",
                textAlign: "center"
              }}
            >
              {dataIn?.company}
            </Typography>
            <Typography
              variant="body2"
              fontSize={12}
              sx={{
                color: "gray",
                textAlign: "center",
              }}
            >
              {dataIn?.location}
            </Typography>
          </Box>
          <Box
            sx={{
              height: "40px",
              width: "3px",
              background: "white",
              display: {
                lg: "block",
                xs: "none",
              },
            }}
          ></Box>
          <Box>
            <Typography
              variant="body2"
              fontWeight={700}
              sx={{
                color: "gray",
                marginLeft: "10px",
                display: {
                  lg: "block",
                  xs: "none",
                },
              }}
            >
              {dataIn?.position}
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
                xs: "none",
              },
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
                  xs: "none",
                },
              }}
            >
              Duration
            </Typography>
            <Typography
              variant="body2"
              fontSize={10}
              sx={{
                color: "gray",
                textAlign: "center",
                display: {
                  lg: "block",
                  xs: "none",
                },
              }}
            > {dataIn?.year}
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
        </Box>
        <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mr: 3
        }}>
          <IconButton
            aria-label="delete"
            onClick={() =>
              dataOut({
                status: true,
                id: dataIn?.id,
              })
            }
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
          </IconButton>
        </Box>
      </Box>
    </div>
  );
}

export default Addtocart;
