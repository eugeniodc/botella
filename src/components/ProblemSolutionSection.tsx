import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Mountain, CheckCircle } from "lucide-react";

export function ProblemSolutionSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Olvida las Botellas Voluminosas y Pesadas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Las botellas tradicionales ocupan espacio vital en tu mochila, añaden peso innecesario y son incómodas de transportar. VertexBottle cambia las reglas del juego.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-destructive/10 p-3 rounded-full">
                <Mountain className="h-6 w-6 text-destructive" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Problema: Espacio Limitado</h3>
                <p className="text-muted-foreground">
                  Las botellas rígidas ocupan el mismo espacio vacías o llenas, limitando lo que puedes llevar.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Solución: Diseño Plegable</h3>
                <p className="text-muted-foreground">
                  VertexBottle se compacta hasta un 80% cuando está vacía, liberando espacio para lo esencial.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
<Image
               src="/collapsible-water-bottle-before-after-comparison-h.jpg"
               alt="VertexBottle comparación plegable"
               width={400}
               height={300}
               className="w-full rounded-lg shadow-lg"
             />
          </div>
        </div>
      </div>
    </section>
  );
}
