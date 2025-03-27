import React, { useState } from "react";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation(["contact", "footer"]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    userType: "family",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailSubject = `[${t(`form.userTypeOptions.${formData.userType}`)}] ${formData.subject}`;
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
User Type: ${t(`form.userTypeOptions.${formData.userType}`)}

${formData.message}`;

    const mailtoLink = `mailto:${t("contact.email.value", { ns: "footer" })}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600 opacity-90"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
            opacity: 0.2,
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("title")}</h1>
            <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto">
              {t("hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {t("form.title")}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-6">
                  <div className="form-group">
                    <label
                      htmlFor="userType"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      {t("form.userType")}
                    </label>
                    <select
                      id="userType"
                      name="userType"
                      value={formData.userType}
                      onChange={handleChange}
                      className="block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out bg-white"
                      required
                    >
                      <option value="family">{t("form.userTypeOptions.family")}</option>
                      <option value="aupair">{t("form.userTypeOptions.aupair")}</option>
                      <option value="other">{t("form.userTypeOptions.other")}</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      {t("form.name")}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                      placeholder={t("form.name")}
                    />
                  </div>

                  <div className="form-group">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      {t("form.email")}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                      placeholder={t("form.email")}
                    />
                  </div>

                  <div className="form-group">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      {t("form.subject")}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                      placeholder={t("form.subject")}
                    />
                  </div>

                  <div className="form-group">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      {t("form.message")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out resize-none"
                      placeholder={t("form.message")}
                    ></textarea>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 font-semibold text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <Mail className="h-5 w-5" />
                    <span>{t("form.submit")}</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {t("contact.title", { ns: "footer" })}
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {t("contact.address.label", { ns: "footer" })}
                      </h3>
                      <p className="mt-1 text-gray-600">
                        {t("contact.address.value", { ns: "footer" })}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {t("contact.phone.label", { ns: "footer" })}
                      </h3>
                      <p className="mt-1 text-gray-600">
                        {t("contact.phone.value", { ns: "footer" })}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {t("contact.email.label", { ns: "footer" })}
                      </h3>
                      <p className="mt-1 text-gray-600">
                        {t("contact.email.value", { ns: "footer" })}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MessageCircle className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {t("contact.wechat.label", { ns: "footer" })}
                      </h3>
                      <p className="mt-1 text-gray-600">
                        {t("contact.wechat.value", { ns: "footer" })}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {t("contact.hours.label", { ns: "footer" })}
                      </h3>
                      <p className="mt-1 text-gray-600">
                        {t("contact.hours.weekdays", { ns: "footer" })}
                      </p>
                      <p className="mt-1 text-gray-600">
                        {t("contact.hours.weekend", { ns: "footer" })}
                      </p>
                      <p className="mt-1 text-gray-500">
                        {t("contact.hours.timezone", { ns: "footer" })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              {t("faq.title")}
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              {t("faq.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t("faq.questions.q1.title")}
              </h3>
              <p className="text-gray-600">
                {t("faq.questions.q1.answer")}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t("faq.questions.q2.title")}
              </h3>
              <p className="text-gray-600">
                {t("faq.questions.q2.answer")}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t("faq.questions.q3.title")}
              </h3>
              <p className="text-gray-600">
                {t("faq.questions.q3.answer")}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t("faq.questions.q4.title")}
              </h3>
              <p className="text-gray-600">
                {t("faq.questions.q4.answer")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t("cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-md hover:bg-gray-100 transition">
              {t("cta.buttons.find")}
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-md hover:bg-white hover:text-blue-600 transition">
              {t("cta.buttons.become")}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
