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
        Welcome to my demo project <span>Learn Armenian</span>!
      </h2>
      <p className="about-text">
        It is an educational app, and the main goal is quite straight: teach you
        some Armenian! So far the demo consists of one section, Picture
        Dictionary, where you can find some useful words and phrases with
        explanatory illustrations.
      </p>
      <p className="about-text">
        The futher sections may include: Armenian phonetics theory and
        exercises, grammar rules, vocabulary and grammar exercises...
      </p>
    </Box>
  );
}
