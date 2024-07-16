import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

function NextTrip() {
    let itemRefs = useRef([]);

    useEffect(() => {
        const tl = gsap.timeline();

        itemRefs.current.forEach((itemRef) => {
            const item = itemRef.current;

            // Initial state (hidden)
            tl.set(item, { opacity: 0, y: 50 });

            // Scroll-triggered animation
            ScrollTrigger.create({
                trigger: item,
                start: 'top 80%',
                end: 'bottom 20%',
                onEnter: () => {
                    tl.to(item, { opacity: 1, y: 0, duration: 0.5 });
                },
                onLeaveBack: () => {
                    tl.to(item, { opacity: 0, y: 50, duration: 0.5 });
                },
                onEnterBack: () => {
                    tl.to(item, { opacity: 1, y: 0, duration: 0.5 });
                },
            });
        });
    }, []);

    itemRefs.current = Array(3).fill(null).map(() => useRef(null));

    return (
        <div className='m-2 p-5'>
            <div className="flex justify-between items-center p-5">
                <div>
                    <p className='text-sm font-medium'>PLAN YOUR TRIP</p>
                    <p className='text-4xl font-bold'>Where to next?</p>
                </div>
                <button className="text-sm rounded-lg shadow hover:bg-blue-500 hover:text-white p-2">
                    View all destinations
                </button>
            </div>

            {/* Image part */}
            <div className="flex justify-center items-center space-x-4 p-6">
                <div ref={itemRefs.current[0]} className="relative w-1/3 overflow-hidden group cursor-pointer">
                    <img
                        src="./src/assets/mumbai.jpg"
                        alt="Mumbai"
                        className="w-full h-64 object-cover rounded-md transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <h3 className="mt-2 font-bold text-center">Mumbai</h3>
                </div>

                <div ref={itemRefs.current[1]} className="relative w-1/3 overflow-hidden group cursor-pointer">
                    <img
                        src="./src/assets/assam.jpg"
                        alt="Assam"
                        className="w-full h-64 object-cover rounded-md transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <h3 className="mt-2 font-bold text-center">Assam</h3>
                </div>

                <div ref={itemRefs.current[2]} className="relative w-1/3 overflow-hidden group cursor-pointer">
                    <img
                        src="./src/assets/chennai.jpeg"
                        alt="Chennai"
                        className="w-full h-64 object-cover rounded-md transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <h3 className="mt-2 font-bold text-center">Chennai</h3>
                </div>
            </div>
        </div>
    );
}

export default NextTrip;
