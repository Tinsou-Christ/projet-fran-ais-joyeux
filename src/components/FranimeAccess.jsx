import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FranimeLink({ compact = false }) {
  return (
    <Button asChild className="bg-stream-accent text-stream-accent-foreground hover:bg-stream-accent/90 max-w-full">
      <a href="https://franime.fr/" target="_blank" rel="noopener noreferrer" title="Ouvrir FRAnime dans un nouvel onglet">
        <ExternalLink aria-hidden="true" />
        {compact ? 'FRAnime' : 'Ouvrir FRAnime'}
      </a>
    </Button>
  );
}

export default function FranimeAccess() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 px-5 py-10 text-center text-stream-foreground" aria-label="Source de remplacement">
      <h2 className="text-xl font-bold">Source vidéo indisponible</h2>
      <p className="max-w-lg text-sm text-stream-muted">L’ancienne source ne répond plus. FRAnime n’est pas accessible depuis le lecteur intégré ; vous pouvez ouvrir son site directement.</p>
      <FranimeLink />
      <p className="text-xs text-stream-muted">La disponibilité des épisodes dépend de FRAnime.</p>
    </section>
  );
}