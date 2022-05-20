const app = new Vue({
    el: '#root',
    data: {
        currentIndex: 0,
        timer: 0,
        images: [{
                src: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                src: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum',
            },
            {
                src: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                src: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
            {
                src: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
        ],

    },


    methods: {
        prevImage() {
            //se ci troviamo in posizione zero con l'indice allora torniamo all'ultima posizione dell'indice
            if (this.currentIndex === 0) {
                this.currentIndex = this.images.length - 1;
                //altrimenti vai semplicemente indietro di uno
            } else {
                this.currentIndex--;
            }
        },
        nextImage() {
            //se ci troviamo nell'ultima posizione dell'indice allora torniamo alla posizione zero dell'indice
            if (this.currentIndex === this.images.length - 1) {
                this.currentIndex = 0;
                //altrimenti vai semplicemente avanti di uno
            } else {
                this.currentIndex++;
            }
        },
        changeImage(index) {
            this.currentIndex = index;
        },
        play: function() {
            let app = this;
            this.timer = setInterval(function() {
                app.nextImage();
            }, 1000);
        }
    },
    created: function() {
        this.play();
    }

})