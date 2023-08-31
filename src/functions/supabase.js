import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://uyluymlaaxslqqygffza.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5bHV5bWxhYXhzbHFxeWdmZnphIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM0ODc0NzksImV4cCI6MjAwOTA2MzQ3OX0.t-n4PitfOIl13rgTIbxHUqatPiZ1lu3PwRCSdW44pkA',
);
