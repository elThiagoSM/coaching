"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiCheck,
  FiArrowRight,
  FiCalendar,
  FiUser,
  FiAward,
  FiClock,
  FiChevronDown,
} from "react-icons/fi";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
      <head>
        <title>
          Coaching de Productividad | Transformá tu Rutina en 4 Semanas
        </title>
        <meta
          name="description"
          content="Programa de coaching personalizado para aumentar tu productividad, enfoque y motivación. Deja atrás el estancamiento y logra tus metas con un método probado."
        />
      </head>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-purple-600"
          >
            Productiv<span className="text-purple-400">Mind</span>
          </motion.div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#inicio"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Inicio
            </a>
            <a
              href="#programa"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Programa
            </a>
            <a
              href="#testimonios"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Testimonios
            </a>
            <a
              href="#faq"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              FAQ
            </a>
          </nav>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-medium transition-colors shadow-lg"
          >
            Reservá tu llamada
          </motion.button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section
          id="inicio"
          className="py-20 md:py-32 bg-gradient-to-b from-white to-purple-50"
        >
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6"
              >
                Productividad sin estrés. <br />
                <span className="text-purple-600">Resultados sin excusas.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-gray-600 mb-8 max-w-lg"
              >
                Transformá tu día a día con un plan claro, hábitos concretos y
                foco total. Programa de coaching 1 a 1 para pasar del
                estancamiento a la acción consistente.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-medium text-lg transition-colors shadow-lg flex items-center justify-center"
                >
                  Empezá hoy <FiArrowRight className="ml-2" />
                </motion.button>
                <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-full font-medium text-lg transition-colors flex items-center justify-center">
                  Conocé más
                </button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-6 text-gray-500 text-sm flex items-center"
              >
                <FiCheck className="mr-2 text-green-500" /> Primera llamada 100%
                gratuita, sin compromiso
              </motion.p>
            </div>

            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                  alt="Persona organizando su día con productividad"
                  className="rounded-2xl shadow-xl w-full max-w-lg mx-auto"
                />
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 hidden md:block"
                >
                  <div className="flex items-center">
                    <div className="bg-purple-100 p-3 rounded-full mr-3">
                      <FiUser className="text-purple-600 text-xl" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">Coaching 1 a 1</p>
                      <p className="text-sm text-gray-600">
                        Sesiones personalizadas
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Programa Section */}
        <section id="programa" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Transformación en{" "}
                <span className="text-purple-600">4 semanas</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Un programa intensivo y personalizado para construir hábitos
                productivos que duren.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-purple-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <FiCalendar className="text-purple-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Sesiones semanales
                </h3>
                <p className="text-gray-600 mb-4">
                  4 sesiones de 60 minutos cada una, totalmente personalizadas
                  según tus objetivos y desafíos.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FiCheck className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Definición de metas claras
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Planificación estratégica
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Seguimiento de progreso
                    </span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-purple-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <FiAward className="text-purple-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Metodología probada
                </h3>
                <p className="text-gray-600 mb-4">
                  Técnicas basadas en neurociencia y psicología del
                  comportamiento, usadas por líderes y emprendedores.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FiCheck className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Sistema de enfoque profundo
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Gestión de energía (no solo tiempo)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Herramientas digitales efectivas
                    </span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-purple-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <FiClock className="text-purple-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Soporte continuo
                </h3>
                <p className="text-gray-600 mb-4">
                  No estarás solo/a. Soporte entre sesiones para mantener el
                  momentum y resolver desafíos en tiempo real.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FiCheck className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Check-ins diarios opcionales
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Acceso prioritario por mensaje
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Recursos exclusivos</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-purple-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                ¿Qué pasa cuando tu día tiene{" "}
                <span className="text-purple-600">dirección</span>?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Los resultados van mucho más allá de tachar items de una lista.
                Es sobre construir una vida con propósito.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "⏱️",
                  title: "Más tiempo libre",
                  description:
                    "Deja de perder horas en distracciones y recupera tu tiempo para lo que realmente importa.",
                },
                {
                  icon: "🧠",
                  title: "Menos ansiedad",
                  description:
                    "Claridad mental al saber exactamente qué hacer y cuándo hacerlo.",
                },
                {
                  icon: "🚀",
                  title: "Motivación diaria",
                  description:
                    "Despierta con energía al ver progreso tangible hacia tus metas.",
                },
                {
                  icon: "🏆",
                  title: "Mejor rendimiento",
                  description:
                    "Sobresalí en tu trabajo o estudios con un sistema probado de productividad.",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonios" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Transformaciones <span className="text-purple-600">reales</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                No lo digo yo, lo dicen quienes ya pasaron por el programa.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "María G.",
                  location: "Buenos Aires",
                  role: "Diseñadora UX",
                  content:
                    "No sabía cómo arrancar mi día. Ahora tengo un sistema que me impulsa desde la mañana. En 4 semanas logré más que en los últimos 6 meses.",
                  image: "https://i.pravatar.cc/150?img=32",
                },
                {
                  name: "Juan P.",
                  location: "Córdoba",
                  role: "Emprendedor",
                  content:
                    "De procrastinar todo el día a tener foco de 4 horas diarias. El cambio fue radical y ahora mi negocio crece consistentemente.",
                  image: "https://i.pravatar.cc/150?img=12",
                },
                {
                  name: "Lucía M.",
                  location: "Mendoza",
                  role: "Estudiante de Medicina",
                  content:
                    "Pasé de sentirme abrumada con la facultad a organizar mi tiempo para estudiar, descansar y tener vida social. ¡Increíble!",
                  image: "https://i.pravatar.cc/150?img=45",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                >
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={`${testimonial.name} - ${testimonial.role}`}
                      className="w-14 h-14 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-gray-800">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {testimonial.role}, {testimonial.location}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="mt-4 flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-purple-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Listo para transformar tu{" "}
                <span className="text-purple-200">productividad</span>?
              </h2>
              <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-8">
                Agenda tu llamada gratuita y empezá a construir resultados
                duraderos desde hoy mismo.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 hover:bg-purple-50 px-10 py-4 rounded-full font-bold text-lg transition-colors shadow-lg"
              >
                Quiero mi llamada gratuita
              </motion.button>
              <p className="mt-6 text-purple-200 text-sm">
                Solo 8 cupos disponibles este mes. Últimas 3 plazas.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Preguntas <span className="text-purple-600">frecuentes</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Todo lo que necesitás saber antes de comenzar.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {[
                {
                  question: "¿Cómo sé si este programa es para mí?",
                  answer:
                    "Si sentís que no avanzás como querés, procrastinás mucho o te cuesta organizar tu tiempo, este programa te ayudará. Especialmente efectivo para profesionales, emprendedores y estudiantes que buscan un cambio real.",
                },
                {
                  question: "¿Qué pasa si no puedo asistir a una sesión?",
                  answer:
                    "Las sesiones pueden reagendarse con 24 horas de anticipación. En casos de emergencia, grabamos la sesión para que no pierdas el contenido (sujeto a aprobación).",
                },
                {
                  question: "¿Qué herramientas se usan en el coaching?",
                  answer:
                    "Trabajamos con metodologías como Time Blocking, Eisenhower Matrix, Deep Work y herramientas digitales como Notion, Google Calendar y Focus apps. Todo se adapta a tus preferencias.",
                },
                {
                  question: "¿Puedo cancelar en cualquier momento?",
                  answer:
                    "Sí, puedes cancelar en cualquier momento. Sin embargo, el programa está diseñado para 4 semanas consecutivas para obtener los mejores resultados. No hacemos reembolsos pero puedes pausar y retomar más tarde.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="mb-4 border-b border-gray-200 pb-4"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex justify-between items-center w-full text-left font-medium text-gray-800 hover:text-purple-600 focus:outline-none"
                  >
                    <span className="text-lg">{item.question}</span>
                    <FiChevronDown
                      className={`ml-2 transition-transform duration-300 ${
                        activeFaq === index
                          ? "transform rotate-180 text-purple-600"
                          : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`mt-2 text-gray-600 overflow-hidden transition-all duration-300 ${
                      activeFaq === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <p className="pb-2">{item.answer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Productiv<span className="text-purple-400">Mind</span>
              </h3>
              <p className="text-gray-400 mb-4">
                Transformando días ocupados en vidas productivas desde 2020.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaTwitter className="text-xl" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaInstagram className="text-xl" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Programa</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Metodología
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Beneficios
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Testimonios
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Precios
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Podcast
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Guías gratuitas
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Herramientas
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Términos y condiciones
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Política de privacidad
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contacto
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Preguntas frecuentes
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 ProductivMind Coaching. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Política de cookies
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Aviso legal
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
