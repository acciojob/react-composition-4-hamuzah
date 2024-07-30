// Form.js
import React from 'eact';

const Form = ({ onSubmit, fields }) => {
  const [formData, setFormData] = React.useState({});

  const handleChange = (event) => {
    setFormData((prevFormData) => ({
     ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name}>
          <label>
            {field.label}
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
            />
          </label>
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;