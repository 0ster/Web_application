namespace News.Models
{
    public class NewsItem
    {
        const int MAX_TITLE_LENGTH = 200;
        const int MAX_AUTHOR_NAME_LENGTH = 50;
        const int MAX_DESCRIPTION_LENGTH = 1000;

        private NewsItem(Guid id, string title, string author, string description)
        {
            Id = id;
            Title = title;
            Author = author;
            Description = description;
        }

        public Guid Id { get; set; }

        public string Title { get; set; }

        public string Author { get; set; }

        public string Description { get; set; }

        public static (NewsItem newsItem, string error) Create(Guid id, string title, string author, string description)
        {

            var error = string.Empty;
            var newsItem = new NewsItem(id, title, author, description);

            if (string.IsNullOrEmpty(title) || title.Length > MAX_TITLE_LENGTH)
            {
                error = "Заголовок не может быть пустым или превышать максимальное число символов = 200";
            }

            if (string.IsNullOrEmpty(author) || author.Length > MAX_AUTHOR_NAME_LENGTH)
            {
                error = "Заголовок не может быть пустым или превышать максимальное число символов = 200";
            }

            if (string.IsNullOrEmpty(description) || description.Length > MAX_DESCRIPTION_LENGTH)
            {
                error = "Описание не может быть пустым или превышать максимальное число символов = 1000";
            }

            return (newsItem, error);
        }

    }
}