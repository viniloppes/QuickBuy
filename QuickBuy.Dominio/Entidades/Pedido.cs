using QuickBuy.Dominio.ObjetoDeValor;
using System;
using System.Collections.Generic;
using System.Linq;

namespace QuickBuy.Dominio.Entidades
{
    public class Pedido : Entidade
    {
        public int Id { get; set; }
        public DateTime DataPedido { get; set; }
        public int UsuarioId { get; set; }

        public DateTime DataPrevisãoEntrega { get; set; }

        public string CEP { get; set; }
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

        public override void Validate()
        {
            LimparMensagensValidacao();

            if (!ItensPedido.Any())
                AdicionarCriticaMensagem("Critica-Pedido não pode ficar sem item de pedido");
                
   
            if (string.IsNullOrEmpty(CEP))
                AdicionarCriticaMensagem("Critica-CEP deve estar preenchido");
        }
    }
}
