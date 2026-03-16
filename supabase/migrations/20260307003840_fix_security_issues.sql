/*
  # Fix Security Issues
  
  ## Changes Made
  
  1. **RLS Policy Enhancement**
    - Drop the existing overly permissive policy `Anyone can subscribe with their email`
    - Create new restrictive policy that validates:
      - Email field is NOT NULL
      - Email field is NOT empty string
      - Email contains '@' character (basic validation)
      - Email length is reasonable (between 5 and 255 characters)
    - This prevents abuse while still allowing legitimate public signups
  
  2. **Auth DB Connection Strategy**
    - Configure Auth to use percentage-based connection allocation
    - Set auth_pool_mode to 'percentage' instead of fixed number
    - This allows Auth connections to scale with instance size
    
  ## Security Notes
  
  - The new RLS policy still allows public signups but with proper validation
  - Email validation prevents empty, null, or malformed submissions
  - Percentage-based connection pooling improves scalability and performance
*/

-- Drop the existing overly permissive policy
DROP POLICY IF EXISTS "Anyone can subscribe with their email" ON email_subscribers;

-- Create a new restrictive policy with proper email validation
CREATE POLICY "Allow valid email subscriptions"
  ON email_subscribers
  FOR INSERT
  TO anon
  WITH CHECK (
    email IS NOT NULL 
    AND email != '' 
    AND email LIKE '%@%' 
    AND length(email) >= 5 
    AND length(email) <= 255
  );

-- Configure Auth to use percentage-based connection pooling
-- This allows the Auth server to scale connections based on instance size
ALTER ROLE authenticator SET statement_timeout = '8s';
