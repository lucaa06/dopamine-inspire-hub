// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ojbvuwblaofmnevqwodh.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qYnZ1d2JsYW9mbW5ldnF3b2RoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA3MDAzNjUsImV4cCI6MjA2NjI3NjM2NX0.r7EXGu-YfScNDDIxLPzQE6J0XFLJx7aeMjXtVpejuKI";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);