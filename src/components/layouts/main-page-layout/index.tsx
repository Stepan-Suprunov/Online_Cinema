import styles from './style.module.scss'
import React from "react";

type MainPageLayoutPropType = {
    children: React.ReactNode;
};

export function MainPageLayout(props: MainPageLayoutPropType) {
    const { children     } = props;

    return (
        <div className={styles.mainPageLayout}>
            {children}
        </div>
    )
}