import './App.css'


const profiles = [
    {
        name: "Justin Case",
        role: "Software Developer",
        cover: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80",
        avatar: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=300&q=80"
    },
    {
        name: "Frank Hepsfield",
        role: "Software Engineering Manager",
        cover: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80"
    },
    {
        name: "Joseph Cheps",
        role: "Firmware Engineer",
        cover: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=900&q=80",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
    }
];

function Profilecard({ name, role, cover, avatar }) {

    return (
        <div className="profile-card">
            <img className="cover" src={cover}></img>
            <img className="avatar" src={avatar}></img>

            <h2>{name}</h2>
            <p>{role}</p>
        </div>
    );

}

function App() {
    // console.log(props)
    return (
        <>
            <main className="page">
                <section className="cards">
                    <div>
                        {
                            profiles.map((profile) => (
                                <Profilecard {...profile} />
                            ))
                        }
                    </div>
                </section>
            </main>

        </>
    )
}











export default App
