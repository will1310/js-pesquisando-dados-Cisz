function procuraSobremesa(sobremesas, valorDoInput) {
  const sobremesaProcurada = sobremesas.filter((item) => 
  item.nome.toLowerCase().includes(valorDoInput.toLowerCase())
);

  return sobremesaProcurada; /* É necessário retornar uma lista de produtos */
}
