import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, User, Tag, ArrowRight } from 'lucide-react';

export default function NoticiasPage() {
  const featuredArticle = {
    title: 'Cómo gestionar la ansiedad en el trabajo: Estrategias efectivas',
    excerpt: 'La ansiedad laboral afecta a millones de personas. Descubre técnicas profesionales para mantener tu bienestar mental en el entorno de trabajo.',
    image: 'https://images.pexels.com/photos/3760778/pexels-photo-3760778.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '15 Enero 2024',
    readTime: '8 min',
    category: 'Bienestar Laboral',
    slug: 'gestionar-ansiedad-trabajo'
  };

  const articles = [
    {
      title: 'Los beneficios de la terapia cognitivo-conductual',
      excerpt: 'Conoce cómo esta terapia basada en evidencia puede ayudarte a cambiar patrones de pensamiento negativos.',
      image: 'https://images.pexels.com/photos/5699431/pexels-photo-5699431.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '12 Enero 2024',
      readTime: '6 min',
      category: 'Terapias',
      slug: 'beneficios-terapia-cognitivo-conductual'
    },
    {
      title: 'Señales de que necesitas ayuda psicológica profesional',
      excerpt: 'Identifica cuándo es el momento adecuado para buscar apoyo profesional para tu salud mental.',
      image: 'https://images.pexels.com/photos/5728849/pexels-photo-5728849.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '8 Enero 2024',
      readTime: '5 min',
      category: 'Salud Mental',
      slug: 'senales-ayuda-psicologica'
    },
    {
      title: 'Fortaleciendo las relaciones de pareja en tiempos difíciles',
      excerpt: 'Estrategias para mantener una comunicación efectiva y fortalecer el vínculo durante momentos de crisis.',
      image: 'https://images.pexels.com/photos/5699479/pexels-photo-5699479.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '5 Enero 2024',
      readTime: '7 min',
      category: 'Relaciones',
      slug: 'fortalecer-relaciones-pareja'
    },
    {
      title: 'Técnicas de mindfulness para reducir el estrés diario',
      excerpt: 'Aprende ejercicios prácticos de atención plena que puedes implementar en tu rutina diaria.',
      image: 'https://images.pexels.com/photos/3820305/pexels-photo-3820305.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2 Enero 2024',
      readTime: '6 min',
      category: 'Mindfulness',
      slug: 'mindfulness-reducir-estres'
    },
    {
      title: 'Cómo mejorar la autoestima: Guía práctica',
      excerpt: 'Descubre técnicas efectivas para desarrollar una imagen positiva de ti mismo y aumentar tu confianza.',
      image: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '28 Diciembre 2023',
      readTime: '8 min',
      category: 'Desarrollo Personal',
      slug: 'mejorar-autoestima-guia'
    },
    {
      title: 'La importancia del sueño en la salud mental',
      excerpt: 'Explora la conexión entre la calidad del sueño y el bienestar emocional, y aprende a mejorar tus hábitos.',
      image: 'https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '25 Diciembre 2023',
      readTime: '5 min',
      category: 'Salud Mental',
      slug: 'importancia-sueno-salud-mental'
    }
  ];

  const categories = [
    { name: 'Todos', count: 12, active: true },
    { name: 'Salud Mental', count: 4 },
    { name: 'Terapias', count: 3 },
    { name: 'Relaciones', count: 2 },
    { name: 'Bienestar Laboral', count: 2 },
    { name: 'Desarrollo Personal', count: 1 }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-emerald-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Noticias y Artículos
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Contenido profesional sobre salud mental, bienestar y desarrollo personal. 
            Información actualizada basada en evidencia científica.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Article */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Artículo Destacado</h2>
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {featuredArticle.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <Clock className="w-4 h-4 mr-1" />
                    {featuredArticle.readTime}
                    <span className="mx-2">•</span>
                    {featuredArticle.date}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <Button asChild className="bg-blue-600 hover:bg-blue-700">
                    <Link href={`/noticias/${featuredArticle.slug}`}>
                      Leer Artículo Completo
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="border-0 shadow-lg mb-8">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">Categorías</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <button
                        key={index}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 flex justify-between items-center ${
                          category.active 
                            ? 'bg-blue-100 text-blue-600 font-semibold' 
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <span>{category.name}</span>
                        <span className="text-sm">{category.count}</span>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-50 to-blue-50">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">Newsletter</CardTitle>
                  <CardDescription>
                    Recibe artículos y consejos de salud mental directamente en tu email
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <input
                      type="email"
                      placeholder="Tu email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                      Suscribirse
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Articles Grid */}
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Últimos Artículos</h2>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Más recientes</option>
                  <option>Más populares</option>
                  <option>Por categoría</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {articles.map((article, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    <div className="relative">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime}
                        <span className="mx-2">•</span>
                        {article.date}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <Button asChild variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                        <Link href={`/noticias/${article.slug}`}>
                          Leer Más
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                  Cargar Más Artículos
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            ¿Necesitas ayuda profesional personalizada?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Los artículos son informativos, pero cada situación es única. 
            Agenda una consulta personalizada para obtener el apoyo que necesitas.
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