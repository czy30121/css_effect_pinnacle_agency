gsap.registerPlugin(ScrollTrigger);
const lenis = new Lenis({
	duration: 1.2,
	easing: (t) => Math.min((1, 1.001 - Math.pow(2, -10 * t))),
});
function raf(time) {
	lenis.raf(time);
	ScrollTrigger.update();
	requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

const isMobile = window.innerWidth <= 768;
const isgrtlaptop = window.innerWidth >= 1300;
const istab = window.innerWidth >= 768 && window.innerWidth <= 840;

console.log(isMobile);

gsap.to(".homeimg", {
	rotateX: "0deg",
	duration: 1,
	scrollTrigger: {
		trigger: ".homeimg",
		start: "top 10%",
		end: "bottom 10%",
		scrub: 1,
	},
});

gsap.to(".codeimg", {
	y: 500,
	duration: 30,
	scrollTrigger: {
		trigger: ".codeimg",
		start: "top 10%",
		end: "bottom 0%",
		scrub: 1,
	},
});

gsap.to(".codeimg", {
	opacity: 0,
	duration: 3,
	scrollTrigger: {
		trigger: ".codeheader",
		start: "top 50%",
		end: "bottom center",
		scrub: 1,
	},
});

gsap.fromTo(
	".codehead",
	{
		y: 200,
		opacity: 0,
	},
	{
		y: 0,
		opacity: 1,
		duration: 1,
		ease: "power2.out",
		scrollTrigger: {
			trigger: ".codeimg",
			start: "top 40%",
			end: "bottom 50%",
			scrub: 1,
		},
	}
);

gsap.to(".codeheader", {
	opacity: 0,
	duration: 3,
	scrollTrigger: {
		trigger: ".resphead",
		start: "top 80%",
		end: "bottom 50%",
		scrub: 1,
	},
});

gsap.to(".codesubhead", {
	opacity: 0,
	duration: 3,
	scrollTrigger: {
		trigger: ".resphead",
		start: "top 50%",
		end: "bottom 50%",
		scrub: 1,
	},
});

gsap.to(".respimg", {
	opacity: 0,
	y: -1000,
	duration: 1,
	scrollTrigger: {
		trigger: ".respimg1",
		start: "top 70%",
		end: "bottom 190%",
		scrub: 1,
	},
});

gsap.to(".respimg1", {
	opacity: 1,
	duration: 1,
	scrollTrigger: {
		trigger: ".respimg1",
		start: "top 70%",
		end: "bottom 190%",
		scrub: 1,
	},
});

gsap.fromTo(
	".resphead",
	{
		opacity: 0,
		ease: "power2.out",
		duration: 2,
	},
	{
		opacity: 1,
		scrollTrigger: {
			trigger: ".codesubhead",
			start: "top 80%",
			end: "bottom 70%",
			scrub: 1,
		},
	}
);

gsap.to(".resphead", {
	duration: 1,
	y: -300,
	scrollTrigger: {
		trigger: ".respimg3",
		start: "top 40%",
		end: "bottom 90%",
		scrub: 1,
	},
});

gsap.to(".respimg1", {
	// opacity: 0,
	y: -1000,
	duration: 1,
	scrollTrigger: {
		trigger: ".respimg2",
		start: "top 78%",
		end: "bottom 190%",
		scrub: 1,
	},
});

gsap.to(".respprojects", {
	opacity: 1,
	duration: 1,
	scrollTrigger: {
		trigger: ".respimg2",
		start: "top 58%",
		end: "bottom 190%",
		scrub: 1,
	},
});

const images = document.querySelectorAll(".respprojects img");
let currentIndex = 1;

gsap.to(".respimg2", {
	scale: 0.7,
	opacity: 0,
	scrollTrigger: {
		trigger: ".respimg3",
		start: "top 20%",
		end: "bottom 50%",
		scrub: 1,
	},
});

function showImage(index) {
	gsap.to(images[currentIndex], { opacity: 0, zIndex: 3, y: -50, duration: 1 });
	gsap.to(images[index], { opacity: 1, zIndex: 6 + index, duration: 1, y: 0 });
	currentIndex = index;
}

// gsap.fromTo(
// 	".respimg4",
// 	{
// 		opacity: 0,
// 	},
// 	{
// 		opacity: 1,
// 		zIndex: 999,
// 		scrollTrigger: {
// 			trigger: ".foot_main",
// 			start: "top 80%",
// 			duration: 1,
// 		},
// 	}
// );

gsap.to(".second_img", {
	scale: 1.4,
	opacity: 1,
	duration: 1,
	scrollTrigger: {
		trigger: ".respprojects",
		start: "top 10%",
		end: "bottom 78%",
		scrub: 1,
	},
});

gsap.fromTo(
	".second_img",
	{
		y: 0,
		opacity: 1,
	},
	{
		y: -150,
		opacity: 0,
		scrollTrigger: {
			trigger: ".respfoot",
			start: "top 40%",
			end: "bottom 38%",
			scrub: 1,
		},
	}
);

gsap.fromTo(
	".respimg4",
	{
		opacity: 0,
	},
	{
		scale: 1.6,
		opacity: 1,
		scrollTrigger: {
			trigger: ".respfoot",
			start: "top 40%",
			end: "bottom 78%",
			scrub: 1,
		},
	}
);

gsap.fromTo(
	".respimg4",
	{
		opacity: 1,
	},
	{
		y: -100,
		opacity: 0,
		scrollTrigger: {
			trigger: ".respfoot",
			start: "top 20%",
			end: "bottom 70%",
			scrub: 1,
		},
	}
);

// gsap.fromTo(
// 	".respimg5",
// 	{
// 		opacity: 0,
// 	},
// 	{
// 		scale: 1.6,
// 		opacity: 1,
// 		scrollTrigger: {
// 			trigger: ".respfoot",
// 			start: "top 40%",
// 			end: "bottom 78%",
// 			scrub: 1,
// 		},
// 	}
// );

gsap.fromTo(
	".respimg6",
	{
		opacity: 0,
	},
	{
		scaleY: 2.15,
		scaleX: 2.12,
		opacity: 1,
		scrollTrigger: {
			trigger: ".respfoot",
			start: "top 16%",
			end: "bottom 0%",
			scrub: 1,
		},
	}
);

gsap.fromTo(
	".respimg6",
	{},
	{
		scale: 1.2,
		scrollTrigger: {
			trigger: ".foot_main",
			start: "top 90%",
			end: "bottom 20%",
			scrub: 1,
		},
	}
);

gsap.to(".respimg4", {
	opacity: 1,
	duration: 1,
	scrollTrigger: {
		trigger: ".second_img",
		start: "top 0%",
		end: "bottom 90%",
		scrub: 1,
	},
});

const maskTimeline = gsap.timeline({
	paused: true,
	delay: 5,
	scrollTrigger: {
		trigger: ".resp6scale",
		start: "top 0%",
		end: "bottom 100%",
		scrub: 10,
	},
});

gsap.to(
	{},
	{
		duration: 3,
		scrollTrigger: {
			trigger: ".respprojects",
			start: "top 20%",
			end: "bottom 90%",
			scrub: 1,
			onUpdate: (self) => {
				const progress = self.progress;
				const indexToShow = Math.floor(progress * (images.length - 1));
				// showImage(indexToShow);
				const respimg5Opacity = gsap.getProperty(".respimg5", "opacity");
				if (indexToShow === images.length - 1 && respimg5Opacity === 1) {
					maskTimeline.play();
				}
			},
		},
	}
);

const yvalue = isMobile ? "40" : "100";

maskTimeline
	.fromTo(
		".mask",
		{ opacity: 0 },
		{
			opacity: 1,
			duration: 2,
			ease: "power2.out",
		}
	)
	.to(".mask", {
		top: isMobile ? "2rem" : "0rem",
		clipPath: "polygon(0% 45%, 100% 45%, 100% 55%, 0 55%)",
		duration: 5,
		ease: "power2.out",
	})
	.to(".respimg6", {
		height: isMobile ? "120px" : "200px",
		width: isMobile ? "160px" : "316px",
		top: isMobile ? "2.5rem" : "8rem",
		left: isMobile ? "3rem" : "11rem",
		duration: 5,
		ease: "power2.out",
	})
	.to(".mask", {
		clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
		height: isMobile ? "220px" : "520px",
		width: isMobile ? "250px" : "655px",
		duration: 5,
		ease: "power2.out",
	})
	.fromTo(
		".respfoot",
		{
			opacity: 1,
		},
		{
			opacity: 0,
			delay: 2,
			ease: "power2.out",
			scrollTrigger: {
				trigger: ".respimg6",
				start: "top 0%",
				end: "bottom 80%",
				scrub: 1,
			},
		}
	)
	.to(".respfoot", {
		opacity: 0,
		duration: 2,
		ease: "power2.out",
	})
	.to(".respimg6", {
		y: yvalue,
		duration: 2,
		ease: "power2.out",
	});

const images1 = document.querySelectorAll(".porjimg");

images1.forEach((image, index) => {
	let scrubValue;
	if (index === 0) {
		scrubValue = 0.5;
	} else if (index === 1) {
		scrubValue = 3;
	} else if (index === 2) {
		scrubValue = 2.0;
	} else if (index === 3) {
		scrubValue = 0.8;
	} else if (index === 4) {
		scrubValue = 0.5;
	} else {
		scrubValue = 1.0;
	}

	gsap.to(image, {
		y: -200,
		duration: 1,
		scrollTrigger: {
			trigger: image,
			start: "top center",
			end: "bottom center",
			scrub: scrubValue,
		},
	});
});

gsap.fromTo(
	".footerhead",
	{
		opacity: 0,
	},
	{
		opacity: 1,
		duration: 1,
		ease: "power2.out",
		scrollTrigger: {
			trigger: ".footerbtns",
			start: "top 90%",
			end: "bottom 50%",
		},
	}
);

// Retouching page

gsap.to(".hero1", {
	opacity: 0,
	duration: 1,
	ease: "power2.out",
	scrollTrigger: {
		trigger: ".hero2",
		start: "top 40%",
		end: "bottom 90%",
		scrub: 1,
	},
});

gsap.fromTo(
	".per_img",
	{
		opacity: 1,
	},
	{
		// width: "100%",
		margin: "0 -55px",
		duration: 1,
		ease: "power2.out",
		scrollTrigger: {
			trigger: ".hero2",
			start: "top 40%",
			end: "bottom 40%",
			scrub: 1,
		},
	}
);

gsap.fromTo(
	".hero2",
	{
		opacity: 0,
	},
	{
		opacity: 1,
		// width: "100%",
		// margin: "-1%",

		duration: 1,
		ease: "power2.out",
		scrollTrigger: {
			trigger: ".hero2",
			start: "top 40%",
			end: "bottom 90%",
			scrub: 1,
		},
	}
);

gsap.to(".hero2", {
	opacity: 0,
	duration: 1,
	ease: "power2.out",
	scrollTrigger: {
		trigger: ".hero2",
		start: "top -15%",
		end: "top 10%",
		scrub: 1,
	},
});

// gsap.fromTo(
// 	".hero3",
// 	{
// 		opacity: 0,
// 		y: 100,
// 	},
// 	{
// 		opacity: 1,
// 		y: 100,
// 		duration: 1,
// 		ease: "power2.out",
// 		scrollTrigger: {
// 			trigger: ".hero2",
// 			start: "top 20%",
// 			end: "bottom 100%",
// 			scrub: 1,
// 		},
// 	}
// );

gsap.to(".hero3", {
	opacity: 0,
	duration: 2,
	ease: "power2.out",
	scrollTrigger: {
		trigger: ".hero4",
		start: "top 0%",
		end: "bottom 100%",
		scrub: 1,
	},
});

gsap.to(".rsubheading1", {
	opacity: 0,
	duration: 1,
	ease: "power2.out",
	scrollTrigger: {
		trigger: ".hero2",
		start: "top 40%",
		end: "bottom 90%",
		scrub: 1,
	},
});

gsap.fromTo(
	".rsubheading2",
	{
		opacity: 0,
		width: isMobile ? "70%" : "50%",
	},
	{
		opacity: 1,
		width: isMobile ? "90%" : "70%",
		duration: 1,
		ease: "power2.out",
		scrollTrigger: {
			trigger: ".hero2",
			start: "top 40%",
			end: "bottom 100%",
			scrub: 1,
		},
	}
);

gsap.to(".rheadingsection", {
	opacity: 0,
	duration: 1,
	ease: "power2.out",
	scrollTrigger: {
		trigger: ".hero2",
		start: "top 20%",
		end: "bottom 90%",
		scrub: 1,
	},
});

// gsap.to(".rmask", {
// 	opacity: 1,
// 	ease: "power2.out",
// 	scrollTrigger: {
// 		trigger: ".hero4",
// 		start: "top 30%",
// 		end: "bottom 90%",
// 		scrub: 1,
// 	},
// });

gsap.to(".rmask", {
	opacity: 1,
	scrollTrigger: {
		trigger: ".hero3",
		start: "top 40%",
		end: "bottom 40%",
		scrub: 1,
	},
});

gsap.to(".rmask", {
	clipPath: "inset(0% 0% round 3px)",
	ease: "power2.out",
	scrollTrigger: {
		trigger: ".hero3",
		start: "top 40%",
		end: "bottom 10%",
		scrub: 1,
	},
});

gsap.to(".rmask", {
	y: 320,
	ease: "power2.out",
	scrollTrigger: {
		trigger: ".rcarsubheading",
		start: "top 75%",
		end: "bottom 50%",
		scrub: 1,
	},
});

gsap.to(".hero4", {
	scaleY: 2.15,
	scaleX: 2.12,
	ease: "power2.out",
	scrollTrigger: {
		trigger: ".rcarsubheading",
		start: "top 50%",
		end: "bottom 30%",
		scrub: 1,
	},
});

gsap.fromTo(
	".carheader",
	{
		y: 100,
		opacity: 0,
	},
	{
		y: 0,
		opacity: 1,
		ease: "power2.out",
		scrollTrigger: {
			trigger: ".rcarsubheading",
			start: "top 40%",
			end: "bottom 50%",
			scrub: 1,
		},
	}
);

gsap.to(".hero4", {
	opacity: 0,
	ease: "power2.out",
	scrollTrigger: {
		trigger: ".rcompostimgs",
		start: "top 70%",
		end: "bottom 30%",
		scrub: 1,
	},
});
gsap.fromTo(
	".rcomi",
	{
		width: "100%",
	},
	{
		width: isMobile ? "35%" : "300px",
		y: 560,
		ease: "power2.out",
		scrollTrigger: {
			trigger: ".rcomi",
			start: "top 55%",
			end: "bottom 50%",
			scrub: 1,
		},
	}
);

gsap.fromTo(
	".rcompheader",
	{
		opacity: 0,
		// y: 100,
	},
	{
		opacity: 1,
		// y: isMobile ? 0 : 100,
		ease: "power2.out",
		scrollTrigger: {
			trigger: ".rcomi",
			start: "top 26%",
			end: "bottom 0%",
			scrub: 1,
		},
	}
);

// gsap.to(".rcompheader", {
// 	opacity: 0,
// 	ease: "power2.out",
// 	y: -100,
// 	scrollTrigger: {
// 		trigger: ".rcomi",
// 		start: isMobile || istab ? "top 0%" : "top 30%",
// 		end: "bottom 50%",
// 		scrub: 1,
// 	},
// });

gsap.fromTo(
	".rcomimgs",
	{
		y: 100,
		opacity: 0,
	},
	{
		y: 0,
		opacity: 1,
		ease: "power2.out",
		scrollTrigger: {
			trigger: ".rcomi",
			start: "top 80%",
			end: "bottom 100%",
			scrub: 1,
		},
	}
);

const imageshifting = gsap.timeline({
	delay: 4,
	scrollTrigger: {
		trigger: ".rcomimgs",
		start: "top 60%",
		end: "bottom 100%",
		scrub: 3,
	},
});

imageshifting
	.to(".rimg2i", {
		opacity: 0,
		duration: 1,
		ease: "power2.out",
	})
	.to(".rimg1ii", {
		opacity: 0,
		duration: 2,
		ease: "power2.out",
	})
	.to(".rimg3ii", {
		opacity: 0,
		duration: 2,
		ease: "power2.out",
	})
	.to(".rimg2ii", {
		opacity: 1,
		scale: isMobile ? 0.5 : 0.4,
		x: isMobile ? "150%" : "130%",
		y: isgrtlaptop ? "19%" : istab ? "-0%" : isMobile ? "60%" : "-5%",
		duration: 1,
		ease: "power2.out",
	})
	.to(".rimg3i", {
		x: isgrtlaptop ? "-126%" : istab ? "-72%" : isMobile ? "-118%" : "-150%",
		y: isMobile ? "100%" : "-10%",
		// width: isMobile ? "110%" : "",
		duration: 1,
		ease: "power2.out",
	});

gsap.fromTo(
	".rcompostimgs",
	{
		opacity: 1,
	},
	{
		opacity: 0,
		ease: "power2.out",
		scrollTrigger: {
			trigger: ".rproj1",
			start: "top 60%",
			end: "top 50%",
			scrub: 1,
		},
	}
);

gsap.fromTo(
	".final",
	{
		opacity: 0,
	},
	{
		opacity: 1,
		scrollTrigger: {
			trigger: ".final__img",
			start: "top center",
			end: "bottom center",
		},
	}
);

// gsap.fromTo(
// 	".final",
// 	{
// 		opacity: 0,
// 	},
// 	{
// 		opacity: 1,
// 		scrollTrigger: {
// 			trigger: ".final__img",
// 			start: "top 2%",
// 			end: "bottom 2%",
// 		},
// 	}
// );

gsap.fromTo(
	".final",
	{
		y: 0,
	},
	{
		y: 800,
		ease: "power2.out",
		scrollTrigger: {
			trigger: ".rproj1",
			start: "top 50%",
			end: "bottom 0%",
			scrub: 1,
		},
	}
);
// gsap.to(".rcompostimgs", {
// 	opacity: 1,
// 	scrollTrigger: {
// 		trigger: ".rproj1",
// 		start: "top 50%",
// 		end: "bottom 0%",
// 		scrub: 1,
// 	},
// });

// gsap.To(".rimg3i", {
// 	opacity: 0,
// 	ease: "power2.out",
// 	scrollTrigger: {
// 		trigger: ".rproj1",
// 		start: "top 50%",
// 		end: "bottom 40%",
// 		scrub: 1,
// 	},
// });

// gsap.To(".rimg2ii", {
// 	ease: "power2.out",
// 	opacity: 0,
// 	scrollTrigger: {
// 		trigger: ".rproj1",
// 		start: "top 50%",
// 		end: "bottom 40%",
// 		scrub: 1,
// 	},
// });
// gsap.To(".rimg1i", {
// 	ease: "power2.out",
// 	opacity: 0,
// 	scrollTrigger: {
// 		trigger: ".rproj1",
// 		start: "top 50%",
// 		end: "bottom 40%",
// 		scrub: 1,
// 	},
// });

// gsap.To(".final", {
// 	opacity: 1,
// 	scrollTrigger: {
// 		trigger: ".rcomimgs",
// 		start: "top 50%",
// 		end: "bottom 100%",
// 		scrub: 1,
// 	},
// });

const images2 = document.querySelectorAll(".rporjimg");

images2.forEach((image, index) => {
	let scrubValue;
	if (index === 0) {
		scrubValue = 0.5;
	} else if (index === 1) {
		scrubValue = 3;
	} else if (index === 2) {
		scrubValue = 2.0;
	} else if (index === 3) {
		scrubValue = 0.8;
	} else if (index === 4) {
		scrubValue = 0.5;
	} else if (index === 5) {
		scrubValue = 3.5;
	} else {
		scrubValue = 1.0;
	}

	gsap.to(image, {
		y: -200,
		duration: 1,
		scrollTrigger: {
			trigger: image,
			start: "top center",
			end: "bottom center",
			scrub: scrubValue,
		},
	});
});
