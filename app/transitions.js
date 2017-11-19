export default function(){
  this.transition(
    this.fromRoute('about.experience'),
    this.fromRoute('about.education'),
    this.toRoute('about.education'),
    this.toRoute('about.accomplishments'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
