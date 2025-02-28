import { ref, onMounted } from 'vue';

export default {
  name: 'HelloWorld',
  setup() {
    const messages = ['Hello', 'Hola', 'Bonjour', 'Hallo', 'Ciao', 'こんにちは', '안녕하세요', '你好'];
    const currentMessage = ref('');
    const currentMessageIndex = ref(0);
    const typingSpeed = 75; // milliseconds per character
    const wordChangeDelay = 100; // milliseconds delay between words
    const deleteSpeed = 75; // milliseconds per character for deleting

    const typeMessage = (message, index = 0) => {
      if (index < message.length) {
        currentMessage.value += message[index];
        setTimeout(() => typeMessage(message, index + 1), typingSpeed);
      } else {
        setTimeout(() => deleteMessage(message), 2000);
      }
    };

    const deleteMessage = (message, index = message.length) => {
      if (index > 0) {
        currentMessage.value = message.slice(0, index - 1);
        setTimeout(() => deleteMessage(message, index - 1), deleteSpeed);
      } else {
        currentMessageIndex.value = (currentMessageIndex.value + 1) % messages.length;
        setTimeout(() => typeMessage(messages[currentMessageIndex.value], 0), wordChangeDelay);
      }
    };

    onMounted(() => {
      typeMessage(messages[currentMessageIndex.value]);
    });

    return {
      currentMessage
    };
  }
};