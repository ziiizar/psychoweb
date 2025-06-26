'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar } from 'lucide-react';

export default function ContactoPage() {
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleWhatsAppRedirect = () => {
    setIsRedirecting(true);
    // Número de WhatsApp (reemplaza con tu número real)
    const phoneNumber = '34968123456'; // Formato: código país + número sin espacios
    const message = encodeURIComponent('Hola Alierty, me gustaría obtener más información sobre los servicios de psicología y agendar una consulta.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsRedirecting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Contacto Directo
          </h1>
          <p className="text-xl text-emerald-100 mb-8">
            Ponte en contacto conmigo para resolver cualquier duda o agendar tu consulta. 
            Te responderé lo antes posible para ayudarte en tu proceso de bienestar.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 inline-block">
            <p className="text-lg font-semibold mb-2">Primera consulta gratuita de 20 minutos</p>
            <p className="text-emerald-100">Para conocernos y resolver tus dudas sin compromiso</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Información de Contacto
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Estoy aquí para ayudarte. Elige la forma de contacto que más te convenga 
                  para comenzar tu proceso de bienestar mental.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mr-4">
                        <Phone className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Teléfono</h3>
                        <p className="text-gray-600">+34 968 123 456</p>
                        <p className="text-sm text-gray-500">Lun-Vie: 9:00-20:00</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                        <Mail className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Email</h3>
                        <p className="text-gray-600">contacto@alietypsicologa.es</p>
                        <p className="text-sm text-gray-500">Respuesta en 24h</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                        <MapPin className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Consulta Presencial</h3>
                        <p className="text-gray-600">Centro de Murcia</p>
                        <p className="text-gray-600">30001 Murcia, España</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                        <Clock className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Horarios de Atención</h3>
                        <div className="text-gray-600 space-y-1">
                          <p>Lunes a Viernes: 9:00 - 20:00</p>
                          <p>Sábados: 10:00 - 14:00</p>
                          <p>Domingos: Cerrado</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* WhatsApp Contact */}
            <div className="space-y-8">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-emerald-50">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">
                    Contacto por WhatsApp
                  </CardTitle>
                  <CardDescription className="text-lg">
                    La forma más rápida de contactar conmigo
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-center text-green-600">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      <span className="font-semibold">Disponible ahora</span>
                    </div>
                    
                    <p className="text-gray-600">
                      Te responderé personalmente a través de WhatsApp para resolver tus dudas 
                      sobre los tratamientos o agendar tu consulta de forma rápida y directa.
                    </p>
                    
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>✓ Respuesta inmediata en horario de atención</li>
                      <li>✓ Resolución de dudas sobre tratamientos</li>
                      <li>✓ Agendamiento directo de citas</li>
                      <li>✓ Primera consulta gratuita de 20 minutos</li>
                    </ul>
                  </div>
                  
                  <Button
                    onClick={handleWhatsAppRedirect}
                    disabled={isRedirecting}
                    size="lg"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-4"
                  >
                    {isRedirecting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Abriendo WhatsApp...
                      </>
                    ) : (
                      <>
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Contactar por WhatsApp
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">Acciones Rápidas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                    <a href="/agendar">
                      <Calendar className="w-5 h-5 mr-2" />
                      Reservar Cita Online
                    </a>
                  </Button>
                  
                  <Button asChild variant="outline" className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50" size="lg">
                    <a href="/servicios">
                      Ver Servicios Disponibles
                    </a>
                  </Button>
                  
                  <Button asChild variant="outline" className="w-full" size="lg">
                    <a href="/planes">
                      Consultar Planes y Precios
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Professional Image */}
              <Card className="border-0 shadow-lg overflow-hidden">
                <div className="relative">
                  <img
                    src="/psicologos-murcia-1-1024x576.jpg"
                    alt="Alierty Psicóloga - Consulta profesional en Murcia"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">Consulta profesional</p>
                    <p className="text-sm">Presencial y online</p>
                  </div>
                </div>
              </Card>

              {/* Emergency Contact */}
              <Card className="border-2 border-red-200 bg-red-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-red-800 mb-2">¿Necesitas ayuda urgente?</h3>
                  <p className="text-sm text-red-700 mb-4">
                    Si estás atravesando una crisis o emergencia psicológica, contacta inmediatamente:
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="text-red-700">
                      <strong>Teléfono de la Esperanza:</strong> 717 003 717
                    </p>
                    <p className="text-red-700">
                      <strong>Emergencias:</strong> 112
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}