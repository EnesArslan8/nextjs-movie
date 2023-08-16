"use client"
import Header from "@/components/Header";
import "./globals.css";
import Provider  from './Provider'
import Tabs from "@/components/Tabs";


export const metadata = {
  title: "Movie APP",
  description: "Movie application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Provider>
          <Header />
          <Tabs/>
          {children}
        </Provider>
      </body>
    </html>
  );
}
