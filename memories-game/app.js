const memoryGame = {
    tileCount : 30, //liczba klocków
    tileOnRow : 5, //liczba klocków na rząd
    divBoard : null, //div z planszą gry
    divScore : null, //div z wynikiem gry
    tiles : [], //tutaj trafi wymieszana tablica klocków
    tilesChecked : [], //zaznaczone klocki
    moveCount : 0, //liczba ruchów
    tilesImg : [ //grafiki dla klocków
        "img/01.jpg",
        "img/02.jpg",
        "img/03.jpg",
        "img/04.jpg",
        "img/05.jpg",
        "img/06.jpg",
        "img/07.jpg",
        "img/08.jpg",
        "img/09.jpg",
        "img/10.jpg",
        "img/11.jpg",
        "img/12.jpg",
        "img/13.jpg",
        "img/14.jpg",
        "img/15.jpg"
    ],
    canGet : true, //czy można klikać na kafelki
    tilePairs : 0, //liczba dopasowanych kafelkow

    tileClick(e) {
        if (this.canGet) {
            //jeżeli jeszcze nie pobraliśmy 1 elementu
            //lub jeżeli index tego elementu nie istnieje w pobranych...
            if (!this.tilesChecked[0] || (this.tilesChecked[0].dataset.index !== e.target.dataset.index)) {
                this.tilesChecked.push(e.target);
                e.target.style.backgroundImage = "url(" + this.tilesImg[e.target.dataset.cardType] + ")";
            }

            if (this.tilesChecked.length === 2) {
                this.canGet = false;

                if (this.tilesChecked[0].dataset.cardType === this.tilesChecked[1].dataset.cardType) {
                    setTimeout(this.deleteTiles.bind(this), 1000);
                } else {
                    setTimeout(this.resetTiles.bind(this), 1000);
                }

                this.moveCount++;
                this.divScore.innerText = this.moveCount;
            }
        }
    },

    deleteTiles() {
        this.tilesChecked[0].remove();
        this.tilesChecked[1].remove();

        this.canGet = true;
        this.tilesChecked = [];

        this.tilePairs++;
        if (this.tilePairs >= this.tileCount / 2) {
            alert("GRATULACJE !!! Udało ci się odgadnąć wszystkie obrazki");
        }
    },

    resetTiles() {
        this.tilesChecked[0].style.backgroundImage = "url(images/title.png)";
        this.tilesChecked[1].style.backgroundImage = "url(images/title.png)";

        this.tilesChecked = [];
        this.canGet = true;
    },

    startGame() {
        //czyścimy planszę
        this.divBoard = document.querySelector(".game-board");
        this.divBoard.innerHTML = "";

        //czyścimy planszę z ruchami
        this.divScore = document.querySelector(".game-score");
        this.divScore.innerHTML = "";

        //czyścimy zmienne (bo gra może się zacząć ponownie)
        this.tiles = [];
        this.tilesChecked = [];
        this.moveCount = 0;
        this.canGet = true;
        this.tilePairs = 0;

        //generujemy tablicę numerów kocków (parami)
        for (let i=0; i<this.tileCount; i++) {
            this.tiles.push(Math.floor(i/2));
        }

        //i ją mieszamy
        for (let i=this.tileCount-1; i>0; i--) {
            const swap = Math.floor(Math.random()*i);
            const tmp = this.tiles[i];
            this.tiles[i] = this.tiles[swap];
            this.tiles[swap] = tmp;
        }

        for (let i=0; i<this.tileCount; i++) {
            const tile = document.createElement("div");
            tile.classList.add("game-tile");
            this.divBoard.appendChild(tile);

            tile.dataset.cardType = this.tiles[i];
            tile.dataset.index = i;

            tile.style.left = 5 + (tile.offsetWidth+10) * (i%this.tileOnRow) + "px"
            tile.style.top = 5 + (tile.offsetHeight+10) * (Math.floor(i/this.tileOnRow)) + "px";

            tile.addEventListener("click", this.tileClick.bind(this));
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.querySelector(".game-start");
    startBtn.addEventListener("click", () => memoryGame.startGame());
});