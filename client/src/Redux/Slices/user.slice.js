import {createSlice} from '@reduxjs/toolkit';

const initialState={
	isLoggedIn:localStorage.getItem('isLoggedIn') || false,
	role:localStorage.getItem('role') || "",
	data:localStorage.getItem('data') || {}
}

const userSlice= createSlice({
	 name:'user',
	 initialState,
	 reducers:{}
});

export default userSlice;