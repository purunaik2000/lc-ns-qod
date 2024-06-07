/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
    const trie = new Trie();
    for(const root of dictionary) trie.add(root);
    return sentence.split(" ").map(word => trie.get(word)).join(" ");
};

class Trie {
    constructor() {
        this.map = new Map();
        this.isWord = false;
    }

    add(root) {
        let trie = this, next;
        for(const c of root) {
            if(trie.isWord) return;
            next = trie.map.get(c) || new Trie();
            trie.map.set(c, next);
            trie = next;
        }
        trie.isWord = true;
    }

    get(word) {
        let root = "", trie = this;
        for(const c of word) {
            if(trie.isWord) return root;
            if(!trie.map.has(c)) return word;
            root += c;
            trie = trie.map.get(c);
        }
        return word;
    }
}