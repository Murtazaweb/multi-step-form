import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  FormControlLabel,
  Radio,
  FormLabel,
  RadioGroup,
  FormControl,
  Select,
  InputLabel,
  MenuItem
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Basic information",
    "Contact Information",
    "Persoanl Information",
    "Address",
    
  ];
}
const BasicForm = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  console.log(errors);
  return (
    <>
      <Controller
        control={control}
        name="firstName"
        rules={{ required: "this field is required.",
         minLength:
        {
           value:3,
           message:'Length must be  3 characters'
        }, }}
        render={({ field }) => (
          <TextField
            id="first-name"
            label="First Name"
            variant="outlined"
            placeholder="Enter Your First Name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.firstName)}
            helperText={errors.firstName?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="lastName"
        rules={{ required: "this field is required.",
        minLength:
        {
           value:3,
           message:'Length must be 3 characters'
        },
      }}
        render={({ field }) => (
          <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Your Last Name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.lastName)}
            helperText={errors.lastName?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="userName"
        rules={{ required: "this field is required.",
        minLength:
        {
           value:3,
           message:'Length must be  3 characters'
        }, }}
        render={({ field }) => (
          <TextField
            id="user-name"
            label="User Name"
            variant="outlined"
            placeholder="Enter User Name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.userName)}
            helperText={errors.userName?.message}
          />
        )}
      />
    </>
  );
};
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
        rules={{ required: "this field is required.",
        // minLength:
        // {
        //    value:3,
        //    message:'Length must be 3 characters'
        // },
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



const AddressForm = () => {

  //For Selecting gender need to change the state
  const [value, setValue] = React.useState('female');

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


function getStepContent(step) {
  switch (step) {
    case 0:
      return <BasicForm />;

    case 1:
      return <ContactForm />;
      
      case 2:
        return <PersonalForm />;
       
    case 3:
      return <AddressForm />;
   
    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      userName: "",
      emailAddress: "",
      phoneNumber: "",
      password: "",
      confirmPassword:"",
      age:"",
      hobby:"",
      address2: "",
      country: "",
      dateTime:"",
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();
  const isStepOptional = (step) => {
    return step === 2;
  };
  const isStepFalied = () => {
    return Boolean(Object.keys(methods.formState.errors).length);
  };
  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = (data) => {
    console.log(data);
      setActiveStep(activeStep + 1);
      setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
    
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep} >
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                optional
              </Typography>
            );
          }
          if (isStepFalied() && activeStep === index) {
            labelProps.error = true;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Submitted✅
        </Typography>
      ) : (
        <>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleNext)}>
              {getStepContent(activeStep)}

              <Button
                className={classes.button}
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                back
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                >
                  skip
                </Button>
              )}
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                // onClick={handleNext}
                type="submit"
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </form>
          </FormProvider>
        </>
      )}
    </div>
  );
};

export default LinaerStepper;
