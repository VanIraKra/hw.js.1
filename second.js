/*Напиши скрипт проверки количества товаров на складе. Есть переменные total (количество товаров на складе) и ordered (единиц товара в заказе). Сравни эти значения и по результатам выведи: Если в заказе указано число, превышающее количество товаров на складе, то выведи сообщение "На складе недостаточно твоаров!". В другом случае выводи сообщение "Заказ оформлен, с вами свяжется менеджер". Проверь работоспособность кода с разными значениями переменной ordered, например 20, 80 и 130.
const total = 100; const ordered = 50;*/
let total =100;
let ordered = 50;
ordered=120;

if(ordered>total){
    alert("На складе недостаточно товаров!");
}else{
    alert("Заказ оформлен, с вами свяжется менеджер");
}

