import api from "../api";

export async function salvarProduto (produto){
    try{
        const resultado = await api.post('/produtos', produto)
        return resultado.data;
    }
    catch(error){
        console.error(error);
        return {}
    }
    
}

export async function pegarProdutos (){
    try{
        const resultado = await api.get('/produtos');
        return resultado.data;
    }
    catch(error){
        console.error(error);
        return []
    }
    
}

export async function deletarProduto (id){
    try{
        await api.delete(`/produtos/${id}`);
    }
    catch(error){
        console.error(error);
    }
    
}