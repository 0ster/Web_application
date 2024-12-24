using News.Models;

namespace News.Repositories
{
    public interface INewsRepository
    {
        Task Create(NewsItem newItem);
        Task<List<NewsItem>> GetNews();
        Task Update(Guid id, string title, string author, string description);
        Task Delete(Guid id);
    }
}