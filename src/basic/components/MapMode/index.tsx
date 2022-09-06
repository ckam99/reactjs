import * as React from "react";
import "./index.css";
type Prop = {
  onClick: (s: AppMode) => void;
  defaultMode: AppMode;
};

export type AppMode = "streets" | "dark";

const Mode: React.FC<Prop> = ({ onClick, defaultMode }) => {
  const [mode, setMode] = React.useState<AppMode>(defaultMode);

  const handleClick = (m: AppMode) => {
    onClick(m);
    setMode(m);
  };

  const classStyle = React.useMemo(() => (mode == "dark" ? `dark` : ``), []);

  return (
    <div className="mapmode">
      <button
        onClick={() => handleClick("dark")}
        className={mode == "dark" ? "active" : ""}
      >
        Dark
      </button>
      <button
        onClick={() => handleClick("streets")}
        className={mode == "streets" ? "active" : ""}
      >
        Light
      </button>
    </div>
  );
};

export default Mode;
