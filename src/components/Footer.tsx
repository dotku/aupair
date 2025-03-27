import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaFacebook, FaInstagram, FaWeixin, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation("footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              {t("companyName", { ns: "common" })}
            </h3>
            <p className="text-sm mb-4 text-gray-400">{t("about")}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-secondary transition-colors"
                >
                  {t("links.home")}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-secondary transition-colors"
                >
                  {t("links.aboutUs")}
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works"
                  className="text-gray-400 hover:text-secondary transition-colors"
                >
                  {t("links.howItWorks")}
                </Link>
              </li>
              <li>
                <Link
                  to="/find-aupair"
                  className="text-gray-400 hover:text-secondary transition-colors"
                >
                  {t("links.findAuPair")}
                </Link>
              </li>
              <li>
                <Link
                  to="/find-family"
                  className="text-gray-400 hover:text-secondary transition-colors"
                >
                  {t("links.findFamily")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              {t("resources")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/safety-tips"
                  className="text-gray-400 hover:text-secondary transition-colors"
                >
                  {t("links.safetyTips")}
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-gray-400 hover:text-secondary transition-colors"
                >
                  {t("links.faq")}
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-400 hover:text-secondary transition-colors"
                >
                  {t("links.blog")}
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="text-gray-400 hover:text-secondary transition-colors"
                >
                  {t("links.testimonials")}
                </Link>
              </li>
              <li>
                <Link
                  to="/english-education"
                  className="text-gray-400 hover:text-secondary transition-colors"
                >
                  {t("links.englishEducation")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div id="contact">
            <h3 className="text-xl font-semibold mb-4 text-white">
              {t("contact.title")}
            </h3>
            <div className="space-y-2">
              <div className="text-gray-400">
                {t("contact.phone.label")}: {t("contact.phone.value")}
              </div>
              <div className="text-gray-400">
                {t("contact.email.label")}: {t("contact.email.value")}
              </div>
              <div className="text-gray-400">
                {t("contact.wechat.label")}: {t("contact.wechat.value")}
              </div>
              <div>
                <p className="text-gray-400">
                  {t("contact.hours.label")}:
                  <br />
                  {t("contact.hours.weekdays")}
                  <br />
                  {t("contact.hours.weekend")}
                  <br />
                  {t("contact.hours.timezone")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-secondary transition-colors"
                aria-label={t("social.wechat")}
              >
                <FaWeixin className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-secondary transition-colors"
                aria-label={t("social.instagram")}
              >
                <FaInstagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-secondary transition-colors"
                aria-label={t("social.facebook")}
              >
                <FaFacebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-secondary transition-colors"
                aria-label={t("social.linkedin")}
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
              <p className="text-sm text-gray-400">
                {t("copyright.text")} {currentYear}{" "}
                {t("companyName", { ns: "common" })} {t("copyright.rights")}
              </p>
              <a
                href={t("icp.link")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-secondary transition-colors"
              >
                {t("icp.text")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
