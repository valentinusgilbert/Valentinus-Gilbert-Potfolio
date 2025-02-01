<template>
  <div class="banner">
    <div class="banner-container">
        <div class="banner-text">
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
        <div class="banner-image">
            <div class="banner-image__close">
                &#x2715; <!-- Add X icon -->
            </div>
            <div class="banner-image-container">
                <img src="../assets/self-photo.png" alt="Banner Image" />
            </div>
            <div class="banner-image__social">
                <div class="banner-image__social-icon">
                    <FontAwesomeIcon :icon="['fab', 'whatsapp']" />
                </div>
                <div class="banner-image__social-icon">
                    <FontAwesomeIcon :icon="['fab', 'instagram']" />
                </div>
                <div class="banner-image__social-icon">
                    <FontAwesomeIcon :icon="['fab', 'linkedin']" />
                </div>
            </div>
        </div>
        
    </div>
    <div class="gif-cat">
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
    </div>
 
 
  </div>
</template>

<script src="./js/banner.js"></script>

<style lang="scss" scoped>
.banner {
    display: flex;
    border-radius: 8px;
    padding: 8px;
    background-color: #324757;
    position: relative;
    align-items: center;
    border: 2px solid white;
    @media (max-width: 768px) {
        padding: 6px;
        width: 320px;
    }
    &-container {
        display: flex; 
        align-items: center;
        padding: 20px;
        background: linear-gradient(115.19deg, #727070 3.03%, #abb0af 43.08%, #F5F5F5 98%);
        gap: 200px;
        border-radius: 8px;
        padding-bottom: 60px;
        width: 100%;
        @media (max-width: 768px) {
            display: flex;
            flex-direction: column;
            gap: 12px;
            padding-bottom: 70px;
        }
    }
    &-text {
        display: flex;
        flex-direction: column;
        @media (max-width: 768px) {
            align-items: center;
        }
        &__divider-1 {
            width: 380px;
            z-index: 1000;
            border: 4px solid #324757;
            margin-top: 8px;
            border-radius: 8px;
            @media (max-width: 768px) {
                width: 180px;
                border: 2px solid #324757;
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
                font-size: 20px;
            }
        }
        &__title {
            color: #ffffff;
            font-size:40px;
            @media (max-width: 768px) {
                align-items: center;
                font-size: 20px;
            }
            text-shadow: -3px 2px 2px rgba(0, 0, 0, 0.5);
        }
        &__description {
            text-shadow: -3px 2px 2px rgba(0, 0, 0, 0.5);
        }
    }
    &-image {
            position: relative;
            background: #73828d;
            border-radius: 8px;
            padding: 24px 12px 12px 12px;
            padding-bottom: 10px;
            box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.8); 
            &-container {
                img {
                    position: relative;
                    z-index: 1;
                    width: 160px;
                    margin-bottom: -2px;
                }
                background: url('../assets/background-profile.jpg') no-repeat center center;
                background-size: cover;
                border: 2px solid white;
                border-radius: 4px;
            }
 
            &__close{
                position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;
                top: 0px;
                right: 12px;
                padding: 1px;
                background-color:#FF715B;
                width: 40px;
                border-radius: 0px 0px 8px 8px;
                box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.8); 
                font-weight: 900;
            }
            &__social {
                display: flex;
                gap: 20px;
                margin-top: 4px;
                align-items: center;
                justify-content: center;
                &-icon {
                    font-size: 24px;
                    :hover {
                        color: #FF715B;
                        border-radius: 4px;
                        background-color: #E9E9E9;
                        cursor: pointer;
                    }
                }
            }
    }
    
}

.gif-cat {
    position: absolute;
    bottom: 4px;
    z-index: 10;
    img {
        width: 50px;
        transition: transform 0.1s linear;
    }
}
.gif-dog {
    position: absolute;
    bottom: 4px;
    z-index: 11;
    img {
        width: 60px;
        transition: transform 0.1s linear;
    }
}

.gif-pig {
    position: absolute;
    bottom: 2px;
    z-index: 11;
    img {
        width: 50px;
        transition: transform 0.1s linear;
    }
}

.gif-duck {
    position: absolute;
    bottom: -6px;
    z-index: 8;
    img {
        width: 48px;
        transition: transform 0.1s linear;
    }
}

.gif-bear {
    position: absolute;
    bottom: 1px;
    z-index: 100;
    img {
        width: 56px;
        transition: transform 0.1s linear;
    }
}
.gif-cow {
    position: absolute;
    bottom: 0px;
    z-index: 3;
    img {
        width: 60px;
        transition: transform 0.1s linear;
    }
}

.gif-pika {
    position: absolute;
    bottom: 4px;
    z-index: 1;
    img {
        width: 60px;
        transition: transform 0.1s linear;
    }
}



</style>
