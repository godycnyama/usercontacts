using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Data.Models;
using Api.Data.Inputs;
using Api.Data.Outputs;
using Api.Data;

namespace Api.Features.Users.Service
{
    public class UsersService: IUsersService
    {
        private readonly DataContext _db;
        public UsersService(DataContext db)
        {
            _db = db;
        }

        //Get filtered Users records
        public IQueryable<User> GetUsers()
        {
            return _db.Users; ;
        }

        //Add new User record     
        public async Task<MessageOutput> AddUser(UserInput userInput)
        {
            //check if User record exists
            User _user = _db.Users.FirstOrDefault(c => c.First_Name == userInput.First_Name && c.Last_Name == userInput.Last_Name);
            if (_user != null)
            {
                throw new Exception($"User {_user.First_Name} {_user.Last_Name} already exists! ");
            }

            User _newUser = new User
            {
                First_Name = userInput.First_Name,
                Last_Name = userInput.First_Name,
                Date_Of_Birth = userInput.Date_Of_Birth,
                Email_Address = userInput.Email_Address,
                Address = userInput.Address,
                City = userInput.City,
                Country = userInput.Country,
                Zip_Code = userInput.Zip_Code
            };
            await _db.Users.AddAsync(_newUser);
            await _db.SaveChangesAsync();
            return new MessageOutput {
                Message = $"User {_newUser.First_Name} {_newUser.Last_Name} added successfully!"
            };
        }

        //Update User record  
        public async Task<MessageOutput> UpdateUser(int userID, UserInput userInput)
        {
            //check if User exists
            User _user = await _db.Users.FindAsync(userID);
            if (_user == null)
            {
                throw new Exception("User not found");
            }
            _user.First_Name = userInput.First_Name;
            _user.Last_Name = userInput.First_Name;
            _user.Date_Of_Birth = userInput.Date_Of_Birth;
            _user.Email_Address = userInput.Email_Address;
            _user.Address = userInput.Address;
            _user.City = userInput.City;
            _user.Country = userInput.Country;
            _user.Zip_Code = userInput.Zip_Code;
            await _db.SaveChangesAsync();
            return new MessageOutput
            {
                Message = $"User {_user.First_Name} {_user.Last_Name} updated successfully!"
            };
        }
      
        //Delete User record     
        public async Task<MessageOutput> DeleteUser(int userID)
        {
            //check if User exists
            User _user = await _db.Users.FindAsync(userID);
            if (_user == null)
            {
                throw new Exception("User not found");
            }
            _db.Users.Remove(_user);
            await _db.SaveChangesAsync();
            return new MessageOutput
            {
                Message = $"User {_user.First_Name} {_user.Last_Name} deleted successfully!"
            };
        }
    }
}
