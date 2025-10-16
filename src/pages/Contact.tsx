// import { useState, FormEvent } from 'react';
// import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     await new Promise(resolve => setTimeout(resolve, 1500));

//     setIsSubmitting(false);
//     setSubmitSuccess(true);
//     setFormData({ name: '', email: '', phone: '', message: '' });

//     setTimeout(() => {
//       setSubmitSuccess(false);
//     }, 5000);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <div className="min-h-screen pt-28">
//       <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-amber-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-4xl mx-auto">
//             <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Get in Touch</h1>
//             <p className="text-xl text-gray-600 leading-relaxed">
//               Ready to start your project? Contact us today for a free consultation
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
//             <div className="lg:col-span-2 space-y-8">
//               <div>
//                 <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
//                 <p className="text-gray-600 leading-relaxed mb-8">
//                   We'd love to hear from you. Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
//                 </p>
//               </div>

//               <div className="space-y-6">
//                 <div className="flex items-start space-x-4 p-4 bg-amber-50 rounded-xl">
//                   <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <Mail className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-900 mb-1">Email Address</h3>
//                     <a href="mailto:coderkajal@gmail.com" className="text-amber-700 hover:text-amber-800 transition-colors duration-300">
//                       coderkajal@gmail.com
//                     </a>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4 p-4 bg-amber-50 rounded-xl">
//                   <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <Phone className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-900 mb-1">Phone Number</h3>
//                     <a href="tel:+917621976674" className="text-amber-700 hover:text-amber-800 transition-colors duration-300">
//                       +91 76219 76674
//                     </a>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4 p-4 bg-amber-50 rounded-xl">
//                   <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <MapPin className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-900 mb-1">Our Location</h3>
//                     <p className="text-gray-600">
//                       Krishna Furniture Interior<br />
//                       Narol, Ahmedabad - 382405
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4 p-4 bg-amber-50 rounded-xl">
//                   <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <Clock className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
//                     <p className="text-gray-600">
//                       Monday - Saturday: 9:00 AM - 7:00 PM<br />
//                       Sunday: Closed
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="lg:col-span-3">
//               <div className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-2xl border border-gray-200 shadow-xl">
//                 <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>

//                 {submitSuccess && (
//                   <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3">
//                     <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
//                     <p className="text-green-800">
//                       Thank you for contacting us! We'll get back to you shortly.
//                     </p>
//                   </div>
//                 )}

//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div>
//                     <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
//                       Your Name *
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-300"
//                       placeholder="Enter your full name"
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
//                       Email Address *
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-300"
//                       placeholder="your.email@example.com"
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
//                       Phone Number
//                     </label>
//                     <input
//                       type="tel"
//                       id="phone"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-300"
//                       placeholder="+91 98765 43210"
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
//                       Your Message *
//                     </label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       required
//                       rows={6}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-300 resize-none"
//                       placeholder="Tell us about your project requirements..."
//                     ></textarea>
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-xl text-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
//                   >
//                     {isSubmitting ? (
//                       <>
//                         <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                         <span>Sending...</span>
//                       </>
//                     ) : (
//                       <>
//                         <Send className="w-5 h-5" />
//                         <span>Send Message</span>
//                       </>
//                     )}
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-8 md:p-12 text-white text-center">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Immediate Assistance?</h2>
//             <p className="text-xl text-amber-100 mb-6">
//               Call us directly for urgent inquiries or quick questions
//             </p>
//             <a
//               href="tel:+919876543210"
//               className="inline-flex items-center space-x-2 bg-white text-amber-700 px-8 py-3 rounded-xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
//             >
//               <Phone className="w-5 h-5" />
//               <span>+91 76219 76674</span>
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;



// import { useState, FormEvent } from 'react';
// import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Split multiple emails into an array
//     const emails = formData.email.split(',').map(e => e.trim());

//     // Prepare payload for Web3Forms
//     const payload = {
//       access_key: '4b4efb4c-5068-4438-9ca2-fb428a0539ab', // Replace with your Web3Forms access key
//       name: formData.name,
//       email: emails.join(','), // Comma-separated emails for Web3Forms
//       phone: formData.phone,
//       message: formData.message,
//       subject: `New Contact Form Submission from ${formData.name}`,
//       redirect: '' // optional
//     };

//     try {
//       const res = await fetch('https://api.web3forms.com/submit', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload)
//       });

//       const result = await res.json();

//       if (result.success) {
//         setSubmitSuccess(true);
//         setFormData({ name: '', email: '', phone: '', message: '' });
//         setTimeout(() => setSubmitSuccess(false), 5000);
//       } else {
//         alert('Error sending message. Please try again.');
//       }
//     } catch (error) {
//       console.error(error);
//       alert('Something went wrong. Please try again.');
//     }

//     setIsSubmitting(false);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="min-h-screen pt-28">
//       {/* Hero Section */}
//       <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-amber-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Get in Touch</h1>
//           <p className="text-xl text-gray-600 leading-relaxed">
//             Ready to start your project? Contact us today for a free consultation
//           </p>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-12">
          
//           {/* Contact Info */}
//           <div className="lg:col-span-2 space-y-8">
//             <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
//             <p className="text-gray-600 mb-8">
//               We'd love to hear from you. Our team is ready to answer all your questions.
//             </p>

//             <div className="space-y-6">
//               {/* Email */}
//               <div className="flex items-start space-x-4 p-4 bg-amber-50 rounded-xl">
//                 <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg flex items-center justify-center flex-shrink-0">
//                   <Mail className="w-6 h-6 text-white" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
//                   <a
//                     href="mailto:akashsuthar311@gmail.com"
//                     className="text-amber-700 hover:text-amber-800 transition-colors duration-300"
//                   >
//                     akashsuthar311@gmail.com
//                   </a>
//                 </div>
//               </div>

//               {/* Phone */}
//               <div className="flex items-start space-x-4 p-4 bg-amber-50 rounded-xl">
//                 <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg flex items-center justify-center flex-shrink-0">
//                   <Phone className="w-6 h-6 text-white" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
//                   <a href="tel:+917621976674" className="text-amber-700 hover:text-amber-800 transition-colors duration-300">
//                     +91 76219 76674
//                   </a>
//                 </div>
//               </div>

//               {/* Location */}
//               <div className="flex items-start space-x-4 p-4 bg-amber-50 rounded-xl">
//                 <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg flex items-center justify-center flex-shrink-0">
//                   <MapPin className="w-6 h-6 text-white" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
//                   <p>Krishna Furniture Interior<br />Narol, Ahmedabad - 382405</p>
//                 </div>
//               </div>

//               {/* Business Hours */}
//               <div className="flex items-start space-x-4 p-4 bg-amber-50 rounded-xl">
//                 <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg flex items-center justify-center flex-shrink-0">
//                   <Clock className="w-6 h-6 text-white" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
//                   <p>Mon - Sat: 9:00 AM - 7:00 PM<br />Sun: Closed</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="lg:col-span-3 bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-2xl border border-gray-200 shadow-xl">
//             <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>

//             {submitSuccess && (
//               <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3">
//                 <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
//                 <p className="text-green-800">
//                   Your message has been received! Krishna Furniture Interior will get back to you shortly.
//                 </p>
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name *"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-300"
//               />

//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email * (use comma to separate multiple)"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 multiple
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-300"
//               />

//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone Number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-300"
//               />

//               <textarea
//                 name="message"
//                 placeholder="Your Message *"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 rows={6}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-300 resize-none"
//               ></textarea>

//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-xl text-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {isSubmitting ? (
//                   <>
//                     <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                     <span>Sending...</span>
//                   </>
//                 ) : (
//                   <>
//                     <Send className="w-5 h-5" />
//                     <span>Send Message</span>
//                   </>
//                 )}
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;

import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    try {
      // ✨ EmailJS Send Method
      const result = await emailjs.send(
        'service_ud9em4g',      // 🔹 Replace with your EmailJS Service ID
        'template_9b6t308',     // 🔹 Replace with your EmailJS Template ID
        templateParams,
        'ndOLRHRHZiSeB2mtX'      // 🔹 Replace with your EmailJS Public Key
      );

      if (result.status === 200) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        alert('Error sending message. Please try again.');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Something went wrong. Please try again.');
    }

    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-28">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ready to start your project? Contact us today for a free consultation.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <p className="text-gray-600 mb-8">
              We'd love to hear from you. Our team is ready to answer all your questions.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start space-x-4 p-4 bg-amber-50 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a
                    href="mailto:akashsuthar311@gmail.com"
                    className="text-amber-700 hover:text-amber-800 transition-colors duration-300"
                  >
                    akashsuthar311@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4 p-4 bg-amber-50 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <a href="tel:+917621976674" className="text-amber-700 hover:text-amber-800 transition-colors duration-300">
                    +91 76219 76674
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4 p-4 bg-amber-50 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                  <p>Narol, Ahmedabad - 382405</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start space-x-4 p-4 bg-amber-50 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                  <p>Mon - Sat: 9:00 AM - 7:00 PM<br />Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-2xl border border-gray-200 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>

            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                <p className="text-green-800">
                  Your message has been received! Krishna Furniture Interior will get back to you shortly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-300"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email *"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-300"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-300"
              />

              <textarea
                name="message"
                placeholder="Your Message *"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-300 resize-none"
              ></textarea>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-xl text-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
