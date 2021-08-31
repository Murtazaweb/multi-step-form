import React from 'react'
import {TextField} from "@material-ui/core";
import { useForm, Controller,useFormContext} from "react-hook-form";
  const ContactForm = () => {
    const {getValues}=useForm();
      const {
        control,
        formState: { errors },
      } = useFormContext();
      console.log(errors);
      return (
        <>
          <Controller
            control={control}
            name="emailAddress"
            rules={{ required: "this field is required.",
            pattern:
            {
               value:/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
               message:'Enter valid Email Address'
            }, }}
            render={({ field }) => (
              <TextField
                id="email"
                label="E-mail"
                variant="outlined"
                placeholder="Enter Your E-mail Address"
                fullWidth
                margin="normal"
                {...field}
                error={Boolean(errors?.emailAddress)}
                helperText={errors.emailAddress?.message}
              />
            )}
          />
    
          <Controller
            control={control}
            name="phoneNumber"
            rules={{ required: "this field is required.",
            pattern:
            {
               value:/^\d{11}$/,
               message:'Enter 11 digit phone number'
            }, }}
            render={({ field }) => (
              <TextField
                id="phone-number"
                label="Phone Number"
                variant="outlined"
                placeholder="Enter Your Phone Number"
                fullWidth
                margin="normal"
                {...field}
    
                error={Boolean(errors?.phoneNumber)}
                helperText={errors.phoneNumber?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            rules={{ required: "this field is required.",
            pattern:
            {
               value:/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
               message:'Password (UpperCase, LowerCase, Number/SpecialChar and min 8 Chars)'
            }, }}
            render={({ field }) => (
              <TextField
                id="password"
                type="password"
                label="Password"
                variant="outlined"
                placeholder="Enter Your Password"
                fullWidth
                margin="normal"
                {...field}
    
    
                
                error={Boolean(errors?.password)}
                helperText={errors.password?.message}
              />
              
            )}
          />
    
    
    
    
    
    
    <Controller
            control={control}
            name="confirmPassword"
            rules={{ required: "this field is required.",
            pattern:
            {
               value:/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
               message:'Password must be matched ',
               validate: (value) =>
              value === getValues("password")
            }, }}
            render={({ field }) => (
              <TextField
                id="confirm-password"
                label="ConfirmbPassword"
                type="password"
                variant="outlined"
                placeholder="Confirm Password"
                fullWidth
                margin="normal"
                {...field}
    
    
                
                error={Boolean(errors?.confirmPassword)}
                helperText={errors.confirmPassword?.message}
              />
              
            )}
          />
    
        </>
      );
    };
    

export default ContactForm
