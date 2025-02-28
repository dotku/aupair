import React, { useState } from "react";
import {
  Search,
  Filter,
  Globe,
  Heart,
  MessageCircle,
  Star,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const FindAuPair = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [ageRange, setAgeRange] = useState([18, 30]);
  const [languages, setLanguages] = useState<string[]>([]);
  const [experience, setExperience] = useState<string[]>([]);

  // Sample au pair data
  const auPairs = [
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

  const toggleLanguage = (language: string) => {
    if (languages.includes(language)) {
      setLanguages(languages.filter((l) => l !== language));
    } else {
      setLanguages([...languages, language]);
    }
  };

  const toggleExperience = (exp: string) => {
    if (experience.includes(exp)) {
      setExperience(experience.filter((e) => e !== exp));
    } else {
      setExperience([...experience, exp]);
    }
  };

  const handleAgeRangeChange = (index: number, value: number) => {
    const newRange = [...ageRange];
    newRange[index] = value;
    setAgeRange(newRange);
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
              "url('https://images.unsplash.com/photo-1516627145497-ae6968895b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
            opacity: 0.2,
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find Your Perfect Au Pair
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Browse through our database of qualified au pairs from around the
              world
            </p>

            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row gap-2">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-3 border border-transparent rounded-md leading-5 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Search by name, country, language..."
                  />
                </div>
                <button
                  onClick={() => setFiltersOpen(!filtersOpen)}
                  className="flex items-center justify-center px-4 py-3 border border-transparent rounded-md bg-blue-700 hover:bg-blue-800 text-white"
                >
                  <Filter className="h-5 w-5 mr-2" />
                  Filters
                  {filtersOpen ? (
                    <ChevronUp className="h-4 w-4 ml-1" />
                  ) : (
                    <ChevronDown className="h-4 w-4 ml-1" />
                  )}
                </button>
              </div>

              {/* Filters */}
              {filtersOpen && (
                <div className="mt-4 p-4 bg-white rounded-md shadow-lg text-left text-gray-800">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Country
                      </h3>
                      <div className="space-y-2">
                        {[
                          "China",
                          "Spain",
                          "Germany",
                          "Brazil",
                          "Japan",
                          "Australia",
                        ].map((country) => (
                          <label key={country} className="flex items-center">
                            <input
                              type="checkbox"
                              className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4"
                              checked={selectedCountries.includes(country)}
                              onChange={() => toggleCountry(country)}
                            />
                            <span className="ml-2">{country}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Languages
                      </h3>
                      <div className="space-y-2">
                        {[
                          "English",
                          "Spanish",
                          "Mandarin",
                          "German",
                          "French",
                          "Japanese",
                          "Portuguese",
                        ].map((language) => (
                          <label key={language} className="flex items-center">
                            <input
                              type="checkbox"
                              className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4"
                              checked={languages.includes(language)}
                              onChange={() => toggleLanguage(language)}
                            />
                            <span className="ml-2">{language}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Age Range
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Min Age: {ageRange[0]}
                          </label>
                          <input
                            type="range"
                            min="18"
                            max="30"
                            value={ageRange[0]}
                            onChange={(e) =>
                              handleAgeRangeChange(0, parseInt(e.target.value))
                            }
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Max Age: {ageRange[1]}
                          </label>
                          <input
                            type="range"
                            min="18"
                            max="30"
                            value={ageRange[1]}
                            onChange={(e) =>
                              handleAgeRangeChange(1, parseInt(e.target.value))
                            }
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                          />
                        </div>
                      </div>

                      <h3 className="font-semibold text-gray-900 mt-4 mb-2">
                        Experience
                      </h3>
                      <div className="space-y-2">
                        {["Less than 1 year", "1-2 years", "3+ years"].map(
                          (exp) => (
                            <label key={exp} className="flex items-center">
                              <input
                                type="checkbox"
                                className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4"
                                checked={experience.includes(exp)}
                                onChange={() => toggleExperience(exp)}
                              />
                              <span className="ml-2">{exp}</span>
                            </label>
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end space-x-3">
                    <button
                      className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50"
                      onClick={() => {
                        setSelectedCountries([]);
                        setLanguages([]);
                        setExperience([]);
                        setAgeRange([18, 30]);
                      }}
                    >
                      Clear All
                    </button>
                    <button
                      className="px-4 py-2 border border-transparent rounded-md bg-blue-600 text-white hover:bg-blue-700"
                      onClick={() => setFiltersOpen(false)}
                    >
                      Apply Filters
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Au Pair Listings */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">
              Available Au Pairs
            </h2>
            <div className="flex items-center">
              <span className="mr-2 text-gray-600">Sort by:</span>
              <select className="border-gray-300 rounded-md text-gray-700 focus:ring-blue-500 focus:border-blue-500">
                <option>Recently Active</option>
                <option>Experience: High to Low</option>
                <option>Age: Young to Old</option>
                <option>Age: Old to Young</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {auPairs.map((auPair) => (
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
                      Languages
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
                      Education
                    </h4>
                    <p className="text-gray-600 text-sm">{auPair.education}</p>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {auPair.bio}
                  </p>

                  <div className="flex space-x-2">
                    <button className="flex-1 flex items-center justify-center px-4 py-2 border border-transparent rounded-md bg-blue-600 text-white hover:bg-blue-700">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Contact
                    </button>
                    <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <button className="px-6 py-3 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Load More Au Pairs
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              What Families Say
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Hear from families who found their perfect au pair
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
                "We found our amazing au pair from Spain through Mary AuPair.
                She has been with us for over a year now and has become part of
                our family. Our children adore her!"
              </p>
              <div className="flex items-center">
                <img
                  className="h-10 w-10 rounded-full object-cover mr-4"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                  alt="Jennifer Wilson"
                />
                <div>
                  <h4 className="text-sm font-semibold">Jennifer Wilson</h4>
                  <p className="text-xs text-gray-500">Host Family from USA</p>
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
                "As a busy professional couple with twins, finding the right
                childcare was crucial. Our au pair from China has been a
                blessing - reliable, loving, and she's teaching our kids
                Mandarin!"
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
                    Host Family from Canada
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
                "The matching process was so thorough that we found the perfect
                au pair on our first try. She understands our family values and
                has brought so much joy and cultural exchange to our home."
              </p>
              <div className="flex items-center">
                <img
                  className="h-10 w-10 rounded-full object-cover mr-4"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                  alt="Sarah Johnson"
                />
                <div>
                  <h4 className="text-sm font-semibold">Sarah Johnson</h4>
                  <p className="text-xs text-gray-500">Host Family from UK</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Find Your Perfect Au Pair?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Create your family profile today and start connecting with qualified
            au pairs from around the world.
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-md hover:bg-gray-100 transition">
            Create Family Profile
          </button>
        </div>
      </section>
    </div>
  );
};

export default FindAuPair;
