export default function AnnotationPage() {
  const features = ["Bounding Boxes", "Semantic Segmentation", "Keypoint Labeling", "3D Cuboids"];

  return (
    <div className="max-w-7xl mx-auto p-10">
      <h1 className="text-5xl font-black mb-6">Data <span className="text-blue-500">Annotation</span></h1>
      <p className="text-xl text-gray-400 mb-12">We provide 99.9% accuracy in visual data labeling for autonomous systems.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map(f => (
          <div key={f} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500 transition">
            <h3 className="text-2xl font-bold mb-2">{f}</h3>
            <p className="text-gray-500">High-precision {f.toLowerCase()} solutions tailored for your ML model requirements.</p>
          </div>
        ))}
      </div>
    </div>
  );
}