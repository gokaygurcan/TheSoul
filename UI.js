//UI additions by Aquila
//Only thing I want to add later is images/searching for bosses
const jokers = [
    { "name": "Joker", "pos": { "x": 0, "y": 0 }, "details": { "effect": "+4 Mult", "extra": "", "cost": "$2", "rarity": "Common" } },
    { "name": "Greedy Joker", "pos": { "x": 6, "y": 1 }, "details": { "effect": "Played cards with  Diamond suit give +3 Mult when scored", "extra": "", "cost": "$5", "rarity": "Common" } },
    { "name": "Lusty Joker", "pos": { "x": 7, "y": 1 }, "details": { "effect": "Played cards with  Heart suit give +3 Mult when scored", "extra": "", "cost": "$5", "rarity": "Common" } },
    { "name": "Wrathful Joker", "pos": { "x": 8, "y": 1 }, "details": { "effect": "Played cards with  Spade suit give +3 Mult when scored", "extra": "", "cost": "$5", "rarity": "Common" } },
    { "name": "Gluttonous Joker", "pos": { "x": 9, "y": 1 }, "details": { "effect": "Played cards with  Club suit give +3 Mult when scored", "extra": "", "cost": "$5", "rarity": "Common" } },
    { "name": "Jolly Joker", "pos": { "x": 2, "y": 0 }, "details": { "effect": "+8 Mult if played hand contains a Pair", "extra": "", "cost": "$3", "rarity": "Common" } },
    { "name": "Zany Joker", "pos": { "x": 3, "y": 0 }, "details": { "effect": "+12 Mult if played hand contains a Three of a Kind", "extra": "", "cost": "$4", "rarity": "Common" } },
    { "name": "Mad Joker", "pos": { "x": 4, "y": 0 }, "details": { "effect": "+10 Mult if played hand contains a Two Pair", "extra": "", "cost": "$4", "rarity": "Common" } },
    { "name": "Crazy Joker", "pos": { "x": 5, "y": 0 }, "details": { "effect": "+12 Mult if played hand contains a Straight", "extra": "", "cost": "$4", "rarity": "Common" } },
    { "name": "Droll Joker", "pos": { "x": 6, "y": 0 }, "details": { "effect": "+10 Mult if played hand contains a Flush", "extra": "", "cost": "$4", "rarity": "Common" } },
    { "name": "Sly Joker", "pos": { "x": 0, "y": 14 }, "details": { "effect": "+50 Chips if played hand contains a Pair", "extra": "", "cost": "$3", "rarity": "Common" } },
    { "name": "Wily Joker", "pos": { "x": 1, "y": 14 }, "details": { "effect": "+100 Chips if played hand contains a Three of a Kind", "extra": "", "cost": "$4", "rarity": "Common" } },
    { "name": "Clever Joker", "pos": { "x": 2, "y": 14 }, "details": { "effect": "+80 Chips if played hand contains a Two Pair", "extra": "", "cost": "$4", "rarity": "Common" } },
    { "name": "Devious Joker", "pos": { "x": 3, "y": 14 }, "details": { "effect": "+100 Chips if played hand contains a Straight", "extra": "", "cost": "$4", "rarity": "Common" } },
    { "name": "Crafty Joker", "pos": { "x": 4, "y": 14 }, "details": { "effect": "+80 Chips if played hand contains a Flush", "extra": "", "cost": "$4", "rarity": "Common" } },
    { "name": "Half Joker", "pos": { "x": 7, "y": 0 }, "details": { "effect": "+20 Mult if played hand contains 3 or fewer cards", "extra": "", "cost": "$5", "rarity": "Common" } },
    { "name": "Joker Stencil", "pos": { "x": 2, "y": 5 }, "details": { "effect": "X1 Mult for each empty Joker slot. Joker Stencil included", "extra": "(Currently X1)", "cost": "$8", "rarity": "Uncommon" } },
    { "name": "Four Fingers", "pos": { "x": 6, "y": 6 }, "details": { "effect": "All Flushes and Straights can be made with 4 cards", "extra": "", "cost": "$7", "rarity": "Uncommon" } },
    { "name": "Mime", "pos": { "x": 4, "y": 1 }, "details": { "effect": "Retrigger all card held in hand abilities", "extra": "", "cost": "$5", "rarity": "Uncommon" } },
    { "name": "Credit Card", "pos": { "x": 5, "y": 1 }, "details": { "effect": "Go up to -$20 in debt", "extra": "", "cost": "$1", "rarity": "Common" } },
    { "name": "Ceremonial Dagger", "pos": { "x": 5, "y": 5 }, "details": { "effect": "When Blind is selected, destroy Joker to the right and permanently add double its sell value to this Mult ", "extra": "(Currently +0 Mult)", "cost": "$6", "rarity": "Uncommon" } },
    { "name": "Banner", "pos": { "x": 1, "y": 2 }, "details": { "effect": "+30 Chips for each remaining discard", "extra": "", "cost": "$5", "rarity": "Common" } },
    { "name": "Mystic Summit", "pos": { "x": 2, "y": 2 }, "details": { "effect": "+15 Mult when 0 discards remaining", "extra": "", "cost": "$5", "rarity": "Common" } },
    { "name": "Marble Joker", "pos": { "x": 3, "y": 2 }, "details": { "effect": "Adds one Stone card to the deck when Blind is selected", "extra": "", "cost": "$6", "rarity": "Uncommon" } },
    { "name": "Loyalty Card", "pos": { "x": 4, "y": 2 }, "details": { "effect": "X4 Mult every 6 hands played", "extra": "(5 remaining)", "cost": "$5", "rarity": "Uncommon" } },
    { "name": "8 Ball", "pos": { "x": 0, "y": 5 }, "details": { "effect": "1 in 4 chance for each played 8 to create a Tarot card when scored", "extra": "(Must have room)", "cost": "$5", "rarity": "Common" } },
    { "name": "Misprint", "pos": { "x": 6, "y": 2 }, "details": { "effect": "+0-23 Mult", "extra": "", "cost": "$4", "rarity": "Common" } },
    { "name": "Dusk", "pos": { "x": 4, "y": 7 }, "details": { "effect": "Retrigger all played cards in final hand of the round", "extra": "", "cost": "$5", "rarity": "Uncommon" } },
    { "name": "Raised Fist", "pos": { "x": 8, "y": 2 }, "details": { "effect": "Adds double the rank of lowest ranked card held in hand to Mult", "extra": "", "cost": "$5", "rarity": "Common" } },
    { "name": "Chaos the Clown", "pos": { "x": 1, "y": 0 }, "details": { "effect": "1 free Reroll per shop", "extra": "", "cost": "$4", "rarity": "Common" } },
    { "name": "Fibonacci", "pos": { "x": 1, "y": 5 }, "details": { "effect": "Each played Ace, 2, 3, 5, or 8 gives +8 Mult when scored", "extra": "", "cost": "$8", "rarity": "Uncommon" } },
    { "name": "Steel Joker", "pos": { "x": 7, "y": 2 }, "details": { "effect": "Gives X0.2 Mult for each Steel Card in your full deck", "extra": "(Currently X1 Mult)", "cost": "$7", "rarity": "Uncommon" } },
    { "name": "Scary Face", "pos": { "x": 2, "y": 3 }, "details": { "effect": "Played face cards give +30 Chips when scored", "extra": "", "cost": "$4", "rarity": "Common" } },
    { "name": "Abstract Joker", "pos": { "x": 3, "y": 3 }, "details": { "effect": "+3 Mult for each Joker card", "extra": "(Currently +0 Mult)", "cost": "$4", "rarity": "Common" } },
    { "name": "Delayed Gratification", "pos": { "x": 4, "y": 3 }, "details": { "effect": "Earn $2 per discard if no discards are used by end of the round", "extra": "", "cost": "$4", "rarity": "Common" } },
    { "name": "Hack", "pos": { "x": 5, "y": 2 }, "details": { "effect": "Retrigger each played 2, 3, 4, or 5", "extra": "", "cost": "$6", "rarity": "Uncommon" } },
    { "name": "Pareidolia", "pos": { "x": 6, "y": 3 }, "details": { "effect": "All cards are considered face cards", "extra": "", "cost": "$5", "rarity": "Uncommon" } },
    { "name": "Gros Michel", "pos": { "x": 7, "y": 6 }, "details": { "effect": "+15 Mult ", "extra": "1 in 6 chance this is destroyed at the end of round.", "cost": "$5", "rarity": "Common" } },
    { "name": "Even Steven", "pos": { "x": 8, "y": 3 }, "details": { "effect": "Played cards with even rank give +4 Mult when scored ", "extra": "(10, 8, 6, 4, 2)", "cost": "$4", "rarity": "Common" } },
    { "name": "Odd Todd", "pos": { "x": 9, "y": 3 }, "details": { "effect": "Played cards with odd rank give +31 Chips when scored ", "extra": "(A, 9, 7, 5, 3)", "cost": "$4", "rarity": "Common" } },
    { "name": "Scholar", "pos": { "x": 3, "y": 6 }, "details": { "effect": "Played Aces give +20 Chips and +4 Mult when scored", "extra": "", "cost": "$4", "rarity": "Common" } },
    { "name": "Business Card", "pos": { "x": 1, "y": 4 }, "details": { "effect": "Played face cards have a 1 in 2 chance to give $2 when scored", "extra": "", "cost": "$4", "rarity": "Common" } },
    { "name": "Supernova", "pos": { "x": 2, "y": 4 }, "details": { "effect": "Adds the number of times poker hand has been played this run to Mult", "extra": "", "cost": "$5", "rarity": "Common" } },
    { "name": "Ride the Bus", "pos": { "x": 1, "y": 6 }, "details": { "effect": "This Joker gains +1 Mult per consecutive hand played without a scoring face card ", "extra": "(Currently +0 Mult)", "cost": "$6", "rarity": "Common" } },
    { "name": "Space Joker", "pos": { "x": 3, "y": 5 }, "details": { "effect": "1 in 4 chance to upgrade level of played poker hand", "extra": "", "cost": "$5", "rarity": "Uncommon" } },
    { "name": "Egg", "pos": { "x": 0, "y": 10 }, "details": { "effect": "Gains $3 of sell value at end of round", "extra": "", "cost": "$4", "rarity": "Common" } },
    { "name": "Burglar", "pos": { "x": 1, "y": 10 }, "details": { "effect": "When Blind is selected, gain +3 Hands and lose all discards", "extra": "", "cost": "$6", "rarity": "Uncommon" } },
    { "name": "Blackboard", "pos": { "x": 2, "y": 10 }, "details": { "effect": "X3 Mult if all cards held in hand are  Spades or  Clubs", "extra": "", "cost": "$6", "rarity": "Uncommon" } },
    { "name": "Runner", "pos": { "x": 3, "y": 10 }, "details": { "effect": "Gains +15 Chips if played hand contains a Straight ", "extra": "(Currently +0 Chips)", "cost": "$5", "rarity": "Common" } },
    { "name": "Ice Cream", "pos": { "x": 4, "y": 10 }, "details": { "effect": "+100 Chips -5 Chips for every hand played", "extra": "", "cost": "$5", "rarity": "Common" } },
    { "name": "DNA", "pos": { "x": 5, "y": 10 }, "details": { "effect": "If first hand of round has only 1 card, add a permanent copy to deck and draw it to hand", "extra": "", "cost": "$8", "rarity": "Rare" } },
    { "name": "Splash", "pos": { "x": 6, "y": 10 }, "details": { "effect": "Every played card counts in scoring", "extra": "", "cost": "$3", "rarity": "Common" } },
    { "name": "Blue Joker", "pos": { "x": 7, "y": 10 }, "details": { "effect": "+2 Chips for each remaining card in deck ", "extra": "(Currently +104 Chips)", "cost": "$5", "rarity": "Common" } },
    { "name": "Sixth Sense", "pos": { "x": 8, "y": 10 }, "details": { "effect": "If first hand of round is a single 6, destroy it and create a Spectral card ", "extra": "(Must have room)", "cost": "$6", "rarity": "Uncommon" } },
    { "name": "Constellation", "pos": { "x": 9, "y": 10 }, "details": { "effect": "This Joker gains X0.1 Mult every time a Planet card is used ", "extra": "(Currently X1 Mult)", "cost": "$6", "rarity": "Uncommon" } },
    { "name": "Hiker", "pos": { "x": 0, "y": 11 }, "details": { "effect": "Every played card permanently gains +5 Chips when scored", "extra": "", "cost": "$5", "rarity": "Uncommon" } },
    { "name": "Faceless Joker", "pos": { "x": 1, "y": 11 }, "details": { "effect": "Earn $5 if 3 or more face cards are discarded at the same time", "extra": "", "cost": "$4", "rarity": "Common" } },
    { "name": "Green Joker", "pos": { "x": 2, "y": 11 }, "details": { "effect": "+1 Mult per hand played -1 Mult per discard ", "extra": "(Currently +0 Mult)", "cost": "$4", "rarity": "Common" } },
    { "name": "Superposition", "pos": { "x": 3, "y": 11 }, "details": { "effect": "Create a Tarot card if poker hand contains an Ace and a Straight ", "extra": "(Must have room)", "cost": "$4", "rarity": "Common" } },
    { "name": "To Do List", "pos": { "x": 4, "y": 11 }, "details": { "effect": "Earn $4 if poker hand is a [Poker Hand], poker hand changes at end of round", "extra": "", "cost": "$4", "rarity": "Common" } },
    { "name": "Cavendish", "pos": { "x": 5, "y": 11 }, "details": { "effect": "X3 Mult", "extra": "1 in 1000 chance this card is destroyed at the end of round", "cost": "$4", "rarity": "Common" } },
    { "name": "Card Sharp", "pos": { "x": 6, "y": 11 }, "details": { "effect": "X3 Mult if played poker hand has already been played this round", "extra": "", "cost": "$6", "rarity": "Uncommon" } },
    { "name": "Red Card", "pos": { "x": 7, "y": 11 }, "details": { "effect": "This Joker gains +3 Mult when any Booster Pack is skipped ", "extra": "(Currently +0 Mult)", "cost": "$5", "rarity": "Common" } },
    { "name": "Madness", "pos": { "x": 8, "y": 11 }, "details": { "effect": "When Small Blind or Big Blind is selected, gain X0.5 Mult and destroy a random Joker ", "extra": "(Currently X1 Mult)", "cost": "$7", "rarity": "Uncommon" } },
    { "name": "Square Joker", "pos": { "x": 9, "y": 11 }, "details": { "effect": "This Joker gains +4 Chips if played hand has exactly 4 cards ", "extra": "(Currently 0 Chips)", "cost": "$4", "rarity": "Common" } },
    { "name": "Seance", "pos": { "x": 0, "y": 12 }, "details": { "effect": "If poker hand is a Straight Flush, create a random Spectral card ", "extra": "(Must have room)", "cost": "$6", "rarity": "Uncommon" } },
    { "name": "Riff-raff", "pos": { "x": 1, "y": 12 }, "details": { "effect": "When Blind is selected, create 2 Common Jokers ", "extra": "(Must have room)", "cost": "$6", "rarity": "Common" } },
    { "name": "Vampire", "pos": { "x": 2, "y": 12 }, "details": { "effect": "This Joker gains X0.1 Mult per scoring Enhanced card played, removes card Enhancement ", "extra": "(Currently X1 Mult)", "cost": "$7", "rarity": "Uncommon" } },
    { "name": "Shortcut", "pos": { "x": 3, "y": 12 }, "details": { "effect": "Allows Straights to be made with gaps of 1 rank ", "extra": "(ex: 10 8 6 5 3)", "cost": "$7", "rarity": "Uncommon" } },
    { "name": "Hologram", "pos": { "x": 4, "y": 12 }, "details": { "effect": "This Joker gains X0.25 Mult every time a playing card is added to your deck ", "extra": "(Currently X1 Mult)", "cost": "$7", "rarity": "Uncommon" } },
    { "name": "Vagabond", "pos": { "x": 5, "y": 12 }, "details": { "effect": "Create a Tarot card if hand is played with $4 or less", "extra": "", "cost": "$8", "rarity": "Rare" } },
    { "name": "Baron", "pos": { "x": 6, "y": 12 }, "details": { "effect": "Each King held in hand gives X1.5 Mult", "extra": "", "cost": "$8", "rarity": "Rare" } },
    { "name": "Cloud 9", "pos": { "x": 7, "y": 12 }, "details": { "effect": "Earn $1 for each 9 in your full deck at end of round ", "extra": "(Currently $4)", "cost": "$7", "rarity": "Uncommon" } },
    { "name": "Rocket", "pos": { "x": 8, "y": 12 }, "details": { "effect": "Earn $1 at end of round. Payout increases by $2 when Boss Blind is defeated", "extra": "", "cost": "$6", "rarity": "Uncommon" } },
    { "name": "Obelisk", "pos": { "x": 9, "y": 12 }, "details": { "effect": "This Joker gains X0.2 Mult per consecutive hand played without playing your most played poker hand ", "extra": "(Currently X1 Mult)", "cost": "$8", "rarity": "Rare" } },
    { "name": "Midas Mask", "pos": { "x": 0, "y": 13 }, "details": { "effect": "All played face cards become Gold cards when scored", "extra": "", "cost": "$7", "rarity": "Uncommon" } },
    { "name": "Luchador", "pos": { "x": 1, "y": 13 }, "details": { "effect": "Sell this card to disable the current Boss Blind", "extra": "", "cost": "$5", "rarity": "Uncommon" } },
    { "name": "Photograph", "pos": { "x": 2, "y": 13 }, "details": { "effect": "First played face card gives X2 Mult when scored", "extra": "", "cost": "$5", "rarity": "Common" } },
    { "name": "Gift Card", "pos": { "x": 3, "y": 13 }, "details": { "effect": "Add $1 of sell value to every Joker and Consumable card at end of round", "extra": "", "cost": "$6", "rarity": "Uncommon" } },
    { "name": "Turtle Bean", "pos": { "x": 4, "y": 13 }, "details": { "effect": "+5 hand size, reduces by 1 each round", "extra": "", "cost": "$6", "rarity": "Uncommon" } },
    { "name": "Erosion", "pos": { "x": 5, "y": 13 }, "details": { "effect": "+4 Mult for each card below [the deck's starting size] in your full deck ", "extra": "(Currently +0 Mult)", "cost": "$6", "rarity": "Uncommon" } },
    { "name": "Reserved Parking", "pos": { "x": 6, "y": 13 }, "details": { "effect": "Each face card held in hand has a 1 in 2 chance to give $1", "extra": "", "cost": "$6", "rarity": "Common" } },
    { "name": "Mail In Rebate", "pos": { "x": 7, "y": 13 }, "details": { "effect": "Earn $5 for each discarded [rank], rank changes every round", "extra": "", "cost": "$4", "rarity": "Common" } },
    { "name": "To the Moon", "pos": { "x": 8, "y": 13 }, "details": { "effect": "Earn an extra $1 of interest for every $5 you have at end of round", "extra": "", "cost": "$5", "rarity": "Uncommon" } },
    { "name": "Hallucination", "pos": { "x": 9, "y": 13 }, "details": { "effect": "1 in 2 chance to create a Tarot card when any Booster Pack is opened ", "extra": "(Must have room)", "cost": "$4", "rarity": "Common" } },
    { "name": "Fortune Teller", "pos": { "x": 7, "y": 5 }, "details": { "effect": "+1 Mult per Tarot card used this run ", "extra": "(Currently +0)", "cost": "$6", "rarity": "Common" } },
    { "name": "Juggler", "pos": { "x": 0, "y": 1 }, "details": { "effect": "+1 hand size", "extra": "", "cost": "$4", "rarity": "Common" } },
    { "name": "Drunkard", "pos": { "x": 1, "y": 1 }, "details": { "effect": "+1 discard each round", "extra": "", "cost": "$4", "rarity": "Common" } },
    { "name": "Stone Joker", "pos": { "x": 9, "y": 0 }, "details": { "effect": "Gives +25 Chips for each Stone Card in your full deck ", "extra": "(Currently +0 Chips)", "cost": "$6", "rarity": "Uncommon" } },
    { "name": "Golden Joker", "pos": { "x": 9, "y": 2 }, "details": { "effect": "Earn $4 at end of round", "extra": "", "cost": "$6", "rarity": "Common" } },
    { "name": "Lucky Cat", "pos": { "x": 5, "y": 14 }, "details": { "effect": "This Joker gains X0.25 Mult every time a Lucky card successfully triggers ", "extra": "(Currently X1 Mult)", "cost": "$6", "rarity": "Uncommon" } },
    { "name": "Baseball Card", "pos": { "x": 6, "y": 14 }, "details": { "effect": "Uncommon Jokers each give X1.5 Mult", "extra": "", "cost": "$8", "rarity": "Rare" } },
    { "name": "Bull", "pos": { "x": 7, "y": 14 }, "details": { "effect": "+2 Chips for each $1 you have ", "extra": "(Currently +0 Chips)", "cost": "$6", "rarity": "Uncommon" } },
    { "name": "Diet Cola", "pos": { "x": 8, "y": 14 }, "details": { "effect": "Sell this card to create a free Double Tag", "extra": "", "cost": "$6", "rarity": "Uncommon" } },
    { "name": "Trading Card", "pos": { "x": 9, "y": 14 }, "details": { "effect": "If first discard of round has only 1 card, destroy it and earn $3", "extra": "", "cost": "$6", "rarity": "Uncommon" } },
    { "name": "Flash Card", "pos": { "x": 0, "y": 15 }, "details": { "effect": "This Joker gains +2 Mult per reroll in the shop (Currently +0 Mult)", "extra": "", "cost": "$5", "rarity": "Uncommon" } },
    { "name": "Popcorn", "pos": { "x": 1, "y": 15 }, "details": { "effect": "+20 Mult -4 Mult per round played", "extra": "", "cost": "$5", "rarity": "Common" } },
    { "name": "Spare Trousers", "pos": { "x": 4, "y": 15 }, "details": { "effect": "This Joker gains +2 Mult if played hand contains a Two Pair ", "extra": "(Currently +0 Mult)", "cost": "$6", "rarity": "Uncommon" } },
    { "name": "Ancient Joker", "pos": { "x": 7, "y": 15 }, "details": { "effect": "Each played card with [suit] gives X1.5 Mult", "extra": "when scored, suit changes at end of round", "cost": "$8", "rarity": "Rare" } },
    { "name": "Ramen", "pos": { "x": 2, "y": 15 }, "details": { "effect": "X2 Mult, loses X0.01 Mult per card discarded", "extra": "", "cost": "$6", "rarity": "Uncommon" } },
    { "name": "Walkie Talkie", "pos": { "x": 8, "y": 15 }, "details": { "effect": "Each played 10 or 4 gives +10 Chips and +4 Mult when scored", "extra": "", "cost": "$4", "rarity": "Common" } },
    { "name": "Seltzer", "pos": { "x": 3, "y": 15 }, "details": { "effect": "Retrigger all cards played for the next 10 hands", "extra": "", "cost": "$6", "rarity": "Uncommon" } },
    { "name": "Castle", "pos": { "x": 9, "y": 15 }, "details": { "effect": "This Joker gains +3 Chips per discarded [suit] card, suit changes every round ", "extra": "(Currently +0 Chips)", "cost": "$6", "rarity": "Uncommon" } },
    { "name": "Smiley Face", "pos": { "x": 6, "y": 15 }, "details": { "effect": "Played face cards give +5 Mult when scored", "extra": "", "cost": "$4", "rarity": "Common" } },
    { "name": "Campfire", "pos": { "x": 5, "y": 15 }, "details": { "effect": "This Joker gains X0.25 Mult for each card sold, resets when Boss Blind is defeated ", "extra": "(Currently X1 Mult)", "cost": "$9", "rarity": "Rare" } },
    { "name": "Golden Ticket", "pos": { "x": 5, "y": 3 }, "details": { "effect": "Played Gold cards earn $4 when scored", "extra": "", "cost": "$5", "rarity": "Common" } },
    { "name": "Mr. Bones", "pos": { "x": 3, "y": 4 }, "details": { "effect": "Prevents Death if chips scored are at least 25% of required chips self destructs", "extra": "", "cost": "$5", "rarity": "Uncommon" } },
    { "name": "Acrobat", "pos": { "x": 2, "y": 1 }, "details": { "effect": "X3 Mult on final hand of round", "extra": "", "cost": "$6", "rarity": "Uncommon" } },
    { "name": "Sock and Buskin", "pos": { "x": 3, "y": 1 }, "details": { "effect": "Retrigger all played face cards", "extra": "", "cost": "$6", "rarity": "Uncommon" } },
    { "name": "Swashbuckler", "pos": { "x": 9, "y": 5 }, "details": { "effect": "Adds the sell value of all other owned Jokers to Mult ", "extra": "(Currently +1 Mult)", "cost": "$4", "rarity": "Common" } },
    { "name": "Troubadour", "pos": { "x": 0, "y": 2 }, "details": { "effect": "+2 hand size, -1 hand per round", "extra": "", "cost": "$6", "rarity": "Uncommon" } },
    { "name": "Certificate", "pos": { "x": 8, "y": 8 }, "details": { "effect": "When round begins, add a random playing card with a random seal to your hand", "extra": "", "cost": "$6", "rarity": "Uncommon" } },
    { "name": "Smeared Joker", "pos": { "x": 4, "y": 6 }, "details": { "effect": "Hearts and  Diamonds count as the same suit,  Spades and  Clubs count as the same suit", "extra": "", "cost": "$7", "rarity": "Uncommon" } },
    { "name": "Throwback", "pos": { "x": 5, "y": 7 }, "details": { "effect": "X0.25 Mult for each Blind skipped this run ", "extra": "(Currently X1 Mult)", "cost": "$6", "rarity": "Uncommon" } },
    { "name": "Hanging Chad", "pos": { "x": 9, "y": 6 }, "details": { "effect": "Retrigger first played card used in scoring 2 additional times", "extra": "", "cost": "$4", "rarity": "Common" } },
    { "name": "Rough Gem", "pos": { "x": 9, "y": 7 }, "details": { "effect": "Played cards with  Diamond suit earn $1 when scored", "extra": "", "cost": "$7", "rarity": "Uncommon" } },
    { "name": "Bloodstone", "pos": { "x": 0, "y": 8 }, "details": { "effect": "1 in 2 chance for played cards with  Heart suit to give X1.5 Mult when scored", "extra": "", "cost": "$7", "rarity": "Uncommon" } },
    { "name": "Arrowhead", "pos": { "x": 1, "y": 8 }, "details": { "effect": "Played cards with  Spade suit give +50 Chips when scored", "extra": "", "cost": "$7", "rarity": "Uncommon" } },
    { "name": "Onyx Agate", "pos": { "x": 2, "y": 8 }, "details": { "effect": "Played cards with  Club suit give +7 Mult when scored", "extra": "", "cost": "$7", "rarity": "Uncommon" } },
    { "name": "Glass Joker", "pos": { "x": 1, "y": 3 }, "details": { "effect": "This Joker gains X0.75 Mult for every Glass Card that is destroyed ", "extra": "(Currently X1 Mult)", "cost": "$6", "rarity": "Uncommon" } },
    { "name": "Showman", "pos": { "x": 6, "y": 5 }, "details": { "effect": "Joker, Tarot, Planet, and Spectral cards may appear multiple times", "extra": "", "cost": "$5", "rarity": "Uncommon" } },
    { "name": "Flower Pot", "pos": { "x": 0, "y": 6 }, "details": { "effect": "X3 Mult if poker hand contains a  Diamond card,  Club card,  Heart card, and  Spade card", "extra": "", "cost": "$6", "rarity": "Uncommon" } },
    { "name": "Blueprint", "pos": { "x": 0, "y": 3 }, "details": { "effect": "Copies ability of Joker to the right", "extra": "", "cost": "$10", "rarity": "Rare" } },
    { "name": "Wee Joker", "pos": { "x": 0, "y": 4 }, "details": { "effect": "This Joker gains +8 Chips when each played 2 is scored ", "extra": "(Currently +0  Chips)", "cost": "$8", "rarity": "Rare" } },
    { "name": "Merry Andy", "pos": { "x": 8, "y": 0 }, "details": { "effect": "+3 discards each round, -1 hand size", "extra": "", "cost": "$7", "rarity": "Uncommon" } },
    { "name": "Oops! All 6s", "pos": { "x": 5, "y": 6 }, "details": { "effect": "Doubles all listed probabilities ", "extra": "(ex: 1 in 3 -> 2 in 3)", "cost": "$4", "rarity": "Uncommon" } },
    { "name": "The Idol", "pos": { "x": 6, "y": 7 }, "details": { "effect": "Each played [rank] of [suit] gives X2 Mult when scored", "extra": "Card changes every round", "cost": "$6", "rarity": "Uncommon" } },
    { "name": "Seeing Double", "pos": { "x": 4, "y": 4 }, "details": { "effect": "X2 Mult if played hand has a scoring  Club card and a scoring card of any other suit", "extra": "", "cost": "$6", "rarity": "Uncommon" } },
    { "name": "Matador", "pos": { "x": 4, "y": 5 }, "details": { "effect": "Earn $8 if played hand triggers the Boss Blind ability", "extra": "", "cost": "$7", "rarity": "Uncommon" } },
    { "name": "Hit the Road", "pos": { "x": 8, "y": 5 }, "details": { "effect": "This Joker gains X0.5 Mult for every Jack discarded this round ", "extra": "(Currently X1 Mult)", "cost": "$8", "rarity": "Rare" } },
    { "name": "The Duo", "pos": { "x": 5, "y": 4 }, "details": { "effect": "X2 Mult if played hand contains a Pair", "extra": "", "cost": "$8", "rarity": "Rare" } },
    { "name": "The Trio", "pos": { "x": 6, "y": 4 }, "details": { "effect": "X3 Mult if played hand contains a Three of a Kind", "extra": "", "cost": "$8", "rarity": "Rare" } },
    { "name": "The Family", "pos": { "x": 7, "y": 4 }, "details": { "effect": "X4 Mult if played hand contains a Four of a Kind", "extra": "", "cost": "$8", "rarity": "Rare" } },
    { "name": "The Order", "pos": { "x": 8, "y": 4 }, "details": { "effect": "X3 Mult if played hand contains a Straight", "extra": "", "cost": "$8", "rarity": "Rare" } },
    { "name": "The Tribe", "pos": { "x": 9, "y": 4 }, "details": { "effect": "X2 Mult if played hand contains a Flush", "extra": "", "cost": "$8", "rarity": "Rare" } },
    { "name": "Stuntman", "pos": { "x": 8, "y": 6 }, "details": { "effect": "+250 Chips, -2 hand size", "extra": "", "cost": "$7", "rarity": "Rare" } },
    { "name": "Invisible Joker", "pos": { "x": 1, "y": 7 }, "details": { "effect": "After 2 rounds, sell this card to Duplicate a random Joker", "extra": "(Currently 0/2) (Removes Negative from copy)", "cost": "$8", "rarity": "Rare" } },
    { "name": "Brainstorm", "pos": { "x": 7, "y": 7 }, "details": { "effect": "Copies the ability of leftmost Joker", "extra": "", "cost": "$10", "rarity": "Rare" } },
    { "name": "Satellite", "pos": { "x": 8, "y": 7 }, "details": { "effect": "Earn $1 at end of round per unique Planet card used this run", "extra": "", "cost": "$6", "rarity": "Uncommon" } },
    { "name": "Shoot the Moon", "pos": { "x": 2, "y": 6 }, "details": { "effect": "Each Queen held in hand gives +13 Mult", "extra": "", "cost": "$5", "rarity": "Common" } },
    { "name": "Drivers License", "pos": { "x": 0, "y": 7 }, "details": { "effect": "X3 Mult if you have at least 16 Enhanced cards in your full deck ", "extra": "(Currently 0)", "cost": "$7", "rarity": "Rare" } },
    { "name": "Cartomancer", "pos": { "x": 7, "y": 3 }, "details": { "effect": "Create a Tarot card when Blind is selected ", "extra": "(Must have room)", "cost": "$6", "rarity": "Uncommon" } },
    { "name": "Astronomer", "pos": { "x": 2, "y": 7 }, "details": { "effect": "All Planet cards and Celestial Packs in the shop are free", "extra": "", "cost": "$8", "rarity": "Uncommon" } },
    { "name": "Burnt Joker", "pos": { "x": 3, "y": 7 }, "details": { "effect": "Upgrade the level of the first discarded poker hand each round", "extra": "", "cost": "$8", "rarity": "Rare" } },
    { "name": "Bootstraps", "pos": { "x": 9, "y": 8 }, "details": { "effect": "+2 Mult for every $5 you have ", "extra": "(Currently +0 Mult)", "cost": "$7", "rarity": "Uncommon" } },
    { "name": "Canio", "pos": { "x": 3, "y": 8 }, "details": { "effect": "This Joker gains X1 Mult when a face card is destroyed ", "extra": "(Currently X1 Mult)", "cost": "N/A", "rarity": "Legendary" } },
    { "name": "Triboulet", "pos": { "x": 4, "y": 8 }, "details": { "effect": "Played Kings and Queens each give X2 Mult when scored", "extra": "", "cost": "N/A", "rarity": "Legendary" } },
    { "name": "Yorick", "pos": { "x": 5, "y": 8 }, "details": { "effect": "This Joker gains X1 Mult every 23 [23] cards discarded ", "extra": "(Currently X1 Mult)", "cost": "N/A", "rarity": "Legendary" } },
    { "name": "Chicot", "pos": { "x": 6, "y": 8 }, "details": { "effect": "Disables effect of every Boss Blind", "extra": "", "cost": "N/A", "rarity": "Legendary" } },
    { "name": "Perkeo", "pos": { "x": 7, "y": 8 }, "details": { "effect": "Creates a Negative copy of 1 random consumable card in your possession at the end of the shop", "extra": "", "cost": "N/A", "rarity": "Legendary" } }
];

const tarotsAndPlanets = [
    // Tarots
    { "name": "The Fool", "pos": { "x": 0, "y": 0 }, "details": { "effect": "Creates a copy of the last Tarot or Planet card used", "extra": "(The Fool excluded)", "rarity": "Tarot" } },
    { "name": "The Magician", "pos": { "x": 1, "y": 0 }, "details": { "effect": "Enhances 2 selected cards to Lucky Cards", "extra": "", "rarity": "Tarot" } },
    { "name": "The High Priestess", "pos": { "x": 2, "y": 0 }, "details": { "effect": "Creates up to 2 random Planet cards", "extra": "(Must have room)", "rarity": "Tarot" } },
    { "name": "The Empress", "pos": { "x": 3, "y": 0 }, "details": { "effect": "Enhances 2 selected cards to Mult Cards", "extra": "", "rarity": "Tarot" } },
    { "name": "The Emperor", "pos": { "x": 4, "y": 0 }, "details": { "effect": "Creates up to 2 random Tarot cards", "extra": "(Must have room)", "rarity": "Tarot" } },
    { "name": "The Hierophant", "pos": { "x": 5, "y": 0 }, "details": { "effect": "Enhances 2 selected cards to Bonus Cards", "extra": "", "rarity": "Tarot" } },
    { "name": "The Lovers", "pos": { "x": 6, "y": 0 }, "details": { "effect": "Enhances 1 selected card into a Wild Card", "extra": "", "rarity": "Tarot" } },
    { "name": "The Chariot", "pos": { "x": 7, "y": 0 }, "details": { "effect": "Enhances 1 selected card into a Steel Card", "extra": "", "rarity": "Tarot" } },
    { "name": "Justice", "pos": { "x": 8, "y": 0 }, "details": { "effect": "Enhances 1 selected card into a Glass Card", "extra": "", "rarity": "Tarot" } },
    { "name": "The Hermit", "pos": { "x": 9, "y": 0 }, "details": { "effect": "Doubles money", "extra": "(Max of $20)", "rarity": "Tarot" } },
    { "name": "The Wheel of Fortune", "pos": { "x": 0, "y": 1 }, "details": { "effect": "1 in 4 chance to add Foil, Holographic, or Polychrome edition to a random Joker", "extra": "", "rarity": "Tarot" } },
    { "name": "Strength", "pos": { "x": 1, "y": 1 }, "details": { "effect": "Increases rank of up to 2 selected cards by 1", "extra": "(Rank order: A→2→3→4→5→6→7→8→9→10→J→Q→K→A)", "rarity": "Tarot" } },
    { "name": "The Hanged Man", "pos": { "x": 2, "y": 1 }, "details": { "effect": "", "extra": "Destroys up to 2 selected cards", "rarity": "Tarot" } },
    { "name": "Death", "pos": { "x": 3, "y": 1 }, "details": { "effect": "Select 2 cards, convert the left card into the right card", "extra": "(Drag to rearrange)", "rarity": "Tarot" } },
    { "name": "Temperance", "pos": { "x": 4, "y": 1 }, "details": { "effect": "Gives the total sell value of all current Jokers", "extra": "(Max of $50)", "rarity": "Tarot" } },
    { "name": "The Devil", "pos": { "x": 5, "y": 1 }, "details": { "effect": "Enhances 1 selected card into a Gold Card", "extra": "", "rarity": "Tarot" } },
    { "name": "The Tower", "pos": { "x": 6, "y": 1 }, "details": { "effect": "Enhances 1 selected card into a Stone Card", "extra": "", "rarity": "Tarot" } },
    { "name": "The Star", "pos": { "x": 7, "y": 1 }, "details": { "effect": "Converts up to 3 selected cards to Diamonds", "extra": "", "rarity": "Tarot" } },
    { "name": "The Moon", "pos": { "x": 8, "y": 1 }, "details": { "effect": "Converts up to 3 selected cards to Clubs", "extra": "", "rarity": "Tarot" } },
    { "name": "The Sun", "pos": { "x": 9, "y": 1 }, "details": { "effect": "Converts up to 3 selected cards to Hearts", "extra": "", "rarity": "Tarot" } },
    { "name": "Judgement", "pos": { "x": 0, "y": 2 }, "details": { "effect": "Creates a random Joker card (without in-run stickers)", "extra": "(Must have room)", "rarity": "Tarot" } },
    { "name": "The World", "pos": { "x": 1, "y": 2 }, "details": { "effect": "Converts up to 3 selected cards to Spades", "extra": "", "rarity": "Tarot" } },

    // Planets
    { "name": "Pluto", "pos": { "x": 8, "y": 3 }, "details": { "effect": "+1 Mult and +10 Chips", "extra": "High Card", "rarity": "Planet" } },
    { "name": "Mercury", "pos": { "x": 0, "y": 3 }, "details": { "effect": "+1 Mult and +15 Chips", "extra": "Pair", "rarity": "Planet" } },
    { "name": "Uranus", "pos": { "x": 6, "y": 3 }, "details": { "effect": "+1 Mult and +20 Chips", "extra": "Two Pair", "rarity": "Planet" } },
    { "name": "Venus", "pos": { "x": 1, "y": 3 }, "details": { "effect": "+2 Mult and +20 Chips", "extra": "Three of a Kind", "rarity": "Planet" } },
    { "name": "Saturn", "pos": { "x": 5, "y": 3 }, "details": { "effect": "+3 Mult and +30 Chips", "extra": "Straight", "rarity": "Planet" } },
    { "name": "Jupiter", "pos": { "x": 4, "y": 3 }, "details": { "effect": "+2 Mult and +15 Chips", "extra": "Flush", "rarity": "Planet" } },
    { "name": "Earth", "pos": { "x": 2, "y": 3 }, "details": { "effect": "+2 Mult and +25 Chips", "extra": "Full House", "rarity": "Planet" } },
    { "name": "Mars", "pos": { "x": 3, "y": 3 }, "details": { "effect": "+3 Mult and +30 Chips", "extra": "Four of a Kind", "rarity": "Planet" } },
    { "name": "Neptune", "pos": { "x": 7, "y": 3 }, "details": { "effect": "+4 Mult and +40 Chips", "extra": "Straight Flush", "rarity": "Planet" } },
    { "name": "Planet X", "pos": { "x": 9, "y": 2 }, "details": { "effect": "+3 Mult and +35 Chips", "extra": "Five of a Kind", "rarity": "Planet" } },
    { "name": "Ceres", "pos": { "x": 8, "y": 2 }, "details": { "effect": "+4 Mult and +40 Chips", "extra": "Flush House", "rarity": "Planet" } },
    { "name": "Eris", "pos": { "x": 3, "y": 2 }, "details": { "effect": "+3 Mult and +50 Chips", "extra": "Flush Five", "rarity": "Planet" } },

    // Spectrals
    { "name": "Familiar", "pos": { "x": 0, "y": 4 }, "details": { "effect": "Destroy 1 random card in your hand, add 3 random Enhanced face cards to your hand", "extra": "", "rarity": "Spectral" } },
    { "name": "Grim", "pos": { "x": 1, "y": 4 }, "details": { "effect": "Destroy 1 random card in your hand, add 2 random Enhanced Aces to your hand", "extra": "", "rarity": "Spectral" } },
    { "name": "Incantation", "pos": { "x": 2, "y": 4 }, "details": { "effect": "Destroy 1 random card in your hand, add 4 random Enhanced numbered cards to your hand", "extra": "", "rarity": "Spectral" } },
    { "name": "Talisman", "pos": { "x": 3, "y": 4 }, "details": { "effect": "Add a Gold Seal to 1 selected card in your hand", "extra": "", "rarity": "Spectral" } },
    { "name": "Aura", "pos": { "x": 4, "y": 4 }, "details": { "effect": "Add Foil, Holographic, or Polychrome effect to 1 selected card in hand", "extra": "", "rarity": "Spectral" } },
    { "name": "Wraith", "pos": { "x": 5, "y": 4 }, "details": { "effect": "Creates a random Rare Joker, sets money to $0", "extra": "", "rarity": "Spectral" } },
    { "name": "Sigil", "pos": { "x": 6, "y": 4 }, "details": { "effect": "Converts all cards in hand to a single random suit", "extra": "", "rarity": "Spectral" } },
    { "name": "Ouija", "pos": { "x": 7, "y": 4 }, "details": { "effect": "Converts all cards in hand to a single random rank, -1 hand size", "extra": "", "rarity": "Spectral" } },
    { "name": "Ectoplasm", "pos": { "x": 8, "y": 4 }, "details": { "effect": "Add Negative to a random Joker, -1 hand size", "extra": "", "rarity": "Spectral" } },
    { "name": "Immolate", "pos": { "x": 9, "y": 4 }, "details": { "effect": "Destroys 5 random cards in hand, gain $20", "extra": "", "rarity": "Spectral" } },
    { "name": "Ankh", "pos": { "x": 0, "y": 5 }, "details": { "effect": "Create a copy of a random Joker, destroy all other Jokers", "extra": "(Removes Negative from copy)", "rarity": "Spectral" } },
    { "name": "Deja Vu", "pos": { "x": 1, "y": 5 }, "details": { "effect": "Add a Red Seal to 1 selected card in your hand", "extra": "", "rarity": "Spectral" } },
    { "name": "Hex", "pos": { "x": 2, "y": 5 }, "details": { "effect": "Add Polychrome to a random Joker, destroy all other Jokers", "extra": "", "rarity": "Spectral" } },
    { "name": "Trance", "pos": { "x": 3, "y": 5 }, "details": { "effect": "Add a Blue Seal to 1 selected card in your hand", "extra": "", "rarity": "Spectral" } },
    { "name": "Medium", "pos": { "x": 4, "y": 5 }, "details": { "effect": "Add a Purple Seal to 1 selected card in your hand", "extra": "", "rarity": "Spectral" } },
    { "name": "Cryptid", "pos": { "x": 5, "y": 5 }, "details": { "effect": "Create 2 copies of 1 selected card in your hand", "extra": "", "rarity": "Spectral" } },
    { "name": "The Soul", "pos": { "x": 2, "y": 2 }, "details": { "effect": "Creates a Legendary Joker", "extra": "(Must have room)", "rarity": "Spectral" } },
    { "name": "Black Hole", "pos": { "x": 9, "y": 3 }, "details": { "effect": "Upgrade every poker hand by 1 level", "extra": "", "rarity": "Spectral" } }
];

const tags = [
    { "name": "Uncommon Tag", "pos": { "x": 0, "y": 0 } }, { "name": "Rare Tag", "pos": { "x": 1, "y": 0 } }, { "name": "Negative Tag", "pos": { "x": 2, "y": 0 } }, { "name": "Foil Tag", "pos": { "x": 3, "y": 0 } }, { "name": "Holographic Tag", "pos": { "x": 0, "y": 1 } }, { "name": "Polychrome Tag", "pos": { "x": 1, "y": 1 } }, { "name": "Investment Tag", "pos": { "x": 2, "y": 1 } }, { "name": "Voucher Tag", "pos": { "x": 3, "y": 1 } }, { "name": "Boss Tag", "pos": { "x": 0, "y": 2 } }, { "name": "Standard Tag", "pos": { "x": 1, "y": 2 } }, { "name": "Charm Tag", "pos": { "x": 2, "y": 2 } }, { "name": "Meteor Tag", "pos": { "x": 3, "y": 2 } }, { "name": "Buffoon Tag", "pos": { "x": 4, "y": 2 } }, { "name": "Handy Tag", "pos": { "x": 1, "y": 3 } }, { "name": "Garbage Tag", "pos": { "x": 2, "y": 3 } }, { "name": "Ethereal Tag", "pos": { "x": 3, "y": 3 } }, { "name": "Coupon Tag", "pos": { "x": 4, "y": 0 } }, { "name": "Double Tag", "pos": { "x": 5, "y": 0 } }, { "name": "Juggle Tag", "pos": { "x": 5, "y": 1 } }, { "name": "D6 Tag", "pos": { "x": 5, "y": 3 } }, { "name": "Top-up Tag", "pos": { "x": 4, "y": 1 } }, { "name": "Speed Tag", "pos": { "x": 0, "y": 3 } }, { "name": "Orbital Tag", "pos": { "x": 5, "y": 2 } }, { "name": "Economy Tag", "pos": { "x": 4, "y": 3 } }
];

const vouchers = [
    { "name": "Overstock", "pos": { "x": 0, "y": 0 } }, { "name": "Clearance Sale", "pos": { "x": 3, "y": 0 } }, { "name": "Hone", "pos": { "x": 4, "y": 0 } }, { "name": "Reroll Surplus", "pos": { "x": 0, "y": 2 } }, { "name": "Crystal Ball", "pos": { "x": 2, "y": 2 } }, { "name": "Telescope", "pos": { "x": 3, "y": 2 } }, { "name": "Grabber", "pos": { "x": 5, "y": 0 } }, { "name": "Wasteful", "pos": { "x": 6, "y": 0 } }, { "name": "Tarot Merchant", "pos": { "x": 1, "y": 0 } }, { "name": "Planet Merchant", "pos": { "x": 2, "y": 0 } }, { "name": "Seed Money", "pos": { "x": 1, "y": 2 } }, { "name": "Blank", "pos": { "x": 7, "y": 0 } }, { "name": "Magic Trick", "pos": { "x": 4, "y": 2 } }, { "name": "Hieroglyph", "pos": { "x": 5, "y": 2 } }, { "name": "Director's Cut", "pos": { "x": 6, "y": 2 } }, { "name": "Paint Brush", "pos": { "x": 7, "y": 2 } }, { "name": "Overstock Plus", "pos": { "x": 0, "y": 1 } }, { "name": "Liquidation", "pos": { "x": 3, "y": 1 } }, { "name": "Glow Up", "pos": { "x": 4, "y": 1 } }, { "name": "Reroll Glut", "pos": { "x": 0, "y": 3 } }, { "name": "Omen Globe", "pos": { "x": 2, "y": 3 } }, { "name": "Observatory", "pos": { "x": 3, "y": 3 } }, { "name": "Nacho Tong", "pos": { "x": 5, "y": 1 } }, { "name": "Recyclomancy", "pos": { "x": 6, "y": 1 } }, { "name": "Tarot Tycoon", "pos": { "x": 1, "y": 1 } }, { "name": "Planet Tycoon", "pos": { "x": 2, "y": 1 } }, { "name": "Money Tree", "pos": { "x": 1, "y": 3 } }, { "name": "Antimatter", "pos": { "x": 7, "y": 1 } }, { "name": "Illusion", "pos": { "x": 4, "y": 3 } }, { "name": "Petroglyph", "pos": { "x": 5, "y": 3 } }, { "name": "Retcon", "pos": { "x": 6, "y": 3 } }, { "name": "Palette", "pos": { "x": 7, "y": 3 } }
];

const bosses = [
    { "name": "Small Blind", "pos": { "x": 0, "y": 0 } }, { "name": "Big Blind", "pos": { "x": 0, "y": 1 } }, { "name": "The Ox", "pos": { "x": 0, "y": 2 } }, { "name": "The Hook", "pos": { "x": 0, "y": 7 } }, { "name": "The Mouth", "pos": { "x": 0, "y": 18 } }, { "name": "The Fish", "pos": { "x": 0, "y": 5 } }, { "name": "The Club", "pos": { "x": 0, "y": 4 } }, { "name": "The Manacle", "pos": { "x": 0, "y": 8 } }, { "name": "The Tooth", "pos": { "x": 0, "y": 22 } }, { "name": "The Wall", "pos": { "x": 0, "y": 9 } }, { "name": "The House", "pos": { "x": 0, "y": 3 } }, { "name": "The Mark", "pos": { "x": 0, "y": 23 } }, { "name": "Cerulean Bell", "pos": { "x": 0, "y": 26 } }, { "name": "The Wheel", "pos": { "x": 0, "y": 10 } }, { "name": "The Arm", "pos": { "x": 0, "y": 11 } }, { "name": "The Psychic", "pos": { "x": 0, "y": 12 } }, { "name": "The Goad", "pos": { "x": 0, "y": 13 } }, { "name": "The Water", "pos": { "x": 0, "y": 14 } }, { "name": "The Eye", "pos": { "x": 0, "y": 17 } }, { "name": "The Plant", "pos": { "x": 0, "y": 19 } }, { "name": "The Needle", "pos": { "x": 0, "y": 20 } }, { "name": "The Head", "pos": { "x": 0, "y": 21 } }, { "name": "Verdant Leaf", "pos": { "x": 0, "y": 28 } }, { "name": "Violet Vessel", "pos": { "x": 0, "y": 29 } }, { "name": "The Window", "pos": { "x": 0, "y": 6 } }, { "name": "The Serpent", "pos": { "x": 0, "y": 15 } }, { "name": "The Pillar", "pos": { "x": 0, "y": 16 } }, { "name": "The Flint", "pos": { "x": 0, "y": 24 } }, { "name": "Amber Acorn", "pos": { "x": 0, "y": 27 } }, { "name": "Crimson Heart", "pos": { "x": 0, "y": 25 } }
];

const editionMap = {
    "Foil": 1,
    "Holographic": 2,
    "Polychrome": 3
};

const stickerMap = {
    "Eternal": { x: 0, y: 0 },
    "Perishable": { x: 0, y: 2 },
    "Rental": { x: 1, y: 2 }
};

function maskToCanvas(canvas, itemName, type, itemModifiers, itemStickers) {
    let itemData;
    let imgSrc;
    let gridWidth;
    let gridHeight;

    if (type === 'joker') {
        itemData = jokers.find(j => j.name === itemName);
        imgSrc = 'images/Jokers.png';
        gridWidth = 10;
        gridHeight = 16;
    } else if (type === 'tarot' || type === 'planet') {
        itemData = tarotsAndPlanets.find(t => t.name === itemName);
        imgSrc = 'images/Tarots.png';
        gridWidth = 10;
        gridHeight = 6;
    }

    if (!itemData) {
        console.error(`${type.charAt(0).toUpperCase() + type.slice(1)} not found:`, itemName);
        return;
    }

    const imageWidth = imgSrc.includes('Jokers.png') ? 710 : 710; // Width of your images
    const imageHeight = imgSrc.includes('Jokers.png') ? 1520 : 570; // Height of your images

    const itemWidth = imageWidth / gridWidth;
    const itemHeight = imageHeight / gridHeight;

    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = imgSrc;
    img.onload = function () {
        ctx.drawImage(
            img,
            itemData.pos.x * itemWidth,
            itemData.pos.y * itemHeight,
            itemWidth,
            itemHeight,
            0,
            0,
            canvas.width,
            canvas.height
        );

        const overlayModifier = itemModifiers.find(mod => ["Foil", "Holographic", "Polychrome"].includes(mod));
        if (overlayModifier) {
            overlayEdition(ctx, canvas, editionMap[overlayModifier]);
        }

        itemStickers.forEach(stick => {
            if (stickerMap[stick]) {
                overlaySticker(ctx, canvas, stickerMap[stick]);
            }
        });

        if (itemModifiers.includes("Negative")) {
            canvas.style.filter = 'invert(0.8)';
        }
    };
}

function overlayEdition(ctx, canvas, index) {
    const editionImg = new Image();
    editionImg.src = 'images/Editions.png';
    editionImg.onload = function () {
        const editionWidth = editionImg.width / 5;
        const editionHeight = editionImg.height;

        ctx.drawImage(
            editionImg,
            index * editionWidth,
            0,
            editionWidth,
            editionHeight,
            0,
            0,
            canvas.width,
            canvas.height
        );
    };
}

function overlaySticker(ctx, canvas, position) {
    const stickerImg = new Image();
    stickerImg.src = 'images/stickers.png';
    stickerImg.onload = function () {
        const stickerWidth = stickerImg.width / 5;
        const stickerHeight = stickerImg.height / 3;

        ctx.drawImage(
            stickerImg,
            position.x * stickerWidth,
            position.y * stickerHeight,
            stickerWidth,
            stickerHeight,
            0,
            0,
            canvas.width,
            canvas.height
        );
    };
}

function getStandardCardName(cardName) {
    return cardName.replace(/\b(Purple|Red|Blue|Gold) Seal\b/g, '').replace(/\b(Bonus|Mult|Wild|Glass|Steel|Stone|Gold|Lucky)\b/g, '').replace(/\b(Foil|Holographic|Polychrome)\b/g, '').trim();
}

function getStandardCardModifiers(cardName) {
    const sealRegex = /\b(Purple Seal|Red Seal|Blue Seal|Gold Seal)\b/g;
    const enhancementRegex = /\b(Bonus|Mult|Wild|Glass|Steel|Stone|Gold|Lucky)\b/g;
    const editionRegex = /\b(Foil|Holographic|Polychrome)\b/g;

    const seals = [];
    let sealMatch;
    while ((sealMatch = sealRegex.exec(cardName)) !== null) {
        seals.push(sealMatch[0]);
    }

    // Remove the seal text from the card name
    const cardNameWithoutSeals = cardName.replace(sealRegex, '').trim();

    const enhancements = cardNameWithoutSeals.match(enhancementRegex) || [];
    const editions = cardNameWithoutSeals.match(editionRegex) || [];

    return [...seals, ...enhancements, ...editions];
}

function getStandardCardPosition(rank, suit) {
    const rankMap = {
        '2': 0, '3': 1, '4': 2, '5': 3, '6': 4, '7': 5, '8': 6, '9': 7, '10': 8, 'Jack': 9, 'Queen': 10, 'King': 11, 'Ace': 12
    };
    const suitMap = {
        'Hearts': 0, 'Clubs': 1, 'Diamonds': 2, 'Spades': 3
    };

    const x = rankMap[rank];
    const y = suitMap[suit];

    return { x, y };
}

function renderStandardCard(canvas, rank, suit, modifiers, seal) {
    const ctx = canvas.getContext('2d');

    const deckImg = new Image();
    deckImg.src = 'images/8BitDeck.png';
    const enhancersImg = new Image();
    enhancersImg.src = 'images/Enhancers.png';

    const cardWidth = 71;
    const cardHeight = 95;
    const deckWidth = 923;
    const deckHeight = 380;
    const enhancersWidth = 497;
    const enhancersHeight = 475;

    const { x: cardX, y: cardY } = getStandardCardPosition(rank, suit);

    deckImg.onload = function () {
        enhancersImg.onload = function () {
            // Draw the card background
            const enhancerPos = getEnhancerPosition(modifiers);
            ctx.drawImage(
                enhancersImg,
                enhancerPos.x * (enhancersWidth / 7),
                enhancerPos.y * (enhancersHeight / 5),
                enhancersWidth / 7,
                enhancersHeight / 5,
                0,
                0,
                cardWidth,
                cardHeight
            );

            // Draw the card rank and suit
            ctx.drawImage(
                deckImg,
                cardX * (deckWidth / 13),
                cardY * (deckHeight / 4),
                deckWidth / 13,
                deckHeight / 4,
                0,
                0,
                cardWidth,
                cardHeight
            );

            // Draw the edition overlay
            const edition = modifiers.find(mod => ["Foil", "Holographic", "Polychrome"].includes(mod));
            if (edition) {
                overlayEdition(ctx, canvas, editionMap[edition]);
            }

            // Draw the seal overlay
            if (seal) {
                const sealPos = getSealPosition(seal);
                ctx.drawImage(
                    enhancersImg,
                    sealPos.x * (enhancersWidth / 7),
                    sealPos.y * (enhancersHeight / 5),
                    enhancersWidth / 7,
                    enhancersHeight / 5,
                    0,
                    0,
                    cardWidth,
                    cardHeight
                );
            }
        };

        enhancersImg.src = 'images/Enhancers.png';
    };

    deckImg.src = 'images/8BitDeck.png';
}

function getEnhancerPosition(modifiers) {
    const enhancerMap = {
        'Bonus': { x: 1, y: 1 },
        'Mult': { x: 2, y: 1 },
        'Wild': { x: 3, y: 1 },
        'Glass': { x: 5, y: 1 },
        'Steel': { x: 6, y: 1 },
        'Stone': { x: 5, y: 0 },
        'Gold': { x: 6, y: 0 },
        'Lucky': { x: 4, y: 1 }
    };

    const enhancer = modifiers.find(mod => Object.keys(enhancerMap).includes(mod));
    return enhancer ? enhancerMap[enhancer] : { x: 1, y: 0 };
}

function getSealPosition(seal) {
    const sealMap = {
        'Gold Seal': { x: 2, y: 0 },
        'Purple Seal': { x: 4, y: 4 },
        'Red Seal': { x: 5, y: 4 },
        'Blue Seal': { x: 6, y: 4 }
    };

    return sealMap[seal];
}

function parseStandardCardName(cardName) {
    const sealRegex = /(Purple|Red|Blue|Gold) Seal/;
    const sealMatch = cardName.match(sealRegex);
    const seal = sealMatch ? sealMatch[0] : null;

    let cleanedCardName = seal ? cardName.replace(sealRegex, '').trim() : cardName;

    const modifierRegex = /(Foil|Holographic|Polychrome|Bonus|Mult|Wild|Glass|Steel|Stone|Gold|Lucky)/g;
    const modifiers = cleanedCardName.match(modifierRegex) || [];

    // Remove all modifiers from the cleaned card name
    cleanedCardName = cleanedCardName.replace(modifierRegex, '').trim();

    const parts = cleanedCardName.split(' of ');
    if (parts.length !== 2) {
        console.error('Invalid card name format:', cardName);
        return null;
    }

    const suit = parts[1].trim();
    const rankPart = parts[0].trim();
    const rank = rankPart.split(' ').pop(); // Get the last word as rank

    return { rank, suit, modifiers, seal };
}

function getModifierColor(modifier) {
    if (modifier.includes('Seal')) {
        return '#ff80ff'; // Light Purple
    } else if (modifier.includes('Bonus') || modifier.includes('Mult') || modifier.includes('Wild')) {
        return '#ff8080'; // Light Red
    } else if (modifier.includes('Glass') || modifier.includes('Steel') || modifier.includes('Stone') || modifier.includes('Gold') || modifier.includes('Lucky')) {
        return '#8080ff'; // Light Blue
    } else if (modifier.includes('Foil') || modifier.includes('Holographic') || modifier.includes('Polychrome')) {
        return '#80ff80'; // Light Green
    }
    return '#ffffff'; // White (default)
}

function renderBoss(canvas, bossName) {
    const bossData = bosses.find(boss => boss.name === bossName);
    if (!bossData) {
        console.error("Boss not found:", bossName);
        return;
    }

    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = 'images/BlindChips.png';
    img.onload = function () {
        const bossWidth = 714 / 21;
        const bossHeight = 1054 / 31;

        ctx.drawImage(
            img,
            bossData.pos.x * bossWidth,
            bossData.pos.y * bossHeight,
            bossWidth,
            bossHeight,
            0,
            0,
            canvas.width,
            canvas.height
        );
    };
}

function renderTag(canvas, tagName) {
    const tagData = tags.find(tag => tag.name === tagName);
    if (!tagData) {
        console.error("Tag not found:", tagName);
        return;
    }

    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = 'images/tags.png';
    img.onload = function () {
        const tagWidth = 204 / 6;
        const tagHeight = 170 / 5;

        ctx.drawImage(
            img,
            tagData.pos.x * tagWidth,
            tagData.pos.y * tagHeight,
            tagWidth,
            tagHeight,
            0,
            0,
            canvas.width,
            canvas.height
        );
    };
}

function renderVoucher(canvas, voucherName) {
    const voucherData = vouchers.find(voucher => voucher.name === voucherName);
    if (!voucherData) {
        console.error("Voucher not found:", voucherName);
        return;
    }

    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = 'images/Vouchers.png';
    img.onload = function () {
        const voucherWidth = 639 / 9;
        const voucherHeight = 380 / 4;

        ctx.drawImage(
            img,
            voucherData.pos.x * voucherWidth,
            voucherData.pos.y * voucherHeight,
            voucherWidth,
            voucherHeight,
            0,
            0,
            canvas.width,
            canvas.height
        );
    };
}

function searchAndHighlight() {
    const searchInput = document.getElementById('searchInput');
    const searchTerms = searchInput.value.split(',')
        .map(term => term.trim().toLowerCase())
        .filter(term => term.length >= 4); // Filter out terms less than 4 letters

    const queueItems = document.querySelectorAll('.queueItem, .packItem > div, .voucherContainer, .tagContainer, .bossContainer');

    queueItems.forEach(item => {
        const itemText = item.textContent.toLowerCase();
        const shouldHighlight = searchTerms.some(term => itemText.includes(term));
        if (shouldHighlight) {
            item.classList.add('highlight');
        } else {
            item.classList.remove('highlight');
        }
    });
}

function getDetailsElement(cardName, details, itemModifiers) {
  const detailsElement = document.createElement('div');
  detailsElement.className = 'details';

  const titleElement = document.createElement('h3');
  titleElement.textContent = cardName;
  titleElement.className = 'details-title';
  detailsElement.appendChild(titleElement);

  const effectElement = document.createElement('div');
  effectElement.textContent = details.effect;
  effectElement.className = 'details-effect';

  if (details.extra) {
      const extraElement = document.createElement('div');
      extraElement.textContent = details.extra;
      extraElement.className = 'details-extra';
      effectElement.appendChild(extraElement);
  }

  detailsElement.appendChild(effectElement);

  if (details.rarity) {
      const rarityElement = document.createElement('span');
      rarityElement.textContent = details.rarity;
      rarityElement.className = `details-rarity rarity-${details.rarity.toLowerCase()}`;
      detailsElement.appendChild(rarityElement);
  }

  itemModifiers.forEach(mod => {
      const editionElement = document.createElement('span');
      editionElement.className = `details-edition edition-${mod.toLowerCase()}`;
      editionElement.textContent = mod;
      detailsElement.appendChild(editionElement);
  });

  return detailsElement;
}

(function () {
    // Create a style element to add CSS for the side-scrolling list and additional info
    const style = document.createElement('style');
    style.innerHTML = `
    body {
        background-color: #1e1e1e;
        color: #ffffff;
    }

    .container {
        background-color: #2b2b2b;
        color: #ffffff;
    }

    .input-section,
    .output-section {
        background-color: #333333;
        color: #ffffff;
    }

    h1 {
        color: #ffffff;
        background-color: #444444;
    }
    h2 {
        color: #ffffff;
        background-color: #444444;
    }

    label {
        color: #cccccc;
    }

    input,
    select,
    textarea {
        background-color: #444444;
        color: #ffffff;
        border: 1px solid #555555;
    }

    button {
        background-color: #555555;
        color: #ffffff;
        border: none;
    }

    button:hover {
        background-color: #666666;
    }

    #checkboxesOverlay {
        background-color: rgba(0, 0, 0, 0.8);
    }

    #checkboxesPopup {
        background-color: #333333;
        color: #ffffff;
    }

    #scrollingContainer {
        display: block;
        padding: 10px;
        border: 1px solid #444444;
        margin-top: 20px;
        background-color: #2b2b2b;
    }

    .queueContainer {
        display: block;
        margin-bottom: 20px;
        border: 1px solid #555555;
        padding: 10px;
        background-color: #333333;
    }

    .queueTitle {
        font-weight: bold;
        margin-bottom: 5px;
        color: #ffffff;
    }

    .queueInfo {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        font-size: 12px;
        margin-bottom: 10px;
        color: #cccccc;
        text-align: center;
    }

    .scrollable {
        display: flex;
        overflow-x: auto;
        white-space: nowrap;
        cursor: grab;
        scrollbar-width: none;
        -ms-overflow-style: none;
    }

    .scrollable:active {
        cursor: grabbing;
    }

    .scrollable::-webkit-scrollbar {
        display: none;
    }

    .queueItem {
        display: inline-block;
        text-align: center;
        margin-right: 10px;
        font-size: 10px;
        white-space: normal;
        color: #ffffff;
    }

    .queueItem img {
        width: 71px;
        height: 95px;
        display: block;
        margin: 0 auto;
        pointer-events: none;
    }

    .queueItem div {
        margin-top: 3px;
        line-height: 1.2;
    }

    div.queueItem[title]:hover::after {
        content: attr(title);
        position: absolute;
        left: 50px;
        font-size: 20px;
        background: black;
        padding-inline-start: 10px;
        padding-inline-end: 10px;
        padding-bottom: 5px;
        padding-top: 5px;
    }

    .modifier {
        color: #aaaaaa;
    }

    .sticker {
        color: #ffcc00;
    }

    .additionalInfo {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        font-size: 12px;
    }

    .additionalInfo div {
        margin-bottom: 5px;
    }

    .no-select {
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
    }

    .packContainer {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 10px;
    }

    .packItem {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        margin-bottom: 10px;
        color: #ffffff;
    }

    .packItem > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        font-size: 10px;
        width: 71px;
        margin-right: 5px;
    }

    .packItem canvas {
        width: 71px;
        height: 95px;
        margin-bottom: 3px;
        pointer-events: none;
    }

    .packItem .cardName {
        font-size: 10px;
        margin-bottom: 3px;
        word-wrap: break-word;
        color: #ffffff;
    }

    .packItem .standardCardName {
        font-size: 10px;
        margin-bottom: 3px;
        word-wrap: break-word;
        color: #ffffff;
    }

    .packItem .modifier {
        font-size: 10px;
        color: #aaaaaa;
    }
    .packItem > .packName {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-size: 10px;
        margin-right: 5px;
        height: 95px; /* Adjust this value to match the height of the cards */
        justify-content: center;
    }
.voucherContainer,
.tagContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 10px;
    margin-right: 5px;
}

.voucherContainer canvas,
.tagContainer canvas {
    margin-bottom: 3px;
    pointer-events: none;
}

.voucherName,
.tagName {
    font-size: 10px;
    margin-bottom: 3px;
    word-wrap: break-word;
    color: #ffffff;
}

.tagsContainer {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
}

.search-container {
    margin-bottom: 10px;
}

#searchInput {
    width: 100%;
    padding: 5px;
    font-size: 14px;
}
.highlight {
    background-color: rgba(150, 237, 121, 0.3);
    border-radius: 3px;
    box-shadow: 0px 0px 20px 15px rgba(150, 237, 121, 0.3);
}
.bossContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 10px;
    margin-right: 5px;
}

.bossContainer canvas {
    margin-bottom: 3px;
    pointer-events: none;
}

.bossName {
    font-size: 10px;
    margin-bottom: 3px;
    word-wrap: break-word;
    color: #ffffff;
}

div.details {
    display: none;
    position: absolute;
    width: 300px;
    background-color: #4a5568;
    border: 4px solid #ffffff;
    border-radius: 12px;
    padding: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

div.details h3.details-title {
    color: #ffffff;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    letter-spacing: 2px;
    margin: 0 0 10px 0;
}

div.details div.details-effect {
    background-color: #f7fafc;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    padding: 8px;
    margin-bottom: 10px;
    font-size: 16px;
    line-height: 1.4;
    color: #2d3748;
    text-align: center;
}

div.details div.details-extra {
    font-size: 12px;
    line-height: 1.4;
    color: #2d3748;
    text-align: center;
}

div.details span.details-rarity.rarity-tarot {
    background-color: #7b559c;
}

div.details span.details-rarity.rarity-planet {
    background-color: #00a8ca;
}

div.details span.details-rarity.rarity-spectral {
    background-color: #2e76fd;
}

div.details span.details-rarity.rarity-common {
    background-color: #0093ff;
}

div.details span.details-rarity.rarity-uncommon {
    background-color: #35bd86;
}

div.details span.details-rarity.rarity-rare {
    background-color: #ff4c40;
}

div.details span.details-rarity.rarity-legendary {
    background-color: #ab5bb5;
}

div.details span.details-edition {
    background-color: #7278d0;
}

div.details span.details-rarity,
div.details span.details-edition {
    color: #ffffff;
    border: none;
    border-radius: 25px;
    padding: 4px 12px;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0 2px;
}

.queueItem:hover div.details,
.queueItem:focus-within div.details,
.packItem > div:hover div.details {
    display: block;
}

`;
    document.head.appendChild(style);

    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.id = 'searchInput';
    searchInput.placeholder = 'Enter search terms (comma-separated)';

    const searchLabel = document.createElement('label');
    searchLabel.setAttribute('for', 'searchInput');
    searchLabel.textContent = 'Press enter to search (comma separated values, min length 4 char)';

    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchContainer.appendChild(searchLabel);
    searchContainer.appendChild(searchInput);

    document.body.appendChild(searchContainer);
    document.getElementById('searchInput').addEventListener('input', searchAndHighlight);

    const scrollingContainer = document.createElement('div');
    scrollingContainer.id = 'scrollingContainer';
    document.body.appendChild(scrollingContainer);

    document.getElementById('searchInput').addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            const highlightedItem = document.querySelector('.highlight');
            if (highlightedItem) {
                highlightedItem.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
            } else {
                console.log('No highlighted item found');
            }
        }
    });

    // Function to extract shop queues from the textarea content
    function extractShopQueues(text) {
        const shopQueues = [];
        const regex = /==ANTE \d+==[\s\S]*?(?=(?:==ANTE \d+==|$))/g;
        const matches = text.match(regex);

        if (matches) {
            matches.forEach(match => {
                const titleMatch = match.match(/==ANTE \d+==/);
                const title = titleMatch ? titleMatch[0] : 'Untitled';
                const bossMatch = match.match(/Boss: (.+)/);
                const voucherMatch = match.match(/Voucher: (.+)/);
                const tagsMatch = match.match(/Tags: (.+)/);
                const queueMatch = match.match(/Shop Queue:([\s\S]*?)(?=Packs:|$)/);
                const packsMatch = match.match(/Packs:([\s\S]*?)(?=(?:==ANTE \d+==|$))/);

                const boss = bossMatch ? bossMatch[1].trim() : '';
                const voucher = voucherMatch ? voucherMatch[1].trim() : '';
                const tags = tagsMatch ? tagsMatch[1].trim().split(',').map(tag => tag.trim()) : [];
                const queue = queueMatch ? queueMatch[1].trim().split('\n').filter(item => item.trim() !== '') : [];
                const packs = packsMatch ? packsMatch[1].trim().split('\n').filter(item => item.trim() !== '') : [];

                shopQueues.push({ title, queue, boss, voucher, tags, packs });
            });
        }

        return shopQueues;
    }

    // Function to separate card names, modifiers, and stickers
    function parseCardItem(item) {
        const modifiers = ['Foil', 'Holographic', 'Polychrome', 'Negative'];
        const stickers = ['Perishable', 'Rental', 'Eternal'];
        let cardName = item.replace(/^\d+\)/, '').trim();
        let itemModifiers = [];
        let itemStickers = [];

        modifiers.forEach(mod => {
            const regex = new RegExp(`\\b${mod}\\b`, 'i');
            if (regex.test(cardName)) {
                itemModifiers.push(mod);
                cardName = cardName.replace(regex, '').trim();
            }
        });

        stickers.forEach(stick => {
            const regex = new RegExp(`\\b${stick}\\b`, 'i');
            if (regex.test(cardName)) {
                itemStickers.push(stick);
                cardName = cardName.replace(regex, '').trim();
            }
        });


        let details = null;

        switch (determineItemType(cardName)) {
            case 'joker':
                details = (jokers.find(jkr => jkr.name === cardName) || {}).details;
                break;

            case 'tarot':
                details = (tarotsAndPlanets.find(tp => tp.name === cardName) || {}).details;
                break;
        }

        return { cardName, itemModifiers, itemStickers, details };
    }

    // Function to determine item type (joker, tarot, or planet)
    function determineItemType(itemName) {
        if (jokers.find(j => j.name === itemName)) {
            return 'joker';
        } else if (tarotsAndPlanets.find(tp => tp.name === itemName)) {
            return 'tarot';
        } else {
            return 'unknown';
        }
    }

    // Function to create and display the side-scrolling list
    function displayShopQueues() {
        const textarea = document.getElementById('outputBox');
        const text = textarea.value;
        const shopQueues = extractShopQueues(text);

        scrollingContainer.innerHTML = ''; // Clear previous content

        shopQueues.forEach(({ title, queue, boss, voucher, tags, packs }) => {
            const queueContainer = document.createElement('div');
            queueContainer.className = 'queueContainer';

            const queueTitle = document.createElement('div');
            queueTitle.className = 'queueTitle';
            queueTitle.textContent = title; // Display the original title with ANTE number
            queueContainer.appendChild(queueTitle);

            const queueInfo = document.createElement('div');
            queueInfo.className = 'queueInfo';

            const voucherElement = document.createElement('div');
            voucherElement.innerHTML = '<b><u>Voucher</u></b>';
            voucherElement.style = "font-size: 16px";
            if (voucher) {
                const voucherContainer = document.createElement('div');
                voucherContainer.className = 'voucherContainer';

                const voucherCanvas = document.createElement('canvas');
                voucherCanvas.width = 71;
                voucherCanvas.height = 95;
                renderVoucher(voucherCanvas, voucher);
                voucherContainer.appendChild(voucherCanvas);

                const voucherNameElement = document.createElement('div');
                voucherNameElement.textContent = voucher;
                voucherNameElement.classList.add('voucherName');
                voucherContainer.appendChild(voucherNameElement);

                voucherElement.appendChild(voucherContainer);
            }
            queueInfo.appendChild(voucherElement);

            const tagsElement = document.createElement('div');
            tagsElement.innerHTML = '<b><u>Tags</u></b>';
            tagsElement.style = "font-size: 16px";

            const tagsContainer = document.createElement('div');
            tagsContainer.className = 'tagsContainer';

            tags.forEach(tag => {
                const tagContainer = document.createElement('div');
                tagContainer.className = 'tagContainer';

                const tagCanvas = document.createElement('canvas');
                tagCanvas.width = 34;
                tagCanvas.height = 34;
                renderTag(tagCanvas, tag);
                tagContainer.appendChild(tagCanvas);

                const tagNameElement = document.createElement('div');
                tagNameElement.textContent = tag;
                tagNameElement.classList.add('tagName');
                tagContainer.appendChild(tagNameElement);

                tagsContainer.appendChild(tagContainer);
            });

            tagsElement.appendChild(tagsContainer);
            queueInfo.appendChild(tagsElement);

            const bossElement = document.createElement('div');
            bossElement.innerHTML = '<b><u>Boss</u></b>';
            bossElement.style = "font-size: 16px";

            if (boss) {
                const bossContainer = document.createElement('div');
                bossContainer.className = 'bossContainer';

                const bossCanvas = document.createElement('canvas');
                bossCanvas.width = 34;
                bossCanvas.height = 34;
                renderBoss(bossCanvas, boss);
                bossContainer.appendChild(bossCanvas);

                const bossNameElement = document.createElement('div');
                bossNameElement.textContent = boss;
                bossNameElement.classList.add('bossName');
                bossContainer.appendChild(bossNameElement);

                bossElement.appendChild(bossContainer);
            }

            queueInfo.appendChild(bossElement);

            queueContainer.appendChild(queueInfo);

            const scrollable = document.createElement('div');
            scrollable.className = 'scrollable no-select';
            queueContainer.appendChild(scrollable);

            queue.forEach(item => {
                const { cardName, itemModifiers, itemStickers, details } = parseCardItem(item);

                const queueItem = document.createElement('div');
                queueItem.className = 'queueItem';

                const canvas = document.createElement('canvas');
                canvas.width = 71;
                canvas.height = 95;

                const itemType = determineItemType(cardName);
                if (itemType !== 'unknown') {
                    maskToCanvas(canvas, cardName, itemType, itemModifiers, itemStickers);
                }

                queueItem.appendChild(canvas);

                const itemText = document.createElement('div');
                itemText.textContent = cardName;
                queueItem.appendChild(itemText);

                itemModifiers.forEach(mod => {
                    const modifierText = document.createElement('div');
                    modifierText.className = 'modifier';
                    modifierText.textContent = mod;
                    queueItem.appendChild(modifierText);
                });

                itemStickers.forEach(stick => {
                    const stickerText = document.createElement('div');
                    stickerText.className = 'sticker';
                    stickerText.textContent = stick;
                    queueItem.appendChild(stickerText);
                });

                if (details) {
                    const detailsElement = getDetailsElement(cardName, details, itemModifiers);

                    queueItem.appendChild(detailsElement);
                }

                scrollable.appendChild(queueItem);
            });

            if (packs.length > 0) {
                const packsTitle = document.createElement('div');
                packsTitle.className = 'queueTitle';
                packsTitle.textContent = '==Packs==';
                queueContainer.appendChild(packsTitle);

                const packsContainer = document.createElement('div');
                queueContainer.appendChild(packsContainer);

                packs.forEach(pack => {
                    const packItems = pack.split(' - ');
                    const packName = packItems[0];
                    const packCards = packItems[1] ? packItems[1].split(', ') : [];

                    const packItem = document.createElement('div');
                    packItem.className = 'packItem';

                    const packNameElement = document.createElement('div');
                    packNameElement.textContent = packName + ': ';
                    packNameElement.classList.add('packName');
                    packItem.appendChild(packNameElement);

                    packCards.forEach(cardName => {
                        const { cardName: parsedCardName, itemModifiers, itemStickers, details } = parseCardItem(cardName);
                        const itemType = determineItemType(parsedCardName);

                        const cardContainer = document.createElement('div');

                        if (itemType !== 'unknown') {
                            const canvas = document.createElement('canvas');
                            canvas.width = 71;
                            canvas.height = 95;
                            maskToCanvas(canvas, parsedCardName, itemType, itemModifiers, itemStickers);
                            cardContainer.appendChild(canvas);

                            const itemText = document.createElement('div');
                            itemText.textContent = parsedCardName;
                            itemText.classList.add('cardName');
                            cardContainer.appendChild(itemText);

                            itemModifiers.forEach(mod => {
                                const modifierText = document.createElement('div');
                                modifierText.classList.add('modifier');
                                modifierText.textContent = mod;
                                cardContainer.appendChild(modifierText);
                            });

                            itemStickers.forEach(stick => {
                                const stickerText = document.createElement('div');
                                stickerText.classList.add('sticker');
                                stickerText.textContent = stick;
                                cardContainer.appendChild(stickerText);
                            });
                        } else {
                            const { rank, suit, modifiers, seal } = parseStandardCardName(cardName);

                            const canvas = document.createElement('canvas');
                            canvas.width = 71;
                            canvas.height = 95;
                            renderStandardCard(canvas, rank, suit, modifiers, seal);
                            cardContainer.appendChild(canvas);

                            const cardText = document.createElement('div');
                            cardText.textContent = getStandardCardName(cardName);
                            cardText.classList.add('standardCardName');
                            cardContainer.appendChild(cardText);

                            modifiers.forEach(modifier => {
                                const modifierText = document.createElement('div');
                                modifierText.textContent = modifier;
                                modifierText.classList.add('modifier');
                                modifierText.style.color = getModifierColor(modifier);
                                cardContainer.appendChild(modifierText);
                            });

                            if (seal) {
                                const sealText = document.createElement('div');
                                sealText.textContent = seal;
                                sealText.classList.add('seal');
                                sealText.style.color = getModifierColor(seal);
                                cardContainer.appendChild(sealText);
                            }
                        }

                        if (details) {
                            const detailsElement = getDetailsElement(parsedCardName, details, itemModifiers);

                            cardContainer.appendChild(detailsElement);
                        }

                        packItem.appendChild(cardContainer);
                    });

                    packsContainer.appendChild(packItem);
                });


            }

            scrollingContainer.appendChild(queueContainer);
        });

        // Add draggable scrolling functionality
        document.querySelectorAll('.scrollable').forEach(scrollable => {
            let isDown = false;
            let startX;
            let scrollLeft;

            scrollable.addEventListener('mousedown', (e) => {
                isDown = true;
                scrollable.classList.add('active');
                startX = e.pageX - scrollable.offsetLeft;
                scrollLeft = scrollable.scrollLeft;
                scrollable.classList.add('no-select');
            });

            scrollable.addEventListener('mouseleave', () => {
                isDown = false;
                scrollable.classList.remove('active');
                scrollable.classList.remove('no-select');
            });

            scrollable.addEventListener('mouseup', () => {
                isDown = false;
                scrollable.classList.remove('active');
                scrollable.classList.remove('no-select');
            });

            scrollable.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - scrollable.offsetLeft;
                const walk = x - startX; // One-to-one scroll
                scrollable.scrollLeft = scrollLeft - walk;
            });
        });
        searchAndHighlight();
    }

    // Add event listener to the "Analyze" button
    document.getElementById('analyzeButton').addEventListener('click', displayShopQueues);

    // Initialize the display
    displayShopQueues();
})();
