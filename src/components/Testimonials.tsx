import { Star } from "lucide-react";

export default function Testimonials() {
<<<<<<< HEAD
  const { t } = useTranslation("findFamily");
  const stories = t("testimonials.stories", { returnObjects: true }) as Story[];

  // Fixed avatar URLs
  const avatarUrls = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
  ];

=======
>>>>>>> parent of 0f49ebb (success feed the mock data)
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Au Pair Success Stories
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Hear from au pairs who found their perfect match
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<<<<<<< HEAD
          {stories.map((story: Story, index: number) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col"
            >
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
                <p className="text-gray-600 italic mb-4">{story.quote}</p>
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
=======
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
>>>>>>> parent of 0f49ebb (success feed the mock data)
              </div>
            </div>
            <p className="text-gray-600 italic mb-4">
              "Being an au pair in the USA has been the best decision of my
              life. I've improved my English, made lifelong friends, and gained
              a second family who treats me like their own."
            </p>
            <div className="flex items-center">
              <img
                className="h-10 w-10 rounded-full object-cover mr-4"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                alt="Maria Rodriguez"
              />
              <div>
                <h4 className="text-sm font-semibold">Maria Rodriguez</h4>
                <p className="text-xs text-gray-500">Au Pair from Spain</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-gray-600 italic mb-4">
              "My host family in Germany has been incredibly supportive of my
              goals. They've helped me improve my German and even encouraged me
              to take university courses during my stay."
            </p>
            <div className="flex items-center">
              <img
                className="h-10 w-10 rounded-full object-cover mr-4"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                alt="Thomas Lee"
              />
              <div>
                <h4 className="text-sm font-semibold">Thomas Lee</h4>
                <p className="text-xs text-gray-500">
                  Au Pair from South Korea
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-gray-600 italic mb-4">
              "I was nervous about living abroad, but Mary AuPair matched me
              with the perfect family in Canada. The children are wonderful, and
              I've had amazing opportunities to travel and explore."
            </p>
            <div className="flex items-center">
              <img
                className="h-10 w-10 rounded-full object-cover mr-4"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                alt="Emma Wilson"
              />
              <div>
                <h4 className="text-sm font-semibold">Emma Wilson</h4>
                <p className="text-xs text-gray-500">Au Pair from Australia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
