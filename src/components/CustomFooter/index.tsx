import React from "react";
import Link from "@docusaurus/Link";
import GithubIcon from "@site/static/icons/github.svg";
import styles from "./styles.module.scss";

const CustomFooter = () => (
<footer className={styles["custom-footer-wrapper"]}>
  <div className={styles["copyright"]}>
    {`© ${new Date().getFullYear()} Haltdos. All rights reserved`}
  </div>
  <div className={styles["footerSocialIconsWrapper"]}>
    <div className={styles["socialBrands"]}>
      <Link
        href={"https://github.com/hasura/graphql-engine"}
        rel="noopener noreferrer"
        aria-label={"Github"}
      >
        <GithubIcon />
      </Link>
    </div>

  </div>
</footer>
);

export default CustomFooter;
