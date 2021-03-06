export const pages = {
  ITS_ME: {
    path: '/',
    title: "It's me",
    subpages: {
      MANTRA: '/mantra',
      GRINDIN: '/grindin',
      SAY_WHAT: '/say-what',
      REAL_NEWS: '/real-news',
      PINCH_ME: '/pinch-me',
      DREAM_DINNER: '/dream-dinner'
    }
  },
  PROJECT_ARCHIVE: {
    path: '/archive',
    title: 'archive'
  },
  TOP_FIVE: {
    path: '/top-five',
    title: 'Top five',
    pageTitle:
      'This is my digital treasure trove - a curated collection of links covering business, technology, design and personal growth.'
  },
  WORDS: {
    path: '/words',
    title: 'Words',
    pageTitle:
      'Now and again, I share my point of view. It passes time on commutes.'
  },
  HIT_LIST: {
    path: '/hit-list',
    title: 'Hit list',
    pageTitle:
      'My personal library consists of fifteen books, none of which sit on a shelf untouched. Each one is bought to serve a purpose and when complete, is passed on to a friend. I want this page to act as a visual diary for those looking for more than bite sized articles on digital devices.'
  },
  LETS_TALK: {
    path: '/lets-talk',
    title: "Let's talk",
    pageTitle: "What's it gonna be?"
  }
}

export const pageKeys = Object.keys(pages)
