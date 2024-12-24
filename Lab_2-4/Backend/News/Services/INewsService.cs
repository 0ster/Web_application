using News.Models;

namespace News.Services
{
    public interface INewsService
    {
        Task CreateNews(NewsItem newsItems);
        Task DeleteNews(Guid id);
        Task<List<NewsItem>> GetAllNews();
        Task UpdateNews(Guid id, string title, string author, string description);
    }
}