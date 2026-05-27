// src/lib/sanityClient.js

import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '17ih25tq',
  dataset: 'portfoliodata',
  apiVersion: '2025-01-01',
  useCdn: true
})