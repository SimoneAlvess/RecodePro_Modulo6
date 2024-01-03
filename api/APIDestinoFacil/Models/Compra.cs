using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace APIDestinoFacil.Models
{
    [Table("Compras")]
    public class Compra
    {
        [Key]
        public long CompraId { get; set; }

        [Required]
        public DateTime DataHoraViagem { get; set; }

        [Required]
        [StringLength(128)]
        public string FormaPagamento { get; set; }

        public long ClienteId { get; set; }

        [JsonIgnore]
        public Cliente Cliente { get; set; }

        public long DestinoId { get; set; }

        [JsonIgnore]
        public Destino Destino { get; set; }

    }
}
