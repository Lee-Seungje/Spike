import "styles/global.css";

export const metadata = {
  applicationName: "Spike",
  keywords: ["Spike", "명함", "명함 제작", "name", "name tag"],
  creator: "Lee Seungje",
  publisher: "Lee Seungje",
  description: "토스를 이은 스파이크.",
  title: {
    template: "Spike",
    default: "Spike",
  },
  openGraph: {
    title: "Spike",
    description: "토스를 이은 스파이크.",
    url: "https://toss-next-spike.vercel.app/",
    siteName: "Spike",
    images: [
      {
        url: "/favicon.png",
        width: 400,
        height: 400,
      },
    ],
    locale: "ko",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <div className="w-screen h-screen flex justify-center bg-neutral-900 overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
