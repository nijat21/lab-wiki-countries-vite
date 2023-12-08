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
                <table className="table-bordered" style={{ width: "100%" }}>
                    <tbody>
                        {countries ?
                            (countries.map((country) => {
                                return (
                                    <tr style={{ height: "5vw" }} key={country.alpha3Code}>
                                        <td>
                                            <Link to={`/${country.alpha3Code}`} className="list-group-item list-group-item">
                                                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} style={{ width: "65px" }} />
                                                <h3 style={{ fontSize: "18px" }}>{country.name.common}</h3>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            }))
                            :
                            <p style={{ fontSize: "20px", marginTop: "100px" }}>Loading...</p>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default HomePage;
