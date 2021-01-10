import { createClient } from 'contentful'

const contentTypes = {
  TOP_FIVE_ARTICLES: 'topFiveArticles',
  WORK_EXPERIENCE: 'workExperience',
  PROJECT_ARCHIVE: 'projectArchive',
  BLOG_POSTS: 'blogPost',
}

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
})

const getTopFiveArticles = async () =>
  await client.getEntries({ content_type: contentTypes.TOP_FIVE_ARTICLES })

const getWorkExperience = async () => await client.getEntries({ content_type: contentTypes.WORK_EXPERIENCE })

const getProjectArchive = async () =>
  await client.getEntries({
    content_type: contentTypes.PROJECT_ARCHIVE,
  })

const getBlogPosts = async () => await client.getEntries({ content_type: contentTypes.BLOG_POSTS })

export default {
  getTopFiveArticles,
  getWorkExperience,
  getProjectArchive,
  getBlogPosts,
}