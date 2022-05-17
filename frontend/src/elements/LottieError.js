import React from 'react'
import Lottie from 'lottie-react'
import error from '../lotties/error.json'

const LottieError = () => {
  return <Lottie loop autoplay animationData={error} style={{ height: 450 }} />
}

export default LottieError
