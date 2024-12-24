using News.Models;
using Microsoft.EntityFrameworkCore;
namespace News.DBcontext
{
    public class NewsDbContext : DbContext   //NewsDbContext наследуется от DbContext из пакета Microsoft.EntityFrameworkCore
    {

        public NewsDbContext(DbContextOptions options) : base(options) { }
        public DbSet<NewsItem> NewsItems { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)  //Fluent API, настрока конфигурации модели News
        {
            base.OnModelCreating(modelBuilder);


            modelBuilder.Entity<NewsItem>().HasKey(p => p.Id);   //Первичный ключ

            modelBuilder.Entity<NewsItem>().Property(p => p.Title)
                .IsRequired()
                .HasColumnName("NewsTitle")
                .HasMaxLength(200);

            modelBuilder.Entity<NewsItem>().Property(p => p.Author)
                .IsRequired()
                .HasColumnName("NewsAuthor")
                .HasMaxLength(50);

            modelBuilder.Entity<NewsItem>().Property(p => p.Description)
                .IsRequired()
                .HasColumnName("NewsDescription")
                .HasMaxLength(1000);

        }
    }
}
