# Fliplt

## Overview

Elmo Hikes is a client-side JavaScript web application that helps users discover and explore hiking trails. The app displays a curated list of hike trails, each with details such as name, location, difficulty, and an image. Users can browse the list and mark their favorite trails for easy access later.

Developed for the COMP 1800 course, this project applies User-Centred Design practices and agile project management, and demonstrates integration with Firebase backend services for storing user favorites.


In today’s fast-paced academic environment, students often struggle to retain large volumes of course material. Our team, BBY09, is developing FlipIt, a mobile flashcard app designed to help students memorize and retain information more effectively. Many students face anxiety when preparing for exams, especially when they lack efficient study methods or time to organize learning materials.

FlipIt aims to address these challenges by making studying interactive, collaborative, and consistent. By allowing students to share flashcards within a set, users can learn from each other without needing to create every card themselves. This collaborative approach not only saves time but also enhances understanding by exposing students to multiple perspectives on the same topic.

FlipIt offers two convenient ways to create flashcards: users can either manually enter questions and answers or upload a CSV file containing multiple cards at once. This feature enables students to focus more on studying rather than spending excessive time creating their flashcards.
Our app also tracks study habits, showing users how many times they review cards daily and providing a 7-day performance summary. Users receive feedback on their progress compared to their weekly average, helping them identify areas that need more attention. To further motivate consistent study, FlipIt maintains streaks and delivers encouraging messages to keep users engaged.

By combining collaboration, interactive study tools, and performance tracking, FlipIt empowers students to study smarter, reduce anxiety, and retain knowledge more effectively.


---

## Features

- Browse a list of curated hiking trails with images and details
- Mark and unmark trails as favorites
- View a personalized list of favorite hikes
- Responsive design for desktop and mobile


Flexible Card Creation: Manual entry or CSV bulk upload
Collaborative Learning: Share flashcard sets within study groups
Progress Tracking: Monitor daily activity with day-over-day comparisons
Motivation System: Learning streaks with personalized encouragement
Mobile-First Design: Optimized interface for studying on the go
---

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Backend**: Firebase for hosting
- **Database**: Firestore
- **Collaboration**: Github, Trello, Instagram, Figma

---

## Usage

1. Open your browser and visit `http://localhost:3000`.
2. Browse the list of hiking trails displayed on the main page.
3. Click the heart icon (or similar) to mark a trail as a favorite.
4. View your favorite hikes in the favorites section.



---

## Project Structure

```
elmo-hikes/
├── src/
│   ├── main.js
├── styles/
│   └── style.css
├── public/
├── images/
├── index.html
├── package.json
├── README.md
```
```
1800_202530_BBY09/
├── public/
│   └── images/
│       ├── aladin.png
│       ├── graph.png
│       ├── login.jpg
│       ├── login2.jpg
│       ├── mountain.png
│       ├── profilePicture.png
│       ├── removeIcon.png
│       ├── research.png
│       ├── signup.jpg
│       ├── study.png
│       └── transparent-logo.png
├── src/
│   ├── components/
│   |   ├── site-footer.js
│   |   ├── site-navbar.js
│   |   └── site-navbarbefore.js
|   ├──styles/
│   |   ├── home.css
│   |   ├── index.css
│   |   ├── loginsignup.css
│   |   ├── profile.css
│   |   ├── progress-tracking.css
│   |   ├── style.css
│   |   └── topic.css
|   |── JS addcard.js
|   ├──JS app.js
|   ├──JS authentication.js
|   ├──JS create-card.js
|   ├──JS csvUpload.js
|   ├──JS deck.js
|   ├──JS firebaseConfig.js
|   ├──JS home.js
|   ├──JS loginSignup.js
|   ├──JS main.js
|   ├──JS profile.js
|   ├──JS progress-tracking.js
|   ├──JS searchFilter.js
|   ├──JS userprofilepicture.js
|   └──utils.js
├── .env
├── .env_template
├── .gitignore
├── create-card.html
├── home.html
├── index.html
├── login.html
├── package-lock.json
├── package.json
├── profile.html
├── progress-tracking.html
├── README.md
├── test4.csv
└── vite.config.js
```


---

## Contributors

- **Eric** - I’m a BCIT CST student with a passion for ballgames and solving problems. Fun fact: I have acrophobia, and my legs were shaking when I was at WildPlay.

- **Arjun** - BCIT CST Student with a passion for outdoor adventures and user-friendly applications. Fun fact: Likes sports like soccer and volleyball.

- **Maeve** - BCIT CST Student, Frontend enthusiast with a knack for creative design. Fun fact: Has a collection of over 50 houseplants.

- **Arjun and Maeve and Eric** - BCIT CST Student

## Acknowledgments

- Trail data and images are for demonstration purposes only.
- Code snippets were adapted from resources such as [Stack Overflow](https://stackoverflow.com/) and [MDN Web Docs](https://developer.mozilla.org/).
- Icons sourced from [FontAwesome](https://fontawesome.com/) and images from [Unsplash](https://unsplash.com/).

---

## Limitations and Future Work

### Limitations

- Limited trail details (e.g., no live trail conditions).
- Accessibility features can be further improved.

### Future Work

- Implement map view and trailhead directions.
- Add filtering and sorting options (e.g., by difficulty, distance).
- Create a dark mode for better usability in low-light conditions.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.
