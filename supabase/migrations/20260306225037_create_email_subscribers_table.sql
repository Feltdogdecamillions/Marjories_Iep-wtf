/*
  # Email Subscribers Table

  1. New Tables
    - `email_subscribers`
      - `id` (uuid, primary key) - Unique identifier for each subscriber
      - `email` (text, unique, not null) - Email address of the subscriber
      - `source` (text) - Where the signup came from (e.g., 'iep_checklist', 'newsletter')
      - `subscribed_at` (timestamptz) - Timestamp when they subscribed
      - `created_at` (timestamptz) - Timestamp of record creation

  2. Security
    - Enable RLS on `email_subscribers` table
    - Add policy allowing anyone to insert their email (for public signup forms)
    - No read/update/delete policies (only admins should access via service role)

  3. Notes
    - Email addresses are unique to prevent duplicate subscriptions
    - Source field helps track which lead magnet or form converted the subscriber
*/

CREATE TABLE IF NOT EXISTS email_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  source text DEFAULT 'iep_checklist',
  subscribed_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE email_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe with their email"
  ON email_subscribers
  FOR INSERT
  TO anon
  WITH CHECK (true);
