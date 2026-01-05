import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function Testimonials() {
    const testimonials = [
        {
            quote: "Tushar transformed our digital presence. The attention to detail is unmatched.",
            author: "Sarah J.",
            role: "CEO, TechStart",
            bg: "bg-white"
        },
        {
            quote: "Fast, professional, and incredibly creative. Highly recommended!",
            author: "Mark R.",
            role: "Founder, DesignCo",
            bg: "bg-neutral-50"
        },
        {
            quote: "The best agency we've worked with. They truly understand modern design.",
            author: "Emily D.",
            role: "Marketing Director",
            bg: "bg-white"
        }
    ]

    return (
        <section className="py-20 border-y border-neutral-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Client Stories</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <Card key={i} className={`${t.bg} border-none shadow-sm`}>
                            <CardContent className="pt-6">
                                <Quote className="h-8 w-8 text-blue-100 mb-4" />
                                <p className="text-lg text-neutral-700 italic mb-6">"{t.quote}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-full bg-neutral-200 flex items-center justify-center text-sm font-bold text-neutral-600">
                                        {t.author.split(' ').map((n: string) => n[0]).join('')}
                                    </div>
                                    <div>
                                        <div className="font-bold text-neutral-900">{t.author}</div>
                                        <div className="text-sm text-neutral-500">{t.role}</div>
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
