
import { link } from 'fs';
import React from 'react';

const Clients = () => {
  // This would normally be images of actual client logos
  const clientLogos = [
    { name: 'Lenovo', path: './lenovo.png', link: "https://www.lenovo.com/in/en/" },
    { name: 'PW', path: './pw.jpg', link: 'https://www.pw.live/' },
    { name: 'Jeera', path: './jeera.png', link: 'https://banarasijeera.in/' },
    { name: 'Sundrop', path: './sundrop.png', link: 'https://www.sundropfoods.com/' },
    { name: 'Bisleri', path: './bisleri.png', link: 'https://www.bisleri.com/' },
    { name: 'RedBull', path: './redbull.jpg', link: 'https://www.redbull.com/in-en/' },
    { name: 'Oggy Travels', path: './oggy.png', link: 'https://oggyholidays.com/' },
  ];

  return (
    <section className="py-10 px-0 md:px-4 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05]">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '10px 10px',
        }}></div>
      </div>
      <div className="container mx-auto">
        <div className="text-center mb-4 reveal-on-scroll">
          <p className="font-medium mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">Trusted by Industry Leaders</p>
          <h3 className="text-4xl md:text-3xl font-bold text-gray-400">Our Valued Partners</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1 items-center">
          {clientLogos.map((client, index) => (
            <a
              key={index}
              className="flex items-center justify-center reveal-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
              href={client.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={client.path} alt={client.name} className={`${client.name === 'Oggy Travels' ? 'scale-100' : 'scale-50'}`} />
            </a>

          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
