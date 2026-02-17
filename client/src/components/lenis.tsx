'use client';

import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';

export default function LenisScroll() {
    const lenisRef = useRef<Lenis | null>(null);
    const { pathname } = useLocation();

    useEffect(() => {
        // Initialize Lenis only once
        if (!lenisRef.current) {
            const lenis = new Lenis({
                duration: 1.2,
                smoothWheel: true,
                anchors: { offset: -100 },
            });

            const raf = (time: number) => {
                lenis.raf(time);
                requestAnimationFrame(raf);
            };
            requestAnimationFrame(raf);

            lenisRef.current = lenis;
        }

        // On route change, scroll to top
        if (lenisRef.current) {
            lenisRef.current.scrollTo(0, { immediate: true });
        }
    }, [pathname]);

    useEffect(() => {
        // Cleanup Lenis instance on unmount
        return () => {
            lenisRef.current?.destroy();
        };
    }, []);

    return null;
}
