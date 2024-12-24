import Modal from "antd/es/modal/Modal";
import { NewsRequest } from "../services/news";
import { useEffect, useState } from "react";
import Input from "antd/es/input/Input";
import TextArea from "antd/es/input/TextArea";

interface Props {
    mode: Mode;
    values: NewsItem;
    isModelOpen: boolean;
    handleCancel: () => void;
    handleCreate: (request: NewsRequest) => void;
    handleUpdate: (id: string, request: NewsRequest) => void;
}

export enum Mode {
    Create,
    Edit,
}

export const CreateUpdateNewsItem = ({
    mode,
    values,
    isModelOpen,
    handleCancel,
    handleCreate,
    handleUpdate,
}: Props) => {
    const [title, setTitle] = useState<string>(values.title || "");
    const [description, setDescription] = useState<string>(values.description || "");
    const [author, setAuthor] = useState<string>(values.author || "");

    useEffect(() => {
        setTitle(values.title)
        setDescription(values.description)
        setAuthor(values.author)
    },[values])

    const handleOnOk = async () => {
        const newsRequest = { title, description, author };
        if (mode === Mode.Create) {
            await handleCreate(newsRequest);
        } else {
            await handleUpdate(values.id, newsRequest);
        }
    };

    return (
        <Modal
            title={mode === Mode.Create ? "Create news" : "Edit News"}
            open={isModelOpen}
            onCancel={handleCancel}
            onOk={handleOnOk}
            cancelText={"Отмена"}
        >
            <div className="news_modal">
                <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Заголовок"
                />

                <TextArea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Описание"
                />

                <Input
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Автор"
                />
            </div>
        </Modal>
    );
};
