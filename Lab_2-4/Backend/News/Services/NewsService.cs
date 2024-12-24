using News.Models;
using News.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace News.Services
{
    public class NewsService : INewsService
    {
        private readonly INewsRepository _newsRepository;

        public NewsService(INewsRepository newsRepository)
        {
            _newsRepository = newsRepository;
        }

        public async Task<List<NewsItem>> GetAllNews()
        {
            return await _newsRepository.GetNews();
        }

        public async Task CreateNews(NewsItem newsItem)
        {
            await _newsRepository.Create(newsItem);
        }

        public async Task UpdateNews(Guid id, string title, string author, string description)
        {
            await _newsRepository.Update(id, title, author, description);
        }

        public async Task DeleteNews(Guid id)
        {
            await _newsRepository.Delete(id);
        }
    }
}