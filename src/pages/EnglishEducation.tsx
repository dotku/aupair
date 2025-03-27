import React from 'react';
import { useTranslation } from 'react-i18next';
import { Book, Users, Clock, Video, Target, Globe } from 'lucide-react';

const EnglishEducation = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Book className="h-6 w-6" />,
      title: t('education.features.personalizedLearning'),
      description: t('education.features.personalizedLearning'),
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: t('education.features.nativeSpeakers'),
      description: t('education.features.nativeSpeakers'),
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: t('education.features.flexibleSchedule'),
      description: t('education.features.flexibleSchedule'),
    },
    {
      icon: <Video className="h-6 w-6" />,
      title: t('education.features.onlineClasses'),
      description: t('education.features.onlineClasses'),
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: t('education.features.practicalSkills'),
      description: t('education.features.practicalSkills'),
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: t('education.features.culturalExchange'),
      description: t('education.features.culturalExchange'),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('education.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {t('education.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <div className="text-primary">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Ready to Start Your English Learning Journey?
          </h2>
          <button className="bg-secondary text-white px-8 py-3 rounded-md hover:bg-secondary-dark transition-colors">
            Schedule a Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default EnglishEducation;
