export const homeHero = {
  title: ["BETHEL", "CASA DE DIOS"],

  description:
    "Una iglesia llena del Espíritu en Hopewell, Virginia, donde Jesucristo es el centro de todo lo que hacemos.",

  backgroundImage: "/images/home-hero.webp",

  imageAlt: "Edificio de la Iglesia Bethel en Hopewell, Virginia",

  buttons: [
    {
      label: "Planifica tu visita",
      href: "/visit",
      iconSrc: "/icons/arrow-up-right.svg",
      iconPosition: "right",
      backgroundColor: "#C21E38",
      textColor: "#FFFFFF",
      borderColor: "#C21E38",
      hoverBackgroundColor: "#FBF7EE",
      hoverTextColor: "#1E1E1E",
      hoverBorderColor: "#FBF7EE",
    },
    {
      label: "Horarios",
      href: "/visit/#horarios",
      iconSrc: "/icons/arrow-up-right.svg",
      iconPosition: "right",
      backgroundColor: "transparent",
      textColor: "#FFFFFF",
      borderColor: "#FFFFFF",
      hoverBackgroundColor: "#C21E38",
      hoverTextColor: "#FFFFFF",
      hoverBorderColor: "#C21E38",
    },
  ],
};


export const homeStatement = {
  eyebrow: "Nuestro nombre, nuestro fundamento",

  title: "Bethel significa Casa de Dios y puerta del cielo.",

  quote:
    "Y soñó: y he aquí una escalera que estaba apoyada en tierra, y su extremo tocaba en el cielo; y he aquí ángeles de Dios que subían y descendían por ella. Y he aquí, Jehová estaba en lo alto de ella.",

  reference: "Génesis 28:12–13",

  backgroundImage: "/images/bethel-meaning.jpg",

  imageAlt:
    "Congregación adorando durante un servicio en la Iglesia Bethel",
};

export const homeWelcome = {
  marquee: {
    text: "BIENVENIDOS A BETHEL",
    separator: "•",
    direction: "right",
    duration: 35,
    repetitions: 4,
  },

  title:
    "En los tiempos que vivimos, hemos sido plantados aquí por una razón.",

  paragraphs: [
    "Nuestro Señor Jesucristo es el centro de todo lo que hacemos. Nos apasiona alcanzar a los perdidos, transformar vidas mediante el poder del Evangelio y formar discípulos llenos del Espíritu que vivan el propósito de Dios y compartan su amor con el mundo.",

    "Te invitamos a acompañarnos, escuchar la Palabra de Dios, recibir tu milagro y experimentar una vida que nunca volverá a ser igual.",
  ],

  quote: "Porque nada hay imposible para Dios.",

  reference: "Lucas 1:37",

  images: {
    main: {
      src: "/images/welcome-main.jpg",
      alt: "Mural artístico de la comunidad Bethel",
    },

    left: {
      src: "/images/welcome-community.jpg",
      alt: "Miembros de la comunidad de la Iglesia Bethel",
    },

    bottom: {
      src: "/images/welcome-bible.png",
      alt: "Una Biblia abierta durante un servicio de Bethel",
    },
  },
};

export const homeSchedule = {
  eyebrow: "Te estamos esperando",

  title: "Horarios de servicio",

  description:
    "Ven tal como eres. Cada reunión está abierta para ti y tu familia.",

  services: [
    {
      day: "Domingo",
      name: "Escuela dominical y servicio evangelístico",
      time: "4:00 PM",
      dateTime: "16:00",
    },
    {
      day: "Martes",
      name: "Oración y estudio bíblico",
      time: "7:30 PM",
      dateTime: "19:30",
    },
    {
      day: "Viernes",
      name: "Servicio evangelístico y de avivamiento",
      time: "7:30 PM",
      dateTime: "19:30",
    },
  ],

  image: {
    src: "/images/service-schedule.png",
    alt: "Personas estudiando la Biblia en la Iglesia Bethel",
  },

  button: {
    label: "Qué esperar en tu primera visita",
    href: "/visit",
    iconSrc: "/icons/arrow-up-right.svg",
  },

  imagePosition: "right",
  backgroundColor: "#FFFFFF",
  rowBackgroundColor: "#FBF7EE",
};