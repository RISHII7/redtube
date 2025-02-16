import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { PageClient } from "@/app/(home)/client";

import { HydrateClient, trpc } from "@/trpc/server";

export default async function Home() {

  void trpc.hello.prefetch({ text: "RISHII" })

  return (
    <HydrateClient>
      <Suspense fallback={<p>Loading...</p>}>
        <ErrorBoundary fallback={<p>Error..</p>}>
          <PageClient />
        </ErrorBoundary>
      </Suspense>
    </HydrateClient>
  );
};
