import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Define the validation schema using Yup
const validationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  location: Yup.string().required('Location is required'),
  role: Yup.string().required('Role is required'),
  date: Yup.date().required('Date is required').nullable()
});

const ADD: React.FC = () => {
  // Define the initial values for the form
  const initialValues = {
    title: '',
    description: '',
    location: '',
    role: '',
    date: ''
  };

  // Example token; replace with your actual token source
  const token = localStorage.getItem('token');

  async function handleSubmit(values: typeof initialValues) {
    try {
      const response = await axios.post("https://seft-appraisal.onrender.com/seminar/add", values, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log("Successfully published", response.data);
      navigate("/Faculty/Dashboard");
    } catch (error) {
      console.error("Error publishing project:", error);
    }
  }

  // Handle form submission
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/Faculty/Dashboard/');
  };

  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <div className="max-w-4xl w-1/2 mx-auto p-6 border border-gray-300 rounded-lg bg-white shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Submit Details</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                <Field name="title" type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" />
                <ErrorMessage name="title" component="div" className="text-red-600 text-sm mt-1" />
              </div>

              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                <Field name="description" as="textarea" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" />
                <ErrorMessage name="description" component="div" className="text-red-600 text-sm mt-1" />
              </div>

              <div className="mb-4">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                <Field name="location" type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" />
                <ErrorMessage name="location" component="div" className="text-red-600 text-sm mt-1" />
              </div>

              <div className="mb-4">
                <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
                <Field name="role" type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" />
                <ErrorMessage name="role" component="div" className="text-red-600 text-sm mt-1" />
              </div>

              <div className="mb-4">
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
                <Field name="date" type="date" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" />
                <ErrorMessage name="date" component="div" className="text-red-600 text-sm mt-1" />
              </div>

              <div className="flex gap-4">
                <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600">
                  Submit
                </button>
                <button type="button" className='w-full py-2 px-4 border-black border rounded-md' onClick={handleCancel}>Cancel</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ADD;
