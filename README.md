# **JS Flashcards**

This is a website built to help students currently enrolled in dev30 study JavaScript topics covered throughout the course. Additionally, if you need practice using github, git, or creating pull requests you can add new flashcards and decks to the website.

## How to Add New Flashcards and Decks

- New flashcards can be added to the website by creating a pull request.
- All new flashcards and decks should be added to the `src/cardsData.js` file.
- New flashcards and decks should be added to the data array in the following format:

```JavaScript
{
    deckTitle: "<YOUR DECK TITLE>",
    cards: [
        {
            front: "<YOUR FLASHCARD FRONT>",
            back: {
                description: "<YOUR FLASHCARD DESCRIPTION>",
                extra_info: "<YOUR FLASHCARD EXTRA INFO>"
            }
        }
    ...]
}
```

- Example structure can be found in the `src/cardsData.js` file.
- Please refer to the [Creating a Pull Request to JS Flashcards](./creatingPullRequest.md) for more information.

## Contact Me

[Github](https://github.com/cmdarcy)
[LinkedIn](https://www.linkedin.com/in/christopher-d-arcy-618850112/)
[cmdarcy89@gmail.com](mailto:cmdarcy89@gmailcom)
