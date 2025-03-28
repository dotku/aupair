import {
  Filter,
  Globe,
  Heart,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Testimonials from "../components/Testimonials";

interface AuPair {
  id: number;
  name: string;
  age: number;
  country: string;
  languages: string[];
  experience: string;
  education: string;
  bio: string;
  image: string;
}

const FindAuPair = () => {
  const { t } = useTranslation("find-aupair");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);
  const [experience, setExperience] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Sample au pair data
  const auPairs: AuPair[] = [
    {
      id: 1,
      name: "Sofia Garcia",
      age: 23,
      country: "Spain",
      languages: ["Spanish", "English", "Basic French"],
      experience: "3 years",
      education: "Early Childhood Education",
      bio: "Energetic and creative au pair with experience teaching Spanish to children. I love outdoor activities and arts & crafts.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      name: "Liu Wei",
      age: 24,
      country: "China",
      languages: ["Chinese", "English"],
      experience: "2 years",
      education: "Bachelor's in Education",
      bio: "Patient and dedicated au pair with experience in tutoring mathematics and Chinese language. I enjoy cooking traditional dishes and teaching cultural activities.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      name: "Emma Schmidt",
      age: 22,
      country: "Germany",
      languages: ["German", "English", "French"],
      experience: "1 year",
      education: "Child Development Studies",
      bio: "Enthusiastic au pair with a passion for teaching languages through play. I'm organized, reliable, and love to create educational activities.",
      image:
        "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 4,
      name: "Ana Silva",
      age: 25,
      country: "Brazil",
      languages: ["Portuguese", "English", "Spanish"],
      experience: "4 years",
      education: "Psychology",
      bio: "Warm and caring au pair with experience working with children of all ages. I love music, dance, and outdoor activities.",
      image:
        "https://images.unsplash.com/photo-1592124549776-a7f0cc973b24?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 5,
      name: "Yuki Tanaka",
      age: 23,
      country: "Japan",
      languages: ["Japanese", "English"],
      experience: "2 years",
      education: "Early Childhood Education",
      bio: "Calm and attentive au pair specializing in creative activities and language learning. I enjoy teaching origami and Japanese culture.",
      image:
        "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 6,
      name: "Olivia Parker",
      age: 24,
      country: "Australia",
      languages: ["English", "Basic Mandarin"],
      experience: "3 years",
      education: "Child Psychology",
      bio: "Adventurous and energetic au pair who loves outdoor activities and sports. I'm passionate about encouraging children's curiosity and independence.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
  ];

  const toggleCountry = (country: string) => {
    setSelectedCountries((prev) =>
      prev.includes(country)
        ? prev.filter((c) => c !== country)
        : [...prev, country]
    );
  };

  const toggleLanguage = (lang: string) => {
    setLanguages((prev) =>
      prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang]
    );
  };

  const toggleExperience = (exp: string) => {
    setExperience((prev) =>
      prev.includes(exp) ? prev.filter((e) => e !== exp) : [...prev, exp]
    );
  };

  const filteredAuPairs = auPairs.filter((auPair) => {
    // 搜索查询匹配
    const searchMatches =
      searchQuery === "" ||
      auPair.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      auPair.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
      auPair.country.toLowerCase().includes(searchQuery.toLowerCase());

    // 国家筛选
    const countryMatches =
      selectedCountries.length === 0 ||
      selectedCountries.includes(auPair.country);

    // 语言筛选
    const languageMatches =
      languages.length === 0 ||
      languages.some((lang) =>
        auPair.languages.some((l) => l.toLowerCase().includes(lang.toLowerCase()))
      );

    // 经验筛选
    const experienceMatches =
      experience.length === 0 ||
      experience.some((exp) => {
        const years = parseInt(auPair.experience);
        if (exp === "1-2 years") return years >= 1 && years <= 2;
        if (exp === "3+ years") return years >= 3;
        return false;
      });

    return searchMatches && countryMatches && languageMatches && experienceMatches;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1559136560-16ad036d85d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="Au Pair Hero"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-blue-800 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              {t("title")}
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
              {t("subtitle")}
            </p>
            <div className="mt-10 max-w-xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  className="w-full px-5 py-3 border border-transparent rounded-full text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
                  placeholder={t("search.placeholder")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute right-0 top-0 mr-2 h-full px-6 py-3 border border-transparent text-base font-medium rounded-r-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
                >
                  {t("search.button")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t("benefits.title")}
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              {t("benefits.subtitle")}
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {(t("benefits.list", { returnObjects: true }) as Array<{title: string, description: string}>).map(
                (benefit, index) => (
                  <div
                    key={index}
                    className="pt-6 border-t-4 border-blue-500 rounded-lg bg-white shadow-lg overflow-hidden"
                  >
                    <div className="px-6 py-8">
                      <h3 className="text-xl font-medium text-gray-900">
                        {benefit.title}
                      </h3>
                      <p className="mt-4 text-base text-gray-500">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row">
            {/* Filters */}
            <div className="md:w-64 flex-shrink-0">
              <div className="sticky top-6">
                <div className="flex items-center justify-between md:hidden mb-4">
                  <h2 className="text-lg font-medium text-gray-900">
                    {t("filters.title")}
                  </h2>
                  <button
                    type="button"
                    className="flex items-center text-sm text-blue-600 hover:text-blue-500"
                    onClick={() => setFiltersOpen(!filtersOpen)}
                  >
                    <Filter className="h-4 w-4 mr-1" />
                    {filtersOpen ? t("filters.reset") : t("filters.title")}
                  </button>
                </div>

                <div
                  className={`md:block ${
                    filtersOpen ? "block" : "hidden"
                  } space-y-6`}
                >
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      {t("filters.nationality")}
                    </h3>
                    <div className="mt-2 space-y-2">
                      {["Spain", "China", "Germany", "Brazil", "Japan", "Australia"].map(
                        (country) => (
                          <div key={country} className="flex items-center">
                            <input
                              id={`country-${country}`}
                              name={`country-${country}`}
                              type="checkbox"
                              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                              checked={selectedCountries.includes(country)}
                              onChange={() => toggleCountry(country)}
                            />
                            <label
                              htmlFor={`country-${country}`}
                              className="ml-3 text-sm text-gray-600"
                            >
                              {country}
                            </label>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      {t("filters.languages")}
                    </h3>
                    <div className="mt-2 space-y-2">
                      {[
                        "English",
                        "Chinese",
                        "Spanish",
                        "German",
                        "French",
                        "Japanese",
                        "Portuguese",
                      ].map((lang) => (
                        <div key={lang} className="flex items-center">
                          <input
                            id={`lang-${lang}`}
                            name={`lang-${lang}`}
                            type="checkbox"
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            checked={languages.includes(lang)}
                            onChange={() => toggleLanguage(lang)}
                          />
                          <label
                            htmlFor={`lang-${lang}`}
                            className="ml-3 text-sm text-gray-600"
                          >
                            {lang}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      {t("filters.experience")}
                    </h3>
                    <div className="mt-2 space-y-2">
                      {["1-2 years", "3+ years"].map((exp) => (
                        <div key={exp} className="flex items-center">
                          <input
                            id={`exp-${exp}`}
                            name={`exp-${exp}`}
                            type="checkbox"
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            checked={experience.includes(exp)}
                            onChange={() => toggleExperience(exp)}
                          />
                          <label
                            htmlFor={`exp-${exp}`}
                            className="ml-3 text-sm text-gray-600"
                          >
                            {exp}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    className="w-full bg-blue-600 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    onClick={() => {
                      setSelectedCountries([]);
                      setLanguages([]);
                      setExperience([]);
                      setSearchQuery("");
                    }}
                  >
                    {t("filters.reset")}
                  </button>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="mt-8 md:mt-0 md:ml-8 md:flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {t("listings.title")}
              </h2>

              {filteredAuPairs.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-lg text-gray-500">{t("listings.noResults")}</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredAuPairs.map((auPair) => (
                    <div
                      key={auPair.id}
                      className="bg-white overflow-hidden shadow rounded-lg"
                    >
                      <div className="relative h-48">
                        <img
                          src={auPair.image}
                          alt={auPair.name}
                          className="w-full h-full object-cover"
                        />
                        <button className="absolute top-2 right-2 p-1.5 bg-white rounded-full text-gray-400 hover:text-red-500">
                          <Heart className="h-5 w-5" />
                        </button>
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-medium text-gray-900">
                              {auPair.name}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {auPair.age} {t("listings.yearsOld")}
                            </p>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Globe className="h-4 w-4 mr-1" />
                            {auPair.country}
                          </div>
                        </div>

                        <div className="mt-4 space-y-2">
                          <div>
                            <h4 className="text-xs font-medium text-gray-500 uppercase">
                              {t("listings.languages")}
                            </h4>
                            <p className="text-sm text-gray-700">
                              {auPair.languages.join(", ")}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-xs font-medium text-gray-500 uppercase">
                              {t("listings.experience")}
                            </h4>
                            <p className="text-sm text-gray-700">{auPair.experience}</p>
                          </div>
                          <div>
                            <h4 className="text-xs font-medium text-gray-500 uppercase">
                              {t("listings.education")}
                            </h4>
                            <p className="text-sm text-gray-700">{auPair.education}</p>
                          </div>
                        </div>

                        <div className="mt-4 flex justify-between">
                          <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            {t("listings.viewProfile")}
                          </button>
                          <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            <MessageCircle className="h-4 w-4 mr-1" />
                            {t("listings.contactAuPair")}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {filteredAuPairs.length > 0 && (
                <div className="mt-8 text-center">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    {t("listings.loadMore")}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Testimonials namespace="find-aupair" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">{t("cta.title")}</span>
            <span className="block text-blue-200">{t("cta.message")}</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                {t("cta.button")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FindAuPair;
