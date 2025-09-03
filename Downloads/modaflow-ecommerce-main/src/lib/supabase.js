import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xlbtozidzcrytokvdfrk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhsYnRvemlkemNyeXRva3ZkZnJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ3OTg1MDQsImV4cCI6MjA3MDM3NDUwNH0.zvV6bcNRSe5xcYLPRLHMGSY_wlfPzvlpGLPNaZvdGdM'

export const supabase = createClient(supabaseUrl, supabaseKey)