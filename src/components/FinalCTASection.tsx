import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Shield, Users } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-orange-400 via-pink-400 to-yellow-300 text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Prepárate para tu Próxima Aventura</h2>
        <p className="text-xl mb-8 opacity-90 text-pretty">
          No dejes que una botella pesada y voluminosa limite tus exploraciones. VertexBottle te da la libertad de explorar sin cargas innecesarias.
        </p>
        <div className="bg-primary-foreground/10 rounded-lg p-8 mb-8 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-3xl font-bold">€39.99</span>
            <span className="text-xl line-through opacity-60">€47.99</span>
            <Badge className="bg-accent text-accent-foreground">15% OFF</Badge>
          </div>
          <p className="text-sm opacity-80">Oferta de lanzamiento • Envío gratuito • Garantía de 2 años</p>
        </div>
        <div className="space-y-4">
          <Button size="lg" variant="secondary" className="px-12 py-4 text-lg font-semibold">
            Sí, Quiero Mi VertexBottle
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <div className="flex items-center justify-center gap-6 text-sm opacity-80">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>Garantía de satisfacción</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span>Pago seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>+2,847 clientes felices</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
