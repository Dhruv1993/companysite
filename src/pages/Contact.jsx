import { Box, Container, Typography } from "@mui/material";
import ContactHero from "../components/ContactHero";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <Box>
      <ContactHero />
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Typography
          variant="h3"
          align="center"
          sx={{
            mb: { xs: 3, md: 4 },
            fontWeight: 700,
            fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.5rem" },
            background: "linear-gradient(45deg, #1976D2, #F50057)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Send Us a Message
        </Typography>
        <ContactForm />
      </Container>
    </Box>
  );
}

export default Contact;
