export default function LogoSlider() {
  const logos = [
    "OPENAI",
    "GOOGLE",
    "META",
    "MICROSOFT",
    "AMAZON",
    "ANTHROPIC",
    "NVIDIA",
    "APPLE",
  ];

  return (
    <section className="py-20 overflow-hidden">

      <div className="whitespace-nowrap animate-marquee">

        {[...logos, ...logos].map((logo, index) => (
          <span
            key={index}
            className="
            inline-block
            mx-16
            text-3xl
            font-black
            text-zinc-600
            "
          >
            {logo}
          </span>
        ))}

      </div>

    </section>
  );
}