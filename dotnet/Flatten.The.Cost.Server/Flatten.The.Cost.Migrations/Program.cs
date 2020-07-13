using Flatten.The.Cost.Lib.Infrastructure;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Configuration;
using Flatten.The.Cost.Lib.Infrastructure.Services;
using System.IO;

namespace Flatten.The.Cost.Migrations
{
    class Program
    {
        public IConfiguration Configuration { get; set; }

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
                IConfigurationRoot configuration = new ConfigurationBuilder().SetBasePath(Directory.GetCurrentDirectory()).AddJsonFile(@Directory.GetCurrentDirectory() + "/../Flatten.The.Cost.Rest/appsettings.json").Build();
                var connectionString = configuration.GetConnectionString("FtcDatabase");

                services.AddDbContext<FtcDbContext>(options =>
                    options
                    .UseLoggerFactory(FtcLoggerFactory)
                    .UseSqlServer(connectionString));

                // Register services with dependency injector
                ServiceInjector.RegisterServicesForDependencyInjection(services);
            });
    }
}
