export const dictionary = {
    en: {
      nav: {
        home: "Home",
        services: "Services",
        work: "Work",
        packages: "Packages",
        contact: "Contact",
        cta: "Request a Session",
        openMenu: "Open menu",
      },
      home: {
        eyebrow: "Premium Photography & Video Studio",
        title: "Visual stories for brands, people, and moments that matter.",
        subtitle:
          "FrameHaus Studio creates refined photography and video experiences for brands, professionals, events, and creative projects.",
        primaryCta: "View Work",
        secondaryCta: "Request a Session",
        note: "Brand photography · Product · Events · Lifestyle · Video",
      statementEyebrow: "FrameHaus Concept",
        statementTitle: "Built like a real creative studio website.",
        statement:
          "This project is designed as a premium bilingual website for a professional photography and video studio, with a commercial structure ready for services, portfolio, packages, and booking flow.",
      },
      pages: {
        services: {
          eyebrow: "Services",
          title: "Photography and video services built around visual strategy.",
          description:
            "This page will present FrameHaus services with individual service details, deliverables, and conversion-focused calls to action.",
        },
        work: {
          eyebrow: "Portfolio",
          title: "A visual archive of brands, portraits, products, and events.",
          description:
            "This page will become the editorial portfolio gallery, with categories, featured projects, and visual case studies.",
        },
        packages: {
          eyebrow: "Packages",
          title: "Clear session packages for brands, people, and businesses.",
          description:
            "This page will organize commercial packages such as Essential Session, Brand Story, Content Production Day, and Event Coverage.",
        },
        contact: {
          eyebrow: "Request a Session",
          title: "Tell us what you want to create.",
          description:
            "This page will include a professional session request flow with service type, date, budget, photo/video needs, and contact details.",
        },
      },
      footer: {
        description:
          "Premium photography and video studio for brands, professionals, events, and creative projects.",
        builtBy: "Portfolio project developed by FronteraCode.",
      bottom: "Photography · Video · Creative Direction",
      },
    },
  
    es: {
      nav: {
        home: "Inicio",
        services: "Servicios",
        work: "Portafolio",
        packages: "Paquetes",
        contact: "Contacto",
        cta: "Solicitar sesión",
        openMenu: "Abrir menú",
      },
      home: {
        eyebrow: "Estudio premium de fotografía y video",
        title: "Historias visuales para marcas, personas y momentos que importan.",
        subtitle:
          "FrameHaus Studio crea experiencias refinadas de fotografía y video para marcas, profesionales, eventos y proyectos creativos.",
        primaryCta: "Ver portafolio",
        secondaryCta: "Solicitar sesión",
        note: "Fotografía de marca · Producto · Eventos · Lifestyle · Video",
      statementEyebrow: "Concepto FrameHaus",
        statementTitle: "Construido como un website real para un estudio creativo.",
        statement:
          "Este proyecto está diseñado como un website premium bilingüe para un estudio profesional de fotografía y video, con estructura comercial lista para servicios, portafolio, paquetes y flujo de solicitud de sesión.",
      },
      pages: {
        services: {
          eyebrow: "Servicios",
          title: "Servicios de fotografía y video construidos alrededor de estrategia visual.",
          description:
            "Esta página presentará los servicios de FrameHaus con detalles individuales, entregables y llamados a la acción pensados para conversión.",
        },
        work: {
          eyebrow: "Portafolio",
          title: "Un archivo visual de marcas, retratos, productos y eventos.",
          description:
            "Esta página se convertirá en la galería editorial del portafolio, con categorías, proyectos destacados y casos de estudio visuales.",
        },
        packages: {
          eyebrow: "Paquetes",
          title: "Paquetes claros para marcas, personas y negocios.",
          description:
            "Esta página organizará paquetes comerciales como Essential Session, Brand Story, Content Production Day y Event Coverage.",
        },
        contact: {
          eyebrow: "Solicitar sesión",
          title: "Cuéntanos qué quieres crear.",
          description:
            "Esta página incluirá un flujo profesional para solicitar una sesión con tipo de servicio, fecha, presupuesto, necesidades de foto/video y datos de contacto.",
        },
      },
      footer: {
        description:
          "Estudio premium de fotografía y video para marcas, profesionales, eventos y proyectos creativos.",
        builtBy: "Proyecto de portafolio desarrollado por FronteraCode.",
      bottom: "Fotografía · Video · Dirección creativa",
      },
    },
  } as const;
  
  export type Language = keyof typeof dictionary;
  export type Dictionary = (typeof dictionary)[Language];