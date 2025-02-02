import { baseData } from "$lib/deck/base-data";

import {
  TextSlide,
  Cover,
  PhotoCollage,
  Planning,
  TextColumns,
  Quote,
} from "./slides/index.js";

export const slideContent = [
  {
    slideType: Cover,
    transition: "fade", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      classes: "large-heading", // choose large-, or medium-heading if presentation name is too long'
      sprintNr: {
        content: `Sprint ${baseData.sprintNumber}`,
      },
      presentationName: {
        content: baseData.presentationName,
      },
      type: {
        content: "workshop",
      },
      emojis: {
        content: ["🚀", "💪", "="], // max 3 emojis
      },
    },
  },
  {
    slideType: PhotoCollage,
    transition: "fade", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      customGrid: false,
      objectFit: "cover",
      gap: false,
      padding: false,
      background: false,
      images: [
        {
          type: "image",
          src: "./media/opdrachtgevers1.jpg",
          alt: "",
        },
        {
          type: "image",
          src: "./media/opdrachtgevers2.jpg",
          alt: "",
        },
        {
          type: "image",
          src: "./media/opdrachtgevers3.jpg",
          alt: "",
        },
        {
          type: "image",
          src: "./media/opdrachtgevers4.jpg",
          alt: "",
        },
      ],
      captionPosition: "right center",
      caption:
        "<p>Welkom in semester 2.​<br> Nieuwe ronde, nieuwe kansen …​</p>",
    },
  },
  {
    slideType: PhotoCollage,
    transition: "fade", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      objectFit: "cover",
      customGrid: false,
      images: [
        {
          type: "image",
          src: "./media/notes.jpg",
          alt: "",
        },
      ],
      captionPosition: "top left",
      caption:
        "<p>Maak altijd aantekeningen<br> van een college of workshop.​</p>",
    },
  },
  {
    slideType: Planning,
    transition: "fade", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      customPill: {
        text: "Sprintplanning",
        color: "var(--c-text)",
        background: "var(--c-highlight)",
        position: "top left",
      },
      title: {
        content: "Planning",
        level: 1,
        classes: "xlarge-heading",
      },
      progress: 0,
      list: [
        "Het Data-Driven Web",
        "Connect Your Tribe",
        "Server Side",
        "Deep Dive Node",
      ],
    },
  },
  {
    slideType: PhotoCollage,
    transition: "fade", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      customGrid: false,
      objectFit: "contain",
      gap: true,
      padding: true,
      background: false,
      images: [
        {
          type: "image",
          src: "./media/semesters.jpg",
          alt: "",
        },
      ],
      captionPosition: "top left",
    },
  },
  {
    slideType: TextColumns,
    transition: "fade", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      customPill: {
        text: "Gedragscriteria",
        color: "var(--c-text)",
        background: "var(--c-highlight)",
        position: "top left",
      },
      columns: [
        {
          title: {
            content: "Semester 1: Statische web",
            level: 2,
            classes: "small-heading",
          },
          text: {
            content:
              "<p>De student gebruikt fundamentele principes van het web voor het ontwerpen en ontwikkelen van eenvoudige gebruiks-vriendelijke interactieve toepassingen voor het web.</p>",
            classes: "large-body",
          },
        },
        {
          title: {
            content: "Semester 2: <br>Data-Driven Web",
            level: 2,
            classes: "small-heading",
          },
          text: {
            content:
              "<p>De student gebruikt API's en databases voor het ontwerpen en ontwikkelen van gebruiksvriendelijke interactieve toepassingen voor het web.</p>",
            classes: "large-body",
          },
          pointer: {
            text: "U bevindt zich hier",
            color: "var(--c-highlight)",
            background: "var(--c-text)",
            position: "top right",
          },
        },
        {
          title: {
            content: "Semester 3: Workflows, Tools & Frameworks",
            level: 2,
            classes: "small-heading",
          },
          text: {
            content:
              "<p>De student werkt volgens gangbare ontwikkel- methoden, en gebruikt frameworks, templates en build tools voor het ontwerpen en ontwikkelen van complexe gebruiks-vriendelijke interactieve toepassingen voor het web.</p>",
            classes: "large-body",
          },
        },
        {
          title: {
            content: "Semester 4: Eindniveau",
            level: 2,
            classes: "small-heading",
          },
          text: {
            content:
              "<p>De student ontwerpt en ontwikkelt zelfstandig complexe gebruiks-vriendelijke, interactieve toepassingen voor het web. De student beheerst de principes van het web, kan API's en databases gebruiken, kan frameworks, templates en build tools inzetten, en werkt volgens gangbare ontwikkel-methoden.</p>",
            classes: "large-body",
          },
        },
      ],
    },
  },
  {
    slideType: PhotoCollage,
    transition: "fade", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      customGrid: false,
      objectFit: "contain",
      gap: true,
      padding: true,
      background: false,
      images: [
        {
          type: "image",
          src: "./media/programma.jpg",
          alt: "",
        },
      ],
      captionPosition: "top left",
    },
  },
  {
    slideType: TextColumns,
    transition: "fade", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      customPill: {
        text: "Leerresultaat",
        color: "var(--c-text)",
        background: "var(--c-highlight)",
        position: "top left",
      },
      columns: [
        {
          title: {
            content: "Semester 1: <u>M</u>ethodisch handelen",
            level: 2,
            classes: "small-heading",
          },
          text: {
            content:
              `<ul>
                <li>Je volgt binnen projecten de aangeboden fasering van de development-lifeycle.</li>
                <li>Je past aangeboden principes en conventies op het gebied van frontend design en development.</li>
                <li>Je realiseert een oplossing voor een opdrachtgever.</li>
              </ul>`,
            classes: "small-heading",
          },
        },
        {
          title: {
            content: "Semester 2: <u>M</u>ethodisch handelen",
            level: 2,
            classes: "small-heading",
          },
          text: {
            content:
              `<ul>
                <li>Je kiest binnen projecten passende fases van de development-lifecycle</li>
                <li>Je combineert aangeboden principes en conventies op het gebied van frontend design en development.</li>
                <li>Je houdt in beginnende mate rekening met de belangen van de eindgebruiker bij het realiseren van een oplossing voor een opdrachtgever.</li>
              </ul>`,
            classes: "small-heading",
          },
        },
      ],
    },
  },
  {
    slideType: TextColumns,
    transition: "fade", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      customPill: {
        text: "Gedragscriteria",
        color: "var(--c-text)",
        background: "var(--c-highlight)",
        position: "top left",
      },
      columns: [
        {
          title: {
            content: "Semester 1: <u>S</u>amenwerken",
            level: 2,
            classes: "small-heading",
          },
          text: {
            content:
              `<ul>
                <li>Je werkt in teams, laat je hierbij begeleiden en geeft feedback aan teamleden.</li>
                <li>Je draagt verantwoording voor eigen resultaten en verwerkt ontvangen feedback.</li>
                <li>Je handelt respectvol naar anderen.</li>	
              </ul>`,
            classes: "small-heading",
          },
        },
        {
          title: {
            content: "Semester 2: <u>S</u>amenwerken",
            level: 2,
            classes: "small-heading",
          },
          text: {
            content:
              `<ul>
                <li>Je werkt in teams, vraagt begeleiding waar nodig en geeft feedback aan teamleden.</li>
                <li><mark>Je draagt verantwoording voor eigen resultaten, verwerkt ontvangen feedback en wijst teamleden op hun verantwoording.</mark></li>
                <li>Je identificeert diversiteit binnen teams en handelt respectvol naar anderen.</li>
              </ul>`,
            classes: "small-heading",
          },
        },
      ],
    },
  },
  {
    slideType: TextColumns,
    transition: "fade", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      columns: [
        {
          title: {
            content: "Semester 1: <u>C</u>ommuniceren",
            level: 2,
            classes: "small-heading",
          },
          text: {
            content:
              `<ul>
                <li>Je luistert naar wat een ander zegt en neemt dit serieus.</li>
                <li>Je kan binnen de squad ontwerpkeuzes, eigen ideeën en producten begrijpelijk verwoorden.</li>
                <li>Je documenteert volgens aangeboden richtlijnen en houdt voortgang bij.</li>
              </ul>`,
            classes: "small-heading",
          },
        },
        {
          title: {
            content: "Semester 2: <u>C</u>ommuniceren",
            level: 2,
            classes: "small-heading",
          },
          text: {
            content:
              `<ul>
                <li>Je luistert en vraagt door, neemt wat een ander zegt serieus.</li>
                <li>Je kan ontwerpkeuzes, eigen ideeën en producten begrijpelijk overbrengen aan belanghebbenden.</li>
                <li>Je documenteert op professionele wijze en houdt voortgang bij.</li>
              </ul>`,
            classes: "small-heading",
          },
        },
      ],
    },
  },
  {
    slideType: TextColumns,
    transition: "fade", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      columns: [
        {
          title: {
            content: "Semester 1: <u>P</u>robleemoplossend vermogen",
            level: 2,
            classes: "small-heading",
          },
          text: {
            content:
              `<ul>
                <li>Je analyseert een vraag en volgt de aangeboden oplossingsrichting.</li>
                <li>Je schetst om gedachten en processen te verkennen.</li>
                <li>Je bedenkt en implementeert eenvoudige frontend code en gebruikt daarbij de fundamentele principes van het web.</li>
              </ul>`,
            classes: "small-heading",
          },
        },
        {
          title: {
            content: "Semester 2: <u>P</u>robleemoplossend vermogen",
            level: 2,
            classes: "small-heading",
          },
          text: {
            content:
              `<ul>
                <li>Je analyseert een vraag, signaleert knelpunten en volgt de aangeboden oplossingsrichting.</li>
                <li>Je schetst om gedachten en processen te verkennen en abstracte begrippen over te brengen.</li>
                <li>Je bedenkt en implementeert <mark>complexere</mark> frontend code en gebruikt daarbij API's en databases.</li>
              </ul>`,
            classes: "small-heading",
          },
        },
      ],
    },
  },
  {
    slideType: TextColumns,
    transition: "fade", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      columns: [
        {
          title: {
            content: "Semester 1: <u>L</u>erend vermogen",
            level: 2,
            classes: "small-heading",
          },
          text: {
            content:
              `<ul>
                <li>Je benoemt behandelde internationale ontwikkelingen in het vakgebied.</li>
                <li>Je maakt aangeboden materie eigen en gebruikt dit bij leertaken.</li>
                <li>Je toont beginnend inzicht in eigen capaciteiten en beperkingen en kan deze benoemen.</li>
              </ul>`,
            classes: "small-heading",
          },
        },
        {
          title: {
            content: "Semester 2: <u>L</u>erend vermogen",
            level: 2,
            classes: "small-heading",
          },
          text: {
            content:
              `<ul>
                <li><mark>Je volgt aangeboden internationale ontwikkelingen in het vakgebied.</mark></li>
                <li>Je maakt aangeboden en zelf gevonden materie eigen en gebruikt dit bij leertaken, deelt ervaring binnen de squad.</li>
                <li>Je kent eigen capaciteiten en beperkingen, vergelijkt dit met het vermogen van anderen en maakt dit bespreekbaar.</li>
              </ul>`,
            classes: "small-heading",
          },
        }
      ]
    }
  },
  {
    slideType: PhotoCollage,
    transition: "fade", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      objectFit: "contain",
      gap: true,
      padding: true,
      background: false,
      customGrid: false,
      images: [
        {
          type: "image",
          src: "./media/portflow.jpg",
          alt: "",
        },
      ],
      captionPosition: "left bottom",
      caption:
        "<p>Portflow Semester 2 <br>Template code: <b>SKJXEPY</b></p>",
    },
  },
  {
    slideType: Planning,
    transition: "fade", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      customPill: {
        text: "Sprintplanning",
        color: "var(--c-text)",
        background: "var(--c-highlight)",
        position: "top left",
      },
      title: {
        content: "Planning",
        level: 1,
        classes: "xlarge-heading",
      },
      progress: 1,
      list: ["Het Data-Driven Web", "Connect Your Tribe", "Server Side", "Deep Dive Node"],
    },
  },
  {
    slideType: PhotoCollage,
    transition: "fade", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      objectFit: "contain",
      customGrid: false,
      gap: true,
      padding: true,
      background: false,
      images: [
        {
          type: "image",
          src: "./media/planning.jpg",
          alt: "",
        },
      ],
    },
  },
  {
    slideType: Planning,
    transition: "fade", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      customPill: {
        text: "Sprintplanning",
        color: "var(--c-text)",
        background: "var(--c-highlight)",
        position: "top left",
      },
      title: {
        content: "Planning",
        level: 1,
        classes: "xlarge-heading",
      },
      progress: 2,
      list: ["Het Data-Driven Web", "Connect Your Tribe", "Server Side", "Deep Dive Node"],
    },
  },
  {
    slideType: PhotoCollage,
    transition: "fade", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      objectFit: "contain",
      gap: true,
      padding: true,
      background: 'var(--soft-purple)',
      customGrid: false,
      images: [
        {
          type: "image",
          src: "./media/server-side.png",
          alt: "",
        },
      ],
      captionPosition: "left bottom",
      caption:
        "<p>Database/CMS <br>Hygraph en JSON</p>",
    },
  },
  {
    slideType: PhotoCollage,
    transition: "fade", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      objectFit: "contain",
      gap: true,
      padding: true,
      background: 'var(--soft-purple)',
      customGrid: false,
      images: [
        {
          type: "image",
          src: "./media/server-programmeren.png",
          alt: "",
        },
      ],
      captionPosition: "left bottom",
      caption:
        "<p>Server Side programmeren</p>",
    },
  },
  {
    slideType: PhotoCollage,
    transition: "fade", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      objectFit: "contain",
      gap: true,
      padding: true,
      background: 'var(--soft-purple)',
      customGrid: false,
      images: [
        {
          type: "image",
          src: "./media/visitekaartjes/gijs.png",
          alt: "",
        },
        {
          type: "image",
          src: "./media/visitekaartjes/thomas.png",
          alt: "",
        },
        {
          type: "image",
          src: "./media/visitekaartjes/celine.png",
          alt: "",
        },
        {
          type: "image",
          src: "./media/visitekaartjes/cathelijne.png",
          alt: "",
        },
        {
          type: "image",
          src: "./media/visitekaartjes/siem.png",
          alt: "",
        },
      ],
      captionPosition: "right bottom",
      caption:
        "<p>We gaan van client-side<br> visitekaartjes naar...</p>",
    },
  },
  {
    slideType: PhotoCollage,
    transition: "fade", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      objectFit: "contain",
      gap: true,
      padding: true,
      background: 'var(--soft-purple)',
      customGrid: false,
      images: [
        {
          type: "image",
          src: "./media/cyclic.png",
          alt: "",
        },
      ],
      captionPosition: "left bottom",
      caption:
        "<p>.. server-side visitekaartjes!</p>",
    },
  },
  {
    slideType: Planning,
    transition: "fade", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      customPill: {
        text: "Sprintplanning",
        color: "var(--c-text)",
        background: "var(--c-highlight)",
        position: "top left",
      },
      title: {
        content: "Planning",
        level: 1,
        classes: "xlarge-heading",
      },
      progress: 3,
      list: ["Het Data-Driven Web", "Connect Your Tribe", "Server Side", "Deep Dive Node"],
    }
  },
  {
    slideType: PhotoCollage,
    transition: "fade", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      objectFit: "contain",
      gap: true,
      padding: true,
      background: "var(--soft-purple)",
      customGrid: false,
      customPill: {
        text: "Deep Dive Node",
        color: "var(--c-text)",
        background: "var(--c-highlight)",
        position: "top left",
      },
      images: [
        {
          type: "image",
          src: "./media/deep-dive.jpg",
          alt: "",
        },
      ],
    },
  },
  {
    slideType: PhotoCollage,
    transition: "fade", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      objectFit: "contain",
      gap: true,
      padding: true,
      background: "var(--soft-purple)",
      customGrid: false,
      customPill: {
        text: "Deep Dive Node",
        color: "var(--c-text)",
        background: "var(--c-highlight)",
        position: "top left",
      },
      images: [
        {
          type: "image",
          src: "./media/normal-rendered.jpg",
          alt: "",
        },
        {
          type: "image",
          src: "./media/server-rendered.jpg",
          alt: "",
        },
      ],
    },
  },
  {
    slideType: TextColumns,
    transition: "fade", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      customPill: {
        text: "Deep Dive Node",
        color: "var(--c-text)",
        background: "var(--c-highlight)",
        position: "top left",
      },
      columns: [
        {
          title: {
            content: "Client-side​",
            level: 2,
            classes: "large-heading",
          },
          text: {
            content:
              `<ul>
                <li>HTML​
                <li>CSS​</li>
                <li>Javascript​</li>
              </ul>`,
            classes: "small-heading",
          },
        },
        {
          title: {
            content: "Server-side",
            level: 2,
            classes: "large-heading",
          },
          text: {
            content:
              `<ul>
                <li>PHP</li>
                <li>Python</li>
                <li>Java</li>
                <li>C#</li>
                <li>..en meer!</li>
              </ul>`,
            classes: "small-heading",
          },
        },
      ]
    }
  },
  {
    slideType: Quote,
    transition: "fade", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      quote: {
        content: "<q>Most large-scale websites use server-side code to <mark>dynamically</mark> display different <mark>data</mark> when needed, generally pulled out of a database stored on a <mark>server</mark> and sent to the <mark>client</mark>.</q>",
        classes: "large-heading",
      },
      author: {
        content: "<a href='https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Introduction'>MDN</a>",
        classes: "small-heading",
      },
    },
  },
  {
    slideType: PhotoCollage,
    transition: "fade", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      objectFit: "cover",
      gap: false,
      padding: false,
      background: false,
      customGrid: false,
      images: [
        {
          type: "image",
          src: "./media/sketchnote.jpg",
          alt: "",
        },
      ],
      captionPosition: "left bottom",
      caption:
        "<p>Toolkit client-side programmeren</p>",
    },
  },
  {
    slideType: PhotoCollage,
    transition: "fade", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      objectFit: "cover",
      gap: false,
      padding: false,
      background: false,
      customGrid: false,
      images: [
        {
          type: "image",
          src: "./media/node.jpg",
          alt: "",
        },
      ],
      captionPosition: "left bottom",
      caption:
        "<p>Huidige toolkit server-side programmeren</p>",
    },
  },
  {
    slideType: TextColumns,
    transition: "fade", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      customPill: {
        text: "Connect Your Tribe",
        color: "var(--c-text)",
        background: "var(--c-highlight)",
        position: "top left",
      },
      columns: [
        {
          title: {
            content: "Aan de slag",
            level: 1,
            classes: "large-heading",
          },
          text: {
            content:
              `<ul>
                <li>Fork de leertaak <b>connect-your-tribe-profile-card</b></li>
                <li>Lees de instructions</li>
                <li>Zet je wiki op (om je iteratieve werkproces bij te houden)</li>
                <li>Vul je gegevens aan in de WHOIS API</li>
              </ul>`,
            classes: "small-heading",
          },
        },
      ]
    }
  },
  {
    slideType: TextColumns,
    transition: "fade", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      customPill: {
        text: "Connect Your Tribe",
        color: "var(--c-text)",
        background: "var(--c-highlight)",
        position: "top left",
      },
      columns: [
        {
          title: {
            content: "Opdracht: Vul je gegevens aan in de WHOIS API​",
            level: 1,
            classes: "large-heading",
          },
          text: {
            content:
              `<ol>
                <li>Ga naar de WHOIS API van FDND: <a href='https://whois.fdnd.nl'>https://whois.fdnd.nl</a></li>
                <li>Zoek jouw id op in de members lijst: <a href='https://whois.fdnd.nl/docs/person#get'>https://whois.fdnd.nl/docs/person#get</a></li>
                <li>Gebruik jouw id in het admin formulier en vul de ontbrekende gegevens in: <a href='https://whois.fdnd.nl/admin'>https://whois.fdnd.nl/admin</a></li>
                <li>In het ‘bio’ veld kan je ook HTML elementen gebruiken</li>
                <li>Ga naar de GET member pagina op jouw gegevens in JSON te bekijken: <a href='https://whois.fdnd.nl/docs/person'>https://whois.fdnd.nl/docs/person</a></li>
              </ol>`,
            classes: "small-heading",
          },
        }
      ]
    }
  },
  {
    slideType: PhotoCollage,
    transition: "fade", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      objectFit: "contain",
      gap: false,
      padding: false,
      background: 'var(--soft-purple)',
      customGrid: false,
      images: [
        {
          type: "image",
          src: "./media/whois.png",
          alt: "",
        },
      ],
      captionPosition: "left bottom",
      caption:
        "<h3>Whois API</h3><p><a href='https://whois.fdnd.nl/'>https://whois.fdnd.nl/</a></p>",
    },
  }
];

