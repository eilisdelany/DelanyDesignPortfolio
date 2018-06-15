import types from "./types";

export default [
  {
    title: "Educating interdisciplinary teams on Human-AI collaboration.",
    name: "Human-Centric AI",
    department: "Accenture, Fjord",
    id: "human-centered-ai",
    locked: false,
    project: {
      header: {
        title: "Launching something cool to benefit someone in need.",
        image: "main",
        labels: ["Human-Centric AI", "Category", "Fjord"],
        when: ["June 2017", "6 weeks", "Explore and Validate"]
      },
      content: [
        {
          type: types.IMG_TEXT,
          position: "right",
          title: "Background",
          text:
            "Nothing is ever stratightforward so explore alternative ways to proceed and don’t overcomplicate the problem (or solution). \n\nNothing is ever stratightforward so explore alternative ways to proceed and don’t overcomplicate the problem (or solution). \n\nNothing is ever stratightforward so explore alternative ways to proceed and don’t overcomplicate the problem (or solution). ",
          image: "img_1",
          caption: "Create something something"
        },
        {
          type: types.IMG_TEXT,
          position: "left",
          title: "How might we?",
          text:
            "Nothing is ever stratightforward so explore alternative ways to proceed and don’t overcomplicate the problem (or solution). \n\nNothing is ever stratightforward so explore alternative ways to proceed and don’t overcomplicate the problem (or solution). \n\nNothing is ever stratightforward so explore alternative ways to proceed and don’t overcomplicate the problem (or solution). ",
          image: "img_2",
          caption: "Create something something"
        },
        {
          type: types.IMG_TEXT,
          position: "right",
          title: "Challenges",
          text:
            "Nothing is ever stratightforward so explore alternative ways to proceed and don’t overcomplicate the problem (or solution). \n\nNothing is ever stratightforward so explore alternative ways to proceed and don’t overcomplicate the problem (or solution). \n\nNothing is ever stratightforward so explore alternative ways to proceed and don’t overcomplicate the problem (or solution). ",
          image: "img_3",
          caption: "Create something something"
        },
        {
          type: types.QUOTE,
          position: "right",
          text: "“Launching something cool to benefit someone in need.”",
          name: "Name of Person"
        },
        {
          type: types.VIDEO,
          position: "left",
          video: "video_1",
          caption: "Create Something Something"
        },
        {
          type: types.SLIDESHOW_TEXT,
          position: "left",
          title: "Approach",
          text:
            "Nothing is ever stratightforward so explore alternative ways to proceed and don’t overcomplicate the problem (or solution). \n\nNothing is ever stratightforward so explore alternative ways to proceed and don’t overcomplicate the problem (or solution). \n\nNothing is ever stratightforward so explore alternative ways to proceed and don’t overcomplicate the problem (or solution). ",
          images: ["img_4", "img_5", "img_6", "img_7"],
          caption: "Create Something Something"
        },
        {
          type: types.IMG_TEXT,
          position: "right",
          title: "Solution",
          text:
            "Nothing is ever stratightforward so explore alternative ways to proceed and don’t overcomplicate the problem (or solution). \n\nNothing is ever stratightforward so explore alternative ways to proceed and don’t overcomplicate the problem (or solution). \n\nNothing is ever stratightforward so explore alternative ways to proceed and don’t overcomplicate the problem (or solution). ",
          image: "img_8",
          caption: "Create something something"
        },
        {
          type: types.IMG_VIDEO,
          position: "left",
          image: {
            src: "img_9",
            caption: "Create something something"
          },
          video: {
            image: "video_2",
            caption: "Create something something"
          }
        },
        {
          type: types.QUOTE,
          position: "left",
          text:
            "“Thank you so much for today. It was excellent - extremely relevant to so much of our client work and such a unique Dock-like multidisciplinary angle.”",
          name: "Eva Magure, Innovation Nexus Lead, Accenture."
        },
        {
          type: types.END,
          position: "right",
          img: "img_10",
          content: [
            {
              title: "Team",
              text:
                "Gemma Gallagher, Interaction Designer\nEilis Delany, Business Designer \nConnor Upton, Design Director   \n\nShoutout to\nJivan Virdee, Data Scientist\nGaurav Kaila, AI Specialist "
            },
            {
              title: "Feedback",
              text:
                "“I wanted to reach out at the end of the week to say how much I enjoyed and learned from the Human Centric AI workshop this week. I really enjoyed the format and content.” \nJulie Spillane, Director, The Dock.\n\n“Fantastic workshop this morning, guys. Very clear, deep thinking presented in a very concise and understandable way. Delighted I was able to attend.”\nDonnacha, Service Design Lead, Fjord."
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
