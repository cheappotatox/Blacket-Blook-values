const blookValues = [
    // Common Blooks
    { name: 'Bia', copies: 1, value: 'O/C', pack: 'None', sellprice: 25000, rarity: "Iridescent", droprate: 'Unobtainable', glicko: NaN, demand: "High" } ,
    { name: 'Tropical Island', copies: 2, value: 'O/C', pack: 'None', sellprice: 25000, rarity: "Iridescent", droprate: 'Unobtainable', glicko: NaN, demand: "High" },
    { name: 'Gold Doubloon', copies: 3, value: 'O/C', pack: 'None', sellprice: 1000, rarity: "Mystical", droprate: 'Unobtainable', glicko: NaN, demand: "High" },
    { name: 'Golden Seashell', copies: 9, value: 'O/C', pack: 'None', sellprice: 1000, rarity: "Mystical", droprate: 'Unobtainable', glicko: NaN, demand: "High" },
    { name: 'Naughty Ankha', copies: 21, value: 'O/C', pack: 'Ankha Pack, currently none', sellprice: 350, rarity: "Chroma", droprate: '0.01%, currently unobtainble', glicko: NaN, demand: "High" },
    { name: 'Festive Ankha', copies: 20, value: 'O/C', pack: 'Blizzard Pack, currently none', sellprice: 350, rarity: "Chroma", droprate: '0.01%, currently unobtainble', glicko: NaN, demand: "High" },
    { name: 'Golden Crab', copies: 24, value: 'O/C', pack: 'None', sellprice: 350, rarity: "Chroma", droprate: 'Unobtainable', glicko: NaN, demand: "Moderate" },
    { name: 'Party Pig', copies: 27, value: 'O/C', pack: 'None', sellprice: 350, rarity: "Chroma", droprate: 'Unobtainable', glicko: NaN, demand: "Moderate" },
    { name: 'Lovely Ankha', copies: 38, value: 'O/C', pack: 'Ankha Pack, currently none', sellprice: 350, rarity: "Chroma", droprate: '0.01%, currently unobtainble', glicko: NaN, demand: "Moderate" },
    { name: 'Treasure Chest', copies: 77, value: 'O/C', pack: 'None', sellprice: 1000, rarity: "Mystical", droprate: 'Unobtainable', glicko: NaN, demand: "Moderate" },
    { name: 'Golden Shovel', copies: 72, value: 'O/C', pack: 'None', sellprice: 350, rarity: "Chroma", droprate: 'Unobtainable', glicko: NaN, demand: "Moderate" },
    { name: 'Ukraine Ankha', copies: 88, value: 'O/C', pack: 'Ankha Pack, currently none', sellprice: 350, droprate: '0.01%, currently unobtainble', rarity: "Chroma", glicko: NaN, demand: "Moderate" },
    { name: 'Spring Ankha', copies: 133, value: 'O/C', pack: 'Ankha Pack, currently none', sellprice: 350, rarity: "Chroma", droprate: '0.01%, currently unobtainble', glicko: NaN, demand: "Low" },
    { name: 'Lucky Ankha', copies: 128, value: 'O/C', pack: 'Ankha Pack, currently none', sellprice: 350, rarity: "Chroma", droprate: '0.01%, currently unobtainble', glicko: NaN, demand: "Low" },
    { name: 'American Ankha', copies: 91, value: 'O/C', pack: 'Ankha Pack, currently none', sellprice: 350, rarity: "Chroma", droprate: '0.0087%, currently unobtainble', glicko: NaN, demand: "Moderate" },
    { name: 'Lunar Frog', copies: 859, value: 'O/C', pack: 'Lunar Pack, currently none', sellprice: 300, rarity: "Chroma", droprate: '100%, currently unobtainble', glicko: NaN, demand: "Low" },
    { name: '10k', copies: 3590, value: 'O/C', pack: '10k Pack, currently none', sellprice: 300, rarity: "Chroma", droprate: '100%, currently unobtainble', glicko: NaN, demand: "Low" },
    { name: 'Lovely Planet', copies: 823, value: 'O/C', pack: 'Lovely Pack, currently none', sellprice: 300, rarity: "Chroma", droprate: '100%, currently unobtainble', glicko: NaN, demand: "Low"},
    { name: 'Chocolate Rabbit', copies: 2894, value: 'O/C', pack: 'Easter Pack, currently none', sellprice: 300, rarity: "Chroma", droprate: '100%, currently unobtainble', glicko: NaN, demand: "Low" },
    { name: 'Lucky Hamster', copies: 2186, value: 'O/C', pack: 'Lucky Pack, currently none', sellprice: 300, rarity: "Chroma", droprate: '100%, currently unobtainble', glicko: NaN, demand: "Moderate" },
    { name: 'Vampire Ankha', copies: 68, value: 'O/C', pack: 'Spooky Pack, currently none', sellprice: 400, rarity: "Chroma", droprate: '0.0077%, currently unobtainble', glicko: NaN, demand: "Moderate" },
    { name: 'Turkey Ankha', copies: 37, value: 'O/C', pack: 'Ankha Pack, currently none', sellprice: 350, rarity: "Chroma", droprate: '0.01%, currently unobtainble', glicko: NaN, demand: "Moderate" },
    { name: 'Festive Xotic', copies: 43, value: 'O/C', pack: 'OG Pack, currently none', sellprice: 1000, rarity: "Mystical", droprate: '0.0025%, currently unobtainble', glicko: NaN, demand: "High"},

    // For all equations, let x be the drop rate of a blook
  
    // Mysticals
    // Equation: -100000x + 1450

    { name: 'Xotic', copies: 189, value: calculateNewValue(1200, 189, 30, 68.75, 25.3075), pack: 'OG Pack', sellprice: 1000, rarity: "Mystical" , droprate: '0.0025%', glicko: calculateGlicko(189, 0.0025, 68.75, 25.3075, 30), demand: "Low"},
    { name: 'Monkxy', copies: 212, value: calculateNewValue(950, 212, 30, 68.75, 25.3075), pack: 'OG Pack', sellprice: 1000, rarity: "Mystical", droprate: '0.005%', glicko: calculateGlicko(212, 0.005, 68.75, 25.3075, 30), demand: "Low"},
    { name: 'Celestial Oracle Staff', copies: 12, value: calculateNewValue(1120, 12, 25, 75.2, 24.8533), pack: 'Sci-Fi Pack', sellprice: 1000, rarity: "Mystical", droprate: '0.0033%', glicko: calculateGlicko(12, 0.0033, 75.2, 24.8533, 25), demand: "High" },
    { name: 'Golden Harp', copies: 30, value: calculateNewValue(1080, 30, 25, 58, 19.5337), pack: 'Music Pack', sellprice: 1000, rarity: "Mystical", droprate: '0.0037%', glicko: calculateGlicko(30, 0.0037, 58, 19.5337, 25), demand: "Moderate" },
    { name: 'Rainbow Ankha', copies: 159, value: calculateNewValue(1150, 159, 25, 67.5, 27.023), pack: 'Ankha Pack', sellprice: 1000, rarity: "Mystical", droprate: '0.003%', glicko: calculateGlicko(159, 0.003, 67.5, 27.023, 25), demand: "Low" },
    { name: 'Spooky Ghost', copies: 252, value: calculateNewValue(950, 252, 25, 94.3, 12.6605), pack: 'Spooky Pack', sellprice: 1000, rarity: "Mystical", droprate: '0.005%', glicko: calculateGlicko(252, 0.005, 94.3, 12.6605, 25), demand: "Low" },
    { name: 'Tropical Pig', copies: 55, value: calculateNewValue(1050, 55, 25, 58, 19.5337), pack: 'Summer Pack', sellprice: 1000, rarity: "Mystical", droprate: '0.004%', glicko: calculateGlicko(55, 0.004, 58, 19.5337, 25), demand: "Moderate" },
    { name: 'Golden Shuriken', copies: 71, value: calculateNewValue(1350, 71, 25, 75, 25.0035), pack: 'Combat Pack', sellprice: 2500, rarity: "Mystical", droprate: '0.001%', glicko: calculateGlicko(71, 0.001, 75, 25.0035, 25), demand: "Moderate" },
    { name: 'Diamond Sword', copies: 59, value: calculateNewValue(1200, 59, 25, 75, 25.0035), pack: 'Combat Pack', sellprice: 1000, rarity: "Mystical", droprate: '0.0025%', glicko: calculateGlicko(59, 0.0025, 75, 25.0035, 25), demand: "Moderate"},
    { name: 'Gaming Mouse', copies: 67, value: calculateNewValue(1150, 67, 25, 70, 30.003), pack: 'Gaming Pack', sellprice: 1000, rarity: "Mystical", droprate: '0.003%', glicko: calculateGlicko(67, 0.003, 70, 30.003, 25), demand: "Moderate"},
    { name: 'Time Machine', copies: 18, value: calculateNewValue(1050, 18, 25, 70, 26.934), pack: 'Time Pack', sellprice: 1000, rarity: "Mystical", droprate: '0.004%', glicko: calculateGlicko(18, 0.004, 70, 26.934, 25), demand: "High" },
    { name: 'Hamsta Claus', copies: 13, value: calculateNewValue(1200, 13, 25, 72.5, 27.9675), pack: 'Blizzard Pack' , sellprice: 1000, rarity: "Mystical", droprate: '0.0025%', glicko: calculateGlicko(13, 0.0025, 72.5, 27.9675, 25), demand: "High"},
    { name: 'Diamond Gift', copies: 172, value: calculateNewValue(950, 172, 25, 72.5, 27.9675), pack: 'Blizzard Pack', sellprice: 1000, rarity: "Mystical", droprate: '0.005%', glicko: calculateGlicko(172, 0.005, 72.5, 27.9675, 25), demand: "Low"},
    { name: 'Dark Dragon', copies: 312, value: calculateNewValue(1150, 312, 20, 67, 33.158), pack: 'Medieval Pack' , sellprice: 1000, rarity: "Mystical", droprate: '0.003%', glicko: calculateGlicko(312, 0.003, 67, 33.158, 20), demand: "Low"},
    { name: 'Phantom King', copies: 545, value: calculateNewValue(950, 545, 20, 67, 33.158), pack: 'Medieval Pack', sellprice: 1000, rarity: "Mystical", droprate: '0.005%', glicko: calculateGlicko(545, 0.005, 67, 33.158, 20), demand: "Low"},
    { name: 'Rainbow Astronaut', copies: 193, value: calculateNewValue(1200, 193, 20, 75, 25.525), pack: 'Space Pack', sellprice: 1000, rarity: "Mystical", droprate: '0.0025%', glicko: calculateGlicko(193, 0.0025, 75, 25.525, 20), demand: "Low"},
    { name: 'Tim the Alien', copies: 345, value: calculateNewValue(950, 345, 20, 75, 25.525), pack: 'Space Pack' , sellprice: 1000, rarity: "Mystical", droprate: '0.005%', glicko: calculateGlicko(345, 0.005, 75, 25.525, 20), demand: "Low"},
    { name: 'Space Debugger', copies: 537, value: calculateNewValue(700, 537, 20, 75, 25.525), pack: 'Space Pack', sellprice: 1000, rarity: "Mystical", droprate: '0.0075%', glicko: calculateGlicko(537, 0.0075, 75, 25.525, 20), demand: "Low"},
    { name: 'Black Opal', copies: 78, value: calculateNewValue(1080, 78, 20, 75, 25.0537), pack: 'Gemstone Pack', sellprice: 1000, rarity: "Mystical", droprate: '0.0037%', glicko: calculateGlicko(78, 0.0037, 75, 25.0537, 20), demand: "Moderate"},
    { name: 'Golden Apple', copies: 72, value: calculateNewValue(1200, 72, 20, 75.2, 24.8625), pack: 'Fruit Pack' , sellprice: 1000, rarity: "Mystical", droprate: '0.0025%', glicko: calculateGlicko(72, 0.0025, 75.2, 24.8625, 20), demand: "Moderate"},
    { name: 'Rainbow Blook', copies: 59, value: calculateNewValue(950, 59, 20, 0, 138.255), pack: 'Color Pack' , sellprice: 1000, rarity: "Mystical", droprate: '0.005%', glicko: calculateGlicko(59, 0.005, 0, 138.255, 20), demand: "Moderate"},
    { name: 'Forgotten Bot', copies: 100, value: calculateNewValue(1050, 100, 20, 78, 22.034), pack: 'Bot Pack', sellprice: 1000, rarity: "Mystical", droprate: '0.004%', glicko: calculateGlicko(100, 0.004, 78, 22.034, 20), demand: "Moderate"},
    { name: 'Kraken', copies: 131, value: calculateNewValue(1150, 131, 20, 75, 25.563), pack: 'Aquatic Pack', sellprice: 1000, rarity: "Mystical", droprate: '0.003%', glicko: calculateGlicko(131, 0.003, 75, 25.563, 20), demand: "Moderate"},
  
    // Chromas
    // Equation: -4000x + 420

    { name: 'Zastix', copies: 2094, value: calculateNewValue(220, 2094, 30, 68.75, 25.3075), pack: 'OG Pack', sellprice: 300, rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(2094, 0.05, 68.75, 25.3075, 30), demand: "Low"},
    { name: 'Hijacked Neural Implant', copies: 61, value: calculateNewValue(340, 61, 25, 75.2, 24.85333), pack: 'Sci-Fi Pack', rarity: "Chroma", sellprice: 300, droprate: '0.02%', glicko: calculateGlicko(61, 0.02, 75.2, 24.85333, 25), demand: "Moderate"},
    { name: 'Blue Lightsaber', copies: 64, value: calculateNewValue(300, 64, 25, 75.2, 24.85333), pack: 'Sci-Fi Pack', sellprice: 300, rarity: "Chroma", droprate: '0.03%', glicko: calculateGlicko(64, 0.03, 75.2, 24.85333, 25), demand: "Moderate"},
    { name: 'Teal Platypus', copies: 162, value: calculateNewValue(300, 162, 25, 75, 25), pack: 'Outback Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.03%', glicko: calculateGlicko(162, 0.03, 75, 25, 25), demand: "Low"},
    { name: 'White Piano', copies: 187, value: calculateNewValue(300, 187, 25, 58, 19.5337), pack: 'Music Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.03%', glicko: calculateGlicko(187, 0.03, 58, 19.5337, 25), demand: "Low"},
    { name: 'Zone Ankha', copies: 782, value: calculateNewValue(340, 782, 25, 67.5, 27.023), pack: 'Ankha Pack', sellprice: 300, rarity: "Chroma", droprate: '0.02%', glicko: calculateGlicko(782, 0.02, 67.5, 27.023, 25), demand: "Low"},
    { name: 'Ice Crab', copies: 136, value: calculateNewValue(340, 136, 25, 78, 22), pack: 'Ice Monster Pack', sellprice: 300, rarity: "Chroma", droprate: '0.02%', glicko: calculateGlicko(136, 0.02, 78, 22, 25), demand: "Low"},
    { name: 'Frozen Fossil', copies: 238, value: calculateNewValue(220, 238, 25, 78, 22), pack: 'Ice Monster Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(238, 0.05, 78, 22, 25), demand: "Low"},
    { name: 'Ice Slime', copies: 388, value: calculateNewValue(100, 388, 25, 78, 22), pack: 'Ice Monster Pack', sellprice: 300, rarity: "Chroma", droprate: '0.08%', glicko: calculateGlicko(388, 0.08, 78, 22, 25), demand: "Low"},
    { name: 'Spooky Mummy', copies: 367, value: calculateNewValue(380, 367, 25, 94.3, 12.6605), pack: 'Spooky Pack' , sellprice: 350, rarity: "Chroma", droprate: '0.01%', glicko: calculateGlicko(367, 0.01, 94.3, 12.6605, 25), demand: "Low"},
    { name: 'Spooky Pumpkin', copies: 527, value: calculateNewValue(370, 527, 25, 94.3, 12.6605), pack: 'Spooky Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.0125%', glicko: calculateGlicko(527, 0.0125, 94.3, 12.6605, 25), demand: "Low"},
    { name: 'Spooky Cookie', copies: 544, value: calculateNewValue(368, 544, 25, 94.3, 12.6605), pack: 'Spooky Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.013%', glicko: calculateGlicko(544, 0.013, 94.3, 12.6605, 25), demand: "Low"},
    { name: 'Pumpkin King', copies: 618, value: calculateNewValue(360, 618, 25, 94.3, 12.6605), pack: 'Spooky Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.015%', glicko: calculateGlicko(618, 0.015, 94.3, 12.6605, 25), demand: "Low"},
    { name: 'Vampire Frog', copies: 561, value: calculateNewValue(360, 561, 25, 94.3, 12.6605), pack: 'Spooky Pack', sellprice: 300, rarity: "Chroma", droprate: '0.015%', glicko: calculateGlicko(561, 0.015, 94.3, 12.6605, 25), demand: "Low"},
    { name: 'Anaconda Wizard', copies: 663, value: calculateNewValue(350, 663, 25, 94.3, 12.6605), pack: 'Spooky Pack', sellprice: 300, rarity: "Chroma", droprate: '0.0175%', glicko: calculateGlicko(663, 0.0175, 94.3, 12.6605, 25), demand: "Low"},
    { name: 'Owl Sheriff', copies: 684, value: calculateNewValue(350, 684, 25, 94.3, 12.6605), pack: 'Spooky Pack', sellprice: 300, rarity: "Chroma", droprate: '0.0175%', glicko: calculateGlicko(684, 0.0175, 94.3, 12.6605, 25), demand: "Low"},
    { name: 'Raccoon Bandit', copies: 664, value: calculateNewValue(350, 664, 25, 94.3, 12.6605), pack: 'Spooky Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.0175%', glicko: calculateGlicko(664, 0.0175, 94.3, 12.6605, 25), demand: "Low"},
    { name: 'Chicken Chick', copies: 678, value: calculateNewValue(350, 678, 25, 94.3, 12.6605), pack: 'Spooky Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.0175%', glicko: calculateGlicko(678, 0.0175, 94.3, 12.6605, 25), demand: "Low"},
    { name: 'Chick Chicken', copies: 674, value: calculateNewValue(350, 674, 25, 94.3, 12.6605), pack: 'Spooky Pack', sellprice: 300, rarity: "Chroma", droprate: '0.0175%', glicko: calculateGlicko(674, 0.0175, 94.3, 12.6605, 25), demand: "Low"},
    { name: 'Haunted Cookie', copies: 664, value: calculateNewValue(350, 664, 25, 94.3, 12.6605), pack: 'Spooky Pack', sellprice: 300, rarity: "Chroma", droprate: '0.0175%', glicko: calculateGlicko(664, 0.0175, 94.3, 12.6605, 25), demand: "Low"},
    { name: 'Blue Gummy Bear', copies: 265, value: calculateNewValue(340, 265, 25, 94.3, 12.6605), pack: 'Spooky Pack', sellprice: 300, rarity: "Chroma" , droprate: '0.02%', glicko: calculateGlicko(265, 0.02, 94.3, 12.6605, 25), demand: "Low"},
    { name: 'Green Gummy Bear', copies: 300, value: calculateNewValue(340, 300, 25, 94.3, 12.6605), pack: 'Spooky Pack', sellprice: 300, rarity: "Chroma" , droprate: '0.02%', glicko: calculateGlicko(300, 0.02, 94.3, 12.6605, 25), demand: "Low"},
    { name: 'Red Gummy Bear', copies: 264, value: calculateNewValue(340, 264, 25, 94.3, 12.6605), pack: 'Spooky Pack', sellprice: 300, rarity: "Chroma" , droprate: '0.02%', glicko: calculateGlicko(264, 0.02, 94.3, 12.6605, 25), demand: "Low"},
    { name: 'Ghost Cookie', copies: 727, value: calculateNewValue(340, 727, 25, 94.3, 12.6605), pack: 'Spooky Pack', sellprice: 300, rarity: "Chroma" , droprate: '0.02%', glicko: calculateGlicko(727, 0.02, 94.3, 12.6605, 25), demand: "Low"},
    { name: 'Mummy Cookie', copies: 964, value: calculateNewValue(320, 964, 25, 94.3, 12.6605), pack: 'Spooky Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.025%', glicko: calculateGlicko(964, 0.025, 94.3, 12.6605, 25), demand: "Low"},
    { name: 'Pumpkin Cookie', copies: 1069, value: calculateNewValue(300, 1069, 25, 94.3, 12.6605), pack: 'Spooky Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.03%', glicko: calculateGlicko(1069, 0.03, 94.3, 12.6605, 25), demand: "Low"},
    { name: 'Haunted Pumpkin', copies: 1558, value: calculateNewValue(220, 1558, 25, 94.3, 12.6605), pack: 'Spooky Pack', sellprice: 300, rarity: "Chroma" , droprate: '0.05%', glicko: calculateGlicko(1558, 0.05, 94.3, 12.6605, 25), demand: "Low"},
    { name: 'Coconut Cocktail', copies: 361, value: calculateNewValue(300, 361, 25, 58, 19.5337), pack: 'Summer Pack', sellprice: 300, rarity: "Chroma" , droprate: '0.03%', glicko: calculateGlicko(361, 0.03, 58, 19.5337, 25), demand: "Low"},
    { name: 'Golden Amber', copies: 170, value: calculateNewValue(220, 170, 25, 78, 22.05), pack: 'Dino Pack', sellprice: 300, rarity: "Chroma" , droprate: '0.05%', glicko: calculateGlicko(170, 0.05, 78, 22.05, 25), demand: "Low"},
    { name: 'M67 Grenade', copies: 560, value: calculateNewValue(220, 560, 25, 75, 25.0035), pack: 'Combat Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(560, 0.05, 75, 25.0035, 25), demand: "Low"},
    { name: 'Golden Among Us', copies: 550, value: calculateNewValue(220, 550, 25, 70, 30.003), pack: 'Gaming Pack', sellprice: 300 , rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(550, 0.05, 70, 30.003, 25), demand: "Low"},
    { name: 'Time Stone', copies: 127, value: calculateNewValue(300, 127, 25, 70, 26.934), pack: 'Time Pack', sellprice: 300 , rarity: "Chroma", droprate: '0.03%', glicko: calculateGlicko(127, 0.03, 70, 26.934, 25), demand: "Low"},
    { name: 'Pirate Pufferfish', copies: 1400, value: calculateNewValue(300, 1400, 25, 80, 20), pack: 'Pirate Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.03%', glicko: calculateGlicko(1400, 0.03, 80, 20, 25),demand: "Low"},
    { name: 'Golden Gift', copies: 238, value: calculateNewValue(380, 238, 25, 72.5, 27.9675), pack: 'Blizzard Pack' , sellprice: 350, rarity: "Chroma", droprate: '0.01%', glicko: calculateGlicko(238, 0.01, 72.5, 27.9675, 25), demand: "Low"},
    { name: 'Nutcracker Koala', copies: 69, value: calculateNewValue(380, 69, 25, 72.5, 27.9675), pack: 'Blizzard Pack', sellprice: 350 , rarity: "Chroma", droprate: '0.01%', glicko: calculateGlicko(69, 0.01, 72.5, 27.9675, 25), demand: "Moderate"},
    { name: 'Elf Sweater Snowman', copies: 102, value: calculateNewValue(380, 102, 25, 72.5, 27.9675), pack: 'Blizzard Pack' , sellprice: 350, rarity: "Chroma", droprate: '0.01%', glicko: calculateGlicko(102, 0.01, 72.5, 27.9675, 25), demand: "Moderate"},
    { name: 'Blue Sweater Snowman', copies: 154, value: calculateNewValue(340, 154, 25, 72.5, 27.9675), pack: 'Blizzard Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.02%', glicko: calculateGlicko(154, 0.02, 72.5, 27.9675, 25), demand: "Moderate"},
    { name: 'Red Sweater Snowman', copies: 179, value: calculateNewValue(340, 179, 25, 72.5, 27.9675), pack: 'Blizzard Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.02%', glicko: calculateGlicko(179, 0.02, 72.5, 27.9675, 25), demand: "Low"},
    { name: 'Snowy Bush Monster', copies: 129, value: calculateNewValue(340, 129, 25, 72.5, 27.9675), pack: 'Blizzard Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.02%', glicko: calculateGlicko(129, 0.02, 72.5, 27.9675, 25), demand: "Moderate"},
    { name: 'Chilly Flamingo', copies: 200, value: calculateNewValue(300, 200, 25, 72.5, 27.9675), pack: 'Blizzard Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.03%', glicko: calculateGlicko(200, 0.03, 72.5, 27.9675, 25), demand: "Low"},
    { name: 'Tropical Globe', copies: 450, value: calculateNewValue(340, 450, 25, 72.5, 27.9675), pack: 'Blizzard Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.02%', glicko: calculateGlicko(450, 0.02, 72.5, 27.9675, 25), demand: "Low"},
    { name: 'Frost Wreath', copies: 614, value: calculateNewValue(300, 614, 25, 72.5, 27.9675), pack: 'Blizzard Pack', sellprice: 300 , rarity: "Chroma", droprate: '0.03%', glicko: calculateGlicko(614, 0.03, 72.5, 27.9675, 25), demand: "Low"},
    { name: 'Cookies Combo', copies: 283, value: calculateNewValue(300, 283, 25, 72.5, 27.9675), pack: 'Blizzard Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.03%', glicko: calculateGlicko(283, 0.03, 72.5, 27.9675, 25), demand: "Low"},
    { name: 'Paris Snow Globe', copies: 968, value: calculateNewValue(220, 968, 25, 72.5, 27.9675), pack: 'Blizzard Pack', sellprice: 300 , rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(968, 0.05, 72.5, 27.9675, 25), demand: "Low"},
    { name: 'Egypt Snow Globe', copies: 885, value: calculateNewValue(220, 885, 25, 72.5, 27.9675), pack: 'Blizzard Pack', sellprice: 300 , rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(885, 0.05, 72.5, 27.9675, 25), demand: "Low"},
    { name: 'Japan Snow Globe', copies: 927, value: calculateNewValue(220, 927, 25, 72.5, 27.9675), pack: 'Blizzard Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(927, 0.05, 72.5, 27.9675, 25), demand: "Low"},
    { name: 'London Snow Globe', copies: 981, value: calculateNewValue(220, 981, 25, 72.5, 27.9675), pack: 'Blizzard Pack', sellprice: 300 , rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(981, 0.05, 72.5, 27.9675, 25), demand: "Low"},
    { name: 'New York Snow Globe', copies: 988, value: calculateNewValue(220, 988, 25, 72.5, 27.9675), pack: 'Blizzard Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(988, 0.05, 72.5, 27.9675, 25), demand: "Low"},
    { name: 'Santa Claws', copies: 364, value: calculateNewValue(220, 364, 25, 72.5, 27.9675), pack: 'Blizzard Pack', sellprice: 300 , rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(364, 0.05, 72.5, 27.9675, 25), demand: "Low"},
    { name: 'Red Bowling Ball', copies: 116, value: calculateNewValue(340, 116, 20, 75, 25), pack: 'Sports Pack', sellprice: 300, rarity: "Chroma", droprate: '0.02%', glicko: calculateGlicko(116, 0.02, 75, 25, 20), demand: "Moderate"},
    { name: 'March Hare', copies: 103, value: calculateNewValue(340, 103, 20, 75.2, 24.85), pack: 'Wonderland Pack', sellprice: 300 , rarity: "Chroma", droprate: '0.02%', glicko: calculateGlicko(103, 0.02, 75.2, 24.85, 20), demand: "Moderate"},
    { name: 'Dinah', copies: 171, value: calculateNewValue(300, 171, 20, 75.2, 24.85), pack: 'Wonderland Pack', sellprice: 300 , rarity: "Chroma", droprate: '0.03%', glicko: calculateGlicko(171, 0.03, 75.2, 24.85, 20), demand: "Low"},
    { name: 'Master Elf', copies: 1996, value: calculateNewValue(220, 1996, 20, 67.5, 33.158), pack: 'Medieval Pack', sellprice: 300 , rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(1996, 0.05, 67.5, 33.158, 20), demand: "Low"},
    { name: 'Wise Owl', copies: 666, value: calculateNewValue(220, 666, 20, 67.5, 33.158), pack: 'Medieval Pack', sellprice: 300 , rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(666, 0.05, 67.5, 33.158, 20), demand: "Low"},
    { name: 'Agent Owl', copies: 1901, value: calculateNewValue(220, 1901, 20, 67.5, 33.158), pack: 'Medieval Pack', sellprice: 300 , rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(1901, 0.05, 67.5, 33.158, 20), demand: "Low"},
    { name: 'Space Terminal', copies: 608, value: calculateNewValue(380, 608, 20, 75, 25.525), pack: 'Space Pack', sellprice: 350 , rarity: "Chroma", droprate: '0.01%', glicko: calculateGlicko(608, 0.01, 75, 25.525, 20), demand: "Low"},
    { name: 'Black Astronaut', copies: 1843, value: calculateNewValue(220, 1843, 20, 75, 25.525), pack: 'Space Pack' , sellprice: 300 , rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(1843, 0.05, 75, 25.525, 20), demand: "Low"},
    { name: 'Brown Astronaut', copies: 1745, value: calculateNewValue(220, 1745, 20, 75, 25.525), pack: 'Space Pack'  , sellprice: 300, rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(1745, 0.05, 75, 25.525, 20), demand: "Low"},
    { name: 'Purple Astronaut', copies: 1894, value: calculateNewValue(220, 1894, 20, 75, 25.525), pack: 'Space Pack', sellprice: 300  , rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(1894, 0.05, 75, 25.525, 20), demand: "Low"},
    { name: 'Blue Astronaut', copies: 1810, value: calculateNewValue(220, 1810, 20, 75, 25.525), pack: 'Space Pack', sellprice: 300  , rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(1810, 0.05, 75, 25.525, 20), demand: "Low"},
    { name: 'Cyan Astronaut', copies: 1759, value: calculateNewValue(220, 1759, 20, 75, 25.525), pack: 'Space Pack'  , sellprice: 300, rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(1759, 0.05, 75, 25.525, 20), demand: "Low"},
    { name: 'Green Astronaut', copies: 1760, value: calculateNewValue(220, 1760, 20, 75, 25.525), pack: 'Space Pack' , sellprice: 300 , rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(1760, 0.05, 75, 25.525, 20), demand: "Low"},
    { name: 'Lime Astronaut', copies: 1757, value: calculateNewValue(220, 1757, 20, 75, 25.525), pack: 'Space Pack' , sellprice: 300 , rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(1757, 0.05, 75, 25.525, 20), demand: "Low"},
    { name: 'Yellow Astronaut', copies: 1781, value: calculateNewValue(220, 1781, 20, 75, 25.525), pack: 'Space Pack', sellprice: 300  , rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(1781, 0.05, 75, 25.525, 20), demand: "Low"},
    { name: 'Orange Astronaut', copies: 1770, value: calculateNewValue(220, 1770, 20, 75, 25.525), pack: 'Space Pack' , sellprice: 300 , rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(1770, 0.05, 75, 25.525, 20), demand: "Low"},
    { name: 'Red Astronaut', copies: 1806, value: calculateNewValue(220, 1806, 20, 75, 25.525), pack: 'Space Pack'  , sellprice: 300, rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(1806, 0.05, 75, 25.525, 20), demand: "Low"},
    { name: 'Pink Astronaut', copies: 1826, value: calculateNewValue(220, 1826, 20, 75, 25.525), pack: 'Space Pack', sellprice: 300 , rarity: "Chroma" , droprate: '0.05%', glicko: calculateGlicko(1826, 0.05, 75, 25.525, 20), demand: "Low"},
    { name: 'Tiger Zebra', copies: 150, value: calculateNewValue(340, 150, 20, 75, 25.04), pack: 'Safari Pack' , sellprice: 300 , rarity: "Chroma", droprate: '0.02%', glicko: calculateGlicko(150, 0.02, 75, 25.04, 20), demand: "Low"},
    { name: 'White Peacock', copies: 189, value: calculateNewValue(340, 189, 20, 75, 25.04), pack: 'Safari Pack' , sellprice: 300 , rarity: "Chroma", droprate: '0.02%', glicko: calculateGlicko(189, 0.02, 75, 25.04, 20), demand: "Low"},
    { name: 'Rainbow Panda', copies: 171, value: calculateNewValue(340, 171, 20, 75, 25.04), pack: 'Safari Pack', sellprice: 300  , rarity: "Chroma", droprate: '0.02%', glicko: calculateGlicko(171, 0.02, 75, 25.04, 20), demand: "Low"},
    { name: 'Rose Quartz', copies: 409, value: calculateNewValue(220, 409, 20, 75, 25.0537), pack: 'Gemstone Pack', sellprice: 300 , rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(409, 0.05, 75, 25.0537, 20), demand: "Low"},
    { name: 'Blue Raspberry', copies: 104, value: calculateNewValue(220, 104, 20, 75.2, 24.8625), pack: 'Fruit Pack', sellprice: 350 , rarity: "Chroma", droprate: '0.01%', glicko: calculateGlicko(104, 0.01, 75.2, 24.8625, 20), demand: "Moderate"},
    { name: 'Green Apple', copies: 578, value: calculateNewValue(220, 578, 20, 75.2, 24.8625), pack: 'Fruit Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(578, 0.05, 75.2, 24.8625, 20), demand: "Low"},
    { name: 'Plasma Elemental', copies: 270, value: calculateNewValue(220, 270, 20, 75, 25), pack: 'Elemental Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(270, 0.05, 75, 25, 20), demand: "Low"},
    { name: 'Pink Blook', copies: 229, value: calculateNewValue(220, 229, 20, 0, 138.255), pack: 'Color Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(229, 0.05, 0, 138.255, 20), demand: "Low"},
    { name: 'Blue Gummy Worm', copies: 150, value: calculateNewValue(300, 150, 20, 78, 22), pack: 'Candy Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.02%', glicko: calculateGlicko(150, 0.02, 78, 22, 20), demand: "Low"},
    { name: 'Red Licorice', copies: 300, value: calculateNewValue(220, 300, 20, 78, 22), pack: 'Candy Pack', sellprice: 300, rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(300, 0.05, 78, 22, 20), demand: "Low"},
    { name: 'White Chocolate', copies: 504, value: calculateNewValue(100, 504, 20, 78, 22), pack: 'Candy Pack', sellprice: 300, rarity: "Chroma", droprate: '0.08%', glicko: calculateGlicko(504, 0.08, 78, 22, 20), demand: "Low"},
    { name: 'Chocolate Milk', copies: 1710, value: calculateNewValue(220, 1710, 20, 75, 26.05), pack: 'Breakfast Pack', sellprice: 300, rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(1710, 0.05, 75, 26.05, 20), demand: "Low"},
    { name: 'Catson', copies: 358, value: calculateNewValue(300, 358, 20, 78, 22.034), pack: 'Bot Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.03%', glicko: calculateGlicko(358, 0.03, 78, 22.034, 20), demand: "Low"},
    { name: 'Rainbow Narwhal', copies: 1516, value: calculateNewValue(220, 1516, 20, 75, 25.563), pack: 'Aquatic Pack', sellprice: 300 , rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(1516, 0.05, 75, 25.563, 20), demand: "Low"},
    { name: 'Donut Blobfish', copies: 1397, value: calculateNewValue(220, 1397, 20, 75, 25.563), pack: 'Aquatic Pack', sellprice: 300 , rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(1397, 0.05, 75, 25.563, 20), demand: "Low"},
    { name: 'Crimson Octopus', copies: 1363, value: calculateNewValue(220, 1363, 20, 75, 25.563), pack: 'Aquatic Pack', sellprice: 300 , rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(1363, 0.05, 75, 25.563, 20), demand: "Low"},
    { name: 'Lemon Crab', copies: 1367, value: calculateNewValue(220, 1367, 20, 75, 25.563), pack: 'Aquatic Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(1367, 0.05, 75, 25.563, 20), demand: "Low"},
    { name: 'Poison Dart Frog', copies: 1307, value: calculateNewValue(220, 1307, 20, 75, 25.563), pack: 'Aquatic Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(1307, 0.05, 75, 25.563, 20), demand: "Low"},
    { name: 'Blizzard Clownfish', copies: 1260, value: calculateNewValue(220, 1260, 20, 75, 25.563), pack: 'Aquatic Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(1260, 0.05, 75, 25.563, 20), demand: "Low"},
    { name: 'Rainbow Jellyfish', copies: 1396, value: calculateNewValue(220, 1396, 20, 75, 25.563), pack: 'Aquatic Pack', sellprice: 300 , rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(1396, 0.05, 75, 25.563, 20), demand: "Low"},
    { name: 'Spring Frog', copies: 1569, value: calculateNewValue(180, 1569, 20, 75, 25.563), pack: 'Aquatic Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.06%', glicko: calculateGlicko(1569, 0.05, 75, 25.563, 20), demand: "Low"},
    { name: 'Lucky Frog', copies: 1638, value: calculateNewValue(140, 1638, 20, 75, 25.563), pack: 'Aquatic Pack', sellprice: 300 , rarity: "Chroma", droprate: '0.07%', glicko: calculateGlicko(1638, 0.05, 75, 25.563, 20), demand: "Low"},
    { name: 'Lovely Frog', copies: 1794, value: calculateNewValue(100, 1794, 20, 75, 25.563), pack: 'Aquatic Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.08%', glicko: calculateGlicko(1794, 0.05, 75, 25.563, 20), demand: "Low"},

    // Legendaries
    // Equation: -125x + 225

    // { name: 'Envi', copies: 2061, value: calculateNewValue(193.75, 2061, 30, 68.75, 25.563), pack: 'OG Pack' , sellprice: 200, rarity: "Legendary", droprate: '0.25%', glicko: calculateGlicko(2061, 0.25, 68.75, 25.563, 30), demand: "Low"},
    // { name: 'Root', copies: 3498, value: calculateNewValue(162.5, 3498, 30, 0, 68.75, 25.563), pack: 'OG Pack' , sellprice: 200, rarity: "Legendary", droprate: '0.5%', glicko: calculateGlicko(3498, 0.5, 68.75, 25.563, 30), demand: "Low"},
    // { name: 'Eternal Prism Blade', copies: 475, value: calculateNewValue(187.5, 475, 25, 75.2, 24.85333), pack: 'Sci-Fi Pack' , sellprice: 200, rarity: "Legendary", droprate: '0.3%', glicko: calculateGlicko(475, 0.3, 75.2, 24.8533, 25), demand: "Low"},
    // { name: 'Sugar Glider', copies: 689, value: calculateNewValue(178.75, 689, 25, 75, 25), pack: 'Outback Pack' , sellprice: 200, rarity: "Legendary", droprate: '0.37%', glicko: calculateGlicko(689, 0.37, 75, 25, 25), demand: "Low"},
    // { name: 'Piano', copies: 747, value: calculateNewValue(175, 747, 25, 58, 19.5337), pack: 'Music Pack' , sellprice: 200, rarity: "Legendary", droprate: '0.4%', glicko: calculateGlicko(747, 0.4, 58, 19.5337, 25), demand: "Low"},
    // { name: 'Golden Ankha', copies: 2705, value: calculateNewValue(162.5, 2705, 25, 67.5, 27.023), pack: 'Ankha Pack' , sellprice: 200, rarity: "Legendary", droprate: '0.5%', glicko: calculateGlicko(2705, 0.5, 67.5, 27.023, 20), demand: "Low"},
    // { name: 'Yeti', copies: 648, value: calculateNewValue(181.25, 648, 25, 78, 22), pack: 'Ice Monster Pack' , sellprice: 200, rarity: "Legendary", droprate: '0.35%', glicko: calculateGlicko(648, 0.35, 78, 22, 25), demand: "Low"},
    // { name: 'Ghost', copies: 2944, value: calculateNewValue(143.75, 2944, 25, 94.3, 12.6605), pack: 'Spooky Pack' , sellprice: 200, rarity: "Legendary", droprate: '0.65%', glicko: calculateGlicko(2944, 0.65, 94.3, 12.6605, 25), demand: "Low"},
    // { name: 'Sand Castle', copies: 1213, value: calculateNewValue(175, 1213, 25, 58, 19.5337), pack: 'Summer Pack' , sellprice: 200, rarity: "Legendary", droprate: '0.4%', glicko: calculateGlicko(1213, 0.4, 58, 19.5337, 25), demand: "Low"},
    // { name: 'Tyrannosaurus Rex', copies: 520, value: calculateNewValue(187.5, 520, 25, 78, 22.05), pack: 'Dino Pack' , sellprice: 200, rarity: "Legendary", droprate: '0.3%', glicko: calculateGlicko(520, 0.3, 78, 22.05, 25), demand: "Low"},
    // { name: 'M12 Shotgun', copies: 1352, value: calculateNewValue(168.75, 1352, 25, 75, 25.0035), pack: 'Combat Pack' , sellprice: 200, rarity: "Legendary", droprate: '0.45%', glicko: calculateGlicko(1352, 0.45, 75, 25.0035, 25), demand: "Low"},
    // { name: 'Master Chief', copies: 1394, value: calculateNewValue(187.5, 1394, 25, 70, 30.003), pack: 'Gaming Pack' , sellprice: 200, rarity: "Legendary", droprate: '0.3%', glicko: calculateGlicko(1394, 0.3, 70, 30.003, 25), demand: "Low"},
    // { name: 'Clock Tower', copies: 687, value: calculateNewValue(175, 687, 25, 70, 26.934), pack: 'Time Pack' , sellprice: 200, rarity: "Legendary", droprate: '0.4%', glicko: calculateGlicko(687, 0.4, 70, 26.934, 25), demand: "Low"},
    // { name: 'Captain Blackbeard', copies: 247, value: calculateNewValue(187.5, 247, 25, 80, 20), pack: 'Pirate Pack' , sellprice: 200, rarity: "Legendary", droprate: '0.3%', glicko: calculateGlicko(247, 0.3, 80, 20, 25), demand: "Low"},
    // { name: 'Santa Claus', copies: 2797, value: calculateNewValue(100, 2797, 25, 72.5, 27.9675), pack: 'Blizzard Pack' , sellprice: 200, rarity: "Legendary", droprate: '1%', glicko: calculateGlicko(2797, 1, 72.5, 27.9675, 25), demand: "Low"},
    // { name: 'Football Helmet', copies: 944, value: calculateNewValue(162.5, 944, 20, 75, 25), pack: 'Sports Pack' , sellprice: 200, rarity: "Legendary", droprate: '0.5%', glicko: calculateGlicko(944, 0.5, 75, 25, 29), demand: "Low"},
    // { name: 'King of Hearts', copies: 897, value: calculateNewValue(187.5, 897, 20, 75.2, 24.85), pack: 'Wonderland Pack' , sellprice: 200, rarity: "Legendary", droprate: '0.3%', glicko: calculateGlicko(897, 0.3, 75.2, 24.85, 20), demand: "Low"},
    // { name: 'King', copies: 2499, value: calculateNewValue(100, 2499, 20, 67.5, 33.158), pack: 'Medieval Pack' , sellprice: 200, rarity: "Legendary", droprate: '1%', glicko: calculateGlicko(2499, 1, 67.5, 33.158, 20), demand: "Low"},
    // { name: 'Astronaut', copies: 2857, value: calculateNewValue(168.75, 2857, 20, 75, 25.525), pack: 'Space Pack' , sellprice: 200, rarity: "Legendary", droprate: '0.45%', glicko: calculateGlicko(2857, 0.45, 75, 25.525, 20), demand: "Low"},
    // { name: 'Lion', copies: 930, value: calculateNewValue(162.5, 930, 20, 75, 25.04), pack: 'Safari Pack' , sellprice: 200, rarity: "Legendary", droprate: '0.5%', glicko: calculateGlicko(930, 0.5, 75, 25.04, 20), demand: "Low"},
    // { name: 'Moonstone', copies: 618, value: calculateNewValue(200, 618, 20, 75, 25.0537), pack: 'Gemstone Pack' , sellprice: 250, rarity: "Legendary", droprate: '0.2%', glicko: calculateGlicko(618, 0.2, 75, 25.0537, 20), demand: "Low"},
    // { name: 'Opal', copies: 1164, value: calculateNewValue(162.5, 1164, 20, 75, 25.0537), pack: 'Gemstone Pack' , sellprice: 200, rarity: "Legendary", droprate: '0.5%', glicko: calculateGlicko(1164, 0.5, 75, 25.0537, 20), demand: "Low"},
    // { name: 'Starfruit', copies: 966, value: calculateNewValue(187.5, 966, 20, 75, 24.8625), pack: 'Fruit Pack' , sellprice: 200, rarity: "Legendary", droprate: '0.3%', glicko: calculateGlicko(966, 0.3, 75, 24.8625, 20), demand: "Low"},
    // { name: 'Electric Elemental', copies: 1112, value: calculateNewValue(168.75, 1112, 20, 75, 25), pack: 'Elemental Pack' , sellprice: 200, rarity: "Legendary", droprate: '0.45%', glicko: calculateGlicko(1112, 0.45, 75, 25, 20), demand: "Low"},
    // { name: 'Black Blook', copies: 570, value: calculateNewValue(200, 570, 20, 0, 138.255), pack: 'Color Pack' , sellprice: 250, rarity: "Legendary", droprate: '0.2%', glicko: calculateGlicko(570, 0.2, 0, 138.255, 20), demand: "Low"},
    // { name: 'White Blook', copies: 892, value: calculateNewValue(162.5, 892, 20, 0, 138.255), pack: 'Color Pack' , sellprice: 200, rarity: "Legendary", droprate: '0.5%', glicko: calculateGlicko(892, 0.5, 0, 138.255, 20), demand: "Low"},
    // { name: 'Rock Candy', copies: 799, value: calculateNewValue(181.25, 799, 20, 78, 22), pack: 'Candy Pack' , sellprice: 200, rarity: "Legendary", droprate: '0.35%', glicko: calculateGlicko(799, 0.35, 78, 22, 20), demand: "Low"},
    // { name: 'Sandwich', copies: 2223, value: calculateNewValue(100, 2223, 20, 75, 26.05), pack: 'Breakfast Pack' , sellprice: 200, rarity: "Legendary", droprate: '1%', glicko: calculateGlicko(2223, 1, 75, 26.05, 20), demand: "Low"},
    // { name: 'Mega Bot', copies: 994, value: calculateNewValue(187.5, 994, 20, 78, 22.034), pack: 'Bot Pack' , sellprice: 200, rarity: "Legendary", droprate: '0.3%', glicko: calculateGlicko(994, 0.3, 78, 22.034, 20), demand: "Low"},
    // { name: 'Megalodon', copies: 1560, value: calculateNewValue(200, 1560, 20, 75, 25.563), pack: 'Aquatic Pack' , sellprice: 250, rarity: "Legendary", droprate: '0.2%', glicko: calculateGlicko(1560, 0.2, 75, 25.563, 20), demand: "Low"},
    // { name: 'Baby Shark', copies: 2121, value: calculateNewValue(162.5, 2121, 20, 75, 25.563), pack: 'Aquatic Pack' , sellprice: 200, rarity: "Legendary", droprate: '0.5%', glicko: calculateGlicko(2121, 0.5, 75, 25.563, 20), demand: "Low"},

    // const boxPercentages = {
        // 'OG': { lowerRate: 68.75, higherRate: 25.3075 },
        // 'Sci-Fi': { lowerRate: 75.2, higherRate: 24.8533 },
        // 'Outback': { lowerRate: 75, higherRate: 25 },
        // 'Music': { lowerRate: 58, higherRate: 19.5337 },
        // 'Ankha': { lowerRate: 67.5, higherRate: 27.023 },
        // 'Ice Monster': { lowerRate: 78, higherRate: 22 },
        // 'Spooky': { lowerRate: 94.3, higherRate: 12.6605 },
        // 'Summer': { lowerRate: 58, higherRate: 19.5337 },
        // 'Dino': { lowerRate: 78, higherRate: 22.05 },
        // 'Combat': { lowerRate: 75, higherRate: 25.0035 },
        // 'Video Game': { lowerRate: 70, higherRate: 30.003 },
        // 'Time': { lowerRate: 70, higherRate: 26.934 },
        // 'Pirate': { lowerRate: 80, higherRate: 20 },
        // 'Blizzard': { lowerRate: 72.5, higherRate: 27.765 },
        // 'Sports': { lowerRate: 75, higherRate: 25 },
        // 'Wonderland': { lowerRate: 75.2, higherRate: 24.85 },
        // 'Medieval': { lowerRate: 67, higherRate: 33.158 },
        // 'Space': { lowerRate: 75, higherRate: 25.525 },
        // 'Safari': { lowerRate: 75, higherRate: 25.04 },
        // 'Gemstone': { lowerRate: 75, higherRate: 25.0537 },
        // 'Fruit': { lowerRate: 75.2, higherRate: 24.8625 },
        // 'Elemental': { lowerRate: 75, higherRate: 25 },
        // 'Color': { lowerRate: 0, higherRate: 138.255 },
        // 'Candy': { lowerRate: 78, higherRate: 22 },
        // 'Breakfast': { lowerRate: 75, higherRate: 26.05 },
        // 'Bot': { lowerRate: 78, higherRate: 22.034 },
        // 'Aquatic': { lowerRate: 75, higherRate: 25.563 },
    //  };
];

function filterBlooks() {
    const searchTerm = document.getElementById('blookSearch').value.toLowerCase();
    const resultsContainer = document.getElementById('results');

    // Check if the search term is empty
    if (!searchTerm.trim()) {
        resultsContainer.innerHTML = ''; // Clear the results container
        return;
    }

    const filteredBlooks = blookValues.filter(blook =>
        blook.name.toLowerCase().includes(searchTerm) ||
        blook.pack.toLowerCase().includes(searchTerm) ||
        blook.rarity.toLowerCase().includes(searchTerm)
    );

    resultsContainer.innerHTML = ''; // Clear previous results

    if (filteredBlooks.length > 0) {
        // Sort the filtered blooks first by drop rate (lowest to highest), then by name length
        filteredBlooks.sort((a, b) => {
            const dropRateDiff = a.droprate - b.droprate;

            if (dropRateDiff === 0) {
                // If drop rates are the same, sort by name length
                return a.name.length - b.name.length;
            }

            return dropRateDiff;
        });

        filteredBlooks.forEach(blook => {
            const blookItem = document.createElement('div');
            blookItem.className = 'blook-item';
            resultsContainer.appendChild(blookItem);

            // Add margin to each line of data inside the box
            blookItem.innerHTML = `
                <strong>${blook.name}</strong><br>
                Copies: ${blook.copies}<br>
                Sell Price: ${blook.sellprice}<br>
                Value: ${blook.value}<br>
                Pack: ${blook.pack}<br>
                Rarity: ${blook.rarity}<br>
                Drop Rate: ${blook.droprate}<br>
                Glicko: ${blook.glicko}<br>
                Demand: ${blook.demand}<br>
            `;

            // Add a margin between each line of data inside the box
            blookItem.style.marginBottom = '28px';
            blookItem.style.lineHeight = '28px';
        });
    } else {
        const noResults = document.createElement('div');
        noResults.textContent = 'No matching blooks found.';
        resultsContainer.appendChild(noResults);
    }
}

// Helper function to get rarity order
function getRarityOrder(rarity) {
    const rarityOrder = {
        'Iridescent': 0,
        'Mystical': 1,
        'Chroma': 2,
     // 'Legendary': 3 
        // Add more rarities if needed
    };

    return rarityOrder[rarity] || 999; // Default to a high value if rarity is not recognized
}

// Function to calculate the Value of a blook
function calculateNewValue(estimatedsellprice, copies, packPrice, lowerRate, higherRate) {
    const roundedValue = Math.round(
      estimatedsellprice * (14279 / copies) / (25 / packPrice) / ((100 / ((lowerRate + higherRate * 2)) * 2))
    );
  
    return roundedValue;
}

// Function to calculate the Glicko
function calculateGlicko(copies, droprate, lowerRate, higherRate, packPrice) {
    const Glicko = ((14279 / copies) * ((droprate * (100 / ((lowerRate + higherRate * 2)) * 2)) / 0.013) * (25 / packPrice)).toFixed(2);
    
    return Glicko;
}
