import React from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, Search, MessageCircle, Calendar, CheckCircle, Globe, Shield, Clock } from 'lucide-react';

const HowItWorks = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600 opacity-90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1591035897819-f4bdf739f446?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
            opacity: 0.2
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">How AuPair Connect Works</h1>
            <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto">
              Your step-by-step guide to finding the perfect au pair or host family
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">The Process</h2>
            <p className="mt-4 text-xl text-gray-600">Simple steps to your cultural exchange journey</p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            
            {/* Step 1 */}
            <div className="relative mb-16">
              <div className="md:flex items-center">
                <div className="md:w-1/2 pr-8 md:text-right">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Create Your Profile</h3>
                  <p className="text-gray-600">Sign up and create a detailed profile that showcases who you are, your preferences, and what you're looking for in a match.</p>
                </div>
                <div className="mx-auto md:mx-0 my-4 md:my-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white relative z-10">
                  <UserPlus className="h-6 w-6" />
                </div>
                <div className="md:w-1/2 pl-8 md:text-left">
                  <ul className="text-gray-600 list-disc ml-5">
                    <li>Complete your personal information</li>
                    <li>Upload photos and videos</li>
                    <li>Describe your expectations and preferences</li>
                    <li>Highlight your skills and experience</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="relative mb-16">
              <div className="md:flex items-center">
                <div className="md:w-1/2 pr-8 md:text-right order-1 md:order-1">
                  <ul className="text-gray-600 list-disc ml-5 md:mr-5 md:ml-0 md:text-right">
                    <li>Browse through verified profiles</li>
                    <li>Use filters to narrow your search</li>
                    <li>Save favorites for later</li>
                    <li>Get personalized recommendations</li>
                  </ul>
                </div>
                <div className="mx-auto md:mx-0 my-4 md:my-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white relative z-10 order-2 md:order-2">
                  <Search className="h-6 w-6" />
                </div>
                <div className="md:w-1/2 pl-8 md:text-left order-3 md:order-3">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Search for Matches</h3>
                  <p className="text-gray-600">Browse through our database of verified profiles to find potential matches that meet your specific requirements.</p>
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative mb-16">
              <div className="md:flex items-center">
                <div className="md:w-1/2 pr-8 md:text-right">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Connect and Communicate</h3>
                  <p className="text-gray-600">Reach out to potential matches through our secure messaging system to get to know each other better.</p>
                </div>
                <div className="mx-auto md:mx-0 my-4 md:my-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white relative z-10">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div className="md:w-1/2 pl-8 md:text-left">
                  <ul className="text-gray-600 list-disc ml-5">
                    <li>Exchange messages through our platform</li>
                    <li>Schedule video calls to meet virtually</li>
                    <li>Ask important questions</li>
                    <li>Discuss expectations and responsibilities</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="relative mb-16">
              <div className="md:flex items-center">
                <div className="md:w-1/2 pr-8 md:text-right order-1 md:order-1">
                  <ul className="text-gray-600 list-disc ml-5 md:mr-5 md:ml-0 md:text-right">
                    <li>Agree on start and end dates</li>
                    <li>Discuss compensation and benefits</li>
                    <li>Clarify roles and responsibilities</li>
                    <li>Plan for arrival and orientation</li>
                  </ul>
                </div>
                <div className="mx-auto md:mx-0 my-4 md:my-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white relative z-10 order-2 md:order-2">
                  <Calendar className="h-6 w-6" />
                </div>
                <div className="md:w-1/2 pl-8 md:text-left order-3 md:order-3">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Make Arrangements</h3>
                  <p className="text-gray-600">Once you've found your match, finalize the details of your arrangement and prepare for the au pair experience.</p>
                </div>
              </div>
            </div>
            
            {/* Step 5 */}
            <div className="relative">
              <div className="md:flex items-center">
                <div className="md:w-1/2 pr-8 md:text-right">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Begin Your Journey</h3>
                  <p className="text-gray-600">Start your au pair experience with confidence, knowing that AuPair Connect provides ongoing support throughout your journey.</p>
                </div>
                <div className="mx-auto md:mx-0 my-4 md:my-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white relative z-10">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div className="md:w-1/2 pl-8 md:text-left">
                  <ul className="text-gray-600 list-disc ml-5">
                    <li>Access resources and support</li>
                    <li>Connect with the local au pair community</li>
                    <li>Receive guidance for any challenges</li>
                    <li>Share your experience and provide feedback</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Families Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">For Families</h2>
            <p className="mt-4 text-xl text-gray-600">What to expect when hosting an au pair</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Benefits of Hosting an Au Pair</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">Flexible childcare tailored to your family's schedule</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">Cultural exchange and language learning for your children</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">A new family member who brings fresh perspectives</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">Cost-effective childcare solution, especially for multiple children</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">Long-term relationship that often extends beyond the au pair year</p>
                </li>
              </ul>
              
              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Family Responsibilities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600">
                      <Clock className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">Provide a private room and meals</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600">
                      <Clock className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">Pay a weekly stipend</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600">
                      <Clock className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">Respect working hours and time off</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600">
                      <Clock className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">Include the au pair in family activities</p>
                </li>
              </ul>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1484665754804-74b091911a1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Family with au pair" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* For Au Pairs Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">For Au Pairs</h2>
            <p className="mt-4 text-xl text-gray-600">What to expect as an au pair</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Au pair with children" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Benefits of Being an Au Pair</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600">
                      <Globe className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">Experience a new culture and country from the inside</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600">
                      <Globe className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">Improve language skills through daily immersion</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600">
                      <Globe className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">Develop valuable childcare skills and experience</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600">
                      <Globe className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">Receive room, board, and a weekly stipend</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600">
                      <Globe className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">Build international connections and friendships</p>
                </li>
              </ul>
              
              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Au Pair Responsibilities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600">
                      <Shield className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">Provide childcare according to the family's needs</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600">
                      <Shield className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">Help with light household duties related to the children</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600">
                      <Shield className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">Respect the family's rules and privacy</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600">
                      <Shield className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">Share your culture and language with the family</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-xl text-gray-600">Common questions about the au pair program</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How long does the typical au pair stay last?</h3>
              <p className="text-gray-600">Most au pair stays last between 6-12 months, though they can be extended up to 2 years depending on the country's regulations and mutual agreement.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What are the typical working hours for an au pair?</h3>
              <p className="text-gray-600">Au pairs typically work 25-45 hours per week, depending on the country and specific arrangement. They should have at least one full day off per week and adequate free time.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How much does it cost to host an au pair?</h3>
              <p className="text-gray-600">Costs vary by country but generally include a weekly stipend, room and board, and possibly language classes or other benefits. Our platform provides detailed cost breakdowns for each country.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What happens if the match doesn't work out?</h3>
              <p className="text-gray-600">We offer a rematch service to help both parties find a more suitable arrangement if the initial match doesn't work out. Our support team is available to mediate and assist throughout the process.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do au pairs need special visas?</h3>
              <p className="text-gray-600">Yes, most countries require specific au pair or cultural exchange visas. We provide guidance on visa requirements and application processes for different countries.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What qualifications do au pairs need?</h3>
              <p className="text-gray-600">Requirements vary, but typically au pairs should be between 18-30 years old, have childcare experience, basic language skills, and pass background checks. Some countries have additional requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Au Pair Journey?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you're a family looking for flexible childcare or someone seeking a cultural exchange experience, we're here to help you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/find-aupair" className="px-8 py-3 bg-white text-blue-600 font-bold rounded-md hover:bg-gray-100 transition">
              Find an Au Pair
            </Link>
            <Link to="/find-family" className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-md hover:bg-white hover:text-blue-600 transition">
              Find a Family
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;