'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, User, CreditCard, CheckCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AgendarPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    reason: ''
  });

  const services = [
    { id: 'individual', name: 'Terapia Individual', duration: '50 min', price: 60 },
    { id: 'pareja', name: 'Terapia de Pareja', duration: '60 min', price: 80 },
    { id: 'cognitiva', name: 'Terapia Cognitiva', duration: '50 min', price: 65 },
    { id: 'apoyo', name: 'Apoyo Emocional', duration: '50 min', price: 55 }
  ];

  const availableDates = [
    { date: '2024-01-22', day: 'Lun', dayNum: '22' },
    { date: '2024-01-23', day: 'Mar', dayNum: '23' },
    { date: '2024-01-24', day: 'Mié', dayNum: '24' },
    { date: '2024-01-25', day: 'Jue', dayNum: '25' },
    { date: '2024-01-26', day: 'Vie', dayNum: '26' }
  ];

  const availableTimes = [
    '09:00', '10:00', '11:00', '12:00', '16:00', '17:00', '18:00', '19:00'
  ];

  const paymentMethods = [
    { id: 'card', name: 'Tarjeta de Crédito/Débito', description: 'Pago seguro online con Stripe' },
    { id: 'transfer', name: 'Transferencia Bancaria', description: 'Pago mediante transferencia SEPA' }
  ];

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const getSelectedService = () => services.find(s => s.id === selectedService);

  const handleFormChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleConfirmAndPay = () => {
    const selectedServiceData = getSelectedService();
    if (!selectedServiceData) return;

    // Crear URL con parámetros para la página de pago
    const paymentParams = new URLSearchParams({
      service: selectedServiceData.name,
      amount: selectedServiceData.price.toString(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      date: selectedDate,
      time: selectedTime,
      paymentMethod: selectedPayment
    });

    router.push(`/pago?${paymentParams.toString()}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Agendar Cita
          </h1>
          <p className="text-xl text-gray-600">
            Reserva tu sesión de forma rápida y segura
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            {[1, 2, 3, 4].map((stepNum) => (
              <div key={stepNum} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    step >= stepNum
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-300 text-gray-600'
                  }`}
                >
                  {step > stepNum ? <CheckCircle className="w-5 h-5" /> : stepNum}
                </div>
                {stepNum < 4 && (
                  <div
                    className={`w-12 h-1 mx-2 ${
                      step > stepNum ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <Card className="border-0 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-gray-900">
              {step === 1 && 'Selecciona el Servicio'}
              {step === 2 && 'Elige Fecha y Hora'}
              {step === 3 && 'Información Personal'}
              {step === 4 && 'Confirmación y Pago'}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            {/* Step 1: Service Selection */}
            {step === 1 && (
              <div className="space-y-4">
                {services.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`p-6 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                      selectedService === service.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                        <p className="text-gray-600">{service.duration}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-blue-600">{service.price}€</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Step 2: Date and Time Selection */}
            {step === 2 && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Selecciona una fecha:</h3>
                  <div className="grid grid-cols-5 gap-4">
                    {availableDates.map((date) => (
                      <div
                        key={date.date}
                        onClick={() => setSelectedDate(date.date)}
                        className={`p-4 border-2 rounded-xl cursor-pointer text-center transition-all duration-200 ${
                          selectedDate === date.date
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <p className="text-sm text-gray-600">{date.day}</p>
                        <p className="text-lg font-semibold text-gray-900">{date.dayNum}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {selectedDate && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Horarios disponibles:</h3>
                    <div className="grid grid-cols-4 gap-4">
                      {availableTimes.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`p-3 border-2 rounded-lg transition-all duration-200 ${
                            selectedTime === time
                              ? 'border-blue-500 bg-blue-50 text-blue-600'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 3: Personal Information */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleFormChange('name', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Apellidos *
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleFormChange('lastName', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tus apellidos"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleFormChange('email', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleFormChange('phone', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+34 600 123 456"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Motivo de consulta (opcional)
                  </label>
                  <textarea
                    rows={4}
                    value={formData.reason}
                    onChange={(e) => handleFormChange('reason', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Cuéntame brevemente el motivo de tu consulta..."
                  />
                </div>
              </div>
            )}

            {/* Step 4: Confirmation and Payment */}
            {step === 4 && (
              <div className="space-y-8">
                {/* Booking Summary */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Resumen de tu cita:</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Servicio:</span>
                      <span className="font-semibold">{getSelectedService()?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Fecha:</span>
                      <span className="font-semibold">{selectedDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Hora:</span>
                      <span className="font-semibold">{selectedTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duración:</span>
                      <span className="font-semibold">{getSelectedService()?.duration}</span>
                    </div>
                    <div className="border-t pt-2 mt-4">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total:</span>
                        <span className="text-blue-600">{getSelectedService()?.price}€</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Method Selection */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Método de pago:</h3>
                  <div className="space-y-4">
                    {paymentMethods.map((method) => (
                      <div
                        key={method.id}
                        onClick={() => setSelectedPayment(method.id)}
                        className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                          selectedPayment === method.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center">
                          <CreditCard className="w-5 h-5 mr-3 text-gray-600" />
                          <div>
                            <h4 className="font-semibold text-gray-900">{method.name}</h4>
                            <p className="text-sm text-gray-600">{method.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-8 border-t">
              <Button
                onClick={prevStep}
                variant="outline"
                disabled={step === 1}
                className="px-8"
              >
                Anterior
              </Button>
              <Button
                onClick={step === 4 ? handleConfirmAndPay : nextStep}
                disabled={
                  (step === 1 && !selectedService) ||
                  (step === 2 && (!selectedDate || !selectedTime)) ||
                  (step === 3 && (!formData.name || !formData.email || !formData.phone)) ||
                  (step === 4 && !selectedPayment)
                }
                className="px-8 bg-blue-600 hover:bg-blue-700"
              >
                {step === 4 ? 'Proceder al Pago' : 'Siguiente'}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Help Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            ¿Necesitas ayuda con tu reserva?
          </p>
          <Button variant="outline" asChild>
            <a href="/contacto">Contactar por WhatsApp</a>
          </Button>
        </div>
      </div>
    </div>
  );
}