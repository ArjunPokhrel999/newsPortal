document.getElementById('date').innerText = new Date().toLocaleDateString('ne-NP', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

let allNews = [];

async function fetchNews() {
    try {
        const response = await fetch('./news.json');
        allNews = await response.json();
        renderNews(allNews);
    } catch (error) {
        console.error("News load गर्दा समस्या आयो:", error);
    }
}

function renderNews(newsList) {
    const newsGrid = document.getElementById('newsGrid');
    newsGrid.innerHTML = '';

    if (newsList.length === 0) {
        newsGrid.innerHTML = '<p style="text-align:center; grid-column: 1/-1;">यो क्याटगोरीमा कुनै समाचार भेटिएन।</p>';
        return;
    }

    newsList.forEach(news => {
        const card = document.createElement('article');
        card.className = 'news-card';
        card.innerHTML = `
            <img src="${news.img}" alt="${news.title}">
            <div class="card-content">
                <span class="category">${news.category}</span>
                <h3>${news.title}</h3>
                <p>${news.desc}</p>
                <button class="read-btn" onclick="openNews(${news.id})">पुरा पढ्नुहोस्</button>
            </div>
        `;
        newsGrid.appendChild(card);
    });
}

// Open Full News Modal
function openNews(id) {
    const item = allNews.find(n => n.id === id);
    if (!item) return;

    document.getElementById('modalCategory').innerText = item.category;
    document.getElementById('modalDate').innerText = item.date || '';
    document.getElementById('modalTitle').innerText = item.title;
    document.getElementById('modalImg').src = item.img;
    document.getElementById('modalBody').innerText = item.content || item.desc;

    document.getElementById('newsModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('newsModal').style.display = 'none';
}

// Close Modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('newsModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Category Filter Event Listener
document.querySelectorAll('#categoryMenu a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('#categoryMenu a').forEach(a => a.classList.remove('active'));
        this.classList.add('active');

        const selectedCat = this.getAttribute('data-category');
        if (selectedCat === 'सबै') {
            renderNews(allNews);
        } else {
            const filtered = allNews.filter(n => n.category === selectedCat);
            renderNews(filtered);
        }
    });
});

fetchNews();
