import { Heart, Users, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-secondary text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-dark to-secondary opacity-90"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
            opacity: 0.2,
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('companyName')}
            </h1>
            <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto">
              {t('footer.about')}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                {t('companyName')} was founded with a simple mission: to create
                meaningful connections between families and au pairs worldwide.
                We believe that cultural exchange is one of the most enriching
                experiences for both families and young adults.
              </p>
              <p className="text-gray-600 mb-4">
                Our founder experienced firsthand the transformative
                power of au pair programs when she was an au pair in Europe.
                This experience inspired her to create a platform that makes
                these connections easier, safer, and more accessible to
                everyone.
              </p>
              <p className="text-gray-600">
                Today, {t('companyName')} has helped thousands of families find the
                perfect au pair and has enabled young adults from around the
                world to experience new cultures while developing valuable
                skills.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Diverse group of people"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Our Mission & Values
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              What drives us every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cultural Exchange</h3>
              <p className="text-gray-600">
                We believe in the power of cultural exchange to broaden horizons
                and create global citizens.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safety & Trust</h3>
              <p className="text-gray-600">
                We prioritize the safety and well-being of both families and au
                pairs through our verification process.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Meaningful Connections
              </h3>
              <p className="text-gray-600">
                We strive to create matches that result in lasting relationships
                and positive experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
            <p className="mt-4 text-xl text-gray-600">
              The people behind {t('companyName')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 relative">
                <img
                  className="w-48 h-48 rounded-full mx-auto object-cover"
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
                  alt="Mary Hsu"
                />
              </div>
              <h3 className="text-xl font-semibold">Mary Hsu</h3>
              <p className="text-blue-600">Founder & CEO</p>
              <p className="mt-2 text-gray-600">
                Former au pair with a passion for cultural exchange and
                education.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4">
                <img
                  className="w-48 h-48 rounded-full mx-auto object-cover"
                  src="https://images.unsplash.com/photo-1472099645785-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
                  alt="David Chen"
                />
              </div>
              <h3 className="text-xl font-semibold">David Chen</h3>
              <p className="text-blue-600">Head of Operations</p>
              <p className="mt-2 text-gray-600">
                Expert in international education with over 10 years of
                experience.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4">
                <img
                  className="w-48 h-48 rounded-full mx-auto object-cover"
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
                  alt="Sophie Kim"
                />
              </div>
              <h3 className="text-xl font-semibold">Sophie Kim</h3>
              <p className="text-blue-600">Family Support Specialist</p>
              <p className="mt-2 text-gray-600">
                Dedicated to ensuring positive experiences for host families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our Impact</h2>
            <p className="mt-4 text-xl">The difference we've made since 2025</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <p className="text-xl">Successful Matches</p>
            </div>

            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-xl">Countries</p>
            </div>

            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <p className="text-xl">Satisfaction Rate</p>
            </div>

            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="text-xl">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              What People Say
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Real experiences from our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=96&h=96&q=80"
                  alt="Sarah Johnson"
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Sarah Johnson</h4>
                  <p className="text-gray-600">Host Family</p>
                </div>
              </div>
              <p className="text-gray-600">
                "{t('companyName')} made it so easy to find the perfect au pair for our
                family. The support throughout the process was exceptional."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=96&h=96&q=80"
                  alt="Maria Garcia"
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Maria Garcia</h4>
                  <p className="text-gray-600">Au Pair</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Being an au pair through {t('companyName')} has been an incredible
                experience. I've grown so much personally and professionally."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
