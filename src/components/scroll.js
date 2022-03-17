export default {
    name: 'scroll',
    methods: {
        contact(e = null) {
            if (window.location.pathname === '/') {
                if (e) e.preventDefault();
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            } else {
                window.location.href = '/#contact';
            }
        }
    }
}