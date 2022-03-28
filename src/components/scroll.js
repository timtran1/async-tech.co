export default {
    name: 'scroll',
    data() {
        return {
            home: false
        };
    },
    mounted() {
        if (this.$route.path === "/") {
            this.home = true;
        }

        if (this.$route.hash) {
            const el = document.getElementById(this.$route.hash.substring(1))
            if (el) el.scrollIntoView({behavior: 'smooth'})
        }
    },
    methods: {
        scroll(e = null) {
            const el = document.getElementById(e.target.hash.substring(1))
            if (el) {
                if (e) e.preventDefault();
                el.scrollIntoView({behavior: 'smooth'});
                this.hide_menu = true
            }
        },
        contact() {
            const el = document.getElementById('contact');
            if (el) {
                el.scrollIntoView({behavior: 'smooth'})
                this.hide_menu = true
            } else this.$router.push('/#contact');
        }
    }
}