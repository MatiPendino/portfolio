import { useRef, useEffect } from 'react';
import Typed from 'typed.js';

export function HeroTyped () {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Back-end developer', 
        'Mobile developer', 
        'Django developer', 
        'Python developer', 
        'WordPress developer'
      ],
      typeSpeed: 80,
      backSpeed: 30,
      backDelay: 500,
      startDelay: 1000,
      loop: true
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <span ref={typedRef} className='text-(--secondary) typed' />
  );
};
