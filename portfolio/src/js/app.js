import Header from '@/components/Header.vue';
import Banner from '@/components/Banner.vue';
import About from '@/components/About.vue';
import Experience from '@/components/Experience.vue';
import Projects from '@/components/Projects.vue';
import Contact from '@/components/Contact.vue';
import Footer from '@/components/Footer.vue';
import BackgroundFX from '@/components/BackgroundFX.vue';
import CustomCursor from '@/components/CustomCursor.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faArrowUp,
    faArrowPointer,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { ref, onMounted, onUnmounted } from 'vue';
import {
    canUseCustomCursor,
    customCursorEnabled,
    toggleCustomCursor,
} from '@/composables/useCustomCursor';

library.add(faArrowUp, faArrowPointer);

export default {
    components: {
        Header,
        Banner,
        About,
        Experience,
        Projects,
        Contact,
        Footer,
        BackgroundFX,
        CustomCursor,
        FontAwesomeIcon,
    },
    setup() {
        /* --------------------- scroll progress / to top --------------------- */
        const scrollProgress = ref(0);
        const showBackToTop = ref(false);

        const onScroll = () => {
            const scrollable =
                document.documentElement.scrollHeight - window.innerHeight;
            scrollProgress.value =
                scrollable > 0 ? Math.min(100, (window.scrollY / scrollable) * 100) : 0;
            showBackToTop.value = window.scrollY > 600;
        };

        const scrollToTop = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        onMounted(() => {
            onScroll();
            window.addEventListener('scroll', onScroll, { passive: true });
            window.addEventListener('resize', onScroll);
        });

        onUnmounted(() => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        });

        return {
            scrollProgress,
            showBackToTop,
            scrollToTop,
            canUseCustomCursor,
            customCursorEnabled,
            toggleCustomCursor,
        };
    },
};
