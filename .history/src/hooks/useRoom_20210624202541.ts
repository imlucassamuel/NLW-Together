import { useState } from "react";

type QuestionType = {
    id: string;
    author: {
        name: string;
        avatar: string;
    }
    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
}

const [questions, setQuestions] = useState<QuestionType[]>([]);
const [title, setTitle] = useState('')

export function useRoom(){
    return(

    );
}