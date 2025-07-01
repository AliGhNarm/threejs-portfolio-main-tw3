export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const myProjects = [
  {
    title: 'Real Estate Project - Coming Soon!',
    desc: 'Modern real estate web application built with TailWindCSS, AWS, React, Node.js. It provides a platform for users to search, list, book, and explore various properties, whether for sale or rent. The web-application offers a user-friendly interface, advanced search options, and a seamless user experience.',
    subdesc:
      'Built with Next.js , Node.js , React, and ... , this website combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    href: '#',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Behpardaz',
    pos: ' Web Developer',
    duration: 'May 2025 - Present',
    title: "At Behpardaz I use different technologies such as React and Restfull APIs to bring ideas to life.",
    icon: '/assets/B.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Queen\'s Health Science IT',
    pos: 'Web Developer intern',
    duration: 'March 2022 - December 2023',
    title: "At Queen's the majority of my time was spent using Vue.js to create amazing front-end visuals for  Elentra Consortium; while using PHP-laravel for backend. I worked in a professional work settings within an amazing team.",
    icon: '/assets/queensUni.jpg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'APA',
    pos: 'Intern Developer',
    duration: 'Summer of 2019',
    title: "My main tasks were done with the use of python and some of its libraries like Pandas.",
    icon: '/assets/ApaLogo.webp',
    animation: 'salute',
  },
];
