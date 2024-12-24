namespace News.Contracts
{
    public record NewsResponse(
        Guid Id,
        string Title,
        string Description,
        string Author);
}
