// This is a page that signs out the user and redirects them to the home page
import React from "react";
import { useRouter } from "next/router";
import { supabase } from "../utils/supabaseClient";
import { Loader, Group } from "@mantine/core";
export default function SignOut() {
    const router = useRouter();
    const [loading, setLoading] = React.useState(true);

    const handleSignOut = async () => {
        try {
            setTimeout(() => {
                setLoading(true);
                supabase.auth.signOut().then(()=>{
                    router.push("/");
                })
            }, 1000);
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };  
    React.useEffect(() => {
        if(router.isReady) {
            handleSignOut();
        }
    }, [router]);
    
    return (
        <main>
            <Group>
                <Loader/>
                <h1>Cerrando sesión...</h1>
            </Group>

        </main>
    );
}