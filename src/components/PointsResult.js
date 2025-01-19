import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { getScoreComment } from '../utils/scoreComments';

const TombstoneShape = ({ children }) => (
  <Box sx={{ 
    py: 0,
    display: 'flex',
    justifyContent: 'center',
  }}>
    <Box sx={{
      position: 'relative',
      width: 'fit-content',
      marginTop: 0,
    }}>
      {/* Background Shape (Glow) */}
      <svg
        width="460"
        height="220"
        viewBox="0 0 460 220"
        style={{
          position: 'absolute',
          top: '-10px',
          left: '-10px',
          filter: `
            drop-shadow(0 0 15px rgba(255,255,255,0.15))
            drop-shadow(0 0 20px rgba(255,215,0,0.15))
          `,
          animation: 'glowPulse 3s ease-in-out infinite',
        }}
      >
        <path
          d="M230,10                    
              a60,60 0 1,0 0,120 
              a60,60 0 1,0 0,-120
              M60,100                   
              L60,180
              Q60,190 70,190                  
              L390,190
              Q400,190 400,180                 
              L400,100
              Q400,90 390,90                  
              L70,90
              Q60,90 60,100"
          fill="rgba(255,255,255,0.08)"
        />
      </svg>

      {/* Foreground Shape */}
      <svg
        width="440"
        height="200"
        viewBox="0 0 440 200"
        style={{
          position: 'relative',
          filter: `
            drop-shadow(0 4px 12px rgba(0,0,0,0.5))
            drop-shadow(0 0 10px rgba(255,215,0,0.1))
            drop-shadow(0 0 15px rgba(255,255,255,0.1))
          `,
          animation: 'glowPulse 3s ease-in-out infinite',
        }}
      >
        <path
          d="M220,0                    
              a60,60 0 1,0 0,120 
              a60,60 0 1,0 0,-120
              M50,90                   
              L50,170
              Q50,180 60,180                  
              L380,180
              Q390,180 390,170                 
              L390,90
              Q390,80 380,80                  
              L60,80
              Q50,80 50,90"
          fill="rgba(26, 20, 41, 0.95)"
        />
      </svg>

      {children}
    </Box>
  </Box>
);

export function PointsResult({ points, gender, calculationType }) {
  const [displayedPoints, setDisplayedPoints] = useState(points);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationRef = useRef(null);
  const previousPoints = useRef(points);

  useEffect(() => {
    if (points === null) {
      setDisplayedPoints(null);
      return;
    }

    if (points === previousPoints.current) return;

    setIsAnimating(true);
    const startValue = previousPoints.current || 0;
    const endValue = points;
    const duration = 1000;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.round(startValue + (endValue - startValue) * easeOutQuart);
      setDisplayedPoints(currentValue);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
        previousPoints.current = points;
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [points]);

  if (points === null || (points === 0 && !gender)) {
    return (
      <TombstoneShape>
        {/* Score Container with white 0 */}
        <Box
          sx={{
            position: 'absolute',
            top: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '120px',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: 'rgba(255,255,255,0.3)',  // Faded white
              fontFamily: 'monospace',
              fontSize: '2.5rem',
              display: 'inline-block',
            }}
          >
            0
          </Typography>
        </Box>

        {/* Initial Message - Moved down to rectangle area */}
        <Typography 
          variant="h6" 
          sx={{ 
            color: 'text.secondary',
            fontStyle: 'italic',
            position: 'absolute',
            top: '100px',  // Moved down from 50%
            left: '50%',
            transform: 'translateX(-50%)',
            width: '320px',
            textAlign: 'center',
            px: 2,
            opacity: 0.7,
          }}
        >
          Select calculation type and gender to begin
        </Typography>
      </TombstoneShape>
    );
  }

  if (points === 0 && calculationType && gender && !isAnimating) {
    return (
      <TombstoneShape>
        <Typography 
          variant="h6" 
          sx={{ 
            color: 'text.secondary',
            fontStyle: 'italic',
            position: 'absolute',
            top: '65%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '320px',
            textAlign: 'center',
            px: 2,
          }}
        >
          {calculationType === 'owe_partner' 
            ? "What are you planning? 🤔"
            : "What did they do? 🤨"}
        </Typography>
      </TombstoneShape>
    );
  }

  const getColor = (value) => {
    const absValue = Math.abs(value);
    
    // Define colors from good (green) to bad (red)
    const colors = {
      0: '#44ff44',    // Bright green - Perfect
      10: '#88ff44',   // Light green - Very Good
      20: '#bbff44',   // Yellow-green - Good
      30: '#ffff44',   // Yellow - Caution
      40: '#ffdd44',   // Light amber - Watch out
      50: '#ffbb44',   // Amber - Getting serious
      60: '#ff9944',   // Orange - Concerning
      70: '#ff7744',   // Dark orange - Trouble
      85: '#ff5544',   // Light red - Big trouble
      100: '#ff4444'   // Red - Maximum
    };

    // Find the appropriate color based on the absolute value
    let color;
    if (absValue === 0) color = colors[0];
    else if (absValue < 10) color = colors[10];
    else if (absValue < 20) color = colors[20];
    else if (absValue < 30) color = colors[30];
    else if (absValue < 40) color = colors[40];
    else if (absValue < 50) color = colors[50];
    else if (absValue < 60) color = colors[60];
    else if (absValue < 70) color = colors[70];
    else if (absValue < 85) color = colors[85];
    else color = colors[100];

    // For "owe_partner": high positive is bad (red), low is good (green)
    // For "owe_me": high positive is good (green), low is bad (red)
    if (calculationType === 'owe_me') {
      // Reverse the color scale
      const reverseColors = {
        [colors[0]]: colors[100],
        [colors[10]]: colors[85],
        [colors[20]]: colors[70],
        [colors[30]]: colors[60],
        [colors[40]]: colors[50],
        [colors[50]]: colors[40],
        [colors[60]]: colors[30],
        [colors[70]]: colors[20],
        [colors[85]]: colors[10],
        [colors[100]]: colors[0],
      };
      return reverseColors[color];
    }

    return color;
  };

  const getComment = () => {
    const absPoints = Math.abs(points);
    let severity;
    if (absPoints === 0) severity = 'free';
    else if (absPoints < 10) severity = 'minimal';
    else if (absPoints < 20) severity = 'veryLow';
    else if (absPoints < 30) severity = 'low';
    else if (absPoints < 40) severity = 'mediumLow';
    else if (absPoints < 50) severity = 'medium';
    else if (absPoints < 60) severity = 'mediumHigh';
    else if (absPoints < 70) severity = 'high';
    else if (absPoints < 85) severity = 'veryHigh';
    else severity = 'extreme';

    const values = {
      gender,
      calculationType,
      activity: true
    };

    return getScoreComment(values, points);
  };

  return (
    <TombstoneShape>
      {/* Score Container */}
      <Box
        sx={{
          position: 'absolute',
          top: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '120px',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: getColor(points),
            transition: 'color 0.3s ease',
            fontFamily: 'monospace',
            fontSize: '2.5rem',
            textShadow: '0 0 10px rgba(255,255,255,0.3)',
            animation: isAnimating ? 'pulse 0.5s ease-in-out infinite' : 'none',
            '@keyframes pulse': {
              '0%': { transform: 'scale(1)' },
              '50%': { transform: 'scale(1.05)' },
              '100%': { transform: 'scale(1)' },
            },
            display: 'inline-block',
          }}
        >
          {displayedPoints}
        </Typography>
      </Box>

      {/* Comment */}
      {points !== 0 && (
        <Typography 
          variant="h6" 
          sx={{ 
            color: 'text.secondary',
            fontStyle: 'italic',
            position: 'absolute',
            top: '120px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '360px',
            textAlign: 'center',
            px: 2,
            pb: 4,
            fontSize: '1.1rem',
            lineHeight: 1.4,
          }}
        >
          {getComment()}
        </Typography>
      )}
    </TombstoneShape>
  );
} 