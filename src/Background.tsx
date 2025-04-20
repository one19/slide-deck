import styled from '@emotion/styled';

type BackgroundCirclesProps = {
  currentSlide: number;
  totalSlides: number;
};

// Helper function to convert hex color to rgba
const hexToRgba = (hex: string, alpha: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// The styled component that creates the background with radial gradients
const GradientBackground = styled.div<BackgroundCirclesProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ currentSlide, totalSlides }) => {
    // Calculate the main position based on slide progress (20% to 80% horizontally)
    const progress = totalSlides > 1 ? currentSlide / (totalSlides - 1) : 0;
    const xPosition = 20 + progress * 60;

    // Define the same muted dark colors as the original
    const baseColors = [
      '#121420', // Dark blue-black
      '#1B2432', // Dark navy
      '#242535', // Dark slate
      '#2D2B36', // Dark purple-gray
      '#1E1E2C', // Dark indigo
      '#232234', // Dark violet
    ];

    // Create the concentric circles as radial gradients
    const numCircles = 6;
    const maxSize = 240; // 240% covers the screen diagonally

    // Generate each circle as a radial gradient
    return Array.from({ length: numCircles })
      .map((_, i) => {
        const size = maxSize * (1 - i * 0.15);
        const colorIndex = (i + currentSlide) % baseColors.length;
        const color = baseColors[colorIndex];
        const opacity = 0.8 - i * 0.1;

        // Add subtle position variations for each circle
        const circleX = xPosition + Math.sin(i * 0.8 + currentSlide * 0.3) * 3;
        const circleY = 50 + Math.cos(i * 0.8 + currentSlide * 0.3) * 3;

        return `radial-gradient(
          circle at ${circleX}% ${circleY}%, 
          ${hexToRgba(color, opacity)} 0%, 
          ${hexToRgba(color, opacity)} ${size / 2}%, 
          transparent ${size / 2}%
        )`;
      })
      .reverse() // Reverse to match z-order (first circle is at the bottom)
      .join(', ');
  }};
  transition: background 0.8s ease-out;
`;

const BackgroundCircles = ({
  currentSlide,
  totalSlides,
}: BackgroundCirclesProps) => {
  return (
    <GradientBackground currentSlide={currentSlide} totalSlides={totalSlides} />
  );
};

export default BackgroundCircles;
