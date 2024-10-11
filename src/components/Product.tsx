import { Pressable, PressableProps, Text } from "react-native";

type Props = PressableProps & {
    data: {
        name: string
        quantity: number
    }
}

export function Product({data, ...rest}: Props) {
    return (
        <Pressable
            style={{
                backgroundColor: "#cecece",
                padding: 24,
                borderRadius: 5,
            }}>
            <Text>
                {data.name} - {data.quantity}
            </Text>
        </Pressable>
    )
}