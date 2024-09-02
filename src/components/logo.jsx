import { useEffect, useState } from 'react';
import Image from 'next/image';

const AnimatedLogo = () => {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    // Set a timer to hide the logo and show the SVG after 2.5 seconds
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 2500);

    // Clean up the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex w-full pl-4">
      {showLogo ? (
        <Image
          src="/images/logo-3athlete.png"
          alt="Logo"
          width={150}
          height={50}
          className="logo-animation m-4" // Add class for animation
        />
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 250 50"
          width={250}
          height={50}
          className="svg-appear" // Add class for animation
        >
          <text
            x="0"
            y="50%"
            fontFamily="'Roboto', sans-serif"
            fontSize="24"
            fontWeight="bold"
            dominantBaseline="middle"
            alignmentBaseline="middle"
            fill="whitesmoke"
          >
            <tspan x="0" dy="0" letterSpacing="1" opacity={1} fontStyle="italic">
              MonClub
            </tspan>
            <tspan x="110" dy="0" fontWeight="normal" opacity={0.5}>
              Triathlon
            </tspan>
          </text>
        </svg>
      )}
    </div>
  );
};

export default AnimatedLogo;
