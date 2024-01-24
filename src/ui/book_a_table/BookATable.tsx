import { useState } from "react";
import styles from "./BookATable.module.scss"
import { IoIosArrowDown } from "react-icons/io";
import TitleCenter from "../ui_components/title_center/TitleCenter";

const BookATable = () => {

    const text: string[] =  ["Reservations", "Book A Table"];

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <TitleCenter props={text} />
                <div className={styles.dialog_box}>
                    <input type="text" className={styles.dialog} placeholder="How Many Persons?" />
                    <input type="date" className={styles.dialog} required pattern="\d{4}-\d{2}-\d{2}" />
                    <input type="time" className={styles.dialog} required pattern="\d{4}-\d{2}-\d{2}" />
                </div>
                <button className={styles.book_btn}>Book Now</button>
            </div>
        </div>
    );
}

export default BookATable;