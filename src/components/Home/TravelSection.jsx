import React, { useRef, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger, CSSPlugin);

function TravelSection() {
    let itemRefs = useRef([]);

    useEffect(() => {
        // Initialize GSAP timeline
        const tl = gsap.timeline();

        // Setup animations for each item
        itemRefs.current.forEach((itemRef, index) => {
            const item = itemRef.current;

            // Initial hidden state
            tl.set(item, { opacity: 0, y: -10 });

            // Scroll-triggered animation
            ScrollTrigger.create({
                trigger: item,
                start: 'top 80%', // Start animation when 80% of the item is in view
                end: 'bottom 20%', // End animation when 20% of the item is out of view
                onEnter: () => {
                    tl.to(item, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' });
                },
                onLeaveBack: () => {
                    tl.to(item, { opacity: 0, y: -10, duration: 0.5, ease: 'power2.in' });
                },
                onEnterBack: () => {
                    tl.to(item, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' });
                },
            });

            // Hover animation
            item.addEventListener('mouseenter', () => {
                gsap.to(item, { scale: 1.1, duration: 0.3 });
            });

            item.addEventListener('mouseleave', () => {
                gsap.to(item, { scale: 1, duration: 0.3 });
            });
        });
    }, []);

    // Refs for each item
    itemRefs.current = Array(3).fill(null).map(() => useRef(null));

    return (
        <div className="relative flex justify-center items-center">
            {/* Main Heading Over All Images */}
            <h2 className="absolute top-1/2 transform -translate-y-1/2 text-4xl font-bold text-white z-10">
                Discover story-worthy travel moments
            </h2>

            {/* First Item */}
            <div ref={itemRefs.current[0]} className="relative w-1/3 h-80 overflow-hidden group travel-item rounded-md shadow-lg">
                <img
                    src="./src/assets/image1.jpg"
                    alt="Prague"
                    className="w-full h-full object-cover transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 text-white z-20">
                    <h3 className="text-xl font-bold">12 of the best free things to do in Indai</h3>
                </div>
                <div className="absolute bottom-4 right-4 text-white z-20">
                    <FaArrowRight />
                </div>
            </div>

            {/* Center Item */}
            <div ref={itemRefs.current[1]} className="relative w-1/3 h-80 overflow-hidden group travel-item rounded-md shadow-lg">
                <img
                    src="./src/assets/image6.avif"
                    alt="Main Travel"
                    className="w-full h-full object-cover transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 text-white z-20">
                    <p className="text-lg">5 destinations locals want you to visit in India</p>
                </div>
                <div className="absolute bottom-4 right-4 text-white z-20">
                    <FaArrowRight />
                </div>
            </div>

            {/* Third Item */}
            <div ref={itemRefs.current[2]} className="relative w-1/3 h-80 overflow-hidden group travel-item rounded-md shadow-lg">
                <img
                    src="./src/assets/image9.jpg"
                    alt="Img"
                    className="w-full h-full object-cover transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 text-white z-20">
                    <h3 className="text-xl font-bold">In Indai for the Summer Olympics? Here's what else is happening</h3>
                </div>
                <div className="absolute bottom-4 right-4 text-white z-20">
                    <FaArrowRight />
                </div>
            </div>
        </div>
    );
}

export default TravelSection;
