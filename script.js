/* General Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
    color: #333;
    line-height: 1.6;
}

/* Header */
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #e23744;
    color: white;
}

.logo img {
    height: 45px; /* adjusted to look better */
    width: auto;
}

header ul {
    display: flex;
    list-style: none;
}

header ul li {
    margin-left: 20px;
}

header ul li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;
}

header ul li a:hover {
    color: #ffd700;
}

/* Main Section */
main {
    padding: 0;
}

/* Hero Section (First Section) */
main section:first-of-type {
    background: url('/img/bg.png') no-repeat center center/cover;
    color: white;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 40px 20px;
}

main section:first-of-type img {
    display: none; /* Remove if you're now using background-image instead */
}

main section:first-of-type p {
    font-size: 2rem;
    margin: 20px 0;
    font-weight: bold;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
}

main section:first-of-type input {
    padding: 12px 16px;
    width: 80%;
    max-width: 400px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    outline: none;
}

/* Second Section (Food Delivery Info) */
main section:nth-of-type(2) {
    background-color: #fff;
    padding: 50px 20px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    color: #333;
    text-align: center;
}

main section:nth-of-type(2) h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #e23744;
}

main section:nth-of-type(2) p {
    font-size: 1.1rem;
    margin-bottom: 30px;
}

/* Features Container */
.main-features {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
}

.feature {
    background-color: #e23744;
    color: white;
    width: 260px;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
    text-align: left;
}

.feature h3 {
    font-size: 20px;
    margin-bottom: 10px;
}

.feature p {
    font-size: 15px;
}

/* Footer */
footer {
    background-color: #e23744;
    color: white;
    text-align: center;
    padding: 20px;
    margin-top: 50px;
    width: 100%;
    font-size: 0.9rem;
}
