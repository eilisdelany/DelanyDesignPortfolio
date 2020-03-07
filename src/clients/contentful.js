import { createClient } from 'contentful'

const contentTypes = {
  TOP_FIVE_ARTICLES: 'topFiveArticles',
  WORK_EXPERIENCE: 'workExperience'
}

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
})

const getTopFiveArticles = async () =>
  await client.getEntries({ content_type: contentTypes.TOP_FIVE_ARTICLES })

const getWorkExperience = async () =>
  await client.getEntries({ content_type: contentTypes.WORK_EXPERIENCE })

export default {
  getTopFiveArticles,
  getWorkExperience
}
