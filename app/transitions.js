export default function(){
  this.transition(
    this.fromRoute('experience'),
    this.fromRoute('education'),
    this.toRoute('education'),
    this.toRoute('activities'),
    this.use('toLeft', { duration: 300 }),
    this.reverse('toRight', { duration: 300 })
  );

  this.transition(
    this.fromRoute('activities.conferences'),
    this.fromRoute('activities.monolake'),
    this.toRoute('activities.monolake'),
    this.toRoute('activities.mrbeeken'),
    this.use('toUp', { duration: 300 }),
    this.reverse('toDown', { duration: 300 })
  );
}
