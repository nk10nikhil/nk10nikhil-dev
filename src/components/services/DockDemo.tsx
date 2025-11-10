import React from 'react';
import Dock from './Dock';
import { 
  Home, 
  User, 
  Settings, 
  Mail, 
  Phone, 
  FileText,
  Github,
  Linkedin,
  Twitter
} from 'lucide-react';

const DockDemo = () => {
  // Example dock items for navigation
  const navigationItems = [
    {
      id: 'home',
      icon: <Home className="w-8 h-8 text-white" />,
      label: 'Home',
      onClick: () => {
        document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'services',
      icon: <FileText className="w-8 h-8 text-white" />,
      label: 'Services',
      onClick: () => {
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'about',
      icon: <User className="w-8 h-8 text-white" />,
      label: 'About',
      onClick: () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'contact',
      icon: <Mail className="w-8 h-8 text-white" />,
      label: 'Contact',
      onClick: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  ];

  // Example dock items for social media
  const socialItems = [
    {
      id: 'github',
      icon: <Github className="w-8 h-8 text-white" />,
      label: 'GitHub',
      onClick: () => window.open('https://github.com', '_blank')
    },
    {
      id: 'linkedin',
      icon: <Linkedin className="w-8 h-8 text-white" />,
      label: 'LinkedIn',
      onClick: () => window.open('https://linkedin.com', '_blank')
    },
    {
      id: 'twitter',
      icon: <Twitter className="w-8 h-8 text-white" />,
      label: 'Twitter',
      onClick: () => window.open('https://twitter.com', '_blank')
    }
  ];

  // Example dock items for tools
  const toolItems = [
    {
      id: 'phone',
      icon: <Phone className="w-8 h-8 text-white" />,
      label: 'Call',
      onClick: () => window.open('tel:+1234567890')
    },
    {
      id: 'email',
      icon: <Mail className="w-8 h-8 text-white" />,
      label: 'Email',
      onClick: () => window.open('mailto:contact@example.com')
    },
    {
      id: 'settings',
      icon: <Settings className="w-8 h-8 text-white" />,
      label: 'Settings',
      onClick: () => console.log('Settings clicked')
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
      {/* Main Navigation Dock - Bottom */}
      <Dock 
        items={navigationItems} 
        position="bottom" 
        className="bottom-4"
      />

      {/* Social Media Dock - Left */}
      <Dock 
        items={socialItems} 
        position="left" 
        className="left-4 top-1/2 transform -translate-y-1/2"
      />

      {/* Tools Dock - Right */}
      <Dock 
        items={toolItems} 
        position="right" 
        className="right-4 top-1/2 transform -translate-y-1/2"
      />

      {/* Demo content */}
      <div className="container mx-auto px-4 py-20">
        <div id="hero" className="text-center text-white mb-20">
          <h1 className="text-5xl font-bold mb-4">Dock Component Demo</h1>
          <p className="text-xl opacity-80">
            Hover over the docks to see the smooth animations in action
          </p>
        </div>

        <div id="services" className="text-center text-white mb-20">
          <h2 className="text-3xl font-bold mb-4">Services Section</h2>
          <p className="text-lg opacity-80">
            This demonstrates how the dock can be used for navigation
          </p>
        </div>

        <div id="about" className="text-center text-white mb-20">
          <h2 className="text-3xl font-bold mb-4">About Section</h2>
          <p className="text-lg opacity-80">
            The dock provides smooth scaling animations on hover
          </p>
        </div>

        <div id="contact" className="text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Contact Section</h2>
          <p className="text-lg opacity-80">
            Use the side docks for quick actions and social links
          </p>
        </div>
      </div>
    </div>
  );
};

export default DockDemo;