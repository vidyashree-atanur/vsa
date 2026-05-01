// Mock API (you can replace with real backend later)

export const fetchPortfolioData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "Vidyashree",
        role: "UI Developer",
        skills: ["React", "Tailwind", "JavaScript"],
      });
    }, 500);
  });
};