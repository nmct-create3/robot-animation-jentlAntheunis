const init = () => {
    let tl = gsap.Timeline({
        defaults: {
            duration: .1,
            ease: 'power1.inOut',
        },
    });

    tl.fromTo('#Robot',{
        y: 2.5,
      },{
        y: -2.5,
      })
      .to('#Shadow', {
        scale: 0.75,
      },
        '-=.75',
      )

};

document.addEventListener('DOMContentLoaded', init);
