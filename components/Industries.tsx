const industries = [
  "Healthcare",
  "Finance",
  "Retail",
  "Education",
  "Automotive",
  "Generative AI",
];

export default function Industries() {
  return (
    <section className="py-24">
      <h2 className="text-5xl font-bold text-center">
        Industries We Serve
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {industries.map((item) => (
          <div
            key={item}
            className="p-10 rounded-2xl bg-zinc-900"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}