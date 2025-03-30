// JSON data for ads
const ads = [
    {
        id: "ad1",
        title: "Developer script works !",
        description: "Created By Lodwick Masete.Share your feedback on WhatsApp",
        image: {
            src: "lodwick.jpg",
            alt: "creator"
        },
        button: {
            text: "WhatsApp",
            link: "https://wa.me/27720261036?text=my%20feed%20back%20on%20the%20scores%20app%20is%20that"

        },

        bgColor: "#ffffff",
        buttonColor: "#4CAF50"
    },
    {
        id: "ad2",
        title: "Advertise Here",
        description: "Advertise your products or services at low prices (R25)!",
        image: {
            src: "create_ads.jpg",
            alt: "Make your ads"
        },
        button: {
            text: "Advertise",
            link: "https://wa.me/27720261036?text=i%20would%20like%20to%20advertise%20on%20the%20scores%20app"

        },
        bgColor: "#ffffff",
        buttonColor: "#2196F3"
    },
    {
        id: "ad3",
        title: "Visit Website",
        description: "For more APPS visit my <a href='https://lodwickmasete.github.io'> website</a>",
        image: {
            src: "website_cover.jpg",
            alt: "https:lodwickmasete.github.io"
        },
        button: {
            text: "Visit Website",
            link: "https:lodwickmasete.github.io"
        },
        bgColor: "#ffffff",
        buttonColor: "#FF9800"
    }
];


    const adsContainer = document.getElementById('ads-container');
    const minimizedIndicator = document.getElementById('minimized-indicator');
    const resetBtn = document.getElementById('reset-ads-btn');
    const showAllBtn = document.getElementById('show-all-ads-btn'); // New button for showing all ads
    const adStats = document.getElementById('ad-stats');

    // Function to get dismissed ads from localStorage
    function getDismissedAds() {
        const dismissedAds = localStorage.getItem('dismissedAds');
        return dismissedAds ? JSON.parse(dismissedAds) : [];
    }

    // Function to save dismissed ads to localStorage
    function saveDismissedAds(dismissedAds) {
        localStorage.setItem('dismissedAds', JSON.stringify(dismissedAds));
    }

    // Function to check if an ad is dismissed
    function isAdDismissed(adId) {
        const dismissedAds = getDismissedAds();
        return dismissedAds.includes(adId);
    }

    // Function to dismiss an ad
    function dismissAd(adId) {
        const dismissedAds = getDismissedAds();
        if (!dismissedAds.includes(adId)) {
            dismissedAds.push(adId);
            saveDismissedAds(dismissedAds);
        }

        // Remove the ad from DOM
        const adElement = document.getElementById(`ad-container-${adId}`);
        if (adElement) {
            adElement.classList.add('ad-hidden');
            setTimeout(() => {
                adElement.remove();
                updateMinimizedIndicator();
            }, 300);
        }
    }

    // Function to create ad HTML
    function createAdElement(adData) {
        const adContainer = document.createElement('div');
        adContainer.id = `ad-container-${adData.id}`;
        adContainer.className = 'ad-container';
        adContainer.style.backgroundColor = adData.bgColor || '#ffffff';

        // Add margin to separate multiple ads
        if (document.querySelectorAll('.ad-container').length > 0) {
            adContainer.style.marginBottom = '10px';
        }

        adContainer.innerHTML = `
            <div class="ad-content">
                <div class="ad-image">
                    <img src="${adData.image.src}" alt="${adData.image.alt}">
                </div>
                <div class="ad-text">
                    <div class="ad-title">${adData.title}</div>
                    <div class="ad-description">${adData.description}</div>
                </div>
                <a href="${adData.button.link}" class="ad-button" style="background-color: ${adData.buttonColor || '#4CAF50'}">
                    ${adData.button.text}
                </a>
                <button class="dismiss-btn" aria-label="Dismiss ad" data-ad-id="${adData.id}">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
        `;

        return adContainer;
    }

    // Function to load ads (show only one by default)
    function loadAds(showAll = false) {
        adsContainer.innerHTML = '';
        const dismissedAds = getDismissedAds();
        let visibleAdsCount = 0;

        // Filter out dismissed ads
        const nonDismissedAds = ads.filter(ad => !dismissedAds.includes(ad.id));

        // Show only the first ad if showAll is false
        const adsToShow = showAll ? nonDismissedAds : nonDismissedAds.slice(0, 1);

        adsToShow.forEach(ad => {
            const adElement = createAdElement(ad);
            adsContainer.appendChild(adElement);
            visibleAdsCount++;

            // Add event listener to dismiss button
            const dismissBtn = adElement.querySelector('.dismiss-btn');
            dismissBtn.addEventListener('click', function() {
                const adId = this.getAttribute('data-ad-id');
                dismissAd(adId);
            });
        });

        // Update the minimized indicator
        updateMinimizedIndicator();

        return visibleAdsCount;
    }

    // Function to update the minimized indicator
    function updateMinimizedIndicator() {
        const visibleAdsCount = ads.length - getDismissedAds().length;
        minimizedIndicator.textContent = `Ads (${visibleAdsCount})`;

        if (visibleAdsCount > 0) {
            minimizedIndicator.classList.add('visible');
        } else {
            minimizedIndicator.classList.remove('visible');
        }
    }

    // Load ads initially (show only one)
    loadAds();

    // Reset button event listener
    resetBtn.addEventListener('click', function() {
        localStorage.removeItem('dismissedAds');
        loadAds();
        alert('Ad state has been reset!');
    });

    // Show all ads button event listener
    showAllBtn.addEventListener('click', function() {
        const visibleAdsCount = loadAds(true); // Pass true to show all ads
        if (visibleAdsCount === 0) {
            alert('All ads have been dismissed. Click "Reset Ad State" to show them again.');
        }
    });
     

    // Minimized indicator event listener
    minimizedIndicator.addEventListener('click', function() {
        loadAds(true); // Show all ads when minimized indicator is clicked
        minimizedIndicator.classList.remove('visible');
    });
