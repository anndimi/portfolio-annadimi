import React from 'react'
import Lottie from 'lottie-react'
import loader from '../lotties/loader.json'

const Loader = () => {
  return <Lottie loop autoplay animationData={loader} style={{ height: 450 }} />
}

export default Loader
