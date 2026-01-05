import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

export function Portfolio() {
    return (
        <section id="work" className="py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
                        <p className="text-neutral-600 max-w-sm">Recent web and mobile applications we've shipped using Next.js and React Native.</p>
                    </div>
                    <Badge variant="outline" className="text-base py-2 px-6 rounded-full cursor-pointer hover:bg-neutral-50 transition-colors">
                        View All Projects
                    </Badge>
                </div>

                {/* Bento Grid - Mosaic Style */}
                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[650px]">

                    {/* Project 1 - Big Card (Next.js SaaS) */}
                    <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl bg-neutral-900 border border-neutral-200 min-h-[400px] md:min-h-0">
                        <img
                            src="/nextjs-laptop.png"
                            alt="SaaS Platform"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-8 md:p-12 flex flex-col justify-end">
                            <Badge className="w-fit mb-4 bg-blue-600 hover:bg-blue-700 text-white border-none py-1.5 px-4 rounded-full transition-all">Next.js SaaS</Badge>
                            <h3 className="text-2xl md:text-4xl font-bold text-white mb-3">Enterprise CRM</h3>
                            <p className="text-neutral-300 md:text-lg mb-4 max-w-md">A powerful customer management platform built with Next.js 14, Tailwind, and Postgres.</p>
                        </div>
                    </div>

                    {/* Project 2 - Wide Card (Android App) */}
                    <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden rounded-3xl bg-neutral-100 border border-neutral-200 min-h-[280px] md:min-h-0">
                        <img
                            src="/android-app.png"
                            alt="Fintech App"
                            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
                        <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                            <Badge className="bg-white/20 backdrop-blur-md text-white border-white/30 mb-2">Android APK</Badge>
                            <h3 className="text-2xl font-bold text-white">Fintech Dashboard</h3>
                            <p className="text-sm text-neutral-200 font-medium tracking-wide uppercase">Native Android Experience</p>
                        </div>
                    </div>

                    {/* Project 3 - Regular (E-Commerce) */}
                    <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-3xl bg-neutral-900 border border-neutral-200 min-h-[250px] md:min-h-0">
                        <img
                            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800"
                            alt="E-Commerce Store"
                            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-75 transition-all duration-500"
                        />
                        <div className="absolute bottom-0 left-0 p-6">
                            <h3 className="text-xl font-bold text-white">Shopify Headless</h3>
                            <p className="text-xs text-neutral-300 font-semibold tracking-wider uppercase">Next.js + Shopify</p>
                        </div>
                    </div>

                    {/* Project 4 - Regular (Social App) */}
                    <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-3xl bg-neutral-900 border border-neutral-200 min-h-[250px] md:min-h-0">
                        <img
                            src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800"
                            alt="Social App"
                            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-75 transition-all duration-500"
                        />
                        <div className="absolute bottom-0 left-0 p-6">
                            <h3 className="text-xl font-bold text-white">Social Connect</h3>
                            <p className="text-xs text-neutral-300 font-semibold tracking-wider uppercase">React Native App</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
