import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Calendar, MessageCircle, Award } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-emerald-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6">
              <Award className="w-6 h-6 text-blue-600 mr-2" />
              <span className="text-blue-600 font-semibold">Psicólogo Colegiado en España</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Tu bienestar mental es nuestra 
              <span className="text-blue-600"> prioridad</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ofrezco servicios de psicología profesional con más de 10 años de experiencia. 
              Agenda tu cita online de forma sencilla y comienza tu proceso de bienestar hoy mismo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                <Link href="/agendar">
                  <Calendar className="w-5 h-5 mr-2" />
                  Agendar Cita Online
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3">
                <Link href="/contacto">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Consulta Gratis
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-sm text-gray-600">Pacientes Atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">10+</div>
                <div className="text-sm text-gray-600">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                <div className="text-sm text-gray-600">Satisfacción</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-100 to-emerald-100 rounded-3xl p-8 transform rotate-3 hover:rotate-1 transition-transform duration-500">
              <img
                src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Consulta psicológica profesional"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white p-6 rounded-2xl shadow-xl">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-semibold">Disponible para citas online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}