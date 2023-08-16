"use client"
import Header from "@/components/Header";
import "./globals.css";
import Provider  from './Provider'


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
          {children}
        </Provider>
      </body>
    </html>
  );
}
