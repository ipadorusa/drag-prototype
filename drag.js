const sections = document.querySelectorAll('.row');
const sectionsArr = Array.from(sections);

const intersectionCallback = (entries, observer) => {
    if (entries[0].intersectionRatio <= 0) return;

    if (entries[0].intersectionRatio > 0.75) {
        console.log(entries[0].target.id);
    }
};

const intersectionOptions = {
    threshold: 1,
    rootMargin: '0px',
};

const intersectionObserver = new IntersectionObserver(intersectionCallback, intersectionOptions);

for (let i = 0; i < sections.length; i++) {
    intersectionObserver.observe(sections[i]);
}
