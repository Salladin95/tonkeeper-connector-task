"use client"
import { PropsWithChildren } from "src/shared/types"
import { TonConnectUIProvider } from "@tonconnect/ui-react"

export function TonProvider(props: PropsWithChildren) {
	return (
		<TonConnectUIProvider manifestUrl={`http://localhost:3000/manifest.json`}>{props.children}</TonConnectUIProvider>
	)
}
