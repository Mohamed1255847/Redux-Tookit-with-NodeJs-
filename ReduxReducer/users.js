const {createSlice,createAsyncThunk} = require('@reduxjs/toolkit');
const axios = require("axios");



const getinfoFromServer = createAsyncThunk('getSominfoFromFakeAPI',async()=>{
const response = await axios.get('https://dummyjson.com/products').then(data => data);
return response.data.products;
})

 

const initialState = {
  value: 60,
  info:null
}

const counterSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  extraReducers:(builder) =>{
      builder.addCase(getinfoFromServer.fulfilled,(state ,action)=>{
           state.info = action.payload;
      })
  }
});
const selectCount = (state) => state.users;

// Action creators are generated for each case reducer function
const{ increment, decrement, incrementByAmount } = counterSlice.actions;
// Action creators are generated for each case reducer function
exports.counterSlice = counterSlice;
exports.selectCount = selectCount;
exports.reducer = counterSlice.reducer;
exports.increment = increment;
exports.decrement = decrement;
exports.incrementByAmount = incrementByAmount;
exports.getinfoFromServer = getinfoFromServer;

