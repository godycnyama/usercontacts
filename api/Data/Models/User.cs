using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HotChocolate;

namespace Api.Data.Models
{
    [Table("Users")]
    public class User
    {
        [GraphQLNonNullType]
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int UserID { get; set; }
        [GraphQLNonNullType]
        [Required]
        [MaxLength(50)]
        public string First_Name { get; set; }
        [GraphQLNonNullType]
        [Required]
        [MaxLength(50)]
        public string Last_Name { get; set; }
        [GraphQLNonNullType]
        [Required]
        [MaxLength(50)]
        public string Date_Of_Birth { get; set; }
        [GraphQLNonNullType]
        [Required]
        [MaxLength(50)]
        public string Email_Address { get; set; }
        [GraphQLNonNullType]
        [Required]
        [MaxLength(200)]
        public string Address { get; set; }
        [GraphQLNonNullType]
        [Required]
        [MaxLength(50)]
        public string City { get; set; }
        [GraphQLNonNullType]
        [Required]
        [MaxLength(50)]
        public string Country { get; set; }
        [GraphQLNonNullType]
        [Required]
        [MaxLength(10)]
        public string Zip_Code { get; set; }
    }
}
