import clsx from "clsx";
import React from "react";
import { GiBrain, GiDatabase, GiOpenBook } from "react-icons/gi";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "A Store of LLM Knowledge",
    Svg: GiBrain,
    description: (
      <>
        The LLM Book is a current and comprehensive guide to working with Large
        Language Models and Generative AI models.
      </>
    ),
  },
  {
    title: "Living Documentation",
    Svg: GiDatabase,
    description: (
      <>
        The LLM Book is a living document, updated regularly with new content
        and best practices.
      </>
    ),
  },
  {
    title: "Open Source",
    Svg: GiOpenBook,
    description: (
      <>
        Have something you want to add? The LLM Book is designed to be modified
        if you find something you want to update. It is built by the community,
        for the community.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
