import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'María José',
      role: 'Paciente desde 2022',
      content: 'Alierty me ha ayudado enormemente a superar mi ansiedad. Su profesionalidad y cercanía humana han sido clave en mi recuperación. Recomiendo totalmente su consulta.',
      rating: 5
    },
    {
      name: 'Carlos M.',
      role: 'Terapia de pareja',
      content: 'Gracias a las sesiones con Alierty hemos fortalecido nuestra relación. Su enfoque práctico y las herramientas que nos dio han transformado nuestra comunicación.',
      rating: 5
    },
    {
      name: 'Ana L.',
      role: 'Tratamiento TCC',
      content: 'El tratamiento cognitivo-conductual con Alierty me cambió la vida. Aprendí a manejar mis pensamientos negativos y ahora me siento mucho más segura de mí misma.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Lo que dicen mis pacientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La satisfacción y bienestar de mis pacientes es mi mayor motivación. 
            Estas son algunas de sus experiencias.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8 inline-block">
            <p className="text-lg font-semibold text-gray-900 mb-2">
              ¿Quieres ser el próximo en compartir tu experiencia positiva?
            </p>
            <p className="text-gray-600">
              Agenda tu primera consulta gratuita y comienza tu proceso de bienestar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}