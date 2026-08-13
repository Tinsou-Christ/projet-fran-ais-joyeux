import { createClient } from '@supabase/supabase-js';

// Valeurs publiques (clé « anon » publiable) — surchargées par les variables d'environnement si présentes.
const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL || 'https://hdthvmpbgaqprlqznrtt.supabase.co';
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkdGh2bXBiZ2FxcHJscXpucnR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM3Mjc4NTQsImV4cCI6MjA5OTMwMzg1NH0.VjKQ7nKYBA0brC3zkT-VkjsGzBgD8xmF3aNXCa3FkSc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
