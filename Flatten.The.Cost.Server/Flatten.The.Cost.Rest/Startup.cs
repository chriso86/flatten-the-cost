using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using Flatten.The.Cost.Lib.Infrastructure;
using Microsoft.Extensions.Logging.Console;
using Flatten.The.Cost.Lib.Infrastructure.Services;

namespace Fatten.The.Cost.Rest
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public static readonly LoggerFactory ContextLogger
            = new LoggerFactory(new[] 
            { 
                new ConsoleLoggerProvider((category, level) 
                    => category == DbLoggerCategory.Database.Command.Name
                        && level == LogLevel.Information, true)
            });

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<FtcDbContext>(options =>
                options
                .UseLoggerFactory(ContextLogger)
                .UseSqlServer(Configuration.GetConnectionString("FtcDatabase")));

            // Register services with dependency injector
            ServiceInjector.RegisterServicesForDependencyInjection(services);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseCors();
            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
