import {Component} from "react"
import Selected from "./select"
import './index.css'
const countryAndCapitalsList = [
    {
      id: 'NEW_DELHI',
      capitalDisplayText: 'New Delhi',
      country: 'India',
    },
    {
      id: 'LONDON',
      capitalDisplayText: 'London',
      country: 'United Kingdom',
    },
    {
      id: 'PARIS',
      capitalDisplayText: 'Paris',
      country: 'France',
    },
    {
      id: 'KATHMANDU',
      capitalDisplayText: 'Kathmandu',
      country: 'Nepal',
    },
    {
      id: 'HELSINKI',
      capitalDisplayText: 'Helsinki',
      country: 'Finland'
    },
  ]
  
  // Write your code here
  class Capitals extends Component{
    state={country:"india"}
    display=(event)=>{
            const selected=event.target.value
            console.log(selected)
            const selectedCountry=countryAndCapitalsList.find(item=>item.capitalDisplayText===selected)
            console.log(selectedCountry)
            if(selectedCountry){
                this.setState({country:selectedCountry.country})
            }
           
    }
    render()
    {   const {country}=this.state
        console.log(country)
        return(
            <div className="container">
                <h1> country and Capitals</h1>
                <label htmlFor="cities">Choose a city:</label>
                <select id="cities" name="cities" onChange={this.display}>
                    {countryAndCapitalsList.map(item=>(<Selected  details={item} key={item.id} />))}
                </select>
                <p>{country}</p>

            </div>
        )
    }
  }
  export default Capitals