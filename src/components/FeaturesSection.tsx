import { Card, CardContent } from "@/components/ui/card";
import { Droplets, Shield, CheckCircle, Mountain, Leaf, Clock } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Diseñada para la Montaña, Pensada para Ti
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Droplets className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Ultraligera y Plegable</h3>
              <p className="text-muted-foreground">
                Solo 85g de peso. Se compacta hasta ocupar el 20% de su tamaño original. Ahorra espacio vital en tu mochila.
              </p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Durabilidad Extrema</h3>
              <p className="text-muted-foreground">
                Silicona de grado alimenticio que resiste caídas, temperaturas extremas y terrenos difíciles.
              </p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">100% a Prueba de Fugas</h3>
              <p className="text-muted-foreground">
                Sistema de cierre hermético que mantiene tu equipo seco, sin importar el movimiento o la posición.
              </p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mountain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Hidratación Inteligente</h3>
              <p className="text-muted-foreground">
                Boquilla ergonómica de fácil acceso para beber en movimiento, incluso con guantes.
              </p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Eco-Friendly</h3>
              <p className="text-muted-foreground">
                100% libre de BPA, reutilizable y fabricada con materiales sostenibles. Cuida el planeta que exploras.
              </p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Mosquetón Integrado</h3>
              <p className="text-muted-foreground">
                Clip de aluminio incluido para enganchar fácilmente a tu mochila o cinturón.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
