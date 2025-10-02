import { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Hero from './components/hero/Hero';
import { Footer } from './components/Footer';
import About from './components/About';
import Skills from './components/skills/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    /* Glow effect */
    const el = ref.current!;
    const glow = document.createElement('div');
    glow.className = `
      absolute w-[460px] h-[460px] top-0 left-0 overflow-visible rounded-[50%]
      opacity-0 pointer-events-none blur-[8px] mix-blend-screen 
      transition-opacity duration-150 ease-in transform-(translate-1/2)
      bg-[radial-gradient(circle,rgba(180,220,255,0.1)_0%,rgba(160,200,255,0.05)_35%,rgba(140,180,255,0.02)_55%,rgba(0,0,0,0)_75%)]
    `;
    glow.style.transform = 'translate(-50%, -50%)';
    el.appendChild(glow);

    const onEnter = () => {
      glow.style.opacity = '1';
    };
    const onLeave = () => {
      glow.style.opacity = '0';
    };

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const targetX = e.clientX - r.left;
      const targetY = e.clientY - r.top;

      if (rafRef.current == null) {
        rafRef.current = requestAnimationFrame(() => {
          glow.style.transform = `translate(${targetX}px, ${targetY}px) translate(-50%, -50%)`;
          rafRef.current = null;
        });
      }
    };

    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);
    el.addEventListener('mousemove', onMove);

    return () => {
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
      el.removeEventListener('mousemove', onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      glow.remove();
    };
  }, []);

  // Initialize AOS
  AOS.init();

  return (
    <div 
      ref={ref} 
      className='relative isolate font-nunito overflow-hidden bg-(--primary)' 
    >
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
