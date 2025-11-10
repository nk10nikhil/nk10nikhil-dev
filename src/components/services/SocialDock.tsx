import React from 'react';
import Dock from './Dock';
import { Mail, Phone, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const SocialDock = () => {
  const socialItems = [
    {
      id: 'email',
      icon: <Mail className="w-6 h-6 text-white" />,
      label: 'Email',
      onClick: () => window.open('mailto:contact@webuiltu.com')
    },
    {
      id: 'phone',
      icon: <Phone className="w-6 h-6 text-white" />,
      label: 'Call',
      onClick: () => window.open('tel:+1234567890')
    },
    {
      id: 'github',
      icon: <Github className="w-6 h-6 text-white" />,
      label: 'GitHub',
      onClick: () => window.open('https://github.com', '_blank')
    },
    {
      id: 'linkedin',
      icon: <Linkedin className="w-6 h-6 text-white" />,
      label: 'LinkedIn',
      onClick: () => window.open('https://linkedin.com', '_blank')
    },
    {
      id: 'twitter',
      icon: <Twitter className="w-6 h-6 text-white" />,
      label: 'Twitter',
      onClick: () => window.open('https://twitter.com', '_blank')
    }
  ];

  return (
    <Dock 
      items={socialItems} 
      position="right" 
      className="right-4 top-1/2 transform -translate-y-1/2"
    />
  );
};

export default SocialDock;