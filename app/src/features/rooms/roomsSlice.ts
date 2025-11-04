import { createSlice } from "@reduxjs/toolkit";

type Room = {
  name: string;
  capacity: number;
  description: string;
  equipment: string;
};

type RoomsState = {
  list: Room[];
};

const initialState: RoomsState = {
  list: [
    {
      name: "Mälaren",
      capacity: 4,
      description:
        "Mötesrummet Mälaren är ett modernt rum för 1–4 personer, utrustat med skärm, whiteboard samt kamera för videomöten.",
      equipment: "",
    },
    {
      name: "Vättern",
      capacity: 6,
      description:
        "Mötesrummet Vättern är ett modernt rum för 1–6 personer, utrustat med skärm, whiteboard samt kamera för videomöten.",
      equipment: "",
    },
    {
      name: "Vänern",
      capacity: 6,
      description:
        "Mötesrummet Vänern är ett modernt rum för 1–6 personer, utrustat med skärm, whiteboard samt kamera för videomöten.",
      equipment: "",
    },
    {
      name: "Hjälmaren",
      capacity: 10,
      description:
        "Mötesrummet Hjälmaren är ett modernt rum för 1–10 personer, utrustat med skärm, whiteboard samt kamera för videomöten.",
      equipment: "",
    },
    {
      name: "Storsjön",
      capacity: 25,
      description:
        "Mötesrummet Storsjön är ett modernt rum för 1–25 personer, utrustat med skärm, whiteboard samt kamera för videomöten.",
      equipment: "",
    },
  ],
};

const roomsSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {},
});

export default roomsSlice.reducer;
