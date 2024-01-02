'use client'
import AOS from 'aos'
import { useEffect } from 'react'

export function Skill ({ languageName, languageLevel, languageIconPath, lng }) {
  useEffect(() => {
    import('aos/dist/aos.css')
    AOS.init()
  }, [])
  return (
    <div className='col-6 col-lg-3 aos-init aos-animate text-center' data-aos='fade-up' data-aos-duration='1100'>
      <div className='skill-card'>
        <img src={languageIconPath} alt={`${languageName} Icon`} />
        <p className='text-'>{languageName}</p>
        <p className='fst-italic'>{languageLevel}</p>
      </div>
    </div>
  )
}
