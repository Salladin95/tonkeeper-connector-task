import React from "react"
import { cn } from "~/shared/utils"

type ButtonProps = React.HTMLAttributes<HTMLButtonElement>

export function Button(props: ButtonProps) {
	const { className, ...rest } = props
	return <button className={cn("cursor-pointer text-xl", className)} {...rest} />
}
