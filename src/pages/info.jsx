import '../index.css'

function Info() {

  return(
    <div className='infoBox'>
      <div className='infotextBox'>
        <h1>INFO</h1>
        <h2>WHAT?</h2>
        <p>This website is a companion to the Wordlers discord group. It contains various stats and customs achievments for the 
          gaymers who have devoted themselves to spelling perfection. Please enjoy. </p>
        <h2>WHY?</h2>
        <p>What started as a joke about some heated wordle competition developed into a months long, multi language project. 
          A lot of care was put into each page, so please hover and click away on graphs and buttons. </p>
        <h2>WHERE?</h2>
        <p>This website is hosted through GitHub and CloudFlare Pages. Please please please mister web scraper, do 
          not my webzone, I want to keep hosting for free. Theres only so many workers requests to go around.
        </p>
        <h2>HOW?</h2>
        <p>The most difficult question. While the project did not start or end development in this order, 
          I will go over how each component of the site runs every month.
        </p>

        <h3>DISCORD</h3>
        <p>When you play wordle on discord, the all powerful discord bot tracks your progress. On the next day,
          an automated bot message is put in chat with the results of each player who fisnished. This data is the 
          core of this website. A CLI (Command Line Interface) program is run which, using my discord authentification, 
          exports the entierty of our chat history in the wordlers group chat. This data is scraped, and turned into a list
          of results messages from the bot. In those messages, the players are found, scores are recorded, and a dictionary of each player, result 
          and day is made. For any given month, the dictionary is converted to a dataframe, of only that months results.
        </p>
        <h3>PYTHON</h3>
        <p>Given a dataframe of this months results. A python function calculates stats for each player. The number of days 
          missed. The mean, median, and mode. Variance and relative variance to other players. This information, along with the 
          monthly dataframe, is stored in excel files to be refrenced on later months. After this, a series of export functions 
          are ran which, line by line, output JavaScript code which will be used in the website. This includes the data for 
          awards, graph data, and table data.
        </p>
        <h3>JSX</h3>
        <p>The website uses are React + Vite frameword, and the MUI and MUIX library was used in rendering graphs, tables, and buttons. 
          These components would import data objects exported from the python script. Each page loades from a react router, 
          allowing for new pages to be added using existing functions. On a months page, one of three subpages are rendered 
          based on the #subpage in the url. </p>
        <h3>HTML & CSS</h3>
        <p>To account for small screens, like the humble mobile phones, the site was made to handle a vertical aspect ratio. 
          Many of the buttons, tables, and headers have unique styling on mobile. While the site is usable on phones, 
          the best viewing experience can be found on your desktop.</p>
        
        <h2>WHEN?</h2>
        <p>Because of all the hard work that went into the code, updating this site is a mostly automated process. 
          Hopefully, I will keep up the motivation to update this monthly. 
          At the end of the year, if I still care about wordle, 
          I hope to create a year-in-review as a send off to the site :3</p>
        <hr color='#3a3a3c' height='1px' width='50%'/>
        <a href="/">HOME</a>
      </div>
    </div>
  );
}

export default Info;