import { createSlice } from "@reduxjs/toolkit";
import { I{{className}}State, IRoot{{className}}State } from "./types";

const initialState: I{{className}}State = {
  {{componentName}}: {
  
  },
};

const { actions, reducer } = createSlice({
  name: "{{componentName}}",
  initialState,
  reducers: {
  },
});

const selectors = {
  get{{className}}: (state: IRoot{{className}}State) => state.{{componentName}}.{{componentName}}
};

export default reducer;

export { selectors, actions };
