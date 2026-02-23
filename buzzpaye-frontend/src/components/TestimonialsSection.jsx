import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director at TechVibe",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      feedback:
        "BuzzPaye transformed our influencer marketing strategy. We saw a 300% increase in engagement within just 3 months. The AI matching is incredibly accurate!",
    },
    {
      name: "Michael Chen",
      role: "Founder & CEO at StyleHub",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      feedback:
        "The platform is intuitive and powerful. Finding the right influencers used to take weeks, now it takes minutes. Absolutely game-changing for our brand.",
    },
    {
      name: "Aisha Patel",
      role: "Social Media Head at Trendify",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      feedback:
        "We’ve collaborated with top creators effortlessly through BuzzPaye. The private campaign feature and integrated chat system make it so seamless!",
    },
  ];

  const [index, setIndex] = useState(0);

  const nextTestimonial = () =>
    setIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[index];

  return (
    <div className="relative w-full bg-grayCustom text-white py-16 px-6 md:px-20 text-center mt-[-40px]">
      <h2 className="text-4xl font-extrabold text-primary mb-4">
        What Brands Say About Us
      </h2>
      <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
        Trusted by top creators and brands — here’s what our users have to say
        about their BuzzPaye experience.
      </p>

      <div className="relative flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={prevTestimonial}
          className="absolute left-80 md:left-100 text-gray-400 hover:text-primary transition-colors"
        >
          <ChevronLeft size={34} />
        </button>

        {/* Testimonial Card */}
        <div className="glow-card bg-gradient-to-br from-gray-900 to-black border border-gray-800 shadow-lg rounded-2xl p-6 w-full max-w-sm mx-auto text-center hover:scale-[1.02] transition-transform">
          <div className="flex flex-col items-center space-y-3">
            <img
              src={t.image}
              alt={t.name}
              className="w-14 h-14 rounded-full border-2 border-primary"
            />
            <h4 className="text-base font-semibold text-white">{t.name}</h4>
            <p className="text-xs text-gray-400">{t.role}</p>
            <div className="flex space-x-1 text-yellow-400 text-sm">
              {Array(5)
                .fill("★")
                .map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
            </div>
            <p className="text-gray-300 italic leading-relaxed mt-2 text-sm">
              “{t.feedback}”
            </p>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextTestimonial}
          className="absolute right-60 md:right-80 text-gray-400 hover:text-primary transition-colors"
        >
          <ChevronRight size={34} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialsSection;
