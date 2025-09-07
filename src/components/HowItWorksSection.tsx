import Image from "next/image";

export function HowItWorksSection() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Tan Fácil como Beber, Plegar y Seguir
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-primary-foreground text-2xl font-bold">
              1
            </div>
<Image
               src="/water-bottle-being-filled-with-water-outdoor-setti.jpg"
               alt="Llenar VertexBottle"
               width={400}
               height={300}
               className="w-full max-w-sm mx-auto rounded-lg mb-6"
             />
            <h3 className="text-xl font-semibold mb-4">Llena</h3>
            <p className="text-muted-foreground">
              Capacidad de 750ml para mantenerte hidratado durante toda tu aventura.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-primary-foreground text-2xl font-bold">
              2
            </div>
<Image
               src="/person-drinking-from-collapsible-water-bottle-moun.jpg"
               alt="Beber de VertexBottle"
               width={400}
               height={300}
               className="w-full max-w-sm mx-auto rounded-lg mb-6"
             />
            <h3 className="text-xl font-semibold mb-4">Bebe</h3>
            <p className="text-muted-foreground">
              Disfruta de tu bebida en cualquier lugar con la boquilla ergonómica de fácil acceso.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-primary-foreground text-2xl font-bold">
              3
            </div>
<Image
               src="/collapsible-water-bottle-folded-compact-size-compa.jpg"
               alt="Plegar VertexBottle"
               width={400}
               height={300}
               className="w-full max-w-sm mx-auto rounded-lg mb-6"
             />
            <h3 className="text-xl font-semibold mb-4">Pliega</h3>
            <p className="text-muted-foreground">
              Compacta la botella y guárdala sin ocupar espacio. ¡Así de simple!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
