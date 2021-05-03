import React from "react";
import icon from "../../assets/sprite.svg";

const Icon = ({ name, className = "", fill = "none", stroke = "currentColor", color = "#000", size = 24 }) => {
    const style = () => {
        return {
            color: color
        }
    }
    return (
        <svg
            className={className}
            fill={fill}
            stroke={stroke}
            width={size}
            height={size}
            style={{ style }}>
            <use xlinkHref={`${icon}#${name}`} />
        </svg>
    );
};
export default Icon