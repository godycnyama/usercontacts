using System.Linq;
using System.Threading.Tasks;
using Api.Data.Models;
using Api.Data.Inputs;
using Api.Data.Outputs;

namespace Api.Features.Users.Service
{
    public interface IUsersService
    {
        public IQueryable<User> GetUsers();
        public Task<MessageOutput> AddUser(UserInput userInput);
        public Task<MessageOutput> UpdateUser(int userID, UserInput userInput);
        public Task<MessageOutput> DeleteUser(int userID);
    }
}
