import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
  symbolOnly?: boolean;
  gold?: boolean;
}

/**
 * VannieJay Threshold master mark.
 * The geometry is locked to the approved Brand System v1.0.
 */
const Logo: React.FC<LogoProps> = ({
  className = 'h-10',
  light = false,
  symbolOnly = false,
  gold = false,
}) => {
  const color = gold ? '#C8A24A' : light ? '#FFFFFF' : '#111111';

  return (
    <div className={`flex items-center ${className}`} aria-label="VannieJay">
      <svg
        viewBox={symbolOnly ? '0 0 240 280' : '0 0 420 280'}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
        role="img"
      >
        <g fill={color}>
          <path d="M20 250V70L105 10v72L65 110v140H20Z" />
          <path d="M220 250V70L135 10v72l40 28v140h45Z" />
          {symbolOnly ? null : (
            <>
              <path d="M0 250h65v6H0z" />
              <path d="M175 250h65v6h-65z" />
            </>
          )}
        </g>

        {!symbolOnly && (
          <text
            x="120"
            y="165"
            fill={color}
            fontFamily="Inter, Arial, sans-serif"
            fontSize="30"
            fontWeight="500"
            letterSpacing="2.5"
          >
            VANNIEJAY
          </text>
        )}
      </svg>
    </div>
  );
};

export default Logo;
