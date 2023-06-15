import React, {FC } from "react"
import { ReactNode } from "react"
export type ButtonProps  = {
    children: ReactNode
}
export const Button : FC<ButtonProps> = ({ children }) => {
    return (
    <button>
        {children}
    </button>
    )
}