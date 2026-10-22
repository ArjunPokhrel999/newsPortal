// dynamic date
document.getElementById('date').innerText = new Date().toLocaleDateString('ne-NP', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

// set main article image
const mainImg = document.getElementById('main-img');
if (mainImg) {
    mainImg.src = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop";
}

// fetch news from news.json
async function loadNews() {
    try {
        const response = await fetch('./news.json');
        const newsData = await response.json();

        const newsGrid = document.getElementById('newsGrid');
        if (newsGrid) {
            newsGrid.innerHTML = '';
            newsData.forEach(news => {
                const card = document.createElement('article');
                card.className = 'news-card';
                card.innerHTML = `
                    <img src="${news.img}" alt="${news.title}">
                    <div class="card-content">
                        <span class="category">${news.category}</span>
                        <h3>${news.title}</h3>
                        <p>${news.desc}</p>
                        <a href="#" class="read-btn">पुरा पढ्नुहोस्</a>
                    </div>
                `;
                newsGrid.appendChild(card);
            });
        }
    } catch (error) {
        console.error("News load गर्दा समस्या आयो:", error);
    }
}

// call function on load
loadNews();
