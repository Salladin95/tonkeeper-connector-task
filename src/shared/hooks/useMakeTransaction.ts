"use client"
import { SendTransactionRequest, useTonConnectUI } from "@tonconnect/ui-react"

export function getTransaction(amount: string, addr: string): SendTransactionRequest {
	return {
		validUntil: Date.now() + 5 * 60 * 1000,
		messages: [
			{
				address: addr,
				amount: amount,
			},
		],
	}
}

export function useMakeTransaction() {
	const [tonConnectUI] = useTonConnectUI()
	return function makeTransaction(amount: string, addr: string) {
		tonConnectUI.sendTransaction(getTransaction(amount, addr))
	}
}
