import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";

const About = () => {

    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        const data = await fetch("https://api.github.com/users/manish-rnc");
        const profile = await data.json();
        console.log(profile);
        setProfileData(profile);
    }

    if (profileData === null) {
        return <Shimmer />;
    }

    return (
        <div className="m-4 p-4">
            <h1 className="font-bold text-2xl m-2 pb-8">Savory Swift - An Online food delivery website</h1>
            <p className="font-md text-xl">Developed By -</p>
            <img src={profileData.avatar_url} className="h-32" />
            <h1 className="font-bold text-xl">{profileData.name}</h1>
            <p className="font-semibold text-md">{profileData.location}</p>
        </div>
    )
};

export default About;