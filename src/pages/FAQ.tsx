import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Disclosure, Transition } from '@headlessui/react';
import PageTransition from '../components/PageTransition';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What documents do I need to rent a car?",
      answer: "To rent a car, you'll need a valid driver's license, a credit card in the renter's name, and a valid form of identification. International renters may need additional documentation."
    },
    {
      question: "What is your fuel policy?",
      answer: "Our vehicles are provided with a full tank of fuel and should be returned with a full tank. If the vehicle is not returned with a full tank, a refueling fee will be charged."
    },
    {
      question: "Is there a mileage limit?",
      answer: "Most of our rental packages come with unlimited mileage. However, some specialty vehicles may have mileage restrictions. Please check your rental agreement for specific details."
    },
    {
      question: "Can I modify or cancel my reservation?",
      answer: "Yes, you can modify or cancel your reservation up to 24 hours before the pickup time without any penalty. Changes made within 24 hours may incur additional charges."
    },
    {
      question: "What happens if I return the car late?",
      answer: "Late returns may incur additional hourly or daily charges. We recommend contacting us as soon as possible if you expect to return the vehicle later than scheduled."
    },
    {
      question: "Do you offer insurance coverage?",
      answer: "Yes, we offer various insurance coverage options including collision damage waiver (CDW), personal accident insurance (PAI), and third-party liability coverage."
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h5 className="text-sm text-red-600 font-semibold tracking-wider mb-3">SUPPORT CENTER</h5>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our car rental services. Can't find what you're looking for? 
              <a href="/contact" className="text-red-600 hover:text-red-700 ml-1">Contact our support team</a>.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Disclosure key={index}>
                  {({ open }) => (
                    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <Disclosure.Button className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200">
                        <span className="font-semibold text-lg text-gray-900">{faq.question}</span>
                        <ChevronDown
                          className={`${
                            open ? 'transform rotate-180' : ''
                          } w-6 h-6 text-red-600 transition-transform duration-300`}
                        />
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-200 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-150 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="px-8 py-6 text-gray-600 bg-gray-50 border-t border-gray-100">
                          {faq.answer}
                        </Disclosure.Panel>
                      </Transition>
                    </div>
                  )}
                </Disclosure>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-gray-600 mb-6">Still have questions?</p>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors duration-300"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default FAQ;