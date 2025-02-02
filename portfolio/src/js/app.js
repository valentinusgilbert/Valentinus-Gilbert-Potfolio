import Header from '@/components/Header.vue';
import Banner from '@/components/Banner.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { ref, onMounted, onUnmounted } from 'vue';
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
        const currentTime = ref('0:00');
        const duration = ref('0:00');
        const audio = new Audio(music);
        const soundwaveData = ref([]);
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const analyser = audioContext.createAnalyser();
        const source = audioContext.createMediaElementSource(audio);
        source.connect(analyser);
        analyser.connect(audioContext.destination);

        const formatTime = (time) => {
            const minutes = Math.floor(time / 60);
            const seconds = Math.floor(time % 60).toString().padStart(2, '0');
            return `${minutes}:${seconds}`;
        };

        const updateTime = () => {
            currentTime.value = formatTime(audio.currentTime);
            duration.value = formatTime(audio.duration);
        };

        const togglePlay = () => {
            if (audioContext.state === 'suspended') {
                audioContext.resume();
            }
            if (isPlaying.value) {
                audio.pause();
                isPlaying.value = false;
            } else {
                audio.play();
                isPlaying.value = true;
            }
        };

        const generateSoundwaveData = () => {
            analyser.fftSize = 256;
            const bufferLength = analyser.frequencyBinCount;
            const dataArray = new Uint8Array(bufferLength);

            const draw = () => {
                analyser.getByteFrequencyData(dataArray);
                soundwaveData.value = [...dataArray];
                requestAnimationFrame(draw);
            };
            draw();
        };

        onMounted(() => {
            audio.addEventListener('timeupdate', updateTime);
            audio.addEventListener('loadedmetadata', updateTime);
            generateSoundwaveData();
        });

        onUnmounted(() => {
            audio.removeEventListener('timeupdate', updateTime);
            audio.removeEventListener('loadedmetadata', updateTime);
        });

        return {
            isPlaying,
            currentTime,
            duration,
            togglePlay,
            soundwaveData
        }
    }
}