import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import { ThemeProvider } from "next-themes";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Konstantinos Karasavvas",
  description:
    "Frontend Software Engineer portfolio by Konstantinos Karasavvas",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`h-full ${outfit.variable}`}
    >
      <body className="min-h-dvh pt-[80px] relative overflow-x-hidden font-outfit">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-white/80 dark:bg-black" />
            <div className="absolute inset-0 dark:bg-[url(/snow1.svg)] bg-cover bg-center opacity-5" />
            <div className="absolute inset-0 bg-white/80 dark:bg-black/80" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_2px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_2px,transparent_1px)] bg-size-[100px_100px]" />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
