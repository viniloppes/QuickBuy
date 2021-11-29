using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Dominio.Entities
{
    public class Produto
    {
        public int Id { get; set; }
        public string  Nome { get; set; }
        public string Descricao { get; set; }
        public Decimal Preco { get; set; }
    }
}
