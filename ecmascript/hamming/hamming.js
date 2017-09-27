export default class Hamming {
  compute(strandA, strandB) {
    if (strandA.length !== strandB.length) {
      throw new Error('DNA strands must be of equal length.');
    }
    const unmatchedList = strandA.split('').filter((nuc, i) => nuc !== strandB[i]);
    return unmatchedList.length;
  }
}

