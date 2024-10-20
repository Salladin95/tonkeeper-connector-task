import React from "react"

export type PropsWithChildren = { children: React.ReactNode }

export interface TonWalletInfo {
	balance: string
	code: string
	data: string
	frozen_hash: string
	last_transaction_hash: string
	last_transaction_lt: string
	status: string
}
