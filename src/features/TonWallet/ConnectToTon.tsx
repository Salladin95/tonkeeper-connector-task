"use client"

import React from "react"
import { Button } from "~/shared/ui"

import { useTonConnectUI } from "@tonconnect/ui-react"

export function ConnectToTon() {
	const [tonConnectUI] = useTonConnectUI()

	function handleConnectToTon() {
		if (!tonConnectUI) return
		tonConnectUI?.modalState?.status === "opened"
			? tonConnectUI.closeSingleWalletModal()
			: tonConnectUI.openSingleWalletModal("tonkeeper")
	}

	return <Button onClick={handleConnectToTon}>Connect Wallet</Button>
}
