import HelloWorld from '@/components/HelloWorld.vue';
import { onMounted, ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faWhatsapp, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faWhatsapp, faInstagram, faLinkedin);

export default {
    components: {
        HelloWorld,
        FontAwesomeIcon
    },
    setup() {
        // const isPlaying = ref(false);
        // const catSpeed = Math.random() * (0.4 - 0.2) + 0.2;
        // const dogSpeed = Math.random() * (0.4 - 0.2) + 0.2;
        // const pigSpeed = Math.random() * (0.4 - 0.2) + 0.2;
        // const duckSpeed = Math.random() * (0.3 - 0.1) + 0.1;
        // const cowSpeed = Math.random() * (0.4 - 0.2) + 0.2;
        // const bearSpeed = Math.random() * (0.4 - 0.2) + 0.2;
        // const pikaSpeed = Math.random() * (0.8 - 0.6) + 0.6;

        // const togglePlay = () => {
        //     isPlaying.value = !isPlaying.value;
        //     // Add your play/pause logic here
        // };

        // onMounted(() => {
        //     const cat = document.getElementById('cat');
        //     const dog = document.getElementById('dog');
        //     const pig = document.getElementById('pig');
        //     const duck = document.getElementById('duck');
        //     const cow = document.getElementById('cow');
        //     const bear = document.getElementById('bear');
        //     const pika = document.getElementById('pika');
        //     moveCat(cat);
        //     moveDog(dog);
        //     movePig(pig);
        //     moveDuck(duck);
        //     moveCow(cow);
        //     moveBear(bear);
        //     movePika(pika);
        // });
        
        // const moveCat = (cat) => {
        //     let direction = Math.random() < 0.5 ? 1 : -1;
        //     let position = Math.random() * document.querySelector('.banner-container').offsetWidth;
        //     const move = () => {
        //         position += direction * catSpeed;
        //         cat.style.transform = `translateX(${position}px) scaleX(${direction})`;
        //         const bannerWidth = document.querySelector('.banner-container').offsetWidth;
        //         if (position >= bannerWidth - cat.width || position <= 0) {
        //             direction *= -1;
        //         }
        //         requestAnimationFrame(move);
        //     };
        //     move();
        // };

        // const moveDog = (dog) => {
        //     let direction = Math.random() < 0.5 ? 1 : -1;
        //     let position = Math.random() * document.querySelector('.banner-container').offsetWidth;
        //     const move = () => {
        //         position += direction * dogSpeed;
        //         dog.style.transform = `translateX(${position}px) scaleX(${direction})`;
        //         const bannerWidth = document.querySelector('.banner-container').offsetWidth;
        //         if (position >= bannerWidth - dog.width || position <= 0) {
        //             direction *= -1;
        //         }
        //         requestAnimationFrame(move);
        //     };
        //     move();
        // };

        // const movePig = (pig) => {
        //     let direction = Math.random() < 0.5 ? 1 : -1;
        //     let position = Math.random() * document.querySelector('.banner-container').offsetWidth;
        //     const move = () => {
        //         position += direction * pigSpeed;
        //         pig.style.transform = `translateX(${position}px) scaleX(${direction})`;
        //         const bannerWidth = document.querySelector('.banner-container').offsetWidth;
        //         if (position >= bannerWidth - pig.width || position <= 0) {
        //             direction *= -1;
        //         }
        //         requestAnimationFrame(move);
        //     };
        //     move();
        // };

        // const moveCow = (cow) => {
        //     let direction = Math.random() < 0.5 ? 1 : -1;
        //     let position = Math.random() * document.querySelector('.banner-container').offsetWidth;
        //     const move = () => {
        //         position -= direction * cowSpeed;
        //         cow.style.transform = `translateX(${position}px) scaleX(${direction})`;
        //         const bannerWidth = document.querySelector('.banner-container').offsetWidth;
        //         if (position >= bannerWidth - cow.width || position <= 0) {
        //             direction *= -1;
        //         }
        //         requestAnimationFrame(move);
        //     };
        //     move();
        // };

        // const moveBear = (bear) => {
        //     let direction = Math.random() < 0.5 ? 1 : -1;
        //     let position = Math.random() * document.querySelector('.banner-container').offsetWidth;
        //     const move = () => {
        //         position += direction * bearSpeed;
        //         bear.style.transform = `translateX(${position}px) scaleX(${direction})`;
        //         const bannerWidth = document.querySelector('.banner-container').offsetWidth;
        //         if (position >= bannerWidth - bear.width || position <= 0) {
        //             direction *= -1;
        //         }
        //         requestAnimationFrame(move);
        //     };
        //     move();
        // };

        // const moveDuck = (duck) => {
        //     let direction = Math.random() < 0.5 ? 1 : -1;
        //     let position = Math.random() * document.querySelector('.banner-container').offsetWidth;
        //     const move = () => {
        //         position += direction * duckSpeed;
        //         duck.style.transform = `translateX(${position}px) scaleX(${direction})`;
        //         const bannerWidth = document.querySelector('.banner-container').offsetWidth;
        //         if (position >= bannerWidth - duck.width || position <= 0) {
        //             direction *= -1;
        //         }
        //         requestAnimationFrame(move);
        //     };
        //     move();
        // };

        // const movePika = (pika) => {
        //     let direction = Math.random() < 0.5 ? 1 : -1;
        //     let position = Math.random() * document.querySelector('.banner-container').offsetWidth;
        //     const move = () => {
        //         position += direction * pikaSpeed;
        //         pika.style.transform = `translateX(${position}px) scaleX(${direction})`;
        //         const bannerWidth = document.querySelector('.banner-container').offsetWidth;
        //         if (position >= bannerWidth - pika.width || position <= 0) {
        //             direction *= -1;
        //         }
        //         requestAnimationFrame(move);
        //     };
        //     move();
        // };

        const openWhatsApp = () => {
            window.open('https://wa.me/6285366768686?text=Hi%20Gilbert%21%20Aku%20kesini%20karena%20website%20portofoliomu%20nih', '_blank');
        };

        const openInstagram = () => {
            window.open('http://instagram.com/valentinusgilbert', '_blank');
        };

        const openLinkedIn = () => {
            window.open('https://www.linkedin.com/in/valentinus-gilbert-sanjaya-770b26217/', '_blank');
        };

        return {
            // isPlaying,
            // togglePlay,
            // catSpeed,
            // dogSpeed
            openWhatsApp,
            openInstagram,
            openLinkedIn
        };
    }
};