function oscars(input) {
    let actorName = input[0];
    let academyPoints = Number(input[1]);
    let judgesCount = Number(input[2]);

    for (let i = 3; i < judgesCount; i += 2) {
        let judgeName = input[i];
        let judgePoints = Number(input[i+1]);

        let result = judgeName.length * judgePoints / 2;
        academyPoints += result;

        if (academyPoints > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${academyPoints}!`);
            return;
        } 
    }
    let pointsNeeded = Math.ceil(1250.5 - academyPoints);
    console.log(`Sorry, ${actorName} you need ${pointsNeeded.toFixed(1)} more!`);
}

oscars(["Sandra Bullock","340","5","Robert De Niro","50","Julia Roberts","40.5","Daniel Day-Lewis","39.4","Nicolas Cage","29.9","Stoyanka Mutafova","33"]);