import { TonProvider } from "./Ton"
import { PropsWithChildren } from "src/shared/types"

export function Providers(props: PropsWithChildren) {
	return <TonProvider>{props.children}</TonProvider>
}
