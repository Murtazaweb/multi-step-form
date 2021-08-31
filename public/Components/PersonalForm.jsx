import React from 'react'
import {TextField} from "@material-ui/core";
  import { Controller, useFormContext} from "react-hook-form";
  
const PersonalForm = () => {
    const {
      control,
      formState: { errors },
    } = useFormContext();
    console.log(errors);
    return (
      <>
        <Controller
          control={control}
          name="age"
          rules={{ required: "this field is required.",
          minLength:
          {
             value:2,
             message:'Length must be  2 characters'
          }, }}
          render={({ field }) => (
            <TextField
              id="age"
              label="Age"
              variant="outlined"
              placeholder="Enter Your Age"
              fullWidth
              margin="normal"
              {...field}
              error={Boolean(errors?.age)}
              helperText={errors.age?.message}
            />
          )}
        />
  
        <Controller
          control={control}
          name="hobby"
          rules={{ required: "this field is required."
        }}
          render={({ field }) => (
            <TextField
              id="hobby"
              label="Hobbies"
              variant="outlined"
              placeholder="Enter Your Hobbies"
              fullWidth
              margin="normal"
              {...field}
              error={Boolean(errors?.hobby)}
              helperText={errors.hobby?.message}
            />
          )}
        />
  
      
      </>
    );
  };
  

export default PersonalForm
