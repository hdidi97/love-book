import React from "react"
import clsx from "clsx"
import styles from "./styles.module.css"

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<"svg">>
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: "内容还原",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: <>尽可能还原 up 讲解的内容，不加入个人主观感受</>,
  },
  {
    title: "定期更新",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: <>会抽时间定期更新，力求做到和b站内容同步</>,
  },
  {
    title: "永久免费",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>本知识整理自b站up主。如果想要了解更详细的内容，建议去b站购买该课程。</>
    ),
  },
]

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
  )
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
  )
}
