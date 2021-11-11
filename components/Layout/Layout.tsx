import React from "react";
import Footer from "./Footer";
import Head from "./Head";
import { Header } from "./Header";

interface LayoutProps {}

const navItems = [
  { href: "/loene", label: "Löhne" },
  { href: "/arbeitsbedingungen", label: "Arbeitsbedingungen" },
  { href: "/kinderrechte", label: "Kinderrechte" },
];

const footerNavItems = [
  ...navItems,
  { href: "/loene", label: "Was bedeutet nachhaltige Mode?" },
  { href: "/arbeitsbedingungen", label: "Den Wandel anführen" },
  { href: "/kinderrechte", label: "Aktuelles" },
];

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header navItems={navItems} />
      <Head />
      <main className="min-h-screen pt-60">{children}</main>
      <Footer navItems={footerNavItems} />
    </>
  );
};
