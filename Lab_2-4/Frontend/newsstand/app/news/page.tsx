"use client"

import Button from "antd/es/button/button"
import { News } from "../components/News"
import { useEffect, useState } from "react"
import { getAllNews, NewsRequest, createNews, updateNews, deleteNews } from "../services/news";
import Title from "antd/es/typography/Title";
import { CreateUpdateNewsItem, Mode } from "../components/CreateUpdateNewsItem";

export default function NewsPage() {
    const defaultValues = {
        title: "",
        description: "",
        author: "",
    } as NewsItem;

    const [values, setValues] = useState<NewsItem>(defaultValues);
    const [news, setNews] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModelOpen, setIsModalOpen] = useState(false);
    const [mode, setMode] = useState(Mode.Create);

    useEffect(() => {
        const getNews = async () => {
            const arts = await getAllNews();
            setLoading(false);
            setNews(arts);
        };

        getNews();
    }, []);

    const handleCreateNewsItem = async (request: NewsRequest) => {
        await createNews(request);
        closeModal();
        const news = await getAllNews();
        setNews(news);
    };

    const handleUpdateNewsItem = async (id: string, request: NewsRequest) => {
        await updateNews(id, request);
        closeModal();
        const news = await getAllNews();
        setNews(news);
    };

    const handleDeleteNewsItem = async (id: string) => {
        await deleteNews(id);
        closeModal();
        const news = await getAllNews();
        setNews(news);
    };

    const openModal = () => {
        setMode(Mode.Create); // Устанавливаем режим "Create"
        setValues(defaultValues); // Сбрасываем значения формы
        setIsModalOpen(true); // Открываем модальное окно
    };

    const closeModal = () => {
        setValues(defaultValues); // Сбрасываем значения формы при закрытии
        setIsModalOpen(false); // Закрываем модальное окно
    };

    const openEditModal = (newsItem: NewsItem) => {
        setMode(Mode.Edit); // Устанавливаем режим "Edit"
        setValues(newsItem); // Заполняем форму данными новости
        setIsModalOpen(true); // Открываем модальное окно
    };

    return (
        <div>
            <Button onClick={openModal}>Create News</Button> {/* Добавлено событие для открытия модального окна */}

            <CreateUpdateNewsItem
                mode={mode}
                values={values}
                isModelOpen={isModelOpen}
                handleCreate={handleCreateNewsItem}
                handleUpdate={handleUpdateNewsItem}
                handleCancel={closeModal}
            />

            {loading ? (<Title>Loading...</Title>) : (<News news={news} handleDelete={handleDeleteNewsItem} handleOpen={openEditModal} />)}
        </div>
    );
}
