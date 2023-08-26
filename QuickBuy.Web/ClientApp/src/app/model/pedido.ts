import { ItemPedido } from "./itemPedido";


export class Pedido {
  //public int Id { get; set; }
  //      public DateTime DataPedido { get; set; }
  //      public int UsuarioId { get; set; }
  //      public virtual Usuario Usuario { get; set; }
  //      public DateTime DataPevisaoEntrega { get; set; }
  //      public string CEP { get; set; }
  //      public string Estado { get; set; }
  //      public string Cidade { get; set; }
  //      public string EnderecoCompleto { get; set; }
  //      public int NumeroEndereco { get; set; }

  //      public int FormaPagamentoId { get; set; }
  //      public virtual FormaPagamento FormaPagamento { get; set; }

  int: number;
  dataPedido: Date;
  usuarioId: number;
  dataPrevisaoEntrega: Date;
  cep: string;
  estado: string;
  cidade: string;
  enderecoCompleto: string;
  numeroEndereco: string;
  formaPagamentoId: number;
  itensPedido: ItemPedido[];

  constructor() {
    this.dataPedido = new Date();
    this.itensPedido = [];
  }
}
