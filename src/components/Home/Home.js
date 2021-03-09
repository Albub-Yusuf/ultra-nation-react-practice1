import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import { Button, Container } from '@material-ui/core';

const Home = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{

        fetch('https://restcountries.eu/rest/v2/all')
        .then(res=>res.json())
        .then(data=> setCountries(data))
        console.log(countries);

    },[])

    return (
        <Container fixed>
            <div>
            <h3 style={{textAlign:'center'}}>Total Countries : {countries.length}</h3>

           <div  style={{display: 'flex', flexWrap: 'wrap'}}>
           {
                countries.map(country => <Country key={country.alpha3Code} country={country}></Country>)
            }
           </div>
        </div>
        </Container>
    );
};

export default Home;