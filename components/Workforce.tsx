export default function Workforce() {
  const countries = [
    "India",
    "Pakistan",
    "Bangladesh",
    "Nigeria",
    "Kenya",
    "Brazil",
    "Indonesia",
    "Philippines",
  ];

  return (
    <section className="py-32 px-6">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-center text-6xl font-black">
          Global Workforce
        </h2>

        <p className="text-center text-zinc-400 mt-4">
          Contributors from across the globe.
        </p>

        <div className="grid md:grid-cols-4 gap-6 mt-20">

          {countries.map((country) => (
            <div
              key={country}
              className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              p-8
              text-center
              "
            >
              {country}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}