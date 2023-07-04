import { supabase } from './supabase';

export async function LoadEvents() {
  const { data } = await supabase
    .from('Events')
    .select()
    .order('date_of_event', { ascending: true });
  return data;
}

// export const getEventById = (id) => {
//   const supabase = getSupabase();

//   return supabase.from('Events').select('*').eq('id', id).single();
// };
