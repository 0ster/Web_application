import Card from "antd/es/card/Card"
import { CardTitle } from "./Card_Title"
import Button from "antd/es/button/button";

interface Props{
    news: NewsItem[]
    handleDelete: (id: string) => void;
    handleOpen: (newsItem: NewsItem) => void;
}

export const News = ({news, handleDelete, handleOpen}: Props) => {
    return (
        <div className="cards">
            {news.map((newsItem: NewsItem) => (
                <Card
                    key={newsItem.id}
                    title={<CardTitle title={newsItem.title} author={newsItem.author} />}
                    bordered={false}
                >
                    <p>{newsItem.description}</p>
                    <div className="card_buttons">
                        <Button 
                            onClick={() => handleOpen(newsItem)}  // Убедитесь, что передаете правильный объект newsItem
                            style={{ flex: 1 }}
                        >
                            Edit
                        </Button>
                        <Button 
                            onClick={() => handleDelete(newsItem.id)}  // Убедитесь, что передаете правильный ID
                            style={{ flex: 1 }}
                        >
                            Delete
                        </Button>
                    </div>
                </Card>
            ))}
        </div>
    );
};
