using News.DBcontext;
using News.Models;
using Microsoft.EntityFrameworkCore;

namespace News.Repositories
{
    public class NewsRepository : INewsRepository
    {
        private readonly NewsDbContext _newsContext;

        //CRUD паттерн, использование LINQ
        public NewsRepository(NewsDbContext context)
        {
            _newsContext = context;
        }

        public async Task<List<NewsItem>> GetNews()
        {
            return await _newsContext.NewsItems
                 .AsNoTracking()
                 .ToListAsync();
        }

        public async Task Create(NewsItem newsItem)
        {
            _newsContext.NewsItems.Add(newsItem);
            await _newsContext.SaveChangesAsync();

        }

        public async Task Update(Guid id, string title, string author, string description)
        {
            await _newsContext.NewsItems
                .Where(p => p.Id == id)
                .ExecuteUpdateAsync(s => s
                    .SetProperty(p => p.Title, p => title)
                    .SetProperty(p => p.Author, p => author)
                    .SetProperty(p => p.Description, p => description));
        }

        public async Task Delete(Guid id)
        {
            await _newsContext.NewsItems
                .Where(p => p.Id == id)
                .ExecuteDeleteAsync();
        }
    }

}