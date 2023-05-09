'use client'

export function SocialMediaIcon ({ link, id, iconClass, iconPath }) {
  return (
    <a href={link} className='mx-2 secondary-color social-icon__container' target='_blank' id={id}>
      <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className={`bi ${iconClass}`} viewBox='0 0 16 16'>
        <path d={iconPath} />
      </svg>
    </a>
  )
}
