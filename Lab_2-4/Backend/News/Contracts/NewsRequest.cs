namespace News.Contracts
{
    public record NewsRequest(
        string Title,
        string Description,
        string Author);
}
