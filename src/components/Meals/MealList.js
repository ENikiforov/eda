import styles from './MealList.module.css'
import Card from "../Ui/Card";
import MealItem from "./MealItem/MealItem";

import React, { useEffect, useState } from 'react';

const MealList = () => {
    const [mealsRes, setMealsRes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [allIngredients, setAllIngredients] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const baseURL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';
            const alphabet = 'abcdefghijklmnopqrstuvwxyz';
            const result = [];

            for (const letter of alphabet) {
                const url = baseURL + letter;
                const response = await fetch(url);
                const data = await response.json();

                if (data.meals) {
                    result.push(...data.meals);
                }
            }
            setMealsRes(result);
            setLoading(false);
        };

        fetchData();
    }, []);

    useEffect(() => {
        const ingredients = mealsRes.reduce((acc, meal) => {
            const ingredientsStart = []
            for (let i = 1; i <= 20; i++) {
                const ingredient = meal[`strIngredient${i}`];
                if (ingredient) {
                    ingredientsStart.push(ingredient);
                }
            }
            const imgPic = meal["strMealThumb"]
            let ingredientsStr = ingredientsStart.join(',')
            let mealItem = {
                id: meal.idMeal,
                name: meal.strMeal,
                description: ingredientsStr,
                img: imgPic,
                price: ((Math.random()*15).toFixed(2))
            }
            acc.push(mealItem)
            return acc;
        }, []);

        setAllIngredients(ingredients);
    }, [mealsRes]);




    if (loading) {
        return <div>Loading...</div>;
    }

    const mealList = allIngredients.map((meal) => (
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            img={meal.img}
            price ={meal.price}
        />
    ));

    return (
        <section className={styles.meals}>
            <Card>
                <ul>{mealList}</ul>
            </Card>
        </section>
    );
};

export default MealList;