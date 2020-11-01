const vm = new Vue({
    el: "#app",
    async mounted() {
        await this.setHeight();
        // await this.imgHeight();
        this.changeWidthListen();
    },
    data() {
        return {
            headingHeight: undefined,
            imageHeight: undefined,
            display: "none",
            cats: [{
                    name: "Peter - the cat",
                    description: "My name is Peter, I am a small cat and cute",
                    img: "assets/peter.jpg"
                },
                {
                    name: "Alicia",
                    description: "I am Alicia the cute cat",
                    img: "assets/alicia.jpg"
                },
                {
                    name: "I am the one with long name",
                    description: "You know cat is kinda evil right >:). I am the one might gives you trouble about the flex box. Or not...",
                    img: "assets/long-name.jpg"
                },
                {
                    name: "John",
                    description: "I just don't want to open my eyes. I don't want to talk with Human",
                    img: "assets/john.jpg"
                },
            ]
        }
    },
    methods: {
        async setHeight() {
            // This function set height of cat's heading equaly for the condition:
            // "Cat image's top should be at the same level in each box as well as the title and main text"
            this.headingHeight = 'unset'; //Without set the headingHeight unset -> We will got bugs when starting page at 768px and expland. Comment this line to see.
            let self = this;
            setTimeout(async () => {
                let heights = this.$refs.nameHover;
                heights.forEach(height => {
                    let currentHeight = height.clientHeight
                    if (currentHeight > self.headingHeight || !self.headingHeight || this.headingHeight == 'unset') self.headingHeight = currentHeight
                });
                self.headingHeight += 'px';
            }, 50);
        },

        // Handle same height of img tag in original idea
        // async imgHeight() {
        //     let self = this;
        //     setTimeout(async () => {
        //         let heights = this.$refs.catImage;
        //         console.log(heights);
        //         heights.forEach(height => {
        //             let currentHeight = height.clientHeight
        //             if (currentHeight > self.imageHeight || !self.imageHeight || this.imageHeight == 'unset') self.imageHeight = currentHeight
        //         });
        //         self.imageHeight += 'px';
        //     }, 50);
        // },

        async changeWidthListen() {
            window.addEventListener('resize', this.changeWidthHandle);
        },
        changeWidthHandle() {
            this.setHeight();
            // This code below to show the loading screen when JS processing
            // Comment those to see how change screen height work 
            this.display = "block";
            let self = this;
            setTimeout(() => {
                self.display = "none";
            }, 1000);
        }
    },
})