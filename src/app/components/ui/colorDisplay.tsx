// src/app/components/ui/ColorDisplay.tsx
import React from 'react';
import theme from '../../styles/theme';

const colors = theme.colors;

const ColorDisplay: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Color Palette</h2>
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(colors).map(([key, color]) => (
          <div
            key={key}
            className="flex items-center p-4 border border-gray-700 rounded"
            style={{ backgroundColor: color }}
          >
            <div className="w-24 h-24" style={{ backgroundColor: color }} />
            <div className="ml-4 text-white">
              <p className="font-semibold">{key}</p>
              <p>{color}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorDisplay;
