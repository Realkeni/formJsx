// // import './App.css';
// import './index.css'

// import React, { useState } from 'react';
// // import './Form.css'; // Importing the CSS file

// const MyForm = () => {
//   // Initialize state
//   const [formData, setFormData] = useState({
//     text: '',
//     number: '',
//     checkbox: false,
//     radio: '',
//     select: '',
//     textarea: '',
//   });

//   const [submittedData, setSubmittedData] = useState(null);

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmittedData(formData);
//   };

//   return (
//     <div className="form-container">
//       <h1>My Form</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Text:</label>
//           <input
//             type="text"
//             name="text"
//             value={formData.text}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label>Number:</label>
//           <input
//             type="number"
//             name="number"
//             value={formData.number}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label>Checkbox:</label>
//           <input
//             type="checkbox"
//             name="checkbox"
//             checked={formData.checkbox}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label>Radio:</label>
//           <input
//             type="radio"
//             name="radio"
//             value="option1"
//             checked={formData.radio === 'option1'}
//             onChange={handleChange}
//           />
//           Option 1
//           <input
//             type="radio"
//             name="radio"
//             value="option2"
//             checked={formData.radio === 'option2'}
//             onChange={handleChange}
//           />
//           Option 2
//         </div>
//         <div className="form-group">
//           <label>Select:</label>
//           <select
//             name="select"
//             value={formData.select}
//             onChange={handleChange}
//           >
//             <option value="">--Please choose an option--</option>
//             <option value="option1">Option 1</option>
//             <option value="option2">Option 2</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label>Textarea:</label>
//           <textarea
//             name="textarea"
//             value={formData.textarea}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//       {submittedData && (
//         <div className="submitted-data">
//           <h2>Submitted Information:</h2>
//           <p>{JSON.stringify(submittedData, null, 2)}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyForm;

import React, { useState } from 'react';
// import './SchoolForm.css'; // Importing the CSS file

const SchoolForm = () => {
  // Initialize state
  const [formData, setFormData] = useState({
    studentName: '',
    age: '',
    acceptTerms: false,
    gender: '',
    classLevel: '',
    comments: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="form-container">
      <h1>School Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Student Name:</label>
          <input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Accept Terms and Conditions:</label>
          <input
            type="checkbox"
            name="acceptTerms"
            checked={formData.acceptTerms}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === 'male'}
            onChange={handleChange}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === 'female'}
            onChange={handleChange}
          />
          Female
        </div>
        <div className="form-group">
          <label>Class Level:</label>
          <select
            name="classLevel"
            value={formData.classLevel}
            onChange={handleChange}
          >
            <option value="">--Please choose an option--</option>
            <option value="freshman">Freshman</option>
            <option value="sophomore">Sophomore</option>
            <option value="junior">Junior</option>
            <option value="senior">Senior</option>
          </select>
        </div>
        <div className="form-group">
          <label>Comments:</label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {submittedData && (
        <div className="submitted-data">
          <h2>Submitted Information:</h2>
          <p>{JSON.stringify(submittedData, null, 2)}</p>
        </div>
      )}
    </div>
  );
};

export default SchoolForm;


