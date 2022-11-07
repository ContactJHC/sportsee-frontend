import React from 'react'
import { Rectangle } from "recharts";

export default function CustomCursor(prop) {
    const { width, points } = prop;
    const X = points[0].x;
    const Y = points[0].y;
    const sum = width - X;
    return (
        <Rectangle
        width={sum}
        height={350}
        x={X}
        y={Y}
        style={{ background: "red", opacity: 0.1 }}
        />
    );
};
