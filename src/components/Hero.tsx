import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
    return (
        <section className="pt-32 pb-20 md:pt-40 md:pb-28">
            <div className="container mx-auto px-4 text-center">

                {/* Badge/Tag */}
                <div className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-sm text-neutral-600 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
                    Specialized in Next.js & Android Development
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 mb-6 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
                    Building high-performance <span className="text-black">Next.js Web Apps</span> & <span className="text-blue-600">Android APKs</span>
                </h1>

                {/* Subheading */}
                <p className="text-lg md:text-xl text-neutral-600 mb-10 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                    We transform ideas into blazing fast web applications and native Android experiences.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
                    <Link href="#contact">
                        <Button size="lg" className="rounded-full h-12 px-8 text-base">
                            Get Your APK
                        </Button>
                    </Link>
                    <Link href="#work">
                        <Button variant="outline" size="lg" className="rounded-full h-12 px-8 text-base group">
                            View Web Projects
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
