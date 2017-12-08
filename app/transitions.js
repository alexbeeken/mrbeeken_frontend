export default function(){
  this.transition(
    this.hasClass("show-menu"),
    this.toValue(true),
    this.use('toRight'),
    this.reverse('toLeft')
  )
  this.transition(
    this.hasClass("hide-menu"),
    this.toValue(true),
    this.use('crossFade'),
    this.reverse('crossFade')
  )
}
