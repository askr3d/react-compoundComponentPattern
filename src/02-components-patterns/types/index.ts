import { Props as ProductCardProps } from "../components/ProductCard"
import { Props as ProductTitleProps } from "../components/ProductTitle"
import { Props as ProductImageProps } from "../components/ProductImage"
import { Props as ProductButtonsProps } from "../components/ProductButtons"

export type Product = {
    id: string
    title: string
    img?: string
}

export type ProductContextProps = {
    counter: number
    increaseBy: (value: number) => void
    product: Product
}

export type ProductCardHOCProps = {
    ({ children, product }: ProductCardProps): JSX.Element
    Title:   ( Props: ProductTitleProps) => JSX.Element
    Image:   ( Props: ProductImageProps) => JSX.Element
    Buttons: ( Props: ProductButtonsProps) => JSX.Element
}

export interface onChangeArgs {
    product: Product
    count: number
}

export interface ProductInCart extends Product {
    count: number
}