import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"
export const getuser=createAsyncThunk("user/get",async()=>{
try {
    let result =await axios.get("http://localhost:5000/user/")
    return result 

    
} catch (error) {
    console.log(error)
    
}

})
export const adduser=createAsyncThunk("user/add",async(newuser)=>{
  try {
      let result =await axios.post("http://localhost:5000/user/add",newuser)
      return result 
  
      
  } catch (error) {
      console.log(error)
      
  }
  
  })
  export const deleteuser=createAsyncThunk("user/delete",async(id)=>{
    try {
        let result =await axios.delete(`http://localhost:5000/user/${id}`)
        return result 
    
        
    } catch (error) {
        console.log(error)
        
    }
    
    })
    export const updateuser=createAsyncThunk("user/update",async({id,edited})=>{
      try {
          let result =await axios.put(`http://localhost:5000/user/${id}`,edited)
          return result 
      
          
      } catch (error) {
          console.log(error)
          
      }
      
      })
const initialState = {
 userlist:null,
 status:null

}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(getuser.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getuser.fulfilled, (state, action) => {
        state.status = "success";
        state.userlist = action.payload.data.users;
      })
      .addCase(getuser.rejected, (state) => {
        state.status = "fail";
      })
      .addCase(adduser.pending, (state) => {
        state.status = "pending";
      })
      .addCase(adduser.fulfilled, (state, action) => {
        state.status = "success";
      
      })
      .addCase(adduser.rejected, (state) => {
        state.status = "fail";
      })
      .addCase(deleteuser.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteuser.fulfilled, (state, action) => {
        state.status = "success";
      
      })
      .addCase(deleteuser.rejected, (state) => {
        state.status = "fail";
      })
      .addCase(updateuser.pending, (state) => {
        state.status = "pending";
      })
      .addCase(updateuser.fulfilled, (state, action) => {
        state.status = "success";
      
      })
      .addCase(updateuser.rejected, (state) => {
        state.status = "fail";
      })
      
      ;
  },



})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = userSlice.actions

export default userSlice.reducer