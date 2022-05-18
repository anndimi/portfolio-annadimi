import React from 'react'
import Lottie from 'lottie-react'
import avatar from '../lotties/avatar.json'

const LottieAvatar = () => {
  return <Lottie loop autoplay animationData={avatar} style={{ height: 550 }} />
}

export default LottieAvatar
