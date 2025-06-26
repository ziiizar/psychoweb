import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Users, Brain, Heart, Baby, Building, Clock, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function ServiciosPage() {
  const services = [
    {
      icon: Brain,
      title: 'Terapia Cognitivo-Conductual',
      description: 'Mi especialidad principal. Tratamiento basado en evidencia científica para modificar patrones de pensamiento y comportamiento.',
      duration: '50 minutos',
      price: 'Desde 60€',
      benefits: [
        'Identificación de pensamientos automáticos negativos',
        'Reestructuración cognitiva efectiva',
        'Técnicas de relajación y mindfulness',
        'Exposición gradual para fobias',
        'Prevención de recaídas a largo plazo'
      ],
      conditions: ['Ansiedad generalizada', 'Ataques de pánico', 'Depresión', 'TOC', 'Fobias específicas', 'Estrés postraumático']
    },
    {
      icon: User,
      title: 'Terapia Individual',
      description: 'Sesiones personalizadas adaptadas a tus necesidades específicas y objetivos de bienestar mental.',
      duration: '50 minutos',
      price: 'Desde 60€',
      benefits: [
        'Evaluación psicológica completa',
        'Plan de tratamiento personalizado',
        'Técnicas adaptadas a tu personalidad',
        'Seguimiento continuo del progreso',
        'Herramientas prácticas para el día a día'
      ],
      conditions: ['Baja autoestima', 'Problemas de confianza', 'Gestión del estrés', 'Desarrollo personal', 'Problemas de sueño']
    },
    {
      icon: Users,
      title: 'Terapia de Pareja',
      description: 'Fortalece tu relación con técnicas especializadas en comunicación y resolución de conflictos.',
      duration: '60 minutos',
      price: 'Desde 80€',
      benefits: [
        'Mejora de la comunicación efectiva',
        'Resolución constructiva de conflictos',
        'Fortalecimiento del vínculo emocional',
        'Técnicas de intimidad y conexión',
        'Construcción de proyecto de vida compartido'
      ],
      conditions: ['Crisis de pareja', 'Problemas de comunicación', 'Infidelidad', 'Dificultades de convivencia', 'Separación']
    },
    {
      icon: Heart,
      title: 'Apoyo Emocional',
      description: 'Acompañamiento especializado en momentos difíciles con estrategias de afrontamiento efectivas.',
      duration: '50 minutos',
      price: 'Desde 55€',
      benefits: [
        'Contención emocional profesional',
        'Estrategias de afrontamiento personalizadas',
        'Desarrollo de resiliencia emocional',
        'Apoyo en crisis vitales',
        'Orientación en toma de decisiones importantes'
      ],
      conditions: ['Duelo y pérdidas', 'Trauma emocional', 'Crisis vitales', 'Enfermedades', 'Cambios importantes']
    },
    {
      icon: Baby,
      title: 'Psicología Infantil y Adolescente',
      description: 'Apoyo especializado para niños y adolescentes con técnicas adaptadas a cada edad.',
      duration: '45 minutos',
      price: 'Desde 55€',
      benefits: [
        'Evaluación del desarrollo emocional',
        'Terapia lúdica especializada',
        'Orientación y apoyo a padres',
        'Técnicas adaptadas a cada edad',
        'Coordinación con centros educativos'
      ],
      conditions: ['TDAH', 'Ansiedad infantil', 'Problemas escolares', 'Trastornos de conducta', 'Dificultades de desarrollo']
    },
    {
      icon: Building,
      title: 'Psicología Laboral',
      description: 'Bienestar mental en el ámbito profesional y desarrollo de habilidades laborales.',
      duration: '50 minutos',
      price: 'Desde 70€',
      benefits: [
        'Gestión efectiva del estrés laboral',
        'Prevención y tratamiento del burnout',
        'Desarrollo de habilidades profesionales',
        'Mejora del liderazgo y comunicación',
        'Estrategias de conciliación vida-trabajo'
      ],
      conditions: ['Burnout', 'Estrés laboral', 'Mobbing', 'Cambio de carrera', 'Problemas de liderazgo']
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-emerald-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Servicios Psicológicos Especializados
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Ofrezco una amplia gama de servicios especializados para abordar diferentes necesidades 
              de salud mental con un enfoque profesional, personalizado y basado en evidencia científica.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 inline-block">
              <p className="text-lg font-semibold mb-2">Consulta presencial en Murcia y online</p>
              <p className="text-blue-100">Primera consulta gratuita de 20 minutos</p>
            </div>
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
                      <Link href="/agendar">Reservar Cita</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Image Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Un espacio seguro para tu bienestar
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Mi consulta está diseñada para ofrecerte un ambiente cálido, seguro y confidencial 
                donde puedas sentirte cómodo/a para explorar tus emociones y trabajar en tu crecimiento personal.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Tanto si prefieres sesiones presenciales en Murcia como online, mi compromiso es 
                brindarte la misma calidad de atención profesional y el acompañamiento que necesitas 
                para alcanzar tus objetivos de bienestar mental.
              </p>
              <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                <Link href="/contacto">Primera Consulta Gratuita</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="/Tratamientos-psicologicos-en-Murcia-1-1-1024x683.jpg"
                alt="Consulta psicológica profesional en Murcia"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
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
            a tus necesidades específicas y crear un plan terapéutico único para ti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contacto">Consulta Personalizada</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
              <Link href="/agendar">Reservar Primera Cita</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}