/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    const dequeue = [];
    deck.sort((a,b) => a-b);

    dequeue.unshift(deck[deck.length-1]);
    
    for(let i=deck.length-2;i>=0;i--) {
        dequeue.unshift(dequeue.pop());
        dequeue.unshift(deck[i]);
    }

    return dequeue;
};