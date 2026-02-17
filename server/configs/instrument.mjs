import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://65468da5f3a23ee0aa39c3fdeda19625@o4510843815985152.ingest.us.sentry.io/4510843823783936",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});