import React from 'react';
import { Figma, Repeat as ReactIcon, Code2, FileJson, Database, Cpu, MonitorSmartphone, PenTool, Frame, Palette, Brackets, Github, } from 'lucide-react';
import { BadgeCheck } from 'lucide-react';

function LinkedCircularSkills() {
    const icons = [
        { Icon: Figma, color: 'text-pink-500' },
        { Icon: ReactIcon, color: 'text-blue-400' },
        { Icon: Code2, color: 'text-cyan-400' },
        { Icon: Cpu, color: 'text-green-400' },
        { Icon: Database, color: 'text-purple-400' },
        { Icon: FileJson, color: 'text-yellow-400' },
        { Icon: Brackets, color: 'text-blue-300' }
    ];

    return (
        <div className=" bg-black/20 flex flex-col items-center justify-center p-4 relative overflow-hidden py-16 pb-24">
            {/* Main Text */}
            <div className="text-center mb-16 z-10">
                <h1 className="text-white text-3xl md:text-4xl mb-4">
                    These are the {' '}
                    <span className="text-gradient">tools and technologies</span> I am currently using in my projects.
                </h1>
                <p className="text-gray-300 text-lg md:text-xl">
                    I am always eager to learn and explore new technologies.
                </p>
            </div>

            {/* Top Row Icons with Connection Lines */}
            <div className="flex gap-8 mb-40 z-10 relative">
                {icons.map((IconObj, index) => (
                    <div key={index} className="relative">
                        <div className="floating-iconsLCS transition-transform hover:scale-110">
                            <IconObj.Icon size={32} className={IconObj.color} />
                        </div>
                        <div
                            className="connection-lineLCS"
                            style={{
                                height: '200px',
                                transform: `rotate(${(index - (icons.length - 1) / 2) * 10}deg)`,
                                opacity: 0.5
                            }}
                        />
                    </div>
                ))}
            </div>

            {/* Center Logo with Orbital Icons */}
            <div className="relative orbital-containerLCS">
                <div className="w-24 h-24 rounded-full bg-purple-600 center-logoLCS flex items-center justify-center">
                    <BadgeCheck className='size-16 text-primary' />
                    <span className="text-white font-bold"></span>
                </div>

                {/* Orbital Icons */}
                <div className="relative -top-14 -left-20 -translate-x-1/2 -translate-y-1/2 w-full h-full"
                    style={{ transform: 'rotateX(55deg)' }}>
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((degree, index) => (
                        <div
                            key={index}
                            className="orbital-iconLCS"
                            style={{
                                transformOrigin: 'centerLCS',
                                animation: `orbitLCS 20s linear infinite`,
                                animationDelay: `${-index * 2.5}s`
                            }}
                        >
                            <div className="bg-purple-900/50 p-3 rounded-full backdrop-blur-sm">
                                {index % 8 === 0 && <PenTool size={24} className="text-purple-400" />}
                                {index % 8 === 1 && <Frame size={24} className="text-purple-400" />}
                                {index % 8 === 2 && <Palette size={24} className="text-purple-400" />}
                                {index % 8 === 3 && <MonitorSmartphone size={24} className="text-purple-400" />}
                                {index % 8 === 4 && <Github size={24} className="text-purple-400" />}
                                {index % 8 === 5 && <Code2 size={24} className="text-purple-400" />}
                                {index % 8 === 6 && <Database size={24} className="text-purple-400" />}
                                {index % 8 === 7 && <ReactIcon size={24} className="text-purple-400" />}
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
}

export default LinkedCircularSkills;
