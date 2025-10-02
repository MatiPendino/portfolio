
interface Props {
  link: string;
  id: string;
  iconClass: string;
  iconPath: string;
};

export function SocialMediaIcon ({ link, id, iconClass, iconPath }: Props) {
  return (
    <a href={link} 
      className='
        text-(--secondary) border-(--secondary) border w-10 h-10 rounded-full 
        inline-flex items-center justify-center hover:bg-(--secondary) hover:text-(--primary) 
        transition-all duration-400
      ' 
      target='_blank' id={id}
    >
      <svg 
        xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' 
        className={`bi ${iconClass}`} viewBox='0 0 16 16'
      >
        <path d={iconPath} />
      </svg>
    </a>
  )
}
