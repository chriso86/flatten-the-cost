using Flatten.The.Cost.Lib.Infrastructure.Repositories;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace Flatten.The.Cost.Lib.Infrastructure.Services
{
    public static class ServiceInjector
    {
        public static void RegisterServicesForDependencyInjection(IServiceCollection services)
        {
            // Register repositories with injector
            services.AddScoped<FtcDbContext>();
            services.AddScoped<ArticleRepository>();
            services.AddScoped<CommentRepository>();
            services.AddScoped<FlagRepository>();
            services.AddScoped<TagRepository>();
            services.AddScoped<UserRepository>();
        }
    }
}
