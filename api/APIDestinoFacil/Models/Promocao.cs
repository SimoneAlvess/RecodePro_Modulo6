using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace APIDestinoFacil.Models
{
    [Table("Promocoes")]
    public class Promocao
    {
        [Key]
        public long PromocaoId { get; set; }

        [Required]
        public int Desconto { get; set; }

        [Required]
        public DateTime ValidadePromocao { get; set; }

        [Required]
        [StringLength(128)]
        public string Pacote { get; set; }

        [JsonIgnore]
        public List<Destino> Destinos { get; set; }

    }
}
