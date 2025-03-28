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
<<<<<<< HEAD
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

=======
>>>>>>> parent of 0f49ebb (success feed the mock data)
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
      name: "Mei Lin",
      age: 25,
      country: "China",
      languages: ["Mandarin", "English"],
      experience: "2 years",
      education: "Bachelor in Education",
      bio: "Patient and organized au pair who enjoys teaching Mandarin and Chinese culture. I'm also a piano teacher and love music.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
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
    },
    {
      id: 5,
      name: "Yuki Tanaka",
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
    },
  ];

  const toggleCountry = (country: string) => {
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
  };

  const filteredAuPairs = auPairs.filter((auPair) => {
    // 搜索查询匹配
    const searchMatches =
      searchQuery === "" ||
      auPair.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      auPair.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
      auPair.education.toLowerCase().includes(searchQuery.toLowerCase());

    // 国家筛选
    const countryMatches =
      selectedCountries.length === 0 ||
      selectedCountries.includes(auPair.country);

    // 语言筛选
    const languageMatches =
      languages.length === 0 ||
      languages.some((lang) => auPair.languages.includes(lang));

    // 经验筛选
    const experienceMatches =
      experience.length === 0 || experience.includes(auPair.experience);

    return (
      searchMatches && countryMatches && languageMatches && experienceMatches
    );
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
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 mix-blend-multiply" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              {t("title")}
            </h1>
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
                      ))}
                    </div>
                  </div>

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
          </div>
        </div>
      </section>

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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t("cta.subtitle")}
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-md hover:bg-gray-100 transition">
            {t("cta.createProfile")}
          </button>
        </div>
      </section>
<<<<<<< HEAD
>>>>>>> parent of 0f49ebb (success feed the mock data)
=======
>>>>>>> parent of b1849b9 (user able to update profile)
    </div>
  );
};

export default FindAuPair;
