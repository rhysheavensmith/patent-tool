# Project Title: Interactive Questionnaire

This is a Next.js application that presents users with an interactive questionnaire. Based on their answers, it navigates through a series of questions defined in `data/questions.ts` and ultimately displays a result message. The final result screen also includes a contact form that allows users to send their details and the questionnaire result via email using the Resend service.

## Project Structure

-   `/app`: Contains the main application layout (`layout.tsx`), the entry page (`page.tsx`), global styles (`globals.css`), and API routes (`/api`).
    -   `/app/api/send-email/route.ts`: Handles the POST request to send contact form details via Resend.
-   `/components`: Contains the React components used in the application.
    -   `Questionnaire.tsx`: Manages the question flow, user selections, and navigation logic.
    -   `ResultDisplay.tsx`: Displays the final response message and the contact form.
-   `/data`: Contains the data for the questionnaire.
    -   `questions.ts`: Defines the structure, text, options, and branching logic for each question.
-   `/public`: Static assets (if any).
-   `package.json`: Project dependencies and scripts.
-   `next.config.ts`: Next.js configuration (currently default).
-   `tailwind.config.js` (or equivalent like `postcss.config.mjs`): Tailwind CSS configuration.
-   `.env`: Environment variables (should contain `RESEND_API_KEY` and `TO_EMAIL_ADDRESS`).

## Key Features

-   Dynamic questionnaire flow based on user answers.
-   Branching logic defined in a central data file (`data/questions.ts`).
-   Final result display.
-   Contact form integrated with the result.
-   Email notification using Resend API.
-   Built with Next.js (App Router), React, TypeScript, and Tailwind CSS.

## Getting Started

### Prerequisites

-   Node.js (version 20 or later recommended)
-   npm, yarn, pnpm, or bun
-   A Resend account and API key ([https://resend.com/](https://resend.com/))

### Installation

1.  Clone the repository:
    ```bash
    git clone <your-repository-url>
    cd questionnaire # Or your project directory name
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```
3.  Set up environment variables:
    -   Create a `.env` file in the root directory (copy `.env.example` if it exists).
    -   Add your Resend API key and the target email address:
        ```dotenv
        RESEND_API_KEY=your_resend_api_key_here
        TO_EMAIL_ADDRESS=recipient@example.com
        ```
    -   **Important:** Ensure the `.env` file is listed in your `.gitignore` file to avoid committing sensitive keys.

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

```bash
npm run build
```

This command builds the application for production usage, optimizing it for performance.

## Starting the Production Server

```bash
npm run start
```

This command starts the production server after building the application. Ensure the build step has been completed first.

## Embedding in an iframe

To embed this questionnaire application within another website using an iframe, follow these steps:

1.  **Deploy the Application:** First, you need to deploy the Next.js application to a hosting provider (like Vercel, Netlify, AWS Amplify, or your own server). Make sure it's accessible via a public URL (e.g., `https://your-questionnaire-app.com`).

2.  **Add iframe to your Website:** In the HTML of the website where you want to embed the questionnaire, add the following `iframe` tag:

    ```html
    <iframe
      src="https://your-questionnaire-app.com" <!-- Replace with your deployed app's URL -->
      width="100%" <!-- Adjust width as needed -->
      height="600px" <!-- Adjust height as needed -->
      style="border: none;" <!-- Optional: remove default iframe border -->
      title="Interactive Questionnaire"
      allowfullscreen <!-- Optional: if fullscreen is desired -->
    >
      Your browser does not support iframes.
    </iframe>
    ```

3.  **Configure Security Headers (If Necessary):** By default, web applications often include security headers (like `X-Frame-Options` or `Content-Security-Policy: frame-ancestors`) that prevent them from being embedded in iframes on different domains to mitigate clickjacking attacks. You might need to adjust these headers on your deployed application to allow your *specific* website to embed it.

    *   **How to Configure:** The method depends heavily on your hosting provider or server setup:
        *   **Vercel:** You can configure headers in your `next.config.js` file or using a `vercel.json` file.
        *   **Netlify:** You can configure headers using a `_headers` file or `netlify.toml`.
        *   **Custom Server (Node.js/Express, etc.):** You would configure your server framework (e.g., using Express middleware) to set the appropriate headers.

    *   **Example Header (using `Content-Security-Policy` in `next.config.js`):** This is the modern and recommended approach. Add the following to your `next.config.js`:

        ```javascript
        // next.config.js
        /** @type {import('next').NextConfig} */
        const nextConfig = {
          async headers() {
            return [
              {
                // Apply these headers to all routes in your application
                source: '/:path*',
                headers: [
                  {
                    key: 'Content-Security-Policy',
                    // Allows embedding only by 'self' (your own domain) and 'https://your-embedding-website.com'
                    // Replace 'https://your-embedding-website.com' with the actual domain where the iframe will be placed.
                    value: "frame-ancestors 'self' https://your-embedding-website.com;",
                  },
                  // You might also need to remove or adjust X-Frame-Options if it's being set elsewhere
                  // { key: 'X-Frame-Options', value: 'SAMEORIGIN' }, // Example default you might need to manage
                ],
              },
            ];
          },
          // Other Next.js config options...
        };

        module.exports = nextConfig; // Or export default nextConfig for ESM
        ```

    *   **Important Security Note:**
        *   **NEVER** use overly permissive values like `frame-ancestors *` or remove frame protection entirely unless you fully understand the security implications.
        *   **ALWAYS** restrict `frame-ancestors` to `'self'` and the specific, trusted domain(s) (`https://your-embedding-website.com`) where the iframe will reside.

4.  **Test:** After deploying the changes (including header modifications), load the page containing the iframe and verify that the questionnaire application loads correctly. Check your browser's developer console for any security-related errors.

## Contributing

Contributions are welcome! Please open an issue to discuss potential changes or submit a pull request.

## License

[Specify your license here, e.g., MIT]
(If no license is specified, you might want to add one, like the MIT license)
