import { Box, Container, Typography, Link } from "@mui/material";
import { config } from "../config/env";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) => theme.palette.background.paper,
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} {config.company.name}. All rights
          reserved.
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: 1 }}
        >
          <Link color="inherit" href={`mailto:${config.contact.email}`}>
            {config.contact.email}
          </Link>
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
