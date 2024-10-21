import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";

interface CardItem {
  title: string;
  caption?: string;
  image: string;
  blurb: string;
  details: string;
  link?: string;
}

interface CardGridProps {
  items: CardItem[];
}

const CardGrid: React.FC<CardGridProps> = ({ items }) => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<CardItem | null>(null);

  const handleClickOpen = (item: CardItem) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
  };

  return (
    <>
      <Grid container spacing={2} justifyContent="center">
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              onClick={() => handleClickOpen(item)}
              style={{ cursor: "pointer", height: "100%" }}
            >
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt={item.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.blurb}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        {selectedItem && (
          <>
            <DialogTitle gutterBottom>
              <Typography variant="h5">{selectedItem.title}</Typography>
              {selectedItem.caption && (
                <Typography variant="overline">
                  {selectedItem.caption}
                </Typography>
              )}
            </DialogTitle>
            <DialogContent>
              <Box
                component="img"
                sx={{
                  mb: 2,
                }}
                alt={`Image showing ${selectedItem.title}`}
                src={selectedItem.image}
              />
              <Typography variant="body1">{selectedItem.details}</Typography>
            </DialogContent>
            <DialogActions>
              {selectedItem.link && (
                <Button onClick={handleClose} color="secondary">
                  <Link to={selectedItem.link}>Visit Webpage</Link>
                </Button>
              )}
              <Button onClick={handleClose} color="primary">
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  );
};

export default CardGrid;
