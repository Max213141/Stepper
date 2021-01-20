// вы можете как угодно изменять программу и код
// добавлять любые переменные и модели
// ваша задача реализовать так, как показано на видео, чтобы оно работало

const App = {
  data() {
    return {
      forwardButton: 'Вперед',
      activeButton: true,
      activeIndex: 0, // то, что позволяет определить текущий активный шаг
      steps: [
        {title: 'Основы', text: 'В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберем всю базу фреймворка.'},
        {title: 'Компоненты', text: 'Один из самых важных блоков в курсе, где вы узнаете все о компонентах. В блоке мы напишем 2 разных приложения и создадим более 5 различных UI компонентов как в реальной разработке. Блок расскажет про абсолютно все составляющие, которые есть в компонентах: взаимодействие, slots, асинхронные и динамические компоненты и тонна примеров.'},
        {title: 'Роутер', text: 'В данном блоке вы узнаете все о том, как работает мультиязычность во Vue. Мы создадим миниклон Gmail в данном блоке, где вы на практике увидите как работать с динамическим роутером.'},
        {title: 'Vuex', text: 'В блоке вы узнаете абсолютно все про Vuex. Вы узнаете как работать с данными, какие есть лучшие практики по их программированию и структурированию. Все на практике.'},
        {title: 'Composition', text: 'Одним из наиболее важных обновлений в Vue 3 является появление альтернативного синтаксиса Composition API. В этом блоке вы узнаете все, чтобы полностью пользоваться данными синтаксисом на практических примерах. Помимо этого вы узнаете как работать совместно с Vue Router и Vuex.'},
        {title: 'Composition', text: ':з'},
      ]
    }
  },
  methods: {
    setActive(i){
      return this.activeIndex=i
    },
    prev() {
      if(this.activeIndex !== 0){
        this.activeIndex -= 1
        console.log('<=')
      }
      // когда нажимаем кнопку назад
    },
    currentStep(i) {
      if(this.activeIndex === i) {
        if (this.activeButton === true){
          return 'active'
        }
      } else if(this.activeIndex > i){
        return 'done'
      } else {
        return ''
      }
    },
    reset() {
        this.activeIndex=0
        this.forwardButton = 'Вперед'
        console.log('reset')
      // начать заново
    },
    nextOfFinish() {
      if(this.activeIndex !== this.steps.length-1) {
        this.activeIndex += 1
      }
      console.log('=>')
      // кнопка вперед или закончить
    },
    resetOrNext(){
      if(this.activeIndex == this.steps.length-1){
        this.reset()
      } else {this.nextOfFinish()}
    },



  },
  computed: {
    currentText(){
      return this.steps[this.activeIndex].text
    },
    finishButton(){
      if(this.activeIndex === this.steps.length-1) {
        this.forwardButton = 'Начать сначала'
        return 'Начать сначала'
        console.log('click')
      } else {
        return 'Вперед'
      }
    },



    // тут стоит определить несколько свойств:
    // 1. текущий выбранный шаг
    // 2. выключена ли кнопка назад
    // 3. находимся ли мы на последнем шаге
  }
}

Vue.createApp(App).mount('#app')