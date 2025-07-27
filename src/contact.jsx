import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = (e) => {
  e.preventDefault();
  const { name, email, message } = form;

  const subject = encodeURIComponent("New Contact Message from Portfolio");
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

  const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=er.shoaib.malik.2006@gmail.com&su=${subject}&body=${body}`;

  window.open(gmailURL, '_blank');
};


  return (
    <div className="grid place-items-center px-6 py-16 max-w-3xl mx-auto text-white" id="contact">
      <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-20 w-70 border-none rounded-2xl text-4xl grid place-items-center mb-20'>
        <p className="bg-gray-900 h-18 w-68 border-2 rounded-xl border-transparent grid place-items-center font-bold text-white">
          Get In Touch</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 shadow-md space-y-6 w-200"
      >
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-300">Name</label>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="w-full px-4 py-2 rounded-md bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-300">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-2 rounded-md bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-300">Message</label>
          <textarea
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message..."
            required
            className="w-full px-4 py-2 rounded-md bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 rounded-md text-lg font-semibold transition hover:scale-105 duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
