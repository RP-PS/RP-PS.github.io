document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '-10% 0px -70% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const tocLink = document.querySelector(`.toc-sidebar a[href="#${id}"]`);

            const style = window.getComputedStyle(tocLink);

            if (entry.isIntersecting && style.display != "none") {

                document.querySelectorAll('.toc-sidebar a').forEach(link => 
                    link.classList.remove('active'));
                
                if (tocLink) {

                    tocLink.classList.add('active');

                    const sidebar = document.querySelector('.toc-sidebar');

					const linkTop = tocLink.offsetTop;
					const linkBottom = linkTop + tocLink.offsetHeight;
					const sidebarTop = sidebar.scrollTop;
					const sidebarBottom = sidebarTop + sidebar.clientHeight;

					const offset = 70; 

					if (linkTop < sidebarTop + offset) {
						sidebar.scrollTo({
							top: linkTop - offset,
							behavior: 'smooth'
						});
					} 
                    
					else if (linkBottom > sidebarBottom - offset) {
						sidebar.scrollTo({
							top: linkBottom - sidebar.clientHeight + offset,
							behavior: 'smooth'
						});
					}
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.content h1[id], .content h2[id], .content h3[id], .content h4[id]').forEach((section) => {
        observer.observe(section);
    });
});
