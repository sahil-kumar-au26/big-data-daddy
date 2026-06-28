export default function Trusted() {
  const companies = [
    "OpenAI",
    "Meta",
    "Google",
    "Microsoft",
    "Anthropic",
    "Amazon",
  ];

  return (
    <section className="py-20 border-y border-white/10">
      <p className="text-center text-zinc-500 uppercase tracking-[4px]">
        Trusted By AI Teams Worldwide
      </p>

      <div className="flex flex-wrap justify-center gap-10 mt-10 text-2xl font-bold text-zinc-600">
        {companies.map((company) => (
          <span key={company}>{company}</span>
        ))}
      </div>
    </section>
  );
}