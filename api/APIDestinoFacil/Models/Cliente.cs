using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.ObjectModel;
using System.Text.Json.Serialization;

namespace APIDestinoFacil.Models
{
    [Table("Clientes")]
    public class Cliente
    {
        [Key]
        public long ClienteId { get; set; }

        [Required]
        [StringLength(128)]
        public string Nome { get; set; }

        [Required]
        [StringLength(128)]
        public string Email { get; set; }

        [Required]
        [StringLength(128)]
        public string Senha { get; set; }

        [JsonIgnore]
        public List<Compra> Compras { get; set; }
    }
}
