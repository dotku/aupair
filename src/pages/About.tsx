import { Heart, Users, Shield, History, Star } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ValueItem {
  title: string;
  description: string;
}

interface Milestone {
  year: string;
  title: string;
  description: string;
}

interface StatItem {
  number: string;
  label: string;
}

const About = () => {
  const { t } = useTranslation("about");

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-yellow-500 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-400 opacity-90"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
            opacity: 0.2,
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('title')}
            </h1>
            <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto">
              {t('mission.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-12">{t('values.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {(t('values.items', { returnObjects: true }) as ValueItem[]).map((item, index) => (
                <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                  <div className="flex justify-center mb-4">
                    {index === 0 && <Heart className="w-8 h-8 text-yellow-500" />}
                    {index === 1 && <Shield className="w-8 h-8 text-yellow-500" />}
                    {index === 2 && <Star className="w-8 h-8 text-yellow-500" />}
                    {index === 3 && <Users className="w-8 h-8 text-yellow-500" />}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('story.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('story.description')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(t('story.milestones', { returnObjects: true }) as Milestone[]).map((milestone, index) => (
              <div key={index} className="relative">
                <div className="flex items-center justify-center mb-4">
                  <History className="w-8 h-8 text-yellow-500" />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-yellow-500 mb-2">
                    {milestone.year}
                  </h3>
                  <h4 className="text-xl font-semibold mb-2">{milestone.title}</h4>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-yellow-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('stats.title')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(t('stats.items', { returnObjects: true }) as StatItem[]).map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('cta.title')}</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
              {t('cta.buttonFamily')}
            </button>
            <button className="bg-white text-yellow-500 border-2 border-yellow-500 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-colors">
              {t('cta.buttonAuPair')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
