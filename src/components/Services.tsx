import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Laptop, Database, Layers, ArrowUpRight } from "lucide-react"

export function Services() {
    return (
        <section id="services" className="py-20 bg-neutral-50">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Tech Stack</h2>
                    <p className="text-neutral-600 max-w-2xl mx-auto">
                        We specialize in modern, high-performance technologies for web and mobile.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

                    {/* Card 1: Large (Next.js Web) */}
                    <Card className="md:col-span-2 md:row-span-2 min-h-[400px] h-auto md:h-[450px] flex flex-col justify-between overflow-hidden group hover:shadow-lg transition-all duration-300">
                        <CardHeader className="pb-2">
                            <div className="bg-black w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white shadow-sm">
                                <Laptop className="h-6 w-6" />
                            </div>
                            <CardTitle className="text-2xl md:text-3xl">Next.js Web Development</CardTitle>
                            <CardDescription className="text-base text-neutral-500 mt-2">
                                Server-side rendered (SSR) React apps that are lightning fast, SEO-friendly, and scalable. Built with the latest App Router.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="relative p-0 h-[200px] md:h-auto md:flex-1 bg-neutral-100 mt-4 group-hover:bg-neutral-200 transition-colors">
                            <img
                                src="/coding-setup.png"
                                alt="Next.js Development"
                                className="absolute inset-0 w-full h-full object-cover object-top opacity-90 transition-transform duration-500 group-hover:scale-105"
                            />
                        </CardContent>
                    </Card>

                    {/* Card 2: Medium (Android APK) */}
                    <Card className="md:col-span-1 h-auto md:h-[215px] group hover:shadow-md transition-all duration-300">
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center mb-2 text-green-600">
                                    <Smartphone className="h-5 w-5" />
                                </div>
                                <ArrowUpRight className="h-4 w-4 text-neutral-400 group-hover:text-black transition-colors" />
                            </div>
                            <CardTitle className="text-xl">Android APKs</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-neutral-500">Native Android apps and cross-platform solutions (React Native).</p>
                        </CardContent>
                    </Card>

                    {/* Card 3: Medium (Backend/API) */}
                    <Card className="md:col-span-1 h-auto md:h-[215px] group hover:shadow-md transition-all duration-300">
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center mb-2 text-purple-600">
                                    <Database className="h-5 w-5" />
                                </div>
                                <ArrowUpRight className="h-4 w-4 text-neutral-400 group-hover:text-black transition-colors" />
                            </div>
                            <CardTitle className="text-xl">Backend & APIs</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-neutral-500">Secure REST & GraphQL APIs to power your applications.</p>
                        </CardContent>
                    </Card>

                    {/* Card 4: Wide (Design System) */}
                    <Card className="md:col-span-3 h-auto md:h-[250px] flex items-center overflow-hidden bg-white border-neutral-200 group hover:shadow-xl transition-all duration-300">
                        <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
                            <div className="p-8 flex flex-col justify-center">
                                <Badge variant="secondary" className="w-fit mb-4">Mobile First</Badge>
                                <CardTitle className="text-2xl mb-2">Modern UI/UX Design</CardTitle>
                                <p className="text-neutral-500">We design interfaces that feel native and intuitive on every device.</p>
                            </div>
                            <div className="bg-neutral-50 h-[300px] md:h-full relative overflow-hidden">
                                <img
                                    src="/mobile-dev-3d.png"
                                    alt="Mobile App Design"
                                    className="absolute inset-0 w-full h-full object-cover object-center transform md:scale-110 md:group-hover:scale-100 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </Card>

                </div>
            </div>
        </section>
    )
}
