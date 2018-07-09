import types from "./types";

export default [
  {
    title: "Educating interdisciplinary teams on Human-AI collaboration.",
    name: "Human-Centric AI",
    department: "Fjord, Accenture",
    id: "human-centeric-ai",
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
          text:
            "How Might We develop content that explores Human-AI collaboration? \n\nWe wanted our workshop m​​aterial to be: \n- Context-aware: flexible content which could be tailored to suit different disciplines and levels of advancement, depending on attendees\n- Instantly applicable: practical activites and templates which could be used on live projects after the workshop \n- Collaborative: open format to encourage new methods and / or approaches ",
          image: "img_2",
          caption: "Dynamic teams ideating in Dublin."
        },
        {
          type: types.IMG_TEXT,
          position: "right",
          title: "Challenges",
          text:
            "The key challenges for this project were:\n\n - Avoiding bias: we reached out to various experts at The Dock to ensure our content encompassed multiple perspectives and approaches \n - Trial and error: all content was original, meaning we had to create new methods and activities from scratch - not always successful \n- Structure and suspense: balancing theoretical lessons, project learnings and demos, group activities etc.",
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
              caption:
                "Planning: Gemma Gallagher, Interaction Designer at Fjord."
            },
            { src: "img_5", caption: "Mapping and connecting our content." },
            {
              src: "img_6",
              caption: "Feedback from participants and attendees."
            },
            {
              src: "img_7",
              caption:
                "Making updates to the structure and flow of the content."
            }
          ],
          caption: "Planning: Gemma Gallagher, Interaction Designer at Fjord."
        },
        {
          type: types.IMG_TEXT,
          position: "right",
          title: "Solution",
          text:
            "Current agenda: \n- AI 101: misconceptions, practical applications, umbrella technology.\n - What, not how: the problem not the technology, combining capabilities\n - Human-AI collaboration: centaur systems, relationships and approaches \n - Guidelines and principles: interactions, teammate qualities, considerations \n - Aligning terminology: levels of AI, language",
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
          feedback: [
            {
              text:
                "Eilís, was instrumental to the design and rollout of Fjords new workshop on Design & AI. Through her work, we have developed a unique asset that has supported training, thought leadership and client engagement.",
              name: "Connor Upton, Director, Fjord."
            },
            {
              text:
                "Really pleased with the Dublin team for designing and facilitating this workshop on AI. The content is difficult and often misunderstood. I recieved a lot of positive feedback from the team here in London with requests for more information in certain areas",
              name:
                "Richard Wiltshire, Principal Design Director for EALA, Fjord."
            }
          ]
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
    locked: true
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
