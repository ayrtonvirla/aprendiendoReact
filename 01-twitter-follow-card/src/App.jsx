import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <section className='App'>
            <TwitterFollowCard isFollowing userName="midudev" name="Miguel Angel Duran"/>
            <TwitterFollowCard isFollowing={false} userName="kikobeats" name="Kiko Beats Rodri"/>
            <TwitterFollowCard isFollowing userName="midudev" name="Miguel Angel Duran"/>
        </section>
    )
}