import { createClient } from '@supabase/supabase-js'

const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqcmxudmZpaGlnd3J3aWxmYmN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE3ODIxMTUsImV4cCI6MTk3NzM1ODExNX0.GKGmR4T-wLubLQ5fCSQg6cZV5g9SXsI4xlaX1-g943I"
const supabaseUrl = "https://fjrlnvfihigwrwilfbcu.supabase.co"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)