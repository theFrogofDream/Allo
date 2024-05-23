function buy() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const product = document.getElementById('products').value;
    const address = document.getElementById('address').value;
    const agreement = document.getElementById('Oke').checked;

    if (name === '' || email === '' || product === '' || (address === '' && document.getElementById('delivery').checked)) {
        alert('Пожалуйста, заполните все обязательные поля.');
        return;
    }

    if (!agreement) {
        alert('Пожалуйста, дайте согласие на обработку персональных данных.');
        return;
    }

    const message = `
    Имя: ${name}
    Email: ${email}
    Продукт: ${product}
    ${address ? `Адрес доставки: ${address}` : ''}
  `;

    const url = 'https://pentapulse.ru/shop/#FuckingStupedForm'; // Замените на ваш URL для обработки формы
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        if (xhr.status === 200) {
            alert('Спасибо за ваш заказ! Мы свяжемся с вами в ближайшее время.');
        } else {
            alert('Произошла ошибка при отправке данных. Пожалуйста, попробуйте позже.');
        }
    };
    xhr.send(`message=${encodeURIComponent(message)}`);
}