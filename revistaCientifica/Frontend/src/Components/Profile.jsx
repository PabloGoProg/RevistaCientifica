import '../Styles/Profile.css'

export function Profile({name, desc}){
    return(
        <section className="profile_card">
            <img className='profile_img' src="src\Images\usuario.png"/>
            <div className="profile_content">
                <div className="profile_name">
                    {name}
                </div>
                <div className="profile_desc">
                    {desc}
                </div>
            </div>
        </section>
    );
}