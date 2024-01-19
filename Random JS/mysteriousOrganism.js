// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase())
    }
    return newStrand
}

// Factory function for creating pAequor instances
const pAequorFactory = (specimenNum, dna) => {
    return {
        specimenNum: specimenNum,
        dna: dna,
        // Method to randomly mutate one base in the DNA
        mutate() {
            const randomIndex = Math.floor(Math.random() * this.dna.length);
            let currentBase = this.dna[randomIndex];
            do {
                currentBase = this.randomBase();
            } while (currentBase === this.dna[randomIndex]);
            this.dna[randomIndex] = currentBase;
            return this.dna;
        },
        // Method to compare DNA similarity with another organism
        compareDNA(otherOrganism) {
            const matchingBases = this.dna.filter((base, index) => base === otherOrganism.dna[index]);
            const similarity = (matchingBases.length / this.dna.length) * 100;
            return `Specimen #${this.specimenNum} and Specimen #${otherOrganism.specimenNum} have ${similarity.toFixed(2)}% DNA in common.`;
        },
        // Method to check if the organism is likely to survive
        willLikelySurvive() {
            const cgCount = this.dna.filter(base => base === 'C' || base === 'G').length;
            const cgPercentage = (cgCount / this.dna.length) * 100;
            return cgPercentage >= 60;
        },
        // Helper method to return a random DNA base
        randomBase() {
            const bases = ['A', 'T', 'C', 'G'];
            return bases[Math.floor(Math.random() * bases.length)];
        },
    };
};

// Example usage:
const organism1 = pAequorFactory(1, ['A', 'C', 'T', 'G', 'A', 'C', 'T', 'G', 'A', 'C', 'T', 'G', 'A', 'C', 'T']);
const organism2 = pAequorFactory(2, ['A', 'T', 'C', 'G', 'A', 'T', 'C', 'G', 'A', 'T', 'C', 'G', 'A', 'T', 'C']);

console.log(organism1);
console.log(organism2);

console.log(organism1.mutate());
console.log(organism2.mutate());

console.log(organism1.compareDNA(organism2));

console.log(organism1.willLikelySurvive());
console.log(organism2.willLikelySurvive());

// Function to create 30 surviving instances
const create30SurvivingInstances = () => {
    const survivingInstances = [];
    let specimenNum = 1;

    while (survivingInstances.length < 30) {
        const newOrganism = pAequorFactory(specimenNum, generateRandomDNA());
        if (newOrganism.willLikelySurvive()) {
            survivingInstances.push(newOrganism);
            specimenNum++;
        }
    }

    return survivingInstances;
};

// Function to generate a random DNA array
const generateRandomDNA = () => {
    const bases = ['A', 'T', 'C', 'G'];
    return Array.from({ length: 15 }, () => bases[Math.floor(Math.random() * bases.length)]);
};

// Create 30 surviving instances and log the array of instances
const survivingInstancesArray = create30SurvivingInstances();
console.log(survivingInstancesArray);
