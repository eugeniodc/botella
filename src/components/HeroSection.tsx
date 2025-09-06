import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/mountain-hiker-drinking-water-at-summit-sunrise-pa.jpg')` }}
      />
      <div className="absolute inset-0 bg-primary/20" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <Badge className="mb-6 bg-accent text-accent-foreground px-4 py-2 text-sm font-medium">
          🏔️ Nuevo Producto de Aventura
        </Badge>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
          Tu Aventura, Tu Hidratación.
          <span className="block text-white">La Botella que se Adapta a Ti.</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto text-pretty">
          Descubre VertexBottle, la botella de agua plegable diseñada para conquistar cualquier cima contigo. Ligera,
          resistente y siempre lista para tu próxima excursión.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-semibold"
          >
            Comprar Ahora y Obtén un 15% de Descuento
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2 text-white">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm">4.9/5 • 2,847 reseñas</span>
          </div>
        </div>
      </div>
    </section>
  );
}
