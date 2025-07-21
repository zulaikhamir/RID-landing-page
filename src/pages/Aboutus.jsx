import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Award,
  Globe,
  Zap,
  Heart,
  Target,
  CheckCircle,
  Mail,
  ArrowRight,
  Shield,
} from "lucide-react";

const AboutUs = ({ onGetStartedClick }) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleContactChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setFormData({ name: "", email: "", company: "", message: "" });
    setTimeout(() => setSent(false), 2500);
    setTimeout(() => setIsContactModalOpen(false), 2600);
  };

  const values = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Automation First",
      description:
        "We prioritize intelligent automation to eliminate repetitive manual infrastructure tasks and save time.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Precision & Consistency",
      description:
        "Infrastructure should never break due to human error. RID ensures repeatable, reliable deployments every time.",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Scalable by Design",
      description:
        "Built for both small teams and large enterprises, RID adapts and scales as your infrastructure grows.",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security & Control",
      description:
        "Security is baked into every layer — from VPC config to EC2 access — with no compromise on control.",
      color: "from-red-500 to-pink-500",
    },
  ];

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "500+", label: "Companies Served" },
    { number: "50K+", label: "Successful Hires" },
    { number: "99%", label: "Client Satisfaction" },
  ];

  const team = [
    {
      name: "Dr. Sarah Williams",
      role: "CEO & Founder",
      bio: "Former VP of Talent at Fortune 500 companies, PhD in Industrial Psychology",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b332c467?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Former Lead Engineer at Google, 15+ years in enterprise software development",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Product",
      bio: "Product strategy expert with deep understanding of HR workflows and user experience",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    },
  ];

  const milestones = [
    {
      year: "2013",
      title: "Company Founded",
      description:
        "JIT Global Info Systems established with a vision to transform IT solutions",
    },
    {
      year: "2018",
      title: "RMS Launch",
      description: "Launched our flagship Recruitment Management System",
    },
    {
      year: "2020",
      title: "AI Integration",
      description: "Introduced AI-powered candidate matching and screening",
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Serving 500+ companies across 25+ countries",
    },
  ];

  // Compact modal style variables
  const modalPadding = "p-4 sm:p-6";
  const inputClass =
    "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-900 placeholder-gray-400";
  const buttonClass =
    "w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center text-base";

  // Add bounce animation for success message
  const bounceAnim = {
    initial: { opacity: 0, y: 10, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1.1 },
    exit: { opacity: 0, y: 10, scale: 0.95 },
    transition: { type: "spring", stiffness: 400, damping: 10, duration: 0.5 },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#181ed4] via-[#3a47d5] to-[#6a82fb] text-white min-h-[60vh] py-24 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            <span className="block">
              About{" "}
              <span className="text-[#ffd700]">Rapid Infra Deployment</span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl">
            RID is built to revolutionize infrastructure management by
            automating complex DevOps tasks, minimizing errors, and accelerating
            cloud deployments with efficiency and precision.
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

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#181ed4] mb-2">
                  {stat.number}
                </div>
                <div className="text-[#181ed4] font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#181ed4] mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-[#181ed4] leading-relaxed">
                We're committed to helping businesses modernize their
                infrastructure operations, enforce consistent security
                practices, and achieve scalable, cost-effective cloud
                automation. Our RID platform reflects our mission to simplify
                infrastructure deployment and empower teams to move faster with
                confidence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-[#181ed4] mb-4">
                What We Do
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Cloud Infrastructure Services
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Cybersecurity Solutions
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Data Engineering Services
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Application Development
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Digital Transformation
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Recruitment Management Systems
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#181ed4] mb-4">
              Our Values
            </h2>
            <p className="text-xl text-[#181ed4] max-w-3xl mx-auto">
              The principles that guide everything we do and every solution we
              create.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-[#181ed4] rounded-2xl p-8 text-white text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center text-[#181ed4] mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-white">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-[#181ed4]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Key milestones in our mission to transform recruitment technology.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`bg-white rounded-2xl p-6 shadow-lg max-w-md ${
                      index % 2 === 0 ? "mr-4" : "ml-4"
                    }`}
                  >
                    <div className="flex items-center mb-4">
                      <div className="bg-[#181ed4] text-white font-bold py-1 px-3 rounded-full text-sm">
                        {milestone.year}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#181ed4] mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-[#181ed4]">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#181ed4] mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-[#181ed4] max-w-3xl mx-auto">
              Meet the visionaries behind RMS and our innovative recruitment
              solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-[#181ed4] mb-2">
                  {member.name}
                </h3>
                <p className="text-[#181ed4] font-medium mb-4">{member.role}</p>
                <p className="text-[#181ed4] text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#181ed4] text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Join the companies that trust JIT Global Info Systems for their
              technology needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-white text-[#181ed4] font-bold py-4 px-8 rounded-xl text-lg hover:bg-[#181ed4] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                onClick={() => setIsContactModalOpen(true)}
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </button>
              <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl text-lg hover:bg-white hover:text-[#181ed4] transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </motion.div>
          {/* Animated Contact Modal */}
          <AnimatePresence>
            {isContactModalOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
                onClick={() => setIsContactModalOpen(false)}
              >
                <motion.div
                  initial={{ scale: 0.95, y: 40, opacity: 0 }}
                  animate={{ scale: 1, y: 0, opacity: 1 }}
                  exit={{ scale: 0.95, y: 40, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`bg-white rounded-2xl shadow-2xl ${modalPadding} m-2 max-w-xs w-full relative`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setIsContactModalOpen(false)}
                    className="absolute top-4 right-4 text-slate-500 hover:text-slate-800 transition-colors"
                  >
                    ×
                  </button>
                  <div className="text-center mb-4">
                    <h2 className="text-2xl font-bold text-slate-800 mb-1">
                      Send us a Message
                    </h2>
                  </div>
                  <form onSubmit={handleContactSubmit} className="space-y-3">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleContactChange}
                        required
                        className={inputClass}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleContactChange}
                        required
                        className={inputClass}
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleContactChange}
                        className={inputClass}
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleContactChange}
                        required
                        rows={4}
                        className={inputClass + " resize-none"}
                        placeholder="Tell us about your requirements..."
                      />
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className={buttonClass}
                    >
                      Send Message
                    </motion.button>
                  </form>
                  <AnimatePresence>
                    {sent && (
                      <motion.div
                        {...bounceAnim}
                        className="mt-4 text-green-600 text-center font-semibold text-sm"
                      >
                        Message sent successfully!
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
