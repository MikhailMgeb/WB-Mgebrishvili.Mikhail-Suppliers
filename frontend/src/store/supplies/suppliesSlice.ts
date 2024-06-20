import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SupplyData } from '../../models/models';

type SuppliesState = {
  supplies: SupplyData[];
};

const initialState: SuppliesState = {
  supplies: [],
};

const suppliesSlice = createSlice({
  name: 'supplies',
  initialState,
  reducers: {
    setSupplies: (state, action: PayloadAction<SupplyData[]>) => {
      state.supplies = action.payload;
    },
  },
});

export const { setSupplies } = suppliesSlice.actions;
export default suppliesSlice.reducer;
