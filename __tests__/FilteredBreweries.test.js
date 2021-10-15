
import {FilteredBreweries} from "../src/FilteredBreweries";

const breweries = [
    {
        longitude: null,
        latitude: null,
    },
      {
         
        longitude: '-75.90904644',
        latitude: '43.97475173',
       
      }
]

const filteredBreweries = [
    {
        
        longitude: '-75.90904644',
        latitude: '43.97475173',
        
      }
]




test('Create an Inventroy Object', () =>{
    expect(FilteredBreweries(breweries)).toStrictEqual(filteredBreweries)
})