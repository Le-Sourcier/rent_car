import React from 'react';
import { Briefcase, MapPin, Clock, DollarSign } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Careers: React.FC = () => {
  const jobs = [
    {
      title: "Customer Service Representative",
      location: "New Jersey, USA",
      type: "Full-time",
      salary: "$35,000 - $45,000",
      description: "Join our customer service team to help provide exceptional experiences for our car rental customers.",
      requirements: [
        "2+ years of customer service experience",
        "Valid driver's license",
        "Excellent communication skills",
        "Ability to work flexible hours"
      ]
    },
    {
      title: "Fleet Manager",
      location: "New York, USA",
      type: "Full-time",
      salary: "$55,000 - $70,000",
      description: "Oversee our vehicle fleet operations and maintenance to ensure high-quality service delivery.",
      requirements: [
        "5+ years of fleet management experience",
        "Strong organizational skills",
        "Knowledge of automotive industry",
        "Leadership experience"
      ]
    },
    {
      title: "Marketing Specialist",
      location: "Remote",
      type: "Full-time",
      salary: "$45,000 - $60,000",
      description: "Drive our marketing initiatives and help grow our brand presence in the car rental market.",
      requirements: [
        "3+ years of marketing experience",
        "Digital marketing expertise",
        "Strong analytical skills",
        "Creative mindset"
      ]
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover exciting career opportunities at Rento and be part of our growing team.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {jobs.map((job, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h2>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <MapPin size={16} className="mr-1" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <Clock size={16} className="mr-1" />
                            {job.type}
                          </div>
                          <div className="flex items-center">
                            <DollarSign size={16} className="mr-1" />
                            {job.salary}
                          </div>
                        </div>
                      </div>
                      <button className="btn btn-primary">
                        Apply Now
                      </button>
                    </div>

                    <p className="text-gray-700 mb-4">{job.description}</p>

                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Requirements:</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {job.requirements.map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-white rounded-lg shadow-md p-8 text-center">
              <Briefcase className="mx-auto text-red-600 mb-4" size={48} />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Don't See the Right Fit?</h2>
              <p className="text-gray-700 mb-6">
                We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <button className="btn btn-outline">
                Send Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Careers;