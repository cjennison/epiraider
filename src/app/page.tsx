import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="page-content">
        {/* Hero Section */}
        <section className="hero py-20 lg:py-32">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="animate-fade-in-up">
                <h1 className="heading-hero mb-6">
                  Practice FFXIV Fights
                  <br />
                  <span className="text-shimmer">with Penguins 🐧</span>
                </h1>
                <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                  A simple training tool to practice raid mechanics. Control
                  penguins, learn patterns, get better at fights.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/game" className="btn btn-primary btn-lg">
                    Start Practicing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
