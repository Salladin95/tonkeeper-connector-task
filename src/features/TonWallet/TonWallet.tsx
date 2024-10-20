"use client"

import React from "react"
import { useTonWalletInfo } from "~/shared/hooks/useTonWalletInfo"

export function TonWallet() {
	const { wallet, walletInfo } = useTonWalletInfo()

	if (!wallet || !walletInfo) return null

	return (
		wallet && (
			<div className={"flex flex-col text-black max-w-3xl overflow-hidden"}>
				<span>Connected wallet address: {wallet.account.address}</span>
				<span>Device: {wallet.device.appName}</span>
				<span>Connected via: {wallet.provider}</span>
				<div>Connected wallet info:</div>
				<div>Balance: {walletInfo.balance}</div>
				<div>{JSON.stringify(walletInfo)}</div>
			</div>
		)
	)
}
