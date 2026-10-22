document.addEventListener('DOMContentLoaded', () => {

    // १. नेपालीमा आजको मिति देखाउने
    const dateElement = document.getElementById('date');
    if (dateElement) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const today = new Date().toLocaleDateString('ne-NP', options);
        dateElement.textContent = `📅 आजको मिति: ${today}`;
    }

    // २. थप नेपाली समाचारहरू
    const extraNews = [
        {
            category: "अर्थतन्त्र",
            title: "रेमिट्यान्समा वृद्धि भएसँगै विदेशी मुद्रा सञ्चिति हालसम्मकै उच्च",
            summary: "नेपाल राष्ट्र बैंकको प्रतिवेदन अनुसार वैदेशिक रोजगारीबाट आउने रकम बढेकाले देशको विदेशी मुद्रा सञ्चिति निकै बलियो अवस्थामा पुगेको छ।",
            image: "https://via.placeholder.com/300x200"
        },
        {
            category: "पर्यटन",
            title: "पोखरा र अन्नपूर्ण क्षेत्रमा पर्यटकको चहलपहल बढ्यो",
            summary: "पर्यटनको सिजन सुरु भएसँगै पोखरा र अन्नपूर्ण पदमार्गमा आन्तरिक तथा बाह्य पर्यटकको संख्यामा उल्लेख्य वृद्धि भएको छ।",
            image: "https://via.placeholder.com/300x200"
        },
        {
            category: "खेलकुद",
            title: "नेपाली क्रिकेट टोलीको आगामी खेल तालिका सार्वजनिक",
            summary: "नेपाल क्रिकेट सङ्घ (क्यान) ले राष्ट्रिय टोलीको नयाँ खेल तालिका घोषणा गरेको छ। कीर्तिपुर मैदानमा तयारी तीव्र पारिएको छ।",
            image: "https://via.placeholder.com/300x200"
        },
        {
            category: "प्रविधि",
            title: "नेपालमा डिजिटल भुक्तानी र ५जी सेवाको विस्तार",
            summary: "डिजिटल नेपाल फ्रेमवर्क अन्तर्गत देशका प्रमुख सहरहरूमा क्यूआर कोड भुक्तानी र द्रुत इन्टरनेट सेवा थप सहज बन्दै गएको छ।",
            image: "https://via.placeholder.com/300x200"
        }
    ];

    // ३. ग्रिडमा समाचार थप्ने
    const newsGrid = document.getElementById('newsGrid');
    if (newsGrid) {
        extraNews.forEach(news => {
            const article = document.createElement('article');
            article.className = 'news-card';
            article.innerHTML = `
                <img src="${news.image}" alt="समाचार तस्बिर">
                <div class="card-content">
                    <span class="category">${news.category}</span>
                    <h3>${news.title}</h3>
                    <p>${news.summary}</p>
                    <a href="#" class="read-btn">पुरा पढ्नुहोस्</a>
                </div>
            `;
            newsGrid.appendChild(article);
        });
    }

    // ४. क्लिक गर्दा आउने म्यासेज
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('read-btn')) {
            e.preventDefault();
            alert("✨ यो पुरा समाचार छिट्टै उपलब्ध हुनेछ!");
        }
    });

});
