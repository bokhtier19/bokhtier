import { useEffect, useState } from "react";

export default function useActiveSection(sectionIds: string[]) {
    const [active, setActive] = useState(sectionIds[0]);

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActive(id);
                        }
                    });
                },
                {
                    root: null,
                    rootMargin: "0px",
                    threshold: 0.3,
                }
            );

            observer.observe(el);
            observers.push(observer);
        });

        // 👇 extra check for scroll-to-top
        const handleScrollTop = () => {
            if (window.scrollY < 100) {
                setActive(sectionIds[0]); // always reset to first section (home)
            }
        };
        window.addEventListener("scroll", handleScrollTop);

        return () => {
            observers.forEach((obs) => obs.disconnect());
            window.removeEventListener("scroll", handleScrollTop);
        };
    }, [sectionIds]);

    return active;
}
