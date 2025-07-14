import { Box } from "@mui/material";
import "../../styles/About.css";

export default function About() {
  return (
    <Box
      className="about-wrapper"
      sx={{
        backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.9), rgba(0,0,0,0.7)), url("/images/bg/mashtots.webp")`,
      }}
    >
      <h2 className="about-title">
        Welcome to one of my early projects: <span>Learn Armenian</span>.
      </h2>
      <p className="about-text">
        This is an educational website with a simple goal: to help you learn
        some Armenian! The current demo features a Picture Dictionary (on
        the&nbsp;
        <a href="/">Home</a> page), where you can explore useful words and
        phrases accompanied by explanatory illustrations.
      </p>
    </Box>
  );
}
