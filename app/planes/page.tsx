import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Star, Clock, Users, Brain } from 'lucide-react';

export default function PlanesPage() {
  const plans = [
    {
      name: 'Consulta Individual',
      description: 'Perfecto para problemas específicos o consultas puntuales',
      price: '60',
      duration: '50 min',
      icon: Brain,
      popular: false,
      features: [
        'Evaluación psicológica inicial',
        'Sesión de 50 minutos',
        'Plan de tratamiento personalizado',
        'Técnicas basadas en evidencia',
        'Seguimiento por email',
        'Material de apoyo incluido'
      ],
      ideal: ['Primera consulta', 'Problemas específicos', 'Evaluación inicial', 'Consulta puntual']
    },
    {
      name: 'Terapia Mensual',
      description: 'Plan ideal para tratamiento continuo y seguimiento regular',
      price: '200',
      originalPrice: '240',
      duration: '4 sesiones',
      icon: Clock,
      popular: true,
      features: [
        '4 sesiones de 50 minutos',
        'Ahorro de 40€ al mes',
        'Prioridad en horarios',
        'Seguimiento continuo',
        'Contacto entre sesiones',
        'Técnicas personalizadas',
        'Material de apoyo incluido',
        'Flexibilidad de horarios'
      ],
      ideal: ['Tratamiento continuo', 'Ansiedad y depresión', 'Desarrollo personal', 'Seguimiento regular']
    },
    {
      name: 'Terapia de Pareja',
      description: 'Sesiones especializadas para fortalecer la relación',
      price: '80',
      duration: '60 min',
      icon: Users,
      popular: false,
      features: [
        'Sesión de 60 minutos',
        'Enfoque sistémico',
        'Técnicas de comunicación',
        'Ejercicios para casa',
        'Seguimiento del progreso',
        'Material especializado'
      ],
      ideal: ['Crisis de pareja', 'Comunicación', 'Conflictos', 'Fortalecimiento del vínculo']
    }
  ];

  const additionalServices = [
    {
      name: 'Consulta Online',
      description: 'Todas las sesiones disponibles por videollamada',
      price: 'Mismo precio',
      features: ['Comodidad desde casa', 'Ahorro de tiempo', 'Misma calidad profesional']
    },
    {
      name: 'Consulta de Urgencia',
      description: 'Sesión dentro de 24-48 horas',
      price: '+20€',
      features: ['Disponibilidad inmediata', 'Situaciones de crisis', 'Atención prioritaria']
    },
    {
      name: 'Informes Psicológicos',
      description: 'Informes profesionales para instituciones',
      price: 'Desde 100€',
      features: ['Informes detallados', 'Base científica', 'Validez oficial']
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-emerald-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Planes y Precios Transparentes
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Elige el plan que mejor se adapte a tus necesidades. Todos incluyen atención profesional 
            y seguimiento personalizado.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 inline-block">
            <p className="text-lg font-semibold mb-2">Primera consulta gratuita de 15 minutos</p>
            <p className="text-blue-100">Para conocernos y resolver tus dudas sin compromiso</p>
          </div>
        </div>
      </section>

      {/* Main Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Planes Principales
            </h2>
            <p className="text-xl text-gray-600">
              Todos los precios incluyen IVA. Sin permanencia ni costes ocultos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative border-0 shadow-xl hover:shadow-2xl transition-all duration-300 ${
                  plan.popular 
                    ? 'ring-2 ring-blue-500 bg-gradient-to-br from-blue-50 to-emerald-50 transform scale-105' 
                    : 'bg-white hover:scale-105'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Más Popular
                    </div>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  
                  <div className="pt-6">
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}€</span>
                      {plan.originalPrice && (
                        <span className="text-lg text-gray-500 line-through ml-2">{plan.originalPrice}€</span>
                      )}
                    </div>
                    <p className="text-gray-600">{plan.duration}</p>
                    {plan.originalPrice && (
                      <p className="text-emerald-600 font-semibold text-sm mt-1">
                        Ahorro de {parseInt(plan.originalPrice) - parseInt(plan.price)}€
                      </p>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Incluye:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Ideal para:</h4>
                    <div className="flex flex-wrap gap-2">
                      {plan.ideal.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full border border-blue-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button 
                    asChild 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700' 
                        : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                    size="lg"
                  >
                    <Link href="/agendar">Seleccionar Plan</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Servicios Adicionales
            </h2>
            <p className="text-xl text-gray-600">
              Opciones complementarias para adaptarnos a tus necesidades específicas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{service.name}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                  <div className="text-2xl font-bold text-blue-600 pt-2">{service.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods & Guarantees */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-emerald-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Métodos de Pago</h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">💳</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Tarjeta de Crédito/Débito</h4>
                    <p className="text-gray-600 text-sm">Pago seguro online con confirmación inmediata</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-emerald-600 font-bold">🏦</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Transferencia Bancaria</h4>
                    <p className="text-gray-600 text-sm">Para pagos mensuales y tratamientos largos</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-bold">💰</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Efectivo</h4>
                    <p className="text-gray-600 text-sm">En consultas presenciales</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Garantías</h3>
              <div className="space-y-4">
                <div className="flex items-start p-4 bg-white rounded-xl shadow-sm">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Primera consulta gratuita</h4>
                    <p className="text-gray-600 text-sm">15 minutos para conocernos sin compromiso</p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 bg-white rounded-xl shadow-sm">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Sin permanencia</h4>
                    <p className="text-gray-600 text-sm">Puedes cancelar en cualquier momento</p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 bg-white rounded-xl shadow-sm">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Flexibilidad total</h4>
                    <p className="text-gray-600 text-sm">Cambios de horario hasta 24h antes</p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 bg-white rounded-xl shadow-sm">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Confidencialidad total</h4>
                    <p className="text-gray-600 text-sm">Cumplimiento estricto del secreto profesional</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            ¿Tienes dudas sobre qué plan elegir?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Agenda tu consulta gratuita de 15 minutos y te ayudo a encontrar 
            el plan perfecto para tus necesidades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/contacto">Consulta Gratuita</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/agendar">Agendar Cita</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}