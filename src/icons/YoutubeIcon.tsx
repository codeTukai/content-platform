interface YouTubeIconProps {
  size?: number;
  className?: string;
}

export const YouTubeIcon = ({
  size = 40,
  className,
}: YouTubeIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M23.498 6.186a2.99 2.99 0 0 0-2.106-2.116C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.392.57A2.99 2.99 0 0 0 .502 6.186C0 8.08 0 12 0 12s0 3.92.502 5.814a2.99 2.99 0 0 0 2.106 2.116C4.495 20.5 12 20.5 12 20.5s7.505 0 9.392-.57a2.99 2.99 0 0 0 2.106-2.116C24 15.92 24 12 24 12s0-3.92-.502-5.814Z"
        fill="currentColor"
      />

      <path
        d="M9.545 15.568 15.818 12 9.545 8.432v7.136Z"
        fill="white"
      />
    </svg>
  );
};