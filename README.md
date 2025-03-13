# PayPal Login Integration with Next.js 14

This project demonstrates how to integrate PayPal login into a Next.js 14 application. It utilizes the PayPal API to enable users to securely log in through their PayPal accounts.

## Features

- **PayPal Login:** Implements the PayPal login flow using the PayPal JavaScript SDK.
- **Next.js 14:** Built with the latest version of Next.js, leveraging the App Router features.
- **Simple Example:** A basic and straightforward example to facilitate understanding of the integration process.

## Prerequisites

- Node.js (recommended version: 18 or higher)
- npm, yarn, pnpm, or bun (package manager)
- PayPal developer account (to obtain API credentials)

## Setup

1.  **Clone the repository:**

    ```bash
    git clone [YOUR_REPOSITORY_URL]
    cd [YOUR_PROJECT_NAME]
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

3.  **Configure environment variables:**

    - Create a `.env.local` file in the project root.
    - Add the following environment variables (replace with your PayPal credentials):

      ```
      NEXT_PUBLIC_PAYPAL_CLIENT_ID=YOUR_PAYPAL_CLIENT_ID
      NEXT_PUBLIC_PAYPAL_SCOPE =YOUR_SCOPES
      NEXT_PUBLIC_PAYPAL_BASE_URL =BASE_URL_FOR_PAY_PAL
      ```

    - Obtain your `CLIENT_ID` and configure the environment (sandbox for testing, production for live) from the PayPal developer dashboard.

4.  **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

5.  **Access the application in your browser:**

    Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `app/`: Contains the Next.js application routes and components.
- `components/`: Reusable components, including the PayPal login component.
- `.env.local`: Environment variables file.

## PayPal Login Implementation

The core code for the PayPal login integration is located in `components/PayPalLoginButton.tsx` (or your component's name). It utilizes the PayPal JavaScript SDK to render the login button and handle the authentication flow.

## Additional Resources

- [PayPal API Documentation](https://developer.paypal.com/docs/api/quickstart/)
- [Next.js Documentation](https://nextjs.org/docs)
- [PayPal Integration Examples](https://developer.paypal.com/demo/checkout/#/pattern/checkout)

## Deployment on Vercel

To deploy your application on Vercel, follow the instructions in the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying). Ensure you configure the environment variables in the Vercel settings panel.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

[Your License] (e.g., MIT License)
