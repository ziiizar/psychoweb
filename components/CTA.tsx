import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Calendar, MessageCircle } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-emerald-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          ¿Listo para comenzar tu proceso de bienestar?
        </h2>
        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
          Da el primer paso hacia una vida más plena. Agenda tu primera consulta 
          o contacta conmigo para resolver cualquier duda.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
            <Link href="/agendar">
              <Calendar className="w-5 h-5 mr-2" />
              Agendar Primera Cita
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
            <Link href="/contacto">
              <MessageCircle className="w-5 h-5 mr-2" />
              Consulta Gratuita
            </Link>
          </Button>
        </div>
        
        <p className="text-blue-100 mt-8 text-sm">
          Primera consulta gratuita de 15 minutos • Citas disponibles online y presencial
        </p>
      </div>
    </section>
  );
}