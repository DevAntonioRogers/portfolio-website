import "./globals.css";
import Nav from "./components/Nav";

export const metadata = {
  title: "Antonio Rogers Portfolio",
  description: "Antonio Rogers portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="wrapper">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
