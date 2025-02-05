        let currentIndex = 0;
        const carouselSlide = document.getElementById('carousel-slide');
        const carouselItems = document.querySelectorAll('.carousel-item');
        const carouselContainer = document.getElementById('carousel-container');

        const colors = ['#1a1a2e', '#282846', '#6a0dad', '#494973', '#1a1a2e']; // Cores para o carrossel

        function updateCarousel() {
            const slideWidth = carouselItems[0].clientWidth;
            carouselSlide.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
            carouselContainer.style.backgroundColor = colors[currentIndex % colors.length]; // Altera a cor de fundo
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % carouselItems.length;
            updateCarousel();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
            updateCarousel();
        }

        setInterval(nextSlide, 8000);

        function showSports() {
            document.getElementById('sports').style.display = 'block';
            document.getElementById('sport-image').style.display = 'none';
        }

        function showSportImage(sport) {
            const date = document.getElementById('date').value;
            const imgContainer = document.getElementById('sport-img-container');
            imgContainer.innerHTML = ''; // Limpa o container de imagens

            // Mapear imagens para cada esporte e data
            const sportImages = {
                'futebol': {
                    '1': ['internacionaldezembro4.png'],
                    '2': ['internacional2025.png'],
                    '3': ['brasil2025.png','internacional2025-01.png'],
                    '4': ['brasil2025-2.png', 'internacional2025-02.png'],
                    '5': ['brasil2025-3.png','internacional2025-03.png'],
                    '6': ['fotos2025/brasilnovo1.png','fotos2025/INTERNACIONALNOVO1.png'],
                    '7': []// Adicionado intervalo 7
                    
                },
                'tennis': {
                    '1': ['tennisdezemrbro3.png'],
                    '2': ['infelizmente.png'],
                    '3': ['tennis2025.png'],
                    '4': ['manu.webp'],
                    '5': ['manu.webp'],
                    '6': ['fotos2025/tenisnovo1.png'],
                    '7': ['manu.webp'],
                     // Adicionado intervalo 7
                },
                'basquete': {
                    '1': ['basquetedezembro4.png'],
                    '2': ['basquete2025.png'],
                    '3': ['basquete2025-01.png'],
                    '4': ['basquete2025-02.png'],
                    '5': ['basquete2025-03.png'],
                    '6': ['fotos2025/basquetenovo1.png'],
                    '7': ['manu.webp']
                     // Adicionado intervalo 7
                },
                'cs': {
                    '1': ['csdezembrio2.png'],
                    '2': ['infelizmente.png'],
                    '3': ['infelizmente.png'],
                    '4': ['infelizmente.png'],
                    '5': ['infelizmente.png'],
                    '6': ['infelizmente.png'],
                    '7': ['infelizmente.png'] // Adicionado intervalo 7
                },
                'mma': {
                    '1': ['infelizmente.png'],
                    '2': ['infelizmente.png'],
                    '3': ['MMA2025.png'],
                    '4': ['MMA2025-01.png'],
                    '5': ['infelizmente.png'],
                    '6': ['manu.webp'],
                    '7': ['manu.webp']
                     // Adicionado intervalo 7
                },
                'vollei': {
                    '1': ['vollei26-01.png'],
                    '2': ['infelizmente.png'],
                    '3': ['infelizmente.png'],
                    '4': ['manu.webp'],
                    '5': ['vollei23-29.png'],
                    '6': [],
                    '7': [] // Adicionado intervalo 7
                }
            };

            // Verifica se há imagens para o esporte e data selecionados
            if (sportImages[sport] && sportImages[sport][date]) {
                const images = sportImages[sport][date];
                images.forEach(imgSrc => {
                    imgContainer.innerHTML += `<img src="${imgSrc}" alt="${sport} image" style="width: 100%; max-width: 1000px;">`;
                });
                document.getElementById('sport-image').style.display = 'block'; // Exibe a seção de imagens
            } else {
                imgContainer.innerHTML = `<p>Imagens não disponíveis para este esporte e data.</p>`;
            }
        }

