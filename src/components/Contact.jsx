/* eslint-disable no-unused-vars */
import React from 'react';
import Container from './Container';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram, Send, Facebook } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-linear-to-b from-transparent via-[#0f0f1e] to-black">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-thin myFont text-white">
            Get In <span className="text-purple-400">Touch</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Drop me a message!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-5">

              <a href="mailto:obaidullahmiazi.dev@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-purple-400 group">
                <div className="p-3 bg-purple-900/20 rounded-xl group-hover:bg-purple-600/40"><Mail size={28} /></div>
                <div><p className="text-sm text-gray-500">Email</p><p className="text-lg">obaidullahmiazi.dev@gmail.com</p></div>
              </a>

              <a href="https://github.com/obaidullah-miazi-dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-purple-400 group">
                <div className="p-3 bg-purple-900/20 rounded-xl group-hover:bg-purple-600/40"><Github size={28} /></div>
                <div><p className="text-sm text-gray-500">GitHub</p><p className="text-lg">@obaidullah-miazi-dev</p></div>
              </a>

              <a href="https://linkedin.com/in/obaidullah-miazi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-purple-400 group">
                <div className="p-3 bg-purple-900/20 rounded-xl group-hover:bg-purple-600/40"><Linkedin size={28} /></div>
                <div><p className="text-sm text-gray-500">LinkedIn</p><p className="text-lg">@obaidullah-miazi</p></div>
              </a>

              <a href="https://www.facebook.com/ObaidullahMiazi.dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-purple-400 group">
                <div className="p-3 bg-purple-900/20 rounded-xl group-hover:bg-purple-600/40"><Facebook size={28} /></div>
                <div><p className="text-sm text-gray-500">Instagram</p><p className="text-lg">@ObaidullahMiazi.dev</p></div>
              </a>

              <a href="https://www.instagram.com/obaidullahmiazi.dev/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-purple-400 group">
                <div className="p-3 bg-purple-900/20 rounded-xl group-hover:bg-purple-600/40"><Instagram size={28} /></div>
                <div><p className="text-sm text-gray-500">Instagram</p><p className="text-lg">@obaidullahmiazi.dev</p></div>
              </a>

            </div>
          </motion.div>

          {/* WORKING CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              action="https://formsubmit.co/obaidullahmiazi.dev@gmail.com"
              method="POST"
              className="space-y-6"
            >
              {/* === REQUIRED HIDDEN INPUTS FOR FORMSUBMIT === */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_autoresponse" value="Thank you for reaching out! I'll get back to you within 24 hours. 🚀 - Obaidullah Miazi" />
              <input type="hidden" name="_subject" value="New Portfolio Message!" />

              

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-6 py-4 bg-gray-900/60 border border-purple-500/20 rounded-xl focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-6 py-4 bg-gray-900/60 border border-purple-500/20 rounded-xl focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
              />
              <textarea
                name="message"
                rows="6"
                placeholder="Your Message..."
                required
                className="w-full px-6 py-4 bg-gray-900/60 border border-purple-500/20 rounded-xl focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all resize-none"
              ></textarea>

              <motion.button
                type="submit"
                className="w-full py-4 bg-linear-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-500/50 flex items-center justify-center gap-3 transition-all"
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;