const init = () => {
  let hover = gsap.timeline({
    defaults: {
      duration: 1,
      ease: 'power1.inOut',
      repeat: Infinity,
      yoyo: true,
    },
  });

  hover.set('#Shadow', { transformOrigin: '50% 100%' })
    .to('#Robot', { y: -2.5, })
    .to('#Shadow', {
      scale: 0.75,
    },
    {
      scale: 1,
    }
  );

  let head = gsap.timeline({
    defaults: {
      duration: .8,
      ease: 'power1.inOut',
      repeat: Infinity,
      yoyo: true,
    },
  });

  head.set('#Head', { transformOrigin: '50% 100%', })
    .to('#Head', {
      rotate: 2,
    },
  )

  let armWave = gsap.timeline({
    defaults: {
      duration: .3,
      ease: 'power1.inOut',
      repeat: Infinity,
      yoyo: true,
    },
  });

  armWave.set('#Arm-left', {
    transformOrigin: '100% 0%'
  })
  .set('#Arm-right', {
    transformOrigin: '0% 50%'
  })
  .to('#Arm-left', { rotate: 1 })
  .to('#Arm-right', { rotate: -15 }, '<');

};

document.addEventListener('DOMContentLoaded', init);
