const {createApp} = Vue;

createApp({
    data() {
        return {
            autoscroll: null,
            view_image: 0,
            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, 
                {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, 
                {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, 
                {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, 
                {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],
        }
    },
    methods: {
        next_image(){
            if(this.view_image == this.slides.length - 1){
                this.view_image = 0;
            }
            else{
                this.view_image++;
            }
        },
        prev_image(){
            if(this.view_image == 0){
                this.view_image = this.slides.length - 1;
            }
            else{
                this.view_image--;
            }
        },

        click_image(index){
            this.view_image = index;
        },

        startScroll(){
            this.autoscroll = setInterval(() => {
                this.next_image()
            }, 3000)
        },
        pauseScroll(){
            clearInterval(this.autoscroll);
            this.autoscroll = null;
        },
        stopScroll(){
            this.pauseScroll();
            this.view_image = 0;
        }
    },
}).mount('#app')

