"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)

    const navLinks = [
        { href: "#services", label: "Services" },
        { href: "#work", label: "Work" },
        { href: "#about", label: "About" },
        { href: "#contact", label: "Contact" },
    ]

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-70 transition-opacity">
                    Tushar.
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                        </Link>
                    ))}
                    <Link href="#contact">
                        <Button size="sm" className="rounded-full px-6 shadow-sm hover:shadow-md transition-all">
                            Let's Talk
                        </Button>
                    </Link>
                </div>

                {/* Mobile Navigation */}
                <div className="md:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-9 w-9 hover:bg-neutral-100 rounded-full">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="border-l-0 w-full sm:max-w-none bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center">
                            <SheetHeader className="absolute top-4 left-4">
                                <SheetTitle className="text-left font-extrabold text-2xl tracking-tighter">Tushar.</SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col gap-8 items-center w-full">
                                <AnimatePresence>
                                    {isOpen && navLinks.map((link, i) => (
                                        <motion.div
                                            key={link.href}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                delay: i * 0.1,
                                                duration: 0.4,
                                                ease: [0.22, 1, 0.36, 1]
                                            }}
                                            className="w-full text-center"
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsOpen(false)}
                                                className="text-4xl font-extrabold tracking-tighter hover:text-blue-600 transition-colors block py-2"
                                            >
                                                {link.label}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="pt-12 w-full max-w-xs px-4"
                                >
                                    <Link href="#contact" onClick={() => setIsOpen(false)}>
                                        <Button className="w-full rounded-full py-7 text-xl font-bold shadow-2xl bg-blue-600 hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all" size="lg">
                                            Let's Talk
                                        </Button>
                                    </Link>
                                </motion.div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    )
}
