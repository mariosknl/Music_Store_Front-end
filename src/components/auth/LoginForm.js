import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import userLog from '../../actionCreators/userActions';
import Form from '../ui/Form';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { loginUser } = userLog;

  const formik = useFormik({
    initialValues: { username: '', password: '' },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(5, 'Needs to be at least 5 characters')
        .required('Cannot be empty'),
      password: Yup.string()
        .min(8, 'Min value is 8 characters')
        .required('Please enter your password')
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
          'Must contain 8 characters, One Uppercase, One Lowercase, One Number',
        ),
    }),
    onSubmit: values => {
      const { username, password } = values;
      const userObj = {
        user: {
          username,
          password,
        },
      };
      dispatch(loginUser(userObj));
    },
  });

  return (
    <>
      <div className="w-full max-w-xs">
        <Form formik={formik} />
      </div>
    </>
  );
};

export default LoginForm;
