import { Box } from "@mui/material";

export default function PictureDictionaryOverlay() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      {/* Background image */}
      <Box
        className="picture-dictionary-bg"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url("/images/bg/garni.webp")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% auto",
          backgroundPosition: "top center",
          backgroundAttachment: "scroll",
          zIndex: -1,
        }}
      />

      {/* Dark overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(0deg, rgba(0,0,0,0.8), rgba(0,0,0,0.8))",
          zIndex: 1,
        }}
      />
    </Box>
  );
}
