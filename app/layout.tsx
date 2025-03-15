import { ReactNode } from "react";
import "./globals.css"
import Header from "./components/header"
import Footer from "./components/footer"

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({children}: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
} 

export default RootLayout