// src/HelloWorld/MyText.tsx
import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

interface MyTextProps {
  text: string;
}

export const MyText: React.FC<MyTextProps> = ({ text }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1]);

  return (
    <AbsoluteFill style={{ justifyContent: 'flex-end', alignItems: 'center', paddingBottom: '20%' }}>
      <div style={{ fontSize: 60, color: 'white', textAlign: 'center', fontWeight: 'bold', fontFamily: 'Arial, sans-serif', padding: '10px', opacity }}>
        {text.split('\n').map((line, index) => (
          <p key={index} style={{ margin: 0 }}>{line}</p>
        ))}
      </div>
    </AbsoluteFill>
  );
};
