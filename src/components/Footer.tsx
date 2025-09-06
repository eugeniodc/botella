export function Footer() {
  return (
    <footer className="py-12 px-4 bg-foreground text-background">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">VertexBottle</h3>
        <p className="text-sm opacity-80 mb-6">La botella que se adapta a tu aventura</p>
        <div className="flex justify-center gap-8 text-sm">
          <a href="#" className="hover:opacity-80">Política de Privacidad</a>
          <a href="#" className="hover:opacity-80">Términos de Servicio</a>
          <a href="#" className="hover:opacity-80">Contacto</a>
        </div>
        <p className="text-xs opacity-60 mt-6">© 2024 VertexBottle. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
