import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fmbloxzhlqkfkkmefcvr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtYmxveHpobHFrZmtrbWVmY3ZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE1NDQ0MjcsImV4cCI6MTk4NzEyMDQyN30.qidFD73n8llQIB1JTRqHdJ00lofeIgEswtZUXyKPVxk";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
