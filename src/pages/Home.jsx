import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  Building,
  BarChart3,
  Clock,
  Shield,
  Zap,
} from "lucide-react";

const Home = ({ onGetStartedClick }) => {
  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Smart Candidate Management",
      description: "AI-powered candidate matching and automated screening",
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "Multi-Company Support",
      description: "Manage multiple companies and departments seamlessly",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Advanced Analytics",
      description: "Real-time insights and performance metrics",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Faster Hiring",
      description: "Reduce time-to-hire by up to 60%",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure & Compliant",
      description: "Enterprise-grade security and GDPR compliance",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Automated Workflows",
      description: "Streamline your entire recruitment process",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Centered */}
      <section className="relative bg-gradient-to-br from-[#181ed4] via-[#3a47d5] to-[#6a82fb] text-white min-h-[60vh] py-24 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            <span className="block">
              Simplify <span className="text-[#ffd700]">Hiring</span> with
            </span>
            <span className="block">
              <span className="text-[#ffd700]">RMS</span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl">
            Your complete solution for fast, efficient, and organized
            recruitment.
          </p>
          <button
            onClick={onGetStartedClick}
            className="inline-flex items-center gap-2 bg-white text-[#181ed4] font-bold py-4 px-10 rounded-xl text-lg shadow-lg hover:bg-[#181ed4] hover:text-white transition-all duration-300"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Features Section - Left Aligned Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 w-full md:w-3/4 text-left"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose RMS?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Built for modern HR teams who want to hire faster, smarter, and
              more efficiently.
            </p>
          </motion.div>
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-left"
                >
                  <div className="bg-[#0026c0] w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Centered */}
      <section className="py-20 bg-[#0026c0] text-white">
        <div className="container px-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Hiring?
            </h2>
            <p className="text-xl mb-8 max-w-2xl text-white/90">
              Join thousands of companies already using RMS to hire better
              talent faster.
            </p>
            <button
              onClick={onGetStartedClick}
              className="bg-white text-[#0026c0] font-bold py-4 px-8 rounded-xl text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
