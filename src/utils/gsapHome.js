import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const gsapHome = () => {
  console.log(`Anjay !`);

  let mm = gsap.matchMedia();
  let topTl = gsap.timeline({
    scrollTrigger: {
      trigger: '[gsap-element="top-header"]',
      start: 'top end',
      end: '+=200 end',
      //   markers: true,
      toggleActions: 'play none reverse none',
      scrub: 1,
    },
  });

  mm.add('(min-width: 800px)', () => {
    topTl.fromTo(
      '.page-section-buying-bitcoin',
      2.5,
      { borderRadius: '0 0 0 0' },
      { borderRadius: '12rem 12rem 0 0', duration: 2, delay: 0.5, ease: 'Power1.easeOut' }
    );
  });

  mm.add('(max-width: 799px)', () => {
    let topTl = gsap.timeline({
      scrollTrigger: {
        trigger: '[gsap-element="top-header"]',
        start: 'top end',
        end: '+=1000 end',
        //   markers: true,
        toggleActions: 'play none reverse none',
        scrub: 1,
      },
    });

    topTl.fromTo(
      '.page-section-buying-bitcoin',
      2.5,
      { borderRadius: '0 0 0 0' },
      { borderRadius: '4rem 4rem 0 0', duration: 2, delay: 0.5, ease: 'Power1.easeOut' }
    );
  });
};
