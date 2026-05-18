class Ticket {
  final int id;
  final String comprador;
  final DateTime dataCompra;
  final String formaPagamento;
  final String status;
  final String qrCode;
  final String vendedor;

  Ticket({
    required this.id,
    required this.comprador,
    required this.dataCompra,
    required this.formaPagamento,
    required this.status,
    required this.qrCode,
    required this.vendedor,
  });
}
