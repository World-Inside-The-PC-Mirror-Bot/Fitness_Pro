# Fitness Pro

## Description

Fitness Pro is a web application designed to help users manage their fitness journey. It includes features for viewing exercise details and tracking workout progress.

**Author:** [Prem Kumar](https://github.com/premkumar-epic)

**GitHub Repository:** [https://github.com/World-Inside-The-PC-Mirror-Bot/Fitness_Pro](https://github.com/World-Inside-The-PC-Mirror-Bot/Fitness_Pro)

## Technologies Used

* **Frontend:**
    * React
    * Next.js
    * Tailwind CSS
    * Radix UI
    * React Hook Form
    * Recharts
    * TanStack Query
    * Other libraries: class-variance-authority, clsx, date-fns, lucide-react, tailwindcss-animate, zod
* **Backend/AI:**
    * Firebase
* **Other:**
    * TypeScript

## Prerequisites

Before running the project, ensure you have the following installed:

* [Node.js](https://nodejs.org/) (version specified by Next.js, check their documentation)
* [npm](https://www.npmjs.com/) (usually comes with Node.js) or [Yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/)
* [Git](https://git-scm.com/)

## Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/World-Inside-The-PC-Mirror-Bot/Fitness_Pro
    cd Fitness_Pro
    ```

  

2.  **Install dependencies:**

    Using npm:

    ```bash
    npm install
    ```

    Using Yarn:

    ```bash
    yarn install
    ```

    Using pnpm:

    ```bash
    pnpm install
    ```

3.  **Set up environment variables:**

    * Create a `.env.local` file in the root directory of the project.
    * Add the necessary environment variables. At a minimum, you'll need Firebase configuration variables. Example:

        ```
        NEXT_PUBLIC_FIREBASE_API_KEY="YOUR_FIREBASE_API_KEY"
        NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="YOUR_FIREBASE_AUTH_DOMAIN"
        NEXT_PUBLIC_FIREBASE_PROJECT_ID="YOUR_FIREBASE_PROJECT_ID"
        NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="YOUR_FIREBASE_STORAGE_BUCKET"
        NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="YOUR_FIREBASE_MESSAGING_SENDER_ID"
        NEXT_PUBLIC_FIREBASE_APP_ID="YOUR_FIREBASE_APP_ID"
        
        ```

        **Important:** Replace the `YOUR_...` placeholders with your actual Firebase configuration values. You'll get these from your Firebase project console. You'll also need to configure any necessary credentials for Genkit and Google AI, as per their documentation.

## Running the Project

1.  **Start the development server:**

    ```bash
    npm run dev
    ```

    or

    ```bash
    yarn dev
    ```

    or

    ```bash
    pnpm run dev
    ```

    This will start the Next.js development server, usually at `http://localhost:3000` or `http://localhost:9002` (as per your `package.json` script).

2.  **Access the application:**

    Open your web browser and go to the address shown in the terminal (e.g., `http://localhost:3000`).

## Building for Production

1.  **Build the application:**

    ```bash
    npm run build
    ```

    or

    ```bash
    yarn build
    ```

    or

    ```bash
    pnpm run build
    ```

    This will create an optimized production build of the application in the `.next` directory.

2.  **Start the production server:**

    ```bash
    npm start
    ```

    or

    ```bash
    yarn start
    ```

    or

    ```bash
    pnpm start
    ```

    This will start the Next.js production server, serving the built application. Make sure you have built the application before running this command.

