using Microsoft.Extensions.FileProviders;
using Vite.AspNetCore.Extensions;

namespace EducationTrail
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddControllersWithViews();
            builder.Services.AddViteServices();

            var app = builder.Build();

            // Danny do we need this code below??
            // Configure the HTTP request pipeline.
            //if (!app.Environment.IsDevelopment())
            //{
            //    app.UseExceptionHandler("/Home/Error");
            //    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
            //    app.UseHsts();
            //}

            if (!app.Environment.IsDevelopment())
            {
                var webRootProvider = new PhysicalFileProvider(Path.Combine(builder.Environment.ContentRootPath, "wwwroot"));
                var distProvider = new PhysicalFileProvider(Path.Combine(builder.Environment.ContentRootPath, "dist"));
                var compositeProvider = new CompositeFileProvider(webRootProvider, distProvider);
                app.Environment.WebRootFileProvider = compositeProvider;
                app.Environment.WebRootPath = distProvider.Root;
            }

            if (app.Environment.IsDevelopment())
            {
                app.UseViteDevMiddleware();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.MapControllerRoute(
                name: "default",
                pattern: "{controller=Home}/{action=Index}/{id?}");

            app.Run();

        }
    }
}