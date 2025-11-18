import React from "react";

const blogs = [
  {
    id: 1,
    title: "5 Tips for a Healthy Heart",
    description:
      "Learn how to keep your heart healthy with simple lifestyle changes like exercise, diet, and regular check-ups.",
    image:
      "https://images.unsplash.com/photo-1618939304347-e91b1f33d2ab?q=80&w=687&auto=format",
    date: "Aug 10, 2025",
    author: "Dr. John Smith",
  },
  {
    id: 2,
    title: "Understanding Mental Health",
    description:
      "Mental health is as important as physical health. Discover ways to manage stress and anxiety effectively.",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800&auto=format",
    date: "Aug 05, 2025",
    author: "Dr. Sarah Johnson",
  },
  {
    id: 3,
    title: "Importance of Regular Check-ups",
    description:
      "Regular health check-ups help in early detection of potential health issues. Here’s why you shouldn’t skip them.",
    image:
      "https://images.unsplash.com/photo-1504814532849-cff240bbc503?q=80&w=800&auto=format",
    date: "July 28, 2025",
    author: "Dr. Emily Davis",
  },
  {
    id: 4,
    title: "The Silent Signs You Shouldn’t Ignore",
    description: "Some health issues show early signs that are easy to miss. Learning to spot them can save your life.",
    image: "https://images.unsplash.com/photo-1584467735871-8e85353a8413?w=600&auto=format",
    date: "July 20, 2025",
    author: "Dr. Sarah Thompson"
  },
  {
    id: 5,
    title: "The Power of Preventive Healthcare",
    description: "Preventive care helps you stay ahead of illnesses. Regular check-ups and screenings can make all the difference.",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&auto=format",
    date: "July 24, 2025",
    author: "Dr. Michael Lee"
  },
  {
    id: 6,
    title: "How Sleep Affects Your Recovery",
    description: "Quality sleep is essential for healing and immunity. Discover why rest is a critical part of your recovery journey.",
    image: "https://images.unsplash.com/photo-1520206183501-b80df61043c2?q=80&w=1171&auto=format",
    date: "July 28, 2025",
    author: "Dr. Emily Davis"
  }
];

export default function Blogs() {
  return (
    <section className="bg-black/50 min-h-screen text-white py-16 px-6 md:px-20 mt-20">
      <h1 className="text-4xl font-bold text-center mb-12 border-b border-gray-700 pb-4">
        Our Latest Blogs
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-400 text-sm mb-4">{blog.description}</p>
              <div className="flex justify-between text-gray-500 text-xs">
                <span>{blog.author}</span>
                <span>{blog.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
