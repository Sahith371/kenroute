import logo from "../../assets/kenroute-logo.png";

export function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <img
      src={logo}
      alt="KenRoute"
      className={className}
      width={1536}
      height={1024}
      decoding="async"
    />
  );
}
