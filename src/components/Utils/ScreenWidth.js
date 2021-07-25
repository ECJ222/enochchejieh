import React from 'react'

const ScreenWidth = () => {
  const isSSR = typeof window !== 'undefined'
  const [width, setWidth] = React.useState({
    // eslint-disable-next-line
    width: isSSR ? window.innerWidth : 900
  })

  React.useEffect(() => {
    window.addEventListener('resize', () => Screen)

    return () => {
      window.addEventListener('resize', () => Screen)
    }
  }, [])

  const Screen = e => {
    setWidth({ width: e.target.innerWidth })
  }

  return width
}

export default ScreenWidth
