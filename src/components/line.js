"use client";
export default function Line() {
  const skills = [
    "Next.js",
    "React.js",
    "Nest.js",
    "Tailwind CSS",
    "Flutter",
    "Dart",
    "Supabase",
    "PostgreSQL",
  ];

  const outerStyle = {
    overflow: "hidden",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    paddingTop: "24px",
    paddingBottom: "24px",
    marginTop: "24px",
  };

  const marqueeStyle = {
    display: "flex",
    alignItems: "center",
    width: "max-content",
    willChange: "transform",
  };

  const itemStyle = {
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap",
    flexShrink: 0,
  };

  const skillStyle = {
    marginLeft: "24px",
    marginRight: "24px",
    fontSize: "16px",
    fontWeight: 600,
    color: "#d1d5db",
  };

  const dotStyle = {
    width: "8px",
    height: "8px",
    borderRadius: "9999px",
    backgroundColor: "#8b5cf6",
    flexShrink: 0,
  };

  return (
    <div style={outerStyle}>
      <div style={marqueeStyle} className="marquee">
        {[...skills, ...skills].map((skill, index) => (
          <div key={index} style={itemStyle}>
            <span style={skillStyle}>{skill}</span>
            <span style={dotStyle} />
          </div>
        ))}
      </div>
    </div>
  );
}