interface Configuration {
    searches: Search[],
    discord_token: string,
    embed_color: number,
    use_discord_bot: boolean,
    fetch_at_start: boolean,
    refreshInterval: number,
    server_id: string,
    user_id: string,
    user_id_locked: boolean
}