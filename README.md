# BloodLink AI - Blood Shortage Prediction Platform

AI-powered platform leveraging federated learning to predict blood shortages and coordinate donor responses in real-time.

![BloodLink AI Platform](https://raw.githubusercontent.com/vercel/ai-sdk/main/packages/core/static/og-image.png)

## Key Features

*   **Federated Learning**: Privacy-preserving machine learning across multiple blood banks without sharing sensitive data.
*   **Next.js 14 with App Router**: Leverages the latest features of Next.js for optimal performance and developer experience.
*   **Supabase Integration**: Includes user authentication, database management, and server-side utilities.
*   **UI Components**: A rich set of UI components, including charts, data tables, and more, built with Shadcn UI.
*   **AI Chat Interface**: A fully functional chat interface for blood donation queries and assistance.
*   **Email & Notifications**: Integrated with Resend for sending donor alerts and notifications.
*   **Predictive Analytics**: AI-powered blood shortage prediction to enable proactive donor coordination.

## Tech Stack

*   **Framework**: [Next.js](https://nextjs.org/)
*   **AI/ML**: Federated Learning, AI SDK for predictions and chat
*   **Database**: [Supabase](https://supabase.com/)
*   **UI**: [React](https://reactjs.org/), [Tailwind CSS](https://tailwindcss.com/), [Shadcn UI](https://ui.shadcn.com/)
*   **Email**: [Resend](https://resend.com/)
*   **LLM Provider**: [OpenAI](https://openai.com/), [Google Gemini](https://makersuite.google.com/)
*   **Search Provider**: [Tavily](https://tavily.ai/)


## Getting Started

Follow these steps to set up and run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/your-org/bloodlink-ai.git
cd bloodlink-ai/frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Supabase Database

- Create a new Supabase project at [Supabase](https://supabase.com/).
- Copy the migration file contents from `lib/supabase/migrations` to your Supabase project SQL editor.
- Run the migrations.
- Get the Supabase URL, anon key, and admin key from your Supabase project settings.

### 4. Set Up Environment Variables

Create a `.env.local` file in the root of the project and add the following environment variables. You will need to get these keys from their respective services.

```bash
cp env.example .env.local
```

```env

# Public (safe to expose to the browser)
NEXT_PUBLIC_SUPABASE_URL=<your_supabase_url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your_supabase_anon_key>

# Server-only (DO NOT prefix with NEXT_PUBLIC)
SUPABASE_URL=<your_supabase_url>
SUPABASE_SERVICE_ROLE_KEY=<your_supabase_service_role_key>

RESEND_API_KEY=<your_resend_api_key>
RESEND_DOMAIN=<your_resend_domain>

OPENAI_API_KEY=<your_openai_api_key>
GOOGLE_GENERATIVE_AI_API_KEY=<your_gemini_api_key>
XAI_API_KEY=<your_xai_api_key>
GROQ_API_KEY=<your_groq_api_key>

TAVILY_API_KEY=<your_tavily_api_key>
RAGIE_API_KEY=<your_ragie_api_key>

# App
NEXT_PUBLIC_APP_NAME="BloodLink AI"
NEXT_PUBLIC_APP_ICON='/next.svg'


```

### 5. Run the Development Server

```bash
npm run dev
```

### 6. Open the Application

Open your web browser and navigate to `http://localhost:3000` to view the application.