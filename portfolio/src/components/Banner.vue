<template>
  <div class="banner">
    <div class="banner-container">
        <div class="banner-text" data-aos="fade-right">
            <HelloWorld class="banner-text__halo"/>
            <div class="banner-text__container">
                <span class="banner-text__title"> 
                    I'm Gilbert
                </span>
                <span class="banner-text__description">
                    Software Developer
                </span>
                <div class="banner-text__divider-1"/>
            </div>
            
        </div>
        <div class="banner-image" data-aos="fade-left">
            <div class="banner-image__close">
                &#x2715;
            </div>
            <div class="banner-image-container">
                <img src="../assets/self-photo.png" alt="Banner Image" />
            </div>
            <button class="banner-image__contact-button" @click="openWhatsApp">
                Contact Me
            </button>
            <div class="banner-image__social">
                <div class="banner-image__social-icon" @click="openWhatsApp">
                    <FontAwesomeIcon :icon="['fab', 'whatsapp']" />
                </div>
                <div class="banner-image__social-icon" @click="openInstagram">
                    <FontAwesomeIcon :icon="['fab', 'instagram']" />
                </div>
                <div class="banner-image__social-icon" @click="openLinkedIn">
                    <FontAwesomeIcon :icon="['fab', 'linkedin']" />
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="gif-cat">
        <img id="cat" src="../assets/cat.gif" alt="">
    </div>
    <div class="gif-dog">
        <img id="dog" src="../assets/dog.gif" alt="">
    </div> 
    <div class="gif-pig">
        <img id="pig" src="../assets/pig.gif" alt="">
    </div> 
    <div class="gif-duck">
        <img id="duck" src="../assets/duck.gif" alt="">
    </div>
    <div class="gif-bear">
        <img id="bear" src="../assets/bear.gif" alt="">
    </div>
    <div class="gif-cow">
        <img id="cow" src="../assets/cow.gif" alt="">
    </div>
    <div class="gif-pika">
        <img id="pika" src="../assets/pikachu.gif" alt="">
    </div> -->
  </div>
</template>

<script src="./js/banner.js"></script>

<style lang="scss" scoped>
.banner {
    width: 1022px;
    @media screen and (max-width: 768px) {
       max-width: 380px;
    }
    display: flex;
    justify-content: center;
    border-radius: 20px;
    padding: 12px;
    background: linear-gradient(145deg, #2a3b4c, #1a2a3a);
    position: relative;
    align-items: center;
    border: 2px solid rgba(255, 255, 255, 0.1);
    margin: 0px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    @media (max-width: 768px) {
        padding: 8px;
        width: 100%;
        max-width: 100vw;
    }
    &-container {
        width: 1052px;
        display: flex; 
        justify-content: space-between;
        align-items: center;
        padding: 40px;
        background: rgba(255, 255, 255, 0.05);
        gap: 40px;
        border-radius: 20px;
        padding-bottom: 60px;
        backdrop-filter: blur(10px);
        @media (max-width: 768px) {
            flex-direction: column;
            gap: 24px;
            padding: 16px;
            padding-bottom: 70px;
        }
    }
    &-text {
        display: flex;
        flex-direction: column;
        position: relative;
        @media (max-width: 768px) {
            align-items: center;
            text-align: center;
        }
        &__divider-1 {
            width: 380px;
            z-index: 1000;
            border: 4px solid #FF715B;
            margin-top: 8px;
            border-radius: 8px;
            @media (max-width: 768px) {
                width: 180px;
                border: 2px solid #FF715B;
                margin-top: 16px;
                margin-bottom: 8px;
            }
        }
        &__container {
            display: flex;
            flex-direction: column;
            font-weight: bolder;
            font-size: 40px;
            @media (max-width: 768px) {
                align-items: center;
                font-size: 24px;
            }
        }
        &__title {
            color: #ffffff;
            font-size: 40px;
            @media (max-width: 768px) {
                font-size: 24px;
            }
            text-shadow: -3px 2px 2px rgba(0, 0, 0, 0.5);
        }
        &__description {
            color: #FF715B;
            text-shadow: -3px 2px 2px rgba(0, 0, 0, 0.5);
            @media (max-width: 768px) {
                font-size: 20px;
            }
        }
        &__play-button {
            margin-top: 24px;
            cursor: pointer;
            .play-button {
                &__circle {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    background: rgba(255, 113, 91, 0.1);
                    border: 2px solid #FF715B;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                    &:hover {
                        background: rgba(255, 113, 91, 0.2);
                        transform: scale(1.05);
                    }
                }
                &__icon {
                    width: 24px;
                    height: 24px;
                    position: relative;
                    &.is-playing {
                        .play-button__bar {
                            &:nth-child(1) {
                                transform: translateY(0) rotate(45deg);
                            }
                            &:nth-child(2) {
                                opacity: 0;
                            }
                            &:nth-child(3) {
                                transform: translateY(0) rotate(-45deg);
                            }
                        }
                    }
                }
                &__bar {
                    position: absolute;
                    width: 4px;
                    height: 24px;
                    background: #FF715B;
                    border-radius: 2px;
                    transition: all 0.3s ease;
                    &:nth-child(1) {
                        left: 0;
                    }
                    &:nth-child(2) {
                        left: 50%;
                        transform: translateX(-50%);
                    }
                    &:nth-child(3) {
                        right: 0;
                    }
                }
            }
        }
    }
    &-image {
        position: relative;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 16px;
        padding: 24px 12px 12px 12px;
        padding-bottom: 10px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        @media (max-width: 768px) {
            padding: 16px 8px 8px 8px;
        }
        &-container {
            img {
                position: relative;
                z-index: 1;
                width: 200px;
                margin-bottom: -2px;
                border-radius: 8px;
                @media (max-width: 768px) {
                    width: 180px;
                }
            }
            background: url('../assets/background-profile.jpg') no-repeat center center;
            background-size: cover;
            border: 2px solid rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            overflow: hidden;
        }
        &__contact-button {
            width: 100%;
            margin: 12px 0;
            padding: 8px 16px;
            background: #FF715B;
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 8px;
            color: white;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(255, 113, 91, 0.3);
            
            &:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 16px rgba(255, 113, 91, 0.4);
            }
            
            &:active {
                transform: translateY(0);
                box-shadow: 0 2px 8px rgba(255, 113, 91, 0.3);
            }

            @media (max-width: 768px) {
                padding: 6px 12px;
                font-size: 14px;
            }
        }
        &__close {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            top: 0px;
            right: 12px;
            padding: 1px;
            background-color: #FF715B;
            width: 40px;
            border-radius: 0px 0px 8px 8px;
            box-shadow: 0 4px 12px rgba(255, 113, 91, 0.3);
            font-weight: 900;
            color: white;
            @media (max-width: 768px) {
                width: 32px;
                right: 8px;
            }
        }
        &__social {
            display: flex;
            gap: 20px;
            margin-top: 4px;
            align-items: center;
            justify-content: center;
            @media (max-width: 768px) {
                gap: 16px;
            }
            &-icon {
                font-size: 32px;
                color: #FF715B;
                transition: all 0.3s ease;
                @media (max-width: 768px) {
                    font-size: 28px;
                }
                &:hover {
                    color: #ffffff;
                    transform: translateY(-2px);
                }
            }
        }
    }
}

.gif-cat, .gif-dog, .gif-pig, .gif-duck, .gif-bear, .gif-cow, .gif-pika {
    position: absolute;
    bottom: 4px;
    img {
        width: 50px;
        transition: transform 0.3s ease;
        filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
        @media (max-width: 768px) {
            width: 40px;
        }
    }
}

.gif-cat { z-index: 10; }
.gif-dog { z-index: 11; }
.gif-pig { z-index: 11; }
.gif-duck { z-index: 8; }
.gif-bear { z-index: 100; }
.gif-cow { z-index: 3; }
.gif-pika { z-index: 1; }
</style>
