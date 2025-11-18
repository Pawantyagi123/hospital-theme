export default function CaseStudies() {
  const cases = [
    {
      id: 1,
      patient: "Mrs. S.P.",
      condition: "Knee Osteoarthritis",
      treatment: "Total Knee Replacement",
      outcome: "Pain-free walking within 6 weeks",
      testimonial: "I can now walk without pain thanks to the amazing doctors!",
      image: "https://images.unsplash.com/photo-1609113160023-4e31f3765fd7?q=80&w=1170&auto=format",
    },
    {
      id: 2,
      patient: "Mr. A.K.",
      condition: "Heart Blockage",
      treatment: "Angioplasty",
      outcome: "Back to daily activities in 10 days",
      testimonial: "The hospital saved my life.",
      image: "https://images.unsplash.com/photo-1712232415633-095dc9e03c5d?q=80&w=1074&auto=format",
    },
  
  {
    id: 3,
    patient: "Mr. J.D.",
    condition: "Hip Fracture",
    treatment: "Hip Replacement Surgery",
    outcome: "Full mobility regained after physiotherapy",
    testimonial: "I’m walking again without any pain or support.",
    image: "https://plus.unsplash.com/premium_photo-1683133474080-0fdfe57ae13c?q=80&w=687&auto=format",
  },
  {
    id: 4,
    patient: "Baby A.R.",
    condition: "Congenital Heart Defect",
    treatment: "Pediatric Open Heart Surgery",
    outcome: "Healthy growth and normal development",
    testimonial: "Our baby is thriving thanks to the care team.",
    image: "https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=1170&auto=format",
  },

  {
    id: 5,
    patient: "Mr. V.P.",
    condition: "Stroke",
    treatment: "Thrombolytic Therapy & Rehabilitation",
    outcome: "Regained speech and motor skills",
    testimonial: "I’m living a normal life again.",
    image: "https://images.unsplash.com/photo-1601841197690-6f0838bdb005?q=80&w=1170&auto=format",
  },
  {
    id: 6,
    patient: "Mrs. R.T.",
    condition: "Gallstones",
    treatment: "Laparoscopic Cholecystectomy",
    outcome: "No more abdominal pain or discomfort",
    testimonial: "The surgery was quick and recovery was easy.",
    image: "https://media.gettyimages.com/id/1253786703/photo/symptoms-of-covid-19.jpg?s=612x612&w=0&k=20&c=M9RDXAJizWx7ZqejN6d39grm3gpBAsTVFxj7oCyxJD0=",
  }
  ];

  return (
    <div className="p-10 bg-black min-h-screen text-white mt-20">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-400">
        Patient Case Studies
      </h1>
      <p className="max-w-3xl text-center mx-auto text-gray-400 mb-8">
        Real stories of recovery and hope from our patients. These journeys highlight
        the treatments and care that make a difference.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cases.map((c) => (
          <div
            key={c.id}
            className="bg-neutral-900 rounded-lg shadow-lg overflow-hidden border border-neutral-800 hover:shadow-[#52D3D8] transition"
          >
            <img
              src={c.image}
              alt={c.condition}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-blue-400">{c.condition}</h2>
              <p className="mt-2 text-gray-400">
                <strong className="text-white">Patient:</strong> {c.patient}
              </p>
              <p><strong className="text-white">Treatment:</strong> {c.treatment}</p>
              <p><strong className="text-white">Outcome:</strong> {c.outcome}</p>
              <blockquote className="mt-3 text-gray-500 italic">
                “{c.testimonial}”
              </blockquote>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
