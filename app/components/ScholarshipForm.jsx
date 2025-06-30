'use client';
import { useState } from 'react';

export default function ScholarshipForm() {
    const [formData, setFormData] = useState({first_name: '', last_name: '', email_id: '', phone_number: '', address: '', comment: '' });

    const [file, setFile] = useState(null);
    const [file2, setFile2] = useState(null);

    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);

    const [errors, setErrors] = useState({});
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[A-Za-z\s]*$/;

    const validate = () => {

    let tempErrors = {};

    if (!formData.first_name) tempErrors.firstName = "First Name is required";

    if (!nameRegex.test(formData.first_name))
      tempErrors.firstName =
        "Please enter valid First Name. Numbers and Special characters are not allowed!";

    if (!formData.last_name) tempErrors.lastName = "Last Name is required";

    if (!nameRegex.test(formData.last_name))
      tempErrors.lastName =
        "Please enter valid Last Name. Numbers and Special characters are not allowed!";
    
    if (!formData.email_id) tempErrors.emailId = "Email Id is required";

    if (!emailRegex.test(formData.email_id))
      tempErrors.emailId = "Please enter valid Email Id";

    if (!formData.phone_number) tempErrors.phone = "Phone number is required";

    if (formData.phone_number.length != 10) tempErrors.phone = "Please enter valid Phone number";

    if (isNaN(formData.phone_number))
      tempErrors.phone = "Phone number should have only numeric value";
  
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

    const handleChange = (e) => {
     setFormData({ ...formData, [e.target.name]: e.target.value });
    };

   const handleFileChange = (e) => {
    if (e.target.files) {
        setFile(e.target.files);
    }
    };

    const handleFileChange2 = (e) => {
    if (e.target.files) {
        setFile2(e.target.files);
    }
    };


     const handleSubmit = async (e) => {
        e.preventDefault();
         const formId = 1067; // Replace with your Contact Form 7 form ID
         const url = `https://netfirst.ca/gwebpro_new/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback`;
         
         
         if(validate()) {
          
            const body = new FormData();

            body.append("first_name", formData.first_name); // Replace 'your-name' with the actual field name from your form
            body.append("last_name", formData.last_name);
            body.append("email_id", formData.email_id);
            body.append("phone_number", formData.phone_number);
            body.append("address", formData.address);
            body.append("comment", formData.comment);
            body.append("_wpcf7_unit_tag", 1067);

              try{
                    setLoading(true);
                    const response = await fetch(url,{
                    method: "POST",
                    body,
                    });
                    const result = await response.json();
                    if(result.status === "mail_sent"){
                            setLoading(false);
                            setStatus("Thank You! Your message is submitted successfully.");
                    } else{
                            setLoading(false);
                            setStatus(result.message);
                    }

                    //Reset the form
                    setFormData({ first_name: '', last_name: '', email_id: '', phone_number: '', address: '', comment: '' });

                } catch(error){
                    setLoading(false);
                    console.error("Error submitting the form:", error);
                    setStatus("An error occurred. Please try again.");
                }
                } else {
                  console.log("Form validation failed. Cannot submit.");
                }
        }

    return(
    <>
        <div className="row">
            <div className="col">
              <div className="contact-form form-questionnaires">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        placeholder="First Name *"
                        required=""
                        type="text"
                       name="first_name" value={formData.first_name} onChange={handleChange}
                      />

                      {errors.firstName && (
                      <p style={{ color: "red" }}>{errors.firstName}</p>
                    )}
                    </div>
                    <div className="col-md-6">
                      <input
                        placeholder="Last Name *"
                        required=""
                        type="text"
                        name="last_name" value={formData.last_name} onChange={handleChange}
                      />
                       {errors.lastName && (
                      <p style={{ color: "red" }}>{errors.lastName}</p>
                    )}
                    </div>
                    <div className="col-md-6">
                      <input
                        placeholder="Email Id *"
                        required=""
                        type="email"
                        name="email_id" value={formData.email_id} onChange={handleChange}
                      />

                    {errors.emailId && (
                      <p style={{ color: "red" }}>{errors.emailId}</p>
                    )}
                    </div>
                    <div className="col-md-6">
                      <input
                        placeholder="Phone Number *"
                        required=""
                        type="tel"
                        minLength={10} maxLength={10}
                       name="phone_number" value={formData.phone_number} onChange={handleChange}
                      />
                      {errors.phone && (
                      <p style={{ color: "red" }}>{errors.phone}</p>
                    )}
                    </div>
                    <div className="col-12">
                      <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Address"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Proof of enrollment (Student ID or official letter):
                      </label>
                      <input type="file" onChange={handleFileChange} accept=".jpg,.jpeg,.png, .pdf" />
                    </div>
                    <div className="col-12">
                      <label htmlFor="">Upload Essay:</label>
                      <input type="file"  onChange={handleFileChange2} accept=".jpg,.jpeg,.png, .pdf" />
                    </div>
                    <div className="col-12">
                      <textarea name="comment" value={formData.comment} onChange={handleChange} placeholder="Message"></textarea>
                    </div>
                    <div className="col-12">
                       {loading ? (
                      <button disabled> Sending Request...</button>
                       ) : (
                          <button type="submit">Submit</button>
                       )}
                    </div>
                    <div className="col-12"> {status && <p style={{ color: 'green' }}>{status}</p>}</div>
                  </div>
                </form>
              </div>
            </div>
          </div>
    </>
    );
}