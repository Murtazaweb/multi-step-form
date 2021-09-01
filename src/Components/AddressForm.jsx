import React from 'react'

//import { useState } = "react";   like this 

function toCelsius(fahrenheit) {
  const [name, setName] = useState("David");
  return (5/9) * (fahrenheit-32);
}
document.getElementById("demo").innerHTML = toCelsius;

import {TextField, Button,FormControlLabel,Radio,FormLabel,RadioGroup,FormControl,Select,
InputLabel, MenuItem} from "@material-ui/core";
 
 import { Controller, useFormContext} from "react-hook-form";
  


const AddressForm = () => {

    //For Selecting gender need to change the state
    const [value, setValue] = React.useState('female');
 
 //instead of calling ReactObject you can use direct react hooks 
 // const [value, setValue] = useState('female');
 

  
    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
  
  
  
    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);
  
    const handleChanges = (event) => {
      setAge(event.target.value);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };
  
  
  
  
  
  
  
  
  
  
    const {
      control,
      formState: { errors },
    } = useFormContext();
    console.log(errors);
    return (
      <>
  
        <Controller
          control={control}
          name="address2"
          rules={{ required: "this field is required."}}
          render={({ field }) => (
            <TextField
              id="address2"
              label="Address 2"
              variant="outlined"
              placeholder="Enter Your Address 2"
              fullWidth
              margin="normal"
              {...field}
              error={Boolean(errors?.address2)}
              helperText={errors.address2?.message}
            />
          )}
        />
     
  
  
  
  <Controller
          control={control}
          name="country"
          rules={{ required: "this field is required."}}
  
          render={({ field }) => (
            <>
            <Button  onClick={handleOpen} >
          </Button>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-controlled-open-select-label" placeholder="country">Country</InputLabel>
            <Select
          
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={age}
              onChange={handleChanges}
              {...field}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={92}>Pakistan</MenuItem>
              <MenuItem value={93}>India</MenuItem>
              <MenuItem value={89}>Iran</MenuItem>
            </Select>
          </FormControl>
          </>
          )}
        />
  
  
  
  
  
  
  
  
  <Controller
          control={control}
          name="genderSelect"
          render={({field }) => (
  <FormControl component="fieldset"  fullWidth variant="outlined">
    <FormLabel component="legend" >Gender</FormLabel>
        <RadioGroup aria-label="gender" name="gender" value={value} onChange={handleChange}   variant="outlined" {...field} >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        
         </RadioGroup> 
    </FormControl>
          )}
        />
  
  <Controller
          control={control}
          name="dateTime"
          rules={{ required: "this field is required."}}
  
          render={({ field }) => (
            <TextField
            id="datetime-local"
            variant="outlined"
            label="Select Date"
            type="datetime-local"
            defaultValue="0000-00-00T10:00"
            InputLabelProps={{
              shrink: true,
            }}
              fullWidth
              margin="normal"
              {...field}
              error={Boolean(errors?.dateTime)}
              helperText={errors.dateTime?.message}
            />
          )}
        />
  
  
  
  
  
  
  
  
  
  
  
  
  
      </>
    );
  };

export default AddressForm;
