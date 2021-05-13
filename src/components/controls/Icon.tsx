import React from "react";
import icon from "../../assets/sprite.svg";

type Props = {
    name: string
    className?: string
    fill?: string
    stroke?: string
    color?: string
    size?: number
}

const Icon: React.FC<Props> = ({ name, className = "", fill = "none", stroke = "currentColor", color = "#000", size = 24, ...props }) => {
    return (
        <svg
            className={className}
            fill={fill}
            stroke={stroke}
            width={size}
            height={size}
            style={{ color: color }}
            {...props}
        >
            <use xlinkHref={`${icon}#${name}`} />
        </svg>
    );
};


export default Icon