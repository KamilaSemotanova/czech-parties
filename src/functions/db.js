import { supabase } from './supabase';

export async function LoadEvents() {
  const { data } = await supabase
    .from('Events')
    .select()
    .order('date_of_event', { ascending: true });
  return data;
}

export async function LoadEventById(id) {
  const { data } = await supabase.from('Events').select().eq('id', id).single();
  return data;
}
