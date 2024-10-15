import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axiosInstance from '../../Helpers/axiosInstance.js';
import toast from 'react-hot-toast';

const initialState={
	isLoggedIn:localStorage.getItem('isLoggedIn') || false,
	role:localStorage.getItem('role') || "",
	data:localStorage.getItem('data') || {}
}

export const createAccount= createAsyncThunk('/user/signin',async (data,{rejectWithValue})=>{
    try{
      const res= axiosInstance.post("/user/register",data);
	 await toast.promise(res,{
		loading:"wait ! authentication in progress..",
		success:"Account created successfully",
		error:(error)=>toast.error(error?.response?.data?.message)
	  })
	  return (await res).data;
	}catch(e){
          return rejectWithValue(e?.response?.data);
	}
});

export const login= createAsyncThunk("/user/login",async (data,{rejectWithValue})=>{
    try{
        const res=axiosInstance.post('/user/login',data);
		await toast.promise(res,{
			loading:"wait ! verifying details..",
			success:"user logged in successfully",
			error:(error)=>toast.error(error?.response?.data?.message)
		  });

		 return (await res).data; 
	} catch(e){
		return rejectWithValue(e?.response?.data);
	}
});

export const logout= createAsyncThunk("/user/logout",async (data,{rejectWithValue})=>{
      try{
		   console.log("flow1")
           const res=axiosInstance.get("/user/logout");
		   console.log("flow2")
		   await toast.promise(res,{
			loading:"initiating logout!",
			success:"user logged out successfully",
			error:(error)=>toast.error(error?.response?.data?.message)
		  });
		 return (await res).data ;
	  }catch(e){
		return rejectWithValue(e?.response?.data);
	  }
});





const userSlice= createSlice({
	 name:'user',
	 initialState,
	 reducers:{},
	 extraReducers:(builder)=>{
		builder
		.addCase(createAccount.fulfilled,(state,action)=>{
		   localStorage.setItem('data',action?.payload?.user);
           localStorage.setItem('isLoggedIn',true);
		   localStorage.setItem('role',action?.payload?.user?.role);
		   state.isLoggedIn=true;
		   state.role=action?.payload?.user?.role;
		   state.data=action?.payload?.user;
		})
		.addCase(login.fulfilled,(state,action)=>{
			localStorage.setItem('data',action?.payload?.user);
			localStorage.setItem('isLoggedIn',true);
			localStorage.setItem('role',action?.payload?.user?.role);
			state.isLoggedIn=true;
			state.role=action?.payload?.user?.role;
			state.data=action?.payload?.user;
		})
		.addCase(logout.fulfilled,(state,action)=>{
			localStorage.clear();
			state.isLoggedIn=false;
			state.role="";
			state.data={};
		})
	 }
});

export default userSlice.reducer;