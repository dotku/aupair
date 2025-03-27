import { useTranslation } from 'react-i18next';
import { Book, Users, Clock, Video, Target, Globe, ChevronRight } from 'lucide-react';

interface Program {
  title: string;
  ageRange: string;
  description: string;
  features: string[];
}

const defaultPrograms: Program[] = [
  {
    title: "少儿英语",
    ageRange: "4-12岁",
    description: "通过游戏、故事和互动活动培养孩子的英语兴趣",
    features: ["趣味教学", "互动练习", "主题活动"]
  },
  {
    title: "青少年英语",
    ageRange: "13-18岁",
    description: "针对性提高学术英语和日常交际能力",
    features: ["考试辅导", "口语训练", "写作提升"]
  },
  {
    title: "商务英语",
    ageRange: "成人",
    description: "面向职场人士的专业英语培训",
    features: ["商务写作", "谈判技巧", "演讲培训"]
  }
];

const EnglishEducation = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Book className="h-6 w-6" />,
      title: t('education.features.personalizedLearning.title'),
      description: t('education.features.personalizedLearning.description'),
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: t('education.features.nativeSpeakers.title'),
      description: t('education.features.nativeSpeakers.description'),
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: t('education.features.flexibleSchedule.title'),
      description: t('education.features.flexibleSchedule.description'),
    },
    {
      icon: <Video className="h-6 w-6" />,
      title: t('education.features.onlineClasses.title'),
      description: t('education.features.onlineClasses.description'),
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: t('education.features.practicalSkills.title'),
      description: t('education.features.practicalSkills.description'),
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: t('education.features.culturalExchange.title'),
      description: t('education.features.culturalExchange.description'),
    },
  ];

  // Try to get translated programs, fallback to default if not available
  const translatedPrograms = t('education.programs.list', { returnObjects: true });
  const programsList = Array.isArray(translatedPrograms) && translatedPrograms.length > 0
    ? translatedPrograms as Program[]
    : defaultPrograms;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('education.title')}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            {t('education.subtitle')}
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {t('education.overview.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('education.overview.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {t('education.features.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('education.features.description')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <div className="text-blue-600">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {t('education.programs.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              {t('education.programs.description')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programsList.map((program, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                <p className="text-blue-600 mb-4">{program.ageRange}</p>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <ChevronRight className="h-4 w-4 text-blue-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {t('education.cta.title')}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t('education.cta.subtitle')}
          </p>
          <button
            className="bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
            onClick={() => {/* Add booking logic */}}
          >
            {t('education.cta.button')}
          </button>
        </div>
      </section>
    </div>
  );
};

export default EnglishEducation;
