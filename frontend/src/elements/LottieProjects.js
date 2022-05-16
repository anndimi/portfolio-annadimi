import React from 'react'
import Lottie from 'lottie-react'
import projects from '../lotties/projects.json'

const LottieProjects = () => {
  return (
    <Lottie loop autoplay animationData={projects} style={{ height: 450 }} />
  )
}

export default LottieProjects
