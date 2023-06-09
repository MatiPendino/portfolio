'use client'
import React from 'react'
import Typed from 'typed.js'

export function HeroTyped () {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null)

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Back-end developer', 'Mobile developer', 'Django developer', 'Python developer', 'WordPress developer'],
      typeSpeed: 80,
      backSpeed: 30,
      backDelay: 500,
      startDelay: 1000,
      loop: true
    })

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy()
    }
  }, [])

  return (
    <span ref={el} className='typed secondary-color' />
  )
}
