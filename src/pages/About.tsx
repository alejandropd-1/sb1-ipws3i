import React from 'react';
import { Users, Shield, Truck, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About ModernShop
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              We're on a mission to revolutionize online shopping with quality products
              and exceptional customer service.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our Values</h2>
            <p className="mt-4 text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Customer First",
                description: "Your satisfaction is our top priority"
              },
              {
                icon: Shield,
                title: "Trust & Security",
                description: "Safe and secure shopping experience"
              },
              {
                icon: Truck,
                title: "Fast Delivery",
                description: "Quick and reliable shipping worldwide"
              },
              {
                icon: Award,
                title: "Quality Products",
                description: "Carefully curated premium items"
              }
            ].map((value, index) => (
              <div key={index} className="card text-center">
                <value.icon className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2024, ModernShop began with a simple idea: make online
                  shopping better for everyone. We believed that shopping online
                  should be more than just transactions – it should be an experience.
                </p>
                <p>
                  What started as a small operation has grown into a global
                  marketplace, serving customers worldwide with a carefully curated
                  selection of products. Our commitment to quality, customer service,
                  and innovation has never wavered.
                </p>
                <p>
                  Today, we're proud to be one of the most trusted online
                  retailers, offering everything from cutting-edge electronics to
                  timeless fashion pieces. But we're not just selling products –
                  we're building relationships with our customers and communities.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&w=500"
                alt="Our workspace"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=500"
                alt="Our team"
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our Leadership Team</h2>
            <p className="mt-4 text-gray-600">
              Meet the people driving our mission forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Thompson",
                role: "CEO & Founder",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500"
              },
              {
                name: "Sarah Chen",
                role: "Head of Operations",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=500"
              },
              {
                name: "Marcus Rodriguez",
                role: "Tech Lead",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500"
              }
            ].map((member, index) => (
              <div key={index} className="card text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;