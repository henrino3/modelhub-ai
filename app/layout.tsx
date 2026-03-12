import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ModelHub AI",
  description:
    "Compare the best LLMs in one workspace. Chat with GLM, MiniMax, OpenAI, and Anthropic from a single fast interface.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#070b14] text-slate-100 antialiased">{children}</body>
    </html>
  );
}
