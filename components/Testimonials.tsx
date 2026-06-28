const testimonials = [
  {
    company: "AI Startup",
    text: "Excellent multilingual workforce."
  },
  {
    company: "Healthcare Client",
    text: "High quality annotation delivery."
  },
  {
    company: "LLM Team",
    text: "Reliable RLHF contributors."
  }
];

export default function Testimonials() {
  return (
    <section className="py-32">

      <h2 className="text-center text-5xl font-bold">
        Trusted Worldwide
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mt-20">

        {testimonials.map((item) => (
          <div
            key={item.company}
            className="bg-zinc-900 rounded-3xl p-8"
          >
            <p className="text-gray-300">
              {item.text}
            </p>

            <div className="mt-8 font-semibold">
              {item.company}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}