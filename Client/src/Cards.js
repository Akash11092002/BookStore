import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({ item }) {
  const handleLearnMore = () => {
    if (item.link) {
      window.location.href = item.link; // Navigate to the link directly
    } else {
      console.error('Link not provided for this item');
    }
  };

  return (
    <Card sx={{ maxWidth: 345 }} style={{ border: '2px solid black' }}>
      <CardMedia
        sx={{ height: 200 }}
        image={item.image}
        title={item.title}
        alt={item.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.author}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{item.category}</Button>
        <Button size="small" onClick={handleLearnMore}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
