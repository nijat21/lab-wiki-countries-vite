import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function HomePage() {
    const [countries, setCountries] = useState(null);

    useEffect(() => {
        axios.get("https://ih-countries-api.herokuapp.com/countries")
            .then((response) => {
                console.log(response.data);
                setCountries(response.data);
            })
            .catch((err) => console.log(err));
    }, [])


    return (
        <div className="container" style={{ maxHeight: "90vh", overflow: scroll }}>
            <h1 style={{ fontSize: "24px" }}>Your Guide to the World</h1>

            <div className="listGroup">
                {countries &&
                    (countries.map((country) => {
                        return (
                            <>
                                <Link to={`/${country.alpha3Code}`} className="list-group-item list-group-item-action">
                                    <h3>
                                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
                                        {country.name.common}</h3>
                                </Link>
                            </>
                        )
                    }))
                }
            </div>
        </div>
    )
}

export default HomePage;
