import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 bg-black"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6 bg-white shadow-lg rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-600 mb-6">
            Feel free to reach out to me through any of the platforms below.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/prasetyo-edi-pamungkas-4426611b0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition"
            >
              <Linkedin size={32} />
            </a>
            <a
              href="https://github.com/prasetyoedi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-black transition"
            >
              <Github size={32} />
            </a>
            <a
              href="mailto:prasetyoedipamungkas2002@mail.ugm.ac.id"
              className="text-red-500 hover:text-red-700 transition"
            >
              <Mail size={32} />
            </a>
            <a
              href="https://www.instagram.com/prasetyoedi451"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-700 transition"
            >
              <Instagram size={32} />
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
