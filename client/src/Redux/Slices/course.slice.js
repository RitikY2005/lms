import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";

const intialState={
    courseData:[]
};

export const getAllCourses= createAsyncThunk("/courses/getAllCourses",async (data,{rejectWithValue})=>{
   try{
      const res= axiosInstance.get('/courses');
      await toast.promise(res,{
        loading:"wait ! loading courses..",
        success:"courses fetched successfully",
        error:(error)=>error?.response?.data?.message
      });

      return (await res).data;
   } catch(e){
        return rejectWithValue(e?.response?.data);
   }
});

const courseSlice= createSlice({
    name:"course",
    intialState,
    reducers:{},
    extraReducers:(builder)=>{}
});


export default courseSlice.reducer;