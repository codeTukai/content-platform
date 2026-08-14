interface TwitterIconProps {
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export const TwitterIcon = ({
  size = 40,
  strokeWidth = 4,
  className ,
}: TwitterIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 210 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M205 21
        C198 25 190 28 181 30
        C173 21 162 16 150 16
        C127 16 109 34 109 57
        C109 61 110 65 110 69
        C76 67 46 50 26 25
        C22 32 20 40 20 48
        C20 62 27 75 38 82
        C31 82 25 80 19 77
        C19 96 33 112 51 116
        C47 117 43 118 39 118
        C36 118 33 118 30 117
        C35 134 51 146 70 147
        C55 159 37 165 18 165
        C14 165 10 165 6 164
        C25 176 47 183 71 183
        C150 183 194 118 194 62
        C194 60 194 58 194 56
        C203 49 211 40 216 30
        C208 34 200 36 191 38
        C199 33 204 27 205 21Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};