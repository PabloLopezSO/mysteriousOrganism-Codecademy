// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (numDNA, arrDNA) => {
  return {
    specimenNum: numDNA,
    dna: arrDNA,
    mutate() {
      console.log(this.dna);
      const dnaBases = ["A", "T", "C", "G"];
      var randIndex = Math.floor(Math.random() * this.dna.length);
      var indexDNA = this.dna[randIndex];
      console.log(indexDNA);
      var newBases = dnaBases.splice(dnaBases.indexOf(indexDNA), 1);
      console.log(newBases);
      console.log(dnaBases);
      var newBase = dnaBases[Math.floor(Math.random() * dnaBases.length)];
      console.log(newBase);
      var mutatedDNA = this.dna.splice(randIndex, 1, newBase);
      return this.dna;
    },
    compareDNA(pAequor) {
      var count = 0;
      for (var i = 0; i < this.dna.length; i++) {
        if (this.dna[i] == pAequor.dna[i]) {
          count++;
        }
      }
      var result = (count / this.dna.length) * 100;
      var decimal = result.toFixed(2);
      //console.log("specimen #" + this.specimenNum +  " and specimen #" + pAequor.specimenNum + " have " + decimal + "%" + " DNA in common");
    },
    willLikelySurvive() {
      var baseCG = this.dna.filter(
        (letter) => letter === "C" || letter === "G"
      );

      if (baseCG.length / this.dna.length > 0.6) {
        return true;
      } else {
        return false;
      }
    },
  };
};
var sampleArr = [];
var sampleID = 0;
while (sampleArr.length < 30) {
  var sampleInstance = pAequorFactory(sampleID, mockUpStrand());
  if (sampleInstance.willLikelySurvive() == true) {
    sampleArr.push(sampleInstance);
    sampleID++;
  }
}
console.log(sampleArr);
