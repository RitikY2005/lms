import {configureStore} from '@reduxjs/toolkit';
import userSliceReducer from './Slices/user.slice.js';

const store = configureStore({
	reducer:{
     user:userSliceReducer
	},
	devTools:true
});

export default store;
