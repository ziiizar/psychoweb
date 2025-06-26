import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold">Alierty Psicóloga</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Psicóloga especializada en terapia cognitivo-conductual con más de 15 años de experiencia 
              ayudando a personas en Murcia a alcanzar su bienestar mental.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Servicios</h3>
            <ul className="space-y-3">
              <li><Link href="/servicios" className="text-gray-400 hover:text-white transition-colors">Terapia Cognitivo-Conductual</Link></li>
              <li><Link href="/servicios" className="text-gray-400 hover:text-white transition-colors">Terapia Individual</Link></li>
              <li><Link href="/servicios" className="text-gray-400 hover:text-white transition-colors">Terapia de Pareja</Link></li>
              <li><Link href="/servicios" className="text-gray-400 hover:text-white transition-colors">Apoyo Emocional</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Enlaces</h3>
            <ul className="space-y-3">
              <li><Link href="/planes" className="text-gray-400 hover:text-white transition-colors">Planes y Precios</Link></li>
              <li><Link href="/noticias" className="text-gray-400 hover:text-white transition-colors">Blog y Noticias</Link></li>
              <li><Link href="/agendar" className="text-gray-400 hover:text-white transition-colors">Reservar Cita</Link></li>
              <li><Link href="/contacto" className="text-gray-400 hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-gray-400">+34 968 123 456</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-gray-400">contacto@alietypsicologa.es</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-gray-400">Murcia, España</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-gray-400">Lun-Vie: 9:00-20:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Alierty Psicóloga. Todos los derechos reservados.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Colegiada Nº MU-1234 - Colegio Oficial de Psicólogos de Murcia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}