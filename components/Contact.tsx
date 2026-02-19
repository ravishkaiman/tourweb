"use client";

import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        // Simulate API call
        try {
            // In a real app, this would be: await fetch('/api/contact', { ... })
            await new Promise(resolve => setTimeout(resolve, 1500));
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="section-padding bg-gray-50 py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h4 className="text-green-700 font-bold uppercase tracking-wider mb-2">Get in Touch</h4>
                    <h2 className="text-4xl font-serif font-bold text-gray-900">Ready to Plan Your Trip?</h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Contact Info Side */}
                    <div className="w-full lg:w-1/3 bg-green-800 text-white p-10 flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                            <p className="text-green-100 mb-8">Fill up the form and our Team will get back to you within 24 hours.</p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="text-xl">📍</div>
                                    <div>
                                        <h5 className="font-bold">Address</h5>
                                        <p className="text-green-100 text-sm">No. 123, High Level Road,<br />Nugegoda, Sri Lanka.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="text-xl">📞</div>
                                    <div>
                                        <h5 className="font-bold">Phone</h5>
                                        <p className="text-green-100 text-sm"><a href="tel:+94713410214">+94 71 341 0214</a></p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="text-xl">✉️</div>
                                    <div>
                                        <h5 className="font-bold">Email</h5>
                                        <p className="text-green-100 text-sm"><a href="mailto:hello@safayatours.com">hello@safayatours.com</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h5 className="font-bold mb-4">Connect via App</h5>
                            <div className="flex gap-4">
                                <a
                                    href="https://wa.me/94713410214"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-[#25D366] transition-colors duration-300"
                                    title="Chat on WhatsApp"
                                >
                                    <span className="text-2xl">💬</span>
                                </a>
                                <a
                                    href="https://t.me/+94713410214"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-[#0088cc] transition-colors duration-300"
                                    title="Chat on Telegram"
                                >
                                    <span className="text-2xl">✈️</span>
                                </a>
                            </div>
                            <p className="text-green-100 text-sm mt-3">Available on WhatsApp & Telegram</p>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="w-full lg:w-2/3 p-10">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
                                        placeholder="+94 7X XXX XXXX"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition resize-none"
                                    placeholder="Tell us about your dream trip..."
                                ></textarea>
                            </div>

                            <div className="grid grid-cols-1 gap-4 mt-6">
                                <button
                                    type="button"
                                    onClick={() => {
                                        if (!formData.name || !formData.email || !formData.message) {
                                            alert('Please fill in your Name, Email and Message first.');
                                            return;
                                        }
                                        const subject = `New Inquiry from ${formData.name}`;
                                        const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`;
                                        // Gmail web compose link
                                        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=hello@safayatours.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                                        window.open(gmailUrl, '_blank');
                                    }}
                                    className="w-full bg-red-600 text-white font-bold py-4 px-8 rounded hover:bg-red-700 transition duration-300 flex items-center justify-center gap-2"
                                >
                                    <span className="text-xl">M</span> Open in Gmail App
                                </button>
                            </div>
                        </form>

                        <div className="mt-8 pt-8 border-t border-gray-200">
                            <p className="text-gray-600 mb-4 text-center font-medium">Or send directly via your favorite app:</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <button
                                    type="button"
                                    onClick={() => {
                                        if (!formData.name || !formData.email || !formData.message) {
                                            alert('Please fill in your Name, Email and Message first.');
                                            return;
                                        }
                                        const text = `*New Inquiry from Website*%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Message:* ${encodeURIComponent(formData.message)}`;
                                        window.open(`https://wa.me/94713410214?text=${text}`, '_blank');
                                    }}
                                    className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3 px-6 rounded hover:bg-[#20bd5a] transition duration-300"
                                >
                                    <span className="text-xl">💬</span> Send via WhatsApp
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        if (!formData.name || !formData.email || !formData.message) {
                                            alert('Please fill in your Name, Email and Message first.');
                                            return;
                                        }
                                        // Telegram doesn't support pre-filled messages for users deeply, but we can open the chat
                                        window.open(`https://t.me/+94713410214`, '_blank');
                                    }}
                                    className="flex items-center justify-center gap-2 bg-[#0088cc] text-white font-bold py-3 px-6 rounded hover:bg-[#0077b5] transition duration-300"
                                >
                                    <span className="text-xl">✈️</span> Send via Telegram
                                </button>
                            </div>
                            <p className="text-xs text-gray-400 text-center mt-2">Note: For WhatsApp, the message will be pre-filled with your details.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
