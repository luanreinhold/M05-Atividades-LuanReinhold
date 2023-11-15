class Produto {
    constructor(nome, preco) {
      this.nome = nome;
      this.preco = preco;
    }
  }
  
  class Cliente {
    constructor(nome, cpf) {
      this.nome = nome;
      this.cpf = cpf;
    }
  }
  
  class Venda {
    constructor(cliente, produtos) {
      this.cliente = cliente;
      this.produtos = produtos;
    }
  
    total() {
        let valorTotal = 0;
        for (let i = 0; i < this.produtos.length; i++) {
            valorTotal += this.produtos[i].price
        }
        return valorTotal
    }
  }
  
  const clientsStringJson = '[{"name":"Client 1", "cpf":"12345678901"},'+
    '{"name":"Client 2", "cpf":"10987654321"},'+
    '{"name":"Client 3", "cpf":"12345098765"},'+
    '{"name":"Client 4", "cpf":"12345098765"},'+
    '{"name":"Client 5", "cpf":"12345098765"},'+
    '{"name":"Client 6", "cpf":"12345098765"},'+
    '{"name":"Client 7", "cpf":"12345098765"},'+
    '{"name":"Client 8", "cpf":"12345098765"},'+
    '{"name":"Client 9", "cpf":"12345098765"},'+
    '{"name":"Client 10", "cpf":"12345098765"}]';
  
  const productsStringJson = '[{"name":"Product 1", "price":1.00},'+
    '{"name":"Product 2", "price":2.00},'+
    '{"name":"Product 3", "price":3.00},'+
    '{"name":"Product 4", "price":4.00},'+
    '{"name":"Product 5", "price":5.00},'+
    '{"name":"Product 6", "price":6.00},'+
    '{"name":"Product 7", "price":7.00},'+
    '{"name":"Product 8", "price":8.00},'+
    '{"name":"Product 9", "price":9.00},'+
    '{"name":"Product 10", "price":10.00}]';
  
  // converte as strings salvas para o formato Json com a função JSON.parse
  const clients = JSON.parse(clientsStringJson)
  const products = JSON.parse(productsStringJson)
  
  // instancia a classe chamada vendae passa dois parametros, 
  // sendo o primeiro o cliente na posição 1 do objeto Json, e o segundo parametro sendo todo o array de produtos da const productsStringJSon
  const venda = new Venda(clients[0], products);
  console.log(`O valor total da venda é de R$${venda.total()}.`);
  