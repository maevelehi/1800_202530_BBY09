# Fliplt

## Overview

FlipIt is a collaborative mobile flashcard app designed to help students memorize and retain information more effectively in a fast-paced academic world. It directly tackles common student challenges such as exam anxiety and inefficient study routines by enabling shared flashcard sets and offering flexible creation methods—both manual input and bulk CSV uploads.

Beyond content creation, FlipIt is a comprehensive study companion that tracks user engagement and progress. It provides actionable feedback through daily performance summaries and habit tracking, while built-in gamification elements like motivational prompts encourage consistent use. By seamlessly blending shared knowledge resources with interactive study tools and performance analytics, FlipIt equips students with a smarter, more strategic approach to learning—reducing stress and improving long-term knowledge retention.

---

## Features

- Create Flashcards: Add flashcards manually or upload multiple cards using a CSV file.

- Group Sharing: Share flashcards within your group so members can study together.

- Progress Tracking: Track daily flip counts and compare today’s progress with yesterday’s performance.

- Streak System & Encouragement: Maintain study streaks and receive motivational messages based on your consistency.

- Mobile-First UI: Designed with a mobile-first layout for convenient studying anytime, anywhere.

---

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Build Tool**: Vite
- **Backend**: Firebase for hosting
- **Database**: Firestore
- **Collaboration**: Github, Trello, Instagram, Figma

---

## Usage

### 1. Log in/Register/Log out

- Open your browser and visit (e.g. https://flipit-b1370.web.app/)

- Click "Login / Signup" (If you already have an account, enter your username and password to log in. If you don't have an account, click "Signup" to register a new one).

### 2. Create user profiles

- After logging in, fill in your personal information (nickname/school/profile picture/etc.).

- Save the data to complete the account setup.

### 3. Use the main functions

#### a. Add a Flashcard:

- 1st option: add by manually
  enter the question and answer.
  Select a topic and chapter.
  Click "Save".
  The new card will appear immediately on the Home Page.

- 2nd option: Add by CSV (Batch Import)
  click "Add by CSV"
  Upload a CSV file containing question, answer, topic, and chapter.
  The system will quickly generate multiple cards at once.

#### b. Filtering Cards

- You can filter flashcards on the Home Page by selecting:
  Topic and Chapter

- Only cards that match your selected criteria will be displayed.

#### c. Flashcard Actions

- Flip a Card: Click the "Flip" button to reveal the answer.

- Delete a Card: Click the "Delete" icon to remove the card from your collection.

#### d. View Your Learning Progress

Go to the Progress page

- A chart displays how many times you flipped cards each day.

- The system compares today’s flip count with your daily average.

- The displayed image changes based on how consistently you study over time, helping motivate your learning habit.

## Project Structure

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
|   ├──addcard.js
|   ├──app.js
|   ├──authentication.js
|   ├──create-card.js
|   ├──csvUpload.js
|   ├──deck.js
|   ├──firebaseConfig.js
|   ├──home.js
|   ├──loginSignup.js
|   ├──main.js
|   ├──profile.js
|   ├──progress-tracking.js
|   ├──searchFilter.js
|   └──utils.js
├── .env
├── .env_template
├── .gitignore
├── create-card.html
├── home.html
├── index.html
├── login.html
├── profile.html
├── progress-tracking.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

---

## Contributor

- **Eric** - Backend development and Firebase database design.

- **Arjun** - Frontend component development.

- **Maeve** - Frontend design and backend refinement.

- **Arjun and Maeve and Eric** participated in cross-end discussions and code reviews.

## Acknowledgments

- Flashcard content and sample data are for demonstration purposes only.
- Some of cade are from [bootstrap](https://getbootstrap.com/)
- UI icons sourced from [FontAwesome](https://icon-icons.com/zh/) and images were obtained through Google Search .
- Special thanks to our client Carly for her valuable feedback and guidance throughout the development process.
- Built using Firebase for backend services and hosting.
- Team collaboration managed via Trello and GitHub.

---

## Limitations and Future Work

### Limitations

- Chapter Capacity: Each topic is restricted to a maximum of 10 chapters, which may not be sufficient for subjects with extensive curricula.
- Fixed Subject Offerings: The app currently only supports six predefined subjects for the current semester, limiting its immediate usability for students in other disciplines or academic terms.
- The flip button doesn't actually produce the desired effect.

### Future Work

- Finalize UI styling and animations for a cohesive user experience.
- Enhance progress tracking visualization with detailed analytics.
- Expand flashcard sharing and collaboration features.

---

## License

This project is developed for Comp1800 at BCIT.
