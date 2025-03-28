import { useTranslation } from "react-i18next";
import {
  UserPlus,
  Search,
  MessageCircle,
  Calendar,
  CheckCircle,
  Globe,
  Shield,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const { t } = useTranslation("how-it-works");

  // 类型定义
  type ListItem = string;
  type SupportItem = {
    title: string;
    description: string;
  };

  // 获取翻译的列表项，并确保返回数组类型
  const getTranslatedList = (key: string): ListItem[] => {
    const translatedItems = t(key, { returnObjects: true });
    return Array.isArray(translatedItems) ? translatedItems : [];
  };

  // 获取支持项列表
  const getSupportItems = (): SupportItem[] => {
    const items = t('support.items', { returnObjects: true });
    return Array.isArray(items) ? items : [];
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-yellow-500 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-400 opacity-90"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1602052793312-b99c2a9ee797?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
            opacity: 0.2,
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('title')}
            </h1>
            <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">{t('process.title')}</h2>
            <p className="mt-4 text-xl text-gray-600">
              {t('process.subtitle')}
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-200"></div>

            {/* Step 1 */}
            <div className="relative mb-16">
              <div className="md:flex items-center">
                <div className="md:w-1/2 pr-8 md:text-right">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {t('steps.profile.title')}
                  </h3>
                  <p className="text-gray-600">
                    {t('steps.profile.description')}
                  </p>
                </div>
                <div className="mx-auto md:mx-0 my-4 md:my-0 flex items-center justify-center w-12 h-12 rounded-full bg-yellow-500 text-white relative z-10">
                  <UserPlus className="h-6 w-6" />
                </div>
                <div className="md:w-1/2 pl-8 md:text-left">
                  <ul className="text-gray-600 space-y-2">
                    {getTranslatedList('steps.profile.items').map((item: string, index: number) => (
                      <li key={index} className="py-1">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative mb-16">
              <div className="md:flex items-center">
                <div className="md:w-1/2 pr-8 md:text-right order-1 md:order-1">
                  <ul className="text-gray-600 space-y-2">
                    {getTranslatedList('steps.search.items').map((item: string, index: number) => (
                      <li key={index} className="py-1">{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="mx-auto md:mx-0 my-4 md:my-0 flex items-center justify-center w-12 h-12 rounded-full bg-yellow-500 text-white relative z-10 order-2 md:order-2">
                  <Search className="h-6 w-6" />
                </div>
                <div className="md:w-1/2 pl-8 md:text-left order-3 md:order-3">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {t('steps.search.title')}
                  </h3>
                  <p className="text-gray-600">
                    {t('steps.search.description')}
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative mb-16">
              <div className="md:flex items-center">
                <div className="md:w-1/2 pr-8 md:text-right">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {t('steps.connect.title')}
                  </h3>
                  <p className="text-gray-600">
                    {t('steps.connect.description')}
                  </p>
                </div>
                <div className="mx-auto md:mx-0 my-4 md:my-0 flex items-center justify-center w-12 h-12 rounded-full bg-yellow-500 text-white relative z-10">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div className="md:w-1/2 pl-8 md:text-left">
                  <ul className="text-gray-600 space-y-2">
                    {getTranslatedList('steps.connect.items').map((item: string, index: number) => (
                      <li key={index} className="py-1">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative mb-16">
              <div className="md:flex items-center">
                <div className="md:w-1/2 pr-8 md:text-right order-1 md:order-1">
                  <ul className="text-gray-600 space-y-2">
                    {getTranslatedList('steps.match.items').map((item: string, index: number) => (
                      <li key={index} className="py-1">{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="mx-auto md:mx-0 my-4 md:my-0 flex items-center justify-center w-12 h-12 rounded-full bg-yellow-500 text-white relative z-10 order-2 md:order-2">
                  <Calendar className="h-6 w-6" />
                </div>
                <div className="md:w-1/2 pl-8 md:text-left order-3 md:order-3">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {t('steps.match.title')}
                  </h3>
                  <p className="text-gray-600">
                    {t('steps.match.description')}
                  </p>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="relative">
              <div className="md:flex items-center">
                <div className="md:w-1/2 pr-8 md:text-right">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {t('steps.begin.title')}
                  </h3>
                  <p className="text-gray-600">
                    {t('steps.begin.description')}
                  </p>
                </div>
                <div className="mx-auto md:mx-0 my-4 md:my-0 flex items-center justify-center w-12 h-12 rounded-full bg-yellow-500 text-white relative z-10">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div className="md:w-1/2 pl-8 md:text-left">
                  <ul className="text-gray-600 space-y-2">
                    {getTranslatedList('steps.begin.items').map((item: string, index: number) => (
                      <li key={index} className="py-1">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Families Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{t('for-families.title')}</h2>
            <p className="mt-4 text-xl text-gray-600">
              {t('for-families.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('for-families.benefits.title')}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-yellow-100 text-yellow-600">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">
                    {t('for-families.benefits.item1')}
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-yellow-100 text-yellow-600">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">
                    {t('for-families.benefits.item2')}
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-yellow-100 text-yellow-600">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">
                    {t('for-families.benefits.item3')}
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-yellow-100 text-yellow-600">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">
                    {t('for-families.benefits.item4')}
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-yellow-100 text-yellow-600">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">
                    {t('for-families.benefits.item5')}
                  </p>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                {t('for-families.responsibilities.title')}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-yellow-100 text-yellow-600">
                      <Clock className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">
                    {t('for-families.responsibilities.item1')}
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-yellow-100 text-yellow-600">
                      <Clock className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">
                    {t('for-families.responsibilities.item2')}
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-yellow-100 text-yellow-600">
                      <Clock className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">
                    {t('for-families.responsibilities.item3')}
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-yellow-100 text-yellow-600">
                      <Clock className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">
                    {t('for-families.responsibilities.item4')}
                  </p>
                </li>
              </ul>
            </div>

            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Family with au pair"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* For Au Pairs Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{t('for-au-pairs.title')}</h2>
            <p className="mt-4 text-xl text-gray-600">
              {t('for-au-pairs.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Au pair with children"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('for-au-pairs.benefits.title')}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-yellow-100 text-yellow-600">
                      <Globe className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">
                    {t('for-au-pairs.benefits.item1')}
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-yellow-100 text-yellow-600">
                      <Globe className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">
                    {t('for-au-pairs.benefits.item2')}
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-yellow-100 text-yellow-600">
                      <Globe className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">
                    {t('for-au-pairs.benefits.item3')}
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-yellow-100 text-yellow-600">
                      <Globe className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">
                    {t('for-au-pairs.benefits.item4')}
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-yellow-100 text-yellow-600">
                      <Globe className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">
                    {t('for-au-pairs.benefits.item5')}
                  </p>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                {t('for-au-pairs.responsibilities.title')}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-yellow-100 text-yellow-600">
                      <Shield className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">
                    {t('for-au-pairs.responsibilities.item1')}
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-yellow-100 text-yellow-600">
                      <Shield className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">
                    {t('for-au-pairs.responsibilities.item2')}
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-yellow-100 text-yellow-600">
                      <Shield className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">
                    {t('for-au-pairs.responsibilities.item3')}
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-yellow-100 text-yellow-600">
                      <Shield className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">
                    {t('for-au-pairs.responsibilities.item4')}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{t('support.title')}</h2>
            <p className="mt-4 text-xl text-gray-600">
              {t('support.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {getSupportItems().map((item: SupportItem, index: number) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {index === 0 && <Clock className="h-8 w-8 text-yellow-600" />}
                  {index === 1 && <Shield className="h-8 w-8 text-yellow-600" />}
                  {index === 2 && <Globe className="h-8 w-8 text-yellow-600" />}
                  {index === 3 && <Calendar className="h-8 w-8 text-yellow-600" />}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              {t('faq.title')}
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              {t('faq.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t('faq.questions.q1.title')}
              </h3>
              <p className="text-gray-600">
                {t('faq.questions.q1.answer')}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t('faq.questions.q2.title')}
              </h3>
              <p className="text-gray-600">
                {t('faq.questions.q2.answer')}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t('faq.questions.q3.title')}
              </h3>
              <p className="text-gray-600">
                {t('faq.questions.q3.answer')}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t('faq.questions.q4.title')}
              </h3>
              <p className="text-gray-600">
                {t('faq.questions.q4.answer')}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t('faq.questions.q5.title')}
              </h3>
              <p className="text-gray-600">
                {t('faq.questions.q5.answer')}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t('faq.questions.q6.title')}
              </h3>
              <p className="text-gray-600">
                {t('faq.questions.q6.answer')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/find-aupair"
              className="inline-block bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              {t('cta.button-family')}
            </Link>
            <Link
              to="/find-family"
              className="inline-block bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-yellow-600 transition-colors"
            >
              {t('cta.button-au-pair')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
