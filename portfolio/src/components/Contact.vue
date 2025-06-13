<template>
  <div id="contact" class="contact">
    <div class="contact__container" data-aos="fade-up">
      <div class="contact__form-section">
        <div class="contact__title">Send Me Message</div>
        <form @submit.prevent="sendMessage" class="contact__form">
          <div class="form-group">
            <input 
              v-model="formData.name" 
              type="text" 
              placeholder="Your Name" 
              required
              class="contact__form-input"
            />
          </div>
          <div class="form-group">
            <textarea 
              v-model="formData.message" 
              placeholder="How can I help you?" 
              required
              class="contact__form-textarea"
            ></textarea>
          </div>
          <button type="submit" class="submit-button">
            Send Message
          </button>
        </form>
      </div>
      <div class="contact__image-section">
        <img src="../assets/foto-diri-2.png" alt="Contact Image" class="contact-image" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Contact',
  setup() {
    const formData = ref({
      name: '',
      message: ''
    });

    const sendMessage = () => {
      const message = `Hi Gilbert! I'm ${formData.value.name}. ${formData.value.message}`;
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/6285366768686?text=${encodedMessage}`, '_blank');
      formData.value.name = '';
      formData.value.message = '';
    };

    return {
      formData,
      sendMessage
    };
  }
};
</script>

<style lang="scss" scoped>
.contact {
  display: flex;
  padding: 32px 0px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 48px;
  margin: 0 auto;
  width: 1040px;
  @media (max-width: 768px) {
    width: 380px;
  }


  &__container {
    width: 90%;
    background: linear-gradient(145deg, #2a3b4c, #1a2a3a);
    border-radius: 20px;
    padding: 40px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    display: flex;
    gap: 40px;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 24px;
      padding: 24px;
    }
  }

  &__form-section {
    flex: 1;
    width: 100%;
  }

  &__title {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 24px;
    background: linear-gradient(45deg, #FF715B, #FF9F8C);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__image-section {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      display: none;
    }
  }
}

.contact__form-group {
  width: 100%;
}

.contact__form-input,
.contact__form-textarea {
  width: 90%;
  padding: 12px 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 16px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #FF715B;
    box-shadow: 0 0 0 2px rgba(255, 113, 91, 0.2);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
}

.contact__form-textarea {
  min-height: 120px;
  resize: vertical;
}

.submit-button {
  padding: 12px 24px;
  background: #FF715B;
  border: none;
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
}

.contact-image {
  width: 100%;
  max-width: 380px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
}
</style> 