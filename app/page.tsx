"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MapPin,
  Scale,
  FileText,
  Calculator,
  Users,
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Briefcase,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

export default function EnhancedAdvocatePortfolio() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const now = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });
    try {
      const templateParams = {
        name: formData.firstName,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        time: now, // ⬅️ Added time here
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      alert("Message sent successfully!");

      setFormData({
        firstName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      // console.error("Failed to send message:", error);
      alert("Something went wrong. Please try again.");
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="border-b bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50 shadow-sm"
      >
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="w-10 h-10  rounded-full flex items-center justify-center shadow-lg">
              {/* <Scale className="w-6 h-6 text-white" /> */}
              <img
                src="/advocate_icon.jpg"
                alt="Advocate"
                className="w-10 h-10"
              />
            </div>
            <div>
              <h1 className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Atul Gupta
              </h1>
              <p className="text-xs text-muted-foreground">
                Advocate, C.A. (F)
              </p>
            </div>
          </motion.div>
          <nav className="hidden md:flex items-center space-x-6">
            {["About", "Services", "Experience", "Contact"].map(
              (item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-sm font-medium hover:text-blue-600 transition-colors duration-300 relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </motion.div>
              )
            )}
          </nav>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              asChild
              className="hidden md:inline-flex bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="#contact">Get Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="py-10 lg:py-32 relative pb-10 mt-[-40px]">
        {/* Animated gradient background */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="w-full h-full absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-indigo-600/10"
            animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>

        <div className="container flex flex-col xl:flex-row items-center justify-between gap-10 px-4 lg:px-6 relative mx-auto">
          {/* Left: Text Content */}
          <motion.div
            className="max-w-4xl text-center  ml-[10%] xl:text-left flex-1"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Image for small screens */}
            <motion.div
              variants={fadeInUp}
              className="w-[65%] max-w-[300px] md:w-[40%] h-auto flex items-center justify-center mx-auto mt-2 mb-8 xl:hidden"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/profile_top.jpg"
                alt="Advocate"
                className="w-full h-auto rounded-xl shadow-md"
              />
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl lg:text-7xl font-bold tracking-tight pb-10 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
            >
              Atul Gupta
            </motion.h1>

            {/* Title */}
            <motion.p
              variants={fadeInUp}
              className="text-2xl lg:text-2xl text-slate-600 mb-6 font-medium"
            >
              Advocate & C.A. (Final)
            </motion.p>

            {/* Badges */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center xl:justify-start gap-3 mb-8"
            >
              {[
                { text: "GST Specialist", color: "from-blue-500 to-cyan-500" },
                {
                  text: "Income Tax Expert",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  text: "Accounting Services",
                  color: "from-indigo-500 to-blue-500",
                },
              ].map((badge, index) => (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.8 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      const section = document.querySelector("#services");
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    <Badge
                      className={`text-sm px-4 py-2 bg-gradient-to-r ${badge.color} text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      {badge.text}
                    </Badge>
                  </a>
                </motion.div>
              ))}
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto xl:mx-0 leading-relaxed"
            >
              Providing comprehensive legal and financial solutions with over a
              decade of experience in taxation, corporate law, and accounting
              services.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center xl:justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <Link href="#contact" className="flex items-center gap-2">
                    Schedule Consultation
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
                >
                  <Link href="#services">View Services</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right: Image for large screens only */}
          <motion.div
            className="hidden xl:block flex-shrink-0 mr-[10%]"
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: "-10%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <img
              src="/profile_top.jpg"
              alt="Profile"
              className="w-[300px] h-auto rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              {
                number: "15+",
                label: "Years Experience",
                icon: Clock,
                color: "from-blue-500 to-cyan-500",
              },
              {
                number: "100+",
                label: "Cases Handled",
                icon: Briefcase,
                color: "from-purple-500 to-pink-500",
              },
              {
                number: "98%",
                label: "Success Rate",
                icon: Star,
                color: "from-green-500 to-emerald-500",
              },
              {
                number: "24/7",
                label: "Support",
                icon: Users,
                color: "from-orange-500 to-red-500",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-br from-white to-blue-50/50"
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="space-y-6">
                  <p className="text-lg text-slate-600 leading-relaxed">
                    With extensive experience in both Income Tax and financial
                    consulting, we provide comprehensive solutions for
                    individuals and corporates navigating complex legal and
                    taxation matters.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed pb-10 mb-2">
                    As a practicing advocate, we bring a unique perspective that
                    combines legal expertise with financial acumen to deliver
                    optimal outcomes for our clients.
                  </p>
                  <motion.div
                    className="grid grid-cols-2 gap-6 mt-8"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    {[
                      {
                        number: "15+",
                        label: "Years Experience",
                        color: "from-blue-500 to-cyan-500",
                      },
                      {
                        number: "100+",
                        label: "Cases Handled",
                        color: "from-purple-500 to-pink-500",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={item.label}
                        variants={fadeInUp}
                        className="text-center p-6 mb-10 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
                        whileHover={{ y: -5 }}
                      >
                        <div
                          className={`text-3xl font-bold mb-5 bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2`}
                        >
                          {item.number}
                        </div>
                        <div className="text-sm text-slate-600 font-medium">
                          {item.label}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/50">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                      Qualifications
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      "Bachelor of Laws (LL.B)",
                      "Chartered Accountant (Final)",
                      "Member of Nainital Bar Council",
                    ].map((qualification, index) => (
                      <motion.div
                        key={qualification}
                        className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="font-medium text-slate-700">
                          {qualification}
                        </span>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50"
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 pb-5 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Legal & Financial Services
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Comprehensive legal and financial solutions tailored to meet
                your specific needs with excellence and integrity
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: FileText,
                  title: "GST Services",
                  description:
                    "Complete GST compliance, registration, returns filing, and advisory services",
                  features: [
                    "GST Registration & Compliance",
                    "Monthly/Quarterly Returns",
                    "GST Audit & Assessment",
                    "Input Tax Credit Optimization",
                  ],
                  color: "from-blue-500 to-cyan-500",
                  bgColor: "from-blue-50 to-cyan-50",
                },
                {
                  icon: Calculator,
                  title: "Income Tax",
                  description:
                    "Expert income tax planning, filing, and representation services",
                  features: [
                    "Tax Planning & Advisory",
                    "Income Tax Returns Filing",
                    "Tax Assessment Proceedings",
                    "Appeals & Representations",
                  ],
                  color: "from-purple-500 to-pink-500",
                  bgColor: "from-purple-50 to-pink-50",
                },
                {
                  icon: Users,
                  title: "Accounting Services",
                  description:
                    "Complete accounting and bookkeeping solutions for businesses",
                  features: [
                    "Financial Statement Preparation",
                    "Bookkeeping & Accounting",
                    "Audit & Assurance",
                    "Financial Planning",
                  ],
                  color: "from-green-500 to-emerald-500",
                  bgColor: "from-green-50 to-emerald-50",
                },
                 {
                  icon: Scale,
                  title: "Corporate Legal Consultation",
                  description:
                    "Professional legal advice and representation across various practice areas",
                  features: [
                    "Corporate Legal Advisory",
                    "Contract Drafting & Review",
                    "Litigation Support",
                    "Compliance Management",
                  ],
                  color: "from-indigo-500 to-blue-500",
                  bgColor: "from-indigo-50 to-blue-50",
                },
               
                {
                  icon: Briefcase,
                  title: "Business Setup",
                  description:
                    "End-to-end business incorporation and compliance services",
                  features: [
                    "Company Registration",
                    "Partnership Deed",
                    "License & Permits",
                    "Regulatory Compliance",
                  ],
                  color: "from-orange-500 to-red-500",
                  bgColor: "from-orange-50 to-red-50",
                },
                {
                  icon: Clock,
                  title: "Advisory Services",
                  description:
                    "Strategic business and financial advisory for growth and compliance",
                  features: [
                    "Business Strategy",
                    "Risk Management",
                    "Regulatory Advisory",
                    "Financial Consulting",
                  ],
                  color: "from-teal-500 to-cyan-500",
                  bgColor: "from-teal-50 to-cyan-50",
                },
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={fadeInUp}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Card
                    className={`h-full hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br ${service.bgColor} group  relative`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <CardHeader className="relative z-10">
                      <div
                        className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                      >
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-base text-slate-600 leading-relaxed group-hover:text-slate-700">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <ul className="space-y-4">
                        {service.features.map((feature, featureIndex) => (
                          <motion.li
                            key={feature}
                            className="flex items-start gap-3 text-sm text-slate-600 group-hover:text-slate-700 transition-colors"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: featureIndex * 0.1,
                              duration: 0.3,
                            }}
                            viewport={{ once: true }}
                          >
                            <div
                              className={`w-1.5 h-1.5 text-lg bg-gradient-to-r ${service.color} rounded-full mt-2 flex-shrink-0`}
                            ></div>
                            <span
                              className={`text-base font-medium bg-clip-text text-transparent bg-gradient-to-r ${service.color}`}
                            >
                              {feature}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 bg-gradient-to-br from-white to-purple-50/30"
      >
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 pb-5 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Why Choose Me
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Experience the difference of working with a dedicated professional
              who combines expertise with personalized service
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Award,
                title: "Expert Knowledge",
                description:
                  "Dual expertise in law and accounting provides comprehensive solutions for all your needs",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Users,
                title: "Client-Focused",
                description:
                  "Personalized attention and tailored solutions for every client with dedicated support",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: Clock,
                title: "Timely Service",
                description:
                  "Prompt and efficient handling of all legal and financial matters with 24/7 availability",
                color: "from-green-500 to-emerald-500",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="text-center group"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}
                >
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800 group-hover:text-slate-900 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-slate-50 to-blue-50"
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Ready to discuss your legal and financial needs? Let's start a
                conversation
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-8 text-slate-800">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: Phone,
                      title: "Phone",
                      content: "+91 989 777 2175",
                      color: "from-blue-500 to-cyan-500",
                    },
                    {
                      icon: Mail,
                      title: "Email",
                      content: "atulguptatax@gmail.com",
                      color: "from-purple-500 to-pink-500",
                    },
                    {
                      icon: MapPin,
                      title: "Office Address",
                      content:
                        "55, Krishnayan Colony\nDelapeer, Bareilly (U.P.)",
                      color: "from-green-500 to-emerald-500",
                    },
                  ].map((contact, index) => (
                    <motion.div
                      key={contact.title}
                      className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                    >
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${contact.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 flex-shrink-0`}
                      >
                        <contact.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800 mb-1">
                          {contact.title}
                        </p>
                        <p className="text-slate-600 whitespace-pre-line">
                          {contact.content}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-blue-50/50">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5"></div>
                  <CardHeader className="relative z-10">
                    <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Schedule a Consultation
                    </CardTitle>
                    <CardDescription className="text-slate-600">
                      Get expert legal and financial advice tailored to your
                      needs
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 relative z-10 px-2 sm:px-4 md:px-6 lg:px-8 ">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name */}
                      <div className="mb-[-15px]">
                        <label className="text-base font-semibold text-slate-700 mb-2 block">
                          Name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-5 py-3.5 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 bg-white/90 shadow-sm transition-all duration-300"
                          placeholder="Your name"
                          required
                        />
                      </div>

                      {/* Email */}
                      <div className="mb-[-15px]">
                        <label className="text-base font-semibold text-slate-700 mb-2 block">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-5 py-3.5 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 bg-white/90 shadow-sm transition-all duration-300"
                          placeholder="abc@gmail.com"
                          required
                        />
                      </div>

                      {/* Phone */}
                      <div className="mb-[-15px]">
                        <label className="text-base font-semibold text-slate-700 mb-2 block">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-5 py-3.5 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 bg-white/90 shadow-sm transition-all duration-300"
                          placeholder="+91 XXXXXXXXXX"
                        />
                      </div>

                      {/* Service Required */}
                      <div className="mb-[-15px]">
                        <label className="text-base font-semibold text-slate-700 mb-2 block">
                          Service Required
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-5 py-3.5 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 bg-white/90 shadow-sm transition-all duration-300"
                          required
                        >
                          <option value="">Select a service</option>
                          <option value="GST Services">GST Services</option>
                          <option value="Income Tax">Income Tax</option>
                          <option value="Legal Consultation">
                            Legal Consultation
                          </option>
                          <option value="Accounting Services">
                            Accounting Services
                          </option>
                          <option value="Business Setup">Business Setup</option>
                          <option value="Advisory Services">
                            Advisory Services
                          </option>
                        </select>
                      </div>

                      {/* Query */}
                      <div className="mb-[-15px]">
                        <label className="text-base font-semibold text-slate-700 mb-2 block">
                          Query
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-5 py-3.5 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 bg-white/90 shadow-sm resize-none transition-all duration-300"
                          rows={5}
                          placeholder="Describe your query or concern..."
                          required
                        />
                      </div>

                      {/* Submit Button */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <Button
                          type="submit"
                          className="w-full py-3.5 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
                        >
                          Send Query
                        </Button>
                      </motion.div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-16 relative ">
        <div className='absolute inset-0 bg-[url(&apos;data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fillRule="evenodd"%3E%3Cg fill="%23ffffff" fillOpacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&apos;)] opacity-20'></div>
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                <img
                  src="/advocate_icon.jpg"
                  alt="Advocate"
                  className="w-12 h-12"
                />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Atul Gupta
                </h3>
                <p className="text-slate-300">Advocate, C.A. (F)</p>
              </div>
            </div>
            <p className="text-slate-300 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
              Professional legal and financial services with integrity,
              excellence, and unwavering commitment to client success
            </p>
            <div className="flex justify-center items-center space-x-8 text-sm text-slate-400">
              <span>© 2024 Atul Gupta. All rights reserved.</span>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
