module.exports = function validateStudent(data) {
    const errors = {};
    if (!data.name || data.name.length < 3 || !/^[a-zA-Z ]+$/.test(data.name)) {
      errors.name = 'Name must be at least 3 characters and only letters';
    }
  
    if (!data.email || !/^\S+@\S+\.\S+$/.test(data.email)) {
      errors.email = 'Invalid email';
    }
  
    if (!data.course) {
      errors.course = 'Course is required';
    }
  
    if (!data.address || !/^.{5,}$/.test(data.address)) {
      errors.address = 'Address must be at least 5 characters';
    }
  
    if (!data.mobile || !/^\d{10}$/.test(data.mobile)) {
      errors.mobile = 'Mobile must be 10 digits';
    }
  
    if (!data.dob) {
      errors.dob = 'DOB is required';
    }
  
    return errors;
  };
  