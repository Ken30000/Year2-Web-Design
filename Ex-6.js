function count_vote(votes) {
    if (votes.length === 0) {
        return "There is not vote yet";
    }

    let count = {};
    for (let i = 0; i < votes.length; i++) {
        if (votes[i] in count) {
            count[votes[i]] += 1;
        } else {
            count[votes[i]] = 1;
        }
    }

    let maxVotes = 0;
    for (let key in count) {
        if (count[key] > maxVotes) {
            maxVotes = count[key];
        }
    }

    let winners = [];
    for (let key in count) {
        if (count[key] === maxVotes) {
            winners.push(key);
        }
    }
    winners.sort();

    if (winners.length === 1) {
        return `${winners[0]} is the winner`;
    } else if (winners.length === 2) {
        return `${winners[0]} and ${winners[1]} are both winners`;
    } else {
        return `${winners.join(", ")} are all winners`;
    }
}

console.log(count_vote(["A", "B", "A", "C", "A"]));
console.log(count_vote(["A", "B", "B", "C", "A"]));
console.log(count_vote([]));