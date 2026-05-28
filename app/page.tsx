export default function Page() {
  const faqs = [
    {
      q: "Which platforms are supported?",
      a: "Instagram, TikTok, Twitter/X, and LinkedIn. Connect all four with OAuth in seconds."
    },
    {
      q: "How does optimal timing work?",
      a: "We analyze your audience engagement history and suggest the best windows to post for maximum reach on each platform."
    },
    {
      q: "Can I adapt one post for all platforms?",
      a: "Yes. Our content adapter rewrites captions, resizes media, and adjusts hashtags to fit each platform's best practices automatically."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Social Media Scheduler
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Schedule posts across{" "}
          <span className="text-[#58a6ff]">all platforms</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Plan Instagram, TikTok, Twitter, and LinkedIn posts in one place. Get AI-powered timing suggestions and automatic content adaptation — for $12/mo.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Start Scheduling — $12/mo
          </a>
          <a
            href="#pricing"
            className="inline-block px-8 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] font-semibold text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            See Pricing
          </a>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-[#8b949e]">
          <span>✓ Instagram</span>
          <span>✓ TikTok</span>
          <span>✓ Twitter / X</span>
          <span>✓ LinkedIn</span>
          <span>✓ Optimal timing AI</span>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <p className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$12</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited scheduled posts",
              "4 platform connections",
              "AI optimal timing suggestions",
              "Cross-platform content adapter",
              "Post queue & calendar view",
              "Analytics dashboard"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="rounded-xl border border-[#30363d] bg-[#161b22] p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58] pb-8">
        © {new Date().getFullYear()} SocialQueue. All rights reserved.
      </footer>
    </main>
  );
}
