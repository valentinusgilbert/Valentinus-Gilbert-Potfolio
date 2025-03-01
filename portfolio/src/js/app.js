import Header from '@/components/Header.vue';
import Banner from '@/components/Banner.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { ref } from 'vue';
import music from '@/assets/music/music.mp3';

library.add(faPlay, faPause);

export default {
    components: {
        Header,
        Banner,
        FontAwesomeIcon
    },
    setup() {
        const isPlaying = ref(false);
        const audio = new Audio(music);

        const togglePlay = () => {
            if (isPlaying.value) {
                audio.pause();
                isPlaying.value = false;
            } else {
                audio.play();
                isPlaying.value = true;
            }
        };

        return {
            isPlaying,
            togglePlay
        }
    }
}