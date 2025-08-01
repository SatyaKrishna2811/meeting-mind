"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Settings,
  FileText,
  BarChart3,
  Shield,
  Bookmark,
  Edit3,
  UserCircle,
  LayoutDashboard,
  ArrowLeft,
  Zap,
  Construction,
  Bell,
  Mail,
  Calendar,
} from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { AnimatedBackground } from "@/components/animated-background"
import gsap from "gsap"

export default function ComingSoonPage() {
  const headerRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement[]>([])
  const timelineRef = useRef<HTMLDivElement>(null)

  const upcomingFeatures = [
    {
      icon: UserCircle,
      title: "User Authentication",
      description: "Secure login and registration with multi-factor authentication",
      category: "Security",
      priority: "High",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: LayoutDashboard,
      title: "Personal Dashboard",
      description: "Centralized view of all your meetings, analytics, and recent activity",
      category: "Core",
      priority: "High",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Bookmark,
      title: "Saved Meetings Library",
      description: "Organize and search through your processed meeting recordings",
      category: "Organization",
      priority: "High",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Edit3,
      title: "Advanced Editing Workbench",
      description: "Powerful transcript editor with collaborative features and version control",
      category: "Editing",
      priority: "Medium",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: FileText,
      title: "Template Library",
      description: "Pre-built templates for different meeting types and industries",
      category: "Templates",
      priority: "Medium",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share meetings, add comments, and collaborate with team members",
      category: "Collaboration",
      priority: "Medium",
      gradient: "from-teal-500 to-cyan-500",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Deep insights into meeting patterns, speaker analytics, and productivity metrics",
      category: "Analytics",
      priority: "Low",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Settings,
      title: "Workspace Management",
      description: "Admin controls for team settings, billing, and user management",
      category: "Admin",
      priority: "Low",
      gradient: "from-rose-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 compliance, audit logs, and advanced security controls",
      category: "Security",
      priority: "Low",
      gradient: "from-violet-500 to-purple-500",
    },
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-500/20 text-red-300 border-red-500/30"
      case "Medium":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
      case "Low":
        return "bg-green-500/20 text-green-300 border-green-500/30"
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30"
    }
  }

  useEffect(() => {
    // Header animation
    if (headerRef.current) {
      gsap.fromTo(headerRef.current, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power2.out" })
    }

    // Features animation
    if (featuresRef.current.length) {
      gsap.fromTo(
        featuresRef.current,
        { y: 100, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          delay: 0.3,
        },
      )
    }

    // Timeline animation
    if (timelineRef.current) {
      gsap.fromTo(
        timelineRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.8 },
      )
    }
  }, [])

  return (
    <div className="relative min-h-screen flex flex-col">
      <AnimatedBackground />
      <Navigation />
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-12 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <Construction className="h-24 w-24 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Coming Soon</h1>
            <p className="text-xl text-gray-600 mb-8">
              We're working hard to bring you amazing new features. Stay tuned for updates!
            </p>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 justify-center">
                <Bell className="h-5 w-5 text-blue-600" />
                Get Notified
              </CardTitle>
              <CardDescription>Be the first to know when new features are available</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Mail className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Email Updates</h3>
                  <p className="text-sm text-gray-600">Get notified via email</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <Bell className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Push Notifications</h3>
                  <p className="text-sm text-gray-600">Real-time updates</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Calendar className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Release Calendar</h3>
                  <p className="text-sm text-gray-600">Track upcoming features</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Link href="/sessions">Try Current Features</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>

          {/* Current Features */}
          <Card className="mb-12 border-2 border-green-500/30 bg-black/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-white">
                <Zap className="w-6 h-6 text-green-400" />
                <span>Available Now</span>
              </CardTitle>
              <CardDescription className="text-white/70">Core features that are ready to use today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Audio Upload & Processing",
                  "Multi-Language Support",
                  "AI-Powered Transcription",
                  "Intelligent Summaries",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20"
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="font-medium text-white">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Features */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-white">Roadmap & Upcoming Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingFeatures.map((feature, index) => (
                <Card
                  key={index}
                  ref={(el) => {
                    if (el) featuresRef.current[index] = el
                  }}
                  className="relative overflow-hidden bg-black/20 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}
                  />
                  <CardHeader className="relative">
                    <div className="flex items-start justify-between">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${feature.gradient} bg-opacity-20`}>
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <Badge className={getPriorityColor(feature.priority)}>{feature.priority}</Badge>
                    </div>
                    <CardTitle className="text-lg text-white group-hover:text-white/90 transition-colors">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-white/70 group-hover:text-white/80 transition-colors">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <Badge variant="outline" className="text-xs bg-white/5 text-white/80 border-white/20">
                      {feature.category}
                    </Badge>
                  </CardContent>
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full"></div>
                </Card>
              ))}
            </div>
          </div>

          {/* Development Timeline */}
          <Card ref={timelineRef} className="bg-black/20 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Development Timeline</CardTitle>
              <CardDescription className="text-white/70">
                Our planned release schedule for upcoming features
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    phase: "Phase 1 - Core Platform",
                    description: "User authentication, dashboard, and saved meetings",
                    color: "red-500",
                    priority: "High Priority",
                  },
                  {
                    phase: "Phase 2 - Collaboration",
                    description: "Advanced editing, templates, and team features",
                    color: "yellow-500",
                    priority: "Medium Priority",
                  },
                  {
                    phase: "Phase 3 - Enterprise",
                    description: "Advanced analytics, admin controls, and enterprise security",
                    color: "green-500",
                    priority: "Future",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className={`w-4 h-4 bg-${item.color} rounded-full animate-pulse`} />
                    <div className="flex-1">
                      <h4 className="font-medium text-white">{item.phase}</h4>
                      <p className="text-sm text-white/70">{item.description}</p>
                    </div>
                    <Badge
                      className={`bg-${item.color}/20 text-${item.color.split("-")[0]}-300 border-${item.color}/30`}
                    >
                      {item.priority}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
