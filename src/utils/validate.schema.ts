import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Password is required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
})