import React, { useState } from "react";
// import "./profil.css";

export const Profil = () => {
    const [owner, setOwner] = useState({
        fullname: "",
        email: "",
        phone: "",
        city: "",
        bio: "Propriétaire de plusieurs appartements modernes.",
        profileImage:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setOwner({
            ...owner,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Profil mis à jour :", owner);

        // API CALL ICI
        // axios.put(...)
    };

    return (
        <div className="profile-container">
            <div className="profile-card">

                <div className="profile-header">
                    <img
                        src={owner.profileImage}
                        width={100}
                        height={100}
                        alt="profile"
                        className="profile-image"
                    />

                    <h2>{owner.fullname}</h2>
                    <p>Nom et prenom de Propriétaire</p>
                </div>

                <form className="profile-form" onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label>Nom complet</label>
                        <input
                            type="text"
                            name="fullname"
                            value={owner.fullname}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={owner.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Téléphone</label>
                        <input
                            type="text"
                            name="phone"
                            value={owner.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Ville</label>
                        <input
                            type="text"
                            name="city"
                            value={owner.city}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Biographie</label>
                        <textarea
                            name="bio"
                            rows="4"
                            value={owner.bio}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <button type="submit" className="save-btn">
                        Sauvegarder
                    </button>

                </form>
            </div>
        </div>
    );
};

export default Profil;