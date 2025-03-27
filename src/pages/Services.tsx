import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Services() {
  const { t } = useTranslation('common');

  const services = [
    {
      title: t('nav.howItWorks'),
      path: '/how-it-works',
      description: t('services.howItWorksDesc'),
      icon: '🔍'
    },
    {
      title: t('nav.findAuPair'),
      path: '/find-aupair',
      description: t('services.findAuPairDesc'),
      icon: '👩‍👦'
    },
    {
      title: t('nav.findFamily'),
      path: '/find-family',
      description: t('services.findFamilyDesc'),
      icon: '👨‍👩‍👧'
    },
    {
      title: t('nav.englishEducation'),
      path: '/english-education',
      description: t('services.englishEducationDesc'),
      icon: '📚'
    }
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            {t('services.title')}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {t('services.subtitle')}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {t('services.description')}
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                className="group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 hover:bg-gray-50 rounded-lg shadow transition-all duration-200 hover:shadow-lg"
              >
                <div>
                  <span className="text-4xl mb-4 block">
                    {service.icon}
                  </span>
                  <h3 className="text-lg font-medium">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {service.description}
                  </p>
                </div>
                <span
                  className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                  aria-hidden="true"
                >
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
