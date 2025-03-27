import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Star, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

interface Step {
  title: string;
  description: string;
}

interface Point {
  title: string;
  description: string;
}

interface Story {
  quote: string;
  name: string;
  location: string;
}

const Home = () => {
  const { t } = useTranslation("home");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary min-h-[600px] flex items-center">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              currentImageIndex === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url('${image}')`,
            }}
          ></div>
        ))}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-100">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/find-aupair"
                className="px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl"
              >
                {t('hero.findAuPair')}
              </Link>
              <Link
                to="/find-family"
                className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
              >
                {t('hero.findFamily')}
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-32"></div>
        
        {/* Image Navigation Dots */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentImageIndex === index ? "bg-primary" : "bg-white bg-opacity-50"
              }`}
              aria-label={`Switch to image ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('howItWorks.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('howItWorks.subtitle')}
            </p>
            <p className="text-lg text-gray-500 mt-2">
              {t('howItWorks.description')}
            </p>
          </div>

          {/* For Families */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {t('howItWorks.forFamilies.title')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(t('howItWorks.forFamilies.steps', { returnObjects: true }) as Record<string, Step>).map(([key, step], index) => (
                <div key={key} className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* For Au Pairs */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {t('howItWorks.forAuPairs.title')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(t('howItWorks.forAuPairs.steps', { returnObjects: true }) as Record<string, Step>).map(([key, step], index) => (
                <div key={key} className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-secondary">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('whyChooseUs.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('whyChooseUs.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(t('whyChooseUs.points', { returnObjects: true }) as Record<string, Point>).map(([key, point]) => (
              <div key={key} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('successStories.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('successStories.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(t('successStories.stories', { returnObjects: true }) as Record<string, Story>).map(([key, story]) => (
              <div key={key} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                  <Star className="w-8 h-8 text-primary inline-block" />
                  <Star className="w-8 h-8 text-primary inline-block" />
                  <Star className="w-8 h-8 text-primary inline-block" />
                  <Star className="w-8 h-8 text-primary inline-block" />
                  <Star className="w-8 h-8 text-primary inline-block" />
                </div>
                <p className="text-gray-600 mb-4 italic">"{story.quote}"</p>
                <div className="font-bold">{story.name}</div>
                <div className="text-gray-500">{story.location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Start Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('readyToStart.title')}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t('readyToStart.description')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/find-family"
              className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              {t('readyToStart.buttonFamily')}
            </Link>
            <Link
              to="/find-aupair"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
            >
              {t('readyToStart.buttonAuPair')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
