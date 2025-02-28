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
            <div class="banner-iamge-container">
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
 
 
  </div>
</template>

<script src="./js/banner.js"></script>

<style lang="scss" scoped>
.banner {
    margin: 16px 0px;
    border-radius: 8px;
    padding: 8px;
    background-color: #324757;
    position: relative;
    align-items: center;
    border: 2px solid white;
    @media (max-width: 768px) {
        width: 85%;
        padding: 6px;
    }
    &-container {
        display: flex; 
        align-items: center;
        padding: 20px;
        background-color: #61a78c;
        gap: 200px;
        border-radius: 8px;
        padding-bottom: 60px;
        @media (max-width: 768px) {
            display: flex;
            flex-direction: column;
            gap: 12px;
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
        }
    }
    &-image {
            position: relative;
            background: #73828d;
            border-radius: 8px;
            padding: 24px 12px 12px 12px;
            padding-bottom: 10px;
            box-shadow: 0 0px 8px rgba(0, 0, 0, 0.8); 
            img {
                width: 160px;
                background-color: #E9E9E9;
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


</style>
