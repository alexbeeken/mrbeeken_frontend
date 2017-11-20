export default function(){
  this.transition(
    this.fromRoute('experience'),
    this.fromRoute('education'),
    this.toRoute('education'),
    this.toRoute('activities'),
    this.use('toLeft', { duration: 300 }),
    this.reverse('toRight', { duration: 300 })
  );
}
