import { CSSProperties, useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css';

export type Props = {
    className?: string
    style?: CSSProperties
}

export const ProductButtons = ({ className, style }: Props) => {
    //TODO: maxCount
    const { increaseBy, counter, maxCount } = useContext(ProductContext)

    //TODO: isMaxReached = useCallback, dependencias [ count, maxCount ]

    const isMaxReached = useCallback(
      () => !!maxCount && counter === maxCount,
      [counter],
    );
    

    return (
        <div 
            className={ `${styles.buttonsContainer} ${className}`}
            style={ style }
        >
            <button
                className={ styles.buttonMinus }
                onClick={() => increaseBy(-1)}
            >-</button>
            <div className={styles.countLabel}>{ counter }</div>
            <button 
                className={` ${styles.buttonAdd} ${isMaxReached() && styles.disabled} `}
                disabled={isMaxReached()}
                onClick={() => increaseBy(+1)}
            >+</button>
        </div>
    )
}