import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";
import Translate from "@docusaurus/Translate";

function HomepageHero() {
  return (
    <div className="relative flex flex-col flex-1 overflow-hidden">
      <div className="relative h-[40vh] sm:h-[70vh]">
        <img
          className="object-cover object-center w-full h-full -z-10"
          src="/img/tvpaint_hero.png"
          alt=""
          priority
          fill
        />
        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black h-3/4" />
        <div class="absolute bottom-0 left-0 right-0 z-10 px-4 py-16 mx-auto sm:py-20">
          <div class="max-w-3xl mx-auto space-y-8 text-center sm:space-y-16">
            <div class="flex flex-col space-y-6 md:space-y-10">
              <div class="flex flex-col space-y-4">
                <h1 className="z-20 font-sans text-2xl font-black text-white">
                  <Translate>Documentation</Translate>
                </h1>
                <p className="z-20 max-w-lg mx-auto text-lg text-center text-white">
                  <Translate>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris finibus augue sit amet.
                  </Translate>
                </p>
              </div>
              <div class="flex justify-center max-w-lg flex-col mx-auto gap-y-4 gap-x-6 md:gap-x-16">
                <Link
                  className="hover:scale-[1.04] disabled:opacity-50 disabled:cursor-not-allowed z-10 w-full px-8 py-2 bg-white rounded-lg transition-all duration-300 ease-in-out border-[2px] border-white hover:bg-black hover:text-white hover:no-underline"
                  to="/docs/intro"
                >
                  <Translate>Introduction</Translate>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <HomepageHero />
      </main>
    </Layout>
  );
}
