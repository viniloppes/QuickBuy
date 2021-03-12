using QuickBuy.Dominio.ObjetoDeValor;
using System;
using System.Collections.Generic;

namespace QuickBuy.Dominio.Entidades
{
    class Pedido
    {
        public int Id { get; set; }
        public DateTime DataPedido { get; set; }
        public int UsuarioId { get; set; }

        public DateTime DataPrevisãoEntrega { get; set; }

        public string Estado { get; set; }
        public string Cidade { get; set; }
        public string EndereçoCompleto { get; set; }
        public int NumeroCompleto { get; set; }

        public int FormaPagamentoId { get; set; }

        public FormaPagamento FormaPagamento { get; set; }
        //                                
        //Pedido deve ter pelo menos um Pedido
        //ou muitos pedidos

        public ICollection<ItemPedido> ItensPedido { get; set; }
    }
}
