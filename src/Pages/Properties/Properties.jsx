import { useEffect, useState } from "react";

const Properties = () => {
    const [propertie , setPropertie] = useState([])
    useEffect( () => {
        fetch('Properties.json')
        .then(res => res.json())
        .then(data => setPropertie(data))

    },[])
    console.log(propertie);

    return (
        <div>
            <h2>{propertie.length}</h2>
        </div>
    );
};

export default Properties;