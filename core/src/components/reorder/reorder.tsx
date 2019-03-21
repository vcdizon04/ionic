import { Component, ComponentInterface, Listen } from '@stencil/core';

import { Mode } from '../../interface';

@Component({
  tag: 'ion-reorder',
  styleUrls: {
    ios: 'reorder.ios.scss',
    md: 'reorder.md.scss',
  },
  shadow: true
})
export class Reorder implements ComponentInterface {

  mode!: Mode;

  @Listen('click', { capture: true })
  onClick(ev: Event) {
    ev.preventDefault();
    ev.stopImmediatePropagation();
  }

  hostData() {
    return {
      class: {
        [`reorder`]: true,
        [`reorder-${this.mode}`]: true,
      }
    };
  }

  render() {
    return (
      <slot>
        <ion-icon name="reorder" lazy={false} class="reorder-icon" />
      </slot>
    );
  }

}
