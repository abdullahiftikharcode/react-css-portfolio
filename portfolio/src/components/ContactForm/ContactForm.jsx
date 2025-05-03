import React, { useState } from 'react';
import { 
  TextField, 
  Button, 
  Grid, 
  Box,
  Snackbar,
  Alert
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './ContactForm.module.css';

// Form validation schema using Yup
const validationSchema = yup.object({
  name: yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
  
  email: yup.string()
    .required('Email is required')
    .email('Enter a valid email address'),
  
  phone: yup.string()
    .required('Phone number is required')
    .matches(
      /^(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
      'Enter a valid phone number'
    ),
  
  message: yup.string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters')
});

const ContactForm = () => {
  // State for snackbar alert
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  // Initialize react-hook-form with validation schema
  const { 
    control, 
    handleSubmit, 
    formState: { errors },
    reset 
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
  });

  // Form submission handler
  const onSubmit = (data) => {
    console.log('Form Data:', data);
    
    // Show success message
    setSnackbar({
      open: true,
      message: 'Message sent successfully! I will get back to you soon.',
      severity: 'success'
    });
    
    // Reset form after submission
    reset();
  };

  // Handle Snackbar close
  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box className={styles.formContainer}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Grid container spacing={3}>
          {/* Left Column - Name, Email, Phone */}
          <Grid item xs={12} md={6}>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={!!errors.name}
                  helperText={errors.name?.message}
                  className={styles.formField}
                />
              )}
            />
            
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  className={styles.formField}
                />
              )}
            />
            
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Phone"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                  className={styles.formField}
                />
              )}
            />
          </Grid>
          
          {/* Right Column - Message */}
          <Grid item xs={12} md={6}>
            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={11}
                  margin="normal"
                  error={!!errors.message}
                  helperText={errors.message?.message}
                  className={styles.messageField}
                />
              )}
            />
          </Grid>
        </Grid>
        
        <Box className={styles.buttonContainer}>
          <Button 
            type="submit" 
            variant="contained" 
            color="primary"
            className={styles.submitButton}
          >
            Submit
          </Button>
        </Box>
      </form>
      
      {/* Success/Error Notification */}
      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity} 
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactForm; 