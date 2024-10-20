"use client"

import React from "react"
import Link from "next/link"
import { Button } from "~/shared/ui"
import { useMakeTransaction } from "~/shared/hooks"
import { useTonWalletInfo } from "~/shared/hooks/useTonWalletInfo"

export default function MakeTransaction() {
	const [addr, setAddr] = React.useState("")
	const [tonAmount, setTonAmount] = React.useState("0")

	const { walletInfo, connectionRestored } = useTonWalletInfo()

	const makeTransaction = useMakeTransaction()

	if (!connectionRestored) {
		return <div>Please wait...</div>
	}

	return (
		<main className={"w-full h-[100vh]"}>
			<div className={"h-1/2 flex-center flex-col gap-4"}>
				<Link href={"/"}>Назад</Link>
				<h1>Balance: {walletInfo?.balance}</h1>
				<div className={"flex"}>
					<label htmlFor="ton-amount">Введите колчиество тон: </label>
					<input
						onInput={(e) => setTonAmount(e.currentTarget.value)}
						id={"ton-amount"}
						className={"border-[1px] border-black rounded"}
					/>
				</div>
				<div className={"flex"}>
					<label htmlFor="address">Введите адрес: </label>
					<input
						onInput={(e) => setAddr(e.currentTarget.value)}
						id={"address"}
						className={"border-[1px] border-black rounded"}
					/>
				</div>
				<Button onClick={() => makeTransaction(tonAmount, addr)}>Сделать транзакцию</Button>
			</div>
		</main>
	)
}
