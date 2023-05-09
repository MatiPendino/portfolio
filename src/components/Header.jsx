'use client'
import { useState, useEffect } from 'react'

export function Header () {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.min.js')
  }, [])

  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '0px',
        threshold: 0.5
      }
    )

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section)
    })

    return () => {
      document.querySelectorAll('section[id]').forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  return (
    <header className='w-100 z-3 top-0'>
      <nav className='navbar navbar-expand-lg navbar-dark px-4'>
        <a className='navbar-brand' href='#' style={{ color: 'white' }}>Matías Pendino</a>

        <button className='navbar-toggler collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#responsiveMenu' aria-controls='responsiveMenu' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' style={{ color: 'white!important' }} />
        </button>

        <div className='collapse navbar-collapse' id='responsiveMenu'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item px-2'>
              <a className={`${activeSection === 'hero' ? 'active' : ''} nav-link`} href='#hero'>Inicio</a>
            </li>
            <li className='nav-item px-2'>
              <a className={`${activeSection === 'about' ? 'active' : ''} nav-link`} href='#about'>Sobre mí</a>
            </li>
            <li className='nav-item px-2'>
              <a className={`${activeSection === 'skills' ? 'active' : ''} nav-link`} href='#skills'>Habilidades</a>
            </li>
            <li className='nav-item px-2'>
              <a className={`${activeSection === 'experience' ? 'active' : ''} nav-link`} href='#experience'>Experiencia</a>
            </li>
            <li className='nav-item px-2'>
              <a className={`${activeSection === 'portfolio' ? 'active' : ''} nav-link`} href='#portfolio'>Proyectos</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
