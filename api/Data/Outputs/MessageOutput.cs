using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HotChocolate;

namespace Api.Data.Outputs
{
    public class MessageOutput
    {
        [GraphQLNonNullType]
        [Required]
        public string Message { get; set; }
    }
}
