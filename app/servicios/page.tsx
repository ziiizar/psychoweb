import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Users, Brain, Heart, Baby, Building, Clock, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function ServiciosPage() {
  const services = [
    {
      icon: User,
      title: 'Terapia Individual',
      description: 'Sesiones personalizadas para abordar tus necesidades específicas',
      duration: '50 minutos',
      price: 'Desde 60€',
      benefits: [
        'Evaluación psicológica completa',
        'Plan de tratamiento personalizado',
        'Técnicas basadas en evidencia',
        'Seguimiento continuo del progreso',
        'Herramientas para el día a día'
      ],
      conditions: ['Ansiedad', 'Depresión', 'Estrés', 'Fobias', 'Autoestima', 'Duelo']
    },
    {
      icon: Users,
      title: 'Terapia de Pareja',
      description: 'Fortalece tu relación con comunicación efectiva',
      duration: '60 minutos',
      price: 'Desde 80€',
      benefits: [
        'Mejora de la comunicación',
        'Resolución de conflictos',
        'Fortalecimiento del vínculo',
        'Técnicas de intimidad',
        'Proyecto de vida compartido'
      ],
      conditions: ['Crisis de pareja', 'Problemas de comunicación', 'Infidelidad', 'Separación', 'Convivencia']
    },
    {
      icon: Brain,
      title: 'Terapia Cognitivo-Conductual',
      description: 'Modifica patrones de pensamiento y comportamiento',
      duration: '50 minutos',
      price: 'Desde 65€',
      benefits: [
        'Identificación de pensamientos automáticos',
        'Reestructuración cognitiva',
        'Técnicas de relajación',
        'Exposición gradual',
        'Prevención de recaídas'
      ],
      conditions: ['TOC', 'Pánico', 'Ansiedad social', 'Adicciones', 'Trastornos del ánimo']
    },
    {
      icon: Heart,
      title: 'Apoyo Emocional',
      description: 'Acompañamiento en momentos difíciles de tu vida',
      duration: '50 minutos',
      price: 'Desde 55€',
      benefits: [
        'Contención emocional',
        'Estrategias de afrontamiento',
        'Desarrollo de resiliencia',
        'Apoyo en crisis',
        'Orientación en decisiones'
      ],
      conditions: ['Duelo', 'Trauma', 'Crisis vitales', 'Enfermedades', 'Cambios importantes']
    },
    {
      icon: Baby,
      title: 'Psicología Infantil',
      description: 'Apoyo especializado para niños y adolescentes',
      duration: '45 minutos',
      price: 'Desde 55€',
      benefits: [
        'Evaluación del desarrollo',
        'Terapia lúdica',
        'Orientación a padres',
        'Técnicas adaptadas a la edad',
        'Seguimiento escolar'
      ],
      conditions: ['TDAH', 'Ansiedad infantil', 'Problemas escolares', 'Conducta', 'Desarrollo']
    },
    {
      icon: Building,
      title: 'Psicología Laboral',
      description: 'Bienestar mental en el ámbito profesional',
      duration: '50 minutos',
      price: 'Desde 70€',
      benefits: [
        'Gestión del estrés laboral',
        'Burnout y prevención',
        'Desarrollo de habilidades',
        'Liderazgo y comunicación',
        'Conciliación vida-trabajo'
      ],
      conditions: ['Burnout', 'Estrés laboral', 'Mobbing', 'Cambio de carrera', 'Liderazgo']
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-emerald-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Servicios Psicológicos Profesionales
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Ofrezco una amplia gama de servicios especializados para abordar diferentes necesidades 
              de salud mental con un enfoque profesional y personalizado.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/agendar">
                <Clock className="w-5 h-5 mr-2" />
                Agendar Consulta
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-xl flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                      <div className="flex items-center text-sm text-gray-600 mt-1">
                        <Clock className="w-4 h-4 mr-1" />
                        {service.duration}
                        <span className="mx-2">•</span>
                        <span className="font-semibold text-blue-600">{service.price}</span>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Beneficios del tratamiento:</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Especializado en:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.conditions.map((condition, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full border border-blue-200"
                          >
                            {condition}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                      <Link href="/agendar">Agendar Sesión</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ¿No encuentras el servicio que necesitas?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contacta conmigo para una consulta personalizada. Podemos adaptar el tratamiento 
            a tus necesidades específicas.
          </p>
          <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
            <Link href="/contacto">Consulta Personalizada</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}