import { useState } from "react";
import { Field,  Form as Formm, Formik,  useField, ErrorMessage  } from "formik";
import * as yup from "yup";
import Loader from "../shared/Loader";
import {message} from 'antd';
import { send } from 'emailjs-com';




function Form() {
 
 
 const [open, setOpen] = useState(false);
 const [toSend, setToSend] = useState({
    from_name: '',
    to_subject: "",
    message: "",
    reply_to: "",
  });

   const sendEmail = async(email, subject, body) => {
    await setToSend(toSend.to_subject = subject)
    await setToSend(toSend.reply_to = email)
    await setToSend(toSend.from_name = email)
    await setToSend(toSend.message = body)
    await send( 'service_aelqeud', 'template_kfiis05', toSend, 'user_TwGFR40loXxxoMbwE3sHr').then((response) => {
       console.log('SUCCESS!', response.status, response.text);
    }).catch((err) => {console.log('FAILED...', err);});
  }


  const validationSchema = yup.object().shape({
    email: yup.string().email("Invalid email address format").required("Email is required"),
    subject: yup.string().min(3, "Firstname must be 3 characters at minimum").required("subject is required"),
    body: yup.string().min(3, "Firstname must be 3 characters at minimum").required("Mesage is required"),
  });

  const MyTextArea = ({label, ...props}) => {
  const [field, meta] = useField(props);
  return (
      <>
          <label htmlFor={props.id || props.name}>{label}</label>
          <textarea className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" {...field} {...props} />
         
      </>
  );
};

  const handleRequest = async (values, setSubmitting, resetForm) => {
    setSubmitting(true)
    setOpen(true)
    try{
       await sendEmail(values.email, values.subject, values.body);
       setSubmitting(false)
       message.success("message sent successfully")
       resetForm({values: ''})
       setOpen(false)
    }catch(error){
      message.error("unable to send message at this time")
      setSubmitting(false)
      setOpen(false)
      resetForm({values: ''})
      console.log(error)
    }
  }

  const handleSubmit = async(values, setSubmitting, resetForm) => {
     handleRequest(values, setSubmitting, resetForm)

  }


    return (
        <section className="relative block py-24  bg-gray-900">
          <div id="contact" className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center ">
              <Loader open={open} setOpen={setOpen} text="Sending message..." />
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-700">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl text-gray-100 font-semibold ">
                      You want to use one of our products or want us to work on a project for you?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-200">
                      Complete this form and we will get back to you in 24 hours.
                    </p>


                  <Formik
                    initialValues={{ email: "", subject: '', body: ""}}
                    onSubmit={(values, {setSubmitting, resetForm }) => {
                          handleSubmit(values, setSubmitting, resetForm);
                      

                    }}
                    validationSchema={validationSchema}
                  >
                   {({ touched, errors, values, isSubmitting }) => (
                    <Formm>
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-gray-300 text-xs font-bold mb-2"
                            htmlFor="email"
                          >
                            Email
                          </label>
                          <Field
                            type="email"
                            name="email"
                            className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                            placeholder="Email"
                            style={{ transition: "all .15s ease" }}
                          />
                          {errors.email && touched.email ? <div className="text-red-400 font-medium flex px-10">{errors.email}</div> : null}
                        </div>


                        <div className="relative w-full mb-3 mt-8">
                          <label
                            className="block uppercase text-gray-300 text-xs font-bold mb-2"
                            htmlFor="full-name"
                          >
                            Subject
                          </label>
                          <Field
                            type="text"
                            name="subject"
                            className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                            placeholder="Enter Subject"
                            style={{ transition: "all .15s ease" }}
                          />
                          {errors.subject && touched.subject ? <div className="text-red-400 font-medium flex px-10">{errors.subject}</div> : null}
                        </div>

                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-gray-300 text-xs font-bold mb-2"
                            htmlFor="message"
                          >
                            Message
                          </label>
                          {/* <Field
                            name="body"
                            rows="4"
                            cols="80"
                            className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                            placeholder="Type a message..."
                          /> */}
                          <MyTextArea
                          
                            name="body"
                            rows="6"
                            cols= "80"
                            placeholder="Enter your message."
                          />
                          {errors.body && touched.body ? <div className="text-red-400 font-medium flex px-10">{errors.body}</div> : null}
                        </div>
                        <div className="text-center mt-6">
                          <button
                            className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                            type="submit"
                            style={{ transition: "all .15s ease" }}
                          >
                            Send Message
                          </button>
                        </div>
                     </Formm>
                    )} 
                  </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}

export default Form
