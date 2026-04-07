interface LogoWithBackingProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function LogoWithBacking({
  size = "md",
  className = "",
}: LogoWithBackingProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10 lg:h-12 lg:w-12",
    lg: "h-12 w-12 lg:h-14 lg:w-14",
  };

  const containerSizeClasses = {
    sm: "p-1.5",
    md: "p-2",
    lg: "p-2.5",
  };

  return (
    <div className={`logo-backing ${containerSizeClasses[size]} ${className}`}>
      <img
        src="/assets/generated/magical-service-logo-uploaded-v3.dim_512x512.png"
        alt="Magical Service Professional Cleaning"
        className={`${sizeClasses[size]} object-contain`}
      />
    </div>
  );
}
