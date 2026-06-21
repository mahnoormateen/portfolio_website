import React, { useState } from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

function Connections() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const wrapperStyle = {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginTop: "24px",
    flexWrap: "wrap",
    maxWidth: "100%",
    overflowX: "hidden",
  };

  const getButtonStyle = (isHovered) => ({
    position: "relative",
    width: "40px",
    height: "43px",
    borderRadius: "14px",
    backgroundColor: isHovered ? "#151b2a" : "#0f1420",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    flexShrink: 0,
    textDecoration: "none",
    cursor: "pointer",
    isolation: "isolate",
    transition:
      "background-color 250ms ease, border-color 250ms ease, box-shadow 250ms ease",
  });

  const glowStyle = (isHovered) => ({
    position: "absolute",
    inset: "-6px",
    borderRadius: "20px",
    backgroundColor: "#22d3ee",
    filter: "blur(10px)",
    opacity: isHovered ? 0.35 : 0,
    transition: "opacity 250ms ease",
    pointerEvents: "none",
  });

  const gradientStyle = (isHovered) => ({
    position: "absolute",
    inset: 0,
    borderRadius: "14px",
    backgroundImage:
      "linear-gradient(135deg, #6C63FF 0%, #4F8CFF 55%, #35D7FF 100%)",
    opacity: isHovered ? 1 : 0,
    transition: "opacity 250ms ease",
    pointerEvents: "none",
  });

  const iconStyle = (isHovered) => ({
    position: "relative",
    zIndex: 1,
    fontSize: "22px",
    color: isHovered ? "#ffffff" : "#d1d5db",
    transition: "color 250ms ease",
  });

  return (
    <div style={wrapperStyle}>
      {[
        {
          icon: <FaLinkedinIn />,
          link: "https://www.linkedin.com/in/mahnoor-mateen-b06201380/",
        },
        {
          icon: <FaGithub />,
          link: "https://github.com/mahnoormateen",
        },
        {
          icon: <HiOutlineMail />,
          link: "mailto:mahnoormateen0@gmail.com",
        },
      ].map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          style={getButtonStyle(hoveredIndex === index)}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          onFocus={() => setHoveredIndex(index)}
          onBlur={() => setHoveredIndex(null)}
        >
          <div style={glowStyle(hoveredIndex === index)} />
          <div style={gradientStyle(hoveredIndex === index)} />
          <span style={iconStyle(hoveredIndex === index)}>
            {item.icon}
          </span>
        </a>
      ))}
    </div>
  );
}

export default Connections;
