// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "HubbyBubby",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Will You Be My Valentine? 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '🧡', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Do you think I like you?",                                    // First interaction
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "I don't just like you boo, I love you! ❤️"           // Secret hover message
        },
        second: {
            text: "How much do you think I love you?",                          // For the love meter
            startText: "This much!",                                   // Text before the percentage
            nextBtn: "Next ❤️"                                         // Text for the next button
        },
        third: {
            text: "My love, will you be my Valentine?", // The big question!
            yesBtn: "Yes!",                                             // Text for "Yes" button
            noBtn: "No"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "YESSS BREAK THE BAR I LOVE YOU MORE THAN YOU CAN IMAGINE 😘😍🧡❤️‍🔥",  // Shows when they go past 5000%
        high: "Still not right, go further 😤",              // Shows when they go past 1000%
        normal: "That's it? Go further 😡"                   // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Thank you for saying yes and making me the happiest and luckiest girl alive sweetheart 😘❤️",
        message: "Now come get your gift, so many kisses from me!!",
        emojis: "💋💋😘😙🥰❤️❤️‍🔥💋💋🧡😍💋💋💋"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ff758c",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ff7eb3",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#e63946",     // Button color (should stand out against the background)
        buttonHover: "#ff4d6d",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#b5172e"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "18s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "40px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.6s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.6        // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
