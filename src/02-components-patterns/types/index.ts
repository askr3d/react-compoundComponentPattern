import { ReactElement } from "react"

export type ProductCardProps = {
    product: Product,
    children?: ReactElement | ReactElement[]
}

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
    Title: ({ title }: {title?: string}) => JSX.Element
    Image: ({ img }: {img?: string}) => JSX.Element
    Buttons: () => JSX.Element
}