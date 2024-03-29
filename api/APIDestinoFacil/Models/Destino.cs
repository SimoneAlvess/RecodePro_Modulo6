﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using System.Collections.ObjectModel;

namespace APIDestinoFacil.Models
{
    [Table("Destinos")]
    public class Destino
    {

        [Key]
        public long DestinoId { get; set; }

        [Required]
        [StringLength(128)]
        public string NomeDestino { get; set; }

        [Required]
        [Column(TypeName = "decimal(10,2)")]
        public decimal Preco { get; set; }

        [Required]
        [StringLength(128)]
        public string Transporte { get; set; }

        [Required]
        [StringLength(300)]
        public string UrlImagem { get; set; }

        [Required]
        [Column(TypeName = "decimal(10,2)")]
        public decimal PrecoTotal { get; set; }

        public long PromocaoId { get; set; }

        public Promocao Promocao { get; set; }

        [JsonIgnore]
        public List<Compra> Compras { get; set; }
    }
}
