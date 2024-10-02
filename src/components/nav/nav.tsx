"use client";
import { useState, useEffect } from "react";
import Link from "@/modules/Link";
import type { NavbarProp } from "@/types";
import { usePathname } from "next/navigation";
import styles from "./nav.module.scss";

/**
 * Copyright © 2024 Kars (github.com/kars1996)
 * Not to be shared, replicated or used without prior consent.
 * Contact Kars for any enquiries
 */

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const NavItems: NavbarProp[] = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
    ];
    const path = usePathname();

    // ? Disables navbar if on 404 page
    if (path.startsWith("/404")) return null;

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`${styles.nav} ${scrolled ? styles.pillNav : ""} fixed top-0 z-50 w-full transition-all duration-300`}
        >
            <div
                className={`${
                    scrolled ? styles.pillContainer : "container mx-auto w-full"
                } py-1`}
            >
                <div className="flex items-center justify-between py-2">
                    <Link href="/" className="w-8">
                        <img
                            className="w-full"
                            draggable={false}
                            src="/favicon.ico"
                            alt="Logo"
                        />
                    </Link>

                    <div className="ml-16 flex items-center space-x-4">
                        {NavItems.map((item, i) => (
                            <Link
                                href={item.href}
                                key={i}
                                className={`text-white transition-all duration-300 hover:text-neutral-300`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                    <div className="flex flex-row gap-2">
                        <button className="rounded-lg text-white hover:bg-neutral-500">
                            Get Started
                        </button>

                        <button className="rounded-lg border-[#2b2d31] px-2 text-white hover:bg-neutral-500">
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
