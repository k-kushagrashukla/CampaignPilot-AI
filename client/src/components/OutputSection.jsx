import OutputCard from "./OutputCard";

function OutputSection({ campaign }) {
  if (!campaign) return null;

  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">

      <h2 className="mb-10 text-center text-4xl font-bold">
        🚀 Generated Campaign
      </h2>

      <div className="grid gap-6">

        <OutputCard
          title="LinkedIn Post"
          emoji="💼"
          content={campaign.linkedin}
        />

        <OutputCard
          title="Instagram Caption"
          emoji="📸"
          content={campaign.instagram}
        />

        <OutputCard
          title="Twitter Thread"
          emoji="🐦"
          content={campaign.twitter}
        />

        <OutputCard
          title="WhatsApp Campaign"
          emoji="💬"
          content={campaign.whatsapp}
        />

      </div>

    </section>
  );
}

export default OutputSection;