import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const getLinkClassName = (path: string, isMobile = false) => {
    const baseClasses = isMobile ? "block px-3 py-2" : "";
    const activeClasses = "text-primary font-semibold";
    const inactiveClasses = "text-gray-700 hover:text-primary";
    
    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`;
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <span className="ml-3 text-xl font-bold text-primary">
                {t('companyShortName')}
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={getLinkClassName("/")}>
              {t('nav.home')}
            </Link>
            <Link to="/about" className={getLinkClassName("/about")}>
              {t('nav.about')}
            </Link>
            <Link to="/how-it-works" className={getLinkClassName("/how-it-works")}>
              {t('nav.howItWorks')}
            </Link>
            <Link to="/find-aupair" className={getLinkClassName("/find-aupair")}>
              {t('nav.findAuPair')}
            </Link>
            <Link to="/find-family" className={getLinkClassName("/find-family")}>
              {t('nav.findFamily')}
            </Link>
            <Link to="/english-education" className={getLinkClassName("/english-education")}>
              {t('nav.englishEducation')}
            </Link>
            <Link to="/contact" className={getLinkClassName("/contact")}>
              {t('nav.contact')}
            </Link>
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className={getLinkClassName("/", true)}
              onClick={() => setIsOpen(false)}
            >
              {t('nav.home')}
            </Link>
            <Link
              to="/about"
              className={getLinkClassName("/about", true)}
              onClick={() => setIsOpen(false)}
            >
              {t('nav.about')}
            </Link>
            <Link
              to="/how-it-works"
              className={getLinkClassName("/how-it-works", true)}
              onClick={() => setIsOpen(false)}
            >
              {t('nav.howItWorks')}
            </Link>
            <Link
              to="/find-aupair"
              className={getLinkClassName("/find-aupair", true)}
              onClick={() => setIsOpen(false)}
            >
              {t('nav.findAuPair')}
            </Link>
            <Link
              to="/find-family"
              className={getLinkClassName("/find-family", true)}
              onClick={() => setIsOpen(false)}
            >
              {t('nav.findFamily')}
            </Link>
            <Link
              to="/english-education"
              className={getLinkClassName("/english-education", true)}
              onClick={() => setIsOpen(false)}
            >
              {t('nav.englishEducation')}
            </Link>
            <Link
              to="/contact"
              className={getLinkClassName("/contact", true)}
              onClick={() => setIsOpen(false)}
            >
              {t('nav.contact')}
            </Link>
            <div className="px-3 py-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
