export default function(){
  this.transition(
    this.fromRoute('experience'),
    this.fromRoute('education'),
    this.toRoute('education'),
    this.toRoute('accomplishments'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
