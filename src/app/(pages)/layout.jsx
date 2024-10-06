import "@/css/globals.css"

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
