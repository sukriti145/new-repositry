import { configureStore, createSlice } from "@reduxjs/toolkit";

const textSlice = createSlice({
  name: "texts",
  initialState: [],
  reducers: {
    addText: (state, action) => {
      state.push(action.payload);
    },
    removeText: (state, action) => {
      state.splice(action.payload, 1); // Remove text by index
    },
    updateText: (state, action) => {
      const { index, newText } = action.payload;
      state[index] = newText; // Update text at index
    },
  },
});

export const { addText, removeText, updateText } = textSlice.actions;

const store = configureStore({
  reducer: {
    texts: textSlice.reducer,
  },
});

export default store;
