import { View, Button} from "react-native"
import { router } from "expo-router"


export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 32, gap: 16 }}>
    

      <Button title="Receitas" onPress={() => router.navigate("/receitas")} />
    </View>
  )
}
