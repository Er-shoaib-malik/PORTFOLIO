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

  const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=er.shoaib.2006@gmail.com&su=${subject}&body=${body}`;

  window.open(gmailURL, '_blank');
};


  return (
    <div className="grid place-items-center px-6 py-16 max-w-3xl mx-auto text-white" id="contact">
      <div className='bg-gradient-to-r from-orange-400 to-emerald-400 h-20 w-70 border-none rounded-full text-4xl grid place-items-center mb-20'>
        <p className="bg-gray-900 h-18 w-68 border-2 rounded-full border-transparent grid place-items-center font-bold text-white">
          Contact Me</p>
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
          className="w-full text-black font-semibold bg-gradient-to-r from-orange-400 to-emerald-400 py-2 rounded-md text-lg font-semibold transition hover:scale-105 duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;