using News.Models;
using News.Contracts;
using News.Services;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace News.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class NewsController : ControllerBase
    {
        private readonly INewsService _newsService;

        public NewsController(INewsService newsService)
        {
            _newsService = newsService;
        }

        [HttpGet]
        public async Task<ActionResult<List<NewsResponse>>> GetNews()
        {
            var news = await _newsService.GetAllNews();

            var response = news.Select(p => new NewsResponse(p.Id, p.Title, p.Description, p.Author));

            return Ok(response);
        }

        [HttpPost]
        public async Task<ActionResult> CreateNews([FromBody] NewsRequest request)
        {
            var (news, error) = NewsItem.Create(Guid.NewGuid(), request.Title, request.Author, request.Description);

            if (!string.IsNullOrEmpty(error))
            {
                return BadRequest(error);
            }
            await _newsService.CreateNews(news);
            return Ok();
        }

        [HttpPut("{id:Guid}")]
        public async Task<ActionResult> UpdateNews(Guid id, [FromBody] NewsRequest request)
        {
            await _newsService.UpdateNews(id, request.Title, request.Author, request.Description);

            return NoContent();

        }

        [HttpDelete("{id:Guid}")]
        public async Task<ActionResult> DeleteNews(Guid id)
        {
            await _newsService.DeleteNews(id);
            return NoContent();
        }
    }
}