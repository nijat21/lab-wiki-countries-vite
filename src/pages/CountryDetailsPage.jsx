import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function CountryDetails() {
    const { countryId } = useParams();
    const [countryFound, setCountryFound] = useState(null);

    useEffect(() => {
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
            .then((response) => {
                console.log(response.data);
                setCountryFound(response.data);
            })
            .catch((err) => console.log(err));
    }, [countryId])

    return (
        <>
            <div className="container">
                <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>
                {countryFound && (
                    <>
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${countryFound.alpha2Code.toLowerCase()}.png`} alt="" />
                        <h1>{countryFound.name.common}</h1>
                        <table className="table">
                            <thead>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ width: "30%" }}>Capital</td>
                                    <td>{countryFound.capital}</td>
                                </tr>
                                <tr>
                                    <td>Area</td>
                                    <td>{countryFound.area}</td>
                                </tr>
                                <tr>
                                    <td>Borders</td>
                                    <td>{countryFound.borders}</td>
                                </tr>
                            </tbody>
                            <tfoot></tfoot>
                        </table>
                    </>
                )}
            </div>
        </>
    )
}

export default CountryDetails;
