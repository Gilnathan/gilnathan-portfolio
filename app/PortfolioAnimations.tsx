"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function PortfolioAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      return;
    }

    const hoverCleanups: Array<() => void> = [];
    const ctx = gsap.context(() => {
      const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      heroTimeline
        .from(".brand, .navLinks a", {
          autoAlpha: 0,
          duration: 0.65,
          stagger: 0.08,
          y: -12
        })
        .from(
          ".eyebrow, .heroCopy h1, .heroCopy h2, .heroSummary, .heroActions .button",
          {
            autoAlpha: 0,
            duration: 0.75,
            stagger: 0.1,
            y: 28
          },
          "-=0.25"
        )
        .from(
          ".haloOne, .haloTwo, .lineArt",
          {
            autoAlpha: 0,
            duration: 0.9,
            rotate: -18,
            scale: 0.86,
            stagger: 0.1
          },
          "-=0.65"
        )
        .from(
          ".skillTrack span",
          {
            autoAlpha: 0,
            duration: 0.5,
            stagger: 0.045,
            y: 12
          },
          "-=0.35"
        );

      gsap.to(".haloOne", {
        duration: 7,
        ease: "sine.inOut",
        repeat: -1,
        rotate: 5,
        scale: 1.025,
        yoyo: true
      });

      gsap.to(".haloTwo", {
        duration: 8,
        ease: "sine.inOut",
        repeat: -1,
        rotate: -6,
        scale: 0.98,
        yoyo: true
      });

      gsap.to(".lineLeft", {
        duration: 5.5,
        ease: "sine.inOut",
        repeat: -1,
        x: -8,
        y: 10,
        yoyo: true
      });

      gsap.to(".lineRight", {
        duration: 6,
        ease: "sine.inOut",
        repeat: -1,
        x: 10,
        y: -8,
        yoyo: true
      });

      gsap.utils.toArray<HTMLElement>(".buildOptions .projectCard, .contactContainer > *").forEach((element) => {
        gsap.from(element, {
          autoAlpha: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 86%",
            toggleActions: "play none none reverse"
          },
          y: 34
        });
      });

      gsap.utils.toArray<HTMLElement>(".buildOptions .projectCard").forEach((card) => {
        const lift = gsap.to(card, {
          duration: 0.25,
          ease: "power2.out",
          paused: true,
          y: -8
        });

        const playLift = () => lift.play();
        const reverseLift = () => lift.reverse();

        card.addEventListener("mouseenter", playLift);
        card.addEventListener("mouseleave", reverseLift);
        hoverCleanups.push(() => {
          card.removeEventListener("mouseenter", playLift);
          card.removeEventListener("mouseleave", reverseLift);
        });
      });
    });

    return () => {
      hoverCleanups.forEach((cleanup) => cleanup());
      ctx.revert();
    };
  }, []);

  return null;
}
