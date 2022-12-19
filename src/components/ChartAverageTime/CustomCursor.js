import React from 'react'
import { Rectangle } from "recharts";
import PropTypes from 'prop-types'

/**
 * Returns a customized-cursor from a prop array
 * @param {object} prop 
 * @param {number} width
 * @param {array} points
 * @returns {import('react').ReactElement}
 */

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

CustomCursor.propTypes = {
    prop: PropTypes.shape({
      width: PropTypes.number.isRequired,
      points: PropTypes.arrayOf(
        PropTypes.shape({
          x: PropTypes.number.isRequired,
          y: PropTypes.number.isRequired,
        }).isRequired,
      ).isRequired,
    }),
  };