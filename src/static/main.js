window.addEventListener('load', (event) => {
    const defaultOptions = {
        renderer: 'svg',
        loop: true,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: 'xMinYMin slice',
        }
    }

    const imageOptions = [
        {
            container: document.querySelector('#gh-onboarding-image-wrapper'),
            path: '/static/motion/gh-onboarding.json',
        },
        {
            container: document.querySelector('#meddle-logo-transformation-wrapper'),
            path: '/static/motion/meddle-logo-transformation.json',
        },
        {
            container: document.querySelector('#bloom-newsongraph-transformation-wrapper'),
            path: '/static/motion/News_on_Chart_v6.json',
        }
    ];
    
    imageOptions.forEach((imageOptions) => {
        const options = { ...defaultOptions, ...imageOptions };
        if (options.container) {
            lottie.loadAnimation(options);
        }
    });
})
