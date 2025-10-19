import {
  Box,
  Typography,
  Grid,
  Paper,
  useTheme,
  useMediaQuery,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import { featureBgForTitle } from "./svgs/feature/FeatureBgs";
import { useState } from "react";

const MotionPaper = motion(Paper);
const MotionBox = motion(Box);

function ServiceDetail({
  title,
  description,
  features,
  image,
  index,
  icon: Icon,
  Background, // section-level SVG background (unused inside cards now)
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isReversed = index % 2 !== 0;
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <Box
      sx={{
        py: { xs: 4, sm: 6, md: 8 },
        backgroundColor: isReversed ? "background.default" : "background.paper",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Grid
        container
        spacing={{ xs: 3, md: 6 }}
        alignItems="center"
        direction={isReversed && !isMobile ? "row-reverse" : "row"}
      >
        <Grid item xs={12} md={6} sx={{ position: "relative" }}>
          <MotionBox
            initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            sx={{ px: { xs: 2, sm: 4 }, position: "relative", zIndex: 1 }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2,
                justifyContent: {
                  xs: "center",
                  md: isReversed ? "flex-end" : "flex-start",
                },
              }}
            >
              {Icon && (
                <Icon
                  sx={{
                    fontSize: { xs: 40, sm: 48 },
                    color: "primary.main",
                    mr: 2,
                  }}
                />
              )}
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.5rem" },
                  fontWeight: 700,
                  textAlign: {
                    xs: "center",
                    md: isReversed ? "right" : "left",
                  },
                  background: "linear-gradient(45deg, #1976D2, #F50057)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {title}
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                color: "text.secondary",
                fontSize: { xs: "1rem", sm: "1.1rem" },
                lineHeight: 1.8,
                textAlign: { xs: "center", md: isReversed ? "right" : "left" },
              }}
            >
              {description}
            </Typography>
            <Grid container spacing={2}>
              {features.map((feature, idx) => {
                const FeatureBg = featureBgForTitle(feature.title);
                return (
                  <Grid item xs={12} sm={6} key={idx}>
                    <MotionPaper
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      elevation={0}
                      onClick={() =>
                        feature.image && setSelectedImage(feature.image)
                      }
                      sx={{
                        p: 2,
                        height: "100%",
                        border: 1,
                        borderColor: "divider",
                        backgroundColor: "background.paper",
                        position: "relative",
                        overflow: "hidden",
                        textAlign: {
                          xs: "center",
                          md: isReversed ? "right" : "left",
                        },
                        "&:hover": {
                          borderColor: "primary.main",
                          backgroundColor: "action.hover",
                          cursor: feature.image ? "pointer" : "default",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      {/* Feature background */}
                      <Box
                        sx={{
                          position: "absolute",
                          top: 8,
                          bottom: 8,
                          left: isReversed ? -50 : "auto",
                          right: !isReversed ? -50 : "auto",
                          width: { xs: "55%", sm: "60%" },
                          opacity: 1,
                          pointerEvents: "none",
                          zIndex: 0,
                        }}
                      >
                        <FeatureBg />
                      </Box>

                      <Box sx={{ position: "relative", zIndex: 1 }}>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontWeight: 600,
                            color: "text.primary",
                            mb: 0.5,
                          }}
                        >
                          {feature.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {feature.description}
                        </Typography>
                        {feature.image && (
                          <Typography
                            variant="caption"
                            sx={{
                              color: "primary.main",
                              fontStyle: "italic",
                              mt: 1,
                              display: "block",
                            }}
                          >
                            Click to view image
                          </Typography>
                        )}
                      </Box>
                    </MotionPaper>
                  </Grid>
                );
              })}
            </Grid>
          </MotionBox>
        </Grid>
        <Grid item xs={12} md={6}>
          <MotionBox
            initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            sx={{
              px: { xs: 2, sm: 4 },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={image}
              alt={title}
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: 2,
                boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
              }}
            />
          </MotionBox>
        </Grid>
      </Grid>

      {/* Image Modal */}
      <Dialog
        open={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        maxWidth="md"
        fullWidth
      >
        <DialogContent sx={{ p: 0, position: "relative" }}>
          <IconButton
            onClick={() => setSelectedImage(null)}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              bgcolor: "rgba(0,0,0,0.5)",
              color: "white",
              zIndex: 1,
              "&:hover": {
                bgcolor: "rgba(0,0,0,0.7)",
              },
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            component="img"
            src={selectedImage}
            alt="Hardware Solution"
            sx={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default ServiceDetail;
