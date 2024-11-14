import Head from "next/head";
import "./styles/globals.scss";

export const metadata = {
  title: "Chilled Grape",
  description: "Site listing and displaying Chilled Grape's products and prices",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
