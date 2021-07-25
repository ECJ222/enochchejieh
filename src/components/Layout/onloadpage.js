/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import Logo from '../../images/logo.svg'
import { connect } from 'react-redux'
import { togglePageLoaded } from '../../state/app'

const OnLoadPage = ({ pageLoaded, dispatch }) => {
  const [pageRendered, setPageRendered] = useState(true)

  useEffect(() => {
    if (!pageLoaded) {
      setTimeout(() => {
        setPageRendered(false)
        dispatch(togglePageLoaded(true))
      }, 3000)
    } else {
      setPageRendered(false)
    }

    return () => {
      setPageRendered(true)
    }
  }, [])

  return (
    <div className={pageRendered ? 'load-container' : 'load-container hidden'}>
      <div className="content">
        <div className="loader-line-mask">
          <div className="loader-line"></div>
        </div>
        <img src={Logo} alt="logo" />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  pageLoaded: state.app.pageLoaded
})

export default connect(mapStateToProps)(OnLoadPage)
