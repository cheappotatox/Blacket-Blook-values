const blookValues = [
    // Common Blooks
    { name: 'Bia', copies: 1, value: 'O/C', pack: 'N/A', sellprice: 25000 },
    { name: 'Tropical Island', copies: 2, value: 'O/C', pack: 'N/A', sellprice: 25000 },
    { name: 'Gold Doubloon', copies: 3, value: 'O/C', pack: 'N/A', sellprice: 1000 },
    { name: 'Golden Seashell', copies: 9, value: 'O/C', pack: 'N/A', sellprice: 1000 },
    { name: 'Naughty Ankha', copies: 21, value: 'O/C', pack: 'Ankha Pack', sellprice: 350 },
    { name: 'Festive Ankha', copies: 20, value: 'O/C', pack: 'Blizzard Pack', sellprice: 350 },
    { name: 'Golden Crab', copies: 24, value: 'O/C', pack: 'N/A', sellprice: 350 },
    { name: 'Party Pig', copies: 27, value: 'O/C', pack: 'N/A', sellprice: 350 },
    { name: 'Lovely Ankha', copies: 38, value: 'O/C', pack: 'Ankha Pack', sellprice: 350 },
    { name: 'Treasure Chest', copies: 78, value: 'O/C', pack: 'N/A', sellprice: 1000 },
    { name: 'Golden Shovel', copies: 72, value: 'O/C', pack: 'N/A', sellprice: 350 },
    { name: 'Ukraine Ankha', copies: 89, value: 'O/C', pack: 'Ankha Pack', sellprice: 350 },
    { name: 'Spring Ankha', copies: 135, value: 'O/C', pack: 'Ankha Pack', sellprice: 350 },
    { name: 'Lucky Ankha', copies: 130, value: 'O/C', pack: 'Ankha Pack', sellprice: 350 },
    { name: 'American Ankha', copies: 92, value: 'O/C', pack: 'Ankha Pack', sellprice: 350 },
    { name: 'Lunar Frog', copies: 860, value: 'O/C', pack: 'Lunar Pack', sellprice: 300 },
    { name: '10k', copies: 3678, value: 'O/C', pack: '10k Pack', sellprice: 300 },
    { name: 'Chocolate Rabbit', copies: 3011, value: 'O/C', pack: 'Easter Pack', sellprice: 300 },
    { name: 'Lucky Hamster', copies: 2227, value: 'O/C', pack: 'Lucky Pack', sellprice: 300 },
    { name: 'Vampire Ankha', copies: 76, value: 'O/C', pack: 'Spooky Pack', sellprice: 400 },
    { name: 'Turkey Ankha', copies: 37, value: 'O/C', pack: 'Ankha Pack', sellprice: 350 },
  
    // Mysticals
    { name: 'Xotic', copies: 179, value: calculateNewValue(1000, 179, 30, 75, 25.3075), pack: 'OG Pack', sellprice: 1000, glicko: calculateGlicko(179)},
    { name: 'Envi', copies: 160, value: calculateNewValue(1000, 160, 30, 75, 25.3075), pack: 'OG Pack', sellprice: 1000, glicko: calculateGlicko(160) },
    { name: 'Celestial Oracle Staff', copies: 12, value: calculateNewValue(1000, 12, 25, 75.2, 24.8533), pack: 'Sci-Fi Pack', sellprice: 1000, glicko: calculateGlicko(12) },
    { name: 'Golden Harp', copies: 28, value: calculateNewValue(1000, 28, 25, 58, 19.5337), pack: 'Music Pack', sellprice: 1000, glicko: calculateGlicko(28) },
    { name: 'Rainbow Ankha', copies: 175, value: calculateNewValue(1000, 175, 25, 67.5, 27.023), pack: 'Ankha Pack', sellprice: 1000, glicko: calculateGlicko(175) },
    { name: 'Spooky Ghost', copies: 260, value: calculateNewValue(1000, 260, 25, 94.3, 12.6605), pack: 'Spooky Pack', sellprice: 1000, glicko: calculateGlicko(260) },
    { name: 'Tropical Pig', copies: 57, value: calculateNewValue(1000, 57, 25, 58, 19.5337), pack: 'Summer Pack', sellprice: 1000, glicko: calculateGlicko(57) },
    { name: 'Golden Shuriken', copies: 71, value: calculateNewValue(1000, 71, 25, 75, 25.0035), pack: 'Combat Pack', sellprice: 1000, glicko: calculateGlicko(71) },
    { name: 'Diamond Sword', copies: 59, value: calculateNewValue(1000, 59, 25, 75, 25.0035), pack: 'Combat Pack', sellprice: 1000, glicko: calculateGlicko(59) },
    { name: 'Gaming Mouse', copies: 64, value: calculateNewValue(1000, 64, 25, 70, 30.003), pack: 'Gaming Pack', sellprice: 1000, glicko: calculateGlicko(64) },
    { name: 'Time Machine', copies: 17, value: calculateNewValue(1000, 17, 25, 70, 26.934), pack: 'Time Pack', sellprice: 1000, glicko: calculateGlicko(17) },
    { name: 'Hamsta Claus', copies: 5, value: calculateNewValue(1000, 5, 25, 72.5, 27.9675), pack: 'Blizzard Pack' , sellprice: 1000, glicko: calculateGlicko(5)},
    { name: 'Diamond Gift', copies: 160, value: calculateNewValue(1000, 160, 25, 72.5, 27.9675), pack: 'Blizzard Pack', sellprice: 1000, glicko: calculateGlicko(160) },
    { name: 'Dark Dragon', copies: 311, value: calculateNewValue(1000, 311, 20, 67, 33.158), pack: 'Medieval Pack' , sellprice: 1000, glicko: calculateGlicko(311)},
    { name: 'Phantom King', copies: 543, value: calculateNewValue(1000, 543, 20, 67, 33.158), pack: 'Medieval Pack', sellprice: 1000, glicko: calculateGlicko(543) },
    { name: 'Rainbow Astronaut', copies: 201, value: calculateNewValue(1000, 201, 20, 75, 25.525), pack: 'Space Pack', sellprice: 1000, glicko: calculateGlicko(201) },
    { name: 'Tim the Alien', copies: 341, value: calculateNewValue(1000, 341, 20, 75, 25.525), pack: 'Space Pack' , sellprice: 1000, glicko: calculateGlicko(341)},
    { name: 'Space Debugger', copies: 537, value: calculateNewValue(1000, 537, 20, 75, 25.525), pack: 'Space Pack', sellprice: 1000, glicko: calculateGlicko(537) },
    { name: 'Black Opal', copies: 77, value: calculateNewValue(1000, 77, 20, 75, 25.0537), pack: 'Gemstone Pack', sellprice: 1000, glicko: calculateGlicko(77) },
    { name: 'Golden Apple', copies: 71, value: calculateNewValue(1000, 71, 20, 75.2, 24.8625), pack: 'Fruit Pack' , sellprice: 1000, glicko: calculateGlicko(71)},
    { name: 'Rainbow Blook', copies: 59, value: calculateNewValue(1000, 59, 20, 0, 138.255), pack: 'Color Pack' , sellprice: 1000, glicko: calculateGlicko(59)},
    { name: 'Forgotten Bot', copies: 100, value: calculateNewValue(1000, 100, 20, 78, 22.034), pack: 'Bot Pack', sellprice: 1000, glicko: calculateGlicko(100)},
    { name: 'Kraken', copies: 132, value: calculateNewValue(1000, 132, 20, 75, 25.563), pack: 'Aquatic Pack', sellprice: 1000, glicko: calculateGlicko(132) },
  
    // Chromas
    { name: 'Zastix', copies: 1637, value: calculateNewValue(300, 1637, 30, 75, 25.3075), pack: 'OG Pack', sellprice: 300, glicko: calculateGlicko(1637) },
    { name: 'Hijacked Neural Implant', copies: 62, value: calculateNewValue(300, 62, 25, 75.2, 24.85333), pack: 'Sci-Fi Pack', sellprice: 300, glicko: calculateGlicko(62) },
    { name: 'Blue Lightsaber', copies: 62, value: calculateNewValue(300, 62, 25, 75.2, 24.85333), pack: 'Sci-Fi Pack', sellprice: 300, glicko: calculateGlicko(62) },
    { name: 'Teal Platypus', copies: 161, value: calculateNewValue(300, 161, 25, 75, 25), pack: 'Outback Pack' , sellprice: 300, glicko: calculateGlicko(161)},
    { name: 'White Piano', copies: 188, value: calculateNewValue(300, 188, 25, 58, 19.5337), pack: 'Music Pack' , sellprice: 300, glicko: calculateGlicko(188)},
    { name: 'Zone Ankha', copies: 783, value: calculateNewValue(300, 783, 25, 67.5, 27.023), pack: 'Ankha Pack', sellprice: 300, glicko: calculateGlicko(783) },
    { name: 'Ice Crab', copies: 137, value: calculateNewValue(300, 137, 25, 78, 22), pack: 'Ice Monster Pack', sellprice: 300, glicko: calculateGlicko(137) },
    { name: 'Frozen Fossil', copies: 234, value: calculateNewValue(300, 234, 25, 78, 22), pack: 'Ice Monster Pack' , sellprice: 300, glicko: calculateGlicko(234)},
    { name: 'Ice Slime', copies: 391, value: calculateNewValue(300, 391, 25, 78, 22), pack: 'Ice Monster Pack', sellprice: 300, glicko: calculateGlicko(391) },
    { name: 'Spooky Mummy', copies: 369, value: calculateNewValue(350, 369, 25, 94.3, 12.6605), pack: 'Spooky Pack' , sellprice: 350, glicko: calculateGlicko(369)},
    { name: 'Spooky Pumpkin', copies: 526, value: calculateNewValue(300, 526, 25, 94.3, 12.6605), pack: 'Spooky Pack' , sellprice: 300, glicko: calculateGlicko(526)},
    { name: 'Spooky Cookie', copies: 547, value: calculateNewValue(300, 547, 25, 94.3, 12.6605), pack: 'Spooky Pack' , sellprice: 300, glicko: calculateGlicko(547)},
    { name: 'Pumpkin King', copies: 614, value: calculateNewValue(300, 614, 25, 94.3, 12.6605), pack: 'Spooky Pack' , sellprice: 300, glicko: calculateGlicko(614)},
    { name: 'Vampire Frog', copies: 572, value: calculateNewValue(300, 572, 25, 94.3, 12.6605), pack: 'Spooky Pack', sellprice: 300, glicko: calculateGlicko(572) },
    { name: 'Anaconda Wizard', copies: 672, value: calculateNewValue(300, 672, 25, 94.3, 12.6605), pack: 'Spooky Pack', sellprice: 300, glicko: calculateGlicko(672) },
    { name: 'Owl Sheriff', copies: 697, value: calculateNewValue(300, 697, 25, 94.3, 12.6605), pack: 'Spooky Pack', sellprice: 300, glicko: calculateGlicko(697) },
    { name: 'Raccoon Bandit', copies: 661, value: calculateNewValue(300, 661, 25, 94.3, 12.6605), pack: 'Spooky Pack' , sellprice: 300, glicko: calculateGlicko(661)},
    { name: 'Chicken Chick', copies: 681, value: calculateNewValue(300, 681, 25, 94.3, 12.6605), pack: 'Spooky Pack' , sellprice: 300, glicko: calculateGlicko(681)},
    { name: 'Chick Chicken', copies: 698, value: calculateNewValue(300, 698, 25, 94.3, 12.6605), pack: 'Spooky Pack', sellprice: 300, glicko: calculateGlicko(698) },
    { name: 'Haunted Cookie', copies: 689, value: calculateNewValue(300, 689, 25, 94.3, 12.6605), pack: 'Spooky Pack', sellprice: 300, glicko: calculateGlicko(689) },
    { name: 'Blue Gummy Bear', copies: 268, value: calculateNewValue(300, 268, 25, 94.3, 12.6605), pack: 'Spooky Pack', sellprice: 300 , glicko: calculateGlicko(268)},
    { name: 'Green Gummy Bear', copies: 280, value: calculateNewValue(300, 280, 25, 94.3, 12.6605), pack: 'Spooky Pack', sellprice: 300 , glicko: calculateGlicko(280)},
    { name: 'Red Gummy Bear', copies: 270, value: calculateNewValue(300, 270, 25, 94.3, 12.6605), pack: 'Spooky Pack', sellprice: 300 , glicko: calculateGlicko(270)},
    { name: 'Ghost Cookie', copies: 741, value: calculateNewValue(300, 741, 25, 94.3, 12.6605), pack: 'Spooky Pack', sellprice: 300 , glicko: calculateGlicko(741)},
    { name: 'Mummy Cookie', copies: 965, value: calculateNewValue(300, 965, 25, 94.3, 12.6605), pack: 'Spooky Pack' , sellprice: 300, glicko: calculateGlicko(965)},
    { name: 'Pumpkin Cookie', copies: 1058, value: calculateNewValue(300, 1058, 25, 94.3, 12.6605), pack: 'Spooky Pack' , sellprice: 300, glicko: calculateGlicko(1058)},
    { name: 'Haunted Pumpkin', copies: 1559, value: calculateNewValue(300, 1559, 25, 94.3, 12.6605), pack: 'Spooky Pack', sellprice: 300 , glicko: calculateGlicko(1559)},
    { name: 'Coconut Cocktail', copies: 361, value: calculateNewValue(300, 536126, 25, 58, 19.5337), pack: 'Summer Pack', sellprice: 300 , glicko: calculateGlicko(361)},
    { name: 'Golden Amber', copies: 167, value: calculateNewValue(300, 167, 25, 78, 22.05), pack: 'Dino Pack', sellprice: 300 , glicko: calculateGlicko(167)},
    { name: 'M67 Grenade', copies: 560, value: calculateNewValue(300, 560, 25, 75, 25.0035), pack: 'Combat Pack' , sellprice: 300, glicko: calculateGlicko(560)},
    { name: 'Golden Among Us', copies: 549, value: calculateNewValue(300, 549, 25, 70, 30.003), pack: 'Gaming Pack', sellprice: 300 , glicko: calculateGlicko(549)},
    { name: 'Time Stone', copies: 119, value: calculateNewValue(300, 119, 25, 70, 26.934), pack: 'Time Pack', sellprice: 300 , glicko: calculateGlicko(119)},
    { name: 'Pirate Pufferfish', copies: 1417, value: calculateNewValue(300, 1417, 25, 80, 20), pack: 'Pirate Pack' , sellprice: 300, glicko: calculateGlicko(1417)},
    { name: 'Golden Gift', copies: 204, value: calculateNewValue(350, 204, 25, 72.5, 27.9675), pack: 'Blizzard Pack' , sellprice: 350, glicko: calculateGlicko(204)},
    { name: 'Nutcracker Koala', copies: 31, value: calculateNewValue(350, 31, 25, 72.5, 27.9675), pack: 'Blizzard Pack', sellprice: 350 , glicko: calculateGlicko(31)},
    { name: 'Elf Sweater Snowman', copies: 49, value: calculateNewValue(350, 49, 25, 72.5, 27.9675), pack: 'Blizzard Pack' , sellprice: 350, glicko: calculateGlicko(49)},
    { name: 'Blue Sweater Snowman', copies: 80, value: calculateNewValue(300, 80, 25, 72.5, 27.9675), pack: 'Blizzard Pack' , sellprice: 300, glicko: calculateGlicko(80)},
    { name: 'Red Sweater Snowman', copies: 94, value: calculateNewValue(300, 94, 25, 72.5, 27.9675), pack: 'Blizzard Pack' , sellprice: 300, glicko: calculateGlicko(94)},
    { name: 'Snowy Bush Monster', copies: 41, value: calculateNewValue(300, 41, 25, 72.5, 27.9675), pack: 'Blizzard Pack' , sellprice: 300, glicko: calculateGlicko(41)},
    { name: 'Chilly Flamingo', copies: 84, value: calculateNewValue(300, 84, 25, 72.5, 27.9675), pack: 'Blizzard Pack' , sellprice: 300, glicko: calculateGlicko(84)},
    { name: 'Tropical Globe', copies: 381, value: calculateNewValue(300, 381, 25, 72.5, 27.9675), pack: 'Blizzard Pack' , sellprice: 300, glicko: calculateGlicko(381)},
    { name: 'Cookies Combo', copies: 116, value: calculateNewValue(300, 116, 25, 72.5, 27.9675), pack: 'Blizzard Pack' , sellprice: 300, glicko: calculateGlicko(116)},
    { name: 'Frost Wreath', copies: 516, value: calculateNewValue(300, 516, 25, 72.5, 27.9675), pack: 'Blizzard Pack', sellprice: 300 , glicko: calculateGlicko(516)},
    { name: 'Paris Snow Globe', copies: 847, value: calculateNewValue(300, 847, 25, 72.5, 27.9675), pack: 'Blizzard Pack', sellprice: 300 , glicko: calculateGlicko(847)},
    { name: 'Egypt Snow Globe', copies: 769, value: calculateNewValue(300, 769, 25, 72.5, 27.9675), pack: 'Blizzard Pack', sellprice: 300 , glicko: calculateGlicko(769)},
    { name: 'Japan Snow Globe', copies: 791, value: calculateNewValue(300, 791, 25, 72.5, 27.9675), pack: 'Blizzard Pack' , sellprice: 300, glicko: calculateGlicko(791)},
    { name: 'London Snow Globe', copies: 825, value: calculateNewValue(300, 825, 25, 72.5, 27.9675), pack: 'Blizzard Pack', sellprice: 300 , glicko: calculateGlicko(825)},
    { name: 'New York Snow Globe', copies: 857, value: calculateNewValue(300, 857, 25, 72.5, 27.9675), pack: 'Blizzard Pack' , sellprice: 300, glicko: calculateGlicko(857)},
    { name: 'Santa Claws', copies: 150, value: calculateNewValue(300, 150, 25, 72.5, 27.9675), pack: 'Blizzard Pack', sellprice: 300 , glicko: calculateGlicko(150)},
    { name: 'Red Bowling Ball', copies: 116, value: calculateNewValue(300, 116, 20, 75, 25), pack: 'Sports Pack', sellprice: 300, glicko: calculateGlicko(116)},
    { name: 'March Hare', copies: 102, value: calculateNewValue(300, 102, 20, 75.2, 24.85), pack: 'Wonderland Pack', sellprice: 300 , glicko: calculateGlicko(102)},
    { name: 'Dinah', copies: 173, value: calculateNewValue(300, 173, 20, 75.2, 24.85), pack: 'Wonderland Pack', sellprice: 300 , glicko: calculateGlicko(173)},
    { name: 'Master Elf', copies: 1980, value: calculateNewValue(300, 1980, 20, 67.5, 33.158), pack: 'Medieval Pack', sellprice: 300 , glicko: calculateGlicko(1980)},
    { name: 'Wise Owl', copies: 667, value: calculateNewValue(300, 667, 20, 67.5, 33.158), pack: 'Medieval Pack', sellprice: 300 , glicko: calculateGlicko(667)},
    { name: 'Agent Owl', copies: 1905, value: calculateNewValue(300, 1905, 20, 67.5, 33.158), pack: 'Medieval Pack', sellprice: 300 , glicko: calculateGlicko(1905)},
    { name: 'Space Terminal', copies: 612, value: calculateNewValue(350, 612, 20, 75, 25.525), pack: 'Space Pack', sellprice: 350 , glicko: calculateGlicko(612)},
    { name: 'Black Astronaut', copies: 1928, value: calculateNewValue(300, 1928, 20, 75, 25.525), pack: 'Space Pack' , sellprice: 300 , glicko: calculateGlicko(1928)},
    { name: 'Brown Astronaut', copies: 1837, value: calculateNewValue(300, 1837, 20, 75, 25.525), pack: 'Space Pack'  , sellprice: 300, glicko: calculateGlicko(1837)},
    { name: 'Purple Astronaut', copies: 1957, value: calculateNewValue(300, 1957, 20, 75, 25.525), pack: 'Space Pack', sellprice: 300  , glicko: calculateGlicko(1957)},
    { name: 'Blue Astronaut', copies: 1791, value: calculateNewValue(300, 1791, 20, 75, 25.525), pack: 'Space Pack', sellprice: 300  , glicko: calculateGlicko(1791)},
    { name: 'Cyan Astronaut', copies: 1932, value: calculateNewValue(300, 1932, 20, 75, 25.525), pack: 'Space Pack'  , sellprice: 300, glicko: calculateGlicko(1932)},
    { name: 'Green Astronaut', copies: 1832, value: calculateNewValue(300, 1832, 20, 75, 25.525), pack: 'Space Pack' , sellprice: 300 , glicko: calculateGlicko(1832)},
    { name: 'Lime Astronaut', copies: 1843, value: calculateNewValue(300, 1843, 20, 75, 25.525), pack: 'Space Pack' , sellprice: 300 , glicko: calculateGlicko(1843)},
    { name: 'Yellow Astronaut', copies: 1874, value: calculateNewValue(300, 1874, 20, 75, 25.525), pack: 'Space Pack', sellprice: 300  , glicko: calculateGlicko(1874)},
    { name: 'Orange Astronaut', copies: 1848, value: calculateNewValue(300, 1848, 20, 75, 25.525), pack: 'Space Pack' , sellprice: 300 , glicko: calculateGlicko(1848)},
    { name: 'Red Astronaut', copies: 1874, value: calculateNewValue(300, 1874, 20, 75, 25.525), pack: 'Space Pack'  , sellprice: 300, glicko: calculateGlicko(1874)},
    { name: 'Pink Astronaut', copies: 1904, value: calculateNewValue(300, 1904, 20, 75, 25.525), pack: 'Space Pack', sellprice: 300  , glicko: calculateGlicko(1904)},
    { name: 'Tiger Zebra', copies: 152, value: calculateNewValue(300, 152, 20, 75, 25.04), pack: 'Safari Pack' , sellprice: 300 , glicko: calculateGlicko(152)},
    { name: 'White Peacock', copies: 193, value: calculateNewValue(300, 193, 20, 75, 25.04), pack: 'Safari Pack' , sellprice: 300 , glicko: calculateGlicko(193)},
    { name: 'Rainbow Panda', copies: 172, value: calculateNewValue(300, 172, 20, 75, 25.04), pack: 'Safari Pack', sellprice: 300  , glicko: calculateGlicko(172)},
    { name: 'Rose Quartz', copies: 408, value: calculateNewValue(300, 408, 20, 75, 25.0537), pack: 'Gemstone Pack', sellprice: 300 , glicko: calculateGlicko(408)},
    { name: 'Blue Raspberry', copies: 105, value: calculateNewValue(350, 105, 20, 75.2, 24.8625), pack: 'Fruit Pack', sellprice: 350 , glicko: calculateGlicko(105)},
    { name: 'Green Apple', copies: 578, value: calculateNewValue(300, 578, 20, 75.2, 24.8625), pack: 'Fruit Pack' , sellprice: 300, glicko: (578)},
    { name: 'Plasma Elemental', copies: 287, value: calculateNewValue(300, 287, 20, 75, 25), pack: 'Elemental Pack' , sellprice: 300, glicko: (287)},
    { name: 'Pink Blook', copies: 230, value: calculateNewValue(300, 230, 20, 0, 138.255), pack: 'Color Pack' , sellprice: 300, glicko: (230)},
    { name: 'Blue Gummy Worm', copies: 153, value: calculateNewValue(300, 153, 20, 78, 22), pack: 'Candy Pack' , sellprice: 300, glicko: (153)},
    { name: 'Red Licorice', copies: 316, value: calculateNewValue(300, 316, 20, 78, 22), pack: 'Candy Pack', sellprice: 300, glicko: (316)},
    { name: 'White Chocolate', copies: 505, value: calculateNewValue(505, 153, 20, 78, 22), pack: 'Candy Pack', sellprice: 300, glicko: (505)},
    { name: 'Chocolate Milk', copies: 1709, value: calculateNewValue(300, 1709, 20, 75, 26.05), pack: 'Breakfast Pack', sellprice: 300, glicko: calculateGlicko(1709)},
    { name: 'Catson', copies: 355, value: calculateNewValue(300, 355, 20, 78, 22.034), pack: 'Bot Pack' , sellprice: 300, glicko: calculateGlicko(355)},
    { name: 'Rainbow Narwhal', copies: 1781, value: calculateNewValue(300, 1781, 20, 75, 25.563), pack: 'Aquatic Pack', sellprice: 300 , glicko: calculateGlicko(1781)},
    { name: 'Donut Blobfish', copies: 1680, value: calculateNewValue(300, 1680, 20, 75, 25.563), pack: 'Aquatic Pack', sellprice: 300 , glicko: calculateGlicko(1680)},
    { name: 'Crimson Octopus', copies: 1668, value: calculateNewValue(300, 1668, 20, 75, 25.563), pack: 'Aquatic Pack', sellprice: 300 , glicko: calculateGlicko(1668)},
    { name: 'Lemon Crab', copies: 1679, value: calculateNewValue(300, 1679, 20, 75, 25.563), pack: 'Aquatic Pack' , sellprice: 300, glicko: calculateGlicko(1679)},
    { name: 'Poison Dart Frog', copies: 1607, value: calculateNewValue(300, 1607, 20, 75, 25.563), pack: 'Aquatic Pack' , sellprice: 300, glicko: calculateGlicko(1607)},
    { name: 'Blizzard Clownfish', copies: 1557, value: calculateNewValue(300, 1557, 20, 75, 25.563), pack: 'Aquatic Pack' , sellprice: 300, glicko: calculateGlicko(1557)},
    { name: 'Rainbow Jellyfish', copies: 1696, value: calculateNewValue(300, 1696, 20, 75, 25.563), pack: 'Aquatic Pack', sellprice: 300 , glicko: calculateGlicko(1696)},
    { name: 'Spring Frog', copies: 1533, value: calculateNewValue(300, 1533, 20, 75, 25.563), pack: 'Aquatic Pack' , sellprice: 300, glicko: calculateGlicko(1533)},
    { name: 'Lucky Frog', copies: 1735, value: calculateNewValue(300, 1735, 20, 75, 25.563), pack: 'Aquatic Pack', sellprice: 300 , glicko: calculateGlicko(1735)},
    { name: 'Lovely Frog', copies: 1755, value: calculateNewValue(300, 1755, 20, 75, 25.563), pack: 'Aquatic Pack' , sellprice: 300, glicko: calculateGlicko(1755)},

    // Rare Legendaries
    { name: 'Monkxy', copies: 1608, value: calculateNewValue(250, 1608, 30, 75, 25.563), pack: 'OG Pack' , sellprice: 250, glicko: calculateGlicko(1608)},
    { name: 'Black Blook', copies: 569, value: calculateNewValue(250, 569, 20, 0, 138.255), pack: 'Color Pack' , sellprice: 250, glicko: calculateGlicko(569)},
    { name: 'Megalodon', copies: 1557, value: calculateNewValue(250, 1557, 20, 75, 25.563), pack: 'Aquatic Pack' , sellprice: 250, glicko: calculateGlicko(1557)},
];

function filterBlooks() {
    const searchTerm = document.getElementById('blookSearch').value.toLowerCase();
    const resultsContainer = document.getElementById('results');

    // Check if the search term is empty
    if (!searchTerm.trim()) {
        resultsContainer.innerHTML = ''; // Clear the results container
        return;
    }

    const filteredBlooks = blookValues.filter(blook => blook.name.toLowerCase().includes(searchTerm));

    resultsContainer.innerHTML = ''; // Clear previous results

    if (filteredBlooks.length > 0) {
        // Sort the filtered blooks by name length (shorter names first)
        filteredBlooks.sort((a, b) => a.name.length - b.name.length);

        filteredBlooks.forEach(blook => {
            const blookItem = document.createElement('div');
            blookItem.className = 'blook-item';
            blookItem.innerHTML = `<strong>${blook.name}</strong><br>Copies: ${blook.copies}<br>Sell Price: ${blook.sellprice}<br>Value: ${blook.value}<br>Pack: ${blook.pack}<br>Glicko: ${calculateGlicko(blook.copies)}`;
            resultsContainer.appendChild(blookItem);
        });
    } else {
        const noResults = document.createElement('div');
        noResults.textContent = 'No matching blooks found.';
        resultsContainer.appendChild(noResults);
    }
}

// Function to calculate the new value based on the formula and box percentages
function calculateNewValue(sellprice, copies, packPrice, lowerRate, higherRate) {
    const roundedValue = Math.round(
      (sellprice * (12532 - copies)) / copies / (30 / packPrice) / ((100 / ((lowerRate + higherRate * 2)) * 2))
    );
  
    return roundedValue;
  }

function calculateGlicko(copies) {
    const Glicko = (12532 / copies).toFixed(1); // Round to the nearest tenth

    return Glicko;
}
