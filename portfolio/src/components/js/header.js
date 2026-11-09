import { onBeforeUnmount, onMounted, ref } from 'vue';
import resume from '@/assets/Resume - Valentinus Gilbert Sanjaya.pdf';
import { identity } from '@/data/profile';

const SECTIONS = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'project', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
];

export default {
    setup() {
        const activeSection = ref('home');
        const scrolled = ref(false);
        let observer = null;

        const downloadResume = () => {
            const link = document.createElement('a');
            link.href = resume;
            link.download = 'Resume - Valentinus Gilbert Sanjaya.pdf';
            link.click();
        };

        const navigateTo = (section) => {
            document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
        };

        const onScroll = () => {
            scrolled.value = window.scrollY > 24;
        };

        onMounted(() => {
            onScroll();
            window.addEventListener('scroll', onScroll, { passive: true });

            // Highlight the nav item whose section is closest to the top of the viewport.
            observer = new IntersectionObserver(
                (entries) => {
                    const visible = entries
                        .filter((entry) => entry.isIntersecting)
                        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
                    if (visible) activeSection.value = visible.target.id;
                },
                { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] },
            );

            SECTIONS.forEach(({ id }) => {
                const el = document.getElementById(id);
                if (el) observer.observe(el);
            });
        });

        onBeforeUnmount(() => {
            window.removeEventListener('scroll', onScroll);
            observer?.disconnect();
        });

        return {
            sections: SECTIONS,
            activeSection,
            scrolled,
            identity,
            downloadResume,
            navigateTo,
        };
    },
};
