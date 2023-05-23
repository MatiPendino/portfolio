'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef } from 'react';

export default function Home () {
  const router = useRouter();
  const buttonRef = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      buttonRef.current.click();
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const handleClick = () => {
    router.push('/es')
  };

  // let height = window.innerHeight

  return (
    <>
      <button style={{display: 'none'}} ref={buttonRef} onClick={handleClick}>Cambiar idioma</button>
      <div className="w-100 text-center" style={{height: 100 + 'vh', backgroundColor: '#0a192f'}}>
        <div className="spinner-grow text-light" style={{width: 8 + 'rem', height: 8 + 'rem', position: 'relative', top: 30 + '%'}} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      
    </>
  )
}
