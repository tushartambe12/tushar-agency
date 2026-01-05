import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

export function Portfolio() {
    return (
        <section id="work" className="py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
                        <p className="text-neutral-600">Recent web and mobile applications we've shipped.</p>
                    </div>
                    <Badge variant="outline" className="text-base py-2 px-4">View All Projects</Badge>
                </div>

                {/* Bento Grid - Mosaic Style */}
                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px]">

                    {/* Project 1 - Tall (Left) - Web Project */}
                    <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl bg-neutral-900 border border-neutral-200">
                        <img
                            src="/nextjs-laptop.png"
                            alt="SaaS Platform"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
                            <Badge className="w-fit mb-2 bg-blue-600 hover:bg-blue-700 text-white border-none">Next.js SaaS</Badge>
                            <h3 className="text-2xl font-bold text-white mb-2">Enterprise CRM</h3>
                            <p className="text-neutral-300 mb-4">A powerful customer management platform built with Next.js 14 and Postgres.</p>
                        </div>
                    </div>

                    {/* Project 2 - Wide (Top Right) - App Project */}
                    <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden rounded-xl bg-neutral-100 border border-neutral-200">
                        <img
                            src="/android-app.png"
                            alt="Fintech App"
                            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                            <h3 className="text-xl font-bold text-white">Fintech Dashboard</h3>
                            <p className="text-sm text-neutral-200">Native Android APK</p>
                        </div>
                    </div>

                    {/* Project 3 - Regular (Bottom Right 1) - Reusing Laptop Image for E-Commerce */}
                    <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-xl bg-neutral-900 border border-neutral-200">
                        <img
                            src="/nextjs-laptop.png"
                            alt="E-Commerce Store"
                            className="absolute inset-0 w-full h-full object-cover object-left opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                        />
                        <div className="absolute bottom-0 left-0 p-6">
                            <h3 className="text-lg font-bold text-white">Shopify Headless</h3>
                            <p className="text-xs text-neutral-300">Next.js + Shopify</p>
                        </div>
                    </div>

                    {/* Project 4 - Regular (Bottom Right 2) - Reusing Phone Image for Social App */}
                    <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-xl bg-neutral-900 border border-neutral-200">
                        <img
                            src="/android-app.png"
                            alt="Social App"
                            className="absolute inset-0 w-full h-full object-cover object-top opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                        />
                        <div className="absolute bottom-0 left-0 p-6">
                            <h3 className="text-lg font-bold text-white">Social Connect</h3>
                            <p className="text-xs text-neutral-300">React Native</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
