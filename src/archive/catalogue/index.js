import types from "./types";

export default [
  {
    title: "Educating interdisciplinary teams on Human-AI collaboration.",
    name: "Human-Centric AI",
    department: "Fjord, Accenture",
    id: "human-centered-ai",
    locked: false,
    project: {
      header: {
        title: "Educating interdisciplinary teams on Human-AI collaboration.",
        image: "main",
        labels: ["Human-Centric AI", "Thought Leadership", "Fjord, Accenture"],
        when: ["June 2017", "Ongoing", "Dublin, London, Stockholm, Australia"]
      },
      content: [
        {
          type: types.IMG_TEXT,
          position: "right",
          title: "Background",
          text:
            "Artificial Intelligence is more than just a technology.\n\nBeyond the algorithms, AI drives services that are rapidly changing our work and personal lives. \n\nAs innovators, this requires us to consider its wider implications and be accountable for how we want people to interact with AI, but also, each other. \n\nIf interdisciplianry teams don’t align on terms or processes, we will never be able to stand behind such “intelligent” systems.",
          image: "img_1",
          caption:
            "Collaboration requires respect: Connor Upton, Director at Fjord."
        },
        {
          type: types.IMG_TEXT,
          position: "left",
          title: "How might we?",
          text: {
            text:
              "How Might We develop content that explores Human-AI collaboration? \n\nWe wanted our workshop m​​aterial to be:",
            list: [
              "Context-aware: flexible content which could be tailored to suit different disciplines and levels of advancement, depending on attendees",
              "Instantly applicable: practical activites and templates which could be used on live projects after the workshop",
              "Collaborative: open format to encourage new methods and / or approaches"
            ]
          },
          image: "img_2",
          caption: "Dynamic teams ideating in Dublin."
        },
        {
          type: types.IMG_TEXT,
          position: "right",
          title: "Challenges",
          text: {
            text: "The key challenges for this project were:",
            list: [
              "Avoiding bias: we reached out to various experts at The Dock to ensure our content encompassed multiple perspectives and approaches",
              "Trial and error: all content was original, meaning we had to create new methods and activities from scratch - not always successful",
              "Structure and suspense: balancing theoretical lessons, project learnings and demos, group activities etc."
            ]
          },
          image: "img_3",
          caption:
            " Learning from the experts: Gaurav Kaila, Analytics Specialist."
        },
        {
          type: types.QUOTE,
          position: "right",
          text:
            "Eilís provided valuable insight into how to creatively communicate somewhat dry / technical AI concepts to a design audience and showed her inventive talent in translating them into engaging practical activities.",
          name: "Jivan Virdee, Data Designer, Fjord London"
        },
        {
          type: types.VIDEO,
          position: "left",
          url: "https://www.youtube.com/embed/IR-4n_wwOSY",
          caption:
            "Sharing some project learnings from AI in Content Moderation."
        },
        {
          type: types.SLIDESHOW_TEXT,
          position: "left",
          title: "Approach",
          text:
            "Over the past few months, this workshop has been delivered to teams and clients in Dublin, London, Stockholm and Melbourne. \n\nThe format changes with each group: a full-day workshop, a series of micro-lectures over the course of a few days, a single workshop activity etc. \n\nWe make a conscios effort to invite experts into the workshop to share their insights and learnings to ensure balance and accuracy. ",
          images: [
            {
              src: "img_4",
              caption: "Mapping and connecting our content."
            },
            {
              src: "img_5",
              caption: "Feedback from participants and attendees."
            },
            {
              src: "img_6",
              caption:
                "Making updates to the structure and flow of the content."
            },
            {
              src: "img_7",
              caption:
                "Planning: Gemma Gallagher, Interaction Designer at Fjord."
            }
          ],
          caption: "Planning: Gemma Gallagher, Interaction Designer at Fjord."
        },
        {
          type: types.IMG_TEXT,
          position: "right",
          title: "Solution",
          text: {
            text: "Current agenda:",
            list: [
              "AI 101: misconceptions, practical applications, umbrella technology.",
              "What, not how: the problem not the technology, combining capabilities.",
              "Human-AI collaboration: centaur systems, relationships and approaches",
              "Guidelines and principles: interactions, teammate qualities, considerations.",
              "Aligning terminology: levels of AI, language"
            ]
          },
          image: "img_8",
          caption:
            "Groups combine several AI techniques to create one robust solution."
        },
        {
          type: types.IMG_VIDEO,
          position: "left",
          image: {
            src: "img_9",
            caption: "The real-life challenge: a grocery store."
          },
          url: {
            src: "https://www.youtube.com/embed/agKvdGN02Uo",
            caption: "Group role-play: the journey of a tomato."
          }
        },
        {
          type: types.QUOTE,
          position: "left",
          text:
            "Thank you so much for today. It was excellent - extremely relevant to so much of our client work and such a unique Dock-like multidisciplinary angle.",
          name: "Eva Magure, Innovation Nexus Lead, Accenture."
        },
        {
          type: types.END,
          position: "right",
          image: "img_10",
          title: "Team",
          text:
            "Gemma Gallagher, Interaction Designer\nEilis Delany, Business Designer \nConnor Upton, Design Director   \n\nShoutout to\nJivan Virdee, Data Scientist\nGaurav Kaila, AI Specialist ",
          feedback: {
            text:
              "Eilís, was instrumental to the design and rollout of Fjords new workshop on Design & AI. Through her work, we have developed a unique asset that has supported training, thought leadership and client engagement. \nConnor Upton, Director, Fjord. \n\nReally pleased with the Dublin team for designing and facilitating this workshop on AI. The content is difficult and often misunderstood. I recieved a lot of positive feedback from the team here in London with requests for more information in certain areas. \nRichard Wiltshire, Principal Design Director for EALA, Fjord."
          }
        }
      ]
    }
  },
  {
    title:
      "Harnessing data-driven insights to better inform workforce planning. ",
    name: "Apex",
    department: "Accenture Strategy",
    id: "apex",
    rotation: -2,
    locked: true
  },
  {
    title: "Scaling data discovery and classification to improve complicance.",
    name: "Scout",
    department: "Accenture Operations",
    id: "scout",
    rotation: -1,
    locked: true
  },
  {
    title: "Augmenting firefighting performances through tactile feedback.",
    name: "Sense",
    department: "Dublin Institute of Technology",
    id: "sense",
    rotation: -1,
    locked: false,
    project: {
      header: {
        title: "Augmenting firefighting performances through tactile feedback.",
        image: "main",
        labels: [
          "Sense",
          "Product Design",
          "Dublin Institute of Technology, Dublin Fire Brigade"
        ],
        when: ["September 2014", "10 months", "Thesis"]
      },
      content: [
        {
          type: types.IMG_TEXT,
          position: "right",
          title: "Background",
          text:
            "Firefighting continues to be one of the most dangerous professions to date. \n\nThe vast amount of smoke, heat and noise within a fire makes predicting and interpreting conditions almost impossible.\n\nThick, heavy uniforms are restrictive and suppress the senses. Vision is extremely impaired and distorts orientation. Communication is difficult because of background noise and excessive smoke which compromises analogue radio signals. \n\nQuick decisions must be made on limited fragments of information.",
          image: "img_1",
          caption:
            "Key finding: as uniform layers increase, the senses decrease."
        },
        {
          type: types.IMG_TEXT,
          position: "left",
          title: "How might we?",
          text: {
            text:
              "How Might We help firefighters better navigate in harsh environments?\n\nObjectives for this project were to make it:",
            list: [
              "Wildly explorative: abstract research around the theme of perception, inspired by nature and neuroscience",
              "Driven by real users on-the-ground: Dublin Fire Brigade to provide continual feedback, prototypes to be used as cost-effective research probes",
              "Accessible: practical, intuitive, compatible with existing equipment and regulations"
            ]
          },
          image: "img_2",
          caption: "Early ideation: can we hack nature?"
        },
        {
          type: types.IMG_TEXT,
          position: "right",
          title: "Challenges",
          text: {
            text: "The key challenges for this project were:",
            list: [
              "Managing the process: pulling tangible insights from speculative research, keeping the momentum when building and testing ideas, time",
              "Focusing on the right problem: trusting the users when prioritising what part of the uniform to augment (helmet v’s glove)",
              "Tools and software: learning how to code, building organic shapes in SolidWorks and Rhino, sourcing physical components that could withstand high temperatures"
            ]
          },
          image: "img_3",
          caption: "Exploring the options: helmets and electronics."
        },
        {
          type: types.QUOTE,
          position: "right",
          text: "You have the understanding of no visibility in fires.",
          name: "Derek McGuinness, Logistics Officer, Dublin Fire Brigade"
        },
        {
          type: types.VIDEO,
          position: "left",
          url: "https://www.youtube.com/embed/d-fBS1M1wIk",
          caption: "Simulating a fire scene to test the prototype."
        },
        {
          type: types.SLIDESHOW_TEXT,
          position: "left",
          title: "Approach",
          text: {
            text:
              "Sense was developed as part of my Final Year Thesis but was by no means a solo effort. \n\nHere’s what brought this ten-month project to life: ",
            list: [
              "IDEO’s Human-Centered Design toolkit informed my process",
              "The mixed team at Dublin Fire Brigade provided me with first-hand insights",
              "The folk in DIT helped me explore a range of prototyping techniques, using physical materials, code and various 3D Modeling software programs"
            ]
          },
          images: [
            {
              src: "img_7",
              caption: "Heat-testing at Marino Training Centre, Dublin."
            },
            {
              src: "img_5",
              caption: "Hacking the inner shell of the helmet."
            },
            {
              src: "img_6",
              caption: "Preparing the initial electronics."
            },
            {
              src: "img_4",
              caption: "Prototype: sensor was over-exposed to heat and failed."
            }
          ],
          caption: "Prototype: sensor was over-exposed to heat and failed."
        },
        {
          type: types.IMG_TEXT,
          position: "right",
          title: "Solution",
          text:
            "Sense is small device which can be retrofitted to any type of firefighting helmet with very little effort. \n\nIts core purpose is to provide the user with an improved perception of their environment when navigating in harsh conditions with low visibility i.e. industrial fires. \n\nAn ultrasonic proximity sensor helps the user engage in non-contact obstacle detection through tactile feedback. \n\nThis feedback will intensify if a user comes too close to an obstacle and can be turned on / off on-demand.",
          image: "img_8",
          caption:
            "An ultrasonic proximity sensor is mounted behind the front plate."
        },
        {
          type: types.IMG_VIDEO,
          position: "left",
          image: {
            src: "img_9",
            caption: "Final year exhibition in DIT, Grangegorman."
          },
          url: {
            src: "https://www.youtube.com/embed/IGnHJ74pCso",
            caption: "Sense is recognised by a wider audience."
          }
        },
        {
          type: types.QUOTE,
          position: "left",
          text:
            "We were fascinated by Eilís’ train of thought, the level of research undertaken, her awareness of firefighting and her knowledge of the product, Sense.",
          name: "Patrick Fleming, Chief Fire Officer, Dublin Fire Brigade."
        },
        {
          type: types.END,
          position: "right",
          image: "img_10",
          title: "Team",
          caption: "Dublin Fire Brigade training centre in Marino, Dublin.",
          text: {
            text: "Eilis Delany, Final Year, Product Design \n\nShout out to\n",
            list: [
              "Derek Mc Guinness, Dublin Fire Brigade",
              "Richie McDonald, Dublin Fire Brigade ",
              "Dr. Ted Burke, Electrical Engineering, DIT",
              "Dr. John McGrory, Electrical Engineering, DIT"
            ]
          },
          feedback: {
            text: "James Dyson Awards: Global Finalist",
            list: [
              "Global Irish Design Challenge: Speaker and exhibitor",
              "Institute of Designers in Ireland Graduate Design Awards: Highly Commended ",
              "Dublin Institute of Technology: Best Visual Presentation of the Class of 2015"
            ]
          }
        }
      ]
    }
  },
  {
    title: "Exploring new opportunities for business model disruption.",
    name: "100 Day Sprint",
    department: "State Farm Insurance",
    id: "hundred-day-sprint",
    locked: true
  },
  {
    title:
      "Leveraging Machine Learning techniques to moderate live video in real time.",
    name: "AI in Content Moderation and Enrichment",
    department: "Accenture Communication, Media and Technology",
    id: "ai-mod",
    locked: true
  },
  {
    title: "Promoting effective meetings backed by analytics.",
    name: "Smart Scribe",
    department: "Accenture (Global AI Hakathon)",
    id: "smart-scribe",
    rotation: 3,
    locked: true
  },
  {
    title: "Creating a live gaming experience for future-forward executives. ",
    name: "BizTech Simulator",
    department: "Accenture Strategy",
    id: "biztech",
    locked: true
  }
];
