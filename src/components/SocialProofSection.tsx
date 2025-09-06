import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export function SocialProofSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Lo que Dicen los Excursionistas</h2>
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-xl font-semibold">4.9/5 basado en 2,847 reseñas</span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <img src="/female-hiker-portrait-smiling.jpg" alt="Ana testimonial" className="w-15 h-15 rounded-full" />
                <div>
                  <h4 className="font-semibold">Ana Martínez</h4>
                  <p className="text-sm text-muted-foreground">Guía de montaña</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "¡La mejor botella que he tenido! Apenas ocupa espacio y es súper resistente. La he usado en el Annapurna y funcionó perfectamente."
              </p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <img src="/male-mountaineer-portrait-outdoor.jpg" alt="Carlos testimonial" className="w-15 h-15 rounded-full" />
                <div>
                  <h4 className="font-semibold">Carlos Ruiz</h4>
                  <p className="text-sm text-muted-foreground">Montañista</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "Increíble cómo se pliega. En expediciones largas, cada gramo cuenta. VertexBottle me ha dado más espacio para equipo esencial."
              </p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <img src="/female-trail-runner-portrait-athletic.jpg" alt="María testimonial" className="w-15 h-15 rounded-full" />
                <div>
                  <h4 className="font-semibold">María López</h4>
                  <p className="text-sm text-muted-foreground">Trail runner</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "Perfecta para trail running. No se mueve, no hace ruido y cuando termino, la guardo en el bolsillo. Genial diseño."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
