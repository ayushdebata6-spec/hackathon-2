const CROP_DATA = {
    summer: {
        sandy: "Groundnut (Peanut), Watermelon, Bajra (Pearl Millet)",
        loamy: "Maize (Corn), Green Gram (Moong), Sunflower",
        clay: "Cotton, Sugarcane (requires adequate irrigation)",
    },
    monsoon: {
        sandy: "Jowar (Sorghum), Red Gram (Arhar/Toor), Castor",
        loamy: "Paddy (Rice), Soybean, Chili",
        clay: "Paddy (Rice), Jute, Finger Millet (Ragi)",
    },
    winter: {
        sandy: "Potato, Carrot, Mustard",
        loamy: "Wheat, Chickpea (Chana), Lentil",
        clay: "Wheat (If well-drained), Linseed, Barley",
    }
};

const I18N_STRINGS = {
    en: {
        "app.title": "AGRISUSTAIN",
        "app.tagline": "Empowering farmers with sustainable practices & AI-driven insights",
        "select.language": "Language:",
        "theme.dark": "Dark",
        "theme.light": "Light",
        "lang.en": "English (EN)",
        "lang.hi": "Hindi (HI)",
        "lang.or": "Odia (OR)",
        "section.title.simplified_farming": "Sustainable farming, simplified",
        "section.subtitle.yield_resilience": "Use season + soil suggestions and practical methods to improve yield and resilience",
        "badge.eco_first": "Eco-first",
        "chip.low_water": "Low water use",
        "chip.soil_health": "Soil health",
        "chip.agroforestry": "Agroforestry",
        "chip.diversification": "Diversification",
        "section.title.sustainable_methods": "Sustainable methods",
        "method.crop_rotation.title": "Crop rotation",
        "method.crop_rotation.desc": "Reduce pests, restore nutrients, and break disease cycles by rotating crop families each season.",
        "method.water_conservation.title": "Water conservation",
        "method.water_conservation.desc": "Capture and use water efficiently with contour bunding, microcatchments, drip irrigation, and mulching to reduce evaporation.",
        "method.agroforestry.title": "Agroforestry",
        "method.agroforestry.desc": "Integrate trees with crops to provide shade, windbreaks, improved biodiversity, and carbon capture.",
        "method.renewable_energy.title": "Renewable energy use",
        "method.renewable_energy.desc": "Adopt small-scale solar pumps, biogas, and solar cold storage to lower fuel costs and increase resilience.",
        "link.learn_more_general": "Learn more",
        "section.title.crop_suggestion": "CROP SUGGESTION",
        "label.choose_season": "Choose season",
        "label.choose_soil": "Choose soil",
        "option.summer": "Summer",
        "option.monsoon": "Monsoon",
        "option.winter": "Winter",
        "option.sandy": "Sandy",
        "option.loamy": "Loamy",
        "option.clay": "Clay",
        "button.get_recommendations": "Get Recommendations",
        "helper.quick_guidance": "Quick, practical guidance",
        "result.placeholder": "Suggestions will appear here after you choose season & soil.",
        "chat.title": "Farm Assist Chat",
        "chat.welcome_title": "Hello! I am your Farm Assistant.",
        "chat.welcome_message": "Ask me anything about sustainable farming, pest control, or climate challenges!",
        "chat.feedback_prompt": "Was this helpful?",
        "button.send": "Send",
        "footer.disclaimer": "AGRISUSTAIN — Prototype for sustainable agriculture guidance. Built for hackathon demos.",
    },
    hi: {
        "app.title": "एग्रीसस्टेन",
        "app.tagline": "टिकाऊ प्रथाओं और एआई-संचालित अंतर्दृष्टि के साथ किसानों को सशक्त बनाना",
        "select.language": "भाषा:",
        "theme.dark": "गहरा",
        "theme.light": "हल्का",
        "lang.en": "अंग्रेजी (EN)",
        "lang.hi": "हिंदी (HI)",
        "lang.or": "ओड़िया (OR)",
        "section.title.simplified_farming": "सरल टिकाऊ खेती",
        "section.subtitle.yield_resilience": "उपज और लचीलेपन में सुधार के लिए मौसम + मिट्टी के सुझावों और व्यावहारिक तरीकों का उपयोग करें",
        "badge.eco_first": "पर्यावरण-प्रथम",
        "chip.low_water": "कम पानी का उपयोग",
        "chip.soil_health": "मिट्टी का स्वास्थ्य",
        "chip.agroforestry": "कृषि वानिकी",
        "chip.diversification": "विविधीकरण",
        "section.title.sustainable_methods": "टिकाऊ तरीके",
        "method.crop_rotation.title": "फसल चक्रण",
        "method.crop_rotation.desc": "प्रत्येक मौसम में फसल परिवारों को घुमाकर कीटों को कम करें, पोषक तत्वों को बहाल करें और रोग चक्रों को तोड़ें।",
        "method.water_conservation.title": "जल संरक्षण",
        "method.water_conservation.desc": "वाष्पीकरण को कम करने के लिए कंटूर बंडिंग, माइक्रोकैचमेंट, ड्रिप सिंचाई और पलवार के साथ कुशलता से पानी पकड़ें और उपयोग करें।",
        "method.agroforestry.title": "कृषि वानिकी",
        "method.agroforestry.desc": "छाया, विंडब्रेक, बेहतर जैव विविधता और कार्बन कैप्चर प्रदान करने के लिए फसलों के साथ पेड़ों को एकीकृत करें।",
        "method.renewable_energy.title": "नवीकरणीय ऊर्जा उपयोग",
        "method.renewable_energy.desc": "ईंधन की लागत कम करने और लचीलापन बढ़ाने के लिए छोटे पैमाने पर सौर पंप, बायोगैस और सौर कोल्ड स्टोरेज अपनाएं।",
        "link.learn_more_general": "और जानें",
        "section.title.crop_suggestion": "फसल सुझाव",
        "label.choose_season": "मौसम चुनें",
        "label.choose_soil": "मिट्टी चुनें",
        "option.summer": "गर्मी",
        "option.monsoon": "मानसून",
        "option.winter": "सर्दी",
        "option.sandy": "रेतीली",
        "option.loamy": "दोमट",
        "option.clay": "चिकनी",
        "button.get_recommendations": "सिफारिशें प्राप्त करें",
        "helper.quick_guidance": "त्वरित, व्यावहारिक मार्गदर्शन",
        "result.placeholder": "मौसम और मिट्टी चुनने के बाद सुझाव यहाँ दिखाई देंगे।",
        "chat.title": "फार्म सहायता चैट",
        "chat.welcome_title": "नमस्ते! मैं आपका फार्म सहायक हूँ।",
        "chat.welcome_message": "टिकाऊ खेती, कीट नियंत्रण, या जलवायु चुनौतियों के बारे में कुछ भी पूछें!",
        "chat.feedback_prompt": "क्या यह सहायक था?",
        "button.send": "भेजें",
        "footer.disclaimer": "एग्रीसस्टेन — टिकाऊ कृषि मार्गदर्शन के लिए प्रोटोटाइप।",
    },
    or: {
        "app.title": "ଆଗ୍ରିସୁସ୍ତେନ",
        "app.tagline": "ଧାରଣୀୟ ଅଭ୍ୟାସ ଓ AI-ଚାଳିତ ଜ୍ଞାନ ସହିତ କୃଷକମାନଙ୍କୁ ଶକ୍ତିଶାଳୀ କରିବା",
        "select.language": "ଭାଷା:",
        "theme.dark": "ଅନ୍ଧକାର",
        "theme.light": "ଆଲୋକ",
        "lang.en": "ଇଂରାଜୀ (EN)",
        "lang.hi": "ହିନ୍ଦୀ (HI)",
        "lang.or": "ଓଡ଼ିଆ (OR)",
        "section.title.simplified_farming": "ସରଳ ଧାରଣୀୟ କୃଷି",
        "section.subtitle.yield_resilience": "ଉତ୍ପାଦନ ଓ ପ୍ରତିରୋଧକତା ବଢ଼ାଇବା ପାଇଁ ଋତୁ + ମାଟି ପରାମର୍ଶ ବ୍ୟବହାର କରନ୍ତୁ",
        "badge.eco_first": "ପରିବେଶ-ପ୍ରଥମ",
        "chip.low_water": "କମ ଜଳ ବ୍ୟବହାର",
        "chip.soil_health": "ମାଟି ସ୍ୱାସ୍ଥ୍ୟ",
        "chip.agroforestry": "କୃଷିବନୀକରଣ",
        "chip.diversification": "ବିବିଧୀକରଣ",
        "section.title.sustainable_methods": "ଧାରଣୀୟ ପଦ୍ଧତି",
        "method.crop_rotation.title": "ଫସଲ ପରିବର୍ତ୍ତନ",
        "method.crop_rotation.desc": "ପ୍ରତି ଋତୁରେ ଫସଲ ପରିବାରକୁ ବଦଳାଇ ପୋକ କମାନ୍ତୁ, ପୋଷକ ଫେରାନ୍ତୁ, ଏବଂ ରୋଗ ଚକ୍ର ଭାଙ୍ଗନ୍ତୁ।",
        "method.water_conservation.title": "ଜଳ ସଂରକ୍ଷଣ",
        "method.water_conservation.desc": "ଜଳକୁ ଦକ୍ଷତାର ସହିତ ଧରିବା ଏବଂ ବ୍ୟବହାର କରିବା ପାଇଁ କଣ୍ଟୁର ବଣ୍ଡିଂ, ମାଇକ୍ରୋକ୍ୟାଚମେଣ୍ଟ, ଡ୍ରିପ୍ ଜଳସେଚନ ଏବଂ ମଲଚିଂ ବ୍ୟବହାର କରନ୍ତୁ।",
        "method.agroforestry.title": "କୃଷିବନୀକରଣ",
        "method.agroforestry.desc": "ଛାଇ, ପବନ ପ୍ରତିରୋଧ, ଉନ୍ନତ ଜୈବ ବିବିଧତା ଏବଂ ଅଙ୍ଗାରକାମ୍ଳ ଗ୍ରହଣ କରିବା ପାଇଁ ଫସଲ ସହିତ ଗଛକୁ ସମନ୍ୱିତ କରନ୍ତୁ।",
        "method.renewable_energy.title": "ନବୀକରଣ ଶକ୍ତି ବ୍ୟବହାର",
        "method.renewable_energy.desc": "ଇନ୍ଧନ ଖର୍ଚ୍ଚ କମାଇବା ଏବଂ ପ୍ରତିରୋଧକତା ବଢ଼ାଇବା ପାଇଁ କ୍ଷୁଦ୍ର ସୌର ପମ୍ପ, ବାୟୋଗ୍ୟାସ୍ ଏବଂ ସୌର ଶୀତଳ ଭଣ୍ଡାର ବ୍ୟବହାର କରନ୍ତୁ।",
        "link.learn_more_general": "ଅଧିକ ଜାଣନ୍ତୁ",
        "section.title.crop_suggestion": "ଫସଲ ପରାମର୍ଶ",
        "label.choose_season": "ଋତୁ ବାଛନ୍ତୁ",
        "label.choose_soil": "ମାଟି ବାଛନ୍ତୁ",
        "option.summer": "ଖରାଦିନ",
        "option.monsoon": "ବର୍ଷା",
        "option.winter": "ଶୀତଦିନ",
        "option.sandy": "ବାଲିଆ",
        "option.loamy": "ଦୋରସା",
        "option.clay": "ଚିକିଟା",
        "button.get_recommendations": "ପରାମର୍ଶ ପାଆନ୍ତୁ",
        "helper.quick_guidance": "ଶୀଘ୍ର, ବ୍ୟାବହାରିକ ମାର୍ଗଦର୍ଶନ",
        "result.placeholder": "ଋତୁ ଏବଂ ମାଟି ବାଛିବା ପରେ ପରାମର୍ଶ ଏଠାରେ ଦେଖାଯିବ।",
        "chat.title": "କୃଷି ସହାୟକ ଚାଟ୍",
        "chat.welcome_title": "ହେଲୋ! ମୁଁ ଆପଣଙ୍କର କୃଷି ସହାୟକ।",
        "chat.welcome_message": "ଧାରଣୀୟ କୃଷି, ପୋକ ନିୟନ୍ତ୍ରଣ କିମ୍ବା ଜଳବାୟୁ ଆହ୍ୱାନ ବିଷୟରେ ମୋତେ ଯାହା ପଚାରନ୍ତୁ!",
        "chat.feedback_prompt": "ଏହା ସହାୟକ ଥିଲା କି?",
        "button.send": "ପଠାନ୍ତୁ",
        "footer.disclaimer": "ଆଗ୍ରିସୁସ୍ତେନ — ଧାରଣୀୟ କୃଷି ମାର୍ଗଦର୍ଶନ ପାଇଁ ପ୍ରୋଟୋଟାଇପ୍।",
    }
};


function applyLanguage(lang) {
    const strings = I18N_STRINGS[lang] || I18N_STRINGS['en'];
    document.querySelectorAll('[data-i18n-key]').forEach(element => {
        const key = element.getAttribute('data-i18n-key');
        if (strings[key]) {
            if (element.tagName === 'TITLE') {
                document.title = strings[key];
            } else if (element.tagName === 'INPUT' || element.tagName === 'BUTTON') {
                if (element.placeholder !== undefined) {
                    element.placeholder = strings[key];
                } else {
                    element.textContent = strings[key];
                }
            } else if (element.tagName === 'OPTION') {
                element.textContent = strings[key];
            } else {
                element.textContent = strings[key];
            }
        }
    });

    const chatInput = document.getElementById('userInput');
    if (lang === 'en') {
        chatInput.placeholder = "Ask a question...";
    } else if (lang === 'hi') {
        chatInput.placeholder = "एक प्रश्न पूछें...";
    } else if (lang === 'or') {
        chatInput.placeholder = "ଏକ ପ୍ରଶ୍ନ ପଚାରନ୍ତୁ...";
    }
}

function toggleTheme(theme) {
    const body = document.body;
    if (theme === 'dark') {
        body.classList.add('dark');
        body.classList.remove('light');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.add('light');
        body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
}


function getCropRecommendations() {
    const season = document.getElementById('season').value;
    const soil = document.getElementById('soil').value;
    const resultDiv = document.getElementById('result');

    const suggestions = CROP_DATA[season] && CROP_DATA[season][soil];

    if (suggestions) {
        resultDiv.innerHTML = `
            <strong>Recommended Crops for ${season.toUpperCase()} on ${soil.toUpperCase()} soil:</strong>
            <p>${suggestions}</p>
        `;
    } else {
        resultDiv.innerHTML = '<strong>No specific recommendations found for this combination. Please check your inputs.</strong>';
    }
}

function createChatMessage(text, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;

    if (type === 'ai' && text.startsWith('Hello!')) {
        
        const welcomeTitleKey = "chat.welcome_title";
        const welcomeMessageKey = "chat.welcome_message";
        const lang = document.getElementById('language-select').value;
        const strings = I18N_STRINGS[lang] || I18N_STRINGS['en'];

        messageDiv.innerHTML = `
            <strong data-i18n-key="${welcomeTitleKey}">${strings[welcomeTitleKey] || "Hello! I am your Farm Assistant."}</strong>
            <p data-i18n-key="${welcomeMessageKey}">${strings[welcomeMessageKey] || "Ask me anything about sustainable farming, pest control, or climate challenges!"}</p>
        `;
    } else {
        messageDiv.textContent = text;
    }

    return messageDiv;
}

function sendMessage() {
    const userInput = document.getElementById('userInput');
    const messagesDiv = document.getElementById('messages');
    const userText = userInput.value.trim();

    if (userText === '') return;

    messagesDiv.appendChild(createChatMessage(userText, 'user'));

    const aiMessage = createChatMessage("Thinking...", 'ai');
    messagesDiv.appendChild(aiMessage);
 
    userInput.value = '';
    messagesDiv.scrollTop = messagesDiv.scrollHeight; 

    setTimeout(() => {
        aiMessage.innerHTML = `
            <strong>Response to "${userText}":</strong>
            <p>This is a simulated response. In a real application, this would be an API call to a farm guidance model that provides practical, multilingual advice based on your query.</p>
        `;
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }, 1500);
}

function handleFeedback(isHelpful) {
    const feedbackMessage = isHelpful ? 'Thank you for the positive feedback! We will keep improving.' : 'Thank you for your feedback. We will use this to improve the assistance provided.';
    alert(feedbackMessage);
}


document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('language-select');
    const themeSwitch = document.getElementById('themeSwitch');
    const runButton = document.getElementById('run');
    const sendButton = document.getElementById('send');
    const chatInput = document.getElementById('userInput');
    const messagesDiv = document.getElementById('messages');
    const thumbsUpButton = document.getElementById('thumbsUp');
    const thumbsDownButton = document.getElementById('thumbsDown');
 
    const savedTheme = localStorage.getItem('theme') || 'dark';
    themeSwitch.value = savedTheme;
    toggleTheme(savedTheme);

    const savedLang = localStorage.getItem('language') || 'en';
    langSelect.value = savedLang;
    applyLanguage(savedLang);

    messagesDiv.appendChild(createChatMessage("Hello!", 'ai'));

    themeSwitch.addEventListener('change', (event) => {
        toggleTheme(event.target.value);
    });

    langSelect.addEventListener('change', (event) => {
        const newLang = event.target.value;
        applyLanguage(newLang);
        localStorage.setItem('language', newLang);
        
        messagesDiv.innerHTML = '';
        messagesDiv.appendChild(createChatMessage("Hello!", 'ai'));
    });

    runButton.addEventListener('click', getCropRecommendations);
    
    sendButton.addEventListener('click', sendMessage);

    chatInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            sendMessage();
        }
    });

    thumbsUpButton.addEventListener('click', () => handleFeedback(true));
    thumbsDownButton.addEventListener('click', () => handleFeedback(false));
});