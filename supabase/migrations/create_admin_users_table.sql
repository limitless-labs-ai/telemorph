-- Create admin_users table
CREATE TABLE IF NOT EXISTS admin_users (
  id SERIAL PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL UNIQUE,
  full_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS admin_users_user_id_idx ON admin_users(user_id);
CREATE INDEX IF NOT EXISTS admin_users_email_idx ON admin_users(email);

-- Create an RLS policy that only allows admin users to access this table
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Policy for admin users to see all records
CREATE POLICY admin_read_policy ON admin_users 
  FOR SELECT 
  USING (
    auth.uid() IN (SELECT user_id FROM admin_users)
  );

-- Policy for admin users to insert their own records (used during signup)
CREATE POLICY admin_insert_policy ON admin_users 
  FOR INSERT 
  WITH CHECK (
    auth.uid() = user_id OR 
    EXISTS (SELECT 1 FROM admin_users WHERE user_id = auth.uid())
  );

-- Policy for admin users to update their own records
CREATE POLICY admin_update_policy ON admin_users 
  FOR UPDATE 
  USING (
    auth.uid() = user_id OR 
    EXISTS (SELECT 1 FROM admin_users WHERE user_id = auth.uid())
  );

-- Create a job_applications table to store job applications
CREATE TABLE IF NOT EXISTS job_applications (
  id SERIAL PRIMARY KEY,
  job_id TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  resume_url TEXT,
  cover_letter TEXT,
  status TEXT DEFAULT 'pending', -- 'pending', 'reviewed', 'approved', 'rejected'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for job applications
CREATE INDEX IF NOT EXISTS job_applications_job_id_idx ON job_applications(job_id);
CREATE INDEX IF NOT EXISTS job_applications_email_idx ON job_applications(email);
CREATE INDEX IF NOT EXISTS job_applications_status_idx ON job_applications(status);

-- Enable RLS on job_applications
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

-- Policy for admin users to access job applications
CREATE POLICY job_applications_admin_policy ON job_applications 
  FOR ALL 
  USING (
    auth.uid() IN (SELECT user_id FROM admin_users)
  );

-- Policy for anonymous users to insert applications
CREATE POLICY job_applications_insert_policy ON job_applications 
  FOR INSERT 
  TO authenticated, anon
  WITH CHECK (true); 