import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList1 = [
  {
    title: 'WAF',
    Svg: require('@site/static/img/logo/waf.svg').default,
    link: 'waf/docs/'
  },
  {
    title: 'Anti-DDoS',
    Svg: require('@site/static/img/logo/ddos.svg').default,
    link: 'ddos/docs/'
  },
  {
    title: 'Community WAF',
    Svg: require('@site/static/img/logo/waf.svg').default,
    link: 'community-waf/docs/'
  },
  {
    title: 'GSLB',
    Svg: require('@site/static/img/logo/speed.svg').default,
    link: 'gslb/docs/'
  },
];

const FeatureList2 = [
  {
    title: 'ADC',
    Svg: require('@site/static/img/logo/ddos.svg').default,
    link: 'adc/docs/'
  },
  {
    title: 'LLB',
    Svg: require('@site/static/img/logo/waf.svg').default,
    link: 'llb/docs/'
  },
  {
    title: 'SSL VPN',
    Svg: require('@site/static/img/logo/speed.svg').default,
    link: 'ssl-vpn/docs/'
  },
  {
    title: 'Haltdos SaaS',
    Svg: require('@site/static/img/logo/waf.svg').default,
    link: 'saas/docs/'
  },
];

function Feature({Svg, title, link}) {
  return (
    <div className={clsx('col col--3 product1')}>
      <a href={link}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" id="product_logo"/>
          <h4 className="text--center solution">{title}</h4>
        </div>
      </a>
    </div>
  );
}

function Feature2({Svg, title, link}) {
  return (
    <div className={clsx('col col--3 product2')}>
      <a href={link}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" id="product_logo"/>
          <h4 className="text--center solution">{title}</h4>
        </div>
      </a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <div>
      <div className="text--center">
          <h2 className="text--center product-title"> Haltdos Products</h2>
        </div>
      <section className={styles.features}>
        <div className="container gap1">
          <div className="row">
            {FeatureList1.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      <section className={styles.features}>
      <div className="container gap2">
        <div className="row">
          {FeatureList2.map((props, idx) => (
            <Feature2 key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  </div>
  );
}
