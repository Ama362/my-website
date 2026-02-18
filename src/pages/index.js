import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Refract Documentation"
      description="Reactive. Scalable. Visionary. Build UIs that flow.">

      {/* HERO SECTION */}
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container text--center">
          <h1 className={styles.heroTitle}>Welcome to Refract</h1>
          <p className={styles.heroSubtitle}>
            Refract is a next-generation JavaScript framework built for modern,
            reactive, and high-performance user interfaces.
          </p>
          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to="/docs/getting-started">
              Get Started
            </Link>
            
          </div>
        </div>
      </header>

      {/* FEATURES SECTION */}
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className="col col--4">
                <div className={styles.featureCard}>
                  <h3>Reactive by Design</h3>
                  <p>
                    Built around <strong>refractions</strong> a declarative, reactive model that
                    updates your UI in sync with data flows.
                  </p>
                </div>
              </div>
              <div className="col col--4">
                <div className={styles.featureCard}>
                  <h3>Stream-Powered Performance</h3>
                  <p>
                    Refract’s lightweight compiler and stream-based architecture
                    ensure lightning-fast rendering and transitions.
                  </p>
                </div>
              </div>
              <div className="col col--4">
                <div className={styles.featureCard}>
                  <h3>Developer-Centric Experience</h3>
                  <p>
                    With seamless TypeScript integration and pure function-driven
                    UIs, Refract empowers developers to build with clarity and control.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

