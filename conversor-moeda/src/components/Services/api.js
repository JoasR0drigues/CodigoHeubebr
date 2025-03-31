import axios from "axios";

export default async function getCotacao(){
var url = "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL";

var results = []

await axios.get(url)
.then(function(response){
    const data = response.data
    const ask = data.USD.ask
    const moeda = data.USD.name

    results = [ask, name]
    console.log("cotacao do dia")
    console.log(ask)
    console.log(name)

    results.push({
        
    })
    


})
.cath(function(error){
    console.log(error)
})


}