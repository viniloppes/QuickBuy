﻿using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Dominio.Entities
{
    public class Produto : Entidade
    {
        public int Id { get; set; }
        public string  Nome { get; set; }
        public string Descricao { get; set; }
        public Decimal Preco { get; set; }

        public override void Validate()
        {
            if (string.IsNullOrEmpty(Nome))
                AdicionarCritica("Nome do produto não foi informado");

            if (string.IsNullOrEmpty(Descricao))
                AdicionarCritica("Descrição não foi informado");
        }
    }
}
