const blookValues = [
    // Common Blooks
    { name: 'Bia', copies: 1, value: 'O/C', pack: 'None', sellprice: 25000, rarity: "Iridescent", droprate: 'Unobtainable', glicko: NaN, demand: calculateDemand(1) } ,
    { name: 'Tropical Island', copies: 2, value: 'O/C', pack: 'None', sellprice: 25000, rarity: "Iridescent", droprate: 'Unobtainable', glicko: NaN, demand: calculateDemand(2) },
    { name: 'Gold Doubloon', copies: 3, value: 'O/C', pack: 'None', sellprice: 1000, rarity: "Mystical", droprate: 'Unobtainable', glicko: NaN, demand: calculateDemand(3) },
    { name: 'Golden Seashell', copies: 9, value: 'O/C', pack: 'None', sellprice: 1000, rarity: "Mystical", droprate: 'Unobtainable', glicko: NaN, demand: calculateDemand(9) },
    { name: 'Naughty Ankha', copies: 21, value: 'O/C', pack: 'Ankha Pack, currently none', sellprice: 350, rarity: "Chroma", droprate: '0.01%, currently unobtainble', glicko: NaN, demand: calculateDemand(21) },
    { name: 'Festive Ankha', copies: 20, value: 'O/C', pack: 'Blizzard Pack, currently none', sellprice: 350, rarity: "Chroma", droprate: '0.01%, currently unobtainble', glicko: NaN, demand: calculateDemand(20) },
    { name: 'Golden Crab', copies: 24, value: 'O/C', pack: 'None', sellprice: 350, rarity: "Chroma", droprate: 'Unobtainable', glicko: NaN, demand: calculateDemand(24) },
    { name: 'Party Pig', copies: 27, value: 'O/C', pack: 'None', sellprice: 350, rarity: "Chroma", droprate: 'Unobtainable', glicko: NaN, demand: calculateDemand(27) },
    { name: 'Lovely Ankha', copies: 38, value: 'O/C', pack: 'Ankha Pack, currently none', sellprice: 350, rarity: "Chroma", droprate: '0.01%, currently unobtainble', glicko: NaN, demand: calculateDemand(38) },
    { name: 'Treasure Chest', copies: 78, value: 'O/C', pack: 'None', sellprice: 1000, rarity: "Mystical", droprate: 'Unobtainable', glicko: NaN, demand: calculateDemand(78) },
    { name: 'Golden Shovel', copies: 72, value: 'O/C', pack: 'None', sellprice: 350, rarity: "Chroma", droprate: 'Unobtainable', glicko: NaN, demand: calculateDemand(72) },
    { name: 'Ukraine Ankha', copies: 89, value: 'O/C', pack: 'Ankha Pack, currently none', sellprice: 350, droprate: '0.01%, currently unobtainble', rarity: "Chroma", glicko: NaN, demand: calculateDemand(89) },
    { name: 'Spring Ankha', copies: 135, value: 'O/C', pack: 'Ankha Pack, currently none', sellprice: 350, rarity: "Chroma", droprate: '0.01%, currently unobtainble', glicko: NaN, demand: calculateDemand(135) },
    { name: 'Lucky Ankha', copies: 130, value: 'O/C', pack: 'Ankha Pack, currently none', sellprice: 350, rarity: "Chroma", droprate: '0.01%, currently unobtainble', glicko: NaN, demand: calculateDemand(130) },
    { name: 'American Ankha', copies: 92, value: 'O/C', pack: 'Ankha Pack, currently none', sellprice: 350, rarity: "Chroma", droprate: '0.0087%, currently unobtainble', glicko: NaN, demand: calculateDemand(92) },
    { name: 'Lunar Frog', copies: 860, value: 'O/C', pack: 'Lunar Pack, currently none', sellprice: 300, rarity: "Chroma", droprate: '100%, currently unobtainble', glicko: NaN, demand: calculateDemand(860) },
    { name: '10k', copies: 3678, value: 'O/C', pack: '10k Pack, currently none', sellprice: 300, rarity: "Chroma", droprate: '100%, currently unobtainble', glicko: NaN, demand: calculateDemand(3678) },
    { name: 'Lovely Planet', copies: 824, value: 'O/C', pack: 'Lovely Pack, currently none', sellprice: 300, rarity: "Chroma", droprate: '100%, currently unobtainble', glicko: NaN, demand: calculateDemand(824) },
    { name: 'Chocolate Rabbit', copies: 3011, value: 'O/C', pack: 'Easter Pack, currently none', sellprice: 300, rarity: "Chroma", droprate: '100%, currently unobtainble', glicko: NaN, demand: calculateDemand(3011) },
    { name: 'Lucky Hamster', copies: 2227, value: 'O/C', pack: 'Lucky Pack, currently none', sellprice: 300, rarity: "Chroma", droprate: '100%, currently unobtainble', glicko: NaN, demand: calculateDemand(76) },
    { name: 'Vampire Ankha', copies: 76, value: 'O/C', pack: 'Spooky Pack, currently none', sellprice: 400, rarity: "Chroma", droprate: '0.0077%, currently unobtainble', glicko: NaN, demand: calculateDemand(76) },
    { name: 'Turkey Ankha', copies: 37, value: 'O/C', pack: 'Ankha Pack, currently none', sellprice: 350, rarity: "Chroma", droprate: '0.01%, currently unobtainble', glicko: NaN, demand: calculateDemand(37) },
  
    // Mysticals
    { name: 'Xotic', copies: 171, value: calculateNewValue(1000, 171, 30, 75, 25.3075), pack: 'OG Pack', sellprice: 1000, rarity: "Mystical" , droprate: '0.0025%', glicko: calculateGlicko(171, 0.0025, 75, 25.3075, 30), demand: calculateDemand(171)},
    { name: 'Envi', copies: 161, value: calculateNewValue(1000, 161, 30, 75, 25.3075), pack: 'OG Pack', sellprice: 1000, rarity: "Mystical", droprate: '0.005%', glicko: calculateGlicko(161, 0.005, 75, 25.3075, 30), demand: calculateDemand(161)},
    { name: 'Celestial Oracle Staff', copies: 12, value: calculateNewValue(1000, 12, 25, 75.2, 24.8533), pack: 'Sci-Fi Pack', sellprice: 1000, rarity: "Mystical", droprate: '0.0033%', glicko: calculateGlicko(12, 0.0033, 75.2, 24.8533, 25), demand: calculateDemand(12) },
    { name: 'Golden Harp', copies: 30, value: calculateNewValue(1000, 30, 25, 58, 19.5337), pack: 'Music Pack', sellprice: 1000, rarity: "Mystical", droprate: '0.0037%', glicko: calculateGlicko(30, 0.0037, 58, 19.5337, 25), demand: calculateDemand(30) },
    { name: 'Rainbow Ankha', copies: 159, value: calculateNewValue(1000, 159, 25, 67.5, 27.023), pack: 'Ankha Pack', sellprice: 1000, rarity: "Mystical", droprate: '0.003%', glicko: calculateGlicko(159, 0.003, 67.5, 27.023, 25), demand: calculateDemand(159) },
    { name: 'Spooky Ghost', copies: 250, value: calculateNewValue(1000, 250, 25, 94.3, 12.6605), pack: 'Spooky Pack', sellprice: 1000, rarity: "Mystical", droprate: '0.005%', glicko: calculateGlicko(250, 0.005, 94.3, 12.6605, 25), demand: calculateDemand(250) },
    { name: 'Tropical Pig', copies: 55, value: calculateNewValue(1000, 55, 25, 58, 19.5337), pack: 'Summer Pack', sellprice: 1000, rarity: "Mystical", droprate: '0.004%', glicko: calculateGlicko(55, 0.004, 58, 19.5337, 25), demand: calculateDemand(55) },
    { name: 'Golden Shuriken', copies: 71, value: calculateNewValue(1000, 71, 25, 75, 25.0035), pack: 'Combat Pack', sellprice: 1000, rarity: "Mystical", droprate: '0.001%', glicko: calculateGlicko(71, 0.001, 75, 25.0035, 25), demand: calculateDemand(71) },
    { name: 'Diamond Sword', copies: 59, value: calculateNewValue(1000, 59, 25, 75, 25.0035), pack: 'Combat Pack', sellprice: 1000, rarity: "Mystical", droprate: '0.0025%', glicko: calculateGlicko(59, 0.0025, 75, 25.0035, 25), demand: calculateDemand(59) },
    { name: 'Gaming Mouse', copies: 67, value: calculateNewValue(1000, 67, 25, 70, 30.003), pack: 'Gaming Pack', sellprice: 1000, rarity: "Mystical", droprate: '0.003%', glicko: calculateGlicko(67, 0.003, 70, 30.003, 25), demand: calculateDemand(67) },
    { name: 'Time Machine', copies: 17, value: calculateNewValue(1000, 17, 25, 70, 26.934), pack: 'Time Pack', sellprice: 1000, rarity: "Mystical", droprate: '0.004%', glicko: calculateGlicko(17, 0.004, 70, 26.934, 25), demand: calculateDemand(17) },
    { name: 'Hamsta Claus', copies: 6, value: calculateNewValue(1000, 6, 25, 72.5, 27.9675), pack: 'Blizzard Pack' , sellprice: 1000, rarity: "Mystical", droprate: '0.0025%', glicko: calculateGlicko(6, 0.0025, 72.5, 27.9675, 25), demand: calculateDemand(6)},
    { name: 'Diamond Gift', copies: 163, value: calculateNewValue(1000, 163, 25, 72.5, 27.9675), pack: 'Blizzard Pack', sellprice: 1000, rarity: "Mystical", droprate: '0.005%', glicko: calculateGlicko(163, 0.005, 72.5, 27.9675, 25), demand: calculateDemand(163) },
    { name: 'Dark Dragon', copies: 312, value: calculateNewValue(1000, 312, 20, 67, 33.158), pack: 'Medieval Pack' , sellprice: 1000, rarity: "Mystical", droprate: '0.003%', glicko: calculateGlicko(312, 0.003, 67, 33.158, 20), demand: calculateDemand(312)},
    { name: 'Phantom King', copies: 544, value: calculateNewValue(1000, 544, 20, 67, 33.158), pack: 'Medieval Pack', sellprice: 1000, rarity: "Mystical", droprate: '0.005%', glicko: calculateGlicko(544, 0.005, 67, 33.158, 20), demand: calculateDemand(544)},
    { name: 'Rainbow Astronaut', copies: 194, value: calculateNewValue(1000, 194, 20, 75, 25.525), pack: 'Space Pack', sellprice: 1000, rarity: "Mystical", droprate: '0.0025%', glicko: calculateGlicko(194, 0.0025, 75, 25.525, 20), demand: calculateDemand(194) },
    { name: 'Tim the Alien', copies: 344, value: calculateNewValue(1000, 344, 20, 75, 25.525), pack: 'Space Pack' , sellprice: 1000, rarity: "Mystical", droprate: '0.005%', glicko: calculateGlicko(344, 0.005, 75, 25.525, 20), demand: calculateDemand(344)},
    { name: 'Space Debugger', copies: 536, value: calculateNewValue(1000, 536, 20, 75, 25.525), pack: 'Space Pack', sellprice: 1000, rarity: "Mystical", droprate: '0.0075%', glicko: calculateGlicko(536, 0.0075, 75, 25.525, 20), demand: calculateDemand(536) },
    { name: 'Black Opal', copies: 78, value: calculateNewValue(1000, 78, 20, 75, 25.0537), pack: 'Gemstone Pack', sellprice: 1000, rarity: "Mystical", droprate: '0.0037%', glicko: calculateGlicko(78, 0.0037, 75, 25.0537, 20), demand: calculateDemand(78) },
    { name: 'Golden Apple', copies: 71, value: calculateNewValue(1000, 71, 20, 75.2, 24.8625), pack: 'Fruit Pack' , sellprice: 1000, rarity: "Mystical", droprate: '0.0025%', glicko: calculateGlicko(71, 0.0025, 75.2, 24.8625, 20), demand: calculateDemand(71)},
    { name: 'Rainbow Blook', copies: 59, value: calculateNewValue(1000, 59, 20, 0, 138.255), pack: 'Color Pack' , sellprice: 1000, rarity: "Mystical", droprate: '0.005%', glicko: calculateGlicko(59, 0.005, 0, 138.255, 20), demand: calculateDemand(59)},
    { name: 'Forgotten Bot', copies: 100, value: calculateNewValue(1000, 100, 20, 78, 22.034), pack: 'Bot Pack', sellprice: 1000, rarity: "Mystical", droprate: '0.004%', glicko: calculateGlicko(100, 0.004, 78, 22.034, 20), demand: calculateDemand(100)},
    { name: 'Kraken', copies: 131, value: calculateNewValue(1000, 131, 20, 75, 25.563), pack: 'Aquatic Pack', sellprice: 1000, rarity: "Mystical", droprate: '0.003%', glicko: calculateGlicko(131, 0.003, 75, 25.563, 20), demand: calculateDemand(131)},
  
    // Chromas
    { name: 'Zastix', copies: 1641, value: calculateNewValue(300, 1641, 30, 75, 25.3075), pack: 'OG Pack', sellprice: 300, rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(1641, 0.05, 75, 25.3075, 30), demand: calculateDemand(1641)},
    { name: 'Hijacked Neural Implant', copies: 62, value: calculateNewValue(300, 62, 25, 75.2, 24.85333), pack: 'Sci-Fi Pack', rarity: "Chroma", sellprice: 300, droprate: '0.02%', glicko: calculateGlicko(62, 0.02, 75.2, 24.85333, 25), demand: calculateDemand(62)},
    { name: 'Blue Lightsaber', copies: 64, value: calculateNewValue(300, 64, 25, 75.2, 24.85333), pack: 'Sci-Fi Pack', sellprice: 300, rarity: "Chroma", droprate: '0.03%', glicko: calculateGlicko(64, 0.03, 75.2, 24.85333, 25), demand: calculateDemand(64)},
    { name: 'Teal Platypus', copies: 162, value: calculateNewValue(300, 162, 25, 75, 25), pack: 'Outback Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.03%', glicko: calculateGlicko(162, 0.03, 75, 25, 25), demand: calculateDemand(162)},
    { name: 'White Piano', copies: 187, value: calculateNewValue(300, 187, 25, 58, 19.5337), pack: 'Music Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.03%', glicko: calculateGlicko(187, 0.03, 58, 19.5337, 25), demand: calculateDemand(187)},
    { name: 'Zone Ankha', copies: 782, value: calculateNewValue(300, 782, 25, 67.5, 27.023), pack: 'Ankha Pack', sellprice: 300, rarity: "Chroma", droprate: '0.02%', glicko: calculateGlicko(782, 0.02, 67.5, 27.023, 25), demand: calculateDemand(782)},
    { name: 'Ice Crab', copies: 137, value: calculateNewValue(300, 137, 25, 78, 22), pack: 'Ice Monster Pack', sellprice: 300, rarity: "Chroma", droprate: '0.02%', glicko: calculateGlicko(137, 0.02, 78, 22, 25), demand: calculateDemand(137)},
    { name: 'Frozen Fossil', copies: 237, value: calculateNewValue(300, 237, 25, 78, 22), pack: 'Ice Monster Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(237, 0.05, 78, 22, 25), demand: calculateDemand(237)},
    { name: 'Ice Slime', copies: 388, value: calculateNewValue(300, 388, 25, 78, 22), pack: 'Ice Monster Pack', sellprice: 300, rarity: "Chroma", droprate: '0.08%', glicko: calculateGlicko(388, 0.08, 78, 22, 25), demand: calculateDemand(388)},
    { name: 'Spooky Mummy', copies: 368, value: calculateNewValue(350, 368, 25, 94.3, 12.6605), pack: 'Spooky Pack' , sellprice: 350, rarity: "Chroma", droprate: '0.01%', glicko: calculateGlicko(368, 0.01, 94.3, 12.6605, 25), demand: calculateDemand(368)},
    { name: 'Spooky Pumpkin', copies: 525, value: calculateNewValue(300, 525, 25, 94.3, 12.6605), pack: 'Spooky Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.0125%', glicko: calculateGlicko(525, 0.0125, 94.3, 12.6605, 25), demand: calculateDemand(525)},
    { name: 'Spooky Cookie', copies: 545, value: calculateNewValue(300, 545, 25, 94.3, 12.6605), pack: 'Spooky Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.013%', glicko: calculateGlicko(545, 0.013, 94.3, 12.6605, 25), demand: calculateDemand(545)},
    { name: 'Pumpkin King', copies: 618, value: calculateNewValue(300, 618, 25, 94.3, 12.6605), pack: 'Spooky Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.015%', glicko: calculateGlicko(618, 0.015, 94.3, 12.6605, 25), demand: calculateDemand(618)},
    { name: 'Vampire Frog', copies: 562, value: calculateNewValue(300, 562, 25, 94.3, 12.6605), pack: 'Spooky Pack', sellprice: 300, rarity: "Chroma", droprate: '0.015%', glicko: calculateGlicko(562, 0.015, 94.3, 12.6605, 25), demand: calculateDemand(562)},
    { name: 'Anaconda Wizard', copies: 664, value: calculateNewValue(300, 664, 25, 94.3, 12.6605), pack: 'Spooky Pack', sellprice: 300, rarity: "Chroma", droprate: '0.0175%', glicko: calculateGlicko(664, 0.0175, 94.3, 12.6605, 25), demand: calculateDemand(664)},
    { name: 'Owl Sheriff', copies: 683, value: calculateNewValue(300, 683, 25, 94.3, 12.6605), pack: 'Spooky Pack', sellprice: 300, rarity: "Chroma", droprate: '0.0175%', glicko: calculateGlicko(683, 0.0175, 94.3, 12.6605, 25), demand: calculateDemand(683)},
    { name: 'Raccoon Bandit', copies: 664, value: calculateNewValue(300, 664, 25, 94.3, 12.6605), pack: 'Spooky Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.0175%', glicko: calculateGlicko(664, 0.0175, 94.3, 12.6605, 25), demand: calculateDemand(664)},
    { name: 'Chicken Chick', copies: 679, value: calculateNewValue(300, 679, 25, 94.3, 12.6605), pack: 'Spooky Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.0175%', glicko: calculateGlicko(679, 0.0175, 94.3, 12.6605, 25), demand: calculateDemand(679)},
    { name: 'Chick Chicken', copies: 673, value: calculateNewValue(300, 673, 25, 94.3, 12.6605), pack: 'Spooky Pack', sellprice: 300, rarity: "Chroma", droprate: '0.0175%', glicko: calculateGlicko(673, 0.0175, 94.3, 12.6605, 25), demand: calculateDemand(673)},
    { name: 'Haunted Cookie', copies: 665, value: calculateNewValue(300, 665, 25, 94.3, 12.6605), pack: 'Spooky Pack', sellprice: 300, rarity: "Chroma", droprate: '0.0175%', glicko: calculateGlicko(665, 0.0175, 94.3, 12.6605, 25), demand: calculateDemand(665)},
    { name: 'Blue Gummy Bear', copies: 263, value: calculateNewValue(300, 263, 25, 94.3, 12.6605), pack: 'Spooky Pack', sellprice: 300, rarity: "Chroma" , droprate: '0.02%', glicko: calculateGlicko(263, 0.02, 94.3, 12.6605, 25), demand: calculateDemand(263)},
    { name: 'Green Gummy Bear', copies: 282, value: calculateNewValue(300, 282, 25, 94.3, 12.6605), pack: 'Spooky Pack', sellprice: 300, rarity: "Chroma" , droprate: '0.02%', glicko: calculateGlicko(282, 0.02, 94.3, 12.6605, 25), demand: calculateDemand(282)},
    { name: 'Red Gummy Bear', copies: 266, value: calculateNewValue(300, 266, 25, 94.3, 12.6605), pack: 'Spooky Pack', sellprice: 300, rarity: "Chroma" , droprate: '0.02%', glicko: calculateGlicko(266, 0.02, 94.3, 12.6605, 25), demand: calculateDemand(266)},
    { name: 'Ghost Cookie', copies: 726, value: calculateNewValue(300, 726, 25, 94.3, 12.6605), pack: 'Spooky Pack', sellprice: 300, rarity: "Chroma" , droprate: '0.02%', glicko: calculateGlicko(726, 0.02, 94.3, 12.6605, 25), demand: calculateDemand(726)},
    { name: 'Mummy Cookie', copies: 968, value: calculateNewValue(300, 968, 25, 94.3, 12.6605), pack: 'Spooky Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.025%', glicko: calculateGlicko(968, 0.025, 94.3, 12.6605, 25), demand: calculateDemand(968)},
    { name: 'Pumpkin Cookie', copies: 1069, value: calculateNewValue(300, 1069, 25, 94.3, 12.6605), pack: 'Spooky Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.03%', glicko: calculateGlicko(1069, 0.03, 94.3, 12.6605, 25), demand: calculateDemand(1069)},
    { name: 'Haunted Pumpkin', copies: 1560, value: calculateNewValue(300, 1560, 25, 94.3, 12.6605), pack: 'Spooky Pack', sellprice: 300, rarity: "Chroma" , droprate: '0.05%', glicko: calculateGlicko(1560, 0.05, 94.3, 12.6605, 25), demand: calculateDemand(1560)},
    { name: 'Coconut Cocktail', copies: 362, value: calculateNewValue(300, 362, 25, 58, 19.5337), pack: 'Summer Pack', sellprice: 300, rarity: "Chroma" , droprate: '0.03%', glicko: calculateGlicko(362, 0.03, 58, 19.5337, 25), demand: calculateDemand(362)},
    { name: 'Golden Amber', copies: 169, value: calculateNewValue(300, 169, 25, 78, 22.05), pack: 'Dino Pack', sellprice: 300, rarity: "Chroma" , droprate: '0.05%', glicko: calculateGlicko(169, 0.05, 78, 22.05, 25), demand: calculateDemand(169)},
    { name: 'M67 Grenade', copies: 562, value: calculateNewValue(300, 562, 25, 75, 25.0035), pack: 'Combat Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(562, 0.05, 75, 25.0035, 25), demand: calculateDemand(562)},
    { name: 'Golden Among Us', copies: 550, value: calculateNewValue(300, 550, 25, 70, 30.003), pack: 'Gaming Pack', sellprice: 300 , rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(550, 0.05, 70, 30.003, 25), demand: calculateDemand(550)},
    { name: 'Time Stone', copies: 126, value: calculateNewValue(300, 126, 25, 70, 26.934), pack: 'Time Pack', sellprice: 300 , rarity: "Chroma", droprate: '0.03%', glicko: calculateGlicko(126, 0.03, 70, 26.934, 25), demand: calculateDemand(126)},
    { name: 'Pirate Pufferfish', copies: 1402, value: calculateNewValue(300, 1402, 25, 80, 20), pack: 'Pirate Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.03%', glicko: calculateGlicko(1402, 0.03, 80, 20, 25),demand: calculateDemand(1402)},
    { name: 'Golden Gift', copies: 219, value: calculateNewValue(350, 219, 25, 72.5, 27.9675), pack: 'Blizzard Pack' , sellprice: 350, rarity: "Chroma", droprate: '0.01%', glicko: calculateGlicko(219, 0.01, 72.5, 27.9675, 25), demand: calculateDemand(219)},
    { name: 'Nutcracker Koala', copies: 51, value: calculateNewValue(350, 51, 25, 72.5, 27.9675), pack: 'Blizzard Pack', sellprice: 350 , rarity: "Chroma", droprate: '0.01%', glicko: calculateGlicko(51, 0.01, 72.5, 27.9675, 25), demand: calculateDemand(51)},
    { name: 'Elf Sweater Snowman', copies: 71, value: calculateNewValue(350, 71, 25, 72.5, 27.9675), pack: 'Blizzard Pack' , sellprice: 350, rarity: "Chroma", droprate: '0.01%', glicko: calculateGlicko(71, 0.01, 72.5, 27.9675, 25), demand: calculateDemand(71)},
    { name: 'Blue Sweater Snowman', copies: 116, value: calculateNewValue(300, 116, 25, 72.5, 27.9675), pack: 'Blizzard Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.02%', glicko: calculateGlicko(116, 0.02, 72.5, 27.9675, 25), demand: calculateDemand(116)},
    { name: 'Red Sweater Snowman', copies: 138, value: calculateNewValue(300, 138, 25, 72.5, 27.9675), pack: 'Blizzard Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.02%', glicko: calculateGlicko(138, 0.02, 72.5, 27.9675, 25), demand: calculateDemand(138)},
    { name: 'Snowy Bush Monster', copies: 89, value: calculateNewValue(300, 89, 25, 72.5, 27.9675), pack: 'Blizzard Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.02%', glicko: calculateGlicko(89, 0.02, 72.5, 27.9675, 25), demand: calculateDemand(89)},
    { name: 'Chilly Flamingo', copies: 134, value: calculateNewValue(300, 134, 25, 72.5, 27.9675), pack: 'Blizzard Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.03%', glicko: calculateGlicko(134, 0.03, 72.5, 27.9675, 25), demand: calculateDemand(134)},
    { name: 'Tropical Globe', copies: 413, value: calculateNewValue(300, 413, 25, 72.5, 27.9675), pack: 'Blizzard Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.02%', glicko: calculateGlicko(413, 0.02, 72.5, 27.9675, 25), demand: calculateDemand(413)},
    { name: 'Frost Wreath', copies: 557, value: calculateNewValue(300, 557, 25, 72.5, 27.9675), pack: 'Blizzard Pack', sellprice: 300 , rarity: "Chroma", droprate: '0.03%', glicko: calculateGlicko(557, 0.03, 72.5, 27.9675, 25), demand: calculateDemand(557)},
    { name: 'Cookies Combo', copies: 199, value: calculateNewValue(300, 199, 25, 72.5, 27.9675), pack: 'Blizzard Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.03%', glicko: calculateGlicko(199, 0.03, 72.5, 27.9675, 25), demand: calculateDemand(199)},
    { name: 'Paris Snow Globe', copies: 915, value: calculateNewValue(300, 915, 25, 72.5, 27.9675), pack: 'Blizzard Pack', sellprice: 300 , rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(915, 0.05, 72.5, 27.9675, 25), demand: calculateDemand(915)},
    { name: 'Egypt Snow Globe', copies: 841, value: calculateNewValue(300, 841, 25, 72.5, 27.9675), pack: 'Blizzard Pack', sellprice: 300 , rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(841, 0.05, 72.5, 27.9675, 25), demand: calculateDemand(841)},
    { name: 'Japan Snow Globe', copies: 878, value: calculateNewValue(300, 878, 25, 72.5, 27.9675), pack: 'Blizzard Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(878, 0.05, 72.5, 27.9675, 25), demand: calculateDemand(878)},
    { name: 'London Snow Globe', copies: 921, value: calculateNewValue(300, 921, 25, 72.5, 27.9675), pack: 'Blizzard Pack', sellprice: 300 , rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(921, 0.05, 72.5, 27.9675, 25), demand: calculateDemand(921)},
    { name: 'New York Snow Globe', copies: 938, value: calculateNewValue(300, 938, 25, 72.5, 27.9675), pack: 'Blizzard Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(938, 0.05, 72.5, 27.9675, 25), demand: calculateDemand(938)},
    { name: 'Santa Claws', copies: 261, value: calculateNewValue(300, 261, 25, 72.5, 27.9675), pack: 'Blizzard Pack', sellprice: 300 , rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(261, 0.05, 72.5, 27.9675, 25), demand: calculateDemand(261)},
    { name: 'Red Bowling Ball', copies: 116, value: calculateNewValue(300, 116, 20, 75, 25), pack: 'Sports Pack', sellprice: 300, rarity: "Chroma", droprate: '0.02%', glicko: calculateGlicko(116, 0.02, 75, 25, 20), demand: calculateDemand(116)},
    { name: 'March Hare', copies: 102, value: calculateNewValue(300, 102, 20, 75.2, 24.85), pack: 'Wonderland Pack', sellprice: 300 , rarity: "Chroma", droprate: '0.02%', glicko: calculateGlicko(102, 0.02, 75.2, 24.85, 20), demand: calculateDemand(102)},
    { name: 'Dinah', copies: 172, value: calculateNewValue(300, 172, 20, 75.2, 24.85), pack: 'Wonderland Pack', sellprice: 300 , rarity: "Chroma", droprate: '0.03%', glicko: calculateGlicko(172, 0.03, 75.2, 24.85, 20), demand: calculateDemand(172)},
    { name: 'Master Elf', copies: 1993, value: calculateNewValue(300, 1993, 20, 67.5, 33.158), pack: 'Medieval Pack', sellprice: 300 , rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(1993, 0.05, 67.5, 33.158, 20), demand: calculateDemand(1993)},
    { name: 'Wise Owl', copies: 659, value: calculateNewValue(300, 659, 20, 67.5, 33.158), pack: 'Medieval Pack', sellprice: 300 , rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(659, 0.05, 67.5, 33.158, 20), demand: calculateDemand(659)},
    { name: 'Agent Owl', copies: 1896, value: calculateNewValue(300, 1896, 20, 67.5, 33.158), pack: 'Medieval Pack', sellprice: 300 , rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(1896, 0.05, 67.5, 33.158, 20), demand: calculateDemand(1896)},
    { name: 'Space Terminal', copies: 605, value: calculateNewValue(350, 605, 20, 75, 25.525), pack: 'Space Pack', sellprice: 350 , rarity: "Chroma", droprate: '0.01%', glicko: calculateGlicko(605, 0.01, 75, 25.525, 20), demand: calculateDemand(605)},
    { name: 'Black Astronaut', copies: 1841, value: calculateNewValue(300, 1841, 20, 75, 25.525), pack: 'Space Pack' , sellprice: 300 , rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(1841, 0.05, 75, 25.525, 20), demand: calculateDemand(1841)},
    { name: 'Brown Astronaut', copies: 1744, value: calculateNewValue(300, 1744, 20, 75, 25.525), pack: 'Space Pack'  , sellprice: 300, rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(1744, 0.05, 75, 25.525, 20), demand: calculateDemand(1744)},
    { name: 'Purple Astronaut', copies: 1887, value: calculateNewValue(300, 1887, 20, 75, 25.525), pack: 'Space Pack', sellprice: 300  , rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(1887, 0.05, 75, 25.525, 20), demand: calculateDemand(1887)},
    { name: 'Blue Astronaut', copies: 1812, value: calculateNewValue(300, 1812, 20, 75, 25.525), pack: 'Space Pack', sellprice: 300  , rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(1812, 0.05, 75, 25.525, 20), demand: calculateDemand(1812)},
    { name: 'Cyan Astronaut', copies: 1755, value: calculateNewValue(300, 1755, 20, 75, 25.525), pack: 'Space Pack'  , sellprice: 300, rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(1755, 0.05, 75, 25.525, 20), demand: calculateDemand(1755)},
    { name: 'Green Astronaut', copies: 1751, value: calculateNewValue(300, 1751, 20, 75, 25.525), pack: 'Space Pack' , sellprice: 300 , rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(1751, 0.05, 75, 25.525, 20), demand: calculateDemand(1751)},
    { name: 'Lime Astronaut', copies: 1755, value: calculateNewValue(300, 1755, 20, 75, 25.525), pack: 'Space Pack' , sellprice: 300 , rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(1755, 0.05, 75, 25.525, 20), demand: calculateDemand(1755)},
    { name: 'Yellow Astronaut', copies: 1780, value: calculateNewValue(300, 1780, 20, 75, 25.525), pack: 'Space Pack', sellprice: 300  , rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(1780, 0.05, 75, 25.525, 20), demand: calculateDemand(1780)},
    { name: 'Orange Astronaut', copies: 1771, value: calculateNewValue(300, 1771, 20, 75, 25.525), pack: 'Space Pack' , sellprice: 300 , rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(1771, 0.05, 75, 25.525, 20), demand: calculateDemand(1771)},
    { name: 'Red Astronaut', copies: 1795, value: calculateNewValue(300, 1795, 20, 75, 25.525), pack: 'Space Pack'  , sellprice: 300, rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(1795, 0.05, 75, 25.525, 20), demand: calculateDemand(1795)},
    { name: 'Pink Astronaut', copies: 1827, value: calculateNewValue(300, 1827, 20, 75, 25.525), pack: 'Space Pack', sellprice: 300 , rarity: "Chroma" , droprate: '0.05%', glicko: calculateGlicko(1827, 0.05, 75, 25.525, 20), demand: calculateDemand(1827)},
    { name: 'Tiger Zebra', copies: 151, value: calculateNewValue(300, 151, 20, 75, 25.04), pack: 'Safari Pack' , sellprice: 300 , rarity: "Chroma", droprate: '0.02%', glicko: calculateGlicko(151, 0.02, 75, 25.04, 20), demand: calculateDemand(151)},
    { name: 'White Peacock', copies: 190, value: calculateNewValue(300, 190, 20, 75, 25.04), pack: 'Safari Pack' , sellprice: 300 , rarity: "Chroma", droprate: '0.02%', glicko: calculateGlicko(190, 0.02, 75, 25.04, 20), demand: calculateDemand(190)},
    { name: 'Rainbow Panda', copies: 172, value: calculateNewValue(300, 172, 20, 75, 25.04), pack: 'Safari Pack', sellprice: 300  , rarity: "Chroma", droprate: '0.02%', glicko: calculateGlicko(172, 0.02, 75, 25.04, 20), demand: calculateDemand(172)},
    { name: 'Rose Quartz', copies: 409, value: calculateNewValue(300, 409, 20, 75, 25.0537), pack: 'Gemstone Pack', sellprice: 300 , rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(409, 0.05, 75, 25.0537, 20), demand: calculateDemand(409)},
    { name: 'Blue Raspberry', copies: 105, value: calculateNewValue(350, 105, 20, 75.2, 24.8625), pack: 'Fruit Pack', sellprice: 350 , rarity: "Chroma", droprate: '0.01%', glicko: calculateGlicko(105, 0.01, 75.2, 24.8625, 20), demand: calculateDemand(105)},
    { name: 'Green Apple', copies: 578, value: calculateNewValue(300, 578, 20, 75.2, 24.8625), pack: 'Fruit Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(578, 0.05, 75.2, 24.8625, 20), demand: calculateDemand(578)},
    { name: 'Plasma Elemental', copies: 272, value: calculateNewValue(300, 272, 20, 75, 25), pack: 'Elemental Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(272, 0.05, 75, 25, 20), demand: calculateDemand(272)},
    { name: 'Pink Blook', copies: 229, value: calculateNewValue(300, 229, 20, 0, 138.255), pack: 'Color Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(229, 0.05, 0, 138.255, 20), demand: calculateDemand(229)},
    { name: 'Blue Gummy Worm', copies: 149, value: calculateNewValue(300, 149, 20, 78, 22), pack: 'Candy Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.02%', glicko: calculateGlicko(149, 0.02, 78, 22, 20), demand: calculateDemand(149)},
    { name: 'Red Licorice', copies: 319, value: calculateNewValue(300, 319, 20, 78, 22), pack: 'Candy Pack', sellprice: 300, rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(319, 0.05, 78, 22, 20), demand: calculateDemand(319)},
    { name: 'White Chocolate', copies: 504, value: calculateNewValue(300, 504, 20, 78, 22), pack: 'Candy Pack', sellprice: 300, rarity: "Chroma", droprate: '0.08%', glicko: calculateGlicko(504, 0.08, 78, 22, 20), demand: calculateDemand(504)},
    { name: 'Chocolate Milk', copies: 1702, value: calculateNewValue(300, 1702, 20, 75, 26.05), pack: 'Breakfast Pack', sellprice: 300, rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(1702, 0.05, 75, 26.05, 20), demand: calculateDemand(1702)},
    { name: 'Catson', copies: 358, value: calculateNewValue(300, 358, 20, 78, 22.034), pack: 'Bot Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.03%', glicko: calculateGlicko(358, 0.03, 78, 22.034, 20), demand: calculateDemand(358)},
    { name: 'Rainbow Narwhal', copies: 1517, value: calculateNewValue(300, 1517, 20, 75, 25.563), pack: 'Aquatic Pack', sellprice: 300 , rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(1517, 0.05, 75, 25.563, 20), demand: calculateDemand(1517)},
    { name: 'Donut Blobfish', copies: 1388, value: calculateNewValue(300, 1388, 20, 75, 25.563), pack: 'Aquatic Pack', sellprice: 300 , rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(1388, 0.05, 75, 25.563, 20), demand: calculateDemand(1388)},
    { name: 'Crimson Octopus', copies: 1353, value: calculateNewValue(300, 1353, 20, 75, 25.563), pack: 'Aquatic Pack', sellprice: 300 , rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(1353, 0.05, 75, 25.563, 20), demand: calculateDemand(1353)},
    { name: 'Lemon Crab', copies: 1357, value: calculateNewValue(300, 1357, 20, 75, 25.563), pack: 'Aquatic Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(1357, 0.05, 75, 25.563, 20), demand: calculateDemand(1357)},
    { name: 'Poison Dart Frog', copies: 1301, value: calculateNewValue(300, 1301, 20, 75, 25.563), pack: 'Aquatic Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(1301, 0.05, 75, 25.563, 20), demand: calculateDemand(1301)},
    { name: 'Blizzard Clownfish', copies: 1255, value: calculateNewValue(300, 1255, 20, 75, 25.563), pack: 'Aquatic Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(1255, 0.05, 75, 25.563, 20), demand: calculateDemand(1255)},
    { name: 'Rainbow Jellyfish', copies: 1387, value: calculateNewValue(300, 1387, 20, 75, 25.563), pack: 'Aquatic Pack', sellprice: 300 , rarity: "Chroma", droprate: '0.05%', glicko: calculateGlicko(1387, 0.05, 75, 25.563, 20), demand: calculateDemand(1387)},
    { name: 'Spring Frog', copies: 1561, value: calculateNewValue(300, 1561, 20, 75, 25.563), pack: 'Aquatic Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.06%', glicko: calculateGlicko(1561, 0.05, 75, 25.563, 20), demand: calculateDemand(1561)},
    { name: 'Lucky Frog', copies: 1625, value: calculateNewValue(300, 1625, 20, 75, 25.563), pack: 'Aquatic Pack', sellprice: 300 , rarity: "Chroma", droprate: '0.07%', glicko: calculateGlicko(1625, 0.05, 75, 25.563, 20), demand: calculateDemand(1625)},
    { name: 'Lovely Frog', copies: 1782, value: calculateNewValue(300, 1782, 20, 75, 25.563), pack: 'Aquatic Pack' , sellprice: 300, rarity: "Chroma", droprate: '0.08%', glicko: calculateGlicko(1782, 0.05, 75, 25.563, 20), demand: calculateDemand(1782)},

    // Legendaries
    { name: 'Monkxy', copies: 1616, value: calculateNewValue(250, 1616, 30, 75, 25.563), pack: 'OG Pack' , sellprice: 250, rarity: "Legendary", droprate: '0.25%', glicko: calculateGlicko(1616, 0.25, 75, 25.563, 30), demand: calculateDemand(1616)},
    { name: 'Root', copies: 2118, value: calculateNewValue(200, 2118, 30, 0, 75, 25.563), pack: 'OG Pack' , sellprice: 200, rarity: "Legendary", droprate: '0.5%', glicko: calculateGlicko(2118, 0.5, 75, 25.563, 30), demand: calculateDemand(2118)},
    { name: 'Eternal Prism Blade', copies: 470, value: calculateNewValue(200, 470, 25, 75.2, 24.85333), pack: 'Sci-Fi Pack' , sellprice: 200, rarity: "Legendary", droprate: '0.3%', glicko: calculateGlicko(470, 0.3, 75.2, 24.8533, 25), demand: calculateDemand(470)},
    { name: 'Sugar Glider', copies: 686, value: calculateNewValue(200, 686, 25, 75, 25), pack: 'Outback Pack' , sellprice: 200, rarity: "Legendary", droprate: '0.37%', glicko: calculateGlicko(686, 0.37, 75, 25, 25), demand: calculateDemand(686)},
    { name: 'Piano', copies: 746, value: calculateNewValue(200, 746, 25, 58, 19.5337), pack: 'Music Pack' , sellprice: 200, rarity: "Legendary", droprate: '0.4%', glicko: calculateGlicko(746, 0.4, 58, 19.5337, 25), demand: calculateDemand(746)},
    { name: 'Golden Ankha', copies: 2700, value: calculateNewValue(200, 2700, 25, 67.5, 27.023), pack: 'Ankha Pack' , sellprice: 200, rarity: "Legendary", droprate: '0.5%', glicko: calculateGlicko(2700, 0.5, 67.5, 27.023, 20), demand: calculateDemand(2700)},
    { name: 'Yeti', copies: 639, value: calculateNewValue(200, 639, 25, 78, 22), pack: 'Ice Monster Pack' , sellprice: 200, rarity: "Legendary", droprate: '0.35%', glicko: calculateGlicko(639, 0.35, 78, 22, 25), demand: calculateDemand(639)},
    { name: 'Ghost', copies: 2950, value: calculateNewValue(200, 2950, 25, 94.3, 12.6605), pack: 'Spooky Pack' , sellprice: 200, rarity: "Legendary", droprate: '0.65%', glicko: calculateGlicko(2950, 0.65, 94.3, 12.6605, 25), demand: calculateDemand(2950)},
    { name: 'Sand Castle', copies: 1207, value: calculateNewValue(200, 1207, 25, 58, 19.5337), pack: 'Summer Pack' , sellprice: 200, rarity: "Legendary", droprate: '0.4%', glicko: calculateGlicko(1207, 0.4, 58, 19.5337, 25), demand: calculateDemand(1207)},
    { name: 'Tyrannosaurus Rex', copies: 521, value: calculateNewValue(200, 521, 25, 78, 22.05), pack: 'Dino Pack' , sellprice: 200, rarity: "Legendary", droprate: '0.3%', glicko: calculateGlicko(521, 0.3, 78, 22.05, 25), demand: calculateDemand(521)},
    { name: 'M12 Shotgun', copies: 1337, value: calculateNewValue(200, 1337, 25, 75, 25.0035), pack: 'Combat Pack' , sellprice: 200, rarity: "Legendary", droprate: '0.45%', glicko: calculateGlicko(1337, 0.45, 75, 25.0035, 25), demand: calculateDemand(1337)},
    { name: 'Master Chief', copies: 1397, value: calculateNewValue(200, 1397, 25, 70, 30.003), pack: 'Gaming Pack' , sellprice: 200, rarity: "Legendary", droprate: '0.3%', glicko: calculateGlicko(1397, 0.3, 70, 30.003, 25), demand: calculateDemand(1397)},
    { name: 'Clock Tower', copies: 593, value: calculateNewValue(200, 593, 25, 70, 26.934), pack: 'Time Pack' , sellprice: 200, rarity: "Legendary", droprate: '0.4%', glicko: calculateGlicko(593, 0.4, 70, 26.934, 25), demand: calculateDemand(593)},
    { name: 'Captain Blackbeard', copies: 241, value: calculateNewValue(200, 241, 25, 80, 20), pack: 'Pirate Pack' , sellprice: 200, rarity: "Legendary", droprate: '0.3%', glicko: calculateGlicko(241, 0.3, 80, 20, 25), demand: calculateDemand(241)},
    { name: 'Santa Claus', copies: 3241, value: calculateNewValue(200, 3241, 25, 72.5, 27.9675), pack: 'Blizzard Pack' , sellprice: 200, rarity: "Legendary", droprate: '1%', glicko: calculateGlicko(3241, 1, 72.5, 27.9675, 25), demand: calculateDemand(3241)},
    { name: 'Football Helmet', copies: 937, value: calculateNewValue(200, 937, 20, 75, 25), pack: 'Sports Pack' , sellprice: 200, rarity: "Legendary", droprate: '0.5%', glicko: calculateGlicko(937, 0.5, 75, 25, 29), demand: calculateDemand(937)},
    { name: 'King of Hearts', copies: 886, value: calculateNewValue(200, 886, 20, 75.2, 24.85), pack: 'Wonderland Pack' , sellprice: 200, rarity: "Legendary", droprate: '0.3%', glicko: calculateGlicko(886, 0.3, 75.2, 24.85, 20), demand: calculateDemand(886)},
    { name: 'King', copies: 2510, value: calculateNewValue(200, 2510, 20, 67.5, 33.158), pack: 'Medieval Pack' , sellprice: 200, rarity: "Legendary", droprate: '1%', glicko: calculateGlicko(2510, 1, 67.5, 33.158, 20), demand: calculateDemand(2510)},
    { name: 'Astronaut', copies: 2868, value: calculateNewValue(200, 2868, 20, 75, 25.525), pack: 'Space Pack' , sellprice: 200, rarity: "Legendary", droprate: '0.45%', glicko: calculateGlicko(2868, 0.45, 75, 25.525, 20), demand: calculateDemand(2868)},
    { name: 'Lion', copies: 924, value: calculateNewValue(200, 924, 20, 75, 25.04), pack: 'Safari Pack' , sellprice: 200, rarity: "Legendary", droprate: '0.5%', glicko: calculateGlicko(924, 0.5, 75, 25.04, 20), demand: calculateDemand(924)},
    { name: 'Moonstone', copies: 618, value: calculateNewValue(250, 618, 20, 75, 25.0537), pack: 'Gemstone Pack' , sellprice: 250, rarity: "Legendary", droprate: '0.2%', glicko: calculateGlicko(618, 0.2, 75, 25.0537, 20), demand: calculateDemand(618)},
    { name: 'Opal', copies: 1158, value: calculateNewValue(200, 1158, 20, 75, 25.0537), pack: 'Gemstone Pack' , sellprice: 200, rarity: "Legendary", droprate: '0.5%', glicko: calculateGlicko(1158, 0.5, 75, 25.0537, 20), demand: calculateDemand(1158)},
    { name: 'Starfruit', copies: 964, value: calculateNewValue(200, 964, 20, 75, 24.8625), pack: 'Fruit Pack' , sellprice: 200, rarity: "Legendary", droprate: '0.3%', glicko: calculateGlicko(964, 0.3, 75, 24.8625, 20), demand: calculateDemand(964)},
    { name: 'Electric Elemental', copies: 1099, value: calculateNewValue(200, 1099, 20, 75, 25), pack: 'Elemental Pack' , sellprice: 200, rarity: "Legendary", droprate: '0.45%', glicko: calculateGlicko(1099, 0.45, 75, 25, 20), demand: calculateDemand(1099)},
    { name: 'Black Blook', copies: 569, value: calculateNewValue(250, 569, 20, 0, 138.255), pack: 'Color Pack' , sellprice: 250, rarity: "Legendary", droprate: '0.2%', glicko: calculateGlicko(569, 0.2, 0, 138.255, 20), demand: calculateDemand(569)},
    { name: 'White Blook', copies: 882, value: calculateNewValue(200, 882, 20, 0, 138.255), pack: 'Color Pack' , sellprice: 200, rarity: "Legendary", droprate: '0.5%', glicko: calculateGlicko(882, 0.5, 0, 138.255, 20), demand: calculateDemand(882)},
    { name: 'Rock Candy', copies: 794, value: calculateNewValue(200, 794, 20, 78, 22), pack: 'Candy Pack' , sellprice: 200, rarity: "Legendary", droprate: '0.35%', glicko: calculateGlicko(794, 0.35, 78, 22, 20), demand: calculateDemand(794)},
    { name: 'Sandwich', copies: 2220, value: calculateNewValue(200, 2220, 20, 75, 26.05), pack: 'Breakfast Pack' , sellprice: 200, rarity: "Legendary", droprate: '1%', glicko: calculateGlicko(2220, 1, 75, 26.05, 20), demand: calculateDemand(2220)},
    { name: 'Mega Bot', copies: 1002, value: calculateNewValue(200, 1002, 20, 78, 22.034), pack: 'Bot Pack' , sellprice: 200, rarity: "Legendary", droprate: '0.3%', glicko: calculateGlicko(1002, 0.3, 78, 22.034, 20), demand: calculateDemand(1002)},
    { name: 'Megalodon', copies: 1559, value: calculateNewValue(250, 1559, 20, 75, 25.563), pack: 'Aquatic Pack' , sellprice: 250, rarity: "Legendary", droprate: '0.2%', glicko: calculateGlicko(1559, 0.2, 75, 25.563, 20), demand: calculateDemand(1559)},
    { name: 'Baby Shark', copies: 2086, value: calculateNewValue(200, 2086, 20, 75, 25.563), pack: 'Aquatic Pack' , sellprice: 200, rarity: "Legendary", droprate: '0.5%', glicko: calculateGlicko(2086, 0.5, 75, 25.563, 20), demand: calculateDemand(2086)},

    // const boxPercentages = {
        // 'OG': { lowerRate: 75, higherRate: 25.3075 },
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

            // Convert droprate to a numeric value
            const droprateValue = parseFloat(blook.droprate);

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
            blookItem.style.marginBottom = '24px';
            blookItem.style.lineHeight = '24px';
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
        'Legendary': 3
        // Add more rarities if needed
    };

    return rarityOrder[rarity] || 999; // Default to a high value if rarity is not recognized
}

// Function to calculate the new value based on the formula and box percentages
function calculateNewValue(sellprice, copies, packPrice, lowerRate, higherRate) {
    const roundedValue = Math.round(
      sellprice * (12532 / copies) / (30 / packPrice) / ((100 / ((lowerRate + higherRate * 2)) * 2))
    );
  
    return roundedValue;
  }

function calculateGlicko(copies, droprate, lowerRate, higherRate, packprice) {
    const Glicko = ((12532 / copies) * ((droprate * (100 / ((lowerRate + higherRate * 2)) * 2)) / 0.013) * (30 / packprice)).toFixed(2);
    
    return Glicko;
}

function calculateDemand(copies) {
    const Demand = (12532 / copies).toFixed(2);

    return Demand;
}
