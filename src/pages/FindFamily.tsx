import {
  Search,
  Globe,
  Heart,
  Clock,
  Users,
  MessageCircle,
  Home,
  GraduationCap,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import Testimonials from "../components/Testimonials";

interface Benefit {
  title: string;
  description: string;
}

interface Family {
  id: number;
  name: string;
  location: string;
  children: string;
  duration: string;
  startDate: string;
  languages: string[];
  requirements: string;
  description: string;
  image: string;
}

const FindFamily = () => {
  const { t } = useTranslation("find-family");

  // Sample family data
  const families: Family[] = [
    {
      id: 1,
      name: "张家",
      location: "上海",
      children: "2个孩子 (5岁和8岁)",
      duration: "12个月",
      startDate: "2024年8月",
      languages: ["英语", "中文"],
      requirements: "有教学经验，喜欢孩子，有耐心",
      description:
        "我们是一个充满活力的家庭，希望能找到一位有爱心和责任心的互惠生。两个孩子都很活泼，喜欢学习和户外活动。",
      image:
        "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "李家",
      location: "北京",
      children: "1个孩子 (6岁)",
      duration: "10个月",
      startDate: "2024年9月",
      languages: ["英语"],
      requirements: "有相关证书，性格开朗",
      description:
        "我们的女儿非常喜欢画画和音乐，希望能找到一位有艺术特长的互惠生。我们会将你视为家庭的一员。",
      image:
        "https://images.unsplash.com/photo-1591035897819-f4bdf739f446?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "王家",
      location: "深圳",
      children: "3个孩子 (4岁、7岁和9岁)",
      duration: "12个月",
      startDate: "2024年7月",
      languages: ["英语", "中文"],
      requirements: "有带3个以上孩子的经验，有驾照优先",
      description:
        "三个孩子都在上国际学校，希望能找到一位经验丰富的互惠生。我们提供独立的住所和优厚的条件。",
      image:
        "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "刘家",
      location: "杭州",
      children: "2个孩子 (3岁和5岁)",
      duration: "6个月",
      startDate: "2024年10月",
      languages: ["英语"],
      requirements: "有幼教经验，会弹钢琴优先",
      description:
        "我们希望孩子们能在快乐的环境中学习英语。家里有钢琴，如果互惠生会弹奏那就太完美了。",
      image:
        "https://images.unsplash.com/photo-1597413545419-4013431dbfec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1536749393129-0bff49c4c2fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="Chinese Family Hero"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 mix-blend-multiply" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
              {t("title")}
            </h1>
            <p className="mt-4 text-xl text-white/90 max-w-3xl mx-auto mb-8 drop-shadow">
              {t("subtitle")}
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder={t("search.placeholder")}
                  className="w-full px-4 py-3 rounded-lg shadow-lg text-gray-900 placeholder-gray-500 bg-white/95 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-500 hover:text-gray-700">
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Listings */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">
              {t("listings.title")}
            </h2>
            <div className="flex items-center">
              <span className="mr-2 text-gray-600">{t("sort.label")}</span>
              <select className="border-gray-300 rounded-md text-gray-700 focus:ring-blue-500 focus:border-blue-500">
                <option>{t("sort.options.newest")}</option>
                <option>{t("sort.options.duration")}</option>
                <option>{t("sort.options.startDate")}</option>
                <option>{t("filters.location")}</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {families.map((family) => (
              <div
                key={family.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={family.image}
                    alt={family.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {family.name}
                  </h3>
                  <div className="flex items-start mb-2">
                    <Globe className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">{family.location}</span>
                  </div>
                  <div className="flex items-start mb-2">
                    <Users className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">
                      {family.children} {t("listings.children")}
                    </span>
                  </div>
                  <div className="flex items-start mb-2">
                    <Clock className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">
                      {family.duration}, {t("listings.starting")}{" "}
                      {family.startDate}
                    </span>
                  </div>
                  <div className="flex items-start mb-4">
                    <MessageCircle className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">
                      {t("listings.languages")}: {family.languages.join(", ")}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{family.description}</p>
                  <div className="flex justify-between items-center">
                    <a
                      href="#contact"
                      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                    >
                      {t("contact")}
                    </a>
                    <button className="text-gray-400 hover:text-red-500">
                      <Heart className="h-6 w-6" />
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

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t("benefits.title")}
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {(
              t("benefits.list", {
                returnObjects: true,
              }) as Benefit[]
            ).map((benefit: Benefit, index: number) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  {index === 0 && <Globe className="h-8 w-8 text-blue-600" />}
                  {index === 1 && (
                    <GraduationCap className="h-8 w-8 text-blue-600" />
                  )}
                  {index === 2 && <Home className="h-8 w-8 text-blue-600" />}
                  {index === 3 && <Heart className="h-8 w-8 text-blue-600" />}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Testimonials namespace="find-family" />
      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t("ready.title")}</h2>
          <p className="text-xl mb-8">{t("ready.subtitle")}</p>
          <button className="px-8 py-3 bg-white text-blue-600 rounded-md font-semibold hover:bg-blue-50 transition-colors">
            {t("ready.button")}
          </button>
        </div>
      </section>
    </div>
  );
};

export default FindFamily;
