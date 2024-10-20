import { TonWalletInfo } from "~/shared/types"

export async function getWalletInfo(addr: string) {
	try {
		const response = await fetch(`https://toncenter.com/api/v3/addressInformation?address=${addr}`)
		const data = await response.json()
		return data as TonWalletInfo
	} catch (error) {
		console.error(error)
		return null
	}
}
