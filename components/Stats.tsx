"use client";

import CountUp from "react-countup";

const stats = [
  { end: 2000, suffix: "+", label: "Global Contributors" },
  { end: 150, suffix: "+", label: "Languages" },
  { end: 100, suffix: "+", label: "Enterprise Clients" },
  { end: 15, suffix: "+", label: "Years Experience" },
];

export default function Stats() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((item) => (
            <div
              key={item.label}
              className="glass-card rounded-3xl p-10 text-center"
            >
              <div className="text-5xl font-black text-blue-400">
                <CountUp end={item.end} duration={3} />
                {item.suffix}
              </div>

              <p className="mt-4 text-zinc-400">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}