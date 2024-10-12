import { initializeDatabase } from "@/database/initializeDatabase";
import { Stack } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";

export default function Layout(){
    return(
        <SQLiteProvider
            databaseName="myDatabaseSqlite.db"
            onInit={initializeDatabase}
        >
            <Stack>
                <Stack.Screen name="index" options={{title: "Home"}}/>
                <Stack.Screen name="details/[id]" options={{title: "Detalhes"}}/>
            </Stack>
        </SQLiteProvider>
    )
}