function animateElement(element, start, end, duration, direction) {
    return new Promise((resolve, reject) => {
        const delta = (end - start) * 30 / duration;
        element.style[direction] = start;
        let counter = 0;
        const loop = setInterval(() => {
            const currentPosition = start + delta * counter++;
            element.style[direction] = currentPosition;
            if (start < end && currentPosition >= end) {
                clearInterval(loop);
                resolve(); //Llama a then
            } else if (start > end && currentPosition <= end) {
                clearInterval(loop);
                resolve();
            }

        }, 30); //ejecuta una funcion cada cierto tiempo

    });
}

// Somos las programadoras de la promise
// ====================== Promise =================
// Somos las programadoras usuarias de la promise

const allImg = document.getElementsByTagName("img");
let offsetWidth = document.getElementById("place").offsetWidth;
let height = 460;
// console.log('Comienza promesa');
// animateElement(allImg[0], -200, 500, 3000).then(() => {
//     console.log("Terminó la animación de doge");
//     return animateElement(allImg[1], -200, 500, 6000);
// }).then(() => {
//     console.log("Terminó la animación de cate");
// }).catch(() => {

// });

// console.log('Holi soy código después de la promesa');

// Promise.all([
//     animateElement(allImg[0], -200, 600, 3000),
//     animateElement(allImg[1], -200, 600, 6000)
// ]).then(() => {
//     console.log("Terminaron AMBAS animaciones");
//     return Promise.all([
//         animateElement(allImg[0], 600, -200, 3000),
//         animateElement(allImg[1], 600, -200, 3000)
//     ]);
// }).then(() => {
//     console.log("Tom y Jerry se devolvieron");
// }).catch(() => {

// });

//=================================

Promise.all([
        animateElement(allImg[0], 0, offsetWidth, 4000, 'left'),
        animateElement(allImg[1], 50, offsetWidth, 4000, 'left')
    ]).then(() => { //Izquierda
        console.log("Terminaron hacia la izquierda");
        return Promise.all([
            animateElement(allImg[0], 0, height, 4000, 'top'),
            animateElement(allImg[1], 100, height, 4000, 'top')
        ]);
    }).then(() => { //Abajo
        console.log("Terminaron hacia abajo");
        return Promise.all([
            animateElement(allImg[0], offsetWidth, 0, 4000, 'left'),
            animateElement(allImg[1], offsetWidth, 50, 4000, 'left')
        ]);
    }).then(() => { //Derecha
        console.log("Terminaron hacia la derecha");
        return Promise.all([
            animateElement(allImg[0], height, 0, 4000, 'top'),
            animateElement(allImg[1], height, 50, 4000, 'top')
        ]);
        console.log("Tomy y Jerry se devolvieron");
    })
    .catch(() => {

    });