
import React from "react";
import './../styles/App.css';
import Form from './components/Form';



const fields = [
  { name: 'name', type: 'text', label: 'Name' },
  { name: 'email', type: 'email', label: 'Email' },
  { name: 'password', type: 'password', label: 'Password' },
];

const handleSubmit = (formData) => {
  console.log(formData);
  // Output: Today is Tuesday, July 30, 2024 and here are the results:
  // {
  //   name: 'John Doe',
  //   email: 'johndoe@example.com',
  //   password: 'password123',
  // }
};





const App = () => {

  return (
    <div>
        {/* Do not remove the main div */}
        <Form onSubmit={handleSubmit} fields={fields} />
    </div>
  )
}

export default App
