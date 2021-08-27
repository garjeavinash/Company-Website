/Set the font-family Serif as default for webpage/

body {
    font-family: Serif, Arial;
    margin: 0;
    width: 100%;
    /font-size:1em;/
}

/Setting Font Sizes/

h1 {
    font-size: 5em;
}

h2 {
    font-size: 3.5em;
}

h3 {
    font-size: 2.7em;
}

h4 {
    font-size: 1.8em;
}

.shout {
    font-size: 2em;
    font-family: cursive;
    font-weight: bolder;
    font-style: italic;
}

.navbar a {
    font-size: 1.1em;
}

/Landing Page styling/

.frame {
    width: 100%;
    height: 60rem;
}

.picture_main {
    background-image: url("https://github.com/99Ace/Assignment1-Car-Website/blob/master/image/car-snow.jpg?raw=true");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 65% 70%;
    width: 100%;
    height: 65%;
    margin: 1% 0 0;
}

/quote form styling/

.quote-frame {
    width: 30%;
    height: 100%;
}

.quote {
    height: 100%;
    width: 100%;
    /font-size:0.8em;/
}

.form-title {
    font-size: 1.8em;
    font-weight: bold;
    /font-family: San-serif;/
    /text-shadow: 2px 2px 4px #000000;/
}

.input {
    width: 100%;
    margin-top: 2%;
}

/HEADER : setting the positions/

.header-main1 {
    padding-left: 17%;
}

.header-main2 {
    padding-left: 20%;
}

/About Us page styling/

.write-up-box {
    width: 70%;
    margin: 5% 15% auto;
}

.write-up {
    font-size: 1.8em;
    /width:100%;/
    padding: 5%;
}

/Sellcar page styling/

#sellcar {
    background-image: url("https://github.com/99Ace/Assignment1-Car-Website/blob/master/image/car-row.jpg?raw=true");
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    padding: 5%;
    margin: 0;
}

.sell-car-header {
    width: 100%;
    margin-top: 3%;
}

.rectangle {
    width: 25%;
    min-height: 25rem;
    font-size: 1.5em;
    text-align: center;
    padding: 2% 1%;
    margin: 2%;
}

.button-sell {
    padding: 1% 2%;
    font-size: 1em;
    margin-bottom: 2%;
}

.rectangle span {
    font-size: 1.2em;
}

.rectangle:hover {
    background-color: rgba(0, 0, 0, 1);
}

/End of Sellcar page styling/

/Buycar page styling/

#buycar {
    width: 100%;
    height: 32rem;
}

.buycar-frame {
    background-image: url("https://github.com/99Ace/Assignment1-Car-Website/blob/master/image/suv-back.jpg?raw=true");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0% 65%;
    width: 100%;
    height: 100%;
    margin: 1% 0 0;
}

.header-buycar1 {
    padding: 3% 0 0 5%;
    margin: 0;
}

.header-buycar2 {
    padding: 0 0 0 15%;
    margin: 0;
}

.header-buycar3 {
    padding: 0 0 2% 10%;
    margin: 0;
}

.search-box {
    width: 50%;
    height: 45px;
    text-align: center;
    margin-left: 5%;
}

.search-box2 {
    width: 100%;
    height: 42px;
    font-size: 12pt;
    color: rgb(127, 127, 127);
    padding: 6px 20px 6px 16%;
}


/Car Listing Styling/

.listing th,
.listing td {
    padding: 0.2%;
    border: none;
}

.car-image-frame {
    width: 100px;
    margin: 5%;
}

.car-image {
    height: 75%;
}

/Contact Us page styling/

#contact-us {
    width: 100%;
    height: 100%;
    padding: 3% 10%;
}

#contact-text-frame {
    width: 100%;
    height: 80%;
    padding: 0.5%;
}

#contact-text-textbox {
    width: 100%;
    height: 100%;
    padding: 1%;
}

.map-image {
    height: 90%;
    width: 90%;
}

#contact-text-textbox a {
    text-decoration: none;
    font-size: 1em;
    color: white;
}

.square-large {
    width: 100%;
    height: 20%;
    padding: 0;
    margin: 0;
}

.square-med {
    height: 100%;
    width: 25%;
}

.square-med img {
    width: 100%;
    padding: 10% 10% 0;
    opacity: 0.6;
    transition: opacity 0.5s;
}

.square-med img:hover {
    opacity: 1;
}

/End of Contact Us page styling/

/Social Media : Extract from W3School/

.fa {
    padding: 15px;
    font-size: 60px;
    width: 50px;
    text-align: center;
    text-decoration: none;
}

.fa:hover {
    opacity: 0.8;
}

.fa-facebook {
    background: #3B5998;
    color: white;
}

.fa-google {
    background: #dd4b39;
    color: white;
}

.fa-linkedin {
    background: #007bb5;
    color: white;
}

.fa-instagram {
    background: #125688;
    color: white;
}

/Pre-fix decorations/

.red {
    color: #FF2D2D;
}

.blue {
    color: #007bff;
}

.white {
    color: white;
}

.gold {
    color: #FFC107;
}

.gray {
    color: rgb(90, 90, 110);
}

.b-white {
    background-color: white;
}

.b-gray {
    background-color: rgba(50, 50, 50, 1);
}

.b-l-gray {
    background-color: rgba(0, 0, 0, 0.5);
}

.b-p-gray {
    background-color: rgba(0, 0, 0, 0.8);
}

.b-gold {
    background-color: rgb(239, 235, 40);
}

.circle {
    width: 12.5rem;
    height: 12.5rem;
    border-radius: 50%;
}


@media screen and (max-width:1440px) {
    h1 {
        font-size: 4.3em;
    }
    h2 {
        font-size: 3.3em;
    }
    h3 {
        font-size: 2.2em;
    }
    .shout {
        font-size: 2.3em;
        font-family: cursive;
        font-weight: bolder;
        font-style: italic;
    }
    /Landing Page styling/
    .frame {
        width: 100%;
        height: 50rem;
    }
    .picture_main {
        background-image: url("https://github.com/99Ace/Assignment1-Car-Website/blob/master/image/car-snow.jpg?raw=true");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 65% 70%;
        width: 100%;
        height: 65%;
        margin: 1% 0 0;
    }
    /quote form styling/
    .quote-frame {
        width: 30%;
        height: 100%;
    }
    .quote {
        height: 100%;
        width: 100%;
        /font-size:0.8em;/
    }
    .form-title {
        font-size: 1.8em;
        font-weight: bold;
    }
    .write-up-box {
        width: 70%;
        margin: 10% 15% auto;
    }
    .write-up {
        font-size: 1.5em;
        padding: 5%;
    }
    .listing th,
    .listing td {
        font-size: 0.9em;
    }
}

@media screen and (max-width:1024px) {
    h2 {
        font-size: 2.3em;
    }
    h3 {
        font-size: 1.8em;
    }
    .picture_main {
        background-position: 68% 70%;
        height: 65%;
    }
    .write-up-box {
        width: 80%;
        margin: 5% 10% auto;
    }
    .write-up {
        font-size: 1.3em;
        padding: 5%;
    }
    .rectangle {
        width: 30%;
        margin: 1%;
    }
    #buycar {
        width: 100%;
        height: 28rem;
    }
    .buycar-frame {
        background-image: url("https://github.com/99Ace/Assignment1-Car-Website/blob/master/image/suv-back.jpg?raw=true");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 40% 50%;
        width: 100%;
        height: 100%;
        margin: 1% 0 0;
    }
    .header-buycar1 {
        padding: 8% 0 0 5%;
        margin: 0;
    }
    .search-box {
        width: 70%;
        height: 45px;
        text-align: center;
        margin-left: 3%;
        margin-top: 5%;
    }
    .circle {
        width: 10.5rem;
        height: 10.5rem;
        border-radius: 50%;
    }
    .listing th,
    .listing td {
        font-size: 0.7em;
    }
    .car-image {
        height: 55%;
        margin: 3%;
    }
}

@media screen and (max-width:768px) {
    h1 {
        font-size: 3.5em;
    }
    h2 {
        font-size: 2.3em;
    }
    h3 {
        font-size: 1.8em;
    }
    h4 {
        font-size: 1.3em;
    }
    .shout {
        font-size: 2em;
        font-family: cursive;
        font-weight: bolder;
        font-style: italic;
    }
    .picture_main {
        background-image: url("https://github.com/99Ace/Assignment1-Car-Website/blob/master/image/car-snow.jpg?raw=true");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 68% 70%;
        width: 100%;
        height: 28rem;
        margin: 1% 0 0;
    }
    .frame {
        width: 100%;
        height: 40rem;
    }
    .write-up-box {
        width: 90%;
        margin: 5%;
    }
    .write-up {
        font-size: 1.2em;
    }
    .rectangle {
        background-color: rgba(50, 50, 50, 1);
        color: white;
    }
    .header-buycar1 {
        padding: 8% 0 0 5%;
        margin: 0;
    }
    .search-box {
        width: 98%;
        height: 45px;
        text-align: center;
        margin: 10% 1% 0;

    }
    .listing th,
    .listing td {
        font-size: 0.5em;
    }
    .car-image {
        height: 38%;
        margin: 3%;
    }
    /Background for social media tags/
    .fa {
        padding: 10px;
        font-size: 60px;
        width: 40px;
        text-align: center;
        text-decoration: none;
    }

}

@media screen and (max-width:767px) {
    h1 {
        font-size: 1.8em;
    }
    h2 {
        font-size: 1.4em;
    }
    h3 {
        font-size: 1em;
    }
    h4 {
        font-size: 0.8em;
    }

    .shout {
        font-size: 1.3em;
        font-family: cursive;
        font-weight: bolder;
        font-style: italic;
    }
    .form-title {
        font-size: 1.4em;
    }
    .frame {
        width: 100%;
        height: 40rem;
    }
    .picture_main {
        background-image: url("https://github.com/99Ace/Assignment1-Car-Website/blob/master/image/car-snow.jpg?raw=true");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 65% 70%;
        width: 100%;
        height: 12.5rem;
    }
    .write-up-box {
        width: 90%;
        margin: 35% 5% 0;
    }
    .write-up {
        font-size: 1em;
        padding: 2%;
    }
    #sellcar {
        height: 20rem;
        padding-top: 10%;
        margin: 0;
    }
    .rectangle {
        width: 90%;
        min-height: 0;
        font-size: 0.8em;
        text-align: left;
        padding: 2% 5%;
        margin-top: 1%;
        background-color: rgba(50, 50, 50, 1);
        color: white;
    }
    .rectangle p {
        margin: 0;
    }
    .button-sell {
        padding: 1% 2%;
        margin-bottom: 2px;
    }
    #buycar {
        width: 100%;
        height: 23rem;
    }
    .buycar-frame {
        background-image: url("https://github.com/99Ace/Assignment1-Car-Website/blob/master/image/suv-back.jpg?raw=true");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 80% 50%;
        width: 100%;
        height: 30%;
        margin: 1% 0 0;
    }
    .header-buycar1 {
        padding: 1% 0 0 5%;
        margin: 0;
    }
    .search-box {
        width: 100%;
        height: 45px;
        text-align: center;
        margin: 0;

    }
    #contact-us {
        padding: 3% 0%;
    }
    #contact-text-frame {
        padding: 2%;
    }
    .testimonial p {
        font-size: 0.8em;
    }
    .circle {
        width: 8.5rem;
        height: 8.5rem;
        border-radius: 50%;
    }
}