class Event {
  final int id;
  final String nome;
  final String descricao;
  final DateTime dataHora;
  final Address endereco;
  final String status;
  final Object valorEntrada;
  final int ticketsVendidos;

  Event({
    required this.id,
    required this.nome,
    required this.descricao,
    required this.dataHora,
    required this.endereco,
    required this.status,
    required this.valorEntrada,
    required this.ticketsVendidos,
  });
}

class Address {
  final int id;
  final String cep;
  final String logradouro;
  final String numero;
  final String bairro;
  final String cidade;
  final String uf;
  final String complemento;
  final String referencia;

  Address({
    required this.id,
    required this.cep,
    required this.logradouro,
    required this.numero,
    required this.bairro,
    required this.cidade,
    required this.uf,
    required this.complemento,
    required this.referencia,
  });
}
