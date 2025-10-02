import { LOGOS } from '../../data';

export default function InfiniteLogoSlider () {
  // Duplicate once so animation can scroll smoothly
  const doubledLogos = [...LOGOS, ...LOGOS];

  return (
    <div
      className='
        h-42 relative overflow-hidden rounded-xl bg-(--primary-dark)
        before:content-[""] after:content-[""]
        before:absolute before:top-0 before:bottom-0 after:absolute after:top-0 after:bottom-0
        before:w-[120px] after:w-[120px]
        before:pointer-events-none before:z-[2] after:pointer-events-none after:z[2]
        before:left-0 after:right-0
        before:bg-[linear-gradient(to_right,var(--primary-dark)_0%,rgba(31,35,41,0)_100%)]
        after:bg-[linear-gradient(to_left,var(--primary-dark)_0%,rgba(31,35,41,0)_100%)]
      '
    >
      <div className='grid absolute items-center inset-0'>
        <div className='marquee flex flex-row items-center gap-16'>
          {doubledLogos.map((logo, i) => (
            <div 
              className='
                grid place-items-center bg-white/4 rounded-2xl w-23 h-23
                shadow-[inset_0_10px_30px_rgba(0,0,0,0.18),_0_4px_18px_rgba(0,0,0,0.24)]
              '
              key={i}
            >
              <img className='
                  max-w-7/10 max-h-7/10 grayscale brightness-[0.85] opacity-90 transition-all
                  hover:opacity-100 hover:-translate-y-px hover:grayscale-0 hover:brightness-100
                ' 
                src={logo.src} alt={logo.alt ?? ''} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
