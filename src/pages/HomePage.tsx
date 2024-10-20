"use client"

import Link from "next/link"
import { Button } from "~/shared/ui"
import { ConnectToTon, TonWallet } from "~/features"
import { useIsConnectionRestored, useTonConnectUI } from "@tonconnect/ui-react"

export function HomePage() {
	const connectionRestored = useIsConnectionRestored()
	const [tonConnectUI] = useTonConnectUI()

	if (!connectionRestored) {
		return <div>Please wait...</div>
	}

	function handleSignOut() {
		tonConnectUI.disconnect()
	}

	return (
		<main className={"w-full h-[100vh]"}>
			<div className={"h-1/2 flex-center flex-col gap-4"}>
				<ConnectToTon />
				<TonWallet />
				<Button onClick={handleSignOut}>Выйти</Button>
				<Link href={"/transaction"}>На страницу транзакции</Link>
			</div>
		</main>
	)
}
