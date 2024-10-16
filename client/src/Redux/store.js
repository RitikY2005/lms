import {configureStore} from '@reduxjs/toolkit';
import userSliceReducer from './Slices/user.slice.js';
import courseSliceReducer from './Slices/course.slice.js';

const store = configureStore({
	reducer:{
     user:userSliceReducer,
	 course:courseSliceReducer
	},
	devTools:true
});

export default store;
