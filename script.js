const faqs = document.querySelectorAll('.faqs');
const contents = document.querySelectorAll('.content');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faqs.forEach(t => t.classList.remove('active'));
        
        faq.classList.add('active');

         /* 
            To implement a toggle feature use faq.classList.toggle('active') 
            instead and remove the all above line of code 
        */
        
    });
});