import { Box, Container, Paper } from "@mui/material";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <Container
        maxWidth={false}
        disableGutters
        className="footer-wrapper"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <div className="footer-boxes">
          <Box>
            <h3>WanderLove</h3>
            <h6>© WanderLove 2024</h6>
          </Box>
        </div>
        <div className="footer-boxes">
          <Box>
            <h3>Company</h3>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </Box>
        </div>
        <div className="footer-boxes">
          <Box>
            <h3>Contact</h3>
            <ul>
              <li>Support</li>
              <li>Security</li>
              <li>Safety Tips</li>
            </ul>
          </Box>
        </div>
      </Container>
    </>
  );
}
