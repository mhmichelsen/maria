window.addEventListener('load', (event) => {
    lottie.loadAnimation({
        container: document.querySelector('#gh-onboarding-image-wrapper'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/static/motion/gh-onboarding.json',
        rendererSettings: {
            preserveAspectRatio: 'xMinYMin slice',
        }
    });
})