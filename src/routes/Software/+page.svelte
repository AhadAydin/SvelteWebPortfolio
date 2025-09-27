<script>
  import PerspectiveCard from "../Components/PerspectiveCard.svelte";
  import PerspectiveEntry from "../Components/PerspectiveEntry.svelte";
  import FluidBackground from "../Components/FluidBackground.svelte";
  import ImageViewer from "../Components/ImageViewer.svelte";
  import Footer from "../Components/Footer.svelte";

  const welcomeHeader = "Software Development";
  const welcomeSubheader = "Projects";
  const welcomeSubheader2 = "Mini Projects";
  const welcomeMessage = `I focus on Full-Stack Development, Computer Vision, and Machine Learning, working with <u>Svelte</u> on the frontend, <u>Django & PostgreSQL</u> on the backend, <u>OpenCV</u> for vision, and <u>PyTorch</u> for ML.`;

    let view_image = $state(false);
    let current_images = $state([]);
    let current_idx = $state(0);
    function imageViewFunc(images,idx,active) {
        view_image = active;
        if (images) {  
            current_images = images;
            current_idx = idx;
            console.log("imgs - ", images);
            console.log("idx - ", idx);
            console.log(current_images);
        }
    }

  let projects = [
    {header: "Firstly, This Web Portfolio", texts:[`
    This portfolio was developed using <a class="font-bold text-amber-200 hover:text-blue-200" href="https://svelte.dev/" target="_blank">Svelte</a> and <a class="font-bold text-amber-200 hover:text-blue-200" href="https://threejs.org/" target="_blank">Three.js</a>. 
    While I incorporated a visually striking <em>shader</em>, I structured the content 
    like a <em>readable text document</em> to enhance clarity. 
    I aimed for <strong>simplicity</strong> while still allowing interactive elements.
  `],images:["site.png"]},

    {header: "Rental House Price Predictor", texts:["This project was a collaborative effort with a friend for our Data Mining course. We developed a Python code that scrapes rental apartment data in Istanbul from various real estate websites, storing the collected data in a CSV file. We used Selenium and ChromeDriver for data scraping. The code then processes over twenty features, organizing them for use in the model. It analyzes and predicts prices using various models such as ScikitLearn's random forest and decision tree. During this process, we compare the prediction scores across models to identify the most effective one."],images:["rhp0.png","rhp1.png","rhp2.png"] ,link: "https://github.com/AhadAydin/Rental-House-Price-Prediction",contribs:[{name:"C4MCI", link:"https://github.com/C4MCI"}]},

    {header: "Traffic Sign Detector", texts:["I developed this project for a Computer Vision course. The Python code I wrote detects traffic signs in real time using traditional computer vision techniques instead of modern machine learning-based methods. It only uses the openCV's cv2 library to accomplish this. First, it removes unnecessary colors from the image captured by the camera and then applies edge detection. After filtering the image, it performs feature extraction and uses template matching with predefined traffic sign images on the detected objects. While displaying the camera feed, the code draws boxes around the detected signs and labels them in real time."
    ],images:["tsd3.png","tsd1.png","tsd2.png","tsd0.png"] ,link: "https://github.com/AhadAydin/Traffic-Sign-Detection",},

    {header: "Graph Generating And Partitioning Algorithms Comparisons", texts:["This project was a collaboration with two friends for the Algorithm Analysis course. While we didn't create algorithms for NP-hard problems, we thoroughly examined existing algorithms, exploring how they function and comparing their performance. The code primarily tests some graph creation algorithms from the NetworkX library. Subsequently, it evaluates various graph partitioning models from the Sklearn library, showcasing their speed and effectiveness. Additionally, we utilized Matplotlib to visually display model comparisons."],images:["gp0.png","gp1.png","gp3.png","gp4.png"] ,link: "/https://github.com/AhadAydin/Comparing-Graph-Partitioning-Algorithms", contribs:[{name:"sudenazimal", link:"https://github.com/sudenazimal"},{name:"duygukaradadas", link:"https://github.com/duygukaradadas"}]},

    {header: "An Educational Mobile App For Children", texts:["This project was developed with a classmate for the Android Programming course by using Android Studio. The application is designed to be educational and instructive for children aged 6-8. It encompasses lessons on directions, time, days of the week, and similar topics. Additionally, there are memory and grammar-enhancing games such as picture matching and word recognition. To use the app, users need to create an account, and we employed Firebase for account information, password verification, and tracking earned XP values. The interface is tailored to be dyslexia-friendly, considering color schemes and fonts. This project provided us with significant opportunities for improving our skills in database management and UI design."],images:["ss0-1.png","ss3 (3).png","ss2 (3).png","ss4 (3).png"] ,link: "https://github.com/AhadAydin/Educational-App-For-Kids",contribs:[{name:"sudenazimal", link:"https://github.com/sudenazimal"}]},

    {header: "Movie Rating Predictor", texts:["This project, created in collaboration with the same group, was developed for the Data Types and Algorithms course. Written in C++, the code reads a dataset containing information on over 1,000,000 users, movies, and ratings. Using the k-nearest neighbors method, it predicts the ratings users would give to unrated movies. The program employs hashing to store these predictions in a CSV file."],images:["knn.gif"] ,link: "https://github.com/AhadAydin/Movie-Rating-Predictor", contribs:[{name:"sudenazimal", link:"https://github.com/sudenazimal"},{name:"duygukaradadas", link:"https://github.com/duygukaradadas"}]},
  ];
  let miniprojects = [
    {header: "TCP File Transfer", texts:["A Python project that facilitates file exchange over a local area network using TCP."],images:["tcp.png"] ,link: "https://github.com/AhadAydin/Broadcasting-And-File-Sharing-With-Python"},
    {header: "Marching Squares Algorithm", texts:["Marching squares algorithm and visualizer, made with p5.js."],images:["marching.png"] ,link: "https://github.com/AhadAydin/Marching-Squares-Algorithm-Visualizer"},
    {header: "P5.js Tic-Tac-Toe", texts:["Playable Tic-Tac-Toe game with an AI opponent, made with p5.js."],images:["tictactoe.png"] ,link: "https://github.com/AhadAydin/TicTacToe-AI"},
    ]
</script>

<ImageViewer active={view_image} images={current_images} index={current_idx} imageViewFunc={imageViewFunc} />


<main class="overflow-hidden">
    <FluidBackground speed={0.1} r={0.05} g={-0.35} b={-0.35} />
    <div class="min-h-screen flex flex-col justify-center items-center text-white">

        <h1 class="w-[90%] text-center text-white font-bold z-1 
        text-5xl sm:text-5xl md:text-7xl lg:text-8xl
        mt-[36%] sm:mt-[29%] md:mt-[25%] lg:mt-[14%]
        mb-[22%] sm:mb-[19%] md:mb-[12%] lg:mb-[10%]">{welcomeHeader}</h1>

        <div class="w-[88%] sm:w-[82%] md:w-[76%] lg:w-[60%] flex flex-col justify-center items-center">
            <p class="w-full text-center text-thin text-lg z-1 mb-16 bg-black/30 backdrop-blur-xl rounded-xs px-4 py-4 ">{@html welcomeMessage}</p>
            
            <h2 class="w-full text-4xl text-left mb-4 text-white font-bold  z-1 ">{welcomeSubheader}</h2>
            <div class="flex flex-col space-y-4 mb-16 w-full">
                {#each projects as project}
                    <PerspectiveEntry header={project.header} texts={project.texts} images={project.images} imageViewFunc={imageViewFunc} link={project.link} contribs={project.contribs}/>
                {/each}
            </div>

            <h2 class="w-full text-4xl text-left mb-4 text-white font-bold  z-1 ">{welcomeSubheader2}</h2>

            <div class="flex flex-col space-y-4 mb-16 w-full">
                {#each miniprojects as project}
                    <PerspectiveEntry header={project.header} texts={project.texts} images={project.images} imageViewFunc={imageViewFunc} link={project.link}/>
                {/each}
            </div>
        </div>

        
        

    </div>
    <Footer/>
</main>
