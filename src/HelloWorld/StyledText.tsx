import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

interface StyledTextProps {
  text: string;
}

export const StyledText: React.FC<StyledTextProps> = ({ text }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1]);

  const textStyle: React.CSSProperties = {
    fontSize: 50,
    color: '#dfe859',
    fontWeight: 'bold',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '10px',
    borderRadius: '10px',
    opacity,
    fontStyle: 'italic'
  };

  return (
    <AbsoluteFill style={{ justifyContent: 'flex-start', alignItems: 'flex-start', paddingTop: '15%', paddingLeft: '5%' }}>
      <div style={textStyle}>
        {text.split('\\n').map((line, index) => (
          <div key={index}>
            {line}
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
