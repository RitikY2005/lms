import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState={
    courseData:[]
};

export const getAllCourses= createAsyncThunk("/courses/getAllCourses",async (data,{rejectWithValue})=>{
   try{
      const res= axiosInstance.get('/courses');
      await toast.promise(res,{
        loading:"wait ! loading courses..",
        success:"courses fetched successfully",
        error:(error)=> error?.response?.data?.message
      });

      return (await res).data;
   } catch(e){
        return rejectWithValue(e?.response?.data);
   }
});

const courseSlice= createSlice({
    name:"course",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
      builder
        .addCase(getAllCourses.fulfilled,(state,action)=>{
           state.courseData=action?.payload?.courses;

        })
    }
});


export default courseSlice.reducer;