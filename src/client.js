import { createClient } from '@supabase/supabase-js'

const URL = 'https://zyailpuoavbereyguxoc.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5YWlscHVvYXZiZXJleWd1eG9jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzODUxNTIsImV4cCI6MjA3Nzk2MTE1Mn0.lRZ2wC0zJI1flRsoF0RNeVV8RD9z_U9LmCsprSnvxnw';

export const supabase = createClient(URL, API_KEY);
