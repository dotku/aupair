import React, { useState } from "react";
import {
  Search,
  Filter,
  MapPin,
  Heart,
  MessageCircle,
  Star,
  ChevronDown,
  ChevronUp,
  Users,
  Home,
  DollarSign,
} from "lucide-react";

const FindFamily = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [childrenAges, setChildrenAges] = useState<string[]>([]);
  const [duration, setDuration] = useState<string[]>([]);

  // Sample family data
  const families = [
    {
      id: 1,
      name: "The Johnson Family",
      location: "Seattle, USA",
      children: "2 children (ages 3 and 5)",
      duration: "12 months",
      startDate: "September 2025",
      languages: ["English", "Basic Spanish preferred"],
      requirements: "Driver's license required, swimming skills preferred",
      description:
        "We are a warm and active family looking for an au pair who enjoys outdoor activities and can help with our energetic children.",
      image:
        "https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      name: "The Meyer Family",
      location: "Berlin, Germany",
      children: "1 child (age 7)",
      duration: "6-12 months",
      startDate: "August 2025",
      languages: ["German", "English"],
      requirements:
        "Experience with school-aged children, interest in arts and music",
      description:
        "Our family values education and creativity. We're looking for an au pair who can help with homework and engage our child in enriching activities.",
      image:
        "https://images.unsplash.com/photo-1581952976147-5a2d15560349?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      name: "The Chen Family",
      location: "Vancouver, Canada",
      children: "3 children (ages 2, 4, and 8)",
      duration: "12-24 months",
      startDate: "July 2025",
      languages: ["English", "Mandarin a plus"],
      requirements:
        "Experience with multiple children, patience, driver's license",
      description:
        "We're a busy multicultural family looking for a responsible and energetic au pair who can handle the dynamics of three children of different ages.",
      image:
        "https://images.unsplash.com/photo-1577368287217-16ff9373a733?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 4,
      name: "The Dubois Family",
      location: "Paris, France",
      children: "2 children (ages 6 and 9)",
      duration: "10-12 months",
      startDate: "October 2025",
      languages: ["French", "English"],
      requirements: "Interest in cooking, sports, and helping with homework",
      description:
        "We are looking for an au pair who can be a positive role model for our children and help them with their English while enjoying life in Paris.",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 5,
      name: "The Tanaka Family",
      location: "Tokyo, Japan",
      children: "1 child (age 4)",
      duration: "12 months",
      startDate: "August 2025",
      languages: ["Japanese", "English"],
      requirements:
        "Early childhood education experience preferred, interest in Japanese culture",
      description:
        "We are seeking an au pair who is patient and creative to care for our daughter. We value cultural exchange and would love to share Japanese traditions while learning about yours.",
      image:
        "https://images.unsplash.com/photo-1551995184-f34d2be3531c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 6,
      name: "The Martinez Family",
      location: "Barcelona, Spain",
      children: "2 children (ages 3 and 6)",
      duration: "9-12 months",
      startDate: "September 2025",
      languages: ["Spanish", "English"],
      requirements: "Energetic, creative, enjoys outdoor activities",
      description:
        "Our family loves the beach, arts, and exploring the city. We're looking for an au pair who shares these interests and can bring fun learning experiences to our children.",
      image:
        "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
  ];

  const toggleCountry = (country: string) => {
    if (selectedCountries.includes(country)) {
      setSelectedCountries(selectedCountries.filter((c) => c !== country));
    } else {
      setSelectedCountries([...selectedCountries, country]);
    }
  };

  const toggleChildrenAge = (age: string) => {
    if (childrenAges.includes(age)) {
      setChildrenAges(childrenAges.filter((a) => a !== age));
    } else {
      setChildrenAges([...childrenAges, age]);
    }
  };

  const toggleDuration = (dur: string) => {
    if (duration.includes(dur)) {
      setDuration(duration.filter((d) => d !== dur));
    } else {
      setDuration([...duration, dur]);
    }
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
              "url('https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
            opacity: 0.2,
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find Your Host Family
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover families around the world looking for an au pair like you
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
                    placeholder="Search by location, children's ages..."
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
                        Location
                      </h3>
                      <div className="space-y-2">
                        {[
                          "USA",
                          "Canada",
                          "Germany",
                          "France",
                          "Japan",
                          "Spain",
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
                        Children's Ages
                      </h3>
                      <div className="space-y-2">
                        {[
                          "Infants (0-1)",
                          "Toddlers (2-3)",
                          "Preschool (4-5)",
                          "School Age (6-12)",
                          "Teenagers (13+)",
                        ].map((age) => (
                          <label key={age} className="flex items-center">
                            <input
                              type="checkbox"
                              className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4"
                              checked={childrenAges.includes(age)}
                              onChange={() => toggleChildrenAge(age)}
                            />
                            <span className="ml-2">{age}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Duration
                      </h3>
                      <div className="space-y-2">
                        {[
                          "3-6 months",
                          "6-9 months",
                          "9-12 months",
                          "12+ months",
                        ].map((dur) => (
                          <label key={dur} className="flex items-center">
                            <input
                              type="checkbox"
                              className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4"
                              checked={duration.includes(dur)}
                              onChange={() => toggleDuration(dur)}
                            />
                            <span className="ml-2">{dur}</span>
                          </label>
                        ))}
                      </div>

                      <h3 className="font-semibold text-gray-900 mt-4 mb-2">
                        Special Requirements
                      </h3>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4"
                          />
                          <span className="ml-2">Driver's License</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4"
                          />
                          <span className="ml-2">Swimming</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4"
                          />
                          <span className="ml-2">First Aid</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end space-x-3">
                    <button
                      className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50"
                      onClick={() => {
                        setSelectedCountries([]);
                        setChildrenAges([]);
                        setDuration([]);
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

      {/* Family Listings */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">Host Families</h2>
            <div className="flex items-center">
              <span className="mr-2 text-gray-600">Sort by:</span>
              <select className="border-gray-300 rounded-md text-gray-700 focus:ring-blue-500 focus:border-blue-500">
                <option>Recently Active</option>
                <option>Start Date: Soonest</option>
                <option>Duration: Longest</option>
                <option>Location</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {families.map((family) => (
              <div
                key={family.id}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition"
              >
                <div className="relative">
                  <img
                    src={family.image}
                    alt={family.name}
                    className="w-full h-64 object-cover"
                  />
                  <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <Heart className="h-5 w-5 text-gray-500 hover:text-red-500" />
                  </button>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      {family.name}
                    </h3>
                    <div className="flex items-center bg-blue-100 px-2 py-1 rounded text-blue-800 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      {family.location}
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-start">
                      <Users className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">{family.children}</span>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">
                        {family.duration}, starting {family.startDate}
                      </span>
                    </div>
                    <div className="flex items-start">
                      <Globe className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">
                        {family.languages.join(", ")}
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">
                      Requirements
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {family.requirements}
                    </p>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {family.description}
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
              Load More Families
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Benefits of Being an Au Pair
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Why thousands of young adults choose the au pair experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cultural Immersion</h3>
              <p className="text-gray-600">
                Experience a new culture firsthand by living with a local family
                and participating in their daily life.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safe Accommodation</h3>
              <p className="text-gray-600">
                Enjoy the security of living with a vetted host family with
                private room and meals included.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Weekly Stipend</h3>
              <p className="text-gray-600">
                Receive a regular allowance to cover personal expenses while
                most of your basic needs are covered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Au Pair Success Stories
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Hear from au pairs who found their perfect match
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
                "Being an au pair in the USA has been the best decision of my
                life. I've improved my English, made lifelong friends, and
                gained a second family who treats me like their own."
              </p>
              <div className="flex items-center">
                <img
                  className="h-10 w-10 rounded-full object-cover mr-4"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                  alt="Maria Rodriguez"
                />
                <div>
                  <h4 className="text-sm font-semibold">Maria Rodriguez</h4>
                  <p className="text-xs text-gray-500">Au Pair from Spain</p>
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
                "My host family in Germany has been incredibly supportive of my
                goals. They've helped me improve my German and even encouraged
                me to take university courses during my stay."
              </p>
              <div className="flex items-center">
                <img
                  className="h-10 w-10 rounded-full object-cover mr-4"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                  alt="Thomas Lee"
                />
                <div>
                  <h4 className="text-sm font-semibold">Thomas Lee</h4>
                  <p className="text-xs text-gray-500">
                    Au Pair from South Korea
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
                "I was nervous about living abroad, but Mary AuPair matched me
                with the perfect family in Canada. The children are wonderful,
                and I've had amazing opportunities to travel and explore."
              </p>
              <div className="flex items-center">
                <img
                  className="h-10 w-10 rounded-full object-cover mr-4"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                  alt="Emma Wilson"
                />
                <div>
                  <h4 className="text-sm font-semibold">Emma Wilson</h4>
                  <p className="text-xs text-gray-500">
                    Au Pair from Australia
                  </p>
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
            Ready to Start Your Au Pair Adventure?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Create your au pair profile today and connect with families looking
            for someone just like you.
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-md hover:bg-gray-100 transition">
            Create Au Pair Profile
          </button>
        </div>
      </section>
    </div>
  );
};

export default FindFamily;
