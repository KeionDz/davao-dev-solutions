"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Twitter,
  Code,
  Palette,
  Zap,
  Target,
  Lightbulb,
  Moon,
  Sun,
} from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="h-9 w-9 px-0"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

export default function TeamPortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">Davao Devs Solutions</div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="#about"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="#team"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Team
              </Link>
              <Link
                href="#services"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Services
              </Link>
              <Link
                href="#portfolio"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="#contact"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Contact
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Building the Future,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                One Project at a Time
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              We're a passionate team of creators, developers, and innovators working together to build exceptional
              digital experiences and grow into tomorrow's leading company.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                View Our Work <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're not just a team – we're dreamers, builders, and problem solvers united by a shared vision of
              creating something extraordinary.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  To deliver innovative solutions that exceed expectations while building lasting relationships with our
                  clients and community.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Our Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  We combine creativity with technical expertise, ensuring every project is both beautiful and
                  functional.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Zap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Our Future</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Building towards becoming a recognized company that shapes the digital landscape through innovation
                  and excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">The talented individuals behind our success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Avatar className="h-24 w-24 mx-auto mb-4">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" />
                  <AvatarFallback>AS</AvatarFallback>
                </Avatar>
                <CardTitle>Angelo Palpal-latoc</CardTitle>
                <CardDescription>Lead Developer & Co-Founder</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Full-stack developer with 100+ years of experience in c++, MSSQL, and cloud technologies.
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  <Badge variant="secondary">C++</Badge>
                  <Badge variant="secondary">MSSQL</Badge>
                  <Badge variant="secondary">Miho</Badge>
                </div>
                <div className="flex justify-center space-x-2">
                  <Button size="sm" variant="ghost">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Avatar className="h-24 w-24 mx-auto mb-4">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" />
                  <AvatarFallback>MJ</AvatarFallback>
                </Avatar>
                <CardTitle>Ian je Nierre</CardTitle>
                <CardDescription>UI/UX Designer & Co-Founder</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Creative designer passionate about user experience and creating beautiful, intuitive interfaces.
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  <Badge variant="secondary">Figma</Badge>
                  <Badge variant="secondary">React.js</Badge>
                  <Badge variant="secondary">Prototyping</Badge>
                </div>
                <div className="flex justify-center space-x-2">
                  <Button size="sm" variant="ghost">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Avatar className="h-24 w-24 mx-auto mb-4">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" />
                  <AvatarFallback>DL</AvatarFallback>
                </Avatar>
                <CardTitle>Juliane Kyle Dimzon</CardTitle>
                <CardDescription>Backend Developer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Backend specialist focused on scalable architecture, databases, and API development.
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">React.js</Badge>
                </div>
                <div className="flex justify-center space-x-2">
                  <Button size="sm" variant="ghost">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">What we can do for you</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Code className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Web Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Custom web applications built with modern technologies like React, Next.js, and Node.js.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Palette className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>UI/UX Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Beautiful, user-centered designs that provide exceptional user experiences across all devices.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Performance Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Speed up your applications and improve user engagement with our optimization expertise.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Work</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Recent projects we're proud of</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-purple-400 to-pink-400">
                <img
                  src="https://play-lh.googleusercontent.com/emWyma9S8bgKJgbKHzLHq-t1r6U6pqX5iAIquxebFAC-ydWOXX0iPgBkG8daDk6Gjko=w240-h480-rw"
                  alt="ByaheDVO"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>ByaheDVO</CardTitle>
                <CardDescription>A rule based chatbot for routes navigation within Davao City utilizing Dialogflow API and Google Maps </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Flutter</Badge>
                  <Badge variant="outline">Firebase</Badge>
                </div>
                <a
                  href="https://play.google.com/store/apps/details?id=com.byaheDVO_Navigation.byahe_dvo&pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">
                    View Project <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </a>

              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-green-400 to-teal-400"></div>
              <CardHeader>
                <CardTitle>---</CardTitle>
                <CardDescription>---</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                  <Badge variant="outline">Tailwind</Badge>
                </div>
                <Button variant="outline" size="sm">
                  View Project <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-orange-400 to-red-400"></div>
              <CardHeader>
                <CardTitle>---</CardTitle>
                <CardDescription>---</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">D3.js</Badge>
                  <Badge variant="outline">Python</Badge>
                </div>
                <Button variant="outline" size="sm">
                  View Project <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Let's Work Together</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Ready to bring your ideas to life? Get in touch with us.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-600 dark:text-gray-300">davaodevs@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-600 dark:text-gray-300">Davao City, Davao Del Sur, Philippines</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <Button size="sm" variant="outline">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Twitter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>We'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Email</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Subject</label>
                  <Input placeholder="Project inquiry" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Message</label>
                  <Textarea placeholder="Tell us about your project..." rows={4} />
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Send Message</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 dark:bg-gray-950 text-white">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold mb-4">Davao Devs Solution</div>
          <p className="text-gray-400 mb-4">Building the future, one project at a time.</p>
          <p className="text-gray-500 text-sm">© 2024 Davao Devs Solution. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
