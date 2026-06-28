const services = [
  "RLHF",
  "Data Annotation",
  "Translation",
  "Transcription",
  "Voice Collection",
  "Image Labeling",
  "Video Annotation",
  "Prompt Evaluation",
];

export default function Services() {
  return (
    <section className="py-24">
      <h2 className="text-5xl font-bold text-center">
        Our Services
      </h2>

      <div className="grid md:grid-cols-4 gap-6 mt-16">
        {services.map((service) => (
          <div
            key={service}
            className="p-8 rounded-3xl glass-card hover:-translate-y-2 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold">
              {service}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}