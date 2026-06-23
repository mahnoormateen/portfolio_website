// Contact.jsx
"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        "service_jm0bf05",
        "template_1n9z5ha",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "wARvolB-R7T9QC1XM",
      );

      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    }

    setLoading(false);
  };
  return (
    <section
      id="contact"
      className="relative min-h-screen text-white px-4 sm:px-6 md:px-12 py-10 sm:py-14 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-28 sm:top-40 left-1/2 -translate-x-1/2 w-72 h-72 sm:w-125 sm:h-125 bg-blue-500/10 blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-100 sm:h-100 bg-cyan-500/10 blur-[180px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Top Heading */}
        <div className="text-center mb-14 sm:mb-20">
          <div className="flex justify-center mb-6 sm:mb-8">
            <span className="px-4 sm:px-5 py-2 rounded-full border border-white/10 bg-white/[0.03] text-[10px] sm:text-xs tracking-[0.2em] text-gray-300 uppercase">
              Contact
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Let’s build something
            <br />
            <span className="bg-linear-to-r from-[#6F63FF] via-[#5F7BFF] to-[#38D9FF] bg-clip-text text-transparent">
              remarkable
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-5 sm:mt-6 text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed">
            Always up for a deep conversation about{" "}
            <span className="font-semibold text-gray-300">
              agent skills, subagents, MCP servers,
            </span>
            design systems, or anything where AI meets the frontend. Drop a line
            — I read every message.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-start">
          {/* Left Card */}
          <div className="relative p-px rounded-3xl ">
            <div className="absolute inset-0 rounded-3xl blur-md opacity-40" />

            <div className="relative bg-[#0a1022]/30 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/5">
              {/* Card Content */}
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Get in touch
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-8 sm:mb-10">
                I respond within 24 hours. The fastest paths are email or
                LinkedIn.
              </p>
              <div className="flex items-start gap-4 pb-6 border-b border-[#1b2240] min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#101935] border border-[#253055] flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-cyan-400" />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 mb-1">
                    Email
                  </p>
                  <p className="font-semibold text-sm sm:text-lg break-all">
                    mahnoormaten0@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 pb-6 border-b border-[#1b2240] mt-5 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#101935] border border-[#253055] flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-cyan-400" />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 mb-1">
                    Location
                  </p>
                  <p className="font-semibold text-sm sm:text-lg">
                    Lahore, Pakistan
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 mt-5 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#101935] border border-[#253055] flex items-center justify-center shrink-0">
                  <FaLinkedinIn size={20} className="text-cyan-400" />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 mb-1">
                    LinkedIn
                  </p>
                  <p className="font-semibold text-sm sm:text-lg break-words">
                    linkedin.com/in/mahnoor-mateen-b06201380/
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-black/20 border border-[#1d2440] rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.4)]">
            <form onSubmit={sendEmail} className="space-y-6">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="block text-[10px] sm:text-xs uppercase tracking-widest text-white mb-3">
                    Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full min-w-0 h-12 sm:h-14 px-4 sm:px-5 bg-[#111522] border border-[#242c45] rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-[10px] sm:text-xs uppercase tracking-widest text-white mb-3">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="w-full min-w-0 h-12 sm:h-14 px-4 sm:px-5 bg-[#111522] border border-[#242c45] rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-500 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] sm:text-xs uppercase tracking-widest text-white mb-3">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full min-w-0 h-12 sm:h-14 px-4 sm:px-5 bg-[#111522] border border-[#242c45] rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-500 transition"
                />
              </div>

              <div>
                <label className="block text-[10px] sm:text-xs uppercase tracking-widest text-white mb-3">
                  Message
                </label>

                <textarea
                  rows="6"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about the role, project, or idea..."
                  className="w-full min-w-0 px-4 sm:px-5 py-4 bg-[#111522] border border-[#242c45] rounded-xl text-white placeholder:text-gray-500 resize-none focus:outline-none focus:border-cyan-500 transition"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group relative overflow-hidden w-full h-12 sm:h-14 rounded-full font-semibold text-white bg-linear-to-r from-[#6B5BFF] via-[#5B7CFF] to-[#29D4FF]"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
