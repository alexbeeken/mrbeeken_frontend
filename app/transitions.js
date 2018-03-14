export default function(){
  this.transition(
    this.hasClass('show-menu'),
    this.toValue(true),
    this.use('toRight', { duration: 250 }),
    this.reverse('toLeft',  { duration: 250 })
  );
  this.transition(
    this.toRoute('register'),
    this.use('toLeft', { duration: 250 })
  );
  this.transition(
    this.toRoute('dashboard'),
    this.fromRoute('login'),
    this.use('toLeft', { duration: 250 })
  );
  this.transition(
    this.fromRoute('dashboard'),
    this.toRoute('unit-item'),
    this.use('toLeft', { duration: 250 })
  );
  this.transition(
    this.hasClass('unit-item-show-title'),
    this.toValue(true),
    this.use('toLeft', { duration: 250 })
  );
}
