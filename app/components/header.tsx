"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { User, Menu, X, LogIn } from "lucide-react";
import { account } from "../appwrite/config";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const user = await account.get();
        setUserName(user.name);
      } catch (error) {
        return null;
      }
    };
    getCurrentUser();
  }, []);
  const navItems = [
    { name: "Pricing", href: "/pricing" },
    { name: "Docs", href: "/docs" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          {/* Logo */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="text-xl font-bold text-primary">
              Sinfonie
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Username */}
          {/*<div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link
              href="/dashboard  "
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              <User className="inline-block h-5 w-5 mr-2" />
              {userName}
            </Link>
          </div>*/}

          {userName ? (
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Link
                href="/dashboard  "
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              >
                <User className="inline-block h-5 w-5 mr-2" />
                {userName}
              </Link>
            </div>
          ) : (
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Link
                href="/login  "
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              >
                <LogIn className="inline-block h-5 w-5 mr-2" />
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
