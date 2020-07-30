import React from "react";

type Props = {
  max: number;
  current: number;
  color: string;
};

function ProgressBar({ max, current, color }: Props) {
  return (
    <div className="w-full h-4 bg-gray-400 shadow">
      <div
        className="h-full"
        style={{ width: (current / max) * 100 + "%", backgroundColor: color }}
      ></div>
    </div>
  );
}

export default ProgressBar;
