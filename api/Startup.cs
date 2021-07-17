using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Microsoft.EntityFrameworkCore;
using HotChocolate.Types;
using HotChocolate.Types.Pagination;
using Api.Data;
using Api.Features.Users.Service;
using Api.Features.Users;
using Api.Utilities;

namespace Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(c =>
            {
                c.AddPolicy("AllowOrigin", options => options.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
            });
            services.AddDbContext<DataContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("MyUsersDatabase"), options => options.EnableRetryOnFailure()));
            services.AddGraphQLServer()
                    .AddFiltering()
                    .AddSorting()
                    .AddProjections()
                    .AddQueryType(d => d.Name("Query"))
                    .AddType<UserQueries>()
                    .AddMutationType(d => d.Name("Mutation"))
                    .AddType<UserMutations>()
                    .SetPagingOptions(
                            new PagingOptions
                            {
                                MaxPageSize = 50,
                                DefaultPageSize = 50,
                                IncludeTotalCount = true
                            });
            services.AddErrorFilter<GraphQLErrorFilter>();
            services.AddScoped<IUsersService, UsersService>();
            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors("AllowOrigin");

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapGraphQL();
            });
        }
    }
}
