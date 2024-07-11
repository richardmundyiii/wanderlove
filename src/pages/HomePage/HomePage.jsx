import { Box, Button, Container, Typography } from "@mui/material";
import HomepageSplash from "../../assets/images/vows.jpg";
import "./HomePage.css";

export default function HomePage() {
  return (
    <>
      <Container maxWidth={false} disableGutters className="homepage-wrapper">
        <Box className="homepage-splash">
          <img src={HomepageSplash} alt="..." style={{ width: "100%" }} />
          <div className="overlay"></div>
          <div className="text-overlay">
            <Typography variant="h1">Wander</Typography>
            <Typography variant="h1">Love</Typography>
            <Typography variant="h1">WanderLove</Typography>
            <Button
              variant="contained"
              size="large"
              sx={{ mt: 5, p: 2, bgcolor: "pink" }}
            >
              Join Now!
            </Button>
          </div>
        </Box>
      </Container>
    </>
  );
}
