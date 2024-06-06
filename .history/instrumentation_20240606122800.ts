export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import('./sentry.server.config');
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    await import('./sentry.edge.config');
  }
}
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://0511b1b411bf7680a146aa82361a9c57@o4507363870638080.ingest.de.sentry.io/4507363882762320",
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
    }),
  ],
});