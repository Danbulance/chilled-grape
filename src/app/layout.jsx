import "./styles/globals.scss";

export const metadata = {
  title: "Chilled Grape",
  description: "Site listing and displaying Chilled Grape's products and prices",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
