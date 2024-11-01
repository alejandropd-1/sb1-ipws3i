import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover Amazing Products
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Shop the latest trends with confidence. Quality products, exceptional service.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
            >
              Shop Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Electronics",
                image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=500",
                description: "Latest gadgets and tech accessories"
              },
              {
                title: "Fashion",
                image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=500",
                description: "Trendy clothing and accessories"
              },
              {
                title: "Home & Living",
                image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=500",
                description: "Beautiful home decor and essentials"
              }
            ].map((category, index) => (
              <div key={index} className="card hover:shadow-lg transition-shadow">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                comment: "Amazing quality products and fast shipping!",
                rating: 5
              },
              {
                name: "Michael Chen",
                comment: "Best customer service I've experienced. Will shop again!",
                rating: 5
              },
              {
                name: "Emma Davis",
                comment: "Love the variety of products available. Great prices too!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.comment}"</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;