import React, { useEffect, useReducer } from 'react'
import Spinner from '../../components/Spinner'
import ErrorMessage from '../../components/ErrorMessage'
import { requestStates } from '../../constants'
import { merge, mapContentfulToEntity } from '../../utils'

import './index.scss'

const unsorted = data => data

const StatefulComponent = ({ fetchData, sortData = unsorted, children }) => {
  const [{ requestState, data }, dispatch] = useReducer(merge(), {
    archive: [],
    requestState: requestStates.INITIAL
  })

  const fetch = async () => {
    dispatch({ requestState: requestStates.FETCHING })
    try {
      const data = await fetchData()
      dispatch({
        data: sortData(mapContentfulToEntity(data)),
        requestState: requestStates.SUCCESS
      })
    } catch (e) {
      dispatch({ requestState: requestStates.ERROR })
    }
  }

  useEffect(() => {
    fetch()
  }, [])

  const switchStateView = state => {
    switch (state) {
      case requestStates.SUCCESS:
        return React.cloneElement(children, { data })
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

  return switchStateView(requestState)
}

export default StatefulComponent
