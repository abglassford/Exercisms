export default class Transcriptor {
  static convert(nucleotide) {
    switch (nucleotide) {
      case 'C': return 'G';
      case 'G': return 'C';
      case 'T': return 'A';
      case 'A': return 'U';
      default: throw new Error('Invalid input DNA.');
    }
  }

  toRna(strand) {
    return strand.split('').map(nucleotide => this.constructor.convert(nucleotide)).join('');
  }

}
