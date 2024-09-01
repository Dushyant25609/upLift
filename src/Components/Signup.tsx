import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';

function SignUp() {
  const navigate = useNavigate(); // Use useNavigate hook

  async function signUpApi(values: { full_Name: string; Admin: boolean; personal_email: string; org_email: string; password: string }) {
    const { full_Name, Admin, personal_email, org_email, password } = values;

    try {
      const response = await axios.post("https://seft-appraisal.onrender.com/user/register", {
        full_name: full_Name,
        is_admin: Admin,
        personal_email_id: personal_email,
        organization_email_id: org_email,
        password: password,
      });

      console.log(response.data);
      navigate("/Login/"); // Use navigate to handle routing
    } catch (error) {
      console.error("There was an error registering the user:", error);
      // Handle error (e.g., show error message to the user)
    }
  }

  const schema = Yup.object().shape({
    full_Name: Yup.string().required('Full Name is required'),
    Admin: Yup.boolean().required(),
    personal_email: Yup.string().email('Invalid email address').required('Personal Email is required'),
    org_email: Yup.string().email('Invalid email address').required('Organization Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  });

  const { handleSubmit, values, handleChange, errors, handleBlur, touched, isValid } = useFormik({
    initialValues: {
      full_Name: "",
      Admin: false,
      personal_email: "",
      org_email: "",
      password: "",
    },
    onSubmit: signUpApi,
    validationSchema: schema,
  });

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label htmlFor="full_Name" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            id="full_Name"
            name="full_Name"
            type="text"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.full_Name}
            className={`mt-1 block w-full p-2 border ${errors.full_Name && touched.full_Name ? 'border-red-500' : 'border-gray-300'} rounded-md`}
            placeholder="John Doe"
          />
          {touched.full_Name && errors.full_Name && <div className="text-red-500 text-sm">{errors.full_Name}</div>}
        </div>

        {/* Personal Email */}
        <div>
          <label htmlFor="personal_email" className="block text-sm font-medium text-gray-700">Personal Email</label>
          <input
            id="personal_email"
            name="personal_email"
            type="email"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.personal_email}
            className={`mt-1 block w-full p-2 border ${errors.personal_email && touched.personal_email ? 'border-red-500' : 'border-gray-300'} rounded-md`}
            placeholder="you@example.com"
          />
          {touched.personal_email && errors.personal_email && <div className="text-red-500 text-sm">{errors.personal_email}</div>}
        </div>

        {/* Organization Email */}
        <div>
          <label htmlFor="org_email" className="block text-sm font-medium text-gray-700">Organization Email</label>
          <input
            id="org_email"
            name="org_email"
            type="email"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.org_email}
            className={`mt-1 block w-full p-2 border ${errors.org_email && touched.org_email ? 'border-red-500' : 'border-gray-300'} rounded-md`}
            placeholder="you@organization.com"
          />
          {touched.org_email && errors.org_email && <div className="text-red-500 text-sm">{errors.org_email}</div>}
        </div>

        {/* Admin Checkbox */}
        <div className="flex items-center">
          <input
            id="adminCheckbox"
            name="Admin"
            type="checkbox"
            onChange={handleChange}
            onBlur={handleBlur}
            checked={values.Admin}
            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
          />
          <label htmlFor="adminCheckbox" className="ml-2 block text-sm text-gray-900">Admin</label>
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.password}
            className={`mt-1 block w-full p-2 border ${errors.password && touched.password ? 'border-red-500' : 'border-gray-300'} rounded-md`}
            placeholder="••••••••"
          />
          {touched.password && errors.password && <div className="text-red-500 text-sm">{errors.password}</div>}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={!isValid}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 disabled:bg-indigo-300 transition duration-300"
          >
            Sign Up
          </button>
        </div>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Already have an account? <Link to="/Login/" className="text-indigo-600 hover:text-indigo-700">Log in</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
