import { Users, Heart, Brain, Clock } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Brain,
      title: 'Enfoque Científico',
      description: 'Utilizo técnicas basadas en evidencia científica para garantizar los mejores resultados en tu proceso terapéutico.'
    },
    {
      icon: Heart,
      title: 'Atención Personalizada',
      description: 'Cada persona es única. Adapto mi metodología a tus necesidades específicas y objetivos personales.'
    },
    {
      icon: Users,
      title: 'Experiencia Comprobada',
      description: 'Más de 10 años ayudando a personas a superar sus desafíos y alcanzar su bienestar mental.'
    },
    {
      icon: Clock,
      title: 'Flexibilidad Horaria',
      description: 'Horarios adaptados a tu rutina, incluyendo sesiones online para mayor comodidad.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir nuestros servicios?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mi compromiso es brindarte el mejor acompañamiento psicológico con un enfoque profesional, 
            humano y adaptado a tus necesidades.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Sobre mi experiencia profesional
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Soy psicólogo colegiado con más de 10 años de experiencia en el campo de la salud mental. 
                Me especializo en terapia cognitivo-conductual, terapia de pareja y tratamiento de ansiedad y depresión.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Mi objetivo es crear un espacio seguro donde puedas explorar tus emociones, desarrollar herramientas 
                para afrontar desafíos y alcanzar un mayor bienestar en tu vida personal y profesional.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5728849/pexels-photo-5728849.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Psicólogo profesional"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}