export default {
    name: 'scroll',
    methods: {
        contact(e = null) {
            const contact = document.getElementById('contact')
            if (contact) {
                if (e) e.preventDefault();
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            } else {
                window.location.href = '/#contact';
            }
        }
    }
}