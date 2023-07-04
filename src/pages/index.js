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
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <div className='relative w-full h-full'>
        <img src='/img/TVPaint002.png' className="absolute -z-20"/>
        <div className='absolute w-full h-full bg-black opacity-20 -z-10'/>
      </div>
      <div className="z-20 flex flex-col items-center justify-center min-h-screen">
        <h1 className="z-20"><Translate>Documentation</Translate></h1>
        <p className="z-20"><Translate>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus augue sit amet.</Translate></p>
        <div className="z-20">
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            <Translate>Tutoriel Docusaurus - 5min ⏱️</Translate>
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
      <HomepageHeader />
    </Layout>
  );
}
