const blookValues = [
    // Common Blooks
    { name: 'Bia', copies: 1, value: 'O/C', pack: 'N/A', sellprice: 25000, rarity: "Iridescent", glicko: calculateGlicko(1, 25000)} ,
    { name: 'Tropical Island', copies: 2, value: 'O/C', pack: 'N/A', sellprice: 25000, rarity: "Iridescent", glicko: calculateGlicko(2, 25000)},
    { name: 'Gold Doubloon', copies: 3, value: 'O/C', pack: 'N/A', sellprice: 1000, rarity: "Mystical", glicko: calculateGlicko(3, 1000) },
    { name: 'Golden Seashell', copies: 9, value: 'O/C', pack: 'N/A', sellprice: 1000, rarity: "Mystical", glicko: calculateGlicko(9, 1000) },
    { name: 'Naughty Ankha', copies: 21, value: 'O/C', pack: 'Ankha Pack', sellprice: 350, rarity: "Chroma", glicko: calculateGlicko(21, 350) },
    { name: 'Festive Ankha', copies: 20, value: 'O/C', pack: 'Blizzard Pack', sellprice: 350, rarity: "Chroma", glicko: calculateGlicko(20, 350) },
    { name: 'Golden Crab', copies: 24, value: 'O/C', pack: 'N/A', sellprice: 350, rarity: "Chroma", glicko: calculateGlicko(24, 350) },
    { name: 'Party Pig', copies: 27, value: 'O/C', pack: 'N/A', sellprice: 350, rarity: "Chroma", glicko: calculateGlicko(27, 350) },
    { name: 'Lovely Ankha', copies: 38, value: 'O/C', pack: 'Ankha Pack', sellprice: 350, rarity: "Chroma", glicko: calculateGlicko(38, 350) },
    { name: 'Treasure Chest', copies: 78, value: 'O/C', pack: 'N/A', sellprice: 1000, rarity: "Mystical", glicko: calculateGlicko(78, 1000) },
    { name: 'Golden Shovel', copies: 72, value: 'O/C', pack: 'N/A', sellprice: 350, rarity: "Chroma", glicko: calculateGlicko(72, 350) },
    { name: 'Ukraine Ankha', copies: 89, value: 'O/C', pack: 'Ankha Pack', sellprice: 350, rarity: "Chroma", glicko: calculateGlicko(89, 350) },
    { name: 'Spring Ankha', copies: 135, value: 'O/C', pack: 'Ankha Pack', sellprice: 350, rarity: "Chroma", glicko: calculateGlicko(135, 350) },
    { name: 'Lucky Ankha', copies: 130, value: 'O/C', pack: 'Ankha Pack', sellprice: 350, rarity: "Chroma", glicko: calculateGlicko(130, 350) },
    { name: 'American Ankha', copies: 92, value: 'O/C', pack: 'Ankha Pack', sellprice: 350, rarity: "Chroma", glicko: calculateGlicko(92, 350) },
    { name: 'Lunar Frog', copies: 860, value: 'O/C', pack: 'Lunar Pack', sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(860, 300) },
    { name: '10k', copies: 3678, value: 'O/C', pack: '10k Pack', sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(3678, 300) },
    { name: 'Chocolate Rabbit', copies: 3011, value: 'O/C', pack: 'Easter Pack', sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(3011, 300) },
    { name: 'Lucky Hamster', copies: 2227, value: 'O/C', pack: 'Lucky Pack', sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(2227, 300) },
    { name: 'Vampire Ankha', copies: 76, value: 'O/C', pack: 'Spooky Pack', sellprice: 400, rarity: "Chroma", glicko: calculateGlicko(76, 400) },
    { name: 'Turkey Ankha', copies: 37, value: 'O/C', pack: 'Ankha Pack', sellprice: 350, rarity: "Chroma", glicko: calculateGlicko(37, 350) },
  
    // Mysticals
    { name: 'Xotic', copies: 179, value: calculateNewValue(1000, 179, 30, 75, 25.3075), pack: 'OG Pack', sellprice: 1000, rarity: "Mystical" , glicko: calculateGlicko(179, 1000)},
    { name: 'Envi', copies: 160, value: calculateNewValue(1000, 160, 30, 75, 25.3075), pack: 'OG Pack', sellprice: 1000, rarity: "Mystical", glicko: calculateGlicko(160, 1000)},
    { name: 'Celestial Oracle Staff', copies: 12, value: calculateNewValue(1000, 12, 25, 75.2, 24.8533), pack: 'Sci-Fi Pack', sellprice: 1000, rarity: "Mystical", glicko: calculateGlicko(12, 1000) },
    { name: 'Golden Harp', copies: 28, value: calculateNewValue(1000, 28, 25, 58, 19.5337), pack: 'Music Pack', sellprice: 1000, rarity: "Mystical", glicko: calculateGlicko(28, 1000) },
    { name: 'Rainbow Ankha', copies: 175, value: calculateNewValue(1000, 175, 25, 67.5, 27.023), pack: 'Ankha Pack', sellprice: 1000, rarity: "Mystical", glicko: calculateGlicko(175, 1000) },
    { name: 'Spooky Ghost', copies: 260, value: calculateNewValue(1000, 260, 25, 94.3, 12.6605), pack: 'Spooky Pack', sellprice: 1000, rarity: "Mystical", glicko: calculateGlicko(260, 1000) },
    { name: 'Tropical Pig', copies: 57, value: calculateNewValue(1000, 57, 25, 58, 19.5337), pack: 'Summer Pack', sellprice: 1000, rarity: "Mystical", glicko: calculateGlicko(57, 1000) },
    { name: 'Golden Shuriken', copies: 71, value: calculateNewValue(1000, 71, 25, 75, 25.0035), pack: 'Combat Pack', sellprice: 1000, rarity: "Mystical", glicko: calculateGlicko(71, 1000) },
    { name: 'Diamond Sword', copies: 59, value: calculateNewValue(1000, 59, 25, 75, 25.0035), pack: 'Combat Pack', sellprice: 1000, rarity: "Mystical", glicko: calculateGlicko(59, 1000) },
    { name: 'Gaming Mouse', copies: 64, value: calculateNewValue(1000, 64, 25, 70, 30.003), pack: 'Gaming Pack', sellprice: 1000, rarity: "Mystical", glicko: calculateGlicko(64, 1000) },
    { name: 'Time Machine', copies: 17, value: calculateNewValue(1000, 17, 25, 70, 26.934), pack: 'Time Pack', sellprice: 1000, rarity: "Mystical", glicko: calculateGlicko(17, 1000) },
    { name: 'Hamsta Claus', copies: 6, value: calculateNewValue(1000, 6, 25, 72.5, 27.9675), pack: 'Blizzard Pack' , sellprice: 1000, rarity: "Mystical", glicko: calculateGlicko(6, 1000)},
    { name: 'Diamond Gift', copies: 163, value: calculateNewValue(1000, 163, 25, 72.5, 27.9675), pack: 'Blizzard Pack', sellprice: 1000, rarity: "Mystical", glicko: calculateGlicko(163, 1000) },
    { name: 'Dark Dragon', copies: 311, value: calculateNewValue(1000, 311, 20, 67, 33.158), pack: 'Medieval Pack' , sellprice: 1000, rarity: "Mystical", glicko: calculateGlicko(311, 1000)},
    { name: 'Phantom King', copies: 543, value: calculateNewValue(1000, 543, 20, 67, 33.158), pack: 'Medieval Pack', sellprice: 1000, rarity: "Mystical", glicko: calculateGlicko(543, 1000)},
    { name: 'Rainbow Astronaut', copies: 201, value: calculateNewValue(1000, 201, 20, 75, 25.525), pack: 'Space Pack', sellprice: 1000, rarity: "Mystical", glicko: calculateGlicko(201, 1000) },
    { name: 'Tim the Alien', copies: 341, value: calculateNewValue(1000, 341, 20, 75, 25.525), pack: 'Space Pack' , sellprice: 1000, rarity: "Mystical", glicko: calculateGlicko(341, 1000)},
    { name: 'Space Debugger', copies: 537, value: calculateNewValue(1000, 537, 20, 75, 25.525), pack: 'Space Pack', sellprice: 1000, rarity: "Mystical", glicko: calculateGlicko(537, 1000) },
    { name: 'Black Opal', copies: 77, value: calculateNewValue(1000, 77, 20, 75, 25.0537), pack: 'Gemstone Pack', sellprice: 1000, rarity: "Mystical", glicko: calculateGlicko(77, 1000) },
    { name: 'Golden Apple', copies: 71, value: calculateNewValue(1000, 71, 20, 75.2, 24.8625), pack: 'Fruit Pack' , sellprice: 1000, rarity: "Mystical", glicko: calculateGlicko(71, 1000)},
    { name: 'Rainbow Blook', copies: 59, value: calculateNewValue(1000, 59, 20, 0, 138.255), pack: 'Color Pack' , sellprice: 1000, rarity: "Mystical", glicko: calculateGlicko(59, 1000)},
    { name: 'Forgotten Bot', copies: 100, value: calculateNewValue(1000, 100, 20, 78, 22.034), pack: 'Bot Pack', sellprice: 1000, rarity: "Mystical", glicko: calculateGlicko(100, 1000)},
    { name: 'Kraken', copies: 132, value: calculateNewValue(1000, 132, 20, 75, 25.563), pack: 'Aquatic Pack', sellprice: 1000, rarity: "Mystical", glicko: calculateGlicko(132, 1000)},
  
    // Chromas
    { name: 'Zastix', copies: 1637, value: calculateNewValue(300, 1637, 30, 75, 25.3075), pack: 'OG Pack', sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(1637, 300)},
    { name: 'Hijacked Neural Implant', copies: 62, value: calculateNewValue(300, 62, 25, 75.2, 24.85333), pack: 'Sci-Fi Pack', rarity: "Chroma", sellprice: 300, glicko: calculateGlicko(62, 300)},
    { name: 'Blue Lightsaber', copies: 62, value: calculateNewValue(300, 62, 25, 75.2, 24.85333), pack: 'Sci-Fi Pack', sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(62, 300)},
    { name: 'Teal Platypus', copies: 161, value: calculateNewValue(300, 161, 25, 75, 25), pack: 'Outback Pack' , sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(161, 300)},
    { name: 'White Piano', copies: 188, value: calculateNewValue(300, 188, 25, 58, 19.5337), pack: 'Music Pack' , sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(188, 300)},
    { name: 'Zone Ankha', copies: 783, value: calculateNewValue(300, 783, 25, 67.5, 27.023), pack: 'Ankha Pack', sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(783, 300)},
    { name: 'Ice Crab', copies: 137, value: calculateNewValue(300, 137, 25, 78, 22), pack: 'Ice Monster Pack', sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(137, 300)},
    { name: 'Frozen Fossil', copies: 234, value: calculateNewValue(300, 234, 25, 78, 22), pack: 'Ice Monster Pack' , sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(234, 300)},
    { name: 'Ice Slime', copies: 391, value: calculateNewValue(300, 391, 25, 78, 22), pack: 'Ice Monster Pack', sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(391, 300)},
    { name: 'Spooky Mummy', copies: 369, value: calculateNewValue(350, 369, 25, 94.3, 12.6605), pack: 'Spooky Pack' , sellprice: 350, rarity: "Chroma", glicko: calculateGlicko(369, 350)},
    { name: 'Spooky Pumpkin', copies: 526, value: calculateNewValue(300, 526, 25, 94.3, 12.6605), pack: 'Spooky Pack' , sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(526, 300)},
    { name: 'Spooky Cookie', copies: 547, value: calculateNewValue(300, 547, 25, 94.3, 12.6605), pack: 'Spooky Pack' , sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(547, 300)},
    { name: 'Pumpkin King', copies: 614, value: calculateNewValue(300, 614, 25, 94.3, 12.6605), pack: 'Spooky Pack' , sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(614, 300)},
    { name: 'Vampire Frog', copies: 572, value: calculateNewValue(300, 572, 25, 94.3, 12.6605), pack: 'Spooky Pack', sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(572, 300)},
    { name: 'Anaconda Wizard', copies: 672, value: calculateNewValue(300, 672, 25, 94.3, 12.6605), pack: 'Spooky Pack', sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(672, 300)},
    { name: 'Owl Sheriff', copies: 697, value: calculateNewValue(300, 697, 25, 94.3, 12.6605), pack: 'Spooky Pack', sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(697, 300)},
    { name: 'Raccoon Bandit', copies: 661, value: calculateNewValue(300, 661, 25, 94.3, 12.6605), pack: 'Spooky Pack' , sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(661, 300)},
    { name: 'Chicken Chick', copies: 681, value: calculateNewValue(300, 681, 25, 94.3, 12.6605), pack: 'Spooky Pack' , sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(681, 300)},
    { name: 'Chick Chicken', copies: 698, value: calculateNewValue(300, 698, 25, 94.3, 12.6605), pack: 'Spooky Pack', sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(698, 300)},
    { name: 'Haunted Cookie', copies: 689, value: calculateNewValue(300, 689, 25, 94.3, 12.6605), pack: 'Spooky Pack', sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(689, 300)},
    { name: 'Blue Gummy Bear', copies: 268, value: calculateNewValue(300, 268, 25, 94.3, 12.6605), pack: 'Spooky Pack', sellprice: 300, rarity: "Chroma" , glicko: calculateGlicko(268, 300)},
    { name: 'Green Gummy Bear', copies: 280, value: calculateNewValue(300, 280, 25, 94.3, 12.6605), pack: 'Spooky Pack', sellprice: 300, rarity: "Chroma" , glicko: calculateGlicko(280, 300)},
    { name: 'Red Gummy Bear', copies: 270, value: calculateNewValue(300, 270, 25, 94.3, 12.6605), pack: 'Spooky Pack', sellprice: 300, rarity: "Chroma" , glicko: calculateGlicko(270, 300)},
    { name: 'Ghost Cookie', copies: 741, value: calculateNewValue(300, 741, 25, 94.3, 12.6605), pack: 'Spooky Pack', sellprice: 300, rarity: "Chroma" , glicko: calculateGlicko(741, 300)},
    { name: 'Mummy Cookie', copies: 965, value: calculateNewValue(300, 965, 25, 94.3, 12.6605), pack: 'Spooky Pack' , sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(965, 300)},
    { name: 'Pumpkin Cookie', copies: 1058, value: calculateNewValue(300, 1058, 25, 94.3, 12.6605), pack: 'Spooky Pack' , sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(1058, 300)},
    { name: 'Haunted Pumpkin', copies: 1559, value: calculateNewValue(300, 1559, 25, 94.3, 12.6605), pack: 'Spooky Pack', sellprice: 300, rarity: "Chroma" , glicko: calculateGlicko(1559, 300)},
    { name: 'Coconut Cocktail', copies: 361, value: calculateNewValue(300, 536126, 25, 58, 19.5337), pack: 'Summer Pack', sellprice: 300, rarity: "Chroma" , glicko: calculateGlicko(361, 300)},
    { name: 'Golden Amber', copies: 167, value: calculateNewValue(300, 167, 25, 78, 22.05), pack: 'Dino Pack', sellprice: 300, rarity: "Chroma" , glicko: calculateGlicko(167, 300)},
    { name: 'M67 Grenade', copies: 560, value: calculateNewValue(300, 560, 25, 75, 25.0035), pack: 'Combat Pack' , sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(560, 300)},
    { name: 'Golden Among Us', copies: 549, value: calculateNewValue(300, 549, 25, 70, 30.003), pack: 'Gaming Pack', sellprice: 300 , rarity: "Chroma", glicko: calculateGlicko(549, 300)},
    { name: 'Time Stone', copies: 119, value: calculateNewValue(300, 119, 25, 70, 26.934), pack: 'Time Pack', sellprice: 300 , rarity: "Chroma", glicko: calculateGlicko(119, 300)},
    { name: 'Pirate Pufferfish', copies: 1417, value: calculateNewValue(300, 1417, 25, 80, 20), pack: 'Pirate Pack' , sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(1417, 300)},
    { name: 'Golden Gift', copies: 213, value: calculateNewValue(350, 213, 25, 72.5, 27.9675), pack: 'Blizzard Pack' , sellprice: 350, rarity: "Chroma", glicko: calculateGlicko(213, 350)},
    { name: 'Nutcracker Koala', copies: 39, value: calculateNewValue(350, 39, 25, 72.5, 27.9675), pack: 'Blizzard Pack', sellprice: 350 , rarity: "Chroma", glicko: calculateGlicko(39, 350)},
    { name: 'Elf Sweater Snowman', copies: 57, value: calculateNewValue(350, 57, 25, 72.5, 27.9675), pack: 'Blizzard Pack' , sellprice: 350, rarity: "Chroma", glicko: calculateGlicko(57, 350)},
    { name: 'Blue Sweater Snowman', copies: 96, value: calculateNewValue(300, 96, 25, 72.5, 27.9675), pack: 'Blizzard Pack' , sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(96, 300)},
    { name: 'Red Sweater Snowman', copies: 112, value: calculateNewValue(300, 112, 25, 72.5, 27.9675), pack: 'Blizzard Pack' , sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(112, 300)},
    { name: 'Snowy Bush Monster', copies: 66, value: calculateNewValue(300, 66, 25, 72.5, 27.9675), pack: 'Blizzard Pack' , sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(66, 300)},
    { name: 'Chilly Flamingo', copies: 104, value: calculateNewValue(300, 104, 25, 72.5, 27.9675), pack: 'Blizzard Pack' , sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(104, 300)},
    { name: 'Tropical Globe', copies: 388, value: calculateNewValue(300, 388, 25, 72.5, 27.9675), pack: 'Blizzard Pack' , sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(388, 300)},
    { name: 'Cookies Combo', copies: 157, value: calculateNewValue(300, 157, 25, 72.5, 27.9675), pack: 'Blizzard Pack' , sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(157, 300)},
    { name: 'Frost Wreath', copies: 535, value: calculateNewValue(300, 535, 25, 72.5, 27.9675), pack: 'Blizzard Pack', sellprice: 300 , rarity: "Chroma", glicko: calculateGlicko(535, 300)},
    { name: 'Paris Snow Globe', copies: 877, value: calculateNewValue(300, 877, 25, 72.5, 27.9675), pack: 'Blizzard Pack', sellprice: 300 , rarity: "Chroma", glicko: calculateGlicko(877, 300)},
    { name: 'Egypt Snow Globe', copies: 806, value: calculateNewValue(300, 806, 25, 72.5, 27.9675), pack: 'Blizzard Pack', sellprice: 300 , rarity: "Chroma", glicko: calculateGlicko(806, 300)},
    { name: 'Japan Snow Globe', copies: 836, value: calculateNewValue(300, 836, 25, 72.5, 27.9675), pack: 'Blizzard Pack' , sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(836, 300)},
    { name: 'London Snow Globe', copies: 876, value: calculateNewValue(300, 876, 25, 72.5, 27.9675), pack: 'Blizzard Pack', sellprice: 300 , rarity: "Chroma", glicko: calculateGlicko(876, 300)},
    { name: 'New York Snow Globe', copies: 895, value: calculateNewValue(300, 895, 25, 72.5, 27.9675), pack: 'Blizzard Pack' , sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(895, 300)},
    { name: 'Santa Claws', copies: 208, value: calculateNewValue(300, 208, 25, 72.5, 27.9675), pack: 'Blizzard Pack', sellprice: 300 , rarity: "Chroma", glicko: calculateGlicko(208, 300)},
    { name: 'Red Bowling Ball', copies: 116, value: calculateNewValue(300, 116, 20, 75, 25), pack: 'Sports Pack', sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(116, 300)},
    { name: 'March Hare', copies: 102, value: calculateNewValue(300, 102, 20, 75.2, 24.85), pack: 'Wonderland Pack', sellprice: 300 , rarity: "Chroma", glicko: calculateGlicko(102, 300)},
    { name: 'Dinah', copies: 173, value: calculateNewValue(300, 173, 20, 75.2, 24.85), pack: 'Wonderland Pack', sellprice: 300 , rarity: "Chroma", glicko: calculateGlicko(173, 300)},
    { name: 'Master Elf', copies: 1980, value: calculateNewValue(300, 1980, 20, 67.5, 33.158), pack: 'Medieval Pack', sellprice: 300 , rarity: "Chroma", glicko: calculateGlicko(1980, 300)},
    { name: 'Wise Owl', copies: 667, value: calculateNewValue(300, 667, 20, 67.5, 33.158), pack: 'Medieval Pack', sellprice: 300 , rarity: "Chroma", glicko: calculateGlicko(667, 300)},
    { name: 'Agent Owl', copies: 1905, value: calculateNewValue(300, 1905, 20, 67.5, 33.158), pack: 'Medieval Pack', sellprice: 300 , rarity: "Chroma", glicko: calculateGlicko(1905, 300)},
    { name: 'Space Terminal', copies: 612, value: calculateNewValue(350, 612, 20, 75, 25.525), pack: 'Space Pack', sellprice: 350 , rarity: "Chroma", glicko: calculateGlicko(612, 300)},
    { name: 'Black Astronaut', copies: 1928, value: calculateNewValue(300, 1928, 20, 75, 25.525), pack: 'Space Pack' , sellprice: 300 , rarity: "Chroma", glicko: calculateGlicko(1928, 300)},
    { name: 'Brown Astronaut', copies: 1837, value: calculateNewValue(300, 1837, 20, 75, 25.525), pack: 'Space Pack'  , sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(1837, 300)},
    { name: 'Purple Astronaut', copies: 1957, value: calculateNewValue(300, 1957, 20, 75, 25.525), pack: 'Space Pack', sellprice: 300  , rarity: "Chroma", glicko: calculateGlicko(1957, 300)},
    { name: 'Blue Astronaut', copies: 1791, value: calculateNewValue(300, 1791, 20, 75, 25.525), pack: 'Space Pack', sellprice: 300  , rarity: "Chroma", glicko: calculateGlicko(1791, 300)},
    { name: 'Cyan Astronaut', copies: 1932, value: calculateNewValue(300, 1932, 20, 75, 25.525), pack: 'Space Pack'  , sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(1932, 300)},
    { name: 'Green Astronaut', copies: 1832, value: calculateNewValue(300, 1832, 20, 75, 25.525), pack: 'Space Pack' , sellprice: 300 , rarity: "Chroma", glicko: calculateGlicko(1832, 300)},
    { name: 'Lime Astronaut', copies: 1843, value: calculateNewValue(300, 1843, 20, 75, 25.525), pack: 'Space Pack' , sellprice: 300 , rarity: "Chroma", glicko: calculateGlicko(1843, 300)},
    { name: 'Yellow Astronaut', copies: 1874, value: calculateNewValue(300, 1874, 20, 75, 25.525), pack: 'Space Pack', sellprice: 300  , rarity: "Chroma", glicko: calculateGlicko(1874, 300)},
    { name: 'Orange Astronaut', copies: 1848, value: calculateNewValue(300, 1848, 20, 75, 25.525), pack: 'Space Pack' , sellprice: 300 , rarity: "Chroma", glicko: calculateGlicko(1848, 300)},
    { name: 'Red Astronaut', copies: 1874, value: calculateNewValue(300, 1874, 20, 75, 25.525), pack: 'Space Pack'  , sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(1874, 300)},
    { name: 'Pink Astronaut', copies: 1904, value: calculateNewValue(300, 1904, 20, 75, 25.525), pack: 'Space Pack', sellprice: 300 , rarity: "Chroma" , glicko: calculateGlicko(1904, 300)},
    { name: 'Tiger Zebra', copies: 152, value: calculateNewValue(300, 152, 20, 75, 25.04), pack: 'Safari Pack' , sellprice: 300 , rarity: "Chroma", glicko: calculateGlicko(152, 300)},
    { name: 'White Peacock', copies: 193, value: calculateNewValue(300, 193, 20, 75, 25.04), pack: 'Safari Pack' , sellprice: 300 , rarity: "Chroma", glicko: calculateGlicko(193, 300)},
    { name: 'Rainbow Panda', copies: 172, value: calculateNewValue(300, 172, 20, 75, 25.04), pack: 'Safari Pack', sellprice: 300  , rarity: "Chroma", glicko: calculateGlicko(172, 300)},
    { name: 'Rose Quartz', copies: 408, value: calculateNewValue(300, 408, 20, 75, 25.0537), pack: 'Gemstone Pack', sellprice: 300 , rarity: "Chroma", glicko: calculateGlicko(408, 300)},
    { name: 'Blue Raspberry', copies: 105, value: calculateNewValue(350, 105, 20, 75.2, 24.8625), pack: 'Fruit Pack', sellprice: 350 , rarity: "Chroma", glicko: calculateGlicko(105, 300)},
    { name: 'Green Apple', copies: 578, value: calculateNewValue(300, 578, 20, 75.2, 24.8625), pack: 'Fruit Pack' , sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(578, 300)},
    { name: 'Plasma Elemental', copies: 287, value: calculateNewValue(300, 287, 20, 75, 25), pack: 'Elemental Pack' , sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(287, 300)},
    { name: 'Pink Blook', copies: 230, value: calculateNewValue(300, 230, 20, 0, 138.255), pack: 'Color Pack' , sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(230, 300)},
    { name: 'Blue Gummy Worm', copies: 153, value: calculateNewValue(300, 153, 20, 78, 22), pack: 'Candy Pack' , sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(153, 300)},
    { name: 'Red Licorice', copies: 316, value: calculateNewValue(300, 316, 20, 78, 22), pack: 'Candy Pack', sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(316, 300)},
    { name: 'White Chocolate', copies: 505, value: calculateNewValue(300, 505, 20, 78, 22), pack: 'Candy Pack', sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(505, 300)},
    { name: 'Chocolate Milk', copies: 1709, value: calculateNewValue(300, 1709, 20, 75, 26.05), pack: 'Breakfast Pack', sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(1709, 300)},
    { name: 'Catson', copies: 355, value: calculateNewValue(300, 355, 20, 78, 22.034), pack: 'Bot Pack' , sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(355, 300)},
    { name: 'Rainbow Narwhal', copies: 1781, value: calculateNewValue(300, 1781, 20, 75, 25.563), pack: 'Aquatic Pack', sellprice: 300 , rarity: "Chroma", glicko: calculateGlicko(1781, 300)},
    { name: 'Donut Blobfish', copies: 1680, value: calculateNewValue(300, 1680, 20, 75, 25.563), pack: 'Aquatic Pack', sellprice: 300 , rarity: "Chroma", glicko: calculateGlicko(1680, 300)},
    { name: 'Crimson Octopus', copies: 1668, value: calculateNewValue(300, 1668, 20, 75, 25.563), pack: 'Aquatic Pack', sellprice: 300 , rarity: "Chroma", glicko: calculateGlicko(1668, 300)},
    { name: 'Lemon Crab', copies: 1679, value: calculateNewValue(300, 1679, 20, 75, 25.563), pack: 'Aquatic Pack' , sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(1679, 300)},
    { name: 'Poison Dart Frog', copies: 1607, value: calculateNewValue(300, 1607, 20, 75, 25.563), pack: 'Aquatic Pack' , sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(1607, 300)},
    { name: 'Blizzard Clownfish', copies: 1557, value: calculateNewValue(300, 1557, 20, 75, 25.563), pack: 'Aquatic Pack' , sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(1557, 300)},
    { name: 'Rainbow Jellyfish', copies: 1696, value: calculateNewValue(300, 1696, 20, 75, 25.563), pack: 'Aquatic Pack', sellprice: 300 , rarity: "Chroma", glicko: calculateGlicko(1696, 300)},
    { name: 'Spring Frog', copies: 1533, value: calculateNewValue(300, 1533, 20, 75, 25.563), pack: 'Aquatic Pack' , sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(1553, 300)},
    { name: 'Lucky Frog', copies: 1735, value: calculateNewValue(300, 1735, 20, 75, 25.563), pack: 'Aquatic Pack', sellprice: 300 , rarity: "Chroma", glicko: calculateGlicko(1735, 300)},
    { name: 'Lovely Frog', copies: 1755, value: calculateNewValue(300, 1755, 20, 75, 25.563), pack: 'Aquatic Pack' , sellprice: 300, rarity: "Chroma", glicko: calculateGlicko(1755, 300)},

    // Legendaries
    { name: 'Monkxy', copies: 1608, value: calculateNewValue(250, 1608, 30, 75, 25.563), pack: 'OG Pack' , sellprice: 250, rarity: "Legendary", glicko: calculateGlicko(1608, 250)},
    { name: 'Root', copies: 2118, value: calculateNewValue(200, 2118, 30, 0, 75, 25.563), pack: 'OG Pack' , sellprice: 200, rarity: "Legendary", glicko: calculateGlicko(2118, 200)},
    { name: 'Eternal Prism Blade', copies: 470, value: calculateNewValue(200, 470, 25, 75.2, 24.85333), pack: 'Sci-Fi Pack' , sellprice: 200, rarity: "Legendary", glicko: calculateGlicko(470, 200)},
    { name: 'Sugar Glider', copies: 686, value: calculateNewValue(200, 686, 25, 75, 25), pack: 'Outback Pack' , sellprice: 200, rarity: "Legendary", glicko: calculateGlicko(686, 200)},
    { name: 'Piano', copies: 746, value: calculateNewValue(200, 746, 25, 58, 19.5337), pack: 'Music Pack' , sellprice: 200, rarity: "Legendary", glicko: calculateGlicko(746, 200)},
    { name: 'Golden Ankha', copies: 2701, value: calculateNewValue(200, 2701, 25, 67.5, 27.023), pack: 'Ankha Pack' , sellprice: 200, rarity: "Legendary", glicko: calculateGlicko(2701, 200)},
    { name: 'Yeti', copies: 639, value: calculateNewValue(200, 639, 25, 78, 22), pack: 'Ice Monster Pack' , sellprice: 200, rarity: "Legendary", glicko: calculateGlicko(639, 200)},
    { name: 'Ghost', copies: 2956, value: calculateNewValue(200, 2956, 25, 94.3, 12.6605), pack: 'Spooky Pack' , sellprice: 200, rarity: "Legendary", glicko: calculateGlicko(2956, 200)},
    { name: 'Sand Castle', copies: 1209, value: calculateNewValue(200, 1209, 25, 58, 19.5337), pack: 'Summer Pack' , sellprice: 200, rarity: "Legendary", glicko: calculateGlicko(1209, 200)},
    { name: 'Tyrannosaurus Rex', copies: 521, value: calculateNewValue(200, 521, 25, 78, 22.05), pack: 'Dino Pack' , sellprice: 200, rarity: "Legendary", glicko: calculateGlicko(521, 200)},
    { name: 'M12 Shotgun', copies: 1337, value: calculateNewValue(200, 1337, 25, 75, 25.0035), pack: 'Combat Pack' , sellprice: 200, rarity: "Legendary", glicko: calculateGlicko(1337, 200)},
    { name: 'Master Chief', copies: 1397, value: calculateNewValue(200, 1397, 25, 70, 30.003), pack: 'Gaming Pack' , sellprice: 200, rarity: "Legendary", glicko: calculateGlicko(1397)},
    { name: 'Clock Tower', copies: 592, value: calculateNewValue(200, 592, 25, 70, 26.934), pack: 'Time Pack' , sellprice: 200, rarity: "Legendary", glicko: calculateGlicko(592, 200)},
    { name: 'Captain Blackbeard', copies: 240, value: calculateNewValue(200, 240, 25, 80, 20), pack: 'Pirate Pack' , sellprice: 200, rarity: "Legendary", glicko: calculateGlicko(240, 200)},
    { name: 'Santa Claus', copies: 3095, value: calculateNewValue(200, 3095, 25, 72.5, 27.9675), pack: 'Blizzard Pack' , sellprice: 200, rarity: "Legendary", glicko: calculateGlicko(3095, 200)},
    { name: 'Football Helmet', copies: 936, value: calculateNewValue(200, 936, 20, 75, 25), pack: 'Sports Pack' , sellprice: 200, rarity: "Legendary", glicko: calculateGlicko(936, 200)},
    { name: 'King of Hearts', copies: 886, value: calculateNewValue(200, 886, 20, 75.2, 24.85), pack: 'Wonderland Pack' , sellprice: 200, rarity: "Legendary", glicko: calculateGlicko(886, 200)},
    { name: 'King', copies: 2485, value: calculateNewValue(200, 2485, 20, 67.5, 33.158), pack: 'Medieval Pack' , sellprice: 200, rarity: "Legendary", glicko: calculateGlicko(2485, 200)},
    { name: 'Astronaut', copies: 2862, value: calculateNewValue(200, 2862, 20, 75, 25.525), pack: 'Space Pack' , sellprice: 200, rarity: "Legendary", glicko: calculateGlicko(2862, 200)},
    { name: 'Lion', copies: 922, value: calculateNewValue(200, 922, 20, 75, 25.04), pack: 'safari Pack' , sellprice: 200, rarity: "Legendary", glicko: calculateGlicko(617, 200)},
    { name: 'Moonstone', copies: 617, value: calculateNewValue(250, 617, 20, 75, 25.0537), pack: 'Gemstone Pack' , sellprice: 250, rarity: "Legendary", glicko: calculateGlicko(617, 250)},
    { name: 'Opal', copies: 1157, value: calculateNewValue(200, 1157, 20, 75, 25.0537), pack: 'Gemstone Pack' , sellprice: 200, rarity: "Legendary", glicko: calculateGlicko(1157, 200)},
    { name: 'Starfruit', copies: 964, value: calculateNewValue(200, 964, 20, 75, 24.8625), pack: 'Fruit Pack' , sellprice: 200, rarity: "Legendary", glicko: calculateGlicko(964, 200)},
    { name: 'Electric Elemental', copies: 1098, value: calculateNewValue(200, 1098, 20, 75, 25), pack: 'Elemental Pack' , sellprice: 200, rarity: "Legendary", glicko: calculateGlicko(1098, 200)},
    { name: 'Black Blook', copies: 569, value: calculateNewValue(250, 569, 20, 0, 138.255), pack: 'Color Pack' , sellprice: 250, rarity: "Legendary", glicko: calculateGlicko(569, 250)},
    { name: 'White Blook', copies: 882, value: calculateNewValue(200, 882, 20, 0, 138.255), pack: 'Color Pack' , sellprice: 200, rarity: "Legendary", glicko: calculateGlicko(882, 200)},
    { name: 'Rock Candy', copies: 793, value: calculateNewValue(200, 793, 20, 78, 22), pack: 'Candy Pack' , sellprice: 200, rarity: "Legendary", glicko: calculateGlicko(793, 200)},
    { name: 'Sandwich', copies: 2188, value: calculateNewValue(200, 2188, 20, 75, 26.05), pack: 'Breakfast Pack' , sellprice: 200, rarity: "Legendary", glicko: calculateGlicko(2188, 200)},
    { name: 'Mega Bot', copies: 1002, value: calculateNewValue(200, 1002, 20, 78, 22.034), pack: 'Bot Pack' , sellprice: 200, rarity: "Legendary", glicko: calculateGlicko(1002, 200)},
    { name: 'Megalodon', copies: 1557, value: calculateNewValue(250, 1557, 20, 75, 25.563), pack: 'Aquatic Pack' , sellprice: 250, rarity: "Legendary", glicko: calculateGlicko(1557, 250)},
    { name: 'Baby Shark', copies: 2074, value: calculateNewValue(200, 2074, 20, 75, 25.563), pack: 'Aquatic Pack' , sellprice: 200, rarity: "Legendary", glicko: calculateGlicko(2074, 200)},
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
        // Sort the filtered blooks first by rarity, then by name length
        filteredBlooks.sort((a, b) => {
            const rarityOrder = getRarityOrder(a.rarity) - getRarityOrder(b.rarity);

            if (rarityOrder === 0) {
                // If rarities are the same, sort by name length
                return a.name.length - b.name.length;
            }

            return rarityOrder;
        });

        filteredBlooks.forEach(blook => {
            const blookItem = document.createElement('div');
            blookItem.className = 'blook-item';
            resultsContainer.appendChild(blookItem);
            blookItem.innerHTML = `<strong>${blook.name}</strong><br>Copies: ${blook.copies}<br>Sell Price: ${blook.sellprice}<br>Value: ${blook.value}<br>Pack: ${blook.pack}<br>Rarity: ${blook.rarity}<br>Glicko: ${calculateGlicko(blook.copies, blook.sellprice)}`;
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
      (sellprice * (12532 - copies)) / copies / (30 / packPrice) / ((100 / ((lowerRate + higherRate * 2)) * 2))
    );
  
    return roundedValue;
  }

function calculateGlicko(copies, sellprice) {
    const Glicko = ((12532 / copies) / (sellprice / 200)).toFixed(2); // Round to the nearest tenth

    return Glicko;
}
