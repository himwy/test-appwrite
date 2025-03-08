"use client";
import { Palette, Users, Cloud, Zap } from "lucide-react";

export default function LandingPage() {
  const features = [
    {
      name: "Art Management",
      description: "Organize artwork effortlessly",
      icon: Palette,
    },
    {
      name: "Team Collaboration",
      description: "Work seamlessly with your team",
      icon: Users,
    },
    {
      name: "Cloud Storage",
      description: "Access files from anywhere",
      icon: Cloud,
    },
    {
      name: "Powerful Tools",
      description: "Advanced art management tools",
      icon: Zap,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-primary/5 py-12 rounded-lg my-8">
        <div className="text-center animate-fade-up animate-once animate-duration-[1500ms]">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Manage Your Art Organisation with Ease
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            All the tools you need in one place
          </p>
          <button className="bg-primary text-white px-6 py-2 rounded-md text-base font-semibold hover:bg-primary/90 transition-colors">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 animate-fade-up animate-once animate-duration-[3000ms]">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
          Powerful Features for Your Art Organisation
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div key={feature.name} className="text-center">
              <feature.icon className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="text-lg font-semibold mb-1">{feature.name}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-b from-primary/10 to-primary/5 py-12 rounded-lg my-8 animate-fade-up animate-once animate-duration-[4500ms]">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            Ready to Transform Your Art Organisation?
          </h2>
          <p className="text-lg mb-6 text-gray-600">
            Join thousands already using our platform.
          </p>
          <button className="bg-black text-white px-6 py-2 rounded-md text-base font-semibold hover:bg-primary/90 transition-colors">
            Start Free Trial
          </button>
        </div>
      </section>
    </div>
  );
}
