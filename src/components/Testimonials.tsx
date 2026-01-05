import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function Testimonials() {
    const testimonials = [
        {
            quote: "Tushar transformed our digital presence. The attention to detail is unmatched.",
            author: "Sarah J.",
            role: "CEO, TechStart",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
            bg: "bg-white"
        },
        {
            quote: "Fast, professional, and incredibly creative. They delivered our APK ahead of schedule.",
            author: "Mark R.",
            role: "Founder, DesignCo",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
            bg: "bg-neutral-50"
        },
        {
            quote: "The best agency for modern Next.js development. Our site is now 3x faster.",
            author: "Emily D.",
            role: "Marketing Director",
            avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150",
            bg: "bg-white"
        }
    ]

    return (
        <section id="testimonials" className="py-20 border-y border-neutral-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Client Stories</h2>
                    <p className="text-neutral-500 max-w-xl mx-auto">Hear from the brands we've helped scale with high-performance digital products.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((t, i) => (
                        <Card key={i} className={`${t.bg} border border-neutral-200 shadow-sm hover:shadow-md transition-shadow rounded-2xl`}>
                            <CardContent className="pt-8">
                                <Quote className="h-8 w-8 text-blue-500/20 mb-6" />
                                <p className="text-lg text-neutral-700 italic mb-8 leading-relaxed">"{t.quote}"</p>
                                <div className="flex items-center gap-4 border-t border-neutral-100 pt-6">
                                    <img
                                        src={t.avatar}
                                        alt={t.author}
                                        className="h-12 w-12 rounded-full object-cover border-2 border-white shadow-sm"
                                    />
                                    <div>
                                        <div className="font-bold text-neutral-900">{t.author}</div>
                                        <div className="text-sm text-neutral-500 font-medium">{t.role}</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
