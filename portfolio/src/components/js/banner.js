import HelloWorld from '@/components/HelloWorld.vue';
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
    faWhatsapp,
    faInstagram,
    faLinkedin,
    faGithub,
} from '@fortawesome/free-brands-svg-icons';
import {
    faLocationDot,
    faBriefcase,
    faArrowDown,
    faFileArrowDown,
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { identity, social, topSkills } from '@/data/profile';
import resume from '@/assets/Resume - Valentinus Gilbert Sanjaya.pdf';

library.add(
    faWhatsapp,
    faInstagram,
    faLinkedin,
    faGithub,
    faLocationDot,
    faBriefcase,
    faArrowDown,
    faFileArrowDown,
);

/** Ids of the walking pets, paired with a randomised speed. */
const PETS = ['cat', 'dog', 'pig', 'duck', 'cow', 'bear', 'pika'];

const randomSpeed = (id) =>
    id === 'pika'
        ? Math.random() * 0.2 + 0.6
        : id === 'duck'
            ? Math.random() * 0.2 + 0.1
            : Math.random() * 0.2 + 0.2;

export default {
    components: {
        HelloWorld,
        FontAwesomeIcon,
    },
    setup() {
        const frames = [];
        const timers = [];

        /* ---------------- rotating role type-writer ---------------- */
        const roleIndex = ref(0);
        const typedRole = ref('');

        const typeRole = (index = 0) => {
            const full = identity.roles[roleIndex.value];
            if (index <= full.length) {
                typedRole.value = full.slice(0, index);
                timers.push(setTimeout(() => typeRole(index + 1), 55));
            } else {
                timers.push(setTimeout(() => eraseRole(full.length), 2200));
            }
        };

        const eraseRole = (index) => {
            if (index > 0) {
                typedRole.value = identity.roles[roleIndex.value].slice(0, index - 1);
                timers.push(setTimeout(() => eraseRole(index - 1), 28));
            } else {
                roleIndex.value = (roleIndex.value + 1) % identity.roles.length;
                timers.push(setTimeout(() => typeRole(0), 220));
            }
        };

        /* ---------------- walking pets ---------------- */
        const walk = (el, speed, invert = false) => {
            const track = () => document.querySelector('.banner-container');
            let direction = Math.random() < 0.5 ? 1 : -1;
            let position = Math.random() * (track()?.offsetWidth ?? 300);

            const step = () => {
                const bannerWidth = track()?.offsetWidth ?? 0;
                position += (invert ? -1 : 1) * direction * speed;
                el.style.transform = `translateX(${position}px) scaleX(${direction})`;
                if (position >= bannerWidth - (el.width || 50) || position <= 0) {
                    direction *= -1;
                }
                frames.push(requestAnimationFrame(step));
            };

            step();
        };

        onMounted(() => {
            typeRole(0);

            const reduceMotion = window.matchMedia(
                '(prefers-reduced-motion: reduce)',
            ).matches;

            PETS.forEach((id) => {
                const el = document.getElementById(id);
                if (!el) return;
                if (reduceMotion) {
                    el.style.transform = `translateX(${Math.random() * 200}px)`;
                    return;
                }
                walk(el, randomSpeed(id), id === 'cow');
            });
        });

        onBeforeUnmount(() => {
            frames.forEach((id) => cancelAnimationFrame(id));
            timers.forEach((id) => clearTimeout(id));
        });

        /* ---------------- actions ---------------- */
        const open = (url) => window.open(url, '_blank', 'noopener,noreferrer');

        const downloadResume = () => {
            const link = document.createElement('a');
            link.href = resume;
            link.download = 'Resume - Valentinus Gilbert Sanjaya.pdf';
            link.click();
        };

        const scrollTo = (id) => {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        };

        return {
            identity,
            social,
            topSkills,
            typedRole,
            openWhatsApp: () => open(social.whatsapp),
            openInstagram: () => open(social.instagram),
            openLinkedIn: () => open(social.linkedin),
            openGitHub: () => open(social.github),
            downloadResume,
            scrollTo,
        };
    },
};
