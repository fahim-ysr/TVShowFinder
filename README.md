# TV Show Finder Documentation

**Overview**

**The TV Show Finder is a web application that allows users to search for TV shows and view their images. It uses the TVMaze API to fetch show data.**

<br>

**Tech Stack**

    -> HTML5
    -> CSS3
    -> JavaScript
    -> Bulma CSS Framework
    -> Axios HTTP Client

<br>

**Key Features**

    -> Title:

        - Displays "TV Show Finder" at the top of the page.
        
        - Clicking on the title reloads the page, resetting the app.
        
        - The title changes color to white when hovered over.

    -> Search Functionality:

        - Users can enter a TV show name in the search box.
        
        - Clicking the "Search" button or pressing Enter initiates the search.

    -> API Integration:

        - The application integrates with the TVMaze API using Axios for HTTP requests.

        - Endpoint: https://api.tvmaze.com/search/shows?q=${searchTerm}
    
    -> Display Results:

        Shows images of TV shows that match the search query.
        Images are displayed in a grid layout, with 5 images per row on larger screens.

        Each image is clickable and links to the official site of the TV show.

    -> Error Handling:

        - If the search input is empty, it displays a "No input" message.
        
        - If no results are found, it shows a "Sorry no items found" message.
        

    -> Responsive Design:

        - Uses Bulma CSS framework for responsive grid layout.

        - Custom styles for title hover effect and image container.

        - The layout adjusts for different screen sizes.
        
<br>

**How to Use?**

    1. Get the app:

        Go to GitHub: [your-github-link]
        
        Click "Code" > "Download ZIP"
        
        Unzip the file
    
    2. Set up:
    
        Install Visual Studio Code
        
        In VS Code, install "Live Server" extension
    
    3. Run the app:

        Open the unzipped folder in VS Code
        
        Right-click "index.html"
        
        Choose "Open with Live Server"
    
    4. Use the app:

        Type a TV show name
        
        Click "Search"
        
        Click on images to visit show websites
        
        Click the title to reset
    
    5. Close:
    
        In VS Code, click "Port : 5500" at the bottom
        
        Choose "Stop Live Server"
        
        Enjoy!
