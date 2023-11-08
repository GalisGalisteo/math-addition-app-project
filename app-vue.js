import {
  createApp,
  ref,
  computed,
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

const chance = new Chance();

createApp({
  setup() {
    const firstNumber = ref(chance.integer({ min: 0, max: 10 }));
    const secondNumber = ref(chance.integer({ min: 0, max: 10 }));
    const userInput = ref("");
    const message = ref("¿Cuánto suma?");

    const isCorrect = () => {
      const total = firstNumber.value + secondNumber.value;
      if (total === userInput.value) {
        message.value = "La suma es correcta! :)";
      } else if (userInput.value === "") {
        message.value = "Please enter a number...";
      } else {
        message.value = "La suma es incorrecta... :(";
      }
    };

    const reset = () => {
      userInput.value = "";
      message.value = "¿Cuánto suma?";
    };

    return {
      firstNumber,
      secondNumber,
      userInput,
      message,
      isCorrect,
      reset,
    };
  },
}).mount("#app");
