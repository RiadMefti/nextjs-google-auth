# Next.js Google Authentication

A minimal but complete implementation of 🔐 Google OAuth authentication in a Next.js application using NextAuth.js. This project demonstrates how to set up protected routes and handle authentication flows .

## Getting Started

### Prerequisites

- Node.js 18.x or later
- A Google Cloud Platform account for OAuth credentials

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/nextjs-google-auth.git
   cd nextjs-google-auth
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Creating Your Google OAuth 2.0 Credentials

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project or select an existing one.
3. Navigate to “APIs & Services” → “Credentials.”
4. Click “Create Credentials” → “OAuth client ID.”
5. Choose “Web application” as the application type.
6. Under “Authorized redirect URIs,” add:
   - `http://localhost:3000/api/auth/callback/google` (for development)
   - Your production callback URL for deployment
7. After creating the credentials, copy the “Client ID” and “Client Secret.”
8. Put them in your .env file
9. You can also create AUTH_SECRET with a random secret string

## Running the Project

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Visit `http://localhost:3000` to see the application.
