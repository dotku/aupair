import { Star } from "lucide-react";
import { useTranslation } from "react-i18next";

interface Story {
  name: string;
  location: string;
  quote: string;
  details: string;
}

interface TestimonialsProps {
  namespace?: string;
}

export default function Testimonials({ namespace = "findFamily" }: TestimonialsProps) {
  const { t } = useTranslation(namespace);
  const stories = t("testimonials.stories", { returnObjects: true }) as Story[] || [];

  // Fixed avatar URLs
  const avatarUrls = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80"
  ];

  if (!Array.isArray(stories) || stories.length === 0) {
    return null;
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            {t("testimonials.title")}
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            {t("testimonials.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story: Story, index: number) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col">
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-5 w-5" 
                      fill="#facc15"  
                      stroke="#facc15"
                    />
                  ))}
                </div>
              </div>
              <div className="flex-grow">
                <p className="text-gray-600 italic mb-4">
                  {story.quote}
                </p>
              </div>
              <div className="flex items-end">
                <img
                  className="h-10 w-10 rounded-full object-cover mr-4"
                  src={avatarUrls[index]}
                  alt={story.name}
                />
                <div>
                  <h4 className="text-sm font-semibold">{story.name}</h4>
                  <p className="text-xs text-gray-500">{story.location}</p>
                  <p className="text-xs text-gray-500 mt-1">{story.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
