import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Users, Brain, Heart } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Brain,
      title: 'Terapia Cognitivo-Conductual',
      description: 'Tratamiento especializado para modificar patrones de pensamiento y comportamiento negativos.',
      features: ['Ansiedad y ataques de pánico', 'Depresión y tristeza', 'Fobias específicas', 'Trastorno obsesivo-compulsivo'],
      duration: '50 min',
      price: 'Desde 60€'
    },
    {
      icon: User,
      title: 'Terapia Individual',
      description: 'Sesiones personalizadas para trabajar en tus objetivos específicos de bienestar mental.',
      features: ['Autoestima y confianza', 'Gestión del estrés', 'Desarrollo personal', 'Problemas de sueño'],
      duration: '50 min',
      price: 'Desde 60€'
    },
    {
      icon: Users,
      title: 'Terapia de Pareja',
      description: 'Fortalece tu relación con herramientas de comunicación y resolución de conflictos.',
      features: ['Comunicación efectiva', 'Resolución de conflictos', 'Crisis de pareja', 'Intimidad emocional'],
      duration: '60 min',
      price: 'Desde 80€'
    },
    {
      icon: Heart,
      title: 'Apoyo Emocional',
      description: 'Acompañamiento especializado en momentos difíciles con estrategias de afrontamiento.',
      features: ['Duelo y pérdidas', 'Crisis vitales', 'Adaptación al cambio', 'Trauma emocional'],
      duration: '50 min',
      price: 'Desde 55€'
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Servicios Psicológicos Especializados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrezco tratamientos psicológicos especializados adaptados a tus necesidades específicas, 
            tanto en consulta presencial en Murcia como online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-0 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Duración:</span>
                    <span className="font-semibold text-gray-900">{service.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Precio:</span>
                    <span className="font-semibold text-blue-600">{service.price}</span>
                  </div>
                </div>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/agendar">Reservar Cita</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            <Link href="/servicios">Ver Todos los Servicios</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}