import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://xipxcdtrqvlahhqejwks.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhpcHhjZHRycXZsYWhocWVqd2tzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ5OTg0MDgsImV4cCI6MjAwMDU3NDQwOH0.Zd1wa12Vh9Tgq19jmRbimtuJ3eGX0FZlitUJahVd1Jc',
);
