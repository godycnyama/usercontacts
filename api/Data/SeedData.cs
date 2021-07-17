using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;
using Api.Data.Models;

namespace Api.Data
{
    public static class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new DataContext(
                serviceProvider.GetRequiredService<
                    DbContextOptions<DataContext>>()))
            {
                // Look for any users.
                if (context.Users.Any())
                {
                    return;   // DB has been seeded
                }

                context.Users.AddRange(
                    new User
                    {
                        First_Name = "Godknows",
                        Last_Name = "Nyamatendedza",
                        Date_Of_Birth = "27/05/1977",
                        Email_Address = "godycnyama@gmail.com",
                        Address = "20H Sun and Surf",
                        City = "Ballito",
                        Country = "South Africa",
                        Zip_Code = "4420"
                    },
                    new User
                    {
                        First_Name = "Kudakwashe",
                        Last_Name = "Nyamatendedza",
                        Date_Of_Birth = "14/01/1983",
                        Email_Address = "knyamatendedza@gmail.com",
                        Address = "20H Sun and Surf",
                        City = "Ballito",
                        Country = "South Africa",
                        Zip_Code = "4420"
                    },
                    new User
                    {
                        First_Name = "Cheryl",
                        Last_Name = "Nyamatendedza",
                        Date_Of_Birth = "05/01/2011",
                        Email_Address = "cnyamatendedza@gmail.com",
                        Address = "20H Sun and Surf",
                        City = "Ballito",
                        Country = "South Africa",
                        Zip_Code = "4420"
                    },
                    new User
                    {
                        First_Name = "Shanique",
                        Last_Name = "Nyamatendedza",
                        Date_Of_Birth = "28/08/2019",
                        Email_Address = "snyamatendedza@gmail.com",
                        Address = "20H Sun and Surf",
                        City = "Ballito",
                        Country = "South Africa",
                        Zip_Code = "4420"
                    },
                    new User
                    {
                        First_Name = "Emma",
                        Last_Name = "Dunham",
                        Date_Of_Birth = "31/03/1980",
                        Email_Address = "emma.dunham@vtgrafix.gov",
                        Address = "76 Sherman Road",
                        City = "Hastings",
                        Country = "Aruba",
                        Zip_Code = "4420"
                    },
                    new User
                    {
                        First_Name = "Emma",
                        Last_Name = "Dunham",
                        Date_Of_Birth = "31/03/1980",
                        Email_Address = "emma.dunham@vtgrafix.gov",
                        Address = "76 Sherman Road",
                        City = "Hastings",
                        Country = "Canada",
                        Zip_Code = "4420"
                    },
                    new User
                    {
                        First_Name = "Ivan",
                        Last_Name = "Risley",
                        Date_Of_Birth = "09/08/1985",
                        Email_Address = "ivan.risley@nitrosystems.co",
                        Address = "18 Hartswood Road",
                        City = "Stanford",
                        Country = "Algeria",
                        Zip_Code = "04346"
                    },
                    new User
                    {
                        First_Name = "Rikki",
                        Last_Name = "Paquette",
                        Date_Of_Birth = "18/09/1963",
                        Email_Address = "rikki.paquette@anaplex.xyz",
                        Address = "56 Canal Street",
                        City = "London",
                        Country = "Iceland",
                        Zip_Code = "16935"
                    },
                    new User
                    {
                        First_Name = "Roman",
                        Last_Name = "Bourne",
                        Date_Of_Birth = "18/09/1963",
                        Email_Address = "roman.bourne@baramax.co",
                        Address = "55 Wooster Road",
                        City = "Adelaide",
                        Country = "Eritrea",
                        Zip_Code = "46446"
                    },
                    new User
                    {
                        First_Name = "Lyn",
                        Last_Name = "Chapman",
                        Date_Of_Birth = "12/05/1955",
                        Email_Address = "lyn.chapman@loopsys.xyz",
                        Address = "31 Bramble Lane",
                        City = "Auckland",
                        Country = "Netherlands",
                        Zip_Code = "45893"
                    },
                    new User
                    {
                        First_Name = "Rosie",
                        Last_Name = "Finn",
                        Date_Of_Birth = "15/02/1981",
                        Email_Address = "rosie.finn@sealine.co",
                        Address = "42 Walford Way",
                        City = "Beaverton",
                        Country = "France",
                        Zip_Code = "10697"
                    },
                    new User
                    {
                        First_Name = "Cedric",
                        Last_Name = "Webster",
                        Date_Of_Birth = "18/05/1956",
                        Email_Address = "cedric.webster@solexis.co",
                        Address = "38 Colwood Place",
                        City = "Wilmington",
                        Country = "Guatemala",
                        Zip_Code = "01521"
                    },
                    new User
                    {
                        First_Name = "Stan",
                        Last_Name = "Milling",
                        Date_Of_Birth = "23/09/1963",
                        Email_Address = "stan.milling@corerobotics.gov",
                        Address = "85 Golden Lane",
                        City = "Medford",
                        Country = "Nigeria",
                        Zip_Code = "29916"
                    },
                    new User
                    {
                        First_Name = "Jenette",
                        Last_Name = "Oldman",
                        Date_Of_Birth = "16/05/1985",
                        Email_Address = "jenette.oldman@hivemind.biz",
                        Address = "50 Mount Street",
                        City = "Woodville",
                        Country = "Puerto Rico",
                        Zip_Code = "47870"
                    },
                    new User
                    {
                        First_Name = "Max",
                        Last_Name = "Hyder",
                        Date_Of_Birth = "13/12/1984",
                        Email_Address = "max.hyder@polycore.gov",
                        Address = "30 Buckley Street",
                        City = "Tacoma",
                        Country = "Latvia",
                        Zip_Code = "73729"
                    },
                    new User
                    {
                        First_Name = "Juliana",
                        Last_Name = "Kelsey",
                        Date_Of_Birth = "03/01/1982",
                        Email_Address = "juliana.kelsey@grafixmedia.xyz",
                        Address = "26 Mercer Street",
                        City = "Hobart",
                        Country = "Hong Kong",
                        Zip_Code = "98550"
                    }
                 );
                context.SaveChanges();
            }
        }
    }
}