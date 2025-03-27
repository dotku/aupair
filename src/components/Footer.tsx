import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaFacebook, FaTwitter, FaInstagram, FaWeixin, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">{t('companyName')}</h3>
            <p className="text-sm mb-4 text-gray-400">{t('footer.about')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-secondary transition-colors">{t('footer.home')}</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-secondary transition-colors">{t('footer.aboutUs')}</Link></li>
              <li><Link to="/how-it-works" className="text-gray-400 hover:text-secondary transition-colors">{t('footer.howItWorks')}</Link></li>
              <li><Link to="/find-aupair" className="text-gray-400 hover:text-secondary transition-colors">{t('footer.findAuPair')}</Link></li>
              <li><Link to="/find-family" className="text-gray-400 hover:text-secondary transition-colors">{t('footer.findFamily')}</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">{t('footer.resources')}</h3>
            <ul className="space-y-2">
              <li><Link to="/safety-tips" className="text-gray-400 hover:text-secondary transition-colors">{t('footer.safetyTips')}</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-secondary transition-colors">{t('footer.faq')}</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-secondary transition-colors">{t('footer.blog')}</Link></li>
              <li><Link to="/testimonials" className="text-gray-400 hover:text-secondary transition-colors">{t('footer.testimonials')}</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-secondary transition-colors">{t('footer.privacyPolicy')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">{t('footer.contactUs')}</h3>
            <div className="space-y-2 text-gray-400">
              <p><span className="font-medium text-gray-300">Email:</span> xutianyun94@gmail.com</p>
              <p><span className="font-medium text-gray-300">Phone:</span> +86 18621522961</p>
              <p><span className="font-medium text-gray-300">Address:</span> {t('footer.address')}</p>
              <p><span className="font-medium text-gray-300">WeChat:</span> Mary_Hsu1007</p>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2 text-white">{t('footer.newsletter')}</h4>
              <p className="text-sm mb-2 text-gray-400">{t('footer.newsLetterText')}</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 px-3 py-2 bg-gray-800 text-gray-300 rounded-l border border-gray-700 focus:outline-none focus:border-secondary"
                />
                <button className="bg-secondary text-white px-4 py-2 rounded-r hover:bg-opacity-90 transition-colors">
                  {t('footer.subscribe')}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors"><FaFacebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors"><FaTwitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors"><FaInstagram size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors"><FaWeixin size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors"><FaLinkedin size={24} /></a>
            </div>
            <div className="text-sm text-gray-500 text-center md:text-right">
              <p> {currentYear} {t('companyName')}. {t('footer.allRights')}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
