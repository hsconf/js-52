import Card from './Card';

export default class CardDeck {
    public cards: Card[] = [];

    private ranks: string[] = [
        "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"
    ];

    private suits: string[] = ["diams", "hearts", "clubs", "spades"];

    constructor() {
        this.createDeck();
    }

    private createDeck(): void {
        for (let suit of this.suits) {
            for (let rank of this.ranks) {
                this.cards.push(new Card(rank, suit));
            }
        }
    }

    public getCard(): Card {
        const randomIndex = Math.floor(Math.random() * this.cards.length);
        return this.cards.splice(randomIndex, 1)[0];
    }

    public getCards(howMany: number): Card[] {
        const drawnCards: Card[] = [];
        for (let i = 0; i < howMany; i++) {
            if (this.cards.length === 0) {
                throw new Error("No more cards in the deck");
            }
            drawnCards.push(this.getCard());
        }
        return drawnCards;
    }
}
