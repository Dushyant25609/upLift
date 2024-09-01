import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Define the validation schema using Yup
const validationSchema = Yup.object({
  topic: Yup.string().required('Topic is required'),
  description: Yup.string().required('Description is required'),
  github_link: Yup.string().url('Must be a valid URL').required('GitHub link is required'),
  tech_stack: Yup.string().required('Tech stack is required'),
  date: Yup.date().required('Date is required').nullable()
});

const ADD: React.FC = () => {
  // Define the initial values for the form
  const initialValues = {
    topic: '',
    description: '',
    github_link: '',
    tech_stack: '',
    date: ''
  };

  // Example token; replace with your actual token source
  const token = localStorage.getItem('token');

  async function handleSubmit(values: typeof initialValues) {
    try {
      const response = await axios.post("https://seft-appraisal.onrender.com/projects/add", values, {
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
        <h2 className="text-2xl font-bold text-center mb-6">Submit Project Details</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <div className="mb-4">
                <label htmlFor="topic" className="block text-sm font-medium text-gray-700">Topic</label>
                <Field name="topic" type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" />
                <ErrorMessage name="topic" component="div" className="text-red-600 text-sm mt-1" />
              </div>

              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                <Field name="description" as="textarea" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" />
                <ErrorMessage name="description" component="div" className="text-red-600 text-sm mt-1" />
              </div>

              <div className="mb-4">
                <label htmlFor="github_link" className="block text-sm font-medium text-gray-700">GitHub Link</label>
                <Field name="github_link" type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" />
                <ErrorMessage name="github_link" component="div" className="text-red-600 text-sm mt-1" />
              </div>

              <div className="mb-4">
                <label htmlFor="tech_stack" className="block text-sm font-medium text-gray-700">Tech Stack</label>
                <Field name="tech_stack" type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" />
                <ErrorMessage name="tech_stack" component="div" className="text-red-600 text-sm mt-1" />
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
