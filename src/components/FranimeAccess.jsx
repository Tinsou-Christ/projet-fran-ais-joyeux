export default function FranimeAccess() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 px-5 py-10 text-center text-stream-foreground" aria-label="Source de remplacement">
      <h2 className="text-xl font-bold">Source vidéo indisponible</h2>
      <p className="max-w-lg text-sm text-stream-muted">La lecture et le téléchargement sont indisponibles : aucune source vidéo compatible n’est connectée.</p>
    </section>
  );
}