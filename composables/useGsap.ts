export const useGsap = () => {
const { $gsap, $ScrollTrigger } = useNuxtApp()

const animateOnScroll = (
target: string | Element | Element[],
fromVars: gsap.TweenVars,
toVars: gsap.TweenVars,
scrollTrigger?: ScrollTrigger.Vars
) => {
return $gsap.fromTo(target, fromVars, {
...toVars,
scrollTrigger: {
trigger: target,
start: 'top 80%',
end: 'bottom 20%',
toggleActions: 'play none none reverse',
...scrollTrigger
}
})
}
const staggerAnimation = (
target: string | Element[],
fromVars: gsap.TweenVars,
toVars: gsap.TweenVars,
stagger: number = 0.1
) => {
return $gsap.fromTo(target, fromVars, {
...toVars,
stagger,
scrollTrigger: {
trigger: target[0] || target,
start: 'top 80%'
}
})
}
const parallax = (target: string | Element, speed: number = 1) => {
return $gsap.to(target, {
yPercent: speed * 100,
ease: 'none',
scrollTrigger: {
trigger: target,
start: 'top bottom',
end: 'bottom top',
scrub: true
}
})
}
return {
gsap: $gsap,
ScrollTrigger: $ScrollTrigger,
animateOnScroll,
staggerAnimation,
parallax
}
}