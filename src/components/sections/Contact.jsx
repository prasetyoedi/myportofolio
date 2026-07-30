import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { AnimatedSection } from '../AnimatedSection';
import { data } from '../../data';
import { Mail, Github, Linkedin, Instagram, Send, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_default',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_default',
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_default'
      )
      .then(
        () => {
          setStatus({ type: 'success', message: 'Message sent successfully!' });
          formRef.current.reset();
          setIsSubmitting(false);
        },
        () => {
          setStatus({ type: 'error', message: 'Failed to send. Please try again.' });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-5">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <h2 className="section-title gradient-text text-center">Get In Touch</h2>
          <p className="text-center text-[var(--text-muted)] mb-10 max-w-xl mx-auto">
            Have a project in mind or want to collaborate? Let's connect.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-4">
            <AnimatedSection delay={100}>
              <div className="glass p-6 rounded-2xl">
                <h3 className="font-bold text-[var(--text-white)] mb-4">Contact Information</h3>

                <div className="space-y-3">
                  <a
                    href={`mailto:${data.email}`}
                    className="flex items-center gap-3 text-[var(--text-muted)] hover:text-[var(--text-white)] transition-colors text-sm"
                  >
                    <Mail size={18} className="text-blue-400" /> {data.email}
                  </a>
                  <a
                    href={data.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[var(--text-muted)] hover:text-[var(--text-white)] transition-colors text-sm"
                  >
                    <Phone size={18} className="text-green-400" /> {data.phone}
                  </a>
                  <div className="flex items-center gap-3 text-[var(--text-muted)] text-sm">
                    <MapPin size={18} className="text-red-400" /> {data.location}
                  </div>
                </div>

                <div className="flex gap-3 mt-5 pt-4 border-t border-[var(--glass-border)]">
                  <a
                    href={data.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full glass text-[var(--text-muted)] hover:text-[var(--text-white)] transition-colors"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={data.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full glass text-[var(--text-muted)] hover:text-[var(--text-white)] transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={data.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full glass text-[var(--text-muted)] hover:text-[var(--text-white)] transition-colors"
                  >
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="md:col-span-3">
            <AnimatedSection delay={150}>
              <div className="glass p-6 md:p-8 rounded-2xl">
                <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-muted)] mb-1.5">Name</label>
                      <input
                        type="text"
                        name="user_name"
                        required
                        className="contact-input"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-muted)] mb-1.5">Email</label>
                      <input
                        type="email"
                        name="user_email"
                        required
                        className="contact-input"
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-muted)] mb-1.5">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      className="contact-input"
                      placeholder="How can I help?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-muted)] mb-1.5">Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      className="contact-input resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full justify-center"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send size={16} />
                  </button>

                  {status && (
                    <p className={`text-sm text-center mt-2 ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                      {status.message}
                    </p>
                  )}
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}