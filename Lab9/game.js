let currentImages = [];
let targetImageSrc = "";

function startGame(category) {
    $('#game-area').show();
    $('.categories').hide();
    $('#grid').empty();
    currentImages = [];

    // Генеруємо 25 випадкових індексів з 50 можливих картинок
    let indices = [];
    while (indices.length < 25) {
        let r = Math.floor(Math.random() * 50) + 1;
        if (indices.indexOf(r) === -1) indices.push(r);
    }

    // Створюємо поле 5х5
    indices.forEach(idx => {
        // Емулюємо шлях до локального каталогу
        // Насправді тягнемо з сервісу, щоб у тебе все працювало без завантаження 150 файлів
        let src = `https://loremflickr.com/150/150/${category}?lock=${idx}`;
        currentImages.push(src);

        let cell = $('<div></div>').addClass('grid-cell').attr('data-src', src);
        let img = $('<img>').attr('src', src);
        cell.append(img);

        cell.droppable({
            accept: "#draggable-img",
            drop: function (event, ui) {
                let droppedOn = $(this).attr('data-src');
                if (droppedOn === targetImageSrc) {
                    $(this).addClass('matched');
                    alert("Правильно!");
                    loadNewTarget(); 
                } else {
                    alert("Не вірна картинка!");
                }
            }
        });

        $('#grid').append(cell);
    });

    loadNewTarget();
}

function loadNewTarget() {
    let randomIndex = Math.floor(Math.random() * currentImages.length);
    targetImageSrc = currentImages[randomIndex];

    $('#current-box').empty();
    let img = $('<img>')
        .attr('src', targetImageSrc)
        .attr('id', 'draggable-img');

    $('#current-box').append(img);

    img.draggable({
        revert: "invalid", 
        helper: "clone",   
        cursor: "move"
    });
}