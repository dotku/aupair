import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Services() {
  const { t } = useTranslation('common');

  const services = [
    {
      title: t('nav.howItWorks'),
      path: '/how-it-works',
      description: t('services.howItWorksDesc'),
      icon: '🔍',
      color: 'bg-blue-50',
      hoverColor: 'group-hover:bg-blue-100'
    },
    {
      title: t('nav.findAuPair'),
      path: '/find-aupair',
      description: t('services.findAuPairDesc'),
      icon: '👩‍👦',
      color: 'bg-green-50',
      hoverColor: 'group-hover:bg-green-100'
    },
    {
      title: t('nav.findFamily'),
      path: '/find-family',
      description: t('services.findFamilyDesc'),
      icon: '👨‍👩‍👧',
      color: 'bg-purple-50',
      hoverColor: 'group-hover:bg-purple-100'
    },
    {
      title: t('nav.englishEducation'),
      path: '/english-education',
      description: t('services.englishEducationDesc'),
      icon: '📚',
      color: 'bg-pink-50',
      hoverColor: 'group-hover:bg-pink-100'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-indigo-700/90 mix-blend-multiply" />
        <div 
          className="h-[500px] bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')" 
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
            <div className="relative z-10 max-w-2xl">
              <span className="block text-indigo-200 text-lg font-semibold mb-3">
                {t('services.welcomeMessage')}
              </span>
              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
                {t('services.title')}
              </h1>
              <p className="text-xl text-indigo-100 mb-8 max-w-xl">
                {t('services.subtitle')}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/find-family"
                  className="px-6 py-3 bg-white text-indigo-600 rounded-lg font-medium shadow-lg hover:bg-indigo-50 transition duration-300"
                >
                  {t('services.findFamilyButton')}
                </Link>
                <Link
                  to="/find-aupair"
                  className="px-6 py-3 bg-indigo-500 text-white rounded-lg font-medium shadow-lg hover:bg-indigo-600 transition duration-300"
                >
                  {t('services.findAuPairButton')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Description Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {t('services.descriptionTitle')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('services.description')}
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.path}
              to={service.path}
              className={`group rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-2`}
            >
              <div className={`${service.color} transition-colors duration-300 ${service.hoverColor} p-8`}>
                <span className="flex justify-center text-5xl mb-6 transform transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  {service.title}
                </h3>
              </div>
              <div className="p-6 bg-white flex-grow flex flex-col">
                <p className="text-gray-600 flex-grow mb-4">
                  {service.description}
                </p>
                <div className="mt-auto flex items-center text-indigo-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span className="mr-2">{t('common.learnMore')}</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Testimonial Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('services.testimonialTitle')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('services.testimonialSubtitle')}
            </p>
          </div>
          
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute -inset-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-20 blur-lg"></div>
            <div className="relative bg-white p-8 md:p-12 rounded-xl shadow-lg">
              <svg className="h-12 w-12 text-gray-300 absolute top-8 left-8 opacity-25" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-lg md:text-xl text-gray-600 relative z-10 italic">
                {t('services.testimonialQuote')}
              </p>
              <div className="mt-8 flex items-center">
                <img 
                  className="h-12 w-12 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
                  alt="Testimonial"
                />
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">{t('services.testimonialAuthor')}</p>
                  <p className="text-gray-500 text-sm">{t('services.testimonialRole')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('services.ctaTitle')}
          </h2>
          <p className="text-lg text-indigo-100 max-w-2xl mx-auto mb-8">
            {t('services.ctaDescription')}
          </p>
          <Link
            to="/register"
            className="inline-block px-6 py-3 bg-white text-indigo-600 rounded-lg font-medium shadow-lg hover:bg-indigo-50 transition duration-300"
          >
            {t('services.ctaButton')}
          </Link>
        </div>
      </div>
    </div>
  );
}
