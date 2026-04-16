import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
};

export default function Badge({ children }: BadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full w-fit bg-(--white-color) dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-[0_1px_2px_rgba(0,0,0,0.04)] text-gray-700">
      {children}
    </div>
  );
}
