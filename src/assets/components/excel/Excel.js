import {$} from '../../../core/dom';

export class Excel {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.components = options.components || [];
  }

  getRoot() {
    const $root = $.create('div', 'excel');
    // const $root = document.createElement('div');
    // $root.classList.add('excel');
        
    this.components.forEach(Component => {
      const $div = $.create('div', Component.className);
      // const $div = document.createElement('div');
      // $div.classList.add(Component.className);
      const component = new Component($div);
      $div.innerHTML = component.toHTML();
      $root.append( $div);
    });
    return $root;
  }

  render() {
    this.$el.append(this.getRoot());
  }
}
