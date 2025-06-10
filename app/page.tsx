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
} from "lucide-react";
import Link from "next/link";
import Contact from "./contact";

export default function AdvocatePortfolio() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/advocate_icon.jpg" alt="Advocate" className="w-6 h-6" />
            <div>
              <h1 className="font-bold text-lg">Atul Gupta</h1>
              <p className="text-xs text-muted-foreground">
                Advocate, C.A. (F)
              </p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#about"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="#experience"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Experience
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>
          <Button asChild className="hidden md:inline-flex">
            <Link href="#contact">Get Consultation</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-100 h-100  flex items-center justify-center mx-auto mb-8">
              <img
                src="/advocate_icon.jpg"
                alt="Advocate"
                className="w-100 h-40 text-white"
              />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              Atul Gupta
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-4">
              Advocate & Chartered Accountant (Final)
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="secondary" className="text-sm">
                GST Specialist
              </Badge>
              <Badge variant="secondary" className="text-sm">
                Income Tax Expert
              </Badge>
              <Badge variant="secondary" className="text-sm">
                Legal Consultant
              </Badge>
              <Badge variant="secondary" className="text-sm">
                Accounting Services
              </Badge>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Providing comprehensive legal and financial solutions with over a
              decade of experience in taxation, corporate law, and accounting
              services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#contact">Schedule Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
              About Me
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-muted-foreground mb-6">
                  With extensive experience in both legal practice and financial
                  consulting, I provide comprehensive solutions for individuals
                  and businesses navigating complex legal and taxation matters.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  As a practicing advocate and chartered accountant (final), I
                  bring a unique perspective that combines legal expertise with
                  financial acumen to deliver optimal outcomes for my clients.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">10+</div>
                    <div className="text-sm text-muted-foreground">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">
                      Cases Handled
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      Qualifications
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Bachelor of Laws (LL.B)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Chartered Accountant (Final)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Bar Council Registration</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
              Legal & Financial Services
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Comprehensive legal and financial solutions tailored to meet your
              specific needs
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>GST Services</CardTitle>
                  <CardDescription>
                    Complete GST compliance, registration, returns filing, and
                    advisory services
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• GST Registration & Compliance</li>
                    <li>• Monthly/Quarterly Returns</li>
                    <li>• GST Audit & Assessment</li>
                    <li>• Input Tax Credit Optimization</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Calculator className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Income Tax</CardTitle>
                  <CardDescription>
                    Expert income tax planning, filing, and representation
                    services
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Tax Planning & Advisory</li>
                    <li>• Income Tax Returns Filing</li>
                    <li>• Tax Assessment Proceedings</li>
                    <li>• Appeals & Representations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Scale className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Legal Consultation</CardTitle>
                  <CardDescription>
                    Professional legal advice and representation across various
                    practice areas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Corporate Legal Advisory</li>
                    <li>• Contract Drafting & Review</li>
                    <li>• Litigation Support</li>
                    <li>• Compliance Management</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Accounting Services</CardTitle>
                  <CardDescription>
                    Complete accounting and bookkeeping solutions for businesses
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Financial Statement Preparation</li>
                    <li>• Bookkeeping & Accounting</li>
                    <li>• Audit & Assurance</li>
                    <li>• Financial Planning</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Business Setup</CardTitle>
                  <CardDescription>
                    End-to-end business incorporation and compliance services
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Company Registration</li>
                    <li>• Partnership Deed</li>
                    <li>• License & Permits</li>
                    <li>• Regulatory Compliance</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Advisory Services</CardTitle>
                  <CardDescription>
                    Strategic business and financial advisory for growth and
                    compliance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Business Strategy</li>
                    <li>• Risk Management</li>
                    <li>• Regulatory Advisory</li>
                    <li>• Financial Consulting</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12">
              Why Choose Me
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Knowledge</h3>
                <p className="text-muted-foreground">
                  Dual expertise in law and accounting provides comprehensive
                  solutions
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Client-Focused</h3>
                <p className="text-muted-foreground">
                  Personalized attention and tailored solutions for every client
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Timely Service</h3>
                <p className="text-muted-foreground">
                  Prompt and efficient handling of all legal and financial
                  matters
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section id="contact" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
              Get In Touch
            </h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">+91 989 7772 175</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">
                        atul.gupta.advocate@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Office Address</p>
                      <p className="text-muted-foreground">
                        55, Krishnayan Colony
                        <br />
                        Delapeer, Bareilly (U.P.)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Schedule a Consultation</CardTitle>
                  <CardDescription>
                    Get expert legal and financial advice tailored to your needs
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">First Name</label>
                      <input
                        type="text"
                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="First Name"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Last Name</label>
                      <input
                        type="text"
                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <input
                      type="email"
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Email Address"
                      autoComplete="email"
                      autoFocus
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Phone</label>
                    <input
                      type="tel"
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="+91 XXXXXXXXXX"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">
                      Service Required
                    </label>
                    <select className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20">
                      <option>Select a service</option>
                      <option>GST Services</option>
                      <option>Income Tax</option>
                      <option>Legal Consultation</option>
                      <option>Accounting Services</option>
                      <option>Business Setup</option>
                      <option>Advisory Services</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Message</label>
                    <textarea
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                      rows={4}
                      placeholder="Describe your requirements..."
                    />
                  </div>
                  <Button className="w-full">Send Message</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section> */}
      <Contact />
      {/* Footer */}
      <footer className="bg-[#010101] text-white py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                {/* <Scale className="w-6 h-6 text-black" /> */}
                <img
                  src="/advocate_icon.jpg"
                  alt="Advocate"
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-lg">Atul Gupta</h3>
                <p className="text-sm text-gray-400">Advocate, C.A. (F)</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Professional legal and financial services with integrity and
              excellence
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <span>© 2024 Atul Gupta. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
