import {
  Filter,
  Globe,
  Heart,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Testimonials from "../components/Testimonials";

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 375a240 (Revert "user able to update profile")
interface AuPair {
=======
interface Family {
>>>>>>> parent of b1849b9 (user able to update profile)
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
  const auPairs: Family[] = [
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
<<<<<<< HEAD
      name: "Liu Wei",
      age: 24,
      country: "China",
      languages: ["Chinese", "English"],
      experience: "2 years",
      education: "Bachelor's in Education",
      bio: "Patient and dedicated au pair with experience in tutoring mathematics and Chinese language. I enjoy cooking traditional dishes and teaching cultural activities.",
=======
      name: "Mei Lin",
      age: 25,
      country: "China",
      languages: ["Mandarin", "English"],
      experience: "2 years",
      education: "Bachelor in Education",
      bio: "Patient and organized au pair who enjoys teaching Mandarin and Chinese culture. I'm also a piano teacher and love music.",
>>>>>>> 375a240 (Revert "user able to update profile")
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
<<<<<<< HEAD
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
=======
      name: "Anna Schmidt",
      age: 22,
      country: "Germany",
      languages: ["German", "English", "Basic Spanish"],
      experience: "1 year",
      education: "Studying Psychology",
      bio: "Responsible and caring au pair who loves to engage children in educational activities. I enjoy cooking and baking with kids.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 4,
      name: "Luisa Fernandez",
      age: 24,
      country: "Brazil",
      languages: ["Portuguese", "English", "Spanish"],
      experience: "4 years",
      education: "Child Development",
      bio: "Enthusiastic and loving au pair with experience working with children of all ages. I enjoy teaching languages through games and songs.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
>>>>>>> 375a240 (Revert "user able to update profile")
    },
    {
      id: 5,
      name: "Yuki Tanaka",
<<<<<<< HEAD
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
=======
      age: 26,
      country: "Japan",
      languages: ["Japanese", "English"],
      experience: "3 years",
      education: "Bachelor in Arts",
      bio: "Creative and detail-oriented au pair who loves to teach Japanese culture and origami. I'm also experienced in helping with homework.",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 6,
      name: "Olivia Johnson",
      age: 21,
      country: "Australia",
      languages: ["English", "Basic French"],
      experience: "2 years",
      education: "Studying Education",
      bio: "Active and outgoing au pair who loves sports and outdoor activities. I enjoy creating fun learning experiences for children.",
      image:
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
>>>>>>> 375a240 (Revert "user able to update profile")
    },
  ];

  const toggleCountry = (country: string) => {
<<<<<<< HEAD
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
=======
    if (selectedCountries.includes(country)) {
      setSelectedCountries(selectedCountries.filter((c) => c !== country));
    } else {
      setSelectedCountries([...selectedCountries, country]);
    }
  };

  const toggleLanguage = (lang: string) => {
    if (languages.includes(lang)) {
      setLanguages(languages.filter((l) => l !== lang));
    } else {
      setLanguages([...languages, lang]);
    }
  };

  const toggleExperience = (exp: string) => {
    if (experience.includes(exp)) {
      setExperience(experience.filter((e) => e !== exp));
    } else {
      setExperience([...experience, exp]);
    }
>>>>>>> 375a240 (Revert "user able to update profile")
  };

  const filteredAuPairs = auPairs.filter((auPair) => {
    // 搜索查询匹配
    const searchMatches =
      searchQuery === "" ||
      auPair.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      auPair.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
<<<<<<< HEAD
      auPair.country.toLowerCase().includes(searchQuery.toLowerCase());
=======
      auPair.education.toLowerCase().includes(searchQuery.toLowerCase());
>>>>>>> 375a240 (Revert "user able to update profile")

    // 国家筛选
    const countryMatches =
      selectedCountries.length === 0 ||
      selectedCountries.includes(auPair.country);

    // 语言筛选
    const languageMatches =
      languages.length === 0 ||
<<<<<<< HEAD
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
=======
      languages.some((lang) => auPair.languages.includes(lang));

    // 经验筛选
    const experienceMatches =
      experience.length === 0 || experience.includes(auPair.experience);

    return (
      searchMatches && countryMatches && languageMatches && experienceMatches
    );
>>>>>>> 375a240 (Revert "user able to update profile")
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
<<<<<<< HEAD
          <div className="absolute inset-0 bg-blue-800 mix-blend-multiply" />
        </div>
=======
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 mix-blend-multiply" />
        </div>

>>>>>>> 375a240 (Revert "user able to update profile")
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              {t("title")}
            </h1>
<<<<<<< HEAD
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
=======
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
              {t("subtitle")}
            </p>
          </div>

          {/* Search Bar */}
          <div className="mt-10 max-w-xl mx-auto">
            <div className="relative">
              <div className="flex items-center bg-white rounded-lg shadow-md">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder={t("search.placeholder")}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 rounded-l-lg focus:outline-none"
                  />
                </div>
                <div className="px-4">
                  <button
                    onClick={() => setFiltersOpen(!filtersOpen)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <Filter className="h-5 w-5" />
                  </button>
                </div>
>>>>>>> 375a240 (Revert "user able to update profile")
              </div>

              {/* Filters Dropdown */}
              {filtersOpen && (
                <div className="absolute z-10 left-0 right-0 mt-2 p-4 bg-white rounded-lg shadow-lg">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Country Filter */}
                    <div>
                      <h4 className="font-medium mb-2">
                        {t("search.filters.nationality")}
                      </h4>
                      <div className="space-y-2">
                        {Array.from(
                          new Set(auPairs.map((ap) => ap.country))
                        ).map((country) => (
                          <label key={country} className="flex items-center">
                            <input
                              type="checkbox"
                              checked={selectedCountries.includes(country)}
                              onChange={() => toggleCountry(country)}
                              className="rounded border-gray-300 text-blue-600"
                            />
                            <span className="ml-2">{country}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Language Filter */}
                    <div>
                      <h4 className="font-medium mb-2">
                        {t("search.filters.language")}
                      </h4>
                      <div className="space-y-2">
                        {Array.from(
                          new Set(auPairs.flatMap((ap) => ap.languages))
                        ).map((lang) => (
                          <label key={lang} className="flex items-center">
                            <input
                              type="checkbox"
                              checked={languages.includes(lang)}
                              onChange={() => toggleLanguage(lang)}
                              className="rounded border-gray-300 text-blue-600"
                            />
                            <span className="ml-2">{lang}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Experience Filter */}
                    <div>
                      <h4 className="font-medium mb-2">
                        {t("search.filters.experience")}
                      </h4>
                      <div className="space-y-2">
                        {Array.from(
                          new Set(auPairs.map((ap) => ap.experience))
                        ).map((exp) => (
                          <label key={exp} className="flex items-center">
                            <input
                              type="checkbox"
                              checked={experience.includes(exp)}
                              onChange={() => toggleExperience(exp)}
                              className="rounded border-gray-300 text-blue-600"
                            />
                            <span className="ml-2">{exp}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
=======
      {/* Results Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredAuPairs.map((auPair) => (
              <div
                key={auPair.id}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition"
              >
                <div className="relative">
                  <img
                    src={auPair.image}
                    alt={auPair.name}
                    className="w-full h-64 object-cover"
                  />
                  <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <Heart className="h-5 w-5 text-gray-500 hover:text-red-500" />
                  </button>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      {auPair.name}
                    </h3>
                    <div className="flex items-center bg-blue-100 px-2 py-1 rounded text-blue-800 text-sm">
                      <Globe className="h-4 w-4 mr-1" />
                      {auPair.country}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">
                    {auPair.age} years old • {auPair.experience} experience
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">
                      {t("listings.languages")}
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {auPair.languages.map((language) => (
                        <span
                          key={language}
                          className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                        >
                          {language}
                        </span>
>>>>>>> 375a240 (Revert "user able to update profile")
                      ))}
                    </div>
                  </div>

<<<<<<< HEAD
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
=======
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">
                      {t("listings.education")}
                    </h4>
                    <p className="text-gray-600 text-sm">{auPair.education}</p>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {auPair.bio}
                  </p>

                  <div className="flex space-x-2">
                    <a
                      href="#contact"
                      className="flex-1 flex items-center justify-center px-4 py-2 border border-transparent rounded-md bg-blue-600 text-white hover:bg-blue-700"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      {t("listings.contact")}
                    </a>
                    <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
                      {t("listings.viewProfile")}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <button className="px-6 py-3 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
              {t("listings.loadMore")}
            </button>
>>>>>>> 375a240 (Revert "user able to update profile")
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Testimonials namespace="find-aupair" />
=======
      {/* Testimonials */}
<<<<<<< HEAD
<<<<<<< HEAD
      <Testimonials />
=======
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              {t("testimonials.title")}
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              {t("testimonials.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                {t("testimonials.quote1")}
              </p>
              <div className="flex items-center">
                <img
                  className="h-10 w-10 rounded-full object-cover mr-4"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                  alt="Jennifer Wilson"
                />
                <div>
                  <h4 className="text-sm font-semibold">Jennifer Wilson</h4>
                  <p className="text-xs text-gray-500">
                    {t("testimonials.hostFamily1")}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                {t("testimonials.quote2")}
              </p>
              <div className="flex items-center">
                <img
                  className="h-10 w-10 rounded-full object-cover mr-4"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                  alt="Michael Brown"
                />
                <div>
                  <h4 className="text-sm font-semibold">Michael Brown</h4>
                  <p className="text-xs text-gray-500">
                    {t("testimonials.hostFamily2")}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                {t("testimonials.quote3")}
              </p>
              <div className="flex items-center">
                <img
                  className="h-10 w-10 rounded-full object-cover mr-4"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                  alt="Sarah Johnson"
                />
                <div>
                  <h4 className="text-sm font-semibold">Sarah Johnson</h4>
                  <p className="text-xs text-gray-500">
                    {t("testimonials.hostFamily3")}
                  </p>
                </div>
              </div>
            </div>
          </div>
=======
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Testimonials namespace="find-aupair" />
>>>>>>> parent of b1849b9 (user able to update profile)
>>>>>>> 375a240 (Revert "user able to update profile")
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> parent of 0f49ebb (success feed the mock data)
=======
>>>>>>> parent of b1849b9 (user able to update profile)
>>>>>>> 375a240 (Revert "user able to update profile")
    </div>
  );
};

export default FindAuPair;
