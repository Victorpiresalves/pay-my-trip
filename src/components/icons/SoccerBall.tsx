interface SoccerBallProps {
  size?: number;
  className?: string;
}

export default function SoccerBall({ size = 24, className = '' }: SoccerBallProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <polygon
        points="12,4 14.5,8 12,10 9.5,8"
        fill="currentColor"
        opacity="0.85"
      />
      <polygon
        points="17.5,7.5 19.5,11 17,13 14.5,11 15,8.5"
        fill="currentColor"
        opacity="0.6"
      />
      <polygon
        points="6.5,7.5 9,8.5 9.5,11 7,13 4.5,11"
        fill="currentColor"
        opacity="0.6"
      />
      <polygon
        points="17,13 19,16.5 16,18.5 13.5,16 14.5,13.5"
        fill="currentColor"
        opacity="0.85"
      />
      <polygon
        points="7,13 9.5,13.5 10.5,16 8,18.5 5,16.5"
        fill="currentColor"
        opacity="0.85"
      />
      <polygon
        points="12,10 14.5,11 14.5,13.5 12,15 9.5,13.5 9.5,11"
        fill="currentColor"
        opacity="0.4"
      />
      <polygon
        points="12,15 13.5,16 12,20 10.5,16"
        fill="currentColor"
        opacity="0.7"
      />
    </svg>
  );
}
