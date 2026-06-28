const steps = [
  "Submit Project",
  "Global Workforce Allocation",
  "Quality Validation",
  "Final Delivery",
];

export default function HowItWorks() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-center text-6xl font-black">
          How It Works
        </h2>

        <div className="grid md:grid-cols-4 gap-8 mt-20">

          {steps.map((step, index) => (
            <div
              key={step}
              className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              p-8
              "
            >
              <div className="text-blue-400 text-5xl font-black">
                0{index + 1}
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                {step}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}