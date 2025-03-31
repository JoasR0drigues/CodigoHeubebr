export async function getCotacao() {
    try {
        const response = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL');
        const data = await response.json();
        
        if (data && data.USDBRL) {
            const cotacao = parseFloat(data.USDBRL.bid);
            return [cotacao, "Cotação atualizada com sucesso!"];
        } else {
            return [0, "Erro ao buscar cotação"];
        }
    } catch (error) {
        return [0, "Erro ao conectar com o servidor"];
    }
} 