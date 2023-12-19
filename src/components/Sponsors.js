import React from 'react';
import clsx from 'clsx';
import styles from './Sponsors.module.css';

const SponsorList = [
  {
    title: 'BrowserStack',
    logo: 'img/sponsors/browserstack.png',
    link: 'https://www.browserstack.com/automate?utm_source=serenity-bdd&utm_medium=partnered',
    description: 'Give your users a seamless experience by testing on 3000+ real devices and browsers. Don\'t compromise with emulators and simulators.'
  },
  {
    title: 'LambdaTest',
    logo: 'img/sponsors/lambda-test.png',
    link: 'https://www.lambdatest.com?utm_source=serenity_bdd&utm_medium=website',
    description: 'Perform Automated and Live Interactive Cross Browser Testing on 3000+ Real Browsers and Operating Systems Online.'
  },
  {
    title: 'Serenity Dojo',
    logo: 'img/sponsors/serenity-dojo.png',
    link: 'https://www.serenity-dojo.com/',
    description: 'Start Learning Real-World Test Automation Today with a proven programme that will set you apart from your peers.'
  },
];

function Sponsor({logo, title, link, description}) {
  return (
    <div className={clsx('col col--4')}>
      <a href={link}><img src={logo} title={title}/></a>
      <p>{description}</p>
    </div>
  );
}

export default function Sponsors() {
  return (
    <section className={styles.features}>
      <h2 className={styles.sponsorsTitle}>Platinum Sponsors</h2>
      <div className="container">
        <div className="row">
          {SponsorList.map((props, idx) => (
            <Sponsor key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
