export default async function getCotacao(){
    try {
        const url = "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL";
        const response = await fetch(url);
        const data = await response.json();
        
        const cotacaoDolar = parseFloat(data.USDBRL.ask);
        const cotacaoEuro = parseFloat(data.EURBRL.ask);
        const cotacaoBitcoin = parseFloat(data.BTCBRL.ask);

        return [cotacaoDolar, "Cotação atualizada com sucesso!"];
    } catch (error) {
        console.error("Erro ao buscar cotação:", error);
        return [0, "Erro ao conectar com o servidor"];
    }
}