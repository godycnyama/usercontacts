using System;
using System.Threading.Tasks;
using HotChocolate;
using HotChocolate.Types;
using Api.Data.Inputs;
using Api.Data.Outputs;
using Api.Features.Users.Service;

namespace Api.Features.Users
{
    [ExtendObjectType(Name = "Mutation")]
    public class UserMutations
    {
        private readonly IUsersService _usersService;
        public UserMutations([Service]IUsersService usersService)
        {
            _usersService = usersService;
        }

        public async Task<MessageOutput> CreateUser(UserInput userInput)
        {
            try
            {
                return await _usersService.AddUser(userInput);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<MessageOutput> UpdateUser(int userID, UserInput userInput)
        {
            try
            {
                return await _usersService.UpdateUser(userID, userInput);
                
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<MessageOutput> DeleteUser(int userID)
        {
            try
            {
                return await _usersService.DeleteUser(userID);
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
