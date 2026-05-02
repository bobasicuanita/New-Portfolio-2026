import { useState } from "react";

const download = () => {
  const link = document.createElement("a");
  link.href = "/resume.pdf";
  link.download = "resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

type Ripple = {
  x: number;
  y: number;
  id: string;
};

export default function useHandleDownload() {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const createRippleAndDownload = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    download();

    const rect = e.currentTarget.getBoundingClientRect();

    const size = 200;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const newRipple = {
      x,
      y,
      id: crypto.randomUUID(),
    };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) =>
        prev.filter((r) => r.id !== newRipple.id)
      );
    }, 600);
  };

  return {
    ripples,
    createRippleAndDownload,
  };
}