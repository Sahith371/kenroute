import { type ReactNode } from "react";

interface MacFrameProps {
  children: ReactNode;
  className?: string;
}

export function MacFrame({ children, className = "" }: MacFrameProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="rounded-2xl bg-navy p-3 shadow-mac ring-1 ring-black/5">
        <div className="flex items-center gap-1.5 px-2 pb-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="overflow-hidden rounded-xl bg-white">{children}</div>
      </div>
      {/* base */}
      <div className="mx-auto h-2 w-[55%] rounded-b-2xl bg-gradient-to-b from-[#0a2348] to-[#061B3A]" />
      <div className="mx-auto h-1 w-[35%] rounded-b-xl bg-[#061B3A]/40 blur-sm" />
    </div>
  );
}

export function PhoneFrame({ children, className = "" }: MacFrameProps) {
  return (
    <div
      className={`relative mx-auto w-[280px] rounded-[2.4rem] bg-navy p-2 shadow-mac ring-1 ring-black/5 ${className}`}
    >
      <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
      <div className="overflow-hidden rounded-[2rem] bg-white">{children}</div>
    </div>
  );
}
