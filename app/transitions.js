export default function(){
  this.transition(
    this.hasClass("show-menu"),
    this.toValue(true),
    this.use('toRight', { duration: 250 }),
    this.reverse('toLeft',  { duration: 250 })
  )
}
