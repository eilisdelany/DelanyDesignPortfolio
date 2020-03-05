import React, { useEffect, useReducer } from 'react'
import PageTitle from '../../components/PageTitle'
import ContentLayout from '../../components/ContentLayout'
import Spinner from '../../components/Spinner'
import ErrorMessage from '../../components/ErrorMessage'
import { requestStates } from '../../constants'
import { merge, mapContentfulToEntity, formatContentfulDate } from '../../utils'

import './index.scss'

const FetchedArchive = ({ title, fetchData, content: Content }) => {
  const [{ requestState, archive }, dispatch] = useReducer(merge(), {
    archive: [],
    requestState: requestStates.INITIAL
  })

  const fetchArchive = async () => {
    dispatch({ requestState: requestStates.FETCHING })
    try {
      const archive = await fetchData()
      dispatch({
        archive: mapContentfulToEntity(archive).sort(
          (a, b) => new Date(b.weekStarting) - new Date(a.weekStarting)
        ),
        requestState: requestStates.SUCCESS
      })
    } catch (e) {
      dispatch({ requestState: requestStates.ERROR })
    }
  }

  useEffect(() => {
    fetchArchive()
  }, [])

  const renderStateView = state => {
    switch (state) {
      case requestStates.SUCCESS:
        return (
          <div>
            {archive.map(
              ({ weekStarting, articles: weeklyArticles }, index) => (
                <ContentLayout
                  key={index}
                  subtitle={formatContentfulDate(weekStarting)}
                  highlightOnHover
                  content={weeklyArticles.map(({ fields }, index) => (
                    <Content key={index} {...fields} />
                  ))}
                  data-test="Archive-UrlLinksRow"
                />
              )
            )}
          </div>
        )
      case requestStates.ERROR:
        return (
          <div className="centered-container">
            <ErrorMessage type="fetching" />
          </div>
        )
      case requestStates.INITIAL:
      case requestStates.FETCHING:
      default:
        return (
          <div className="centered-container">
            <Spinner />
          </div>
        )
    }
  }

  return (
    <div className="Archive">
      <PageTitle text={title} data-test="Archive-PageTitle" />
      {renderStateView(requestState)}
    </div>
  )
}

export default FetchedArchive
