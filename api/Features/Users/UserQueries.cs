using System;
using System.Linq;
using System.Threading.Tasks;
using HotChocolate;
using HotChocolate.Data;
using HotChocolate.Types;
using HotChocolate.Types.Relay;
using Microsoft.AspNetCore.Http;
using Api.Data.Inputs;
using Api.Data.Models;
using Api.Features.Users.Service;

namespace Api.Features.Users
{
    [ExtendObjectType(Name = "Query")]
    public class UserQueries
    {
        [UsePaging]
        [UseFiltering]
        [UseSorting]
        public IQueryable<User> GetUsers([Service]IUsersService usersService)
        {
            return usersService.GetUsers();
        }
    }
}
