"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import type { NavbarProp } from "@/types";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import styles from "./nav.module.scss";

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const navRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const NavItems: NavbarProp[] = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
    ];
    const path = usePathname();

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

    useEffect(() => {
        if (navRef.current && contentRef.current) {
            gsap.to(navRef.current, {
                backgroundColor: scrolled ? "#1c1c1c" : "transparent",
                borderRadius: scrolled ? "999px" : "0",
                width: scrolled ? "48rem" : "100%",
                duration: 0.3,
                ease: "power2.inOut",
            });

            gsap.to(contentRef.current, {
                padding: scrolled ? "0.5rem 1rem" : "0.5rem 0",
                duration: 0.3,
                ease: "power2.inOut",
            });
        }
    }, [scrolled]);

    return (
        <nav
            ref={navRef}
            className={`${styles.nav} fixed top-0 z-50`}
        >
            <div ref={contentRef} className="mx-auto w-full">
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
