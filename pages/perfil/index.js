import React from "react";
import { useRouter } from "next/router";
import { supabase } from "../../utils/supabaseClient";
import { Loader, Group } from "@mantine/core";
import { DashboardNav } from "../../components/Dashboard/Navbar";
import Musica from "./musica";
import Player from "../../components/Player";

export default function Dashboard(){
    const router = useRouter();
    const [loading, setLoading] = React.useState(true);
    const [user, setUser] = React.useState(null);
    const [profile, setProfile] = React.useState(null);

    const fetchProfile = async () => {
        // TODO
        return {
            name: "",
            audios: [],
        }
    }
    React.useEffect(() => {
        const session = supabase.auth.session();
        setUser(session?.user ?? null);
        setLoading(false);
        fetchProfile();
    }, []);

    return ( 
        <section className="dashboard__profile">
            <DashboardNav selectedLink="Mi musica" />
            {
                loading && (
                    <Group>
                        <Loader/>
                        <h1>Cargando...</h1>
                    </Group>
                )
            }
            {/* Not logged in state */}
            {
                !loading && !user && (
                    <Group>
                        <h1>Debes iniciar sesión para acceder a esta página</h1>
                        <button onClick={
                            ()=>{
                                router.push("/login");
                            }
                        }>Login</button>
                    </Group>
                )
            }
            {/* Logged in state */}
            {
                !loading && user && (
                    <section>
                        <Musica user={user}/>
                        <Player/>
                    </section>
                )
            }
        </section>
    )
}