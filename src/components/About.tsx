export function About() {
    return (
        <section id="about" className="py-20 bg-neutral-50/50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">About Tushar Agency</h2>
                    <p className="text-xl text-neutral-600 leading-relaxed mb-12">
                        We are a team of designers, developers, and strategists obsessed with quality.
                        We believe that good design is obvious, but great design is transparent.
                        Our mission is to simplify the complex and create meaning in a chaotic digital world.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="p-4">
                            <div className="text-4xl font-bold text-blue-600 mb-2">3+</div>
                            <div className="text-sm text-neutral-500 font-medium uppercase tracking-wider">Years Experience</div>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                            <div className="text-sm text-neutral-500 font-medium uppercase tracking-wider">Projects Shipped</div>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
                            <div className="text-sm text-neutral-500 font-medium uppercase tracking-wider">Happy Clients</div>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                            <div className="text-sm text-neutral-500 font-medium uppercase tracking-wider">Support</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
