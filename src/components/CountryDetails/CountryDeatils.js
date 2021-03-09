import { Button, Container, Fab } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './CountryDetails.css'

const CountryDeatils = () => {
    
    const {cname}= useParams('');
    
    

const [country, setCountry] = useState([]);    

    useEffect(()=>{

        const url = `https://restcountries.eu/rest/v2/name/${cname}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data))
    
    },[])

    let name,  flag, capital, population, area, region, subregion, borders, languages;

   

   country.map( country => {

      return  {  name, flag, capital, population, area, region, subregion, borders, languages} = country;
     
    
   })

const language=[];
const border=[];
if(languages){
    for(let i=0; i<languages.length; i++){

       var langs = languages[i]?.name;

        language.push(langs);
    
    }
}

if(borders){
    for(let i=0; i<borders.length; i++){

       var brd = borders[i];

        border.push(brd);
    
    }
}

   const cStyle = {

        width: '60%',
        margin : '20px',
        padding : '50px',
        boxShadow : '10px 10px 40px grey'

   }


    return (

       
        <Container fixed>
        <div>
          <br/><br/>
        <h2 style={{textAlign:'center'}}>Showing the details of : {name}</h2>
        <div className="country-detail">
      
            
            <div className="county-flag">
              <img style={{width:'80%'}} src={flag} alt=""/> 
            </div>
            <div className="country-info">
                <p>Name : {name}</p>
            <p>Capital : {capital}</p>
             <p>Population : {population}</p>
             <p>Area : {area}</p>
             <p>Region : {region}</p>
             <div>Borders : { border.map((border) => <span style={{marginLeft:'5px', padding:'3px', borderRadius:'5px',textAlign:'center', background:'dimGrey',color:'white'}} key={country.alpha3Code}> {border}  </span>)}</div>
             <p>Subregion : {subregion}</p> 
             <p>Languages :  
             {
                 language.map((language) => <span key={country.alpha3Code}> {language}, </span>)
             }
             </p> 
            <Link to={`/`} ><Button variant="contained" color="primary">Back</Button></Link>
    
           
            </div>

             
            
        </div>
      </div>
        </Container>
   
    );
};

export default CountryDeatils;