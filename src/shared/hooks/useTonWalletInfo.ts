"use client"

import React from "react"
import { getWalletInfo } from "~/shared/api"
import { TonWalletInfo } from "~/shared/types"
import { useIsConnectionRestored, useTonWallet } from "@tonconnect/ui-react"

export function useTonWalletInfo() {
	const wallet = useTonWallet()
	const connectionRestored = useIsConnectionRestored()
	const [walletInfo, setWalletInfo] = React.useState<TonWalletInfo | null>(null)

	React.useEffect(() => {
		;(async () => {
			if (!wallet) return
			const address = wallet?.account.address
			const info = await getWalletInfo(address)
			info && setWalletInfo(info)
		})()
	}, [wallet])

	if (!connectionRestored) {
		return { walletInfo, wallet, connectionRestored }
	}
	return { walletInfo, wallet, connectionRestored }
}
