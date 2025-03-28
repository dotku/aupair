import {
  Search,
  Globe,
  Heart,
  Clock,
  MessageCircle,
  GraduationCap,
  Star,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import Testimonials from "../components/Testimonials";

<<<<<<< HEAD
interface AuPair {
  id: number;
  name: string;
  age: number;
  nationality: string;
  languages: string[];
  experience: string;
  education: string;
  availability: string;
  hobbies: string;
  description: string;
  image: string;
}

=======
>>>>>>> parent of 0f49ebb (success feed the mock data)
const FindAuPair = () => {
  const { t } = useTranslation("findAuPair");

  // Sample au pair data
  const auPairs: AuPair[] = [
    {
      id: 1,
      name: "Emily",
      age: 23,
      nationality: "British",
      languages: ["English", "French"],
      experience: "3 years childcare experience",
      education: "Child Psychology",
      availability: "Available from August 2024",
      hobbies: "Piano, swimming, crafts",
      description:
        "I'm passionate about working with children and helping them learn through play. I've worked as a nanny for 3 years and love creating educational activities.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Sophie",
      age: 25,
      nationality: "French",
      languages: ["French", "English", "Spanish"],
      experience: "2 years as kindergarten assistant",
      education: "Early Childhood Education",
      availability: "Available from September 2024",
      hobbies: "Reading, cooking, hiking",
      description:
        "I believe in nurturing children's curiosity and creativity. I enjoy reading stories, teaching languages, and engaging in outdoor activities with kids.",
      image:
        "https://images.unsplash.com/photo-1531123414780-f74242c2b052?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Lukas",
      age: 24,
      nationality: "German",
      languages: ["German", "English"],
      experience: "4 years with special needs children",
      education: "Special Education",
      availability: "Available from July 2024",
      hobbies: "Music, sports, photography",
      description:
        "I specialize in working with children who have special needs. I'm patient, energetic, and committed to helping children reach their full potential.",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "Maria",
      age: 22,
      nationality: "Spanish",
      languages: ["Spanish", "English", "Italian"],
      experience: "1 year as summer camp counselor",
      education: "Education Studies",
      availability: "Available from October 2024",
      hobbies: "Dancing, arts, theater",
      description:
        "I bring enthusiasm and energy to childcare. I love organizing creative activities and helping children develop their talents and confidence.",
      image:
        "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-indigo-800 py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1544776193-0dd823a27c64?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="Au Pair Hero"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-800 mix-blend-multiply" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
              {t("title") || "Find Your Perfect Au Pair"}
            </h1>
            <p className="mt-4 text-xl text-white/90 max-w-3xl mx-auto mb-8 drop-shadow">
              {t("subtitle") || "Discover qualified and passionate au pairs ready to join your family"}
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder={t("search.placeholder") || "Search by language, nationality, or skills..."}
                  className="w-full px-4 py-3 rounded-lg shadow-lg text-gray-900 placeholder-gray-500 bg-white/95 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-500 hover:text-gray-700">
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Au Pair Listings */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">
              {t("listings.title") || "Available Au Pairs"}
            </h2>
            <div className="flex items-center">
              <span className="mr-2 text-gray-600">{t("sort.label") || "Sort by:"}</span>
              <select className="border-gray-300 rounded-md text-gray-700 focus:ring-purple-500 focus:border-purple-500">
                <option>{t("sort.options.newest") || "Newest"}</option>
                <option>{t("sort.options.experience") || "Experience"}</option>
                <option>{t("sort.options.availability") || "Availability"}</option>
                <option>{t("sort.options.language") || "Language"}</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {auPairs.map((auPair) => (
              <div
                key={auPair.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={auPair.image}
                    alt={auPair.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {auPair.name}, {auPair.age}
                  </h3>
                  <div className="flex items-start mb-2">
                    <Globe className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">{auPair.nationality}</span>
                  </div>
                  <div className="flex items-start mb-2">
                    <MessageCircle className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">
                      {t("listings.languages") || "Languages"}: {auPair.languages.join(", ")}
                    </span>
                  </div>
                  <div className="flex items-start mb-2">
                    <GraduationCap className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">{auPair.education}</span>
                  </div>
                  <div className="flex items-start mb-4">
                    <Clock className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">{auPair.availability}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{auPair.description}</p>
                  <div className="flex justify-between items-center">
                    <a
                      href="#contact"
                      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700"
                    >
                      {t("contact") || "Contact"}
                    </a>
                    <button className="text-gray-400 hover:text-red-500">
                      <Heart className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("benefits.title") || "Why Choose Our Au Pairs?"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("benefits.subtitle") || "Our au pairs are carefully selected to ensure they meet the highest standards"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-purple-50 rounded-lg p-8 text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("benefits.qualified.title") || "Qualified & Educated"}
              </h3>
              <p className="text-gray-600">
                {t("benefits.qualified.description") || "All our au pairs have relevant education or training in childcare, teaching, or related fields"}
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg p-8 text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("benefits.vetted.title") || "Thoroughly Vetted"}
              </h3>
              <p className="text-gray-600">
                {t("benefits.vetted.description") || "We conduct comprehensive background checks and interviews to ensure the highest quality"}
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg p-8 text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("benefits.passionate.title") || "Passionate & Caring"}
              </h3>
              <p className="text-gray-600">
                {t("benefits.passionate.description") || "Our au pairs are selected for their genuine love of working with children and dedication to their development"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
>>>>>>> parent of 0f49ebb (success feed the mock data)
    </div>
  );
};

export default FindAuPair;