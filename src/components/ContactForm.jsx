import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  CircularProgress,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import SendIcon from "@mui/icons-material/Send";
import { config, validateEnv } from "../config/env";

const MotionBox = motion(Box);

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field) => (event) => {
    setFormData((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Validate environment variables
    if (!validateEnv()) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await emailjs.send(
        config.emailjs.serviceId,
        config.emailjs.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          message: formData.message,
          to_name: config.company.name,
        },
        config.emailjs.publicKey
      );

      if (result.status === 200) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 600,
        mx: "auto",
        p: { xs: 2, sm: 4 },
      }}
    >
      {submitStatus === "success" && (
        <Alert severity="success" sx={{ mb: 3 }}>
          Thank you for your message! We'll get back to you soon.
        </Alert>
      )}

      {submitStatus === "error" && (
        <Alert severity="error" sx={{ mb: 3 }}>
          Sorry, there was an error sending your message. Please try again or
          contact us directly.
        </Alert>
      )}

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Name"
            value={formData.name}
            onChange={handleInputChange("name")}
            error={!!errors.name}
            helperText={errors.name}
            disabled={isSubmitting}
            sx={{
              "& .MuiOutlinedInput-root": {
                "&:hover fieldset": {
                  borderColor: "primary.main",
                },
              },
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={formData.email}
            onChange={handleInputChange("email")}
            error={!!errors.email}
            helperText={errors.email}
            disabled={isSubmitting}
            sx={{
              "& .MuiOutlinedInput-root": {
                "&:hover fieldset": {
                  borderColor: "primary.main",
                },
              },
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Company (Optional)"
            value={formData.company}
            onChange={handleInputChange("company")}
            disabled={isSubmitting}
            sx={{
              "& .MuiOutlinedInput-root": {
                "&:hover fieldset": {
                  borderColor: "primary.main",
                },
              },
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Message"
            multiline
            rows={6}
            value={formData.message}
            onChange={handleInputChange("message")}
            error={!!errors.message}
            helperText={errors.message}
            disabled={isSubmitting}
            sx={{
              "& .MuiOutlinedInput-root": {
                "&:hover fieldset": {
                  borderColor: "primary.main",
                },
              },
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={isSubmitting}
            endIcon={
              isSubmitting ? <CircularProgress size={20} /> : <SendIcon />
            }
            sx={{
              borderRadius: "28px",
              px: 4,
              py: 1.5,
              fontSize: "1.1rem",
              textTransform: "none",
              boxShadow: "0 8px 16px rgba(25,118,210,0.2)",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 12px 20px rgba(25,118,210,0.3)",
              },
              transition: "all 0.3s ease",
              width: { xs: "100%", sm: "auto" },
            }}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </Grid>
      </Grid>
    </MotionBox>
  );
}

export default ContactForm;
