const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const prefix = '.';

// Global array of celebrities
const celebrities = [
  // Add your list of celebrities, artists, etc. here
  'Tom Cruise',
'Taylor Swift',
'Dwayne Johnson',
'Beyoncé',
'Leonardo DiCaprio',
'Rihanna',
'Angelina Jolie',
'Brad Pitt',
'Jennifer Lawrence',
'Chris Hemsworth',
'Katy Perry',
'Robert Downey Jr.',
'Emma Watson',
'Johnny Depp',
'Selena Gomez',
'Will Smith',
'Meryl Streep',
'Justin Bieber',
'Scarlett Johansson',
'Chris Evans',
'Adele',
'Hugh Jackman',
'Gigi Hadid',
'Ryan Reynolds',
'Sandra Bullock',
'Chris Pratt',
'Ariana Grande',
'Mark Wahlberg',
'Natalie Portman',
'Vin Diesel',
'Lady Gaga',
'Chris Pine',
'Taylor Lautner',
'Jennifer Aniston',
'Matt Damon',
'Emma Stone',
'Zac Efron',
'Anne Hathaway',
'George Clooney',
'Blake Lively',
'Jason Statham',
'Shakira',
'Ryan Gosling',
'Margot Robbie',
'Tom Hanks',
'Jennifer Lopez',
'Zoe Saldana',
'Channing Tatum',
'Kate Winslet',
'Cate Blanchett',
'Keanu Reeves',
'Kylie Jenner',
'Charlize Theron',
'Sophie Turner',
'Joaquin Phoenix',
'Gal Gadot',
'Bradley Cooper',
'Alicia Keys',
'Ben Affleck',
'Kate Hudson',
'Eddie Redmayne',
'Rami Malek',
'Penelope Cruz',
'John Legend',
'Kristen Stewart',
'Will Ferrell',
'Demi Lovato',
'Idris Elba',
'Gwyneth Paltrow',
'Mila Kunis',
'Jake Gyllenhaal',
'Michelle Obama',
'John Krasinski',
'Kristen Bell',
'James Franco',
'Natalie Dormer',
'Zayn Malik',
'Nicole Kidman',
'Adam Sandler',
'Viola Davis',
'Orlando Bloom',
'Dua Lipa',
'Tom Hardy',
'Emily Blunt',
'Daniel Radcliffe',
'Keira Knightley',
'Kit Harington',
'Gisele Bundchen',
'Jamie Foxx',
'Saoirse Ronan',
'Zachary Levi',
'Zendaya',
'Michael B. Jordan',
'Mila Jovovich',
'Joe Jonas',
'Emilia Clarke',
'Kevin Hart',
'Halle Berry',
'Harry Styles',
'Rachel McAdams',
'Colin Firth',
'Kristen Wiig',
'Julia Roberts',
'Justin Timberlake',
'Amy Adams',
'Nick Jonas',
'Mary-Kate Olsen',
'Ashton Kutcher',
'Olivia Wilde',
'Mark Ruffalo',
'Kate Beckinsale',
'Liam Hemsworth',
'Shay Mitchell',
'Chris Rock',
'Lea Michele',
'Edward Norton',
'Sophia Bush',
'Matt Smith',
'Cameron Diaz',
'Emma Roberts',
'Zachary Quinto',
'Kate Upton',
'Jason Momoa',
'Lupita Nyong o',
'Jared Leto',
'Victoria Beckham',
'Josh Hutcherson',
'Dakota Johnson',
'Russell Crowe',
'Leighton Meester',
'Michael Fassbender',
'Vanessa Hudgens',
'Samuel L. Jackson',
'Meghan Markle',
'Jeremy Renner',
'Gemma Chan',
'Jim Carrey',
'Naomi Campbell',
'Stephen Curry',
'Tom Holland',
'Elizabeth Olsen',
'Ansel Elgort',
'Rachel Weisz',
'Zoe Kravitz',
'Anthony Hopkins',
'Kendall Jenner',
'Bill Murray',
'Priyanka Chopra',
'Luke Evans',
'Emmy Rossum',
'Stephen Amell',
'Gillian Anderson',
'Tobey Maguire',
'Nina Dobrev',
'Casey Affleck',
'Camila Cabello',
'Jeff Goldblum',
'Hailee Steinfeld',
'Robert Pattinson',
'Amber Heard',
'Ryan Seacrest',
'Julianne Moore',
'Taron Egerton',
'Miranda Kerr',
'Paul Rudd',
'Mary Elizabeth Winstead',
'John Boyega',
'Lily Collins',
'Chris Tucker',
'Eva Mendes',
'Timothée Chalamet',
'Alicia Vikander',
'Tyler Perry',
'Rooney Mara',
'Jon Hamm',
'Emilia Fox',
'Daniel Craig',
'Kaley Cuoco',
'Andrew Garfield',
'Kerry Washington',
'Dave Franco',
'Marion Cotillard',
'Sebastian Stan',
'Chloe Grace Moretz',
'Gerard Butler',
'Suki Waterhouse',
'Michael Cera',
'Maggie Gyllenhaal',
'Adam Levine',
'Matt Damon',
'Emily Ratajkowski',
'John Travolta',
'Michelle Williams',
'Dylan O Brien ',
'Gina Rodriguez',
'Dave Bautista',
'Elle Fanning',
'Colin Farrell',
'Lana Del Rey',
'Idina Menzel',
'Jesse Eisenberg',
'Joey King',
'Ryan Phillippe',
'Rosamund Pike',
'Steve Carell',
'Emily VanCamp',
'Jude Law',
'Ruby Rose',
'James McAvoy',
'Ashley Benson',
'Sam Claflin',
'Zoe Sugg',
'Michael Keaton',
'Emilia McCarthy',
'Jason Bateman',
'Lena Headey',
'Jesse Williams',
'Nikki Reed',
'Kellan Lutz',
'Diane Kruger',
'KJ Apa',
'Sarah Jessica Parker',
'James Marsden',
'Ashley Greene',
'Armie Hammer',
'Lucy Hale',
'John Cena',
'Maggie Smith',
'Nicolas Cage',
'Hayden Panettiere',
'Joel Kinnaman',
'Kate Bosworth',
'Dominic Cooper',
'Jamie Chung',
'Al Pacino',
'Ellie Goulding',
'Jeffrey Dean Morgan',
'Chloë Grace Moretz',
'Wentworth Miller',
'Olivia Munn',
'Melissa McCarthy',
'Jude Law',
'Christina Hendricks',
'Dave Franco',
'Ellen Page',
'Kiefer Sutherland',
'Christoph Waltz',
'Emma Roberts',
'Jonathan Rhys Meyers',
'Anna Kendrick',
'Josh Gad',
'Lucy Liu',
'Jeremy Irons',
'Jenna Dewan',
'Sam Heughan',
'Shailene Woodley',
'Tobey Maguire',
'Rosario Dawson',
'Viggo Mortensen',
'Adelaide Kane',
'Richard Madden',
'Stana Katic',
'Christian Bale',
'Freida Pinto',
'Stephen Lang',
'Phoebe Tonkin',
'Sam Worthington',
'Christina Ricci',
'Milo Ventimiglia',
'Michelle Monaghan',
'Gerard Butler',
'Milla Jovovich',
'Evan Rachel Wood',
'Daniel Kaluuya',
'Alexandra Daddario',
'Gary Oldman',
'Laura Prepon',
'Ben Barnes',
'Kelly Clarkson',
'Kellan Lutz',
'Jessica Biel',
'Lee Pace',
'Kat Graham',
'Chadwick Boseman',
'Tamsin Egerton',
'Robert Sheehan',
'Kate Mara',
'James Franco',
'Alice Eve',
'Ezra Miller',
'Rose Byrne',
'Tom Hardy',
'Jessica Alba',
'Colin Firth',
'Teresa Palmer',
'Shawn Mendes',
'Sophie Turner',
'Chris Hemsworth',
'Amy Adams',
'Emma Stone',
'Zac Efron',
'Channing Tatum',
'Anne Hathaway',
'Jennifer Aniston',
'Ryan Gosling',
'Brad Pitt',
'Angelina Jolie',
'Daniel Radcliffe',
'Kristen Stewart',
'Natalie Portman',
'Johnny Depp',
'Jensen Ackles',
'Jared Padalecki',
'Tyler Hoechlin',
'Stephen Amell',
'Henry Cavill',
'Robert Pattinson',
'Chris Evans',
'Chris Pratt',
'Sebastian Stan',
'Sam Heughan',
'Henry Golding',
'Jamie Dornan',
'Idris Elba',
'Tom Hiddleston',
'James McAvoy',
'Kit Harington',
'John Boyega',
'Adam Driver',
'James Marsden',
'Oscar Isaac',
'Richard Madden',
'Andrew Lincoln',
'Tom Felton',
'Paul Wesley',
'Ian Somerhalder',
'Joseph Morgan',
'Jared Leto',
'Zac Efron',
'Robert Downey Jr.',
'Chris Hemsworth',
'Chris Evans',
'Chris Pratt',
'Dwayne Johnson',
'Jason Momoa',
'Ryan Reynolds',
'Brad Pitt',
'Leonardo DiCaprio',
'Johnny Depp',
'Will Smith',
'Hugh Jackman',
'George Clooney',
'Mark Wahlberg',
'Tobey Maguire',
'Keanu Reeves',
'Benedict Cumberbatch',
'Christian Bale',
'Joaquin Phoenix',
'Edward Norton',
'Daniel Radcliffe',
'Matt Damon',
'Bradley Cooper',
'Chris Pine',
'Tom Hardy',
'Russell Crowe',
'Jake Gyllenhaal',
'Samuel L. Jackson',
'Robert De Niro',
'Nicolas Cage',
'Steven Spielberg',
'Martin Scorsese',
'Quentin Tarantino',
'Christopher Nolan',
'James Cameron',
'Clint Eastwood',
'David Fincher',
'Tim Burton',
'Sofia Coppola',
'Greta Gerwig',
'Kathryn Bigelow',
'Patty Jenkins',
'Ryan Coogler',
'Ava DuVernay',
'Barry Jenkins',
'Chloé Zhao',
'Jane Campion',
'Lena Waithe',
'Jordan Peele',
'Guillermo del Toro',
'Ang Lee',
'Stephen Spielberg',
'Spike Jonze',
'Joel Coen',
'Ethan Coen',
'Wes Anderson',
'Darren Aronofsky',
'Alfonso Cuarón',
'Mel Brooks',
'Stanley Kubrick',
'Peter Jackson',
'Ridley Scott',
'Michael Bay',
'James Gunn',
'M. Night Shyamalan',
'Zack Snyder',
'Taika Waititi',
'Ryan Murphy',
'Shonda Rhimes',
'J.J. Abrams',
'David Lynch',
'Ryan Murphy',
'Chuck Lorre',
'Greg Berlanti',
'Shonda Rhimes',
'Vince Gilligan',
'Dan Harmon',
'Damon Lindelof',
'Noah Hawley',
'Ryan Murphy',
'Joss Whedon',
'David Chase',
'Matthew Weiner',
'Peter Morgan',
'Aaron Sorkin',
'Julian Fellowes',
'David Simon',
'Ronald D. Moore',
'Stephen King',
'George R.R. Martin',
'J.K. Rowling',
'Neil Gaiman',
'Haruki Murakami',
'Dan Brown',
'Gillian Flynn',
'Jojo Moyes',
'Paula Hawkins',
'John Green',
'George Orwell',
'J.R.R. Tolkien',
'Agatha Christie',
'Suzanne Collins',
'Khaled Hosseini',
'Stephenie Meyer',
'Philip Pullman',
'Ernest Hemingway',
'Jane Austen',
'F. Scott Fitzgerald',
'William Shakespeare',
'Arthur Conan Doyle',
'Roald Dahl',
'Charles Dickens',
'Virginia Woolf',
'J.D. Salinger',
'Aldous Huxley',
'Leo Tolstoy',
'Mark Twain',
'Oscar Wilde',
'Emily Bronte',
'Charlotte Bronte',
'Edgar Allan Poe',
'Homer',
'Victor Hugo',
'H.G. Wells',
'Mary Shelley',
'William Golding',
'Jonathan Swift',
'Joseph Heller',
'Jack Kerouac',
'Ayn Rand',
'Voltaire',
'Samuel Beckett',
'Anton Chekhov',
'Franz Kafka',
'Albert Camus',
'Gabriel Garcia Marquez',
'Gustave Flaubert',
'Ernesto Sabato',
'Fyodor Dostoevsky',
'John Steinbeck',
'James Joyce',
'Miguel de Cervantes',
'Walt Whitman',
'Ralph Waldo Emerson',
'Pablo Neruda',
'Emily Dickinson',
'Sylvia Plath',
'Langston Hughes',
'Maya Angelou',
'T.S. Eliot',
'Allen Ginsberg',
'Robert Frost',
'W.B. Yeats',
'William Blake',
'Charles Baudelaire',
'Rumi',
'Patti Smith',
'Virginia Woolf',
'John Keats',
'Pablo Picasso',
'Leonardo da Vinci',
'Vincent van Gogh',
'Michelangelo',
'Claude Monet',
'Georgia O Keeffe',
'Salvador Dali' ,
'Frida Kahlo',
'Andy Warhol',
'Jackson Pollock',
'Edvard Munch',
'Gustav Klimt',
'Henri Matisse',
'Rene Magritte',
'Paul Cézanne',
'Pierre-Auguste Renoir',
'Édouard Manet',
'Auguste Rodin',
'Camille Pissarro',
'Georges Seurat',
'Goya',
'Francisco de Zurbaran',
'Francisco Goya',
'Diego Velázquez',
'El Greco',
'Johannes Vermeer',
'Sandro Botticelli',
'Michelangelo Buonarroti',
'Raphael',
'Leonardo da Vinci',
'Titian',
'Donatello',
'Tintoretto',
'Peter Paul Rubens',
'Pieter Bruegel the Elder',
'Albrecht Dürer',
'Hieronymus Bosch',
'Jan van Eyck',
'Caspar David Friedrich',
'Edgar Degas',
'Henri de Toulouse-Lautrec',
'Paul Gauguin',
'Georges Braque',
'Paul Klee',
'Wassily Kandinsky',
'Piet Mondrian',
'Marc Chagall',
'Willem de Kooning',
'Mark Rothko',
'Andy Warhol',
'Jackson Pollock',
'Roy Lichtenstein',
'Salvador Dalí',
'Frida Kahlo',
'H.R. Giger',
'M.C. Escher',
'Johannes Vermeer',
'Claude Monet',
'Vincent van Gogh',
'Edvard Munch',
'Gustav Klimt',
'Georgia O Keeffe',
  // Add more names as needed
];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith(prefix)) {
    const command = message.content.slice(prefix.length).trim();

    if (command === 't') {
      askQuestion(message.channel);
    } else if (command === 'k') {
      playKissMarryKill(message.channel);
    }
  }
});

async function askQuestion(channel) {
  const questions = [
        
    'What is your favorite type of cuisine?',
'If you could visit any famous landmark, which one would you choose?',
'What is your favorite form of exercise?',
'If you could have any pet, what breed would you choose?',
'What is your favorite ice cream flavor?',
'If you could have any magical ability, what would it be?',
'What is your favorite time of year?',
'If you could meet any living person, who would you choose?',
'What is your favorite social media platform?',
'If you could learn to play any musical instrument, which one would you choose?',
'What is your favorite childhood toy?',
'If you could have any type of weather all year round, what would it be?',
'What is your favorite comedy movie?',
'If you could have a conversation with any fictional character, who would it be?',
'What is your favorite type of art?',
'If you could possess any Olympic-level skill, what would it be?',
'What is your favorite mode of transportation?',
'If you could witness any historical event, which one would you choose?',
'What is your favorite video game genre?',
'If you could have any magical item, what would it be?',
'What is your favorite holiday destination?',
'If you could have any job in the world, what would it be?',
'What is your favorite quote about life?',
'If you could have a meal with any celebrity, who would it be?',
'What is your favorite type of weather?',
'If you could have any natural talent, what would you choose?',
'What is your favorite childhood movie?',
'If you could visit any fictional world, where would you go?',
'What is your favorite pizza topping?',
'If you could have any superheros powers, whose powers would you choose?',
'What is your favorite indoor activity?',
'If you could have a conversation with any animal, which one would you choose?',
'What is your favorite social activity?',
'If you could have any futuristic technology, what would it be?',
'What is your favorite type of shoe?',
'If you could have a drink with any author, who would you choose?',
'What is your favorite type of flower?',
'If you could have any nickname, what would it be?',
'What is your favorite video game of all time?',
'If you could be a character in a TV show, which show would you choose?',
'What is your favorite type of weather for outdoor activities?',
'If you could have any piece of jewelry, what would it be?',
'What is your favorite historical era?',
'If you could learn any form of dance, which one would you choose?',
'What is your favorite type of breakfast food?',
'If you could meet any athlete, who would it be?',
'What is your favorite hobby to do with friends?',
'If you could have any accent, which one would you choose?',
'What is your favorite type of cookie?',
'If you could have any plant as a pet, what would you choose?',
'What is your favorite art medium?',
'If you could be a character in a book, which book would you choose?',
'What is your favorite type of weather for staying indoors?',
'If you could have any historical artifact, what would it be?',
'What is your favorite type of shoe to wear?',
'If you could have a meal with any musician, who would it be?',
'What is your favorite type of landscape?',
'If you could have any hairstyle, what would it be?',
'What is your favorite type of soup?',
'If you could meet any scientist, who would it be?',
'What is your favorite hobby to do alone?',
'If you could have any body modification, what would you choose?',
'What is your favorite type of furniture?',
'If you could visit any planet in the solar system, which one would you choose?',
'What is your favorite type of weather for a romantic evening?',
'If you could have any skill in the visual arts, what would it be?',
'What is your favorite type of bag?',
'If you could have a conversation with any mythological creature, which one would you choose?',
'What is your favorite type of pasta?',
'If you could meet any artist, who would it be?',
'What is your favorite type of landscape for photography?',
'If you could have any fashion accessory, what would it be?',
'What is your favorite type of sandwich?',
'If you could have a pet from any fictional world, which one would you choose?',
'What is your favorite type of music to dance to?',
'If you could learn any martial art, which one would you choose?',
'What is your favorite type of architecture?',
'If you could have any magical companion, what would it be?',
'What is your favorite type of breakfast cereal?',
'If you could meet any explorer, who would it be?',
'What is your favorite hobby for relaxation?',
'If you could have any natural ability, what would it be?',
'What is your favorite type of bagel?',
'If you could have a conversation with any historical leader, who would it be?',
'What is your favorite type of terrain for hiking?',
'If you could have any magical vehicle, what would it be?',
'What is your favorite type of sushi?',
'If you could meet any philosopher, who would it be?',
'What is your favorite type of drink?',
'If you could learn any form of self-defense, which one would you choose?',
'What is your favorite type of hairstyle?',
'If you could have any dessert named after you, what would it be?',
'What is your favorite type of bread?',
'If you could have a conversation with any musician, who would it be?',
'What is your favorite type of wildlife?',
'If you could have any art piece in your home, what would it be?',
'What is your favorite type of cheese?',
'If you could visit any historical monument, which one would you choose?',
'What is your favorite hobby for creativity?',
'If you could have any magical creature as a pet, what would it be?',
'What is your favorite type of breakfast pastry?',
'If you could meet any actor or actress, who would it be?',
'What is your favorite type of body of water?',
'If you could have any piece of technology, what would it be?',
'What is your favorite type of meat?',
'If you could learn any type of cooking, which cuisine would you choose?',
'What is your favorite type of hat?',
'If you could have a conversation with any sports legend, who would it be?',
'What is your favorite type of salad?',
'If you could meet any astronaut, who would it be?',
'What is your favorite hobby for adventure?',
'If you could have any form of telepathy, what would it be?',
'What is your favorite type of hot beverage?',
'If you could learn any form of visual art, which one would you choose?',
'What is your favorite type of jewelry?',
'If you could have a conversation with any historical figure, who would it be?',
'What is your favorite type of weather for outdoor photography?',
'If you could have any musical instrument, what would it be?',
'What is your favorite type of snack?',
'If you could meet any influential person, who would it be?',
'What is your favorite type of landscape for painting?',
'If you could have any type of footwear, what would it be?',
'What is your favorite type of pie?',
'If you could have a pet from any mythological world, which one would you choose?',
'What is your favorite type of music to relax to?',
'If you could learn any form of dance, which culture would you choose?',
'What is your favorite type of sculpture?',
'If you could have any athletic ability, what would it be?',
'What is your favorite type of bag to carry?',
'If you could have a conversation with any legendary creature, which one would it be?',
'What is your favorite type of noodle?',
'If you could meet any influential leader, who would it be?',
'What is your favorite type of drink to cool down on a hot day?',
'If you could learn any form of martial arts, which one would you choose?',
'What is your favorite type of hairstyle to have?',
'If you could have any dessert named after you, what would the ingredients be?',
'What is your favorite type of bread to eat?',
'If you could have a conversation with any musician, who would it be?',
'What is your favorite type of wildlife to observe?',
'If you could have any piece of artwork in your home, what would it be?',
'What is your favorite type of cheese to eat?',
'If you could visit any ancient civilization, which one would you choose?',
'What is your favorite hobby for self-expression?',
'If you could have any mythical creature as a pet, what would it be?',
'What is your favorite type of breakfast pastry to indulge in?',
'If you could meet any acclaimed actor or actress, who would it be?',
'What is your favorite type of body of water to swim in?',
'If you could have any technological device, what would it be?',
'What is your favorite type of meat to cook?',
'If you could learn any style of cuisine, which one would you choose?',
'What is your favorite type of hat to wear?',
'If you could have a conversation with any sports icon, who would it be?',
'What is your favorite type of salad to eat?',
'If you could meet any astronaut or space explorer, who would it be?',
'What is your favorite hobby for adrenaline rushes?',
'If you could have any form of telekinesis, what would it be?',
'What is your favorite type of hot beverage to enjoy?',
'If you could learn any form of visual art, which style would you choose?',
'What is your favorite type of jewelry to wear?',
'If you could have a conversation with any historical figure, who would it be?',
'What is your favorite type of landscape to photograph?',
'If you could have any musical instrument, what would you play?',
'What is your favorite type of snack to munch on?',
'If you could meet any influential person, who would it be?',
'What is your favorite type of landscape to paint?',
'If you could have any type of footwear, what style would you choose?',
'What is your favorite type of pie to savor?',
'If you could have a pet from any mythological world, which creature would you choose?',
'What is your favorite type of music to unwind to?',
'If you could learn any cultural dance, which one would you choose?',
'What is your favorite type of sculpture to admire?',
'If you could have any athletic ability, what would you excel at?',
'What is your favorite type of bag to use?',
'If you could have a conversation with any legendary creature, which one would it be?',
'What is your favorite type of noodle dish?',
'If you could meet any influential leader, who would it be?',
'What is your favorite type of drink to quench your thirst?',
'If you could learn any martial art, which discipline would you choose?',
'What is your favorite type of hairstyle to try?',
'If you could have any dessert named after you, what would it be called?',
'What is your favorite type of bread for sandwiches?',
'If you could have a conversation with any musician, who would you choose?',
'What is your favorite type of wildlife to observe in their natural habitat?',
'If you could have any piece of artwork in your home, what would it depict?',
'What is your favorite type of cheese for pairing with wine?',
'If you could visit any ancient civilization, which one would you explore?',
'What is your favorite hobby for creative expression?',
'If you could have any mythical creature as a pet, which one would you adopt?',
'What is your favorite type of breakfast pastry to indulge in?',
'If you could meet any acclaimed actor or actress, who would it be?',
'What is your favorite type of body of water to swim in?',
'If you could have any technological device, what would be its primary function?',
'What is your favorite type of meat for barbecuing?',
'If you could learn any style of cuisine, which cultures food would you master?',
'What is your favorite type of hat to wear on a sunny day?',
'If you could have a conversation with any sports icon, who would it be?',
'What is your favorite type of salad to enjoy as a refreshing side dish?',
'If you could meet any astronaut or space explorer, who would it be?',
'What is your favorite hobby for seeking thrills and excitement?',
'If you could have any form of telekinesis, what power would you possess?',
'What is your favorite type of hot beverage to sip on a chilly evening?',
'If you could learn any form of visual art, which medium would you choose?',
'What is your favorite type of jewelry to wear on special occasions?',
'If you could have a conversation with any historical figure, who would it be and why?',
'What is your favorite type of landscape to capture through photography?',
'If you could play any musical instrument, which one would you choose?',
'What is your favorite type of snack to munch on while watching movies?',
'If you could meet any influential person, whether alive or deceased, who would it be?',
'What is your favorite type of landscape to paint on a canvas?',
'If you could have any type of footwear, what style would you opt for?',
'What is your favorite type of pie to indulge in for dessert?',
'If you could have a pet from any mythological world, which creature would you choose as a companion?',
'What is your favorite type of music to relax and unwind after a long day?',
'If you could learn any cultural dance, which one would you master the moves of?',
'What is your favorite type of sculpture to appreciate its craftsmanship?',
'If you could have any athletic ability, what physical feat would you excel at?',
'What is your favorite type of bag to carry your belongings in style?',
'If you could have a conversation with any legendary creature, which mythical being would you choose?',
'What is your favorite type of noodle dish to savor its flavors?',
'If you could meet any influential leader from history, who would you have a discussion with?',
'What is your favorite type of drink to quench your thirst on a hot summer day?',
'If you could learn any martial art, which combat discipline would you master?',
'What is your favorite type of hairstyle to experiment with different looks?',
'If you could have any dessert named after you, what would it taste like and why?',
'What is your favorite type of bread to use for making sandwiches?',
'If you could have a conversation with any musician, who would you love to talk to?',
'What is your favorite type of wildlife to observe in their natural habitat?',
'If you could have any piece of artwork in your home, what would it depict and why?',
'What is your favorite type of cheese to enjoy with a glass of wine?',
'If you could visit any ancient civilization, which one would you choose to explore?',
'What is your favorite hobby for expressing your creativity?',
'If you could have any mythical creature as a pet, which one would you adopt and why?',
'What is your favorite type of breakfast pastry to treat yourself with?',
'If you could meet any acclaimed actor or actress, who would it be and why?',
'What is your favorite type of body of water to swim in and cool off?',
'If you could have any technological device, what would be its most useful feature?',
'What is your favorite type of meat to cook for a delicious meal?',
'If you could learn any style of cuisine, which cultures culinary techniques would you master?',
'What is your favorite type of hat to wear on a sunny day outdoors?',
'If you could have a conversation with any sports icon, who would you choose to talk to?',
'What is your favorite type of salad to enjoy as a healthy and refreshing dish?',
'If you could meet any astronaut or space explorer, who would you have a conversation with?',
'What is your favorite hobby for seeking thrills and adrenaline rushes?',
'If you could have any form of telekinesis, what power would you possess and how would you use it?',
'What is your favorite type of hot beverage to warm up during chilly weather?',
'If you could learn any form of visual art, which artistic medium would you specialize in?',
'What is your favorite type of jewelry to wear for special occasions?',
'If you could have a conversation with any historical figure, who would it be and what would you ask them?',
'What is your favorite type of landscape to capture through photography?',
'If you could play any musical instrument, which one would you choose to learn and master?',
'What is your favorite type of snack to munch on while relaxing or watching movies?',
'If you could meet any influential person, whether alive or deceased, who would you choose to meet and why?',
'What is your favorite type of landscape to paint on a canvas and express your artistic vision?',
'If you could have any type of footwear, what style of shoes would you prefer for comfort and fashion?',
'What is your favorite type of pie to indulge in as a delicious dessert treat?',
'If you could have a pet from any mythological world, which creature would you choose as a companion and why?'
  ];

  const randomQuestion = questions[Math.floor(Math.random() * questions.length)];

  const embed = new MessageEmbed()
    .setColor('#695E93')
    .setTitle(`**${randomQuestion}**`)
    .setFooter('Reply with your answer.');

  await channel.send({ embeds: [embed] });
}

function playKissMarryKill(channel) {
  const randomCelebrities = getRandomCelebrities(3);
  const embed = generateKissMarryKillEmbed(randomCelebrities);

  channel.send({ embeds: [embed] });
}

function getRandomCelebrities(count) {
  const shuffledCelebrities = celebrities.sort(() => 0.5 - Math.random());
  return shuffledCelebrities.slice(0, count);
}

function generateKissMarryKillEmbed(celebrities) {
  const embed = new MessageEmbed()
    .setColor('#695E93')
    .setTitle('Kiss, Marry, Kill')
    .setDescription(`**${celebrities[0]}**\n**${celebrities[1]}**\n**${celebrities[2]}**`);

  return embed;
}

client.login('');
