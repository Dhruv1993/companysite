import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  IconButton,
  Box,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const ImageGallery = ({ images = [], open, onClose, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleClose = () => {
    setCurrentIndex(initialIndex);
    onClose();
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      handlePrevious();
    } else if (event.key === "ArrowRight") {
      handleNext();
    } else if (event.key === "Escape") {
      handleClose();
    }
  };

  if (!images.length) return null;

  const currentImage = images[currentIndex];

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="lg"
      fullWidth
      fullScreen={isMobile}
      onKeyDown={handleKeyDown}
      PaperProps={{
        sx: {
          backgroundColor: "rgba(19, 18, 18, 0.89)",
          color: "white",
          m: isMobile ? 0 : 2,
          borderRadius: isMobile ? 0 : 2,
        },
      }}
    >
      <DialogContent
        sx={{
          p: 0,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: isMobile ? "100vh" : "70vh",
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: "white",
            zIndex: 10,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            },
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <IconButton
              onClick={handlePrevious}
              sx={{
                position: "absolute",
                left: 8,
                top: "50%",
                transform: "translateY(-50%)",
                color: "white",
                zIndex: 10,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                },
              }}
            >
              <ChevronLeftIcon />
            </IconButton>
            <IconButton
              onClick={handleNext}
              sx={{
                position: "absolute",
                right: 8,
                top: "50%",
                transform: "translateY(-50%)",
                color: "white",
                zIndex: 10,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                },
              }}
            >
              <ChevronRightIcon />
            </IconButton>
          </>
        )}

        {/* Image */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            p: 2,
          }}
        >
          <img
            src={currentImage.url}
            alt={currentImage.alt || `Image ${currentIndex + 1}`}
            style={{
              maxWidth: "100%",
              maxHeight: isMobile ? "80vh" : "60vh",
              objectFit: "contain",
              borderRadius: 8,
            }}
          />

          {/* Image Info */}
          {(currentImage.title || currentImage.description) && (
            <Box sx={{ mt: 2, textAlign: "center", maxWidth: "600px" }}>
              {currentImage.title && (
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {currentImage.title}
                </Typography>
              )}
              {currentImage.description && (
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  {currentImage.description}
                </Typography>
              )}
            </Box>
          )}
        </Box>

        {/* Image Counter */}
        {images.length > 1 && (
          <Typography
            variant="body2"
            sx={{
              position: "absolute",
              bottom: 16,
              left: "50%",
              transform: "translateX(-50%)",
              opacity: 0.7,
            }}
          >
            {currentIndex + 1} / {images.length}
          </Typography>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ImageGallery;
