import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { t } = useTranslation("common");

  const services = [
    { name: t("nav.howItWorks"), href: "/how-it-works" },
    { name: t("nav.findAuPair"), href: "/find-aupair" },
    { name: t("nav.findFamily"), href: "/find-family" },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex w-full">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-white font-bold text-xl">H</span>
                </div>
                <span className="ml-3 text-xl font-bold text-primary">
                  {t("companyShortName")}
                </span>
              </Link>
            </div>
            <div className="hidden sm:flex sm:flex-grow sm:items-center sm:justify-center sm:space-x-8">
              <div className="relative">
                <Link
                  to="/services"
                  className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 group"
                >
                  <span>{t("nav.services")}</span>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setIsServicesOpen(!isServicesOpen);
                    }}
                    className="ml-2 focus:outline-none"
                    aria-expanded={isServicesOpen}
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        isServicesOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                </Link>
                {isServicesOpen && (
                  <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          to={service.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <Link
                to="/about"
                className="text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                {t("nav.about")}
              </Link>
              <Link
                to="/contact"
                className="text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                {t("nav.contact")}
              </Link>
            </div>
            <div className="hidden sm:flex sm:items-center sm:ml-6">
              <LanguageSwitcher />
              <div className="ml-6 flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-sm font-medium text-gray-500 hover:text-gray-900"
                >
                  {t("nav.login")}
                </Link>
                <Link
                  to="/register"
                  className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-dark"
                >
                  {t("nav.register")}
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">
                {isOpen ? t("nav.closeMenu") : t("nav.openMenu")}
              </span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/services"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
            >
              {t("nav.services")}
            </Link>
            <Link
              to="/about"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
            >
              {t("nav.about")}
            </Link>
            <Link
              to="/contact"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
            >
              {t("nav.contact")}
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <LanguageSwitcher />
            </div>
            <div className="mt-3 space-y-1">
              <Link
                to="/login"
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
              >
                {t("nav.login")}
              </Link>
              <Link
                to="/register"
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
              >
                {t("nav.register")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
