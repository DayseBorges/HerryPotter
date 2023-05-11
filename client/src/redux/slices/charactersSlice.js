import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  form: [],
  about: {
    paragraph1:
      "Welcome to the magical world of Harry Potter! This page is dedicated to all things related to J.K. Rowling's beloved series. Join us on a journey through the enchanting corridors of Hogwarts School of Witchcraft and Wizardry, where extraordinary adventures, captivating characters, and awe-inspiring magic await.",
    paragraph2:
      "Immerse yourself in the rich tapestry of Harry Potter's universe, where the line between reality and fantasy blurs. From the moment we first meet the Boy Who Lived in `Harry Potter and the Philosopher's Stone` to the heart-stopping climax of `Harry Potter and the Deathly Hallows,` these stories have captivated the hearts and minds of readers around the globe.",
    paragraph3:
      "Whether you're a devoted fan or a curious Muggle, this page aims to celebrate the enduring magic of Harry Potter. Discover fascinating trivia, engage in thoughtful discussions, and share your own love for the series with fellow enthusiasts. Let's embark on this extraordinary adventure together!",
    paragraph4:
      "Remember, `Hogwarts will always be there to welcome you home.` So grab your wand, put on your invisibility cloak, and prepare to be enchantedby the world of Harry Potter!",
  },
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    allCharacters: (state, action) => {
      return {
        ...state,
        data: action.payload,
      };
    },
    formData: (state, action) => {
      return {
        ...state,
        form: action.payload,
      };
    },
  },
});

export const { allCharacters, formData } = charactersSlice.actions;

export default charactersSlice.reducer;
