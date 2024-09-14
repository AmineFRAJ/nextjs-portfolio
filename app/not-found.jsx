import { Button } from "@/components/ui/button";
import React from "react";

const NotFound = () => {
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-accent dark:text-primary-500">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-400 md:text-4xl dark:text-white">
            Something's missing.
          </p>
          <p className="mb-4 text-lg font-light text-gray-400 dark:text-gray-400">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <a href="/">
          <Button
            variant="outline"
            className="uppercase flex items-center gap-2 bg-dark border-accent rounded-lg"
          >
            Back to Homepage
          </Button>
        </a>
      </div>
    </section>
  );
};

export default NotFound;
