class FoodRatings {
    constructor(foods, cuisines, ratings) {
        this.cuisines = new Map();
        this.foods = new Map();

        for (let i = 0; i < cuisines.length; i += 1) {
            const cuisine = cuisines[i];
            const food = foods[i];
            const rating = ratings[i];

            if (!(this.cuisines.has(cuisine))){
                this.cuisines.set(cuisine, new MaxHeap([], comp))
            }

            this.cuisines.get(cuisine).enqueue({ food, rating });
            this.foods.set(food, cuisine);
        }
    }

    changeRating(food, newRating) {
        const cuisineKey = this.foods.get(food);
        const cuisineHeap = this.cuisines.get(cuisineKey);
        cuisineHeap.update(food, newRating);
    }

    highestRated(cuisine) {
        return this.cuisines.get(cuisine).peek();
    }
}

const comp = (a, b) => {
    if (a.rating === b.rating) {
        return a.food < b.food;
    } else {
        return a.rating > b.rating;
    }
}

class MaxHeap {
    constructor(array, comp) {
        this.comp = comp;
        this.items = this.heapify(array);
        this.foodMap = new Map();

        for (let i = 0; i < this.items.length; i += 1) {
            const { food, rating } = this.items[i];
            this.foodMap.set(food, i);
        }
    }

    heapify(array) {
        const firstParentIdx = Math.floor((array.length - 2) / 2);

        for (let i = firstParentIdx; i >= 0; i -= 1) {
            this.siftDown(i, array.length - 1, array);
        }

        return array;
    }

    siftDown(idx, endIdx, heap) {
        let c1 = idx * 2 + 1;

        while (c1 <= endIdx) {
            const c2 = idx * 2 + 2;
            const idxToSwap = c2 <= endIdx && this.comp(heap[c2], heap[c1]) ? c2 : c1;

            if (this.comp(heap[idxToSwap], heap[idx])) {
                this.swap(idx, idxToSwap, heap);
                idx = idxToSwap;
                c1 = idx * 2 + 1;
            } else {
                return;
            }
        }
    }

    dequeue() {
        this.swap(0, this.items.length - 1, this.items);
        const ele = this.items.pop();
        const { food, rating } = ele;
        this.foodMap.delete(food);
        this.siftDown(0, this.items.length - 1, this.items);
        return ele;
    }

    siftUp(idx, heap) {
        let parentIdx = Math.floor((idx - 1) / 2);

        while (idx > 0 && this.comp(heap[idx], heap[parentIdx])) {
            this.swap(idx, parentIdx, heap);
            idx = parentIdx;
            parentIdx = Math.floor((idx - 1) / 2);
        }
    }

    enqueue(ele) {
        this.items.push(ele);
        const { food, rating } = ele;
        this.foodMap.set(food, this.items.length - 1);
        this.siftUp(this.items.length - 1, this.items);
    }

    update(food, newRating) {
        const idx = this.foodMap.get(food);
        const ele = this.items[idx];
        const oldRating = ele.rating;
        ele.rating = newRating;

        if (this.comp({ food, rating: newRating }, { food, rating: oldRating })) {
            this.siftUp(idx, this.items);
        } else {
            this.siftDown(idx, this.items.length - 1, this.items);
        }
    }

    swap(i, j, heap) {
        this.foodMap.set(heap[i].food, j);
        this.foodMap.set(heap[j].food, i);
        const temp = heap[i];
        heap[i] = heap[j];
        heap[j] = temp;
    }

    peek() {
        return this.items[0].food;
    }
}