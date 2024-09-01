import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  if(token){
    navigate("/Faculty/Dashboard");
  }

  const formik = useFormik({
    initialValues: {
      orgEmail: '',
      password: '',
    },
    validationSchema: Yup.object({
      orgEmail: Yup.string()
        .email('Invalid email address')
        .required('Organization email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post('https://seft-appraisal.onrender.com/user/signin', {
            organization_email_id: values.orgEmail,
            password: values.password,
        });
        const { token } = response.data;
        localStorage.setItem('token', token);
        console.log("Token", token)
        navigate('/Faculty/Dashboard');
      } catch (error) {
        console.error('Login error:', error);
        alert('Invalid Credentials');
      }
    },
  });

  return (
    <div className="flex items-center justify-center w-full h-screen bg-blue-100">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col p-5 bg-white rounded-md shadow-md w-96"
      >
        <h1 className="self-center mb-4 text-2xl font-bold">Login</h1>

        <div className="mb-4">
          <label htmlFor="orgEmail" className="block text-sm font-medium text-gray-700">Organization Email</label>
          <input
            id="orgEmail"
            name="orgEmail"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.orgEmail}
            className={`mt-1 block w-full p-2 border ${formik.touched.orgEmail && formik.errors.orgEmail ? 'border-red-500' : 'border-gray-300'} rounded-md`}
            placeholder="Organization Email"
          />
          {formik.touched.orgEmail && formik.errors.orgEmail && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.orgEmail}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className={`mt-1 block w-full p-2 border ${formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md`}
            placeholder="Password"
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={!formik.isValid || formik.isSubmitting}
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 disabled:bg-blue-300"
        >
          Login
        </button>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/Signup/" className="text-blue-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
