import * as React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Modal, Typography } from '@mui/material';
// import Box from "@mui/material"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};  

export default function CardSection() {
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (   
        <Grid container spacing={2} item xs={7} margin={"0 auto"}>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ width: 250,height: "70vh"}}>
              <CardMedia
                sx={{marginTop: 11}}
                component="img"
                alt="random"
                height="250"
                image="https://media.tenor.com/C45MBZAcrlwAAAAC/barney-stinson.gif"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Barney Stinson
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Barney Stinsons  is one of five main characters on How I Met Your Mother. He is a manipulative
                </Typography>
              </CardContent>
              <CardActions>
        <Button  size="small">View</Button>
        <Button size="small" onClick={handleOpen}>Edit</Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
        Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
        </Box>
        </Modal>
        
      </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ width: 250, height: "70vh"}}>
              <CardMedia
                sx={{marginTop: 11}}
                component="img"
                alt="random"
                height="250"
                image="https://media.tenor.com/C45MBZAcrlwAAAAC/barney-stinson.gif"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Barney Stinson
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Barney Stinsons  is one of five main characters on How I Met Your Mother. He is a manipulative
                </Typography>
              </CardContent>
              <CardActions>
        <Button size="small">View</Button>
        <Button size="small" onClick={handleOpen}>Edit</Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
        Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
        </Box>
        </Modal>
      </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ width: 250, height: "70vh" }}>
              <CardMedia
              sx={{marginTop: 11}}
                component="img"
                alt="random"
                height="250"
                image="https://media.tenor.com/C45MBZAcrlwAAAAC/barney-stinson.gif"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Barney Stinson
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Barney Stinsons  is one of five main characters on How I Met Your Mother. He is a manipulative
                </Typography>
              </CardContent>
              <CardActions>
        <Button size="small">View</Button>
        <Button size="small" onClick={handleOpen}>Edit</Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
        Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
        </Box>
        </Modal>
      </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ width: 250, height: "70vh" }}>
              <CardMedia
              sx={{marginTop: 11}}
                component="img"
                alt="random"
                height="250"
                image="https://media.tenor.com/C45MBZAcrlwAAAAC/barney-stinson.gif"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Barney Stinson
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Barney Stinsons  is one of five main characters on How I Met Your Mother. He is a manipulative
                </Typography>
              </CardContent>
              <CardActions>
        <Button size="small">View</Button>
        <Button size="small" onClick={handleOpen}>Edit</Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
        Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
        </Box>
        </Modal>
      </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ width: 250, height: "70vh" }}>
              <CardMedia
              sx={{marginTop: 11}}
                component="img"
                alt="random"
                height="250"
                image="https://media.tenor.com/C45MBZAcrlwAAAAC/barney-stinson.gif"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Barney Stinson
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Barney Stinsons  is one of five main characters on How I Met Your Mother. He is a manipulative
                </Typography>
              </CardContent>
              <CardActions>
        <Button size="small">View</Button>
        <Button size="small" onClick={handleOpen}>Edit</Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
        Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
        </Box>
        </Modal>
      </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ width: 250, height: "70vh" }}>
              <CardMedia
              sx={{marginTop: 11}}
                component="img"
                alt="random"
                height="250"
                image="https://media.tenor.com/C45MBZAcrlwAAAAC/barney-stinson.gif"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Barney Stinson
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Barney Stinsons  is one of five main characters on How I Met Your Mother. He is a manipulative
                </Typography>
              </CardContent>
              <CardActions>
        <Button size="small">View</Button>
        <Button size="small" onClick={handleOpen}>Edit</Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
        Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
        </Box>
        </Modal>
      </CardActions>
            </Card>
          </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ width: 250, height: "70vh" }}>
                <CardMedia
                sx={{marginTop: 11}}
                  component="img"
                  alt="random"
                  height="250"
                  image="https://media.tenor.com/C45MBZAcrlwAAAAC/barney-stinson.gif"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Barney Stinson
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Barney Stinsons  is one of five main characters on How I Met Your Mother. He is a manipulative
                  </Typography>
                </CardContent>
                <CardActions>
        <Button size="small">View</Button>
        <Button size="small" onClick={handleOpen}>Edit</Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
        Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
        </Box>
        </Modal>
      </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ width: 250, height: "70vh" }}>
                <CardMedia
                sx={{marginTop: 11}}
                  component="img"
                  alt="random"
                  height="250"
                  image="https://media.tenor.com/C45MBZAcrlwAAAAC/barney-stinson.gif"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Barney Stinson
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Barney Stinsons  is one of five main characters on How I Met Your Mother. He is a manipulative
                  </Typography>
                </CardContent>
                <CardActions>
        <Button size="small">View</Button>
        <Button size="small" onClick={handleOpen}>Edit</Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
        Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
        </Box>
        </Modal>
      </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ width: 250, height: "70vh" }}>
                <CardMedia
                sx={{marginTop: 11}}
                  component="img"
                  alt="random"
                  height="250"
                  image="https://media.tenor.com/C45MBZAcrlwAAAAC/barney-stinson.gif"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Barney Stinson
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Barney Stinsons  is one of five main characters on How I Met Your Mother. He is a manipulative
                  </Typography>
                </CardContent>
                <CardActions>
        <Button size="small">View</Button>
        <Button size="small" onClick={handleOpen}>Edit</Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
        Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
        </Box>
        </Modal>
      </CardActions>
              </Card>
            </Grid>
        </Grid>

      );
    }
