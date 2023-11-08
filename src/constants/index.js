import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    taskApi,
    eComerceCoffe ,
    bloc,
    ecommerceDjango,
    jobit,
    tripguide,
    threejs,
    django,
    starkeFit,
    travelWeb,
    cardProductJs,
    DoubleClickHeart,
    travelReact,
    dragDropJs,
    passwordValidation,
    searchBox,
    notificacionMesseger,
    dashboardReact,
    galleryDjango,
    RandomPasswordGenerator 
  } from "../assets";
  
  export const navLinks = [
    {
      id: "Acerca de mi",
      title: "Acerca de mi",
    },
    {
      id: "Trabajos",
      title: "Trabajos",
    },
    {
      id: "Contacto",
      title: "Contacto",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Web responsive",
      icon: mobile,
    },
    {
      title: "Backend Developer -Django",
      icon: backend,
    },
  
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
  
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },

    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  
    {
      name: "django",
      icon: django,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Ecommerce con Django/Js",
      description:
        "Desarrolle un Ecommercer con Django y javascrip. Contiene Login, register, y se puede comprar sin estar loeago. Implemente la app de Paypal.",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
      
        {
          name: "django",
          color: "pink-text-gradient",
        },
        {
          name: "Boostrap",
          color: "green-text-gradient",
        },
      ],
      image: ecommerceDjango ,
      source_code_link: "https://github.com/francodavid666/ecommerceDjango2",
      source_code_link2: "https://ecommerce1.up.railway.app",
    },
    {
      name: "Gallery Photo Album Django",
      description:
        "Desarrolle un albun de fotos con Django. Si quieres puedes subir fotos",
      tags: [
       
      
        {
          name: "Django",
          color: "pink-text-gradient",
        },
        {
          name: "Boostrap",
          color: "green-text-gradient",
        },
      ],
      image: galleryDjango ,
      source_code_link: "https://github.com/francodavid666/galleryPhotoDjango",
      source_code_link2: "https://galleryphotodjango.onrender.com",
    },
   {
      name: "CRUD con Django Rest Framework y React.js",
      description:
        "Cree una aplicacion para que se pueda comprar faces y productos para una cafeteria, lo diseñe utilizando css, html, js y django",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Django rest framework",
          color: "green-text-gradient",
        },
        {
          name: "tailwind css",
          color: "pink-text-gradient",
        },
      
      ],
      image: taskApi ,
      source_code_link: "https://github.com/francodavid666/TaskApp",
      source_code_link2: "https://tasksapi.up.railway.app",
      
    },
    {
      name: "CRUD con React.js y Django",
      description:
        "Cree  un bloc de notas utilizando Djando-rest-framework y react.js para el front.",
      tags: [
        {
          name: "React/js",
          color: "blue-text-gradient",
        },
      
        {
          name: "Django",
          color: "pink-text-gradient",
        },
      ],
      image: bloc,
      source_code_link: "https://github.com/francodavid666/notesApp",
    },
    {
      name: "Enterprice Admin Dashboard ",
      description:
        "Front end Dashboard enterprise full react.js. Usando libreria 'Syncfusion' y Tailwind Css",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind Css",
          color: "green-text-gradient",
        },
        {
          name: "Syncfusion",
          color: "pink-text-gradient",
        },
       
      ],
      image: dashboardReact ,
      source_code_link: "https://github.com/francodavid666/dashboardReact",
      source_code_link2: "https://dashboar-react.onrender.com",
      
    },
    {
      name: "Starke fitness WebPage ",
      description:
        "Aplicacion creada con Reac.js utilizando tailwind css",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind Css",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
       
      ],
      image: starkeFit ,
      source_code_link: "https://github.com/francodavid666/starkeOficial",
      source_code_link2: "https://starkeweb.onrender.com",
      
    },
    ,
    {
      name: "Travel React.js/Next.js ",
      description:
        "Aplicacion creada con Reac.js utilizando tailwind css",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind Css",
          color: "green-text-gradient",
        },
        {
          name: "Next.js",
          color: "pink-text-gradient",
        },
       
      ],
      image: travelReact ,
      source_code_link: "https://github.com/francodavid666/TravelReactNext.js",
      source_code_link2: "https://travel-react-next-js.vercel.app",
      
    },{
      
      name: "Travel Web",
      description:
        "Pagina web de viajes animado usando HTML CSS y JavaScript",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "Css",
          color: "pink-text-gradient",
        },
       
      ],
      image: travelWeb,
      source_code_link: "https://github.com/francodavid666/travelWeb",
      source_code_link2: "https://travelweb-cz5z.onrender.com",
      
    },{
      
      name: "Targeta de producto",
      description:
        "Tarjeta de producto animada usando HTML CSS y JavaScript",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "Css",
          color: "pink-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
       
      ],
      image: cardProductJs,
      source_code_link: "https://github.com/francodavid666/cardProductJs",
      source_code_link2: "https://cardproduct.onrender.com",
      
    },{
      
      name: "Like con doble click Corazon",
      description:
        "He creado un botón de like en forma de corazon que reacciona al doble clic ",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "Css",
          color: "pink-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
       
      ],
      image: DoubleClickHeart,
      source_code_link: "https://github.com/francodavid666/DoubleClickHeart",
      source_code_link2: "https://doubleclickheart.onrender.com",
      
    },
    {
      
      name: "Arrastrar y soltar ",
      description:
        "He creado una funcion para atrastrar y solta una imagen en otro cuadrado ",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "Css",
          color: "pink-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
       
      ],
      image: dragDropJs,
      source_code_link: "https://github.com/francodavid666/Drag-DropJS",
      source_code_link2: "https://dragdropjs.onrender.com",
      
    },{
      
      name: "Validacion de Contraseña ",
      description:
        "He creado una funcion para validar una contraseña con requisitos",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "Css",
          color: "pink-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
       
      ],
      image: passwordValidation,
      source_code_link: "https://github.com/francodavid666/passwordValidation",
      source_code_link2: "https://passwordvalidation.onrender.com",
      
    },{
      
      name: "Buscador animado ",
      description:
        "He creado un 'Search Box' con una pequeña animacion ",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "Css",
          color: "pink-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
       
      ],
      image: searchBox,
      source_code_link: "https://github.com/francodavid666/searchBox",
      source_code_link2: "https://searchbox-sjw6.onrender.com",
      
    },{
      
      name: "Notification Messenger ",
      description:
        "He creado una alerta de notificacion de Messenger con una pequeña animacion para el numero de notificaciones",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "Css",
          color: "pink-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
       
      ],
      image: notificacionMesseger,
      source_code_link: "https://github.com/francodavid666/NotificationMessenger",
      source_code_link2: "https://notificationmessenger.onrender.com",
      
    },{
      
      name: "Random Password Generator",
      description:
        "He creado un generador de contraseñas",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "Css",
          color: "pink-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
       
      ],
      image: RandomPasswordGenerator,
      source_code_link: "https://github.com/francodavid666/RandomPasswordGenerator",
      source_code_link2: "https://randompasswordgenerator.onrender.com",
      
    }
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };