import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';
import Translate from '@docusaurus/Translate';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className='z-10 w-full bg-none'>
      <div className='z-10 flex items-center w-full mx-auto'>
        <div className="flex items-center w-full mx-auto bg-[#333333] bg-opacity-50">
          <img src='/img/TVPaint002.png' className="object-cover w-full h-full mx-auto opacity-100 -z-10 aspect-video"/>
          <div className="absolute left-0 right-0 mx-auto space-y-6 text-center w-fit">
            <h1 className="z-20 text-white"><Translate>Documentation</Translate></h1>
            <p className="z-20 text-white"><Translate>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus augue sit amet.</Translate></p>
            <div className="z-20">
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro">
                <Translate>Tutoriel Docusaurus - 5min ⏱️</Translate>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HomepageHero() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className="relative py-[15.7rem]">
      <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-end w-full h-full bg-black bg-opacity-30 mdx:opacity-100">
        <img
          className="object-cover w-full h-full -z-10"
          src="/img/TVPaint002.png"
          alt=""
          priority
          fill
        />
      </div>
      <div className="flex flex-col items-center justify-center w-full max-w-screen-xl px-4 mx-auto space-y-6 mdx:space-y-10">
        <h1 className="z-20 text-2xl font-black text-white font-title"><Translate>Documentation</Translate></h1>
        <p className="z-20 max-w-lg text-lg text-center text-white font-title"><Translate>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus augue sit amet.</Translate></p>
        <div className="z-20">
          <Link
            className="z-10 w-full px-8 py-2 bg-white rounded-lg transition-all duration-300 ease-in-out border-[2px] border-white hover:bg-black hover:text-white hover:no-underline"
            to="/docs/intro">
            <Translate>Introduction</Translate>
          </Link>
        </div>
      </div>
    </div>
    );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <HomepageHero />
      </main>
    </Layout>
  );
}
