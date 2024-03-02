import TitleCenter from "../ui_components/title_center/TitleCenter";
import styles from "./Special.module.scss"
import { IDrinks } from "../../interfaces/components.interface";

const Special = () => {

    const text: string[] = ["Menu that fits you palatte", "Today’s Special"];

    const wine_beer: IDrinks[] = [
        {
            id: 1,
            name: "Chapel Hill Shiraz",
            size: "AU | Bottle",
            price: 56
        },
        {
            id: 2,
            name: "Catena Malbec",
            size: "AU | Bottle",
            price: 59
        },
        {
            id: 3,
            name: "La Vieille Rosé",
            size: "FR | 750 ml",
            price: 44
        },
        {
            id: 4,
            name: "Rhino Pale Ale",
            size: "CA | 750 ml",
            price: 31
        },
        {
            id: 5,
            name: "Irish Guinness",
            size: "IE | 750 ml",
            price: 26
        },
    ]

    const cocktails: IDrinks[] = [
        {
            id: 1,
            name: "Aperol Spritz",
            size: "Aperol | Villa Marchesi prosecco | soda | 30ml",
            price: 20
        },
        {
            id: 2,
            name: "Dark 'N' Stormy",
            size: "Dark rum | Ginger beer | Slice of lime. ",
            price: 16
        },
        {
            id: 3,
            name: "Daiquiri",
            size: "Rum | Citrus juice | Sugar",
            price: 10
        },
        {
            id: 4,
            name: "Old Fashioned",
            size: "Bourbon | Brown sugar | Angostura Bitters",
            price: 31
        },
        {
            id: 5,
            name: "Negroni",
            size: "Gin | Sweet Vermouth | Campari | Orange garnish",
            price: 26
        },
    ]

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <TitleCenter title={text} />
                <div className={styles.bar_menu}>
                    <div className={styles.side}>
                        <h3 className={styles.drink_class}>
                            Wine & Beer
                        </h3>
                        <div className={styles.menu}>
                            {wine_beer.map((drink) =>
                                <div className={styles.position} key={drink.id}>
                                    <div className={styles.name_price}>
                                        <h5 className={styles.name}>
                                            {drink.name}
                                        </h5>
                                        <div className={styles.rectangle}></div>
                                        <h5 className={styles.price}>
                                            {new Intl.NumberFormat('en-US', {
                                                style: 'currency',
                                                currency: 'USD',
                                                currencyDisplay: 'narrowSymbol',
                                                maximumFractionDigits: 0,
                                            }).format(drink.price)}
                                        </h5>
                                    </div>
                                    <h5 className={styles.size}>
                                        {drink.size}
                                    </h5>
                                </div>)}
                        </div>
                    </div>
                    <img src="/images/shaker.png" alt="" className={styles.shaker_img} />
                    <div className={styles.side}>
                        <h3 className={styles.drink_class}>
                            Cocktails
                        </h3>
                        <div className={styles.menu}>
                            {cocktails.map((drink) =>
                                <div className={styles.position} key={drink.id}>
                                    <div className={styles.name_price}>
                                        <h5 className={styles.name}>
                                            {drink.name}
                                        </h5>
                                        <div className={styles.rectangle}></div>
                                        <h5 className={styles.price}>
                                            {new Intl.NumberFormat('en-US', {
                                                style: 'currency',
                                                currency: 'USD',
                                                currencyDisplay: 'narrowSymbol',
                                                maximumFractionDigits: 0,
                                            }).format(drink.price)}
                                        </h5>
                                    </div>
                                    <div className={styles.size}>
                                        <h5 className={styles.sizing}>
                                            {drink.size}
                                        </h5>
                                    </div>
                                </div>)}
                        </div>
                    </div>
                </div>
                <button className={styles.btn}>Viev More</button>
            </div>
        </div>
    );
}

export default Special;