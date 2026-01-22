const books = [
    {
        "titulo": "O Peregrino",
        "autor": "John Bunyan",
        "cover": new URL("https://cemporcentocristao.vteximg.com.br/arquivos/ids/176604-1000-1000/O-Peregrino-de-John-Bunyan-Editora-Principios-9788594318800.jpg?v=637125429154530000"),
        "price": 19.99,
        "sinopse": "Uma alegoria cristã clássica que narra a jornada espiritual de um homem chamado Cristão, que deixa sua cidade natal para alcançar a Cidade Celestial, enfrentando tentações e perigos ao longo do caminho."
    },
    {
        "titulo": "Anne de Green Gables",
        "autor": "L.M. Montgomery",
        "cover": new URL("https://tse3.mm.bing.net/th/id/OIP.qgArUVZxaX_aP8xkwVFARwHaLd?rs=1&pid=ImgDetMain&o=7&rm=3"),
        "price": 25.50,
        "sinopse": "A história de Anne Shirley, uma órfã imaginativa e ruiva, que é adotada por engano por um casal de irmãos em Prince Edward Island, Canadá, e suas aventuras enquanto cresce."
    },
    {
        "titulo": "1984",
        "autor": "George Orwell",
        "cover": new URL("https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL.jpg"),
        "price": 22.00,
        "sinopse": "Um romance distópico que explora temas de totalitarismo, vigilância e controle governamental em uma sociedade onde o Grande Irmão está sempre observando."
    },
    {
        "titulo": "One Piece - Volume 1",
        "autor": "Eiichiro Oda",
        "cover": new URL("https://tse4.mm.bing.net/th/id/OIP.fwv0a2lvZERdu9DBaaM2VQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"),
        "price": 15.99,
        "sinopse": "Monkey D. Luffy começa sua jornada como pirata em busca do tesouro One Piece, reunindo uma tripulação diversificada e enfrentando desafios épicos no Grand Line."
    },
    {
        "titulo": "Harry Potter e a Pedra Filosofal",
        "autor": "J.K. Rowling",
        "cover": new URL("https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg"),
        "price": 28.99,
        "sinopse": "Harry Potter descobre que é um bruxo e é convidado para estudar na Escola de Magia e Bruxaria de Hogwarts, onde faz amigos e enfrenta o malvado Voldemort."
    },
    {
        "titulo": "Naruto - Volume 1",
        "autor": "Masashi Kishimoto",
        "cover": new URL("https://tse1.mm.bing.net/th/id/OIP.VEyToBlAR-1uusF1O0VeuQHaLE?rs=1&pid=ImgDetMain&o=7&rm=3"),
        "price": 14.99,
        "sinopse": "Naruto Uzumaki, um jovem ninja com um demônio selado dentro dele, sonha em se tornar Hokage e ganha respeito através de suas habilidades e determinação."
    },
    {
        "titulo": "O Senhor dos Anéis: A Sociedade do Anel",
        "autor": "J.R.R. Tolkien",
        "cover": new URL("https://tse1.mm.bing.net/th/id/OIP.tVWH-7yro6_4nXUE5c1gygAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"),
        "price": 35.00,
        "sinopse": "Frodo Bolseiro herda o Anel do Poder e deve destruí-lo na Montanha da Perdição, acompanhado por uma companhia de hobbits, elfos, anões e homens."
    },
    {
        "titulo": "Attack on Titan - Volume 1",
        "autor": "Hajime Isayama",
        "cover": new URL("https://m.media-amazon.com/images/I/81qPzeEO5IL.jpg"),
        "price": 16.50,
        "sinopse": "Em um mundo onde a humanidade é ameaçada por titãs gigantes, Eren Yeager jura vingança após sua mãe ser devorada, unindo-se ao Corpo de Exploração."
    },
    {
        "titulo": "Dom Quixote",
        "autor": "Miguel de Cervantes",
        "cover": new URL("https://tse3.mm.bing.net/th/id/OIP.Rvy7bm8xKcY48HcRxJ9LlgHaKi?rs=1&pid=ImgDetMain&o=7&rm=3"),
        "price": 30.00,
        "sinopse": "As aventuras cômicas de um fidalgo que se torna um cavaleiro andante, acompanhado por seu fiel escudeiro Sancho Pança, em uma sátira à cavalaria medieval."
    },
    {
        "titulo": "Death Note - Volume 1",
        "autor": "Tsugumi Ohba",
        "cover": new URL("https://http2.mlstatic.com/D_NQ_NP_626998-MLU69415911992_052023-O.webp"),
        "price": 13.99,
        "sinopse": "Light Yagami encontra um caderno que permite matar qualquer pessoa escrevendo seu nome, e decide usá-lo para criar um mundo sem crime, tornando-se Kira."
    },
    {
        "titulo": "A Revolução dos Bichos",
        "autor": "George Orwell",
        "cover": new URL("https://tse2.mm.bing.net/th/id/OIP.1CUHpML5URcGSqhL4xrncwHaKu?rs=1&pid=ImgDetMain&o=7&rm=3"),
        "price": 18.50,
        "sinopse": "Uma fábula política sobre animais de uma fazenda que se rebelam contra seus donos humanos, mas acabam criando um regime opressivo liderado pelos porcos."
    },
    {
        "titulo": "Fullmetal Alchemist - Volume 1",
        "autor": "Hiromu Arakawa",
        "cover": new URL("https://tse2.mm.bing.net/th/id/OIP.4vyIyTmueW_9RTyD9o4fHQHaKt?rs=1&pid=ImgDetMain&o=7&rm=3"),
        "price": 15.99,
        "sinopse": "Os irmãos Edward e Alphonse Elric tentam ressuscitar sua mãe através de alquimia, mas pagam um preço alto, levando-os a uma jornada para recuperar seus corpos."
    },
    {
        "titulo": "Cem Anos de Solidão",
        "autor": "Gabriel García Márquez",
        "cover": new URL("https://tse3.mm.bing.net/th/id/OIP.EKtyRshEFT46r-iJS9P3VgHaKo?rs=1&pid=ImgDetMain&o=7&rm=3"),
        "price": 32.00,
        "sinopse": "A saga da família Buendía em Macondo, misturando realismo mágico com temas de solidão, amor e destino ao longo de gerações."
    },
    {
        "titulo": "Bleach - Volume 1",
        "autor": "Tite Kubo",
        "cover": new URL("https://tse4.mm.bing.net/th/id/OIP.NO75okcj3_K_gpsObGYFVwHaLH?rs=1&pid=ImgDetMain&o=7&rm=3"),
        "price": 14.99,
        "sinopse": "Ichigo Kurosaki ganha poderes de Shinigami e deve proteger o mundo dos vivos dos espíritos malignos, enquanto lida com ameaças sobrenaturais."
    },
    {
        "titulo": "O Pequeno Príncipe",
        "autor": "Antoine de Saint-Exupéry",
        "cover": new URL("https://th.bing.com/th/id/R.9402d11783eea63d690b1a0413e97832?rik=KrHUF%2bQZXWQClA&riu=http%3a%2f%2f3.bp.blogspot.com%2f-66bDvtgSvUk%2fVdaNRT6Yn5I%2fAAAAAAAAEus%2fmsPAsK_HcpM%2fs1600%2fOPequenoPrincipe_0.jpg&ehk=v4xxOxgw8ldl8R6H2v%2bLu7%2bY57mNmIl8YpDd%2b6IoGrs%3d&risl=&pid=ImgRaw&r=0"),
        "price": 12.99,
        "sinopse": "Um piloto cai no deserto e encontra um menino vindo de outro planeta, que ensina lições profundas sobre vida, amor e amizade através de suas aventuras."
    },
    {
        "titulo": "Dragon Ball - Volume 1",
        "autor": "Akira Toriyama",
        "cover": new URL("https://th.bing.com/th/id/R.f65f7a02616a43fbde52d551cd543642?rik=D4yQO2YBxZHGNQ&pid=ImgRaw&r=0"),
        "price": 13.50,
        "sinopse": "Goku, um menino com cauda de macaco, encontra Bulma e começa uma jornada em busca das Esferas do Dragão, enfrentando guerreiros poderosos."
    },
    {
        "titulo": "A Metamorfose",
        "autor": "Franz Kafka",
        "cover": new URL("https://tse1.mm.bing.net/th/id/OIP.V0SFpgZ9Ulmw0DAZHBcHQwHaKp?rs=1&pid=ImgDetMain&o=7&rm=3"),
        "price": 16.00,
        "sinopse": "Gregor Samsa acorda transformado em um inseto gigante, e sua família deve lidar com as consequências dessa mudança absurda e alienante."
    },
    {
        "titulo": "My Hero Academia - Volume 1",
        "autor": "Kohei Horikoshi",
        "cover": new URL("https://tse1.mm.bing.net/th/id/OIP.4Hd3y4BiY1B2lB1Jfsl6AwHaLH?rs=1&pid=ImgDetMain&o=7&rm=3"),
        "price": 15.99,
        "sinopse": "Em um mundo onde quase todos têm superpoderes, Izuku Midoriya, que nasceu sem poderes, sonha em se tornar um herói e é treinado por All Might."
    },
    {
        "titulo": "Crime e Castigo",
        "autor": "Fiódor Dostoiévski",
        "cover": new URL("https://m.media-amazon.com/images/I/81C1c9Ec03L._SL1500_.jpg"),
        "price": 27.00,
        "sinopse": "Raskólnikov, um estudante pobre, comete um assassinato para provar sua teoria de que pessoas extraordinárias podem transgredir a lei, mas é atormentado pela culpa."
    },
    {
        "titulo": "One Punch Man - Volume 1",
        "autor": "ONE",
        "cover": new URL("https://th.bing.com/th/id/R.14320663905a889b791b29989273e8e0?rik=YrNl5EzDHO58aw&pid=ImgRaw&r=0"),
        "price": 14.99,
        "sinopse": "Saitama, um herói que derrota qualquer inimigo com um soco, luta contra o tédio e busca um desafio real em um mundo cheio de vilões e heróis."
    },
    {
        "titulo": "O Grande Gatsby",
        "autor": "F. Scott Fitzgerald",
        "cover": new URL("https://m.media-amazon.com/images/I/81Ph4QRq1gL._SL1500_.jpg"),
        "price": 20.99,
        "sinopse": "Jay Gatsby, um milionário misterioso, organiza festas extravagantes para reconquistar seu amor perdido, Daisy, em uma crítica à sociedade americana dos anos 1920."
    },
    {
        "titulo": "Demon Slayer - Volume 1",
        "autor": "Koyoharu Gotouge",
        "cover": new URL("https://tse4.mm.bing.net/th/id/OIP.xoQ0toa3bX8umYkYMqZ2SAHaLH?rs=1&pid=ImgDetMain&o=7&rm=3"),
        "price": 16.50,
        "sinopse": "Tanjiro Kamado se torna um caçador de demônios para vingar sua família e salvar sua irmã Nezuko, que foi transformada em demônio."
    },
    {
        "titulo": "Orgulho e Preconceito",
        "autor": "Jane Austen",
        "cover": new URL("https://tse3.mm.bing.net/th/id/OIP.ZzKmB-THnkOkmtBlYgRLVAHaLO?rs=1&pid=ImgDetMain&o=7&rm=3"),
        "price": 24.00,
        "sinopse": "Elizabeth Bennet navega pelas complexidades do amor, classe social e casamento na Inglaterra do século XIX, desafiando as expectativas da sociedade."
    },
    {
        "titulo": "Tokyo Ghoul - Volume 1",
        "autor": "Sui Ishida",
        "cover": new URL("https://http2.mlstatic.com/D_NQ_NP_606825-MLV72428841163_102023-O.webp"),
        "price": 15.99,
        "sinopse": "Ken Kaneki é transformado em um meio-ghoul após um transplante de órgãos e deve equilibrar sua humanidade com sua nova natureza predatória em Tóquio."
    },
    {
        "titulo": "Moby Dick",
        "autor": "Herman Melville",
        "cover": new URL("https://th.bing.com/th/id/R.5936c4effa88caa7d26e44b608d74f44?rik=1u0Ds6z%2fGkrwYA&pid=ImgRaw&r=0"),
        "price": 29.99,
        "sinopse": "O capitão Ahab embarca em uma obsessiva caçada à baleia branca Moby Dick, simbolizando a luta do homem contra o destino e a natureza."
    }
];