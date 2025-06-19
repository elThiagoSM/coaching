// app/page.tsx

"use client";

import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaClock,
  FaSmile,
  FaLaptop,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const faqs = [
    {
      question: "¿Qué pasa si no puedo asistir a una sesión?",
      answer:
        "Podés reprogramarla con al menos 24hs de anticipación. Queremos que aproveches al máximo tu proceso.",
    },
    {
      question: "¿Qué herramientas se usan en el coaching?",
      answer:
        "Utilizamos planificación estratégica, técnicas de productividad, acompañamiento emocional y rutinas accionables.",
    },
    {
      question: "¿Puedo cancelar en cualquier momento?",
      answer:
        "Sí, aunque te animamos a completar el proceso para ver resultados reales. La primera llamada no tiene compromiso.",
    },
    {
      question: "¿Qué necesito para empezar?",
      answer:
        "Solo ganas de cambiar. Todo lo demás lo construimos juntos: claridad, sistema y resultados.",
    },
  ];

  return (
    <>
      <title>Coaching de Productividad | Lográ más con menos estrés</title>
      <meta
        name="description"
        content="Coaching 1 a 1 de productividad: transformá tu rutina en 4 semanas con foco, claridad y resultados reales. Primera llamada gratis."
      />

      {/* Header */}
      <header className="sticky top-0 bg-white z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-bold text-blue-600">ProductivaMente</h1>
          <nav className="hidden md:flex space-x-6 text-sm text-gray-700">
            <a href="#inicio" className="hover:text-blue-600">
              Inicio
            </a>
            <a href="#programa" className="hover:text-blue-600">
              Programa
            </a>
            <a href="#testimonios" className="hover:text-blue-600">
              Testimonios
            </a>
            <a href="#faq" className="hover:text-blue-600">
              FAQ
            </a>
          </nav>
          <a
            href="#cta"
            className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition"
          >
            Reservá tu llamada
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Productividad sin estrés. <br /> Resultados sin excusas.
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Transformá tu día a día con un plan claro, hábitos concretos y
              foco total. Lográ tus metas en 4 semanas con coaching 1 a 1.
            </p>
            <a
              href="#cta"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Empezá hoy
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:w-1/2"
          >
            <Image
              src="https://source.unsplash.com/600x400/?productivity,coach"
              alt="Coaching de productividad"
              width={600}
              height={400}
              className="rounded-xl shadow-md w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Sobre el Programa */}
      <section id="programa" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Un proceso personalizado, diseñado para vos
          </h3>
          <p className="text-gray-600 mb-8">
            Durante 4 semanas trabajaremos juntos en sesiones 1 a 1, con
            estrategias concretas para transformar tu productividad.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              ["✅", "Plan personalizado basado en tus metas"],
              ["✅", "Coaching con seguimiento real y herramientas prácticas"],
              ["✅", "Resultados desde la primera semana"],
            ].map(([icon, text], i) => (
              <div key={i} className="flex items-start space-x-3">
                <FaCheckCircle className="text-blue-600 mt-1" />
                <p className="text-gray-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Qué pasa cuando tu día tiene dirección?
          </h3>
          <p className="text-gray-600 mb-10">
            Descubrí cómo cambia tu vida cuando tenés foco, energía y claridad.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              [<FaClock />, "Más tiempo libre"],
              [<FaSmile />, "Menos ansiedad"],
              [<FaLaptop />, "Mejor rendimiento"],
              [<FaCheckCircle />, "Motivación diaria"],
            ].map(([icon, label], i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="text-blue-600 text-4xl mb-2">{icon}</div>
                <p className="text-gray-700">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonios" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-10">
            Testimonios reales, resultados reales
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              [
                "https://i.pravatar.cc/100?img=12",
                "Camila, Córdoba",
                "No sabía cómo arrancar mi día. Ahora tengo un sistema que me impulsa.",
              ],
              [
                "https://i.pravatar.cc/100?img=32",
                "Martín, Rosario",
                "En 2 semanas cambié mi rutina por completo. Más foco, menos drama.",
              ],
              [
                "https://i.pravatar.cc/100?img=45",
                "Lu, Buenos Aires",
                "Sentía que me estancaba. Ahora cada día me siento más cerca de mis objetivos.",
              ],
            ].map(([img, name, text], i) => (
              <div
                key={i}
                className="bg-gray-50 p-6 rounded-lg shadow-sm text-left"
              >
                <div className="flex items-center mb-4">
                  <Image
                    src={img}
                    alt={name}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <p className="font-semibold text-gray-800">{name}</p>
                </div>
                <p className="text-gray-600 italic">“{text}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="bg-gray-100 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Agenda tu llamada gratuita y empezá a construir resultados
            duraderos.
          </h3>
          <a
            href="#faq"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-700 transition"
          >
            Reservá tu lugar ahora
          </a>
          <p className="text-sm text-gray-500 mt-3">
            Cupos limitados · Sin compromiso · 100% personalizado
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Preguntas frecuentes
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                >
                  <span className="font-medium text-gray-800">
                    {faq.question}
                  </span>
                  <span className="text-blue-600">
                    {faqOpen === index ? "−" : "+"}
                  </span>
                </button>
                {faqOpen === index && (
                  <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <h4 className="font-semibold text-lg mb-2">ProductivaMente</h4>
            <p>Transformá tu rutina. Lográ tus metas.</p>
          </div>
          <div className="space-y-2">
            <Link href="#inicio" className="hover:underline">
              Inicio
            </Link>
            <br />
            <Link href="#programa" className="hover:underline">
              Programa
            </Link>
            <br />
            <Link href="#testimonios" className="hover:underline">
              Testimonios
            </Link>
            <br />
            <Link href="#faq" className="hover:underline">
              FAQ
            </Link>
          </div>
          <div className="space-y-2">
            <div className="flex gap-4 text-xl">
              <a href="#" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Facebook">
                <FaFacebook />
              </a>
            </div>
            <Link href="#" className="text-xs hover:underline">
              Política de privacidad
            </Link>
            <br />
            <Link href="#" className="text-xs hover:underline">
              Contacto
            </Link>
          </div>
        </div>
        <p className="text-center text-xs text-gray-400 mt-8">
          © 2025 Coaching Productividad. Todos los derechos reservados.
        </p>
      </footer>
    </>
  );
}
