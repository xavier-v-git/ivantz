import { supabase } from "../lib/supabase"; // Assure-toi que le chemin vers ton client Supabase est correct

export default async function Home() {
  const { data, error } = await supabase.from("places").select("*").limit(5); // Remplace 'une-de-tes-tables' par un nom réel, e.g., 'events' ou une de tes 10 tables

  if (error) return <div>Erreur de connexion : {error.message}</div>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>; // Affiche les données en JSON
}
