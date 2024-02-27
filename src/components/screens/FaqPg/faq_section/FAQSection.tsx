import { useState } from "react";
import styles from "./FAQSection.module.scss"
import Border from "../../../../ui/ui_components/border/Border";

interface FaqItem {
    question: string;
    answer: string;
}

const faqData: FaqItem[] = [
    {
        question: 'How do i reach to the restaurant?',
        answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {
        question: 'Is there a reservation required?',
        answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {
        question: 'Can i host an event at The restaurant?',
        answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {
        question: 'Is valet parking available at the restaurant?',
        answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {
        question: 'When are the happy hours of your bar?',
        answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {
        question: 'Is seafood available at the restaurant?',
        answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
];

const FAQSection = () => {
    const [selectedQuestion, setSelectedQuestion] = useState<string | null>(faqData[0].question);

    const handleQuestionClick = (question: string) => {
        if (selectedQuestion === question) {
            setSelectedQuestion(null);
        } else {
            setSelectedQuestion(question);
        }
    };
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Border props={"/images/no_category/cocktail.png"} />
                <div className={styles.faq_box}>
                    {faqData.map((item, index) => (
                        <div key={index} className={styles.faqItem} onClick={() => handleQuestionClick(item.question)}>
                            <h3 className={styles.question} style={
                                selectedQuestion === item.question ?
                                    { color: "#DCCA87" }
                                    :
                                    {}}>{item.question}</h3>
                            <p className={`${styles.answer} ${selectedQuestion === item.question ?
                                styles.show
                                :
                                ''
                                }`}>{item.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FAQSection;