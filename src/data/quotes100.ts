export interface RenownedQuote {
  id: number;
  quote: string;
  author: string;
  role: string;
  category: 'despair' | 'career' | 'perseverance' | 'backbiting' | 'character';
  lesson: string;
}

export const QUOTES_100: RenownedQuote[] = [
  // --- SECTION 1: OVERCOMING DESPAIR, ADVERSITY & ANXIETY (1-20) ---
  {
    id: 1,
    quote: "If you are going through hell, keep going. Never stop in the middle of darkness.",
    author: "Winston Churchill",
    role: "Statesman & Nobel Laureate",
    category: "despair",
    lesson: "Never surrender to despair; the only exit from hardship is straight through it."
  },
  {
    id: 2,
    quote: "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
    author: "Henry Ford",
    role: "Industrialist & Founder of Ford Motor Co.",
    category: "despair",
    lesson: "Resistance and headwinds are not here to break you; they are designed to lift you."
  },
  {
    id: 3,
    quote: "Everything can be taken from a man but one thing: the last of the human freedoms—to choose one's attitude in any given set of circumstances.",
    author: "Viktor E. Frankl",
    role: "Neurologist, Psychiatrist & Author of 'Man's Search for Meaning'",
    category: "despair",
    lesson: "Even in tragedy, your sovereignty over your own mindset cannot be stolen."
  },
  {
    id: 4,
    quote: "You have power over your mind—not outside events. Realize this, and you will find immense strength.",
    author: "Marcus Aurelius",
    role: "Stoic Philosopher & Roman Emperor",
    category: "despair",
    lesson: "Master your internal reaction; you cannot control storms, but you can control your sails."
  },
  {
    id: 5,
    quote: "Do not grieve. Anything you lose comes round in another form, greater and purer.",
    author: "Jalal al-Din Rumi",
    role: "13th-Century Poet & Scholar",
    category: "despair",
    lesson: "Loss is often divine clearing for something far higher to enter your life."
  },
  {
    id: 6,
    quote: "The wound is the place where the Light enters you.",
    author: "Jalal al-Din Rumi",
    role: "Persian Polymath & Philosopher",
    category: "despair",
    lesson: "Your deepest pain often illuminates your ultimate purpose and empathy."
  },
  {
    id: 7,
    quote: "Rock bottom became the solid foundation on which I rebuilt my entire life.",
    author: "J.K. Rowling",
    role: "Author & Philanthropist",
    category: "despair",
    lesson: "Hitting rock bottom strips away all illusions, leaving unshakeable clarity."
  },
  {
    id: 8,
    quote: "Although the world is full of suffering, it is also full of the overcoming of it.",
    author: "Helen Keller",
    role: "Author, Disability Rights Advocate & Lecturer",
    category: "despair",
    lesson: "Suffering is universal, but the triumph of the human spirit is infinitely greater."
  },
  {
    id: 9,
    quote: "Hard times don't create heroes. It is during the hard times when the 'hero' within us is revealed.",
    author: "Bob Riley",
    role: "Leader & Public Servant",
    category: "despair",
    lesson: "Crises do not destroy character; they uncover who you truly are."
  },
  {
    id: 10,
    quote: "In the depth of winter, I finally learned that within me there lay an invincible summer.",
    author: "Albert Camus",
    role: "Philosopher & Nobel Laureate",
    category: "despair",
    lesson: "Your inner resilience is far warmer and stronger than any cold season of life."
  },
  {
    id: 11,
    quote: "We suffer more often in imagination than in reality.",
    author: "Seneca the Younger",
    role: "Stoic Statesman & Dramatist",
    category: "despair",
    lesson: "Stop torturing yourself with hypothetical dread; tackle only today's reality."
  },
  {
    id: 12,
    quote: "Hope is being able to see that there is light despite all of the darkness.",
    author: "Desmond Tutu",
    role: "Nobel Peace Prize Laureate",
    category: "despair",
    lesson: "Hope is not naive optimism; it is the courage to ignite a lamp in the night."
  },
  {
    id: 13,
    quote: "Out of difficulties grow miracles.",
    author: "Jean de La Bruyère",
    role: "Philosopher & Moralist",
    category: "despair",
    lesson: "The greatest breakthroughs always emerge from the tightest corners."
  },
  {
    id: 14,
    quote: "Courage doesn't always roar. Sometimes courage is the quiet voice at the end of the day saying, 'I will try again tomorrow.'",
    author: "Mary Anne Radmacher",
    role: "Author & Artist",
    category: "despair",
    lesson: "Survival and deciding to wake up tomorrow is in itself a monument of bravery."
  },
  {
    id: 15,
    quote: "The gem cannot be polished without friction, nor man perfected without trials.",
    author: "Confucius",
    role: "Philosopher & Teacher",
    category: "despair",
    lesson: "Friction is the exact process that gives diamond its brilliance."
  },
  {
    id: 16,
    quote: "It always seems impossible until it is done.",
    author: "Nelson Mandela",
    role: "Anti-Apartheid Leader & President of South Africa",
    category: "despair",
    lesson: "The word 'impossible' only describes the state of things before someone finishes them."
  },
  {
    id: 17,
    quote: "Stars can't shine without darkness.",
    author: "D.H. Sidebottom",
    role: "Literary Author",
    category: "despair",
    lesson: "Your potential is most visible when everything else around you is dark."
  },
  {
    id: 18,
    quote: "Do not let what you cannot do interfere with what you can do.",
    author: "John Wooden",
    role: "Legendary Coach & Mentor",
    category: "despair",
    lesson: "Focus all your energy on the levers within your direct control."
  },
  {
    id: 19,
    quote: "He who has a why to live can bear almost any how.",
    author: "Friedrich Nietzsche",
    role: "Philosopher & Philologist",
    category: "despair",
    lesson: "When your purpose is absolute, no circumstance can crush your resolve."
  },
  {
    id: 20,
    quote: "Never give up, for that is just the place and time that the tide will turn.",
    author: "Harriet Beecher Stowe",
    role: "Author & Abolitionist",
    category: "despair",
    lesson: "The tide turns precisely when most people decide to walk away."
  },

  // --- SECTION 2: CAREER, MASTERY, CRAFTSMANSHIP & CODE (21-40) ---
  {
    id: 21,
    quote: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
    author: "Steve Jobs",
    role: "Co-Founder of Apple & Visionary",
    category: "career",
    lesson: "Passion combined with unrelenting standards creates dent-in-the-universe work."
  },
  {
    id: 22,
    quote: "Simplicity is prerequisite for reliability.",
    author: "Edsger W. Dijkstra",
    role: "Turing Award Winner & Pioneer in Software Engineering",
    category: "career",
    lesson: "Great engineering is not making complex things; it is making complex systems beautifully simple."
  },
  {
    id: 23,
    quote: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    author: "Thomas Edison",
    role: "Inventor & Industrialist",
    category: "career",
    lesson: "Raw talent without rigorous execution is an empty promise."
  },
  {
    id: 24,
    quote: "To know that we know what we know, and that we do not know what we do not know, that is true knowledge.",
    author: "Confucius",
    role: "Philosopher",
    category: "career",
    lesson: "Intellectual humility is the foundation of real expertise."
  },
  {
    id: 25,
    quote: "Talk is cheap. Show me the code.",
    author: "Linus Torvalds",
    role: "Creator of Linux & Git",
    category: "career",
    lesson: "Execution and working artifacts always speak louder than theories and promises."
  },
  {
    id: 26,
    quote: "If you want to shine like a sun, first burn like a sun.",
    author: "Dr. A.P.J. Abdul Kalam",
    role: "Aerospace Scientist & 11th President of India",
    category: "career",
    lesson: "The radiance of success requires passing through the intense heat of discipline."
  },
  {
    id: 27,
    quote: "It is not that I'm so smart. But I stay with the questions much longer.",
    author: "Albert Einstein",
    role: "Theoretical Physicist & Nobel Laureate",
    category: "career",
    lesson: "Deep stamina with difficult problems beats fleeting brilliance every single time."
  },
  {
    id: 28,
    quote: "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson",
    role: "MIT Professor of Computer Science",
    category: "career",
    lesson: "Code is a medium of human communication; craft it with empathy and elegance."
  },
  {
    id: 29,
    quote: "The future belongs to those who learn more skills and combine them in creative ways.",
    author: "Robert Greene",
    role: "Author of 'Mastery' & Historian",
    category: "career",
    lesson: "Polymathic agility—blending engineering, design, and culture—creates unstoppable advantage."
  },
  {
    id: 30,
    quote: "Knowledge without action is wastefulness and action without knowledge is foolishness.",
    author: "Imam Al-Ghazali",
    role: "11th-Century Islamic Philosopher & Jurist",
    category: "career",
    lesson: "Theoretical knowledge is incomplete until applied with practical responsibility."
  },
  {
    id: 31,
    quote: "Work gives you meaning and purpose, and life is empty without it.",
    author: "Stephen Hawking",
    role: "Theoretical Physicist & Cosmologist",
    category: "career",
    lesson: "Dedicated craftsmanship anchors human consciousness to purpose."
  },
  {
    id: 32,
    quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    author: "Will Durant (interpreting Aristotle)",
    role: "Philosopher & Historian",
    category: "career",
    lesson: "Excellence is daily consistency compounded over years, not sporadic heroics."
  },
  {
    id: 33,
    quote: "I never dreamed about success. I worked for it.",
    author: "Estée Lauder",
    role: "Entrepreneur & Business Pioneer",
    category: "career",
    lesson: "Daydreams without sweat are mere fantasies; roll up your sleeves."
  },
  {
    id: 34,
    quote: "Quality is not an act, it is a habit.",
    author: "Aristotle",
    role: "Classical Greek Philosopher",
    category: "career",
    lesson: "Raise your baseline standards on every small function and comment you write."
  },
  {
    id: 35,
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
    role: "Computer Scientist & GUI Pioneer",
    category: "career",
    lesson: "Do not wait for technological trends; build the tools you wish existed."
  },
  {
    id: 36,
    quote: "Learning never exhausts the mind.",
    author: "Leonardo da Vinci",
    role: "Renaissance Polymath & Artist",
    category: "career",
    lesson: "Curiosity expands intellectual capacity rather than fatiguing it."
  },
  {
    id: 37,
    quote: "Small deeds done are better than great deeds planned.",
    author: "Peter Marshall",
    role: "Author & Chaplain",
    category: "career",
    lesson: "Ship the MVP; a completed humble tool beats an unwritten masterpiece."
  },
  {
    id: 38,
    quote: "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
    author: "Thomas Edison",
    role: "Inventor",
    category: "career",
    lesson: "Real golden opportunities usually present themselves as unglamorous problems."
  },
  {
    id: 39,
    quote: "Whatever you do, do it with all your might. Work at it with all your heart.",
    author: "Leo Tolstoy",
    role: "Author & Philosopher",
    category: "career",
    lesson: "Half-hearted work drains the soul; whole-hearted commitment energizes it."
  },
  {
    id: 40,
    quote: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
    role: "Software Architect",
    category: "career",
    lesson: "Clarity of thought must precede keystrokes; conceptual clarity is king."
  },

  // --- SECTION 3: MOTIVATION, PATIENCE & PERSEVERANCE (41-60) ---
  {
    id: 41,
    quote: "Patience is bitter, but its fruit is sweet.",
    author: "Jean-Jacques Rousseau",
    role: "Genevan Philosopher & Writer",
    category: "perseverance",
    lesson: "Enduring the delay of gratification always yields the richest reward."
  },
  {
    id: 42,
    quote: "Continuous effort—not strength or intelligence—is the key to unlocking our potential.",
    author: "Winston Churchill",
    role: "Statesman",
    category: "perseverance",
    lesson: "Dogged persistence will consistently outclimb pure intellect."
  },
  {
    id: 43,
    quote: "Do not pray for an easy life, pray for the strength to endure a difficult one.",
    author: "Bruce Lee",
    role: "Martial Artist & Philosopher",
    category: "perseverance",
    lesson: "Desire stronger shoulders rather than lighter weights."
  },
  {
    id: 44,
    quote: "A river cuts through rock, not because of its power, but because of its persistence.",
    author: "Jim Watkins",
    role: "Author & Businessman",
    category: "perseverance",
    lesson: "Gentle consistency will breach barriers that brute force cannot touch."
  },
  {
    id: 45,
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
    role: "Philosopher",
    category: "perseverance",
    lesson: "Speed is irrelevant compared to the steadfastness of direction."
  },
  {
    id: 46,
    quote: "Patience is not the ability to wait, but the ability to keep a good attitude while waiting.",
    author: "Joyce Meyer",
    role: "Author & Speaker",
    category: "perseverance",
    lesson: "True patience is graceful composure during the delay, not sullen resentment."
  },
  {
    id: 47,
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    role: "Statesman",
    category: "perseverance",
    lesson: "Neither applause nor defeat define you; only your will to stand back up."
  },
  {
    id: 48,
    quote: "The man who moves a mountain begins by carrying away small stones.",
    author: "Confucius",
    role: "Philosopher",
    category: "perseverance",
    lesson: "Monumental feats are simply thousands of mundane micro-tasks finished."
  },
  {
    id: 49,
    quote: "When you feel like quitting, think about why you started.",
    author: "Anonymous Sage",
    role: "Ancient Proverb",
    category: "perseverance",
    lesson: "Reconnecting with your core genesis reignites depleted reserves."
  },
  {
    id: 50,
    quote: "Through perseverance many people win success out of what seemed destined to be certain failure.",
    author: "Benjamin Disraeli",
    role: "British Prime Minister",
    category: "perseverance",
    lesson: "The turning point usually looks identical to impending defeat."
  },
  {
    id: 51,
    quote: "Fall seven times, stand up eight.",
    author: "Japanese Proverb",
    role: "Zen Philosophy (Nana korobi ya oki)",
    category: "perseverance",
    lesson: "The formula for victory is strictly: recoveries = falls + 1."
  },
  {
    id: 52,
    quote: "Discipline is the bridge between goals and accomplishment.",
    author: "Jim Rohn",
    role: "Author & Motivational Speaker",
    category: "perseverance",
    lesson: "Motivation gets you started; unbending discipline gets you to the finish line."
  },
  {
    id: 53,
    quote: "I can accept failure, everyone fails at something. But I can't accept not trying.",
    author: "Michael Jordan",
    role: "6-Time NBA Champion & Icon",
    category: "perseverance",
    lesson: "Honorable failure in the arena is infinite levels above cowardice in the stands."
  },
  {
    id: 54,
    quote: "Difficult roads often lead to beautiful destinations.",
    author: "Zig Ziglar",
    role: "Author & Speaker",
    category: "perseverance",
    lesson: "The steepness of the climb is proportionate to the grandeur of the summit view."
  },
  {
    id: 55,
    quote: "Energy and persistence conquer all things.",
    author: "Benjamin Franklin",
    role: "Polymath, Scientist & Founding Father",
    category: "perseverance",
    lesson: "Channel vitality and stubborn stamina to disintegrate obstacles."
  },
  {
    id: 56,
    quote: "Strength does not come from winning. Your struggles develop your strengths.",
    author: "Arnold Schwarzenegger",
    role: "Athlete, Leader & Actor",
    category: "perseverance",
    lesson: "Trophies are byproducts; muscle is forged exclusively under tension."
  },
  {
    id: 57,
    quote: "Perseverance is failing 19 times and succeeding the 20th.",
    author: "Julie Andrews",
    role: "Legendary Artist",
    category: "perseverance",
    lesson: "Every failed iteration eliminates one false hypothesis."
  },
  {
    id: 58,
    quote: "If you can't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving forward.",
    author: "Martin Luther King Jr.",
    role: "Civil Rights Leader & Nobel Laureate",
    category: "perseverance",
    lesson: "Forward momentum is non-negotiable, regardless of your current speed."
  },
  {
    id: 59,
    quote: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
    role: "Author & Humorist",
    category: "perseverance",
    lesson: "Dismantle large overwhelming projects into small immediate tasks."
  },
  {
    id: 60,
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
    role: "Leader",
    category: "perseverance",
    lesson: "Resurrection is the supreme metric of a human being's character."
  },

  // --- SECTION 4: AVOIDING BACKBITING, GOSSIP & PROTECTING INTEGRITY (61-80) ---
  {
    id: 61,
    quote: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    author: "Eleanor Roosevelt",
    role: "Human Rights Leader & Diplomat",
    category: "backbiting",
    lesson: "Elevate your conversation to philosophy, systems, and creation, never petty gossip."
  },
  {
    id: 62,
    quote: "Whoever gossips to you will gossip about you.",
    author: "Imam Al-Shafi'i",
    role: "Classical Islamic Scholar & Jurist",
    category: "backbiting",
    lesson: "A person who brings you other people's secrets will gleefully trade yours tomorrow."
  },
  {
    id: 63,
    quote: "Be not the judge of others, but rather the master of thyself.",
    author: "Marcus Aurelius",
    role: "Stoic Emperor",
    category: "backbiting",
    lesson: "Direct all critical faculties toward your own flaws before surveying others."
  },
  {
    id: 64,
    quote: "Before you speak, let your words pass through three gates: Is it true? Is it necessary? Is it kind?",
    author: "Socrates (attributed)",
    role: "Classical Greek Philosopher",
    category: "backbiting",
    lesson: "Filter every syllable through truth, necessity, and compassion."
  },
  {
    id: 65,
    quote: "Speak only if it improves upon the silence.",
    author: "Mahatma Gandhi",
    role: "Leader of Peaceful Resistance",
    category: "backbiting",
    lesson: "Silence is sacred; break it only to add genuine value, harmony, or truth."
  },
  {
    id: 66,
    quote: "Rumor is a pipe blown by surmises, jealousies, conjectures.",
    author: "William Shakespeare",
    role: "Playwright & Poet",
    category: "backbiting",
    lesson: "Gossip is fueled by poisoned envy; refuse to be an instrument of rumors."
  },
  {
    id: 67,
    quote: "How much more grievous are the consequences of anger and gossip than the causes of them.",
    author: "Marcus Aurelius",
    role: "Philosopher",
    category: "backbiting",
    lesson: "The wreckage caused by reckless talk is infinitely worse than whatever triggered it."
  },
  {
    id: 68,
    quote: "The tongue is a small thing, but what enormous damage it can do.",
    author: "James the Just",
    role: "Ancient Teacher & Apostle",
    category: "backbiting",
    lesson: "A careless word can ignite a forest fire; guard your tongue meticulously."
  },
  {
    id: 69,
    quote: "He who guards his mouth preserves his life, but he who opens wide his lips comes to ruin.",
    author: "King Solomon",
    role: "Ancient Monarch & Proverbial Sage",
    category: "backbiting",
    lesson: "Restraint of speech is an invisible armor protecting your reputation and soul."
  },
  {
    id: 70,
    quote: "What you don't see with your eyes, don't witness with your mouth.",
    author: "Jewish Proverb",
    role: "Ancient Wisdom Tradition",
    category: "backbiting",
    lesson: "Never parrot hearsay or unverified assumptions as facts."
  },
  {
    id: 71,
    quote: "Pay no attention to what critics say. A statue has never been erected in honor of a critic.",
    author: "Jean Sibelius",
    role: "Finnish Composer",
    category: "backbiting",
    lesson: "Ignore the background noise of passive onlookers; focus entirely on building."
  },
  {
    id: 72,
    quote: "Listen with curiosity. Speak with honesty. Act with integrity.",
    author: "Roy T. Bennett",
    role: "Author of 'The Light in the Heart'",
    category: "backbiting",
    lesson: "Curiosity over judgment, honesty over manipulation, integrity over convenience."
  },
  {
    id: 73,
    quote: "Words have energy and power with the ability to help, to heal, to hinder, to hurt, to harm, to humiliate, and to humble.",
    author: "Yehuda Berg",
    role: "Author & Teacher",
    category: "backbiting",
    lesson: "Treat spoken words as potent energy waves that permanently alter human spirits."
  },
  {
    id: 74,
    quote: "Do not let the behavior of others destroy your inner peace.",
    author: "Dalai Lama",
    role: "Spiritual Leader & Nobel Laureate",
    category: "backbiting",
    lesson: "Other people's toxic gossip is a reflection of their pain, not your reality."
  },
  {
    id: 75,
    quote: "Character is doing the right thing when nobody is looking.",
    author: "C.S. Lewis",
    role: "Scholar & Novelist",
    category: "backbiting",
    lesson: "True honor is how you speak of people when they are absent from the room."
  },
  {
    id: 76,
    quote: "A man is known by the company he avoids.",
    author: "Ambrose Bierce",
    role: "Journalist & Satirist",
    category: "backbiting",
    lesson: "Walk away from gatherings where reputations are dissected for amusement."
  },
  {
    id: 77,
    quote: "To speak ill of others is a dishonest way of praising ourselves.",
    author: "Will Durant",
    role: "Philosopher & Author",
    category: "backbiting",
    lesson: "Tearing someone else down is a cowardly attempt to disguise one's own insecurity."
  },
  {
    id: 78,
    quote: "Better to remain silent and be thought a fool than to speak and to remove all doubt.",
    author: "Maurice Switzer (often attr. to Abraham Lincoln)",
    role: "Author",
    category: "backbiting",
    lesson: "Discretion in speech protects dignity far better than premature chatter."
  },
  {
    id: 79,
    quote: "He that is slow to anger is better than the mighty, and he that ruleth his spirit than he that taketh a city.",
    author: "Proverbs of Wisdom",
    role: "Ancient Literature",
    category: "backbiting",
    lesson: "Conquering one's own impulsive reactions is higher than conquering an empire."
  },
  {
    id: 80,
    quote: "Envy is thin because it bites but never eats.",
    author: "Spanish Proverb",
    role: "Folk Wisdom",
    category: "backbiting",
    lesson: "Envy starves the host without ever satisfying its hunger; bless others instead."
  },

  // --- SECTION 5: CHARACTER, KINDNESS, GRATITUDE & LEADERSHIP (81-100) ---
  {
    id: 81,
    quote: "Try not to become a man of success, but rather become a man of value.",
    author: "Albert Einstein",
    role: "Physicist & Nobel Laureate",
    category: "character",
    lesson: "Value creates durable impact; superficial success evaporates into thin air."
  },
  {
    id: 82,
    quote: "In a gentle way, you can shake the world.",
    author: "Mahatma Gandhi",
    role: "Civil Rights Leader",
    category: "character",
    lesson: "True revolution is born of gentleness, truth, and unshakable conviction."
  },
  {
    id: 83,
    quote: "No act of kindness, no matter how small, is ever wasted.",
    author: "Aesop",
    role: "Ancient Greek Storyteller",
    category: "character",
    lesson: "A warm smile or thoughtful gesture has infinite ripple effects across time."
  },
  {
    id: 84,
    quote: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
    author: "Martin Luther King Jr.",
    role: "Leader & Nobel Peace Laureate",
    category: "character",
    lesson: "Oppose malice not with bitterness, but with superior goodness and dignity."
  },
  {
    id: 85,
    quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    author: "Maya Angelou",
    role: "Poet & Civil Rights Activist",
    category: "character",
    lesson: "Emotional impact and sincere warmth outlive intellect and eloquence."
  },
  {
    id: 86,
    quote: "The true measure of a man is how he treats someone who can do him absolutely no good.",
    author: "Samuel Johnson",
    role: "Writer & Lexicographer",
    category: "character",
    lesson: "Humility and nobility show when there is zero transactional benefit to being kind."
  },
  {
    id: 87,
    quote: "Gratitude is not only the greatest of virtues, but the parent of all the others.",
    author: "Marcus Tullius Cicero",
    role: "Roman Statesman & Orator",
    category: "character",
    lesson: "Gratitude unlocks abundance, contentment, and authentic joy in every moment."
  },
  {
    id: 88,
    quote: "To handle yourself, use your head; to handle others, use your heart.",
    author: "Eleanor Roosevelt",
    role: "Diplomat",
    category: "character",
    lesson: "Self-discipline demands logic; leadership requires deep empathy."
  },
  {
    id: 89,
    quote: "The supreme art of war is to subdue the enemy without fighting.",
    author: "Sun Tzu",
    role: "Military Strategist & Author of 'The Art of War'",
    category: "character",
    lesson: "Strategic wisdom, calm deterrence, and diplomatic grace supersede conflict."
  },
  {
    id: 90,
    quote: "Be kind, for everyone you meet is fighting a hard battle.",
    author: "Ian Maclaren (John Watson)",
    role: "Author & Theologian",
    category: "character",
    lesson: "Carry compassion; you never know the private storms strangers are enduring."
  },
  {
    id: 91,
    quote: "Integrity is telling myself the truth. And honesty is telling the truth to other people.",
    author: "Spencer Johnson",
    role: "Author of 'Who Moved My Cheese?'",
    category: "character",
    lesson: "Never deceive your own conscience; clear conscience is the softest pillow."
  },
  {
    id: 92,
    quote: "Service to others is the rent you pay for your room here on Earth.",
    author: "Muhammad Ali",
    role: "Heavyweight World Champion & Humanitarian",
    category: "character",
    lesson: "Your life's rent is paid through selfless contributions to fellow beings."
  },
  {
    id: 93,
    quote: "Humility is not thinking less of yourself, it's thinking of yourself less.",
    author: "C.S. Lewis",
    role: "Scholar & Author",
    category: "character",
    lesson: "True humility frees you from the exhausting prison of self-obsession."
  },
  {
    id: 94,
    quote: "The roots of education are bitter, but the fruit is sweet.",
    author: "Aristotle",
    role: "Philosopher",
    category: "character",
    lesson: "Endure the rigorous discipline of learning to harvest lifelong liberation."
  },
  {
    id: 95,
    quote: "A good head and a good heart are always a formidable combination.",
    author: "Nelson Mandela",
    role: "Leader",
    category: "character",
    lesson: "Sharp technical intellect married to deep compassion creates world-changers."
  },
  {
    id: 96,
    quote: "If you want to lift yourself up, lift up someone else.",
    author: "Booker T. Washington",
    role: "Educator & Author",
    category: "character",
    lesson: "Elevating others creates the exact upward momentum that lifts your own life."
  },
  {
    id: 97,
    quote: "Waste no more time arguing what a good man should be. Be one.",
    author: "Marcus Aurelius",
    role: "Stoic Emperor",
    category: "character",
    lesson: "Stop debating morality in abstract theory; embody it in your daily actions."
  },
  {
    id: 98,
    quote: "The privilege of a lifetime is to become who you truly are.",
    author: "Carl Jung",
    role: "Psychiatrist & Psychoanalyst",
    category: "character",
    lesson: "Strip away societal pretense to align with your authentic divine purpose."
  },
  {
    id: 99,
    quote: "Peace cannot be kept by force; it can only be achieved by understanding.",
    author: "Albert Einstein",
    role: "Physicist",
    category: "character",
    lesson: "Lasting harmony is forged through deep listening and genuine understanding."
  },
  {
    id: 100,
    quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi",
    role: "Philosopher & Leader",
    category: "character",
    lesson: "Anchor your conscience to eternal readiness, and nourish your intellect endlessly."
  }
];
