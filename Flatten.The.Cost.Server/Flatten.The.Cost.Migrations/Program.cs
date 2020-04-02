using Flatten.The.Cost.Lib.Infrastructure;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Configuration;
using Flatten.The.Cost.Lib.Infrastructure.Services;

namespace Flatten.The.Cost.Migrations
{
    class Program
    {
        public static readonly ILoggerFactory FtcLoggerFactory
            = LoggerFactory.Create(builder =>
            {
                builder
                    .AddFilter((category, level) =>
                        category == DbLoggerCategory.Database.Command.Name
                        && level == LogLevel.Information)
                    .AddConsole();
            });

        public static void Main(string[] args)
        {

            CreateHostBuilder(args)
                .Build()
                .MigrateDatabase()
                .Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
        Host.CreateDefaultBuilder(args)
            .ConfigureServices((hostContext, services) =>
            {
                services.AddDbContext<FtcDbContext>(options =>
                    options
                    .UseLoggerFactory(FtcLoggerFactory)
                    .UseSqlServer(
                        "Server=.;Database=FtcCoreDb;User Id=applogin;Password=test@123;",
                        x => x.MigrationsAssembly("Flatten.The.Cost.Migrations")
                        ));

                // Register services with dependency injector
                ServiceInjector.RegisterServicesForDependencyInjection(services);
            });
    }
}
