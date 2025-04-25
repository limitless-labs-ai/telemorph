#!/bin/bash

# Make sure dependencies are installed
npm install

# Run Supabase service
npm run db:start
npm run db:studio

# Start the development server
open http://localhost:3000
npm run dev
