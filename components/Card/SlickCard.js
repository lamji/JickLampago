import * as React from 'react';
import Card from '@mui/material/Card';
import Link from 'next/link'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard(props) {
  const {dataIn} = props
  console.log(dataIn)
  return (
    <Card sx={{ maxWidth: 250, p:2 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="110"
        image={dataIn?.image}
      />
      <CardContent>
        <Typography gutterBottom variant="body2" component="div">
          {dataIn?.name}
        </Typography>
        <Link href={`/fullpage/${dataIn?.id}`}>
          <Button size="small">Learn More</Button>
        </Link>

      </CardContent>
    </Card>
  );
}
