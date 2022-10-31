import gsap from 'gsap';

export const gsapHome = () => {
  console.log(`Anjay !`);
  gsap.to('.page-section-buying-bitcoin', { borderRadius: '12rem 12rem 0 0' });
};
