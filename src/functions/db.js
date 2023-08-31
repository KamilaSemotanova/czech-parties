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

export async function SaveAccount(account) {
  let { data, error } = await supabase
    .from('insta_accounts')
    .insert({ account });
  if (error) {
    console.error(error);
    return;
  }
}
