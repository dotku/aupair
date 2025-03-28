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
                    className="ml-1 focus:outline-none"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </Link>
                {isServicesOpen && (
                  <div className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            to={service.href}
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">
                                {service.name}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <Link
                to="/english-education"
                className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                {t("nav.englishEducation")}
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                {t("nav.about")}
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                {t("nav.contact")}
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <LanguageSwitcher />
            </div>
          </div>

          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full text-left block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
            >
              {t("nav.services")}
              <ChevronDown className="inline ml-1 h-4 w-4" />
            </button>
            {isServicesOpen && (
              <div className="space-y-1 pl-6">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    to={service.href}
                    className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                    onClick={() => {
                      setIsOpen(false);
                      setIsServicesOpen(false);
                    }}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
            <Link
              to="/english-education"
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              {t("nav.englishEducation")}
            </Link>
            <Link
              to="/about"
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              {t("nav.about")}
            </Link>
            <Link
              to="/contact"
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              {t("nav.contact")}
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
