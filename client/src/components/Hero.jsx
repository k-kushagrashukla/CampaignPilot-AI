function Hero() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-20 text-center">

      <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
        🚀 AI Marketing Copilot
      </span>

      <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
        Generate an Entire
        <span className="block text-blue-500">
          Marketing Campaign
        </span>
        in Seconds
      </h1>

      <p className="mt-6 max-w-3xl text-lg text-gray-400">
        Describe your product once and let AI generate LinkedIn posts,
        Instagram captions, Twitter threads, WhatsApp campaigns,
        ad copy, hooks, headlines and influencer outreach messages.
      </p>

      <button className="mt-10 rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold hover:bg-blue-700 transition">
        Generate Campaign
      </button>

    </section>
  );
}

export default Hero;