import { createClient } from "@supabase/supabase-js";

// Crée un client Supabase qui utilise les vars d'env
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? "", // ?? pour éviter erreurs si vide
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
);
